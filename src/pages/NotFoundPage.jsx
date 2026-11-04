import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section>
      <h2>Page not found</h2>
      <p>That page does not exist.</p>
      <Link to="/">Go home</Link>
    </section>
  );
}
