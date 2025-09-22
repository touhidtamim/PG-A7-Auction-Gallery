import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto px-5">
        <div className="navbar min-h-16">
          <div className="navbar-start">
            {/* left part */}
            <div className="text-xl font-bold">
              <span className="text-blue-800">Auction</span>
              <span className="text-yellow-500">Gallery</span>
            </div>
          </div>

          {/* middle buttons */}
          <div className="navbar-center flex">
            <ul className="menu menu-horizontal px-1 gap-6">
              <li>
                <a className="font-semibold text-gray-900 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a className="font-semibold text-gray-900 hover:text-gray-900">
                  Auctions
                </a>
              </li>
              <li>
                <a className="font-semibold text-gray-900 hover:text-gray-900">
                  Categories
                </a>
              </li>
              <li>
                <a className="font-semibold text-gray-900 hover:text-gray-900">
                  How to works
                </a>
              </li>
            </ul>
          </div>

          {/* Right part */}
          <div className="navbar-end">
            <div className="flex gap-3 items-center">
              <button className="btn btn-ghost btn-circle">
                <FontAwesomeIcon
                  icon={faBell}
                  className="text-lg text-gray-600"
                />
              </button>
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://i.pravatar.cc/100" alt="User avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
