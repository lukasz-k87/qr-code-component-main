export function QrCodeComponent(props) {
  const imageSource = props.imageSource;
  const altImage = props.altImage;
  const headerText = props.headerText;
  const paragraphText = props.paragraphText;

  return (
    <div className="singleComponent">
      <div>
        <img className="imgQrCodeComponent" src={imageSource} alt={altImage} />
      </div>
      <div>
        <h1 className="headerText">{headerText}</h1>
        <p className="paragraphText">{paragraphText}</p>
      </div>
    </div>
  );
}
