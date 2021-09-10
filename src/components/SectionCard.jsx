//NPM Packages
import { Link } from "react-router-dom";

export default function SectionCard({ sectionInfo }) {
  //Constants
  const { category, title, description, photo } = sectionInfo;
  const photoObject = require(`../assets/pictures/menu/${photo}`);
  const photoURL = photoObject.default;
  return (
    <section className="section-card">
      <div className="card-preview">
        <img id="section-image" src={photoURL} alt={title} />
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`${category}`}>
          <button className="button-main">View menu</button>
        </Link>
      </div>
    </section>
  );
}
