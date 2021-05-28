import * as React from "react";

import { useScreenshot } from "use-screenshot-hook";

const Example = () => {
  const myRef = React.useRef();
  const { image, takeScreenshot } = useScreenshot({ref: myRef});
  return (
    <div>
        <div style={{border: '1px solid red'}}>
            <h1>Hello World A!</h1>
            <button ref={myRef}>Button</button>
            <p>This is some text content lala</p>
        </div>
        <button onClick={() => takeScreenshot()}>Take Screenshot</button>
        {image && <img src={image} />}
    </div>
  );
};

export default Example;