
const Footer = () => {

  return (
    <>
      <footer>
        Designed and developed By <a href="https://santiagoguerra.me"> Santiago G.</a>
      </footer>
      <style jsx>{`
        footer {
          padding: 32px;
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 72px;
          color: var(--dark-color);
          font-family: var(--font-fam);
        }

        a {
          margin-left: 4px;
          color: var(--main-color)
        }
      `}</style>
    </>
  )
}

export default Footer;