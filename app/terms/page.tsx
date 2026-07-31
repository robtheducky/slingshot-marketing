import type { Metadata } from 'next';
import Link from 'next/link';
import SlingshotLogo from '@/components/SlingshotLogo';

export const metadata: Metadata = {
  title: 'Terms of Use | Slingshot IEP',
  description: 'The terms that govern your use of Slingshot, including our text message reminder program.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pt-10 first:pt-0">
      <h2 className="text-xl font-bold text-[#2F2F2F] mb-3">{title}</h2>
      <div className="space-y-4 text-sm text-[#4B4540] leading-relaxed">{children}</div>
    </section>
  );
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-[#FBF7F2] font-sans text-[#2F2F2F]">
      <nav className="sticky top-0 z-50 bg-[#FBF7F2]/90 backdrop-blur-sm border-b border-[#EAE4DB]">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center">
          <Link href="/"><SlingshotLogo size="sm" /></Link>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Terms of Use</h1>
        <p className="text-sm text-[#9B9086] mb-10">Last updated July 31, 2026</p>

        <Section title="Agreement to these terms">
          <p>
            These Terms of Use (&ldquo;Terms&rdquo;) govern your use of slingshotiep.com, the Slingshot app, and
            related services (together, the &ldquo;Service&rdquo;), provided by Slingshot Labs Benefit LLC
            (&ldquo;Slingshot,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By creating an account or using the
            Service, you agree to these Terms. If you do not agree, please do not use the Service.
          </p>
        </Section>

        <Section title="What Slingshot is">
          <p>
            Slingshot helps parents, guardians, and professionals organize IEP and IFSP records, prepare for
            meetings, and track deadlines. Slingshot does not provide legal, medical, or educational advice,
            and using Slingshot is not a substitute for working with a qualified special education advocate,
            attorney, or your child&rsquo;s school team. Slingshot does not guarantee any particular outcome
            with a school district or other agency.
          </p>
        </Section>

        <Section title="Eligibility and accounts">
          <p>
            You must be at least 18 years old and a parent, guardian, or professional authorized to act on
            behalf of a child to use the Service. You are responsible for keeping your account credentials
            secure and for all activity under your account.
          </p>
        </Section>

        <Section title="Text messaging (SMS) program terms">
          <p>
            If you provide a phone number and opt in, you agree to receive automated text messages from
            Slingshot related to your child&rsquo;s upcoming IEP or IFSP meetings, deadlines, and related
            account notifications, or a one time link to download the app if you request one. Consent to
            receive text messages is not required to use the Service.
          </p>
          <p>
            Message frequency varies. Message and data rates may apply. Reply STOP at any time to
            unsubscribe, or HELP for help. Carriers are not liable for delayed or undelivered messages. See
            our <Link href="/privacy" className="text-[#D97706] hover:text-[#B45309] underline">Privacy Policy</Link> for
            how we handle your phone number and other information.
          </p>
        </Section>

        <Section title="Acceptable use">
          <p>You agree not to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use the Service for any unlawful purpose, or to submit information you do not have the right to share.</li>
            <li>Attempt to interfere with, disrupt, or gain unauthorized access to the Service.</li>
            <li>Reverse engineer or copy the Service except as permitted by law.</li>
          </ul>
        </Section>

        <Section title="Your content">
          <p>
            You retain ownership of the documents, notes, and other information you submit to Slingshot
            (&ldquo;your content&rdquo;). You grant us a license to store, process, and display your content
            solely to provide the Service to you. You are responsible for your content and for having the
            right to submit it.
          </p>
        </Section>

        <Section title="Our content">
          <p>
            The Service, including its design, text, and software, is owned by Slingshot or our licensors and
            is protected by intellectual property laws. You may use the Service only as permitted by these
            Terms.
          </p>
        </Section>

        <Section title="Disclaimers">
          <p>
            The Service is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We
            do not warrant that the Service will be uninterrupted, error free, or that any information
            generated by the Service (including summaries of your child&rsquo;s IEP or IFSP) will be complete
            or accurate. You should review your child&rsquo;s official records and consult a qualified
            professional before relying on any information from the Service in a meeting or legal
            proceeding.
          </p>
        </Section>

        <Section title="Limitation of liability">
          <p>
            To the fullest extent permitted by law, Slingshot will not be liable for any indirect,
            incidental, or consequential damages arising from your use of the Service. Our total liability
            for any claim relating to the Service will not exceed the amount you paid us, if any, in the 12
            months before the claim arose.
          </p>
        </Section>

        <Section title="Termination">
          <p>
            You may stop using the Service and close your account at any time. We may suspend or terminate
            your access if you violate these Terms.
          </p>
        </Section>

        <Section title="Governing law">
          <p>These Terms are governed by the laws of the State of Maryland, without regard to conflict of law principles.</p>
        </Section>

        <Section title="Changes to these terms">
          <p>
            We may update these Terms from time to time. If we make material changes, we will notify you
            through the Service or by email before the changes take effect.
          </p>
        </Section>

        <Section title="Contact us">
          <p>Questions about these Terms can be sent to hello@slingshotiep.com.</p>
        </Section>
      </div>
    </div>
  );
}
