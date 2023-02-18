// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

// Styles
import "./Footer.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__left">
				<h3 className="footer__contact-title">Contact information</h3>
				<div className="footer__contact-info">
					<div className="footer__contact-phone">
						<FontAwesomeIcon icon={brands("whatsapp")} size="lg" />
						<span>666 11 22 33</span>
					</div>
					<div className="footer__contact-email">
						<FontAwesomeIcon icon={solid("envelope")} size="lg" />
						<a href="mailto:contact@mail.com">contact@mail.com</a>
					</div>
				</div>
			</div>

			<div className="footer__right">
				<div className="footer__right-social">
					<FontAwesomeIcon icon={brands("twitter")} size="lg" />
				</div>
				<div className="footer__right-social">
					<FontAwesomeIcon icon={brands("instagram")} size="lg" />
				</div>
				<div className="footer__right-social">
					<FontAwesomeIcon icon={brands("youtube")} size="lg" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
