import classNames from "classnames";
import React from "react";
import ReactDOM from "react-dom";
import Ripples from "react-ripples";

if (document.getElementById("search-button-wrapper") == null) {
  const div = document.createElement("div");
  div.id = "search-button-wrapper";
  document.body.appendChild(div);
}

const SearchButton: React.FC<{
  className?: string;
  onClick?: React.MouseEventHandler;
  isExpanded?: boolean;
}> = ({ className, onClick, isExpanded }) => {
  return ReactDOM.createPortal(
    <div
      className={classNames(
        isExpanded ? "w-full" : "w-12",
        "bg-accent h-12 rounded-full overflow-hidden duration-1000 transition-all pointer-events-auto"
      )}
      onClick={onClick}
    >
      <Ripples color="rgba(0, 0, 0, .1)">
        <div
          className={classNames(
            `transition-all bg-accent h-12 rounded-full p-3 duration-1000 flex items-center overflow-hidden ${className}`,
            isExpanded ? "w-full" : "w-12"
          )}
        >
          <span className="material-icons">search</span>
          <p
            className={classNames("opacity-0 transition-opacity duration-500 ml-2", {
              "opacity-40": isExpanded,
            })}
          >
            Search...
          </p>
        </div>
      </Ripples>
    </div>,
    document.getElementById("search-button-wrapper")!
  );
};

export default SearchButton;
