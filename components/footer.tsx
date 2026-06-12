export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          David Flynn-Coutts
          <br />
          Senior Product Manager · London
        </div>
        <div className="footer__col">
          <a href="https://flynncoutts.com">flynncoutts.com</a>
          <br />
          <a href="https://david.flynncoutts.com">david.flynncoutts.com</a>
        </div>
        <div className="footer__col">
          © {new Date().getFullYear()}
          <br />
          Designed and built by David Flynn-Coutts
        </div>
      </div>
    </footer>
  )
}
