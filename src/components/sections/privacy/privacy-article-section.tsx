export function PrivacyArticleSection() {
  return (
    <div className="px-6 md:px-12 pb-20">
      <div className="max-w-4xl mx-auto">
        <article className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-lg p-6 md:p-10 prose prose-invert max-w-none">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            By using the Service, you agree to this Privacy Policy. If you do not agree, please
            discontinue use. This policy applies to all visitors, clients, and users of Desnine
            Studio.
          </p>

          <hr className="my-8 border-white/10" />

          {/* 1. Information We Collect */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p className="text-muted-foreground mb-4">
            We collect various types of information in connection with the Service, including:
          </p>

          <h3 className="mt-6 text-lg font-semibold mb-3">A. Personal Information</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>
              <span className="font-medium">Contact Information:</span> name, email address, telephone
              number, postal address.
            </li>
            <li>
              <span className="font-medium">Account Information:</span> username, password, and
              registration details (if you create an account).
            </li>
            <li>
              <span className="font-medium">Demographic Information:</span> age, gender, and preferences
              (if provided).
            </li>
            <li>
              <span className="font-medium">Payment Information:</span> payment card details or other
              financial information (processed securely by third parties when you purchase services).
            </li>
            <li>
              <span className="font-medium">Communications:</span> records of your communications with
              us (e.g., support inquiries, forms).
            </li>
            <li>
              <span className="font-medium">Recruitment Information:</span> information provided when
              submitting a job application (which may include sensitive data you choose to share, such
              as ethnic origin).
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold mb-3">B. Non-Personal / Technical Information</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>
              <span className="font-medium">Usage Data:</span> IP address, browser type, operating
              system, referring URLs, pages viewed, timestamps.
            </li>
            <li>
              <span className="font-medium">Device Information:</span> hardware model, OS version,
              unique device identifiers, mobile network information, mobile device ID.
            </li>
            <li>
              <span className="font-medium">Cookies &amp; Similar Technologies:</span> used to track
              activity and store preferences (see “Cookies” below).
            </li>
          </ul>

          {/* 2. How We Use Your Information */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>Provide, maintain, and improve our Service and online experience.</li>
            <li>Process transactions and send related information (e.g., confirmations, invoices).</li>
            <li>Send technical notices, updates, security alerts, and support messages.</li>
            <li>Respond to inquiries about Desnine Studio and provide customer support.</li>
            <li>Provide information you request (e.g., newsletters, bulletins).</li>
            <li>Monitor and analyze trends, usage, and activities to improve the Service.</li>
            <li>Personalize the Service and provide relevant content or features.</li>
            <li>Detect, investigate, and prevent fraud or illegal activities.</li>
            <li>Process and consider job applications and keep you updated throughout the process.</li>
            <li>Combine data with information from third parties to better understand your needs.</li>
            <li>Fulfill any other purpose disclosed at the time of collection.</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold mb-3">Legal Bases for Processing</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>
              <span className="font-medium">Consent:</span> for example, sending newsletters you’ve
              requested. You can withdraw consent at any time.
            </li>
            <li>
              <span className="font-medium">Legitimate Interests:</span> to deliver and improve the site
              experience for users and to assess recruitment applications.
            </li>
            <li>
              <span className="font-medium">Contract / Legal Obligations:</span> where processing is
              required to provide services you request or to comply with applicable law.
            </li>
          </ul>

          {/* 3. How We Share */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            3. How We Share Your Information
          </h2>
          <p className="text-muted-foreground mb-4">
            We do <span className="font-medium">not sell</span> your personal information. We do not pass
            your information to third parties for their own marketing. We may share limited data:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>
              <span className="font-medium">Vendors &amp; Service Providers:</span> trusted processors
              that operate our infrastructure (e.g., hosting, payments, analytics, email) under
              contract and per our instructions.
            </li>
            <li>
              <span className="font-medium">Legal Compliance &amp; Protection:</span> to comply with
              laws, requests from authorities, or to protect the rights, property, and safety of
              Desnine Studio, our users, or others.
            </li>
            <li>
              <span className="font-medium">Business Transfers:</span> in connection with mergers,
              acquisitions, or sale of assets.
            </li>
            <li>
              <span className="font-medium">With Your Consent:</span> when you give explicit permission.
            </li>
            <li>
              <span className="font-medium">Aggregated / De-identified Data:</span> that does not
              identify you.
            </li>
          </ul>

          {/* 4. Marketing */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            4. Marketing
          </h2>
          <p className="text-muted-foreground mb-6">
            We will only provide marketing information that you have specifically requested via the
            website. You may opt out at any time by using the unsubscribe link in our emails or by
            contacting us.
          </p>

          {/* 5. International Transfers */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            5. Where We Process / International Transfers
          </h2>
          <p className="text-muted-foreground mb-6">
            We may transfer and process your information in countries outside your place of residence,
            including Canada, the United States, and other jurisdictions. Where required, we implement
            appropriate safeguards (e.g., standard contractual clauses) to protect your data.
          </p>

          {/* 6. Retention */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            6. Data Retention
          </h2>
          <p className="text-muted-foreground mb-6">
            We retain your information for <span className="font-medium">24 months</span> unless a longer
            period is required or permitted by law (e.g., tax, accounting, legal claims). When no longer
            needed, we securely delete or anonymize the data.
          </p>

          {/* 7. Cookies */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            7. Cookies
          </h2>
          <h3 className="mt-2 text-lg font-semibold mb-3">What Are Cookies?</h3>
          <p className="text-muted-foreground mb-4">
            Cookies are small text files placed on your device when you visit a website. We may also use
            similar technologies. We can recognise these cookies on subsequent visits to remember you and
            improve your experience.
          </p>
          <h3 className="mt-4 text-lg font-semibold mb-3">Cookie Scope &amp; Types</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>
              <span className="font-medium">First-party vs Third-party:</span> set by our site or by a
              different domain providing features on our site.
            </li>
            <li>
              <span className="font-medium">Persistent vs Session:</span> persistent cookies last for a
              defined period; session cookies are deleted when you close your browser.
            </li>
          </ul>
          <h3 className="mt-4 text-lg font-semibold mb-3">What We Use Cookies For</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>
              <span className="font-medium">Strictly Necessary:</span> core site functions (e.g., secure
              areas, basic operations).
            </li>
            <li>
              <span className="font-medium">Statistics / Performance:</span> aggregated analytics on pages
              visited and errors encountered to improve our website.
            </li>
            <li>
              <span className="font-medium">Preferences / Functionality:</span> remember choices (e.g.,
              language, layout) and enhance features.
            </li>
          </ul>
          <p className="text-muted-foreground mb-6">
            You can manage or disable cookies in your browser settings. Note that some features may not
            function properly without required cookies. Learn more at{" "}
            <a className="underline" href="https://www.allaboutcookies.org/">
              www.allaboutcookies.org
            </a>.
          </p>

          {/* 8. Third-Party Websites */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            8. Third-Party Websites
          </h2>
          <p className="text-muted-foreground mb-6">
            Our website may link to third-party sites that we do not operate or endorse. Their privacy
            practices are governed by their own policies. This Privacy Policy does not apply to those
            sites, and we are not responsible for them.
          </p>

          {/* 9. Data Security */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            9. Data Security
          </h2>
          <p className="text-muted-foreground mb-6">
            We take appropriate technical and organizational measures to help keep your personal
            information secure, accurate, and up to date, and only for as long as necessary for the
            purposes described in this policy. However, no method of transmission or storage is 100%
            secure.
          </p>

          {/* 10. Children */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            10. Children’s Privacy
          </h2>
          <p className="text-muted-foreground mb-6">
            This website is not intended for children under 13. We do not knowingly collect personal
            information from children. If a child has provided us information, please contact us so we
            can delete it. If you are under 13 and wish to use features requiring personal data, please
            ask a parent or guardian to do so on your behalf.
          </p>

          {/* 11. Your Rights */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            11. Your Rights
          </h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li>Request a copy of the personal information we hold about you and details of processing.</li>
            <li>Request correction of inaccuracies in your personal information.</li>
            <li>
              Request portability of your personal information in a structured, commonly-used, machine-readable format (and for us to transmit it to a third party where technically feasible).
            </li>
            <li>Request deletion of your personal information or restriction of our use of it.</li>
            <li>
              Lodge a complaint with a supervisory authority (e.g., your local data protection
              authority; in the UK, the Information Commissioner’s Office).
            </li>
          </ul>

          {/* 12. Changes */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            12. Changes to This Privacy Policy
          </h2>
          <p className="text-muted-foreground mb-6">
            We review this Privacy Policy regularly to keep it up to date and compliant with applicable
            laws. We reserve the right to revise it at any time. The updated policy will be posted on
            this page with the “Last updated” date adjusted. Please review periodically.
          </p>

          {/* 13. Contact */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">
            13. Contact Us
          </h2>
          <p className="text-muted-foreground mb-6">
            If you wish to exercise any of your rights in relation to your personal information or
            if you have any queries about how we use your personal information, please let us know
            by contacting us at the following address:{" "}
            <a className="underline" href="mailto:info@desnine.com">
              info@desnine.com
            </a>
            .
          </p>
        </article>
      </div>
    </div>
  );
}
