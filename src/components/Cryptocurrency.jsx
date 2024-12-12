import React from "react";
import img from "../components/bitcoin.png";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Cryptocurrency() {
  const navigate = useNavigate();
  function handleID(){
    navigate("/product")
  }
  return (
    <div  className="container flex items-center flex-col gap-3 sm:gap-5 sm:px-0 px-3 text-white mt-5 sm:mt-10">
      <h1 className="font-Montserrat text-[14px] sm:text-xl md:text-[34px]">
        Cryptocurrency Prices by Market Cap
      </h1>
      <input
        type="text"
        placeholder="Search For a Crypto Currency.."
        className="px-4 py-1 sm:py-2 text-sm sm:text-[16px] font-Roboto w-full bg-transparent border border-white/20 rounded outline-none"
      />
      <div className="w-full flex flex-col">
        {/* coin narxi tepa qismi */}
        <div className="w-full flex items-center px-3 sm:px-5 bg-[#87CEEB] h-10 sm:h-[56px] rounded text-black text-[8px] sm:text-sm font-bold font-Montserrat">
          <div className="w-2/5 flex items-center">
            <p>Coin</p>
          </div>
          <p className="w-1/5 text-end">Price</p>
          <p className="w-1/5 text-end">24h Change</p>
          <p className="w-1/5 text-end">Market Cap</p>
        </div>
           {/* coins  */}
        <div className="w-full flex flex-col">
          <div onClick={handleID} className="w-full flex items-center px-3 sm:px-5 border-b h-16 sm:h-[93px] rounded  text-[8px] sm:text-sm  font-Roboto">
            <div className="w-2/5 flex items-center gap-3">
              <img
                src={img}
                className="w-[25px] sm:w-[50px]"
                alt=""
                loading="lazy"
              />
              <div className="flex flex-col justify-center">
                <p className="text-sm sm:text-[22px] font-Roboto">BTC</p>
                <span className="font-Roboto text-[#A9A9A9] text-[8px] sm:text-sm ">
                  Bitcoin
                </span>
              </div>
            </div>
            <p className="w-1/5 text-end text-[8px] sm:text-sm">₹ 159,249.00</p>
            <p className="w-1/5 text-end text-[8px] sm:text-sm flex items-center justify-end gap-2 text-[#0ECB81] sm:gap-3"><span className="text-white"><IoEyeSharp /></span> +1.66%</p>
            <p className="w-1/5 text-end text-[8px] sm:text-sm">
              ₹ 19,147,834M
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cryptocurrency;
