import IndividualBrand from "../ui/IndividualBrand";

function DnSolutions() {
  const name = "DN Solutions";
  const headerImage = "/images/DN-solutions-Logo-700x110.webp";
  const description =
    "Ro-Mega Trade este unic distribuitor DN Solutions (anterior Doosan Machine Tools) în România. Experiența de peste 40 de ani în industria mașinilor-unelte și tehnologia de vârf folosită de DN Solutions (anterior, Doosan Machine Tools) a creat de-a lungul timpului și continuă să creeze unele dintre cele mai bune mașini-unelte. DN Solutions este un producător recunoscut de mașini-unelte cu comandă numerică:";
  const homeSite = "www.dn-solutions.com";

  function list() {
    return (
      <ul style={{ fontSize: "1.3rem", marginLeft: "1.3rem" }}>
        <li>Strunguri verticale/ orizontale CNC</li>{" "}
        <li>Centre de prelucrare orizontale/ verticale CNC</li>{" "}
        <li>Mașini de alezat și frezat CNC</li>{" "}
        <li>Centre verticale de frezat cu două coloane</li>{" "}
        <li>Strunguri tip Swiss</li>
      </ul>
    );
  }

  function video() {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/w4en87Q9oms?si=QJpfuvSFYu76PO-7"
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
          src="https://www.youtube.com/embed/L9lIUrK3xLk?si=M_-9z-_Zsz11_dUp"
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
          src="https://www.youtube.com/embed/yPgkub7mlho?si=TNDKogs0Uf6UlQKl"
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
          src="https://www.youtube.com/embed/9nkoid6rzFo?si=tkbFdSenxmMcjkDQ"
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
          src="https://www.youtube.com/embed/IzV_T0xiYXc?si=4nae3kQoZ94USVC9"
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
          src="https://www.youtube.com/embed/gMAAmWT_CMs?si=8DqMtMU5tuELS9DV"
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
          src="https://www.youtube.com/embed/v193WkDmowE?si=wR6iVtY3_b_-Mc3C"
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
          src="https://www.youtube.com/embed/fgdqxvzAZJk?si=7sfSFSX_rzG9uT1F"
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
          src="https://www.youtube.com/embed/ZsnKjm3HD-M?si=ovZ1gMVNizJnHRLY"
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
          src="https://www.youtube.com/embed/M9v37SVj20s?si=12RGDNpu3X36izgr"
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
          src="https://www.youtube.com/embed/DES54B0eBgs?si=1xUlBi_3lhhN17yb"
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

export default DnSolutions;
