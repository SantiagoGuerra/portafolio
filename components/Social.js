const Social = () => { 

  return (
    <>
    <ul>

      <li>
          <a href="https://github.com/SantiagoGuerra" target="_blank">
            <i className="ri-github-line"></i>
          </a>
        </li>
        
        <li>
          <a href="https://twitter.com/dedalo_g" target="_blank">
            <i className="ri-twitter-line"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/santiago--guerra/" target="_blank">
            <i className="ri-linkedin-line"></i>
          </a>
        </li>
        <li>
          <a href="https://cdnfast.imfast.io/Full-stack_Developer_Resume.PDF" target="_blank">
            <i className="ri-file-pdf-line"></i>
          </a>
        </li>

    </ul>
    <style jsx>{`
      ul {
        display: flex;
        list-style: none;
        align-items: center;
        z-index: 99
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
        height: 24px;
        width: 24px;
        justify-content: center;
        align-items: center;
      }

      i {
        font-size: 24px;
        color: var(--dark-color);
        transition: color .3s ease-in-out;
      }

      i:hover {
        color: var(--main-color)
      }

      @media screen and (max-width: 1044px) {
        ul {
          justify-content: space-evenly;
          width: 100%;
          max-width: 320px;
        }

        li {
          margin: 0
        }

        i {
          color: var(--main-color)
        }
      }
    `}</style>
    </>
  )
}

export default Social;