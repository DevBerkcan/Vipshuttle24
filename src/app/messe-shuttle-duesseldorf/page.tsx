import type { Metadata } from 'next';
import TransferPage from '@/components/TransferPage';

export const metadata: Metadata = {
  title: 'Messe-Shuttle Düsseldorf für Aussteller und Messegäste',
  description: 'Messe-Transfer zwischen Flughafen Düsseldorf, Hotel und Messegelände. Chauffeur, Limousine, Van oder Reisebus für Aussteller und Teams anfragen.',
  alternates: { canonical: '/messe-shuttle-duesseldorf' },
};

const sections = [
  {
    heading: 'Transfers zwischen Flughafen, Hotel und Messegelände',
    text: 'Wir holen Ihr Team am Flughafen Düsseldorf oder am Hotel ab und fahren es zum vereinbarten Eingang der Messe Düsseldorf. Auch Rückfahrten zum Hotel und Anschlüsse zu Kundenterminen oder Abendveranstaltungen lassen sich einplanen.',
  },
  {
    heading: 'Shuttle für einzelne Gäste und ganze Teams',
    text: 'Für einzelne Gäste und kleine Teams stehen Mercedes-Limousinen und Vans zur Verfügung. Für größere Gruppen organisieren wir einen Sprinter oder Reisebus, abgestimmt auf Personenzahl und Gepäck.',
  },
  {
    heading: 'Fahrten für mehrere Messetage planen',
    text: 'Nennen Sie bei Ihrer Anfrage die Messe, Einsatztage, Personenzahl sowie Abhol- und Zielorte. Wenn Sie morgens zur Messe und abends zurückfahren möchten, können wir beide Fahrten in einem Angebot zusammenfassen.',
  },
];

export default function TradeFairShuttle() {
  return (
    <TransferPage
      title="Messe-Shuttle Düsseldorf"
      intro="Chauffeurservice für Aussteller, Delegationen und Messegäste in Düsseldorf. Wir koordinieren Einzeltransfers und mehrtägige Shuttle-Fahrten zwischen Flughafen, Hotel und Messegelände."
      sections={sections}
      inquiry="Messe-Shuttle anfragen"
      related={{ href: '/flughafentransfer-duesseldorf', label: 'Flughafentransfer Düsseldorf' }}
    />
  );
}
