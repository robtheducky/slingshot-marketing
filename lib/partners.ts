import 'server-only';
import referrals from '../referrals/referrals.json';

// Referral code -> partner name, shown to the family as "Shared by ...".
// To add a partner: add a random 4 character code here (lowercase, no 0/o/1/l/i)
// and print its QR code for https://www.slingshotiep.com/go/<code> (and <code>-es).
const PARTNERS: Record<string, string> = referrals;

export function partnerName(code: string | undefined): string | null {
  if (!code) return null;
  return PARTNERS[code] ?? null;
}
