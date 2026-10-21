// Create a referral code for a new partner: adds it to referrals/referrals.json
// and writes its English and Spanish QR codes to referrals/<code>-en.png and
// referrals/<code>-es.png. See referrals/README.md.
//
//   node scripts/new-referral.mjs "Parents' Place of Maryland"

import { execFileSync } from 'node:child_process';
import { randomInt } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const name = process.argv[2];
if (!name) {
  console.error('Usage: node scripts/new-referral.mjs "<Partner name>"');
  process.exit(1);
}

const file = new URL('../referrals/referrals.json', import.meta.url);
const referrals = JSON.parse(readFileSync(file, 'utf8'));
if (Object.values(referrals).includes(name)) {
  console.error(`${name} already has a code. One partner, one code.`);
  process.exit(1);
}

// No 0/o/1/l/i, so a code read aloud or typed from paper is unambiguous.
const alphabet = 'abcdefghjkmnpqrstuvwxyz23456789';
let code;
do {
  code = Array.from({ length: 4 }, () => alphabet[randomInt(alphabet.length)]).join('');
} while (referrals[code] || code === 'es');

referrals[code] = name;
writeFileSync(file, JSON.stringify(referrals, null, 2) + '\n');

for (const [suffix, path] of [['en', `/go/${code}`], ['es', `/go/${code}-es`]]) {
  const out = new URL(`../referrals/${code}-${suffix}.png`, import.meta.url).pathname;
  execFileSync('npx', ['-y', 'qrcode@1.5.4', '-t', 'png', '-e', 'M', '-w', '1200', '-o', out, `https://www.slingshotiep.com${path}`], { stdio: 'inherit' });
}

console.log(`\n${name}: code ${code}`);
console.log(`  English: https://www.slingshotiep.com/go/${code}  -> referrals/${code}-en.png`);
console.log(`  Spanish: https://www.slingshotiep.com/go/${code}-es -> referrals/${code}-es.png`);
console.log('Add a row to referrals/README.md, merge, and scan both codes on the live site before printing.');
