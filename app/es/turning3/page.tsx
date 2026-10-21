import type { Metadata } from 'next';
import TurningThree from '@/components/TurningThree';
import { partnerName } from '@/lib/partners';

export const metadata: Metadata = {
  title: '¿Su hijo va a cumplir 3 años pronto? | Slingshot IEP',
  description: 'Ayuda gratuita para prepararse para el cambio de Infants and Toddlers a los servicios de la escuela, en español o en inglés.',
  alternates: { languages: { en: '/turning3' } },
};

export default function Page({ searchParams }: { searchParams: { utm_source?: string } }) {
  const code = searchParams.utm_source ?? '';
  return <TurningThree lang="es" source={code} partner={partnerName(code)} />;
}
