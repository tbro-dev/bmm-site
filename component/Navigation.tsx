import { FC } from "react";

const Navigation: FC = () => {
  return (
    <>
      <nav id="mainNav">
        <div>
          <a href="/#page-top">Busy Making Media</a>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i aria-hidden="true"></i>
          </button>
          <div id="navbarResponsive">
            <ul>

              <li>
                <a href="/#services" data-bs-target="#services">Services</a>
              </li>

              <li>
                <a href="/#portfolio" data-bs-target="#portfolio">Portfolio</a>
              </li>

              <li>
                <a href="/#about" data-bs-target="#about">About</a>
              </li>

              <li>
                <a href="/#team" data-bs-target="#team">Team</a>
              </li>

              <li>
                <a href="/#contact" data-bs-target="#contact">Contact</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
