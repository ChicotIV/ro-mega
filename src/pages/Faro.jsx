import IndividualBrand from "../ui/IndividualBrand";

function Faro() {
  const name = "Faro";
  const headerImage = "/images/faro-1024-600x600.png";
  const homeSite = "https://www.faro.com";
  const description = `Ro-Mega Trade este unic distribuitor în România pentru echipamentele FARO®.

    FARO® dezvoltă și produce sisteme portabile de măsurare 3D folosite în special în domeniile Metrologie, AEC (Arhitectură, Inginerie și Construcții) și Analiza siguranței publice. Timp de 40 de ani, FARO a furnizat soluții de top care permit clienților să își măsoare rapid și ușor piesele, obiectele sau spațiile, asigurând măsurători rapide si precise în 3D.
    
    Compania dezvoltă și produce soluții de vârf care permit colectarea datelor, măsurarea și analiza 3D de înaltă precizie:`;

  function list() {
    return (
      <ul style={{ fontSize: "1.3rem", marginLeft: "1.3rem" }}>
        <li>brațe de măsurare în coordonate,</li>{" "}
        <li>laser scanner pentru aplicații topografice,</li>{" "}
        <li>laser tracker,</li> <li>software,</li> <li>accesorii.</li>
      </ul>
    );
  }

  function video() {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/mpcMBlGPTz4?si=odirEzxeZEHpy5Fz"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    );
  }

  function videosArray() {
    const array = [
      <div style={{ width: "560px", height: "315px" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/JCArLw0DIeY?si=bvNx35ZZ6X1mNER7"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>,
      <div style={{ width: "560px", height: "315px" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/6JI0X2nu9r0?si=Sp-XtU68jSbTvHuv"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>,
      <div style={{ width: "560px", height: "315px" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/v6zt0Y9h3nw?si=veZ5LlxpMKiqs8mB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>,
      <div style={{ width: "560px", height: "315px" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ZzTPH4g7WmE?si=Sbr8UIhvJCuXxul9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>,
      <div style={{ width: "560px", height: "315px" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/GZlg13RgyBw?si=IGrtAyAeQLrjxgcu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>,
      <div style={{ width: "560px", height: "315px" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/9MdsGKwoLDU?si=xdOjOkJkBP1S4GFq"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>,
    ];

    return array;
  }

  return (
    <IndividualBrand
      name={name}
      headerImage={headerImage}
      description={description}
      homeSite={homeSite}
      list={list}
      video={video}
      videosArray={videosArray}
    />
  );
}

export default Faro;
