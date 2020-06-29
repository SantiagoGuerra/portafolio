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
    title: "Social Network",
    subtitle: "Ruby on Rails App",
    description: "A social network where you can share posts, receive likes and comments",
    links: [{
      name: "Source Code",
      href: "#"
    }]
  },
  {
    title: "Social Network",
    subtitle: "Ruby on Rails App",
    description: "A social network where you can share posts, receive likes and comments",
    links: [{
      name: "Source Code",
      href: "#"
    }]
  },
  {
    title: "Social Network",
    subtitle: "Ruby on Rails App",
    description: "A social network where you can share posts, receive likes and comments",
    links: [{
      name: "Source Code",
      href: "#"
    }]
  },
  {
    title: "Social Network",
    subtitle: "Ruby on Rails App",
    description: "A social network where you can share posts, receive likes and comments",
    links: [{
      name: "Source Code",
      href: "#"
    },{
      name: "Source Code",
      href: "#"
    }]
  },
]

  return (
    <>
    <div className="projects" id="projects">
      <div className="container project-list-container">

      <h2 className="projects-title">
        PROJECTS
      </h2>

      <div className="project-list">
      {projectList.map(project => {
          
          return (
          <div className="project">
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
                {project.links.map(link => <a href={`${link.href}`} className="link-animate">{link.name}</a>)}
              </div>
            </div>
          </div>
          )
          
        })}
        
      </div>
        
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
          width: 362px;
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
          transition: all .3s .3s ease-in-out;
          transform: translateY(700%);
        }

        .project-subtitle__animate {
          transition: all .3s .4s ease-in-out;
          transform: translateY(700%);
        }

        .project-description__animate {
          transition: all .3s .5s ease-in-out;
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
      `}</style>
    </>
  )
}

export default Projects;