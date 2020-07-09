import Slide from 'react-reveal/Slide';

const AboutMe = () => {
  return (
    <>
      <div id="about-me">
          <div className="container about-container">
            
              <p className="description">
              Throughout my life I have filled myself with knowledge related to the world of Software Development, whose knowledge I share every day in various projects. I am always willing to help and contribute to my team. My passions are mathemathics, UI/UX design and programming.</p>
             
              <Slide>
              <h2>
                <p>
                  I'M
                </p>
                <p>
                  SANTIAGO GUERRA<span>.</span>
                </p>
                <p className="subtitle">
                Full-stack Developer
              </p>
              </h2>
              
            </Slide>
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
          justify-content: flex-end;
        }

        .about-container::before {
          position: absolute;
          content: ' ';
          top: 0;
          left: -30%;
          width: 100%;
          height: 100%;
          background: var(--main-color);
          z-index: -999
        }

        h2 {
          font-size: 120px;
          text-transform: uppercase;
          font-family: var(--head-font-fam);
          line-height: 120px;
          color: var(--dark-color);
          z-index: 200;
        }

        .subtitle {
          font-size: 48px;
          line-height: 48px;
          z-index: 20;
        }

        span {
          color: var(--main-color);
        }

        .description {
          font-size: 18px;
          color: #fff;
          font-family var(--font-fam);
          padding-right: 64px;
        }

        @media screen and (max-width: 1044px) {
          h2 {
            font-size: 48px;
            line-height: 48px;
            max-width: 450px;

          }

          .subtitle {
            font-size: 28px;
            line-height: 28px;
            margin-bottom: 24px;
          }

          .description {
            max-width: 450px;
            color: var(--dark-color)
          }

          .about-container {
            flex-direction: column-reverse;
            padding: 24px;
            justify-content: center;
            overflow: hidden;
          }

          .about-container::before {
            left: 0;
            background: #fff;
          }
        }
      `}</style>
    </>
  )
}

export default AboutMe;