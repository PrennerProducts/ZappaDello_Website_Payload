import Link from 'next/link'
export const metadata = {
  title: 'Impressum | DeineWebsite',
  description:
    'Impressum gemäß § 5 ECG: Verantwortlicher, Kontaktdaten, rechtliche Hinweise zur Website.',
}

export default function ImpressumPage() {
  return (
    <div className="relative min-h-screen overflow-y-auto bg-black">
      {/* Fixed Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        {/* Neon Particles */}
        <div className="absolute inset-0">{/* ... animierte Kreise wie gehabt ... */}</div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        <div className="container mx-auto py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                Impressum
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
                {/* §5 ECG */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Offenlegungspflicht gemäß § 5 E-Commerce-Gesetz (ECG)
                  </h2>
                  <p>
                    <strong>Inhaber:</strong> Manuel Praxmarer
                    <br />
                    <strong>Adresse:</strong> Feichten 102, 6524 Kaunertal, Österreich
                    <br />
                    <strong>Telefon:</strong> 0650 517 43 55
                    <br />
                    <strong>E-Mail:</strong> zappadello@gmail.com
                  </p>
                </section>

                {/* Unternehmensangaben */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Unternehmensangaben</h2>
                  <p>
                    <strong>Unternehmensform:</strong> Einzelunternehmen
                    <br />
                    <strong>UID-Nummer:</strong> ATU74063103
                    <br />
                    <strong>GISA-Zahl:</strong> 31093743
                    <br />
                    <strong>Gewerbeart:</strong> Gastgewerbe gemäß § 94 Z 26 GewO
                    <br />
                    <strong>Gewerbebehörde:</strong> Bezirkshauptmannschaft Landeck
                    <br />
                    <strong>Mitglied bei:</strong> Wirtschaftskammer Tirol
                    <br />
                    <strong>Gewerbeordnung:</strong>{' '}
                    <a
                      href="https://www.ris.bka.gv.at"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:underline"
                    >
                      www.ris.bka.gv.at
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV
                  </h2>
                  <p>Manuel Praxmarer, Feichten 102, 6524 Kaunertal, Österreich</p>
                </section>

                {/* Haftung für Inhalte */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Haftung für Inhalte</h2>
                  <p>
                    Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
                    Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
                    übernommen werden.
                  </p>
                </section>

                {/* Haftung für Links */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Haftung für Links</h2>
                  <p>
                    Diese Website enthält Links zu externen Webseiten. Für die Inhalte externer
                    Seiten ist stets der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der
                    Verlinkung wurden keine rechtswidrigen Inhalte festgestellt.
                  </p>
                </section>

                {/* Urheberrecht */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Urheberrecht</h2>
                  <p>
                    Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem
                    österreichischen Urheberrecht. Eine Vervielfältigung, Bearbeitung, Verbreitung
                    oder sonstige Nutzung bedarf der vorherigen schriftlichen Zustimmung des
                    jeweiligen Autors bzw. Erstellers.
                  </p>
                  <p>
                    Inhalte Dritter sind als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
                    Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
                    umgehend entfernen.
                  </p>
                </section>

                {/* Online-Streitbeilegung */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Online-Streitbeilegung</h2>
                  <p>
                    Verbraucher haben die Möglichkeit, Beschwerden an die
                    Online-Streitbeilegungsplattform der EU zu richten:{' '}
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                    <br />
                    Sie können allfällige Beschwerden auch an die oben angegebene E-Mail-Adresse
                    richten.
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
