import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import img from "../components/bitcoin.png";

function Header() {
  const [trueFalse, setTrueFalse] = useState(false);

  function handleWatchlist(e) {
    e.preventDefault();
    setTrueFalse(!trueFalse);
  }

  return (
    <div className="w-full relative boxShadow">
      <div className="container flex justify-between items-center py-5 px-2">
        <div>
          <Link to="/">
            <h1 className="text-BlueWhite sm:text-xl text-sm font-bold leading-[32px]">
              CRYPTOFOLIO
            </h1>
          </Link>
        </div>
        <div className="flex gap-3">
          <select className="bg-transparent text-sm sm:text-[16px] text-white cursor-pointer">
            <option className="bg-[#14161A]" value="USD">
              USD
            </option>
            <option className="bg-[#14161A]" value="EUR">
              EUR
            </option>
            <option className="bg-[#14161A]" value="RUB">
              RUB
            </option>
            <option className="bg-[#14161A]" value="UZS">
              UZS
            </option>
          </select>
          <button
            onClick={handleWatchlist}
            className="sm:w-[133px] w-[80px] sm:h-10 h-5 flex items-center justify-center bg-BlueWhite hover:bg-BlueWhite/80 duration-500 rounded text-[8px] sm:text-sm font-medium leading-6 font-Roboto"
          >
            WATCH LIST
          </button>
        </div>
      </div>

      {/* Animatsiya qo'llangan blok */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 md:w-1/3 bg-[#515151] flex flex-col items-center gap-5 md:gap-10 pt-10 transition-transform duration-500 ${
          trueFalse ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h1 className="text-white text-sm sm:text-[30px] leading-6 font-medium">
          WATCHLIST
        </h1>
        <FiX
          onClick={() => setTrueFalse(false)}
          className="cursor-pointer absolute text-xl right-3 text-white top-3"
        />
        <div className="flex flex-wrap gap-5 w-full items-center justify-center">
          {/* Kirib chiqqan coinlar ro'yxati */}
          <div className="py-4 px-7 bg-black flex flex-col justify-center items-center rounded-xl">
            <img src={img} alt="" className="rounded-md w-5/6" loading="lazy" />
            <p className="font-Roboto text-sm sm:text-xl text-white mt-7">
              ₹ 3,045,665.00
            </p>
            <button className="bg-[#FF0000] sm:w-[106px] flex items-center mt-3 justify-center px-1 text-sm sm:text-xl text-white">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
