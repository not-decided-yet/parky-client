import React, { ChangeEvent, useMemo, useState } from "react";
import { PuffLoader } from "react-spinners";
import ParkingLot from "../components/ParkingLot";
import { useAppContext } from "../context/state";
import Link from "next/link";
import { ParkingLotData } from "../utils/types";

export default function Search() {
  const [searchWord, setSearchWord] = useState<string | undefined>(undefined);
  const context = useAppContext();
  const foundParkingLots = useMemo<ParkingLotData[]>(() => {
    if (context === null) {
      return [];
    }

    if (!searchWord) {
      return context.parkingLots;
    }
    return context?.parkingLots.filter((lot) => lot.name.toLowerCase().includes(searchWord.toLowerCase()));
  }, [context?.parkingLots, searchWord]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const placeholder = !!searchWord ? (
    <p className="mx-auto pb-16">No Results.</p>
  ) : (
    <div className="mx-auto pb-16 w-16 h-16 flex self-center items-center">
      <PuffLoader color="#FFBF0D" size={54} />
    </div>
  );

  return (
    <div className="relative bg-accent flex-col h-screen">
      <div>
        <Link href="/main">
          <span className="material-icons pt-4 pb-4 pl-4 pr-4 ">
            arrow_back
          </span>
        </Link>
        <div className=" w-full flex pt-8 pb-4 pl-4 pr-4 flex-grow-0 flex-shrink-0">
          <span className="material-icons">search</span>
          <input
            className="ml-4 bg-transparent appearance-none placeholder-opacity-40 placeholder-black font-bold outline-none"
            placeholder="Search..."
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="bg-white flex-1 h-full w-full rounded-r-3xl">
        <div className="h-4" />
        {(foundParkingLots.length > 0) ? (
          foundParkingLots.map((data) => (
            <ParkingLot key={data._id} {...data} />
          ))
        ) : (
          <div className="h-full w-full flex items-center self-center">
            {placeholder}
          </div>
        )}
      </div>
    </div>
  );
}
