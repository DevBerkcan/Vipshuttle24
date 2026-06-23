import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaShieldAlt, FaArrowRight, FaPhone, FaCheckCircle,
  FaUserShield, FaBriefcase, FaStar, FaUsers, FaCar, FaBuilding,
  FaChevronLeft,
} from 'react-icons/fa';
import { translations } from '@/i18n/translations';
import { getPath } from '@/i18n/config';
import { getLegalMetadata } from '@/i18n/seo';

export const metadata: Metadata = getLegalMetadata('personenschutzDetail', 'de');

const SERVICE_ICONS = [FaUserShield, FaBriefcase, FaStar, FaUsers, FaCar, FaBuilding];

export default function PersonenschutzServicePage() {
  const lang = 'de';
  const d = translations[lang].legal.personenschutzDetail;
  const l = translations[lang].legal;

  return (
    <main className="min-h-screen bg-midnight">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/57.png"
            alt="VIPSHUTTLE24 Personenschutz – diskreter Begleitschutz im Mercedes"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/60" />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-silver/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-platinum/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24">
          <Link
            href={`${getPath(lang, 'home')}#services`}
            className="inline-flex items-center gap-2 text-silver/60 hover:text-silver transition-colors duration-300 mb-10 text-sm group"
          >
            <FaChevronLeft className="text-xs group-hover:-translate-x-0.5 transition-transform duration-300" />
            {d.back}
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card mb-6">
              <FaShieldAlt className="text-platinum text-sm" aria-hidden="true" />
              <span className="text-silver text-xs font-medium tracking-widest uppercase">
                {d.heroEyebrow}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-gradient leading-tight mb-6">
              {d.heroH1}
            </h1>
            <p className="text-silver/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
              {d.heroLead}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#booking-cta" className="btn-primary inline-flex items-center justify-center gap-2">
                {d.heroCtaPrimary}
                <FaArrowRight className="text-sm" aria-hidden="true" />
              </a>
              <a
                href="tel:+491772472408"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card text-silver hover:text-platinum transition-colors duration-300"
              >
                <FaPhone className="text-sm" aria-hidden="true" />
                {d.heroCtaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO / PHILOSOPHY ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-silver/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="glass-card overflow-hidden">
            <div className="flex flex-col lg:grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-72 sm:h-96 lg:h-auto lg:min-h-[500px] overflow-hidden lg:order-1">
                <Image
                  src="/58.png"
                  alt="VIPSHUTTLE24 Personenschutz – professioneller Begleitschutz in Düsseldorf"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-midnight/20 hidden lg:block" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-14 space-y-5 lg:order-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-xl flex items-center justify-center">
                  <FaShieldAlt className="text-2xl sm:text-3xl text-silver" aria-hidden="true" />
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient mb-5 leading-tight">
                    {d.introH2}
                  </h2>
                  <p className="text-silver/80 leading-relaxed text-sm sm:text-base mb-4">{d.introP1}</p>
                  <p className="text-silver/70 leading-relaxed text-sm sm:text-base">{d.introP2}</p>
                </div>

                <div className="flex items-center gap-3 px-4 py-3 glass-card w-fit">
                  <div className="w-1 h-8 bg-gradient-to-b from-silver to-platinum rounded-full flex-shrink-0" />
                  <span className="text-silver/70 text-xs sm:text-sm">20+ Jahre Erfahrung mit anspruchsvollen VIP-Klienten</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-platinum/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <div className="inline-block px-5 py-2 glass-card mb-5">
              <span className="text-silver text-xs sm:text-sm font-medium tracking-widest uppercase">
                Leistungen
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-4 leading-tight">
              {d.servicesH2}
            </h2>
            <p className="text-silver/70 text-sm sm:text-base">{d.servicesSubline}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {d.services.map((service, index) => {
              const Icon = SERVICE_ICONS[index] ?? FaShieldAlt;
              return (
                <div
                  key={service.title}
                  className="glass-card p-6 sm:p-7 group hover:shadow-glow transition-all duration-300"
                  style={{ animation: `slideUp 0.6s ease-out ${index * 0.1}s both` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-xl flex items-center justify-center mb-5 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="text-2xl text-silver" aria-hidden="true" />
                  </div>
                  <h3 className="text-silver font-display font-bold text-lg mb-2 group-hover:text-silver-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-silver/70 text-sm leading-relaxed">{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: 'rgba(0,0,0,0.2)' }}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-silver/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <div className="inline-block px-5 py-2 glass-card mb-5">
              <span className="text-silver text-xs sm:text-sm font-medium tracking-widest uppercase">
                Ablauf
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-4 leading-tight">
              {d.processH2}
            </h2>
            <p className="text-silver/70 text-sm sm:text-base">{d.processSubline}</p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {d.process.map((p, index) => (
              <li
                key={p.step}
                className="glass-card p-6 sm:p-7 relative group hover:shadow-glow transition-all duration-300"
                style={{ animation: `slideUp 0.6s ease-out ${index * 0.12}s both` }}
              >
                <div className="text-6xl font-display font-bold text-platinum/15 mb-5 leading-none select-none group-hover:text-platinum/30 transition-colors duration-300">
                  {p.step}
                </div>
                <h3 className="text-silver font-display font-bold text-lg mb-2 group-hover:text-silver-light transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-silver/70 text-sm leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-silver/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-5 py-2 glass-card mb-5">
              <span className="text-silver text-xs sm:text-sm font-medium tracking-widest uppercase">
                Unsere Stärken
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient leading-tight">
              {d.whyH2}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {d.why.map((item, index) => (
              <div
                key={item.title}
                className="glass-card p-6 sm:p-8 flex gap-5 group hover:shadow-glow transition-all duration-300"
                style={{ animation: `slideUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                  <FaCheckCircle className="text-platinum text-lg" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-silver font-display font-bold text-lg mb-2 group-hover:text-silver-light transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-silver/70 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="glass-card p-5 sm:p-6 border border-silver/10 flex gap-4 items-start">
            <FaShieldAlt className="text-silver/30 text-xl flex-shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-silver/60 font-semibold text-xs uppercase tracking-widest mb-1">
                {d.disclaimerH2}
              </p>
              <p className="text-silver/50 text-xs sm:text-sm leading-relaxed">{d.disclaimerText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="booking-cta" className="py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="glass-card p-8 sm:p-10 lg:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-silver/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-platinum/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-silver/20 to-platinum/20 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                <FaShieldAlt className="text-2xl sm:text-3xl text-silver" aria-hidden="true" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-4 leading-tight">
                {d.ctaH2}
              </h2>
              <p className="text-silver/70 text-base sm:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
                {d.ctaSubline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+491772472408"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <FaPhone className="text-sm" aria-hidden="true" />
                  {d.ctaCall}
                </a>
                <Link
                  href={`${getPath(lang, 'home')}#booking`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card text-silver hover:text-platinum transition-colors duration-300"
                >
                  {d.ctaForm}
                  <FaArrowRight className="text-sm" aria-hidden="true" />
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-silver/10 flex flex-wrap justify-center gap-4 text-xs">
                <Link
                  href={getPath(lang, 'datenschutz')}
                  className="text-silver/40 hover:text-silver/70 transition-colors"
                >
                  {l.links.datenschutz}
                </Link>
                <Link
                  href={getPath(lang, 'impressum')}
                  className="text-silver/40 hover:text-silver/70 transition-colors"
                >
                  {l.links.impressum}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
