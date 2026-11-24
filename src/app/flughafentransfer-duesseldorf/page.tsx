import type { Metadata } from 'next';
import TransferPage from '@/components/TransferPage';

export const metadata: Metadata = {
  title: 'Flughafentransfer Düsseldorf (DUS) mit Chauffeur',
  description: 'Privater Flughafentransfer zum und vom Flughafen Düsseldorf. Mercedes-Limousinen und Vans, Flugüberwachung und Abholung mit Namensschild.',
  alternates: { canonical: '/flughafentransfer-duesseldorf' },
};

const sections = [
  {
    heading: 'Abholung am Flughafen Düsseldorf',
    text: 'Geben Sie bei der Anfrage Ihre Flugnummer an. Wir verfolgen die Ankunftszeit und stimmen den Treffpunkt für die Abholung mit Ihnen ab. Auf Wunsch empfängt Sie Ihr Chauffeur mit Namensschild und hilft beim Gepäck.',
  },
  {
    heading: 'Vom Flughafen zum Hotel, zur Messe oder nach Hause',
    text: 'Wir fahren Sie vom Flughafen Düsseldorf zu Ihrer Zieladresse und holen Sie für den Rückflug auch vom Hotel, Büro oder von zu Hause ab. Je nach Personenzahl und Gepäck wählen wir mit Ihnen eine Mercedes-Limousine oder einen Van.',
  },
  {
    heading: 'Welche Angaben brauchen wir für das Angebot?',
    text: 'Teilen Sie uns Datum, Flugnummer, Abhol- und Zieladresse, Personenzahl und Gepäckmenge mit. Sie erhalten ein individuelles Angebot für Ihre Strecke und das passende Fahrzeug.',
  },
];

export default function AirportTransfer() {
  return (
    <TransferPage
      title="Flughafentransfer Düsseldorf (DUS)"
      intro="Privater Transfer mit Chauffeur zum und vom Flughafen Düsseldorf. Für Geschäftsreisende, Privatkunden und Gruppen organisieren wir die Fahrt vom vereinbarten Treffpunkt direkt zum Ziel."
      sections={sections}
      inquiry="Flughafentransfer anfragen"
      related={{ href: '/messe-shuttle-duesseldorf', label: 'Messe-Shuttle Düsseldorf' }}
    />
  );
}
