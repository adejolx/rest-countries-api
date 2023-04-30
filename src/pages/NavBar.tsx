import { useEffect, useState } from "react";
import Toggle from "../components/Toggle";
import Wrapper from "../components/Wrapper";
import { Outlet } from "react-router-dom";

const NavBar = ({ initialTheme = "dark" }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || initialTheme
  );

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const bodyEl = document.querySelector("body");
    bodyEl && bodyEl.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <header>
        <nav>
          <Wrapper className={"cluster space-between"}>
            <a href="#" className="text:lg bold">
              Where in the world?
            </a>
            <Toggle onClick={handleThemeToggle} />
          </Wrapper>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
