const AboutMe = () => {
  return (
    <>
      <div id="about-me">
          <div className="container about-container">
            <h2>
            <p>
                Hello,
              </p>
              <p>
                World<span>.</span>
              </p>
            </h2>
        </div>

      </div>
      <style jsx>{`
        div {
          height: 100vh;
          width: 100%;
        }

        .about-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content:center;
        }

        .about-container::before {
          position: absolute;
          content: ' ';
          top: 0;
          left: -50%;
          width: 100%;
          height: 100%;
          background: var(--main-color);
        }

        h2 {
          font-size: 120px;
          text-transform: uppercase;
          font-family: var(--head-font-fam);
          line-height: 120px;
          color: var(--dark-color);
          z-index: 200
        }

        span {
          color: var(--main-color);
        }
      `}</style>
    </>
  )
}

export default AboutMe;