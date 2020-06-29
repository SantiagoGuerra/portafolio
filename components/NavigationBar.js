const NavigationBar = () => {

  return (
    <>
      <nav class="navigation-bar">
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
      </nav>
      <style jsx>{`
        nav {
          background: red;
        }
      `}</style>
    </>
  )
}

export default NavigationBar;