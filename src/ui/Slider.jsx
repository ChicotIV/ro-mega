import ImageSlider from "./ImageSlider";

function Slider() {
  const slides = [
    {
      bigHeader: "Noi punem tehnologia in mainile tale",
      smallHeader:
        "Asiguram accesibilitatea tehnologiei celor ce au nevoie de ea",
      url: "http://localhost:3000/images/cnc-machine.jpg",
      title: "CNC Machine",
    },
    {
      bigHeader: "Credem cu tarie in valoarea tehnologiei si a cunoasterii",
      smallHeader: "Puterea sta in cunoastere",
      url: "http://localhost:3000/images/another-cnc.jpeg",
      title: "CNC Machine",
    },
    {
      bigHeader: "",
      smallHeader: "",
      url: "http://localhost:3000/images/3rd-cnc-machine.jpg",
      title: "CNC Machine",
    },
  ];

  const containerStyles = {
    width: "70vw",
    height: "75vh",
    margin: "0 auto",
    paddingLeft: "3.2rem",
  };

  const flexContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={flexContainer}>
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={1500} />
      </div>
    </div>
  );
}

export default Slider;
