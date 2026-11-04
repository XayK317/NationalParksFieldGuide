import { Link, useNavigate, useParams } from "react-router";
import { parks } from "../data/parks.js";

export default function ParkDetailPage() {
  const { parkId } = useParams();
  const navigate = useNavigate();
  const park = parks.find((item) => item.id === parkId);

  if (!park) {
    return (
      <section>
        <h2>Park not found</h2>
        <p>That park is not in our field guide.</p>
        <Link to="/parks">Back to all parks</Link>
      </section>
    );
  }

  return (
    <article>
      <button onClick={() => navigate("/parks")}>Back to all parks</button>
      <h2>{park.name}</h2>
      <img className="detail-image" src={park.image} alt={park.name} />
      <p><strong>State:</strong> {park.state}</p>
      <p>{park.description}</p>
      <p><strong>Best time to visit:</strong> {park.bestTime}</p>
      <p><strong>Activities:</strong> {park.activities}</p>
      <p><strong>Area:</strong> {park.area}</p>
      <h3>Highlights</h3>
      <ul>{park.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
    </article>
  );
}
