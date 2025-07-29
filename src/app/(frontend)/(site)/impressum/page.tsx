'use client'

import Link from 'next/link'

export default function ImpressumPage() {
  return (
    <div className="relative min-h-screen overflow-y-auto bg-black">
      {/* Fixed Background with Neon Lights and Particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* Neon Background Effects - Fixed */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-stone-600/50 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-stone-700/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-stone-600/50 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-60 left-1/4 w-64 h-64 bg-gray-800/30 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-40 right-1/3 w-88 h-88 bg-gray-700/40 rounded-full blur-3xl animate-pulse delay-750"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-stone-600/50 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-yellow-500/15 rounded-full blur-3xl animate-pulse delay-1250"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-1750"></div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        <div className="container mx-auto py-20 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
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

            {/* Content */}
            <div className="bg-black/40 backdrop-blur-sm border border-gray-600/40 rounded-xl p-8 shadow-[0_0_30px_4px_rgba(245,158,11,0.4)]">
              <div className="space-y-8 text-gray-200">
                {/* Angaben gemäß § 5 TMG */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                  <div className="space-y-2">
                    <p>
                      <strong>Inhaber:</strong> Manuel Praxmarer
                    </p>
                    <p>
                      <strong>Adresse:</strong> Feichten 102, 6524 Kaunertal, Austria
                    </p>
                    <p>
                      <strong>Telefon:</strong> 0650 517 43 55
                    </p>
                    <p>
                      <strong>Email:</strong> zappadello@gmail.com
                    </p>
                  </div>
                </section>

                {/* Verantwortlich für den Inhalt */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Verantwortlich für den Inhalt
                  </h2>
                  <div className="space-y-2">
                    <p>
                      <strong>Inhaber:</strong> Manuel Praxmarer
                    </p>
                    <p>
                      <strong>UID-Nummer:</strong> [UID-Nummer]
                    </p>
                    <p>
                      <strong>Adresse:</strong> Feichten 102, 6524 Kaunertal, Austria
                    </p>
                  </div>
                </section>

                {/* Haftungsausschluss */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Haftungsausschluss</h2>
                  <div className="space-y-4">
                    <p>
                      <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit
                      größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                      der Inhalte können wir jedoch keine Gewähr übernehmen.
                    </p>
                    <p>
                      <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen
                      Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                      wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    </p>
                  </div>
                </section>

                {/* Urheberrecht */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Urheberrecht</h2>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung,
                    Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                    Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                    Erstellers.
                  </p>
                </section>

                {/* Datenschutz */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Datenschutz</h2>
                  <p>
                    Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener
                    Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise
                    Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit
                    möglich, stets auf freiwilliger Basis.
                  </p>
                  <p className="mt-4">
                    <strong>Datenschutzerklärung:</strong> Diese Website verwendet keine Cookies
                    oder Tracking-Tools. Es werden keine personenbezogenen Daten gespeichert oder an
                    Dritte weitergegeben.
                  </p>
                </section>

                {/* Gewerberecht */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Gewerberecht</h2>
                  <div className="space-y-2">
                    <p>
                      <strong>Gewerbe:</strong> Gastgewerbe (Bar, Restaurant)
                    </p>
                    <p>
                      <strong>Zuständige Behörde:</strong> Bezirkshauptmannschaft Landeck
                    </p>
                    <p>
                      <strong>Gewerbeberechtigung:</strong> Vorhanden
                    </p>
                  </div>
                </section>

                {/* Kontakt */}
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Kontakt</h2>
                  <div className="space-y-2">
                    <p>
                      <strong>Manuel Praxmarer</strong>
                    </p>
                    <p>Feichten 102</p>
                    <p>6524 Kaunertal, Austria</p>
                    <p>
                      <strong>Telefon:</strong> 0650 517 43 55
                    </p>
                    <p>
                      <strong>Email:</strong> zappadello@gmail.com
                    </p>
                  </div>
                </section>

                {/* Footer */}
                <div className="pt-8 border-t border-gray-600/40">
                  <p className="text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} ZappaDello - Alle Rechte vorbehalten
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
