import MobileNav from "./MobileNav/MobileNav";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0",
        height: "60px",
        backgroundColor: "#8e8d8d",
      }}
    >
      <button className="logo" style={{ background: "none", border: "none" }}>
        <img src={logo} alt="Logo" />
      </button>
      <MobileNav />
    </header>
  );
}
