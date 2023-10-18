import IndividualBrand from "../ui/IndividualBrand";

function Mahr() {
  const name = "Mahr";
  const headerImage = "/images/mahr.jpg";

  const description = `Ro-Mega Trade este unic distribuitor Mahr sisteme de măsurare în România, din 2002.

  Mahr, Germania, este un producător de renume mondial de echipamente şi aparate de măsurare şi control pentru ateliere sau laboratoare metrologice, de o calitate indiscutabilă:`;

  const homeSite = "www.mahr.com/de/";

  function list() {
    return (
      <ul style={{ fontSize: "1.3rem", margin: "0 auto", maxWidth: "40vw" }}>
        <li>
          Scule de mână: șublere, micrometre, comparatoare, traductori
          inductivi, truse pentru alezaje, etaloane etc
        </li>
        <li>Millimar – Unități de evaluare și traductori</li>
        <li>Digimar – Coloane de măsurare</li>
        <li>Marvision – Instrumente optice/ microscoape</li>
        <li>
          Marsurf – Echipamente dedicate măsurării și evaluării rugozității
        </li>
        <li>Marform – Sisteme de măsurare a abaterilor de formă și poziție</li>
        <li>Precimar – Mașini universale pentru lungimi</li>
        <li>Marshaft – Sisteme optice</li>
        <li>MarGear – Sisteme pentru măsurarea roților dințate</li>
        <li>Marwin – Soluții software</li>
      </ul>
    );
  }

  function video() {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/CxLxLhrKjWI?si=kHFbbNYb3He1FyC9"
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
          src="https://www.youtube.com/embed/ZT5K2eoPXW8?si=Ao-nPv1hCV5m9wCj"
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
          src="https://www.youtube.com/embed/Q26c62EbxP8?si=R620vsX5AF9HRWY2"
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
          src="https://www.youtube.com/embed/H4sJ4_48GRM?si=DsFisQEzY8MQgKNo"
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
          src="https://www.youtube.com/embed/H4sJ4_48GRM?si=DsFisQEzY8MQgKNo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>,
      <div style={{ width: "560px", height: "315px" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NaWlgB8a5qA?si=q-4nPs938aYW34d4"
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
          src="https://www.youtube.com/embed/r0TMTd8WZuI?si=rQ3kFgrvGPDg8eEo"
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
          src="https://www.youtube.com/embed/IJaJwHGXT8Q?si=74N9kj_VYHq--W6y"
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
          src="https://www.youtube.com/embed/JJudB71uuAk?si=1Fq7mUc8rNdv13AY"
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
          src="https://www.youtube.com/embed/Ey9anmxb4CU?si=PKcnA1dRHxQKUuU8"
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
          src="https://www.youtube.com/embed/r8awwH8YH0Y?si=YtHglT7cOKutyOOB"
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
      list={list}
      name={name}
      headerImage={headerImage}
      description={description}
      homeSite={homeSite}
      video={video}
      videosArray={videosArray}
    />
  );
}

export default Mahr;
