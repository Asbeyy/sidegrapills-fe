function Footer() {
  return (
    <footer>
      <div className="footer-up">
        <div className="box-footer-up">
          <div className="title-box-footer-up">MAPPE DU SITE</div>
          <a href="">Home</a>
          <a href="">Informations</a>
          <a href="">Acheter</a>
          <a href="">Medicament</a>
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
