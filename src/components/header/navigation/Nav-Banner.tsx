import React from "react";
import {
  FiMail,
  FiPhoneCall,
  FiShoppingCart,
  FiUser,
  FiHeart,
} from "react-icons/fi";

type Props = {};

const NavBanner = (props: Props) => {
  return (
    <nav className="py-3 bg-primary text-white text-xs">
      <main className="container mx-auto flex flex-col justify-between space-y-2 md:space-y-0 md:flex-row ">
        <div className="flex items-center space-x-7">
          <div className="flex items-center space-x-2">
            <FiMail />
            <p>pongsakan.o@hotmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <FiPhoneCall />
            <p>(+12345)67890</p>
          </div>
        </div>

        <div className="flex items-center space-x-7">
          <div className="flex items-center space-x-1">
            <FiUser />
            <p className="mr-7">Login</p>
          </div>
          <div className="flex items-center space-x-1">
            <FiHeart />
            <p className="mr-7">Wishlist</p>
          </div>
          <div className="indicator">
            <span className="indicator-item badge badge-sm badge-secondary p-1 z-0">9</span>
            <FiShoppingCart size={19} />
          </div>
        </div>
      </main>
    </nav>
  );
};

export default NavBanner;
