const Contact = () => {


  return (
    <>
      <div className="contact-me" id="contact-me">
        <div className="contact-container">
          <h2 className="contact-title">
            CONTACT ME
          </h2>
          <div className="form-container">
          <form action="https://formspree.io/mzbjayyo" method="POST" >
           
            <label>
              <span>Email:</span>
              <input type="email" name="email" required placeholder="Your Email"/>
            </label>
            
            <label>
              <span>Subject:</span>
              <input type="text" name="subject" required placeholder="How can I help you?"/>
            </label>
            <label>
              <span>Message: </span>
              <textarea name="message" required placeholder="Tell me more details..."></textarea>
            </label>
            <input type="submit" value="Send" className="btn"/>
          </form>
          <div className="shape-container">
            <img src="assets/shape.png"/>
          </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-me {
          margin-top: 72px;
        }

        .contact-title {
          font-size: 64px;
          line-height: 64px;
          font-family: var(--head-font-fam);
          margin-bottom: 32px;
          position: relative;
          display: inline-flex;
          align-items: center;
          color: var(--dark-color)
        }

        .contact-title::before {
          height: 50%;
          position: absolute;
          top: calc(50% - 16px);
          left: 0;
          width: 50%;
          z-index: -100;
          content: " ";
          background: var(--main-color)
        }

        form {
          display: flex;
          width: 50%;
          flex-direction: column;
        }

        span {
          font-family: var(--head-font-fam);
          font-size: 16px;
          width: 100%;
          display: block;
          margin-bottom: 6px;
          color: var(--dark-color)
        }

        input, textarea {
          height: 48px;
          width: 100%;
          border: 1px solid var(--dark-gray-color);
          font-family: var(--font-fam);
          font-size: 16px;
          padding-left: 16px;
          margin-bottom: 24px;
        }

        textarea {
          padding: 16px;
          min-height: 185px;
          resize: none;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--dark-color);
          
        }

        .btn {
          background: var(--main-color);
          color: #fff;
          width: 120px;
          display: flex;
          padding: 0;
          justify-content: center;
          border: none;
        }

        .form-container {
          display: flex;
          align-items: center;
        }

        .shape-container {
          flex-grow: 1;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  )
}

export default Contact