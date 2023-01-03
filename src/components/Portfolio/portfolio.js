import React from "react";
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG6 from '../../assets/portfolio6.jpg';
import IMG5 from '../../assets/portfolio5.png';


/* sample data */
const portfolioData = [
    {
        id: 1,
        title: 'Portfolio 1',
        image: IMG1,
        github: '',
        demo: '',
    },
    {
        id: 2,
        title: 'Portfolio 2',
        image: IMG2,
        github: '',
        demo: '',
    },
    {
        id: 3,
        title: 'Portfolio 3',
        image: IMG3,
        github: '',
        demo: '',
    },
    {
        id: 4,
        title: 'Portfolio 4',
        image: IMG4,
        github: '',
        demo: '',
    },
    {
        id: 5,
        title: 'Portfolio 5',
        image: IMG5,
        github: '',
        demo: '',
    },
    {
        id: 6,
        title: 'Portfolio 6',
        image: IMG6,
        github: '',
        demo: '',
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    portfolioData.map((item) => {
                        return (
                            <article className="portfolio__card" key={item.id}>
                                <div className="portfolio__card-image">
                                    <img src={item.image} alt={item.title}/>

                                </div>
                                <h3>{item.title}</h3>
                                <div className="portfolio__card-details">
                                    <a href={item.github} className="btn" target="_blank" rel="noreferrer">Github</a>
                                    <a href={item.demo} className="btn btn-primary" target={"_blank"} rel="noreferrer">Live
                                        Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;