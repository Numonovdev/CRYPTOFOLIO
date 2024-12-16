import React, { useContext, useState } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { WatchlistContext } from "../contaxt/WatchlistContext";

function Header() {
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const { watchlist, setWatchlist } = useContext(WatchlistContext);

  function toggleWatchlist(e) {
    e.preventDefault();
    setIsWatchlistOpen((prevState) => !prevState);
  }

  function removeFromWatchlist(id) {
    const updatedWatchlist = watchlist.filter((item) => item.id !== id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlistData", JSON.stringify(updatedWatchlist));
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
            onClick={toggleWatchlist}
            className="sm:w-[133px] w-[80px] sm:h-10 h-5 flex items-center justify-center bg-BlueWhite hover:bg-BlueWhite/80 duration-500 rounded text-[8px] sm:text-sm font-medium leading-6 font-Roboto"
          >
            WATCH LIST
          </button>
        </div>
      </div>

      <div
        className={`fixed z-50 top-0 right-0 min-h-screen w-1/2 md:w-1/3 bg-[#515151] flex flex-col items-center gap-5 md:gap-10 pt-10 transition-transform duration-500 ease-in-out transform ${
          isWatchlistOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h1 className="text-white text-sm sm:text-[30px] leading-6 font-medium">
          WATCHLIST
        </h1>
        <FiX
          onClick={() => setIsWatchlistOpen(false)}
          className="cursor-pointer absolute text-xl right-3 text-white top-3"
        />
        <div className="flex flex-wrap gap-5 w-full items-center justify-center">
          {watchlist.length > 0 ? (
            watchlist.map((data) => (
              <div
                key={data.id}
                className="p-4 bg-black flex flex-col w-1/3 justify-center items-center rounded-xl"
              >
                <img
                  src={data.image}
                  alt={data.name}
                  className="rounded-md w-1/2"
                  loading="lazy"
                />
                <p className="font-Roboto text-sm sm:text-xl text-white mt-7">
                  ${data.market_cap.toLocaleString()}
                </p>
                <button
                  onClick={() => removeFromWatchlist(data.id)}
                  className="bg-[#FF0000] sm:w-[106px] flex items-center mt-3 justify-center px-1 text-sm sm:text-xl text-white"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-white text-sm sm:text-lg">No items in Watchlist</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
