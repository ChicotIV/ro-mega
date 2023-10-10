import IndividualBrand from "../ui/IndividualBrand";

function Renishaw() {
  const name = "Renishaw";
  const headerImage = "/images/renishaw-1024-600x600.png";
  const description = `Renishaw este un producător din Marea Britanie de Sisteme de măsurare pentru mașini de măsurat în coordonate, sisteme de măsurare a pieselor pe mașinile unelte CNC, sisteme de setare a sculelor, sisteme de calibrare și optimizare. Sisteme de măsurare Renishaw se adreseaza industriilor aerospațială, electronică, medicală, automotivă, energie și altele.`;
  const homeSite = "www.renishaw.com";

  function video() {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/XuRiLRx9znE?si=FcbJATyqkSvIFNj5"
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
          src="https://www.youtube.com/embed/5VG4v6umss8?si=aoJb41xAfF3Yf867"
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
          src="https://www.youtube.com/embed/COvDOzK-fPU?si=RJkH6DhA_ICMkUwQ"
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
          src="https://www.youtube.com/embed/8IV5xbHDfjE?si=ywgmtACi66EKSe5w"
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
          src="https://www.youtube.com/embed/NCNrK8-CNKw?si=Jx2B6oXe-9G2aARP"
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
          src="https://www.youtube.com/embed/5AG64F0AysM?si=I6YOqXJGtUxC5foh"
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
          src="https://www.youtube.com/embed/OKFzvwrOsNA?si=q_yzoxgqXpn9wXcE"
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
          src="https://www.youtube.com/embed/ByHTrPyqS_E?si=8jApSFs4Va3V_t4p"
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
          src="https://www.youtube.com/embed/XTXwTBup-co?si=sRL1A0O04AyaGts6"
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
          src="https://www.youtube.com/embed/jHF6gIKn90k?si=M88CCc250yCUPHgy"
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
          src="https://www.youtube.com/embed/nkLH8r2wBBs?si=ANEg5pOImZJgmkph"
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

export default Renishaw;
