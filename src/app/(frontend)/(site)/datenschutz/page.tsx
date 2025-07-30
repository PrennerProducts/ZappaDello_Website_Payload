import Link from 'next/link'

export const metadata = {
  title: 'Datenschutzerklärung | DeineWebsite',
  description:
    'Datenschutzerklärung zur Nutzung der Website, inklusive Informationen zu Vercel, Google Fonts und Serverlogs.',
}

export default function DatenschutzPage() {
  return (
    <div className="relative min-h-screen overflow-y-auto bg-black">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        {/* Neon Particles */}
        <div className="absolute inset-0">{/* ... animierte Kreise wie beim Impressum ... */}</div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        <div className="container mx-auto py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                Datenschutzerklärung
              </h1>
              <Link
                href="/"
                className="inline-flex items-center text-amber-300 hover:text-amber-200 transition-colors duration-300"
              >
                ← Zurück zur Startseite
              </Link>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-gray-600/40 rounded-xl p-8 shadow-[0_0_30px_4px_rgba(245,158,11,0.4)]">
              <div className="space-y-8 text-gray-200">
                {/* Einleitung */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Einleitung</h2>
                  <p>
                    Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir
                    verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen
                    Bestimmungen (DSGVO, TKG 2003). In dieser Datenschutzerklärung informieren wir
                    Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer
                    Website.
                  </p>
                </section>

                {/* Zugriffsdaten / Server-Logs */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Zugriffsdaten</h2>
                  <p>
                    Beim Besuch dieser Website werden automatisch Informationen durch den Webserver
                    erfasst (sogenannte Server-Logfiles). Dies umfasst z. B.:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>IP-Adresse</li>
                    <li>Browsertyp und -version</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                  </ul>
                  <p>
                    Diese Daten sind nicht bestimmten Personen zuordenbar und werden von unserem
                    Hosting-Anbieter (Vercel) zur statistischen Auswertung und zur Verbesserung der
                    Website erhoben.
                  </p>
                </section>

                {/* Vercel Analytics */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Vercel Analytics</h2>
                  <p>
                    Diese Website nutzt <strong>Vercel Analytics</strong>, ein Analyse-Tool der
                    Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. Es werden
                    ausschließlich anonymisierte Daten über den Besucherverkehr erfasst – ohne
                    Einsatz von Cookies.
                  </p>
                  <p>
                    Weitere Informationen zur Datenverarbeitung durch Vercel finden Sie unter:{' '}
                    <a
                      href="https://vercel.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:underline"
                    >
                      vercel.com/legal/privacy-policy
                    </a>
                  </p>
                </section>

                {/* Google Fonts */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Google Fonts</h2>
                  <p>
                    Auf dieser Website werden <strong>Google Fonts</strong> lokal oder über
                    Google-Server eingebunden. Bei der Verwendung über Google kann es zu einer
                    Übermittlung Ihrer IP-Adresse an Server von Google in den USA kommen. Anbieter
                    ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                </section>

                {/* Externe Links (Google Maps Button) */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Externe Links</h2>
                  <p>
                    Auf dieser Website kann ein Button integriert sein, der zu Google Maps
                    weiterleitet. Beim Klicken auf diesen Button verlassen Sie unsere Website, und
                    es gelten die Datenschutzbestimmungen von Google:{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:underline"
                    >
                      policies.google.com/privacy
                    </a>
                  </p>
                </section>

                {/* Personenbezogene Fotos */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Fotos von Personen</h2>
                  <p>
                    Auf dieser Website können Fotos veröffentlicht sein, auf denen Personen
                    erkennbar sind (z. B. Gäste). Diese Bilder wurden entweder mit Einwilligung
                    aufgenommen oder stammen aus öffentlich zugänglichen Quellen.Falls Sie auf einem
                    Bild abgebildet sind und mit der Veröffentlichung nicht einverstanden sind,
                    kontaktieren Sie uns bitte. Das Bild wird umgehend entfernt.
                    <a
                      href="mailto:zappadello@gmail.com"
                      className="text-amber-300 hover:underline"
                    >
                      zappadello@gmail.com
                    </a>
                    . Das betreffende Bild wird umgehend entfernt.
                  </p>
                </section>

                {/* Ihre Rechte */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Ihre Rechte</h2>
                  <p>
                    Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,
                    Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie
                    glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt,
                    können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die
                    Datenschutzbehörde.
                  </p>
                </section>

                {/* Personenbezogene Fotos */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Personenbezogene Fotos</h2>
                  <p>
                    Auf dieser Website können Fotos eingebunden sein, auf denen Personen erkennbar
                    dargestellt sind. Die Veröffentlichung solcher Fotos erfolgt entweder mit
                    ausdrücklicher Einwilligung der abgebildeten Personen oder auf Grundlage
                    berechtigter Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO (z. B. bei öffentlichen
                    Veranstaltungen).
                  </p>
                  <p>
                    Wenn Sie sich auf einem Foto wiedererkennen und mit der Veröffentlichung nicht
                    einverstanden sind, kontaktieren Sie uns bitte. Das betreffende Bild wird dann
                    umgehend entfernt.
                  </p>
                </section>

                {/* Kontakt */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                  <p>
                    Für Fragen zum Datenschutz wenden Sie sich bitte an:
                    <br />
                    Manuel Praxmarer
                    <br />
                    E-Mail:{' '}
                    <a
                      href="mailto:zappadello@gmail.com"
                      className="text-amber-300 hover:underline"
                    >
                      zappadello@gmail.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
