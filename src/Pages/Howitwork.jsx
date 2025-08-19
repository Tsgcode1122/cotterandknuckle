import React, { useEffect } from "react";
import How from "../Component/How";

const Howitwork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <How />
    </div>
  );
};

export default Howitwork;
