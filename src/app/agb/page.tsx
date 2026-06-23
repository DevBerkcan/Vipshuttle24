import type { Metadata } from 'next';
import Link from 'next/link';
import { translations } from '@/i18n/translations';
import { getPath } from '@/i18n/config';
import { getLegalMetadata } from '@/i18n/seo';

export const metadata: Metadata = getLegalMetadata('agb', 'de');

export default function AGB() {
  const lang = 'de';
  const l = translations[lang].legal;
  const a = l.agb;
  const lk = l.links;

  const blocks = [
    a.preise, a.zahlung, a.leistung, a.mindest,
    a.wartezeit, a.fahrpreis, a.rauchen,
    a.haftungKunde, a.haftungsausschluss,
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
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">{a.h1}</h1>
          </div>

          {blocks.map((block) => (
            <section key={block.title}>
              <h2 className="text-xl font-display font-semibold text-silver mb-4">{block.title}</h2>
              <p className="text-silver/70 leading-relaxed text-sm">{block.text}</p>
            </section>
          ))}

          {/* Cancellation table */}
          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{a.storno.title}</h2>
            <div className="text-silver/70 text-sm leading-relaxed space-y-2">
              {[
                { label: a.storno.row1label, value: a.storno.row1value, color: 'text-green-400' },
                { label: a.storno.row2label, value: a.storno.row2value, color: 'text-yellow-400' },
                { label: a.storno.row3label, value: a.storno.row3value, color: 'text-orange-400' },
                { label: a.storno.row4label, value: a.storno.row4value, color: 'text-red-400' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center py-1 border-b border-silver/10 last:border-0">
                  <span>{row.label}</span>
                  <span className={`${row.color} font-medium ml-4`}>{row.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-display font-semibold text-silver mb-4">{a.gericht.title}</h2>
            <p className="text-silver/70 leading-relaxed text-sm">{a.gericht.text}</p>
          </section>

          <div className="pt-4 border-t border-silver/10">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href={getPath(lang, 'impressum')} className="text-silver/50 hover:text-silver transition-colors">{lk.impressum}</Link>
              <Link href={getPath(lang, 'datenschutz')} className="text-silver/50 hover:text-silver transition-colors">{lk.datenschutz}</Link>
              <Link href={getPath(lang, 'home')} className="text-silver/50 hover:text-silver transition-colors">{lk.home}</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
