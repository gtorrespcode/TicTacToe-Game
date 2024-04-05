import React from "react";

const MobileWarning = () => {
  return (
    <div className="h-screen absolute bg-[#E27789] top-0 left-0 flex justify-center">
      <div className="w-5/6 flex flex-col justify-center items-center gap-y-4">
        <h1 className="font-bold text-3xl">Hello</h1>
        <p>
          This project serves to assemble my portfolio and accelerate my
          learning process.
        </p>
        <p>
          {" "}
          As we already know, the process of making a website responsive usually
          takes a little more time, so if you want to view the content of this
          site, please access it through a larger screen.{" "}
        </p>
        <p>
          {" "}
          Throughout these projects, I intend to alternate between desktop and
          mobile, but my main focus is to accelerate the learning process
          quickly and effectively. Thank you!
        </p>
      </div>
    </div>
  );
};

export default MobileWarning;
