import type { Metadata } from 'next';
import Link from 'next/link';
import { getPath } from '@/i18n/config';
import { getLegalMetadata } from '@/i18n/seo';
import { translations } from '@/i18n/translations';

export const metadata: Metadata = getLegalMetadata('personenschutz', 'en');

export default function EnglishPersonalProtectionPage() {
  const lang = 'en';
  const l = translations[lang].legal;
  const p = l.personenschutz;
  const lk = l.links;

  const sections = [
    { title: p.s1Title, text: p.s1p1, bullets: p.s1Bullets },
    { title: p.s2Title, text: p.s2p1, bullets: p.s2Bullets },
    { title: p.s3Title, text: p.s3p1 },
    { title: p.s4Title, text: p.s4p1, bullets: p.s4Bullets },
    { title: p.s5Title, text: p.s5p1 },
  ];

  return (
    <main className="min-h-screen bg-midnight py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href={getPath(lang, 'home')} className="inline-flex items-center gap-2 text-silver/60 hover:text-silver transition-colors duration-300 mb-12 text-sm">
          {l.back}
        </Link>

        <div className="glass-card p-8 lg:p-12 space-y-8">
          <div>
            <div className="flex items-baseline space-x-1 mb-8">
              <span className="text-2xl font-display font-bold text-silver tracking-tight">VIPSHUTTLE</span>
              <span className="text-xl font-display font-light text-silver/70">24</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">{p.h1}</h1>
            <p className="text-silver/70 leading-relaxed text-sm mt-4">{p.intro}</p>
          </div>

          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-display font-semibold text-silver mb-4">{section.title}</h2>
              <p className="text-silver/70 leading-relaxed text-sm">{section.text}</p>
              {section.bullets && (
                <ul className="list-disc list-inside text-silver/70 text-sm space-y-1.5 mt-3 marker:text-platinum">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{p.s6Title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm mb-4">{p.s6p1}</p>
            <address className="not-italic text-silver/70 leading-relaxed text-sm">
              <strong className="text-silver">{p.s6Name}</strong><br />
              {p.s6Company}<br />
              {p.s6Street}<br />
              {p.s6City}<br /><br />
              {p.s6Mobile}: <a href="tel:+491772472408" className="text-platinum hover:text-silver transition-colors">+49 177 2472408</a><br />
              {p.s6Email}: <a href="mailto:info@vipshuttle24.de" className="text-platinum hover:text-silver transition-colors">info@vipshuttle24.de</a>
            </address>
          </section>

          <div className="pt-4 border-t border-silver/10">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={getPath(lang, 'impressum')} className="text-silver/50 hover:text-silver transition-colors">{lk.impressum}</Link>
              <Link href={getPath(lang, 'datenschutz')} className="text-silver/50 hover:text-silver transition-colors">{lk.datenschutz}</Link>
              <Link href={getPath(lang, 'agb')} className="text-silver/50 hover:text-silver transition-colors">{lk.agb}</Link>
              <Link href={getPath(lang, 'home')} className="text-silver/50 hover:text-silver transition-colors">{lk.home}</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
