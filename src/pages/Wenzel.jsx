import IndividualBrand from "../ui/IndividualBrand";

function Wenzel() {
  const name = "Wenzel";
  const headerImage = "/images/wenzel-1024-600x600.png";
  const description = `Compania WENZEL Präzision – Germany – a fost înființată în 1968 de către Werner Wenzel, fiind, încă de la început, unul dintre cei mai importanți producători de mașini de măsurat în coordonate și contribuind semnificativ la succesul clienților.

  Companii de marcă din industria de automobile, prelucrare mecanică sau industria aerospațială, dar și din industria bunurilor electronice de consum sau industria materialelor de plastic au încredere în calitatea WENZEL și revin frecvent ca și clienți ai acestei companii.
  
  WENZEL este asemuit cu cea mai înaltă precizie, inovație în metrologie și folosire exclusivă a granitului ca material metrologic. Grupul Wenzel oferă soluții pentru aplicații privind măsurători în coordonate, măsurători de roți dințate, scanare optică de mare viteză și tomografie computerizată. Viziunea WENZEL Präzision este de a oferi soluții tuturor aplicațiilor de măsurare.`;

  const homeSite = "https://en.wenzel-group.com/";

  function video() {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/sKb6MQNdXkE?si=J96_27H2g1TpfQoy"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    );
  }

  function videosArray() {
    const array = [
      <div style={{ maxWidth: "560px", maxHeight: "315px" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ML9jiRtweJU?si=WqcaIUrqtdi8MiRP"
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
          src="https://www.youtube.com/embed/8KHSHIjEVFY?si=asPCQZCbi7dEpyV8"
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
          src="https://www.youtube.com/embed/X-rVWHzY61c?si=TX4ixjwTmO4zqr2v"
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
          src="https://www.youtube.com/embed/FF3BhyczTn8?si=M6Fs7uhg0wiSAT3Z"
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
          src="https://www.youtube.com/embed/BeCCW9GrLQY?si=cTXn4192TlJpQzg9"
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
          src="https://www.youtube.com/embed/gGxqyRmR_uE?si=LRdptkmP11oxJLyL"
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
          src="https://www.youtube.com/embed/Tic75t_cGDE?si=YIn3YVnQwbAYzDxO"
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
          src="https://www.youtube.com/embed/SWrqT8iDX9c?si=3h3qsApPI-ChToV1"
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
          src="https://www.youtube.com/embed/asX2qgCTo0c?si=MQWOubYKglZ5qmIW"
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
          src="https://www.youtube.com/embed/ChiqlFO7loE?si=6v9WRF5NN19rknFR"
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

export default Wenzel;
