import { NavLink, Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <header>
        <h1>Hoosier Trails Outfitters</h1>
        <nav aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/parks">Parks</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main><Outlet /></main>
      <footer>Hoosier Trails Outfitters | Bloomington, Indiana</footer>
    </>
  );
}
