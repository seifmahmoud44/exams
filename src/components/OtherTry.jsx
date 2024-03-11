import React, { useState } from "react";

const OtherTry = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <div className="flex w-full relative">
        <div
          className={`w-full h-96 bg-text absolute z-0 ${
            count === 0 ? "left-0" : "left-full"
          } `}
        ></div>
        <div className="w-full h-96 bg-darkBlue absolute z-0 top-0 left-full"></div>
        <div className="w-full h-96 bg-border absolute z-0 top-0 left-full"></div>
      </div>
      <div className="translate-y-32">
        <button onClick={() => setCount(count + 1)}>Click next</button>
        <button onClick={() => setCount(count - 1)}>Click back</button>
      </div>
    </div>
  );
};

export default OtherTry;
