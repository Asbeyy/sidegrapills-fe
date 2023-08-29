import { Link } from "react-scroll";

function Footer() {
  return (
    <footer>
      <div className="footer-up">
        <div className="box-footer-up">
          <div className="title-box-footer-up">MAPPE DU SITE</div>

          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="informations" smooth={true} duration={500}>
            Informations
          </Link>
          <Link to="buy" smooth={true} duration={500}>
            Acheter
          </Link>
          <Link to="product-info" offset={-150} smooth={true} duration={500}>
            Medicament
          </Link>
        </div>

        <div className="box-footer-up">
          <div className="title-box-footer-up">AVIS LEGALE</div>
          <a href="/terms">Termes et conditions</a>
          <a href="/terms">Policies de retour</a>
          <a href="/terms">Moyens de payement</a>
        </div>

        <div className="box-footer-up">
          <div className="title-box-footer-up">WIKI</div>
          <a href="https://www.mayoclinic.org/diseases-conditions/erectile-dysfunction/symptoms-causes/syc-20355776">
            Dysfunction Erectile
          </a>
          <a href="https://www.ndrugs.com/?s=sidegra">Sidegra</a>
          <a href="https://www.ndrugs.com/?s=sidegra&t=dosage">Dosage</a>
        </div>
      </div>
      <div className="footer-down">
        <div>Copyright SidegraPills 2023</div>
      </div>
    </footer>
  );
}

export default Footer;
