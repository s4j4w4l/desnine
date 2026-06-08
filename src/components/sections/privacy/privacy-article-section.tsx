"use client";

import { useLang } from "@/contexts/LanguageContext";

function EnPrivacyArticle() {
  return (
    <>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
        By using the Service, you agree to this Privacy Policy. If you do not agree, please
        discontinue use. This policy applies to all visitors, clients, and users of Desnine Studio.
      </p>

      <hr className="my-8 border-white/10" />

      <h2 className="text-2xl md:text-3xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="text-muted-foreground mb-4">
        We collect various types of information in connection with the Service, including:
      </p>
      <h3 className="mt-6 text-lg font-semibold mb-3">A. Personal Information</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li><span className="font-medium">Contact Information:</span> name, email address, telephone number, postal address.</li>
        <li><span className="font-medium">Account Information:</span> username, password, and registration details (if you create an account).</li>
        <li><span className="font-medium">Demographic Information:</span> age, gender, and preferences (if provided).</li>
        <li><span className="font-medium">Payment Information:</span> payment card details or other financial information (processed securely by third parties when you purchase services).</li>
        <li><span className="font-medium">Communications:</span> records of your communications with us (e.g., support inquiries, forms).</li>
        <li><span className="font-medium">Recruitment Information:</span> information provided when submitting a job application (which may include sensitive data you choose to share, such as ethnic origin).</li>
      </ul>
      <h3 className="mt-6 text-lg font-semibold mb-3">B. Non-Personal / Technical Information</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li><span className="font-medium">Usage Data:</span> IP address, browser type, operating system, referring URLs, pages viewed, timestamps.</li>
        <li><span className="font-medium">Device Information:</span> hardware model, OS version, unique device identifiers, mobile network information, mobile device ID.</li>
        <li><span className="font-medium">Cookies &amp; Similar Technologies:</span> used to track activity and store preferences (see "Cookies" below).</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
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
        <li><span className="font-medium">Consent:</span> for example, sending newsletters you've requested. You can withdraw consent at any time.</li>
        <li><span className="font-medium">Legitimate Interests:</span> to deliver and improve the site experience for users and to assess recruitment applications.</li>
        <li><span className="font-medium">Contract / Legal Obligations:</span> where processing is required to provide services you request or to comply with applicable law.</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">3. How We Share Your Information</h2>
      <p className="text-muted-foreground mb-4">
        We do <span className="font-medium">not sell</span> your personal information. We do not pass your information to third parties for their own marketing. We may share limited data:
      </p>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li><span className="font-medium">Vendors &amp; Service Providers:</span> trusted processors that operate our infrastructure (e.g., hosting, payments, analytics, email) under contract and per our instructions.</li>
        <li><span className="font-medium">Legal Compliance &amp; Protection:</span> to comply with laws, requests from authorities, or to protect the rights, property, and safety of Desnine Studio, our users, or others.</li>
        <li><span className="font-medium">Business Transfers:</span> in connection with mergers, acquisitions, or sale of assets.</li>
        <li><span className="font-medium">With Your Consent:</span> when you give explicit permission.</li>
        <li><span className="font-medium">Aggregated / De-identified Data:</span> that does not identify you.</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">4. Marketing</h2>
      <p className="text-muted-foreground mb-6">
        We will only provide marketing information that you have specifically requested via the website. You may opt out at any time by using the unsubscribe link in our emails or by contacting us.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">5. Where We Process / International Transfers</h2>
      <p className="text-muted-foreground mb-6">
        We may transfer and process your information in countries outside your place of residence, including Canada, the United States, and other jurisdictions. Where required, we implement appropriate safeguards (e.g., standard contractual clauses) to protect your data.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">6. Data Retention</h2>
      <p className="text-muted-foreground mb-6">
        We retain your information for <span className="font-medium">24 months</span> unless a longer period is required or permitted by law (e.g., tax, accounting, legal claims). When no longer needed, we securely delete or anonymize the data.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">7. Cookies</h2>
      <h3 className="mt-2 text-lg font-semibold mb-3">What Are Cookies?</h3>
      <p className="text-muted-foreground mb-4">
        Cookies are small text files placed on your device when you visit a website. We may also use similar technologies. We can recognise these cookies on subsequent visits to remember you and improve your experience.
      </p>
      <h3 className="mt-4 text-lg font-semibold mb-3">Cookie Scope &amp; Types</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
        <li><span className="font-medium">First-party vs Third-party:</span> set by our site or by a different domain providing features on our site.</li>
        <li><span className="font-medium">Persistent vs Session:</span> persistent cookies last for a defined period; session cookies are deleted when you close your browser.</li>
      </ul>
      <h3 className="mt-4 text-lg font-semibold mb-3">What We Use Cookies For</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li><span className="font-medium">Strictly Necessary:</span> core site functions (e.g., secure areas, basic operations).</li>
        <li><span className="font-medium">Statistics / Performance:</span> aggregated analytics on pages visited and errors encountered to improve our website.</li>
        <li><span className="font-medium">Preferences / Functionality:</span> remember choices (e.g., language, layout) and enhance features.</li>
      </ul>
      <p className="text-muted-foreground mb-6">
        You can manage or disable cookies in your browser settings. Note that some features may not function properly without required cookies. Learn more at{" "}
        <a className="underline" href="https://www.allaboutcookies.org/">www.allaboutcookies.org</a>.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">8. Third-Party Websites</h2>
      <p className="text-muted-foreground mb-6">
        Our website may link to third-party sites that we do not operate or endorse. Their privacy practices are governed by their own policies. This Privacy Policy does not apply to those sites, and we are not responsible for them.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">9. Data Security</h2>
      <p className="text-muted-foreground mb-6">
        We take appropriate technical and organizational measures to help keep your personal information secure, accurate, and up to date, and only for as long as necessary for the purposes described in this policy. However, no method of transmission or storage is 100% secure.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">10. Children&apos;s Privacy</h2>
      <p className="text-muted-foreground mb-6">
        This website is not intended for children under 13. We do not knowingly collect personal information from children. If a child has provided us information, please contact us so we can delete it. If you are under 13 and wish to use features requiring personal data, please ask a parent or guardian to do so on your behalf.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">11. Your Rights</h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li>Request a copy of the personal information we hold about you and details of processing.</li>
        <li>Request correction of inaccuracies in your personal information.</li>
        <li>Request portability of your personal information in a structured, commonly-used, machine-readable format (and for us to transmit it to a third party where technically feasible).</li>
        <li>Request deletion of your personal information or restriction of our use of it.</li>
        <li>Lodge a complaint with a supervisory authority (e.g., your local data protection authority; in the UK, the Information Commissioner&apos;s Office).</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">12. Changes to This Privacy Policy</h2>
      <p className="text-muted-foreground mb-6">
        We review this Privacy Policy regularly to keep it up to date and compliant with applicable laws. We reserve the right to revise it at any time. The updated policy will be posted on this page with the &ldquo;Last updated&rdquo; date adjusted. Please review periodically.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">13. Contact Us</h2>
      <p className="text-muted-foreground mb-6">
        If you wish to exercise any of your rights in relation to your personal information or if you have any queries about how we use your personal information, please let us know by contacting us at the following address:{" "}
        <a className="underline" href="mailto:info@desnine.com">info@desnine.com</a>.
      </p>
    </>
  );
}

