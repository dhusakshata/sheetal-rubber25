import { useRef ,useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./hambarge.css";
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
// for navbar click to close functionality of dropdown

// State to track which dropdown is active (clicked)

const [activeDropdown, setActiveDropdown] = useState(null);


 // Function to toggle the dropdown state when a link is clicked
 const handleLinkClick = () => {

 setActiveDropdown(null); // Close any open dropdowns
 };

 // Function to toggle the active dropdown on hover
 const handleHover = (menu) => {

setActiveDropdown(menu);

};
	return (
		<div>
			
			<nav ref={navRef}>
				

      <Link to="/" onClick={handleLinkClick}>HOME</Link>
<Link to="/about" onClick={handleLinkClick}>ABOUT US</Link>
 {/* Dropdown Menu for Products */}
<div
className="dropdown"
 onMouseEnter={() => handleHover("products")} // Show on hover
onMouseLeave={() => setActiveDropdown(null)} // Hide on mouse leave
>
 <span className="dropdown-trigger">
 <Link to="/product">PRODUCTS</Link>
 </span>
 {activeDropdown === "products" && (
 <div className="dropdown-menu">
 <Link to="/siliconpolyester" onClick={handleLinkClick}>SLICONE - POLYESTER HOSES</Link>
 <Link to="/turbochargerhose" onClick={handleLinkClick}>TURBOCHARGER AND CAC HOSES</Link>

 <Link to="/marinewethose" onClick={handleLinkClick}>MARINE WET EXHAUST HOSES</Link>
 <Link to="/epdm" onClick={handleLinkClick}>EPDM RUBBER HOSES</Link>

 <Link to="/organic" onClick={handleLinkClick}>ORGANIC RUBBER HOSES</Link>
 <Link to="/Assembly" onClick={handleLinkClick}>ASEMBLY HOSES</Link>
 <Link to="/wired" onClick={handleLinkClick}>WIRE REINFORCED HOSES</Link>
 <Link to="/fueltube" onClick={handleLinkClick}>FUEL TUBES / HOSES</Link>
 <Link to="/moulded" onClick={handleLinkClick}>MOULDED HOSES</Link>
</div>
)}
 </div>
 {/* Dropdown Menu for Facilities */}
 <div
className="dropdown"
 onMouseEnter={() => handleHover("facilities")} // Show on hover
onMouseLeave={() => setActiveDropdown(null)} // Hide on mouse leave
 >
 <span className="dropdown-trigger">
 <Link to="/facilities">FACILITIES</Link>
 </span>
 {activeDropdown === "facilities" && (
<div className="dropdown-menu">
 <Link to="/manufacturing" onClick={handleLinkClick}>MANUFACTURING FACILITIES</Link>
 <Link to="/inhouse" onClick={handleLinkClick}>INHOUSE TESTING FACILITIES</Link>
 </div>
 )}
 </div>
 <Link to="/news" onClick={handleLinkClick}>NEWS & BLOGS</Link>
 <Link to="/career" onClick={handleLinkClick}>CAREERS</Link>
 <Link to="/contact" onClick={handleLinkClick}>CONTACT US</Link>


				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</div>
	);
}

export default Navbar;