import classNames from "classnames";
import React, { useMemo } from "react";
import Logo from "../../Logo";

const boldRegex = /\*\*/gi;

const StepWrapper: React.FC<{ title: string }> = ({ children, title }) => {
  const parts = title.split(boldRegex)!;

  return (
    <div className="w-full h-full pt-16 pb-6 px-6 ">
      <div
        className="w-full h-full whitespace-pre-line bg-white flex flex-col justify-between items-start"
        style={{ borderRadius: 40 }}
      >
        <div>
          <div className="mb-16">
            <Logo color="#4560FF" width="78" height="32" />
          </div>
          <p className="text-4xl m-0">
            {parts.map((part, i) => (
              <span
                key={i}
                className={classNames(i === 1 ? "text-primary" : "text-black")}
              >
                {part}
              </span>
            ))}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default StepWrapper;
