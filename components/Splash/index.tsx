import React from "react";
import Logo from "../Logo";

export const Splash: React.FC<{}> = () => {
  return (
    <div className="bg-primary w-screen h-screen flex flex-col">
      <div className="m-auto">
        <Logo className="mx-auto w-40" />
        <h3 className="text-white text-lg text-center font-normal">It's a parky day</h3>
      </div>
      <img className="w-full" src="/img/splash_background.png" />
    </div>
  );
};
