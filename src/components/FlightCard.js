"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@/styles/styles.css";

export default function FlightCard({ price, from, to, airlineLogo, airlineName }) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const extraInfo = (
    <div className="flight-extra-info">
      <div>Flight Duration: 6h 15m</div>
      <div>Departure Time: 10:00 AM</div>
      <div>Arrival Time: 1:15 PM</div>
      <div>Aircraft: Boeing 737</div>
      <div>Seats Available: 12</div>
    </div>
  );

  const handleDropdownClick = (e) => {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  };

  const handleCardClick = () => {
    router.push(`/flight/${from}-${to}`);
  };

  return (
    <div
      className={`flight-card${expanded ? " expanded" : ""}`}
      onClick={handleCardClick}
      tabIndex={0}
      style={{ position: "relative" }}
    >
      <div className="flight-card-main">
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
        <button
          className="flight-dropdown-btn"
          onClick={handleDropdownClick}
          aria-label={expanded ? "Hide details" : "Show details"}
        >
          <span className={`arrow${expanded ? " up" : ""}`}>▼</span>
        </button>
      </div>
      {expanded && (
        <div className="flight-card-details">
          {extraInfo}
        </div>
      )}
    </div>
  );
}