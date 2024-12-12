import React, { useEffect, useRef, useState } from "react";
import bitcoin from "../components/bitcoin.png";
import LineGraph from "../components/LineGraph";
function Product() {
    const btn24Ref = useRef()
    const btn30Ref = useRef()
    const btn3Ref = useRef()
    const btn1Ref = useRef()

    useEffect(()=>{
        btn24Ref.current.style.backgroundColor = "#87CEEB";
        btn24Ref.current.style.color = "black";
    },[])


    function handleBtn24(e){
        e.preventDefault()
        btn24Ref.current.style.backgroundColor = "#87CEEB";
        btn24Ref.current.style.color = "black";
        btn30Ref.current.style.backgroundColor = "transparent";
        btn30Ref.current.style.color = "white";
        btn3Ref.current.style.backgroundColor = "transparent";
        btn3Ref.current.style.color = "white";
        btn1Ref.current.style.backgroundColor = "transparent";
        btn1Ref.current.style.color = "white";
        
    }
    function handleBtn30(e){
        e.preventDefault()
        btn24Ref.current.style.backgroundColor = "transparent";
        btn24Ref.current.style.color = "white";
        btn30Ref.current.style.backgroundColor = "#87CEEB";
        btn30Ref.current.style.color = "black";
        btn3Ref.current.style.backgroundColor = "transparent";
        btn3Ref.current.style.color = "white";
        btn1Ref.current.style.backgroundColor = "transparent";
        btn1Ref.current.style.color = "white";
    }
    
    function handleBtn3(e){
        e.preventDefault()
        btn24Ref.current.style.backgroundColor = "transparent";
        btn30Ref.current.style.backgroundColor = "transparent";
        btn3Ref.current.style.backgroundColor = "#87CEEB";
        btn1Ref.current.style.backgroundColor = "transparent";
        btn24Ref.current.style.color = "white";
        btn30Ref.current.style.color = "white";
        btn3Ref.current.style.color = "black";
        btn1Ref.current.style.color = "white";
    }

    
    function handleBtn1(e){
        e.preventDefault()
        btn24Ref.current.style.backgroundColor = "transparent";
        btn30Ref.current.style.backgroundColor = "transparent";
        btn3Ref.current.style.backgroundColor = "transparent";
        btn1Ref.current.style.backgroundColor = "#87CEEB";
        btn24Ref.current.style.color = "white";
        btn30Ref.current.style.color = "white";
        btn3Ref.current.style.color = "white";
        btn1Ref.current.style.color = "black";
    }

  return (
    <div className="flex  flex-col gap-5 sm:flex-row py-5 w-full max-w-[1900px]  mx-auto">
      <div className=" border-r-0 md:border-r-2 border-[rgba(128, 128, 128, 1)] md:h-[450px]  lg:h-[550px] xl:min-h-[787px] w-full md:w-[200px]  lg:w-[350px] xl:w-[547px] px-6 gap-2 md:gap-5 flex flex-col items-center text-white">
        <img
          src={bitcoin}
          loading="lazy"
          className="w-16 md:w-[80px] lg:w-[100px] xl:w-[200px]"
          alt="coin"
        />
        <h1 className=" text-[20px] sm:text-[24px] lg:text-[35px] xl:text-[48px] font-Montserrat font-bold ">
          Bitcoin
        </h1>
        <p className=" text-[5px] lg:text-[14px] xl:text-[16px] font-Montserrat tracking-[1px]">
          Bitcoin is the first successful internet money based on peer- to-peer
          technology; whereby no central bank or authority is involved in the
          transaction and production of the Bitcoin currency.
        </p>
        <div className="flex flex-col gap-1 md:gap-4 w-full font-bold text-[10px] md:text-[8px]  lg:text-xl xl:text-2xl">
          <h1 className="flex gap-1 md:gap-4">
            Rank: <span>1</span>
          </h1>
          <h1 className="flex gap-1 md:gap-4">
            Current Price: <span> ₹ 3,046,956</span>
          </h1>
          <h1 className="flex gap-1 md:gap-4">
            Market Cap:<span>₹ 59,518,057</span> M
          </h1>
        </div>
      </div>
      <div className="w-full  flex flex-col gap-10 ">
          <LineGraph/>
          <div className="w-full flex items-center justify-around gap-5 px-10">
            <button ref={btn24Ref} onClick={handleBtn24} className="text-start pl-1 sm:pl-2  lg:pl-5 w-full border rounded border-BlueWhite py-2 text-[8px] md:text-[16px] font-bold text-white font-Montserrat">24 Hours</button>
            <button ref={btn30Ref} onClick={handleBtn30} className="text-start pl-1 sm:pl-2  lg:pl-5 w-full border rounded border-BlueWhite py-2 text-[8px] md:text-[16px] font-bold text-white font-Montserrat">30 Days</button>
            <button ref={btn3Ref} onClick={handleBtn3} className="text-start pl-1 sm:pl-2  lg:pl-5 w-full border rounded border-BlueWhite py-2 text-[8px] md:text-[16px] font-bold text-white font-Montserrat">3 Months</button>
            <button ref={btn1Ref} onClick={handleBtn1} className="text-start pl-1 sm:pl-2  lg:pl-5 w-full border rounded border-BlueWhite py-2 text-[8px] md:text-[16px] font-bold text-white font-Montserrat">1 Year</button>
          </div>
      </div >
    </div>
  );
}

export default Product;
