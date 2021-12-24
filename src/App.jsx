import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      {/* <ColorfulMessage color="Blue" message="お元気ですか?" /> */}
      <ColorfulMessage color="Blue">お元気ですか?</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="元気です!" /> */}
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
