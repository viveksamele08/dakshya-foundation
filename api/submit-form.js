// Vercel Serverless Function: /api/submit-form
// Accepts POSTed form data (urlencoded or JSON) and optionally creates a GitHub Issue
// Configure environment variables in Vercel:
// - GITHUB_TOKEN (personal access token)
// - GITHUB_ISSUE_REPO (owner/repo, e.g. viveksamele08/dakshya-foundation)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const contentType = (req.headers['content-type'] || '')
    .toLowerCase();

  let data = {};
  try {
    if (contentType.includes('application/json')) {
      data = req.body || {};
    } else {
      // read raw body
      const raw = await new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => (body += chunk));
        req.on('end', () => resolve(body));
        req.on('error', reject);
      });
      const params = new URLSearchParams(raw);
      for (const [k, v] of params.entries()) data[k] = v;
    }
  } catch (err) {
    console.error('body parse error', err);
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const formName = data['form-name'] || data.formName || data.form_name || 'unknown-form';

  // Minimal validation
  if (!formName) return res.status(400).json({ error: 'Missing form-name' });

  // Prepare content for persistence
  const title = `Form submission: ${formName}`;
  const bodyLines = [`**Received**: ${new Date().toISOString()}`, '', '**Payload**', ''];
  for (const k of Object.keys(data)) {
    if (k === 'form-name') continue;
    bodyLines.push(`- **${k}**: ${data[k]}`);
  }
  const issueBody = bodyLines.join('\n');

  // If GitHub credentials are configured, create an issue in the target repo
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_REPO = process.env.GITHUB_ISSUE_REPO; // owner/repo

  if (GITHUB_TOKEN && GITHUB_REPO) {
    try {
      const resp = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/issues`, {
        method: 'POST',
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
          'User-Agent': 'vercel-function',
          Accept: 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({ title: `${title}`, body: issueBody }),
      });

      if (!resp.ok) {
        const text = await resp.text();
        console.error('GitHub API error', resp.status, text);
        // still return success to client to avoid blocking UX
      } else {
        const issue = await resp.json();
        console.log('Created GitHub issue', issue.html_url);
      }
    } catch (err) {
      console.error('Failed to create GitHub issue', err);
    }
  } else {
    // Not configured for persistence; write to logs so you can view in Vercel dashboard
    console.log('Form submission received (no GitHub configured):', formName, data);
  }

  return res.status(200).json({ ok: true });
}
