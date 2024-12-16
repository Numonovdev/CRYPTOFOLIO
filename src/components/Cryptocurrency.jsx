  import React, { useContext, useEffect, useState } from "react";
  import { IoEyeSharp } from "react-icons/io5";
  import { useNavigate } from "react-router-dom";
  import Pagination from "./Pagination";
  import gif from "../images/gif.gif";
  import { WatchlistContext } from "../contaxt/WatchlistContext";

  function Cryptocurrency() {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [qidiruv, setQidiruv] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const { watchlist, setWatchlist } = useContext(WatchlistContext);

    useEffect(() => {
      const watchlistData = JSON.parse(localStorage.getItem("watchlistData")) || [];
      setWatchlist(watchlistData);

      setLoading(true);
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setDatas(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("API Error:", err);
          setLoading(false);
        });
    }, [currentPage]);

    function handlePageChange(newPage) {
      setCurrentPage(newPage);
    }

    function handleWatchList(id) {
      const selectedCoin = datas.find((data) => data.id === id);
      const watchlistData = JSON.parse(localStorage.getItem("watchlistData")) || [];

      if (!watchlistData.some((data) => data.id === id)) {
        const updatedWatchlist = [...watchlistData, selectedCoin];
        localStorage.setItem("watchlistData", JSON.stringify(updatedWatchlist));
        setWatchlist(updatedWatchlist);
      }
    }

    function handleID(id) {
      navigate(`/product/${id}`);
    }

    if (loading) {
      return (
        <div className="container flex justify-center mx-auto text-white mt-10">
          <img src={gif} alt="Yuklanmoqda..." />
        </div>
      );
    }

    const filterQidiruv = qidiruv
      ? datas.filter(
          (data) =>
            data.name.toLowerCase().includes(qidiruv.toLowerCase()) ||
            data.symbol.toLowerCase().includes(qidiruv.toLowerCase())
        )
      : datas;

    return (
      <div className="container flex items-center flex-col gap-3 sm:gap-5 sm:px-0 px-3 text-white mt-5 sm:mt-10">
        <h1 className="font-Montserrat text-[14px] sm:text-xl md:text-[34px]">
          Cryptocurrency Prices by Market Cap
        </h1>
        <input
          value={qidiruv}
          onChange={(e) => setQidiruv(e.target.value)}
          type="text"
          placeholder="Search For a Crypto Currency.."
          className="px-4 py-1 sm:py-2 text-sm sm:text-[16px] font-Roboto w-full bg-transparent border border-white/20 rounded outline-none"
        />
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center px-3 sm:px-5 bg-[#87CEEB] h-10 sm:h-[56px] rounded text-black text-[8px] sm:text-sm font-bold font-Montserrat">
            <div className="w-2/5 flex items-center">
              <p>Coin</p>
            </div>
            <p className="w-1/5 text-end">Price</p>
            <p className="w-1/5 text-end">24h Change</p>
            <p className="w-1/5 text-end">Market Cap</p>
          </div>
          <div className="w-full flex flex-col gap-1">
            {filterQidiruv.length > 0 ? (
              filterQidiruv.map((data) => (
                <div
                  key={data.id}
                  className="w-full flex items-center px-3 sm:px-5 border-b h-16 sm:h-[93px] rounded text-[8px] sm:text-sm font-Roboto"
                >
                  <div
                    onClick={() => handleID(data.id)}
                    className="cursor-pointer w-2/5 flex items-center gap-3"
                  >
                    <img
                      src={data.image}
                      className="w-[25px] sm:w-[50px]"
                      alt={data.name}
                      loading="lazy"
                    />
                    <div className="flex flex-col justify-center">
                      <p className="text-sm sm:text-[22px] font-Roboto">
                        {data.symbol.toUpperCase()}
                      </p>
                      <span className="font-Roboto text-[#A9A9A9] text-[8px] sm:text-sm">
                        {data.name}
                      </span>
                    </div>
                  </div>
                  <p className="w-1/5 text-end text-[8px] sm:text-sm">
                    ${data.current_price.toLocaleString()}
                  </p>
                  <p
                    className={`w-1/5 text-end text-[8px] sm:text-sm flex items-center justify-end gap-2 sm:gap-3 ${
                      data.price_change_percentage_24h > 0
                        ? "text-[#0ECB81]"
                        : "text-red-700"
                    }`}
                  >
                    <IoEyeSharp
                      className="text-white cursor-pointer"
                      onClick={() => handleWatchList(data.id)}
                    />
                    {data.price_change_percentage_24h.toFixed(2)}%
                  </p>
                  <p className="w-1/5 text-end text-[8px] sm:text-sm">
                    ${data.market_cap.toLocaleString()}
                  </p>
                </div>
              ))
            ) : (
              <div className="text-center text-2xl text-red-600">
                <p>Hech qanday ma'lumot topilmadi.</p>
              </div>
            )}
          </div>
          <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
      </div>
    );
  }

  export default Cryptocurrency;
