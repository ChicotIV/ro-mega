import { useState } from "react";
import styles from "./DropDownMenu.module.css";
import { NavLink } from "react-router-dom";

const data = [
  {
    title: "DN Solutions Correa de Sud",
    text: "Experiența de peste 40 de ani în industria mașinilor-unelte și tehnologia de vârf folosită de DN Solutions (anterior, Doosan Machine Tools) a creat de-a lungul timpului și continuă să creeze unele dintre cele mai bune mașini-unelte. DN Solutions (anterior, Doosan Machine Tools) este un producător recunoscut de mașini-unelte cu comandă numerică.",
    url: "/images/DN-solutions-Logo-200x31.png",
    link: "/branduri/DN-Solutions",
  },
  {
    title: "Faro SUA",
    text: "FARO® dezvoltă și produce sisteme portabile de măsurare 3D folosite în special în domeniile Metrologie, AEC (Arhitectură, Inginerie și Construcții) și Analiza siguranței publice. Timp de 40 de ani, FARO a furnizat soluții de top care permit clienților să își măsoare rapid și ușor piesele, obiectele sau spațiile, asigurând măsurători rapide si precise în 3D.",
    url: "/images/faro-1024-200x200.png",
    link: "/branduri/Faro",
  },
  {
    title: "Mahr Germania",
    text: "Mahr, Germania, este un producător de renume mondial de echipamente şi aparate de măsurare şi control pentru ateliere sau laboratoare metrologice, de o calitate indiscutabilă.",
    url: "/images/mahr-1024-200x200.png",
    link: "/branduri/Mahr",
  },
  {
    title: "Wenzel Germania",
    text: "Compania WENZEL Präzision – Germany – a fost înființată în 1968 de către Werner Wenzel, fiind, încă de la început, unul dintre cei mai importanți producători de mașini de măsurat în coordonate, și contribuind semnificativ la succesul clienților.",
    url: "/images/wenzel-1024-200x200.png",
    link: "/branduri/Wenzel",
  },
  {
    title: "Renishaw Marea Britanie",
    text: "Renishaw este un producător din Marea Britanie de Sisteme de măsurare pentru mașini de măsurat în coordonate, sisteme de măsurare a pieselor pe mașini-le unelte CNC, sisteme de setare a sculelor, sisteme de calibrare și optimizare. Sisteme de măsurare Renishaw se adreseaza industriilor aerospațială, electronică, medicală, automotivă, energie și altele.",
    url: "/images/renishaw-1024-200x200.png",
    link: "/branduri/Renishaw",
  },

  {
    title: "Matrix Germania",
    text: "MATRIX GmbH este un producător cu experiență pe piață pentru „dispozitive de fixare matrițe complicate” încă din anul 1997. Ca o pernă cu pini, pinii Matrix® se ajustează individual pe conturul piesei indiferent cât de complicată este forma acesteia.",
    url: "/images/matrix-1024-200x200.png",
    link: "/branduri/Matrix",
  },

  {
    title: "Ultra Präzision Germania",
    text: "Fondată în 1888 de către August Kirsch, Ultra Präzision este cunoscută în întreaga lume ca un garant al preciziei create în Germania.",
    url: "/images/ultraprazision-1024-200x200.png",
    link: "/branduri/UltraPräzision",
  },
  {
    title: "OGP SUA",
    text: "OGP (Optical Gaging Products) este o divizie a Quality Vision International Inc (QVI®), un producător – lider mondial de sisteme de metrologie multisenzor de precizie pentru controlul calității industriale.",
    url: "/images/logo-ogp-200x200.jpeg",
    link: "/branduri/OGP",
  },

  {
    title: "PolyWorks Canada",
    text: "Fondată în 1994, cu sediul în Quebec, QC, Canada, și filiale la nivel mondial, InnovMetric Software Inc. este lider în furnizarea de soluții universale de software pentru metrologie 3D.",
    url: "/images/Polyworks.jpg",
    link: "/branduri/Polyworks",
  },
];

function DropDownMenu() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {data.map((item, i) => (
          <div className={styles.item}>
            <div className={styles.title} onClick={() => toggle(i)}>
              <h2>{item.title}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div
              className={selected === i ? styles.contentShow : styles.content}
            >
              <img
                src={item.url}
                alt={item.url}
                style={{ display: "block", maxWidth: "100vw", height: "auto" }}
              />
              <div className={styles.textContainer}>
                {item.text}
                <NavLink
                  to={item.link}
                  style={{ color: "inherit", marginBottom: "1rem" }}
                >
                  Citeste mai mult
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default DropDownMenu;
