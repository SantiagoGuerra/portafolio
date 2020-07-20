
const Footer = () => {

  return (
    <>
      <footer>
        Designed and developed By Santiago Guerra.
      </footer>
      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-top: 72px;
          color: var(--dark-color);
          font-family: var(--font-fam);
          text-align: center;
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