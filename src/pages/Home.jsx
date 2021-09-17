// Project files
import JSONSections from "../data/sections.json";
import SectionCard from "../components/SectionCard";

export default function Home() {
  // List of menu sections
  const SectionsList = JSONSections.map((item) => (
    <SectionCard key={item.id} sectionInfo={item} />
  ));
  return (
    <div>
      <section className="home-main">
        <div className="home-text">
          <h1>From Farm to Table</h1>
          <p>Ecological and sustainable products only</p>
          <p>Made with care and love for nature and planet</p>
        </div>
      </section>
      <section className="home-sections">{SectionsList}</section>
    </div>
  );
}
