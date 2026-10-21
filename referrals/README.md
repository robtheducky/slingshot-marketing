# Referral codes and QR codes

Community partners hand families a printed flyer. Every partner gets its own
code, its own pair of QR codes (English and Spanish side of the flyer), and a
landing page. The page never names the partner (a parent seeing "Shared by"
an organization reads oddly); the code only tells us which flyer worked, as a
count, and partners never learn who contacted us.

## Rules

- **One partner, one code, never reused.** A new partner never borrows another
  partner's QR code, even "just for now". Printed flyers live for years.
- **Codes are random and opaque** (4 characters, lowercase, no 0/o/1/l/i).
  Never a partner's name or initials: the code appears in URLs, analytics and
  sign-up emails.
- **QR codes point at the short link** (`/go/<code>`, `/go/<code>-es`), never
  at a long URL or straight at the app. The short link is what lets the
  destination change after printing.
- **Every code must land on a marketing page** for that audience. Today all codes use the age three transition page
  (`/turning3`, `/es/turning3`). If a partner serves a different audience
  (school age IEP families, a different county, a different program), build
  that page first, then point the partner's code at it in `next.config.mjs`.
- **Partners see counts, never names.** Report "fewer than 5" until a count is
  big enough that a partner could not work out who it is.

## Adding a partner

1. `node scripts/new-referral.mjs "<Partner name>"`. This adds the code to
   `referrals.json` and writes `<code>-en.png` and `<code>-es.png` here.
2. If the partner needs a different landing page, build it and route the code
   to it. Otherwise nothing else changes: `/go/<code>` and `/go/<code>-es`
   come from `referrals.json` automatically.
3. Add a row to the table below. Open a PR and merge.
4. On the live site, scan both QR codes with a phone. Each must open the
   landing page in the right language.
5. Only then send the QR codes for the flyer.

## Codes

| Code | Partner | Landing page | English QR | Spanish QR | Added |
|---|---|---|---|---|---|
| rtxp | The Arc Montgomery County | /turning3 | rtxp-en.png | rtxp-es.png | Oct 21, 2026 |

Note: this repository is public, so the code to partner map is visible to
anyone who reads it on GitHub. The codes keep partner names out of URLs,
analytics and email; they are not a secret.
