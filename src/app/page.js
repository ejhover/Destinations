import Image from "next/image";
import FlightCard from "@/components/FlightCard";
import Navbar from "@/components/Navbar";
import "@/styles/styles.css";

const flights = [
  {
    price: 299,
    from: "JFK",
    to: "LAX",
    airlineLogo: "/logos/delta.png",
    airlineName: "Delta Air Lines",
  },
  {
    price: 350,
    from: "ORD",
    to: "SFO",
    airlineLogo: "/logos/united.png",
    airlineName: "United Airlines",
  },
  {
    price: 299,
    from: "JFK",
    to: "LAX",
    airlineLogo: "/logos/delta.png",
    airlineName: "Delta Air Lines",
  },
  {
    price: 350,
    from: "ORD",
    to: "SFO",
    airlineLogo: "/logos/united.png",
    airlineName: "United Airlines",
  },
  {
    price: 299,
    from: "JFK",
    to: "LAX",
    airlineLogo: "/logos/delta.png",
    airlineName: "Delta Air Lines",
  },
  {
    price: 350,
    from: "ORD",
    to: "SFO",
    airlineLogo: "/logos/united.png",
    airlineName: "United Airlines",
  },
  {
    price: 299,
    from: "JFK",
    to: "LAX",
    airlineLogo: "/logos/delta.png",
    airlineName: "Delta Air Lines",
  },
  {
    price: 350,
    from: "ORD",
    to: "SFO",
    airlineLogo: "/logos/united.png",
    airlineName: "United Airlines",
  }
];

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="flights-list">
        {flights.map((flight, idx) => (
          <FlightCard key={idx} {...flight} />
        ))}
      </div>
    </div>
  );
}
