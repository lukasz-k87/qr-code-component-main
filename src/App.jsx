import "./App.css";
import { QrCodeComponent } from "./components/QrCodeComponent";

function App() {
  return (
    <>
      <QrCodeComponent
        imageSource="/image-zrozumiec-react.png"
        headerText="Dlaczego warto nauczyć się React'a?"
        paragraphText="Kładziemy mocny nacisk na znalezienie złotego środka pomiędzy teorią i praktyką."
        altImage="image-zrozumiec-react"
      />
      <QrCodeComponent
        imageSource="/image-qr-code.png"
        headerText="Improve your front-end skills by building projects"
        paragraphText="Scan the QR code to visit Frontend Mentor and take your coding skills  to the next lever"
        altImage="image-qr-code"
      />
      <QrCodeComponent
        imageSource="/image-react-dev.png"
        headerText="The library for web and native user interfaces"
        paragraphText="React lets you build user interfaces out of individual pieces called components."
        altImage="image-react-dev"
      />
    </>
  );
}

export default App;
