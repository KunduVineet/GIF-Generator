import React from "react";
import "./App.css";
import { Random } from "./components/Random";
import { Tag } from "./components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col bg-blue-500 relative overflow-x-hidden items-center">
      <h1 className="font-bold bg-white rounded-lg text-3xl w-11/12 text-center mt-[40px] px-10 py-2">
        RANDOM GIFs
      </h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[20px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
