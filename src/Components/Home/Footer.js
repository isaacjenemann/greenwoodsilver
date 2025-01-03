import { PAYMENTS } from "../Inventory";
import { assets } from "../../Utils/helpers";

function Footer(){
  const payments = PAYMENTS;
    return (
      <div className="footer">
        <div className="footer-column" id="left">
          <div className="socials">
            <a href="https://www.instagram.com/greenwood.silver/">
              <img
                id="footer-social"
                src="/Assets/instagram.png"
                alt="Instagram"
              />
            </a>
          </div>
          <a href="https://www.isaacjenemann.com/" id="signature">
            built by isaac © 2024
          </a>
        </div>

        <div className="footer-column"></div>

        <div className="footer-column" id="right">
          <div className="payment">
            {payments.map((payment) => (
              <img
                className="payment-icon"
                alt="payment icon"
                src={assets(payment)}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Footer; 