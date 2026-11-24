import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';

interface TransferPageProps {
  title: string;
  intro: string;
  sections: ReadonlyArray<{ heading: string; text: string }>;
  inquiry: string;
  related: { href: string; label: string };
}

export default function TransferPage({ title, intro, sections, inquiry, related }: TransferPageProps) {
  return (
    <>
      <Header />
      <main className="bg-midnight px-6 pb-20 pt-36 text-silver">
        <div className="mx-auto max-w-3xl">
          <Link href="/#services" className="text-sm underline">Alle Leistungen</Link>
          <h1 className="mb-5 mt-6 font-display text-4xl font-bold sm:text-5xl">{title}</h1>
          <p className="mb-7 text-lg leading-relaxed">{intro}</p>
          <Link href="/#booking" className="btn-primary inline-flex">{inquiry}</Link>
          <div className="my-12 grid gap-8">
            {sections.map(({ heading, text }) => (
              <section key={heading}>
                <h2 className="mb-2 font-display text-2xl font-semibold">{heading}</h2>
                <p className="leading-relaxed text-silver/80">{text}</p>
              </section>
            ))}
          </div>
          <Link href={related.href} className="underline">{related.label}</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
