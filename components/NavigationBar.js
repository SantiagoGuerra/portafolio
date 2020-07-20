import Social from './Social';

const NavigationBar = () => {

  return (
    <>
      <nav className="navigation-bar">
        <div className="container navigation-bar-container">
        
          <Social />
          <ul>
            <li>
              <a href="#about-me">
                About Me
              </a>
            </li>
            
            <li>
              <a href="#projects">
                Projects
              </a>
            </li>

            
            <li>
              <a href="#contact-me">
                Contact Me
              </a>
            </li>

          </ul>
        </div>
      </nav>
      <style jsx>{`

        .navigation-bar {
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          height: 72px;
          background: #fff;
          z-index: 9999;
        }

        .navigation-bar-container {
          display: flex;
          height: 100%;
          width: 100%;
          margin: auto;
          max-width: 1044px;
          justify-content: space-between;
          align-items: center;
        }

        ul {
          display: flex;
          list-style: none;
          padding: 0;
        }

        li {
          margin-right: 32px;
        }

        a {
          color: black;
          font-family: var(--head-font-fam);
          color: var(--dark-color);
          text-decoration: none;
          display: inline-flex;
          position: relative;
          align-items: center;
          overflow: hidden;
        }

        a::before {
          transition: all .3s ease-in-out;
          content: " ";
          height: 50%;
          background: var(--main-color);
          width: 50%;
          transform: translateX(-110%);
          position: absolute;
          z-index: -10;
        }

        a:hover::before {
          transform: translateX(0);
        }

        @media screen and (max-width: 1044px) {

          .navigation-bar {
            height: 52px;
            background-color: var(--dark-color)
          }

          .navigation-bar-container {
            justify-content: center;
          }

          ul {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default NavigationBar;