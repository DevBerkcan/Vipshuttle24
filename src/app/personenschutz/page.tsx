import type { Metadata } from 'next';
import Link from 'next/link';
import { translations } from '@/i18n/translations';
import { getPath } from '@/i18n/config';
import { getLegalMetadata } from '@/i18n/seo';

export const metadata: Metadata = getLegalMetadata('personenschutz', 'de');

export default function Personenschutz() {
  const lang = 'de';
  const l = translations[lang].legal;
  const p = l.personenschutz;
  const lk = l.links;

  return (
    <main className="min-h-screen bg-midnight py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href={getPath(lang, 'home')}
          className="inline-flex items-center gap-2 text-silver/60 hover:text-silver transition-colors duration-300 mb-12 text-sm"
        >
          {l.back}
        </Link>

        <div className="glass-card p-8 lg:p-12 space-y-10">
          <div>
            <div className="flex items-baseline space-x-1 mb-8">
              <span className="text-2xl font-display font-bold text-silver tracking-tight">VIPSHUTTLE</span>
              <span className="text-xl font-display font-light text-silver/70">24</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">{p.h1}</h1>
            <p className="text-silver/70 leading-relaxed text-sm">{p.intro}</p>
          </div>

          {/* 1 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{p.s1Title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{p.s1p1}</p>
            <ul className="list-disc list-inside text-silver/70 text-sm space-y-1.5 marker:text-platinum">
              {p.s1Bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{p.s2Title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{p.s2p1}</p>
            <ul className="list-disc list-inside text-silver/70 text-sm space-y-1.5 marker:text-platinum">
              {p.s2Bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{p.s3Title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm">{p.s3p1}</p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{p.s4Title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{p.s4p1}</p>
            <ul className="list-disc list-inside text-silver/70 text-sm space-y-1.5 marker:text-platinum">
              {p.s4Bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{p.s5Title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm">{p.s5p1}</p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{p.s6Title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{p.s6p1}</p>
            <address className="not-italic text-silver/70 leading-relaxed text-sm">
              <strong className="text-silver">{p.s6Name}</strong>
              <br />
              {p.s6Company}
              <br />
              {p.s6Street}
              <br />
              {p.s6City}
              <br />
              <br />
              {p.s6Mobile}:{' '}
              <a href="tel:+491772472408" className="text-platinum hover:text-silver transition-colors">
                +49 177 2472408
              </a>
              <br />
              {p.s6Email}:{' '}
              <a href="mailto:info@vipshuttle24.de" className="text-platinum hover:text-silver transition-colors">
                info@vipshuttle24.de
              </a>
            </address>
          </section>

          <div className="pt-4 border-t border-silver/10">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={getPath(lang, 'impressum')} className="text-silver/50 hover:text-silver transition-colors">
                {lk.impressum}
              </Link>
              <Link href={getPath(lang, 'datenschutz')} className="text-silver/50 hover:text-silver transition-colors">
                {lk.datenschutz}
              </Link>
              <Link href={getPath(lang, 'agb')} className="text-silver/50 hover:text-silver transition-colors">
                {lk.agb}
              </Link>
              <Link href={getPath(lang, 'home')} className="text-silver/50 hover:text-silver transition-colors">
                {lk.home}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
