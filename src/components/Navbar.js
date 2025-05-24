"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "@/styles/styles.css";

// not full list of airport codes but just a few for now
const AIRPORT_CODES = [
  "MSP",
  "LAX",
  "JFK",
  "SFO",
  "ATL",
  "DFW",
  "DEN",
  "SEA",
  "MIA",
  "BOS",
];

export default function Navbar() {
  const [homeAirport, setHomeAirport] = useState("");
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* <Image
          src="/destinations_logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="navbar-logo"
        /> */}
        <span className="navbar-title">Destinations</span>
      </div>
      <div className="navbar-center">
        <select
          className="navbar-airport-dropdown"
          value={homeAirport}
          onChange={(e) => setHomeAirport(e.target.value)}
        >
          {AIRPORT_CODES.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
        <span className="navbar-airport-label">Home Airport</span>
      </div>
      <div className="navbar-right">
        <button className="navbar-btn">Favorites</button>
        <button className="navbar-btn">Profile</button>
        <button className="navbar-btn">Settings</button>
      </div>
    </nav>
  );
}