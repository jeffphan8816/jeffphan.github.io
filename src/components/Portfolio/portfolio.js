import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/system_architecture.png";

/* sample data */
const portfolioData = [
  {
    id: 1,
    title: "Real-time Data Streaming",
    image: IMG5,
    github: "https://github.com/jeffphan8816/data-engineer",
    demo: "",
  },
  {
    id: 2,
    title: "RMIT Nebula (RMIT Live Library - Capstone Project)",
    image: IMG1,
    github: "https://github.com/nebula-analytics",
    demo: "https://rmit-nebula.netlify.app/",
  },
  {
    id: 3,
    title: "Social Media App (MERN Fullstack App) ",
    image: IMG2,
    github: "https://github.com/jeffphan8816/socialmediafrontend",
    github2: "https://github.com/jeffphan8816/socialmediabackend",
    demo: "",
  },
  {
    id: 4,
    title: "E-commerce App (ReactJS + Stripe + Strapi)",
    image: IMG3,
    github: "https://github.com/jeffphan8816/ecommerce-app-server",
    github2: "https://github.com/jeffphan8816/ecommerce-app-client",
    demo: "",
  },
  {
    id: 5,
    title: "Portfolio",
    image: IMG4,
    github: "https://github.com/jeffphan8816/portfolio",
    demo: "https://jeffphan8816.github.io/portfolio/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map((item) => {
          return (
            <article className="portfolio__card" key={item.id}>
              <div className="portfolio__card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__card-details">
                <a
                  href={item.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>

                {item.github2 ? (
                  <a
                    href={item.github2}
                    className="btn"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Github 2
                  </a>
                ) : (
                  <></>
                )}
                {item.demo ? (
                  <a
                    href={item.demo}
                    className="btn btn-primary"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
