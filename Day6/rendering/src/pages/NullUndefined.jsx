import React from "react";

const NullUndefined = () => {
  const data = null;
  const myData = 10;
  return (
    <>
      <div className="bg-amber-300">
        <p>{data ? <p>This is a React course</p> : "Node"}</p>
        <p>{myData ?? "React"}</p>
      </div>
    </>
  );
};

export default NullUndefined;
