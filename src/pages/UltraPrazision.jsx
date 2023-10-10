import IndividualBrand from "../ui/IndividualBrand";

function Ultraprazision() {
  const name = "Ultraprazision";
  const headerImage = "/images/ultraprazision-1024-600x600.png";
  const description = `Fondată în 1888 de către August Kirsch, Ultra Präzision este cunoscută în întreaga lume ca un garant al preciziei create în Germania. Produsele Ultra sunt utilizate cu succes de către companii de renume, precum: Audi, BMW, Bosch, Rolex, Lufthansa, Henkel, Continental, P&G și multe altele. Ultra Präzision comercializează aparate de măsură și control precum pini, cale, inele de calibrare, șublere, micrometre, lupe, echere, termometre și multe altele, inclusiv piese unicat realizate la cerere, conform cerințelor clienților.`;
  const homeSite = "www.ultra-germany.de";

  function video() {
    return (
      <img
        src="/images/Feineinstellung-600x261.png"
        alt="Feineinstellung-600x261.png"
      />
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

export default Ultraprazision;
