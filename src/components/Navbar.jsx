import { FaApple, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";

function Navbar() {
    return (
        <nav className="flex justify-between bg-black text-white p-4 text-[12px] sticky top-0 z-10">
            <div className="text-2xl">
                <FaApple />
            </div>
            <div className="md:hidden">
                <FiAlignJustify />
            </div>
            <ul className="section_2  gap-10 justify-center items-center hidden md:flex">
                <li><a href="#">Store</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">Airpods</a></li>
                <li><a href="#">TV & Home</a></li>
                <li><a href="#">Entertainment</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Support</a></li>
                <li><FaSearch /></li>
                <li><FaShoppingCart /></li>
            </ul>
        </nav>
    );
}

export default Navbar;
