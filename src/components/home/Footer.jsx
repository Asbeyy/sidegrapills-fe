import { Link } from "react-scroll";

function Footer(props) {
  return (
    <footer>
      <div className="footer-up">
        <div className="box-footer-up">
          <div className="title-box-footer-up">
            {props.language.footer_title1}
          </div>

          <Link to="home" smooth={true} duration={500}>
            {props.language.footer_l_1}
          </Link>
          <Link to="informations" smooth={true} duration={500}>
            {props.language.footer_l_2}
          </Link>
          <Link to="buy" smooth={true} duration={500}>
            {props.language.footer_l_3}
          </Link>
          <Link to="product-info" offset={-150} smooth={true} duration={500}>
            {props.language.footer_l_4}
          </Link>
        </div>

        <div className="box-footer-up">
          <div className="title-box-footer-up">
            {props.language.footer_title2}
          </div>
          <a href="/terms">{props.language.footer_l1_1}</a>
          <a href="/terms">{props.language.footer_l1_2}</a>
          <a href="/terms">{props.language.footer_l1_3}</a>
        </div>

        <div className="box-footer-up">
          <div className="title-box-footer-up">
            {props.language.footer_title3}
          </div>
          <a href="https://www.mayoclinic.org/diseases-conditions/erectile-dysfunction/symptoms-causes/syc-20355776">
            {props.language.footer_l2_1}
          </a>
          <a href="https://www.ndrugs.com/?s=sidegra">
            {props.language.footer_l2_2}
          </a>
          <a href="https://www.ndrugs.com/?s=sidegra&t=dosage">
            {props.language.footer_l2_3}
          </a>
        </div>
      </div>
      <div className="footer-down">
        <div>Copyright SidegraPills 2023</div>
      </div>
    </footer>
  );
}

export default Footer;
