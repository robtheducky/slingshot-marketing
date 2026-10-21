import type { Metadata } from 'next';
import TurningThree from '@/components/TurningThree';
import { partnerName } from '@/lib/partners';

export const metadata: Metadata = {
  title: 'Is your child turning 3 soon? | Slingshot IEP',
  description: 'Free help getting ready for the move from Infants and Toddlers to school services, in English or Spanish.',
  alternates: { languages: { es: '/es/turning3' } },
};

export default function Page({ searchParams }: { searchParams: { utm_source?: string } }) {
  const code = searchParams.utm_source ?? '';
  return <TurningThree lang="en" source={code} partner={partnerName(code)} />;
}
