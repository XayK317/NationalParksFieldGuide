import { Link } from "react-router";

export default function HomePage() {
  return (
    <section>
      <h2>Explore the National Parks</h2>
      <p>Use this field guide to discover parks and plan your next outdoor trip.</p>
      <Link to="/parks">View all parks</Link>
    </section>
  );
}
