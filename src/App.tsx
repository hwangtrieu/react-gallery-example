import UploadBar from "./components/UploadBar";
import Gallery from "./Gallery";

import { ReactComponentElement } from "react";

function App(): ReactComponentElement {
  return (
    <div className="main-app">
      <Gallery />
    </div>
  );
}

export default App;
