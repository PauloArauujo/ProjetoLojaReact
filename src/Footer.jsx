import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <h2 className="cinzafooter"></h2>
      <h2 className="azulfooter">
        <div className="elmentfooter">
          <a
            href="https://www.instagram.com/LV._MULTIMARCA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="iconsFooter" />
          </a>
          <a
            href="https://wa.me/+5511966879756" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="iconsFooters" />
          </a>
        </div>
        <p className="pfooter">© 2024 LVmultimarcas </p>
      </h2>
    </div>
  );
};
export default Footer;
