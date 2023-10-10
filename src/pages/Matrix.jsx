import IndividualBrand from "../ui/IndividualBrand";

function Matrix() {
  const name = "Matrix";
  const headerImage = "/images/matrix-1024-600x600.png";
  const description = `MATRIX GmbH este un producător cu experiență pe piață pentru „dispozitive de fixare matrițe complicate” încă din anul 1997. Ca o pernă cu pini, pinii Matrix® se ajustează individual pe conturul piesei indiferent cât de complicată este forma acesteia. Timpul de lucru și materialul ce necesita anterior o fabricare de matrițe speciale, fălci sau suporturi pot fi acum substituite în doar câteva secunde. Dispozitivele de fixare sunt folosite pentru sisteme de măsurare în coordonate, laboratoare, asamblare și chiar pe linia de producție. Baza de clienți din întreaga lume cuprinde companii din domeniul aviației, industria auto, inginerie mecanică, inginerie medicală și alte sectoare cu tehnologie înaltă.`;
  const homeSite = "www.matrix-innovations.com";

  function video() {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/SlBvVOgnVgQ?si=bgJNwdMECQDo8mZp"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    );
  }

  return (
    <IndividualBrand
      name={name}
      headerImage={headerImage}
      description={description}
      homeSite={homeSite}
      video={video}
    />
  );
}

export default Matrix;
