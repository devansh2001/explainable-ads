import * as React from "react";

import { useScreenshot } from "use-screenshot-hook";

const Example = () => {
  const { image, takeScreenshot } = useScreenshot({ref: document.getElementById('some-id')});
  return (
    <div>
        <div id='some-id' style={{border: '1px solid red'}}>
            <h1>Hello World!</h1>
            <button>Button</button>
            <p>This is some text content</p>
        </div>
        <button onClick={() => takeScreenshot()}>Take Screenshot</button>
        {image && <img src={image} />}
    </div>
  );
};

export default Example;