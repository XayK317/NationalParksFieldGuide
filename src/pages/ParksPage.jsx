import { Link } from "react-router";
import { parks } from "../data/parks.js";

export default function ParksPage() {
  return (
    <section>
      <h2>All Parks</h2>
      <div className="park-list">
        {parks.map((park) => (
          <Link className="park-card" to={`/parks/${park.id}`} key={park.id}>
            <img src={park.image} alt={park.name} />
            <h3>{park.name}</h3>
            <p>{park.state}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
