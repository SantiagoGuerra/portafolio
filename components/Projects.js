import Flip from 'react-reveal/Flip';
import { v4 as uuidv4 } from 'uuid';

const Projects = () => {

const projectList = [{
    title: "Social Network",
    subtitle: "Ruby on Rails App",
    description: "A social network where you can share posts, receive likes and comments",
    links: [{
      name: "Source Code",
      href: "#"
    },
    {
      name: "Live Version",
      href: "#"
    }
  ]
  },
  {
    title: "Weather App",
    subtitle: "REST API Application",
    description: "Access current weather data for any location on Earth including over 200,000 cities!",
    links: [{
      name: "Live Preview",
      href: "http://awesome-weather-app.surge.sh/"
    },
    {
      name: "Source Code",
      href: "https://github.com/SantiagoGuerra/weather-app"
    }]
  },
  {
    title: "Endless Runner",
    subtitle: "JavaScript Video Game",
    description: "Using JavaScript to develop a fun video game where you can run and eat delicious apples.",
    links: [{
      name: "Live Preview",
      href: "https://runner-js.netlify.app/"
    },{
      name: "Source Code",
      href: "https://github.com/SantiagoGuerra/runner-js"
    }]
  },
  {
    title: "Task Manager",
    subtitle: "JavaScript Application",
    description: "Modularized using Webpack as a static module bundler and between other technologies.",
    links: [{
      name: "Live Preview",
      href:'https://ivanderlich.github.io/to-do/'
    },{
      name: "Source Code",
      href: "https://github.com/SantiagoGuerra/to-do"
    }]
  },
  {
    title: "Newsweek Clone",
    subtitle: "CSS Project",
    description: "Clone a website,I decided to clone the https://newsweek.com website (2019 Version)",
    links: [{
      name: "Live Preview",
      href:'https://santiagoguerra.me/using-bootstrap/'
    },{
      name: "Source Code",
      href: "https://github.com/SantiagoGuerra/using-bootstrap"
    }]
  },
]

  return (
    <>
    <div className="projects" id="projects">
      <div className="project-list-container">

      <h2 className="projects-title">
        PROJECTS
      </h2>
      <Flip left cascade>
      <div className="project-list">
      {projectList.map(project => {
          
          return (
          <div className="project" key={uuidv4()}>
            <div className="project-reveal">
              <h2 className="project-title">
                {project.title}
              </h2>
              <p className="project-subtitle">
                {project.subtitle}
              </p>
            </div>

            <div className="project-unreveal">
              <h2 className="project-title project-title__animate">
                {project.title}
              </h2>
              <p className="project-subtitle project-subtitle__animate">
                {project.subtitle}
              </p>
              <p className="project-description project-description__animate">
                {project.description}
              </p>

              <div>
                {project.links.map(link => <a href={`${link.href}`} className="link-animate" key={uuidv4()} target="_blank">{link.name}</a>)}
              </div>
            </div>
          </div>
          )
          
        })}
        
      </div>
      </Flip>
      </div>
    </div>

      <style jsx>{`
        .projects {
          margin-top: 72px;
        }

        .projects-title {
          font-size: 64px;
          line-height: 64px;
          font-family: var(--head-font-fam);
          margin-bottom: 32px;
          position: relative;
          display: inline-flex;
          align-items: center;
          color: var(--dark-color)
        }

        .projects-title::before {
          height: 50%;
          position: absolute;
          top: calc(50% - 16px);
          left: 0;
          width: 50%;
          z-index: -100;
          content: " ";
          background: var(--main-color)
        }

        .project-list {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
        }

        .project {
          background: var(--main-color);
          border: 2px solid #fff;
          width: 33%;
          height: 300px;
          position: relative;
          overflow: hidden;
        }

        .project:hover .project-unreveal {
          transform: translateY(0)
        }

        .project:hover .project-title__animate {
          transform: translateY(0)
        }

        .project:hover .project-subtitle__animate {
          transform: translateY(0)
        }

        .project:hover .project-description__animate {
          transform: translateY(0)
        }

        .project:hover .link-animate {
          transform: translateY(0)
        }

        .project-title {
          font-size: 28px;
          font-family: var(--head-font-fam);
          color: #fff;
        }

        .project-title__animate {
          transition: all .3s .1s ease-in-out;
          transform: translateY(700%);
        }

        .project-subtitle__animate {
          transition: all .3s .2s ease-in-out;
          transform: translateY(700%);
        }

        .project-description__animate {
          transition: all .3s .4s ease-in-out;
          transform: translateY(700%);
        }

        .link-animate {
          transition: all .3s .3s ease-in-out;
          transform: translateY(700%);
        }

        .project-subtitle {
          font-weight: 600;
          font-family: var(--font-fam);
          color: #fff;
          font-size: 16px;
        }

        .project-description {
          margin: 20px 0;
          color: var(--dark-gray-color);
          font-family: var(--font-fam);
          font-size: 16px;
        }

        .project-reveal {
          text-align: center;
          width: 100%;
          display: flex;
          flex-wrap: nowrap;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .project-unreveal {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateY(100%);
          background: var(--dark-color);
          padding: 50px 32px;
          transition: all .3s ease-in-out;
        }

        a {
          color: var(--main-color);
          font-family: var(--font-fam);
          margin-right: 32px;
        }


        

        @media screen and (max-width: 1044px) {
          .projects-title {
            font-size: 38px
          }

          .project {
            width: 50%;
            
          }
        }

        @media screen and (max-width: 720px) {
          .project {
            width: 100%;
            border: none;
            border-bottom: 4px solid #fff;
          }
        }
      `}</style>
    </>
  )
}

export default Projects;