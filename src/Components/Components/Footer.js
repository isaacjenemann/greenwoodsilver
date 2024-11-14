import { PAYMENTS } from "../Inventory";
import { assets } from "../../Utils/helpers";

function Footer(){
  const payments = PAYMENTS;
    return (
      <div className="footer">
        <a href="https://www.isaacjenemann.com/" id="signature">
          built by isaac © 2024
        </a>
        <div className="payment">
          {payments.map((payment) => (
            <img className="payment-icon" alt="payment icon" src={assets(payment)}/>
          ))}
          
        </div>
        <a href="https://www.instagram.com/greenwood.silver/">
          <img id="footer-social" src="/Assets/instagram.png" alt="Instagram" />
        </a>
      </div>
    );
}

export default Footer; 