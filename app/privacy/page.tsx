import type { Metadata } from 'next';
import Link from 'next/link';
import SlingshotLogo from '@/components/SlingshotLogo';

export const metadata: Metadata = {
  title: 'Privacy Policy | Slingshot IEP',
  description: 'How Slingshot collects, uses, and protects your information, including phone numbers used for text message reminders.',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pt-10 first:pt-0">
      <h2 className="text-xl font-bold text-[#2F2F2F] mb-3">{title}</h2>
      <div className="space-y-4 text-sm text-[#4B4540] leading-relaxed">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F2] font-sans text-[#2F2F2F]">
      <nav className="sticky top-0 z-50 bg-[#FBF7F2]/90 backdrop-blur-sm border-b border-[#EAE4DB]">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center">
          <Link href="/"><SlingshotLogo size="sm" /></Link>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#9B9086] mb-10">Last updated July 31, 2026</p>

        <Section title="Who we are">
          <p>
            Slingshot (&ldquo;Slingshot,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is operated by Slingshot Labs Benefit LLC.
            Slingshot helps parents and guardians organize IEP (Individualized Education Program) and IFSP
            (Individualized Family Service Plan) records, prepare for meetings, and track deadlines for
            their children. This policy describes how we collect, use, and share information when you use
            slingshotiep.com, the Slingshot app, or related services (together, the &ldquo;Service&rdquo;).
          </p>
        </Section>

        <Section title="Information we collect">
          <p><strong>Account information.</strong> Your name, email address, and password when you create an account.</p>
          <p>
            <strong>Phone number.</strong> If you choose to provide a phone number, for example to receive a link to
            download the app or to sign up for text message reminders, we collect that number and your
            consent status.
          </p>
          <p>
            <strong>Information about your child.</strong> Documents you upload (such as IEPs and IFSPs), the goals,
            services, and accommodations Slingshot extracts from them, and observations, notes, or updates
            you choose to log. You control what you enter, and Slingshot only uses it to provide the
            Service to you.
          </p>
          <p>
            <strong>Technical information.</strong> Standard information such as browser type, device type, and pages
            visited, collected automatically to keep the Service secure and working properly.
          </p>
        </Section>

        <Section title="Sensitive information about your child">
          <p>
            Information about a child&rsquo;s disability, diagnosis, services, or educational needs may be
            considered sensitive personal information or consumer health data under some state privacy
            laws. You provide this information voluntarily, for your own recordkeeping and advocacy. We
            use it only to provide the Service to you (for example, organizing your child&rsquo;s records and
            preparing meeting summaries). We do not sell this information, and we do not share it with
            third parties for their own marketing purposes.
          </p>
          <p>
            Slingshot is used by parents and guardians, not by schools or school districts. Slingshot is not
            a school record system, and using Slingshot does not change any rights or obligations a school
            district has under FERPA or IDEA. We apply administrative and technical safeguards to protect
            this information regardless.
          </p>
        </Section>

        <Section title="Text messaging (SMS) communications">
          <p>
            If you provide your phone number and opt in, Slingshot may send you text messages about
            upcoming IEP or IFSP meetings, deadlines, and related account notifications, or a one time link
            to download the app if you request one. Message frequency varies based on your child&rsquo;s
            upcoming meetings and deadlines.
          </p>
          <p>
            Message and data rates may apply. You can opt out of text messages at any time by replying
            STOP. Reply HELP for help, or contact us at hello@slingshotiep.com.
          </p>
          <p>
            Your mobile information, including your phone number, will not be shared with third parties or
            affiliates for their marketing or promotional purposes. We use a third party messaging provider
            (Twilio) solely to deliver these text messages on our behalf.
          </p>
        </Section>

        <Section title="How we share information">
          <p>
            We do not sell your information or your child&rsquo;s information. We share information only with:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Service providers who help us operate Slingshot, such as hosting and text message delivery, under obligations to protect your information and use it only to provide those services.</li>
            <li>Other parties if required by law, or to protect the safety of you, your child, or others.</li>
            <li>A successor organization if Slingshot is involved in a merger, acquisition, or sale of assets, subject to this policy or a policy with equivalent protections.</li>
          </ul>
        </Section>

        <Section title="Data security">
          <p>
            We use administrative, technical, and physical safeguards designed to protect your information.
            No method of transmission or storage is completely secure, and we cannot guarantee absolute
            security.
          </p>
        </Section>

        <Section title="Data retention">
          <p>
            We retain your information for as long as your account is active or as needed to provide the
            Service. You can request deletion of your account and associated information at any time by
            contacting us.
          </p>
        </Section>

        <Section title="Your choices">
          <ul className="list-disc pl-5 space-y-2">
            <li>Opt out of text messages at any time by replying STOP to any message, or by updating your settings in the app.</li>
            <li>Request access to, correction of, or deletion of your information by emailing hello@slingshotiep.com.</li>
            <li>Close your account at any time from within the app.</li>
          </ul>
        </Section>

        <Section title="State privacy rights">
          <p>
            Depending on where you live, you may have additional rights under state privacy laws, including
            the right to know what information we collect, the right to delete it, and the right to opt out
            of its sale (we do not sell information, so there is nothing to opt out of). Some states,
            including Washington, give you specific rights over consumer health data, such as the right to
            withdraw consent to its collection or sharing. To exercise any of these rights, contact us at
            hello@slingshotiep.com.
          </p>
        </Section>

        <Section title="Children's privacy">
          <p>
            Slingshot is intended for use by adults, namely parents, guardians, and professionals acting on
            behalf of a child. We do not knowingly collect personal information directly from children
            under 13. Information about a child is provided by their parent or guardian.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this policy from time to time. If we make material changes, we will notify you
            through the Service or by email before the changes take effect.
          </p>
        </Section>

        <Section title="Contact us">
          <p>
            Questions about this policy or your information can be sent to hello@slingshotiep.com.
          </p>
        </Section>
      </div>
    </div>
  );
}
