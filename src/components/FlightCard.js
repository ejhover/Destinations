import Image from "next/image";
import "../../styles/styles.css";

export default function FlightCard({ price, from, to, airlineLogo, airlineName }) {
  return (
    <div className="flight-card">
      <div className="flight-logo">
        <Image
          src={airlineLogo}
          alt={airlineName}
          fill
          className="flight-logo-img"
          sizes="(max-width: 640px) 48px, 64px"
        />
      </div>
      <div className="flight-info">
        <div className="flight-route">{from} → {to}</div>
        <div className="flight-airline">{airlineName}</div>
      </div>
      <div className="flight-price">${price}</div>
    </div>
  );
}