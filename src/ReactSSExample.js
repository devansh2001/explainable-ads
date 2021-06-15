import * as React from "react";

import { useScreenshot } from "use-screenshot-hook";

const Example = () => {
  const myRef = React.useRef();
  const { image, takeScreenshot } = useScreenshot({ref: myRef});
  return (
    <div>
        <div ref={myRef} style={{border: '1px solid red'}}>
            <h1>Hello World!</h1>
            <button>Button</button>
            <p>This is some text content</p>
            <iframe src='https://www.google.com'>Hi</iframe>
        </div>
        <button onClick={() => takeScreenshot()}>Take Screenshot</button>
        {image && <img src={image} />}
    </div>
  );
};

export default Example;