import React from "react";
import { Spinner } from "./Spinner";
import { useGif } from "../useGif";


export const Random = () => {

  const{gif, loading, fetchData} = useGif();

  function clickHandler() {
    console.log("Generate button clicked");
    fetchData();
  }

  return (
    <div className="w-1/2 bg-green-600 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl uppercase font-bold">Random GIF</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" alt="Random GIF" />}
      <button
        onClick={clickHandler}
        className="w-10/12 opacity-60 bg-white text-lg py-2"
        disabled={loading} // Disable button while loading
      >
        Generate
      </button>
    </div>
  );
};
