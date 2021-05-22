import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const BACKGROUND = "bg-purple-500";

export default function Reservation() {
  return (
    <div
      className={classNames(
        BACKGROUND,
        "w-screen h-screen flex justify-center items-center p-6"
      )}
    >
      <div className="relative w-full flex flex-col">
        <div className="relative bg-white h-72 flex-grow rounded-tr-3xl rounded-tl-lg px-6 py-6 flex flex-wrap shadow-md">
          <div className="min-w-50p">
            <p className="text-base">Lot Name</p>
            <p className="text-3xl">Union Square Parking</p>
          </div>
          <div className="min-w-50p">
            <p className="text-base">Position</p>
            <p className="text-3xl">A1</p>
          </div>
          <div className="min-w-50p">
            <p className="text-base">Start Time</p>
            <p className="text-3xl">13:00</p>
          </div>
          <div className="min-w-50p">
            <p className="text-base">Fee</p>
            <p className="text-3xl">$4/h</p>
          </div>
          <div className="min-w-50p">
            <p className="text-base">Auto Cancel at</p>
            <p className="text-3xl">17:00</p>
          </div>
          <div
            className={classNames(
              BACKGROUND,
              "absolute -left-4 -bottom-4 w-8 h-8 rounded-2xl z-10"
            )}
          ></div>
          <div
            className={classNames(
              BACKGROUND,
              "absolute -right-4 -bottom-4 w-8 h-8 rounded-2xl z-10"
            )}
          ></div>
        </div>
        <div className="relative bg-accent h-24 px-6 py-4 rounded-b-lg shadow-md border-t-2 border-dashed border-gray-700">
          <p className="text-base">Elapsed</p>
          <div className="flex flex-row justify-between items-end">
            <p className="text-3xl">30min</p>
            <p className="text-xl opacity-70">left</p>
          </div>
        </div>
      </div>
      <Link href="/main">
        <span className="absolute left-4 top-4 text-white material-icons">
          arrow_back
        </span>
      </Link>
    </div>
  );
}

// 에니메이션 (선택)
// 주차 전 상태,
// 푸시가 있음
// 주차 후 상태
