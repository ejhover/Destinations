import Image from "next/image";
import "@/styles/styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="navbar-logo" />
        <span className="navbar-title">Destinations</span>
      </div>
      <div className="navbar-center">
        <input className="navbar-search" type="text" placeholder="Search flights..." />
      </div>
      <div className="navbar-right">
        <button className="navbar-btn">Favorites</button>
        <button className="navbar-btn">Profile</button>
        <button className="navbar-btn">Settings</button>
      </div>
    </nav>
  );
}