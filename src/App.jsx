import "./App.css";
import { QrCodeComponent } from "./components/QrCodeComponent";

function App() {
  return (
    <QrCodeComponent
      imageSource="/image-qr-code.png"
      headerText="Improve your front-end skills by building projects"
      paragraphText="Scan the QR code to visit Frontend Mentor and take your coding skills  to the next lever"
      altImage="image-qr-code"
    />
  );
}

export default App;
