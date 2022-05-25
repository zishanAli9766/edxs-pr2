import React, { useCallback, useEffect, useState } from "react";

import PureComponent from "./PureComponent";

const Hooks = () => {


  const [data, setData] = useState(0);
  const [data2, setData2] = useState(0);

  useEffect(() => {
    console.log("useEffect Called : ", data);
    return () => {
      console.log("useEffect CleanUp function called : ", data);
    };
  }, [data]);

  useEffect(() => {
    console.log("useEffect No 2 called");
    return () => {
      console.log("useEffect No 2 CleanUp Called");
    };
  }, [data2]);

  const Ui = () => {
    console.log("UI FUNCTION CALLED");
    return <h1 onClick={() => setData2(data2 + 2)}>Small Comp : {data2}</h1>;
  };

  const forChildComp = useCallback(() => {
    alert("Hey, Good Morning");
  }, [data]);

  return (
    <div>
      <h1 onClick={() => setData(data + 1)}>Hooks : {data} </h1>
      <Ui />
      <PureComponent onPress={forChildComp} />
    </div>
  );
};

export default Hooks;