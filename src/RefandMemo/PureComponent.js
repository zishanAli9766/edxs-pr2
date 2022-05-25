import React, { memo } from "react";

function PureComponent(props) {
  console.log("Pure COmponent");
  return (
    <div>
      <h1 onClick={props.onPress}>Pure Component</h1>
    </div>
  );
}

export default memo(  PureComponent);