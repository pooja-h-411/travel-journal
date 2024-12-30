import { Header } from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const travelEntries = data.map((place) => {
    return (
      // <Entry
      //   key={place.id}
      //   image={place.img}
      //   title={place.title}
      //   countryName={place.country}
      //   mapsLink={place.googleMapsLink}
      //   date={place.dates}
      //   info={place.text}
      // />
      <Entry key={place.key} {...place} />
    );
  });
  return (
    <>
      <Header />
      <main className="container">{travelEntries}</main>
    </>
  );
}
