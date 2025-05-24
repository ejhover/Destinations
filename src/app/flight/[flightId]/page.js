"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "@/styles/styles.css";

// example before api integration
const flights = [
  {
    id: "JFK-LAX",
    price: 299,
    from: "JFK",
    to: "LAX",
    airlineLogo: "/logos/delta.png",
    airlineName: "Delta Air Lines",
    duration: "6h 15m",
    departure: "10:00 AM",
    arrival: "1:15 PM",
    aircraft: "Boeing 737",
    seats: 12,
  },
];

export default function FlightDetails({ params }) {
  const { flightId } = params;
  const flight = flights.find(f => f.id === flightId);

  if (!flight) {
    return <div className="flight-details-container">Flight not found.</div>;
  }

  return (
    <div className="flight-details-container">
      <div className="flight-details-card">
        <div className="flight-details-header">
          <Image src={flight.airlineLogo} alt={flight.airlineName} width={64} height={64} className="flight-logo-img" />
          <div>
            <div className="flight-details-title">{flight.from} → {flight.to}</div>
            <div className="flight-details-airline">{flight.airlineName}</div>
          </div>
        </div>
        <div className="flight-details-info">
          <div><strong>Price:</strong> ${flight.price}</div>
          <div><strong>Flight Duration:</strong> {flight.duration}</div>
          <div><strong>Departure Time:</strong> {flight.departure}</div>
          <div><strong>Arrival Time:</strong> {flight.arrival}</div>
          <div><strong>Aircraft:</strong> {flight.aircraft}</div>
          <div><strong>Seats Available:</strong> {flight.seats}</div>
        </div>
        <button className="purchase-btn">Purchase Ticket</button>
      </div>
    </div>
  );
}