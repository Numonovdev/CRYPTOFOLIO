import React, { useEffect, useState } from "react";
import bitcoin from "../components/bitcoin.png";
import LineGraph from "../components/LineGraph";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [datas, setDatas] = useState({});
  const [activeBtn, setActiveBtn] = useState("24 Hours");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleBtnClick = (period) => {
    setActiveBtn(period);
  };

  if (!datas || Object.keys(datas).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5 sm:flex-row py-5 w-full max-w-[1900px] mx-auto">
      <div className="border-r-0 md:border-r-2 border-[rgba(128, 128, 128, 1)] md:h-[450px] lg:h-[550px] xl:min-h-[787px] w-full md:w-[200px] lg:w-[350px] xl:w-[547px] px-6 gap-2 md:gap-5 flex flex-col items-center text-white">
        <img
          src={datas.image?.large || bitcoin}
          loading="lazy"
          className="w-16 md:w-[80px] lg:w-[100px] xl:w-[200px]"
          alt="coin"
        />
        <h1 className="text-[20px] sm:text-[24px] lg:text-[35px] xl:text-[48px] font-Montserrat font-bold">
          {datas.name || "Loading..."}
        </h1>
        <p className="text-[5px] lg:text-[14px] xl:text-[16px] font-Montserrat tracking-[1px]">
          Bitcoin is the first successful internet money based on peer-to-peer technology.
        </p>
        <div className="flex flex-col gap-1 md:gap-4 w-full font-bold text-[10px] md:text-[8px] lg:text-xl xl:text-2xl">
          <h1 className="flex gap-1 md:gap-4">
            Rank: <span>{datas.market_cap_rank || "N/A"}</span>
          </h1>
          <h1 className="flex gap-1 md:gap-4">
            Current Price: <span>$ {datas.market_data?.current_price?.inr || "N/A"}</span>
          </h1>
          <h1 className="flex gap-1 md:gap-4 items-center ">
            Market Cap: <span className="text-xl">$ {datas.market_data?.market_cap?.inr || "N/A"}</span>
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10">
        <LineGraph timePeriod={activeBtn} />
        <div className="w-full flex items-center justify-around gap-5 px-10">
          {["24 Hours", "30 Days", "3 Months", "1 Year"].map((period) => (
            <button
              key={period}
              onClick={() => handleBtnClick(period)}
              className={`text-start pl-1 sm:pl-2 lg:pl-5 w-full border rounded border-BlueWhite py-2 text-[8px] md:text-[16px] font-bold text-white font-Montserrat ${
                activeBtn === period
                  ? "bg-[#87CEEB] text-black"
                  : "bg-transparent text-white"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
