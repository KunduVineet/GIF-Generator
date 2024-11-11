import { useGif } from "../useGif";
import React, { useState } from "react";
import { Spinner } from "./Spinner";


export const Tag = () => {
  const[tag, setTag] = useState('');
  const{gif, loading, fetchData} = useGif(tag);


  function clickHandler() {
    console.log("Generate button clicked");
    fetchData();
  }
  function chnageHandler(event){
    setTag(event.target.event)
  }

  return (
    <div className="w-1/2 bg-yellow-600 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[15px]">
      <h1 className="mt-[15px] text-2xl uppercase font-bold">Random {tag} GIF</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" alt="Random GIF" />}

      <input className="w-10/12  opacity-60 bg-white text-lg py-2 mb-[3px] text-center" onChange={chnageHandler} value={tag}></input>
      <button
        onClick={clickHandler}
        className="w-10/12 opacity-90 bg-blue-500 text-lg py-2 rounded-lg"
        disabled={loading} // Disable button while loading
      >
        Generate
      </button>
    </div>
  );
};
