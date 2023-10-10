import IndividualBrand from "../ui/IndividualBrand";

function DK() {
  const name = "DK";
  const headerImage = "/images/dk-FIXIERSYSTEME-Logo-blauer-Kreis-200x200.png";
  const description = `Expertiza de specialitate a dk FIXIERSYSTEME se concentrează pe fixarea modulară concepută special pentru tehnologia de măsurare.

  De la intrarea pe piață în 1972, echipa dk FIXIERSYSTEME a început să proiecteze și să dezvolte tehnologii de fixare iar astăzi, gama de produse cuprinde aproximativ 1000 de produse care pot fi combinate în mod liber și pot forma un sistem modular.
  
  Utilizatorii care lucrează în mod regulat cu tehnologia dk FIXIERSYSTEME confirmă faptul că posibilitatea de a combina modulele în mod flexibil și durabilitatea elementelor garantează un rezultat de măsurare precis, cu un flux de lucru continuu.`;
  const homeSite = "www.dk-fixiersysteme.de";

  function video() {
    return (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/JDYbVOwnVoU?si=sV33M-TIORRfXpTX"
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

export default DK;