function FrPrivacyArticle() {
  return (
    <>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
        En utilisant le Service, vous acceptez cette Politique de Confidentialité. Si vous n&apos;êtes pas d&apos;accord, veuillez cesser d&apos;utiliser le Service. Cette politique s&apos;applique à tous les visiteurs, clients et utilisateurs de Desnine Studio.
      </p>

      <hr className="my-8 border-white/10" />

      <h2 className="text-2xl md:text-3xl font-semibold mb-4">1. Informations que Nous Collectons</h2>
      <p className="text-muted-foreground mb-4">
        Nous collectons divers types d&apos;informations dans le cadre du Service, notamment :
      </p>
      <h3 className="mt-6 text-lg font-semibold mb-3">A. Informations Personnelles</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li><span className="font-medium">Coordonnées :</span> nom, adresse e-mail, numéro de téléphone, adresse postale.</li>
        <li><span className="font-medium">Informations de Compte :</span> nom d&apos;utilisateur, mot de passe et détails d&apos;inscription (si vous créez un compte).</li>
        <li><span className="font-medium">Informations Démographiques :</span> âge, sexe et préférences (si fournis).</li>
        <li><span className="font-medium">Informations de Paiement :</span> coordonnées de carte bancaire ou autres informations financières (traitées de manière sécurisée par des tiers lors de l&apos;achat de services).</li>
        <li><span className="font-medium">Communications :</span> historique de vos échanges avec nous (ex. demandes de support, formulaires).</li>
        <li><span className="font-medium">Informations de Recrutement :</span> informations fournies lors du dépôt d&apos;une candidature (pouvant inclure des données sensibles que vous choisissez de partager, telles que l&apos;origine ethnique).</li>
      </ul>
      <h3 className="mt-6 text-lg font-semibold mb-3">B. Informations Non Personnelles / Techniques</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li><span className="font-medium">Données d&apos;Utilisation :</span> adresse IP, type de navigateur, système d&apos;exploitation, URL de référence, pages consultées, horodatages.</li>
        <li><span className="font-medium">Informations sur l&apos;Appareil :</span> modèle matériel, version du système d&apos;exploitation, identifiants uniques, informations réseau mobile, identifiant de l&apos;appareil mobile.</li>
        <li><span className="font-medium">Cookies &amp; Technologies Similaires :</span> utilisés pour suivre l&apos;activité et mémoriser les préférences (voir « Cookies » ci-dessous).</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">2. Comment Nous Utilisons Vos Informations</h2>
      <p className="text-muted-foreground mb-4">Nous utilisons les informations collectées pour :</p>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li>Fournir, maintenir et améliorer notre Service et l&apos;expérience en ligne.</li>
        <li>Traiter les transactions et envoyer les informations correspondantes (ex. confirmations, factures).</li>
        <li>Envoyer des avis techniques, mises à jour, alertes de sécurité et messages de support.</li>
        <li>Répondre aux demandes concernant Desnine Studio et fournir un service client.</li>
        <li>Fournir les informations demandées (ex. bulletins d&apos;information).</li>
        <li>Surveiller et analyser les tendances, l&apos;utilisation et les activités pour améliorer le Service.</li>
        <li>Personnaliser le Service et fournir du contenu ou des fonctionnalités pertinentes.</li>
        <li>Détecter, enquêter et prévenir les fraudes ou activités illégales.</li>
        <li>Traiter et examiner les candidatures d&apos;emploi et vous tenir informé tout au long du processus.</li>
        <li>Combiner des données avec des informations de tiers pour mieux comprendre vos besoins.</li>
        <li>Accomplir tout autre objectif divulgué au moment de la collecte.</li>
      </ul>
      <h3 className="mt-6 text-lg font-semibold mb-3">Bases Légales du Traitement</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li><span className="font-medium">Consentement :</span> par exemple, l&apos;envoi de bulletins d&apos;information que vous avez demandés. Vous pouvez retirer votre consentement à tout moment.</li>
        <li><span className="font-medium">Intérêts Légitimes :</span> pour améliorer l&apos;expérience du site et évaluer les candidatures.</li>
        <li><span className="font-medium">Contrat / Obligations Légales :</span> lorsque le traitement est nécessaire pour fournir les services demandés ou se conformer à la loi applicable.</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">3. Comment Nous Partageons Vos Informations</h2>
      <p className="text-muted-foreground mb-4">
        Nous ne <span className="font-medium">vendons pas</span> vos informations personnelles. Nous ne les communiquons pas à des tiers à des fins marketing. Nous pouvons partager des données limitées :
      </p>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li><span className="font-medium">Fournisseurs &amp; Prestataires :</span> des processeurs de confiance qui opèrent notre infrastructure (ex. hébergement, paiements, analytique, e-mail) sous contrat et selon nos instructions.</li>
        <li><span className="font-medium">Conformité Légale &amp; Protection :</span> pour se conformer aux lois, aux demandes des autorités, ou pour protéger les droits, la propriété et la sécurité de Desnine Studio, de nos utilisateurs ou d&apos;autres.</li>
        <li><span className="font-medium">Transferts d&apos;Activité :</span> dans le cadre de fusions, acquisitions ou cessions d&apos;actifs.</li>
        <li><span className="font-medium">Avec Votre Consentement :</span> lorsque vous donnez votre autorisation explicite.</li>
        <li><span className="font-medium">Données Agrégées / Anonymisées :</span> qui ne permettent pas de vous identifier.</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">4. Marketing</h2>
      <p className="text-muted-foreground mb-6">
        Nous ne fournirons que les informations marketing que vous avez spécifiquement demandées via le site. Vous pouvez vous désabonner à tout moment via le lien de désinscription dans nos e-mails ou en nous contactant.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">5. Lieu de Traitement / Transferts Internationaux</h2>
      <p className="text-muted-foreground mb-6">
        Nous pouvons transférer et traiter vos informations dans des pays en dehors de votre lieu de résidence, y compris le Canada, les États-Unis et d&apos;autres juridictions. Le cas échéant, nous mettons en œuvre des garanties appropriées (ex. clauses contractuelles types) pour protéger vos données.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">6. Conservation des Données</h2>
      <p className="text-muted-foreground mb-6">
        Nous conservons vos informations pendant <span className="font-medium">24 mois</span>, sauf si une période plus longue est requise ou autorisée par la loi (ex. fiscalité, comptabilité, réclamations légales). Lorsqu&apos;elles ne sont plus nécessaires, nous supprimons ou anonymisons les données de manière sécurisée.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">7. Cookies</h2>
      <h3 className="mt-2 text-lg font-semibold mb-3">Que sont les Cookies ?</h3>
      <p className="text-muted-foreground mb-4">
        Les cookies sont de petits fichiers texte placés sur votre appareil lorsque vous visitez un site web. Nous pouvons également utiliser des technologies similaires. Nous pouvons reconnaître ces cookies lors de visites ultérieures pour vous mémoriser et améliorer votre expérience.
      </p>
      <h3 className="mt-4 text-lg font-semibold mb-3">Portée &amp; Types de Cookies</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
        <li><span className="font-medium">Cookies internes vs tiers :</span> définis par notre site ou par un domaine différent fournissant des fonctionnalités sur notre site.</li>
        <li><span className="font-medium">Persistants vs de Session :</span> les cookies persistants durent une période définie ; les cookies de session sont supprimés à la fermeture du navigateur.</li>
      </ul>
      <h3 className="mt-4 text-lg font-semibold mb-3">Utilisation des Cookies</h3>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li><span className="font-medium">Strictement Nécessaires :</span> fonctions essentielles du site (ex. zones sécurisées, opérations de base).</li>
        <li><span className="font-medium">Statistiques / Performance :</span> analyses agrégées des pages visitées et des erreurs pour améliorer notre site.</li>
        <li><span className="font-medium">Préférences / Fonctionnalité :</span> mémorisation des choix (ex. langue, mise en page) et amélioration des fonctionnalités.</li>
      </ul>
      <p className="text-muted-foreground mb-6">
        Vous pouvez gérer ou désactiver les cookies dans les paramètres de votre navigateur. Notez que certaines fonctionnalités peuvent ne pas fonctionner correctement sans les cookies requis. En savoir plus sur{" "}
        <a className="underline" href="https://www.allaboutcookies.org/">www.allaboutcookies.org</a>.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">8. Sites Web Tiers</h2>
      <p className="text-muted-foreground mb-6">
        Notre site peut contenir des liens vers des sites tiers que nous n&apos;exploitons pas ou n&apos;endorsons pas. Leurs pratiques de confidentialité sont régies par leurs propres politiques. Cette Politique de Confidentialité ne s&apos;applique pas à ces sites, et nous n&apos;en sommes pas responsables.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">9. Sécurité des Données</h2>
      <p className="text-muted-foreground mb-6">
        Nous prenons des mesures techniques et organisationnelles appropriées pour assurer la sécurité, l&apos;exactitude et la mise à jour de vos informations personnelles, et ce uniquement pour aussi longtemps que nécessaire aux fins décrites dans cette politique. Cependant, aucune méthode de transmission ou de stockage n&apos;est 100 % sécurisée.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">10. Confidentialité des Enfants</h2>
      <p className="text-muted-foreground mb-6">
        Ce site n&apos;est pas destiné aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d&apos;informations personnelles auprès d&apos;enfants. Si un enfant nous a fourni des informations, veuillez nous contacter afin que nous puissions les supprimer. Si vous avez moins de 13 ans et souhaitez utiliser des fonctionnalités nécessitant des données personnelles, veuillez demander à un parent ou tuteur de le faire en votre nom.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">11. Vos Droits</h2>
      <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
        <li>Demander une copie des informations personnelles que nous détenons à votre sujet et les détails du traitement.</li>
        <li>Demander la correction des inexactitudes dans vos informations personnelles.</li>
        <li>Demander la portabilité de vos informations personnelles dans un format structuré, couramment utilisé et lisible par machine (et leur transmission à un tiers lorsque techniquement possible).</li>
        <li>Demander la suppression de vos informations personnelles ou la restriction de leur utilisation.</li>
        <li>Déposer une plainte auprès d&apos;une autorité de contrôle (ex. votre autorité locale de protection des données).</li>
      </ul>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">12. Modifications de cette Politique de Confidentialité</h2>
      <p className="text-muted-foreground mb-6">
        Nous révisons régulièrement cette Politique de Confidentialité pour la maintenir à jour et conforme aux lois applicables. Nous nous réservons le droit de la réviser à tout moment. La politique mise à jour sera publiée sur cette page avec la date de &ldquo;Dernière mise à jour&rdquo; ajustée. Veuillez la consulter périodiquement.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">13. Nous Contacter</h2>
      <p className="text-muted-foreground mb-6">
        Si vous souhaitez exercer l&apos;un de vos droits concernant vos informations personnelles ou si vous avez des questions sur la façon dont nous les utilisons, veuillez nous contacter à l&apos;adresse suivante :{" "}
        <a className="underline" href="mailto:info@desnine.com">info@desnine.com</a>.
      </p>
    </>
  );
}

export function PrivacyArticleSection() {
  const { lang } = useLang();

  return (
    <div className="px-6 md:px-12 pb-20">
      <div className="max-w-4xl mx-auto">
        <article className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-lg p-6 md:p-10 prose prose-invert max-w-none">
          {lang === "fr" ? <FrPrivacyArticle /> : <EnPrivacyArticle />}
        </article>
      </div>
    </div>
  );
}
