#!/usr/bin/env node
import { SpeedInsights } from '@vercel/speed-insights';

// Usage: SITE_URL=https://your-site.vercel.app node tools/speed-insights.mjs
// Or: node tools/speed-insights.mjs https://your-site.vercel.app

const argUrl = process.argv[2];
const siteUrl = process.env.SITE_URL || argUrl;

if (!siteUrl) {
  console.error('Usage: SITE_URL=https://your-site.vercel.app node tools/speed-insights.mjs');
  process.exit(1);
}

async function run() {
  console.log('Running Speed Insights for', siteUrl);
  const si = new SpeedInsights();
  try {
    const results = await si.run({ url: siteUrl });
    // Print a compact summary
    const { lighthouseResult, originLoadingExperience } = results;
    const summary = {
      url: siteUrl,
      performance: lighthouseResult?.categories?.performance?.score ?? null,
      accessibility: lighthouseResult?.categories?.accessibility?.score ?? null,
      seo: lighthouseResult?.categories?.seo?.score ?? null,
      pwa: lighthouseResult?.categories?.pwa?.score ?? null,
    };
    console.log('Summary (0-1):', JSON.stringify(summary, null, 2));
    // Save full JSON
    const fs = await import('fs');
    const out = `speed-insights-${new Date().toISOString().replace(/[:.]/g,'-')}.json`;
    fs.writeFileSync(out, JSON.stringify(results, null, 2));
    console.log('Full results written to', out);
  } catch (err) {
    console.error('Speed Insights run failed:', err);
    process.exitCode = 2;
  }
}

run();
