import IndividualBrand from "../ui/IndividualBrand";

function OGP() {
  const name = "OGP";
  const headerImage = "/images/logo-ogp-1.jpeg";
  const description = `OGP (Optical Gaging Products) este o divizie a Quality Vision International Inc (QVI®), un producător –  lider mondial de sisteme de metrologie multisenzor de precizie pentru controlul calității industriale.

  Sistemele OGP se concentrează pe tehnologii de măsurare care ajută producătorii să monitorizeze conformitatea dimensională a specificațiilor de proiectare. Introdusă pentru prima dată în 1992, gama de produse OGP SmartScope® a devenit unul dintre cele mai populare și versatile sisteme de măsurare dimensională din lume. Sistemele SmartScope sunt proiectate și produse la sediul corporativ QVI din Rochester, NY, SUA.
  
  Astăzi, ofertele OGP s-au extins pentru a include sistemele de măsurare a arborelui și o linie de CMM multisenzor inovatoare. Produsele OGP includ, de asemenea, sisteme de scanare 3D și sisteme de măsurare cu capacități unice pentru a susține producția de volum mare.
  
  Astfel, produsele fabricate de OGP se adreseaza metrologiei multisenzor, inspecției optice, măsurării video sau scanării cu laser.
  
  Produsele OGP oferă soluții pentru aplicații in industria auto, aerospațială, electronică, semiconductoare, industria de prelucrare a metalelor și altele.`;

  const homeSite = "www.ogpnet.com";

  function video() {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/CRSWW9O5v7Y?si=Fe3_fvYkm7cQxEPF"
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
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KdISma9sQ4A?si=G54PKgLg1FirvEpV"
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
          src="https://www.youtube.com/embed/88uReOgo-Tg?si=bhhlD6KCNCKBzryh"
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
          src="https://www.youtube.com/embed/JhIVAX__HbU?si=RaAdDix0rfPJGaIB"
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
          src="https://www.youtube.com/embed/DsSCc6yOX00?si=P3ex74OvE6kPv_W8"
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
          src="https://www.youtube.com/embed/6ZJqqaaICkg?si=PG3Dk0qnXxJXyaf_"
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
          src="https://www.youtube.com/embed/QFcaq6sBNtw?si=LgmYVsZ9OsBTXus9"
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
          src="https://www.youtube.com/embed/WN4MFzN3wO8?si=u3qMeVnlxnlA-AxW"
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
          src="https://www.youtube.com/embed/CRSWW9O5v7Y?si=3y9zs5ZQPoX1l3gL"
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
          src="https://www.youtube.com/embed/YXGycMrv9Ac?si=jzeRjtaaEU4yS3Yq"
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
          src="https://www.youtube.com/embed/px4BgwqWfMo?si=hKrTxml82-GBumdM"
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
      video={video}
      videosArray={videosArray}
    />
  );
}

export default OGP;
