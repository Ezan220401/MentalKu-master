import React from "react";

const HeadingReason = (props) => {
  return (
    <div>
      <div>
        <h3 className="text-2xl lg:text-3xl font-black text-center">
          {props.title1}{" "}
          <span className=" text-brightGreen">{props.title2}</span>
        </h3>
      </div>
    </div>
  );
};

export default HeadingReason;
