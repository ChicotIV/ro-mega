import styled from "styled-components";
import Footer from "../ui/Footer";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 6.4rem;
  margin: 0 auto;
  width: 70%;
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 568px) {
    padding: 1.2rem;
  }
`;

const StyledHeader = styled.h1`
  font-size: 1.3rem;
  margin: 1.2rem 0 1.2rem 0;
`;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
`;

const StyledList = styled.ul`
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledLi = styled.li`
  font-size: 1.1rem;
  margin-left: 2rem;
`;

function PoliticaConfidentialitate() {
  return (
    <>
      <StyledDiv>
        <StyledHeader>POLITICA DE CONFIDENȚIALITATE</StyledHeader>
        <StyledParagraph>
          Ro-Mega Trade cu sediul social în bd. Basarabia, nr. 250, cladirea
          Simpex, Parter, având CUI nr. RO14428873, şi număr de ordine în
          registrul comerţului J40/688/2002, reprezentată de Elif Ozkan în
          calitate de administrator, SC Ro-Mega Trade SRL prelucrează date cu
          caracter personal în măsura permisă de Legea nr. 677/2001 privind
          protecţia persoanelor cu privire la prelucrarea de date cu caracter
          personal si circulaţia libera a acestor date, de Legea nr.506/2004
          privind prelucrarea datelor cu caracter personal şi protecţia vieţii
          private în sectorul comunicaţiilor electronice și de Regulamentul
          2016/679/UE privind protecția persoanelor fizice în ceea ce privește
          prelucrarea datelor cu caracter personal și privind libera circulație
          a acestor date.
        </StyledParagraph>
        <StyledParagraph>
          Politica de Confidențialitate descrie tipurile de date cu caracter
          personal pe care le prelucrăm, modalitatea și scopurile în care le
          colectăm, situațiile în care le transferăm, precum și drepturile pe
          care dumneavoastră le aveți în privința prelucrării datelor personale.
        </StyledParagraph>
        <StyledHeader>1. Ce sunt datele cu caracter personal</StyledHeader>
        <StyledParagraph>
          Datele cu caracter personal reprezintă orice informație privind o
          persoană fizică identificată sau identificabilă; o persoana fizică
          identificabilă este o persoană care poate fi identificată, direct sau
          indirect, în special prin referire la un element de identificare, cum
          ar fi nume, număr de identificare, date de localizare, identificator
          online, sau la unul sau mai multe elemente specifice, proprii
          identității sale fizice, fiziologice, genetice, psihice, economice,
          culturale sau sociale.
        </StyledParagraph>
        <StyledHeader>2. Categoriile de date prelucrate</StyledHeader>
        <StyledParagraph>
          Datele cu caracter personal pe care le prelucrăm pot include:
        </StyledParagraph>
        <StyledList>
          <StyledLi>
            Date de identificare, cum ar fi: numele și prenumele, adresa de
            domiciliu/ reședință, codul numeric personal, numărul de telefon
            fix/ mobil, serie și număr act de identitate etc;
          </StyledLi>
          <StyledLi>
            Informații despre serviciile și produsele pe care le-ați
            achiziționat (de la Ro Mega Trade și partenerii săi);
          </StyledLi>
          <StyledLi>
            Informații colectate din surse publice, baze de date de integritate
            și birouri de credit;
          </StyledLi>
          <StyledLi>
            Dacă se impune din punct de vedere legal în scopuri de conformare,
            informații privind litigii relevante și importante sau alte acțiuni
            în instanță demarate împotriva dumneavoastră sau a unui terț afiliat
            dumneavoastră și interacțiunea cu dumneavoastră, care s-ar putea
            dovedi relevante în orice scopuri privind prestarea serviciilor
            noastre;
          </StyledLi>
          <StyledLi>
            Informații privind preferințele dumneavoastră, dacă acestea sunt
            relevante serviciilor pe care le prestăm;În anumite situații în care
            colectarea acestor date este obligatorie pentru prestarea
            serviciilor noastre, colectăm categorii speciale de date cu caracter
            personal, respectiv codul numeric personal („CNP / CUI ”). Aceste
            categorii speciale de date vor fi colectate doar pe baza
            consimțimântului prealabil expres al dumneavoastră sau pe baza
            dovezii juste a consimțământului dumneavoastră furnizate de o terță
            persoană care ne comunică aceste date, în cazurile în care există
            orice obligație legală de prelucrare a acestor categorii de date,
            sau dacă prelucrarea este necesară pentru îndreptarea unei situații
            juridice (de exemplu pentru constatarea, exercitarea sau apărarea
            unui drept în instanță);
          </StyledLi>
        </StyledList>
        <StyledHeader>
          3. Modalități de colectare a datelor cu caracter personal
        </StyledHeader>
        <StyledParagraph>
          Datele personale sunt colectate prin intermediul site-ului
          www.romegatrade.ro , dacă ați fost de acord să ni le furnizați prin
          acțiuni precum completarea formularelor, prin trimiterea de e-mailuri
          sau prin solicitarea unei oferte prin. Datele pe care le prelucrăm
          sunt folosite în scopurile specificate sau care rezultă din
          solicitarea dumneavoastră (de exemplu, dacă ați completat un formular
          de cerere ce ofertă, vă putem contacta pentru a vă oferi informații
          despre produsele și serviciile noastre ).
        </StyledParagraph>
        <StyledHeader>
          4. Scopurile prelucrării datelor cu caracter personal
        </StyledHeader>
        <StyledParagraph>
          Prelucăm date cu caracter personal în următoarele scopuri:
        </StyledParagraph>
        <StyledParagraph>
          a) Pentru a vă furniza produsele sau serviciile pe care ni le-ați
          solicitat și pentru a rezolva orice problemă legată de acestea;
        </StyledParagraph>
        <StyledParagraph>
          b) Pentru activități comerciale de vânzari, cuprinzand realizare,
          administrare si dezvoltare vânzari;
        </StyledParagraph>
        <StyledParagraph>
          c) Pentru activități post-vânzare, cum ar fi: servicii de relații cu
          clientii, informarea utilizatorilor/clienților;
        </StyledParagraph>
        <StyledParagraph>
          d) Pentru gestionarea sau administrarea relației de afaceri a
          dumneavoastră sau a organizației dumneavoastră cu Ro-Mega Trade,
          inclusiv pentru procesarea plăților, contabilitate, auditare,
          facturare și încasare, asistență;
        </StyledParagraph>
        <StyledParagraph>
          e) Pentru protejarea securității și gestionarea accesului la sediul
          nostru, sistemele IT și de comunicare, platformele online,
          website-urile și celelalte sisteme, prevenirea și detectarea
          amenințărilor de securitate, fraudelor sau a altor activități
          infracționale sau malițioase;
        </StyledParagraph>
        <StyledParagraph>
          f) Pentru identificarea persoanelor autorizate să tranzacționeze în
          numele clienților, beneficiarilor, furnizorilor și/sau prestatorilor
          noștri de servicii;
        </StyledParagraph>
        <StyledParagraph>
          g) Pentru respectarea, exercitarea și apărarea drepturilor noastre
          legale;
        </StyledParagraph>
        <StyledParagraph>
          h) Pentru realizarea de sondaje, cercetări, studii de piață și
          statistici având ca obiectiv îmbunătățirea calității serviciilor
          Ro-Mega Trade și înțelegerea preferințelor clienților;
        </StyledParagraph>
        <StyledParagraph>
          i) Pentru transmiterea de oferte, mesaje publicitare și de marketing
          cu privire la produsele sau serviciile furnizate de Ro-Mega Trade sau
          partenerii acestuia, pentru a măsura succesul campaniilor noastre de
          publicitate sau pentru a personaliza serviciile în funcție de
          necesitățile dumneavoastră;
        </StyledParagraph>
        <StyledParagraph>
          j) În orice scop aferent și/sau auxiliar oricărora dintre cele de mai
          sus sau orice alt scop pentru care datele dumneavoastră cu caracter
          personal ne-au fost furnizate.
        </StyledParagraph>
        <StyledParagraph>
          Vom prelucra date personale în scopurile menționate la punctele h și i
          va avea loc doar cu consimțământul dumneavoastră expres.
        </StyledParagraph>
        <StyledHeader>
          5. Temeiul legal al prelucrării datelor cu caracter personal
        </StyledHeader>
        <StyledParagraph>
          Orice prelucrare a datelor cu caracter personal se va face pe baza
          unuia dintre temeiurile de mai jos:
        </StyledParagraph>
        <StyledList>
          <StyledLi>
            Prelucrarea este efectuată în baza consimțământului dumneavoastră
            explicit;
          </StyledLi>
          <StyledLi>
            Prelucrarea este necesară în vederea executării unui contract la
            care dumneavoastră sunteți parte sau organizația dumneavoastră este
            parte, sau prelucrarea respectivă este necesară în vederea
            încheierii unui contract cu dumneavoastră sau organizația
            dumneavoastră;
          </StyledLi>
          <StyledLi>
            Prelucrarea este necesară pentru îndeplinirea unei sarcini care
            servește unui interes public;
          </StyledLi>
          <StyledLi>
            Prelucrarea este necesară în vederea respectării unei obligații
            legale;
          </StyledLi>
          <StyledLi>
            Prelucrarea este necesară în vederea protejării intereselor vitale
            ale dumneavoastră sau ale altei persoane fizicePrelucrarea este
            necesară în scopul intereselor legitime ale Ro-Mega Trade, cu
            excepția cazurilor în care interesele sau drepturile și libertățile
            dumneavoastră fundamentale prevalează asupra acestor interese.
          </StyledLi>
        </StyledList>
        <StyledHeader>6. Destinatari ai datelor personale</StyledHeader>
        <StyledParagraph>
          În fluxul de procesare și stocare, datele cu caracter personal ar
          putea fi transferate, în funcție de necesitate, următoarelor categorii
          de destinatari:
        </StyledParagraph>
        <StyledList>
          <StyledLi>
            Autorități ale statului (inclusiv autorități fiscale);
          </StyledLi>
          <StyledLi>
            Companiile din grupul Ro Mega Trade și parteneri contractuali ai
            acesteia;
          </StyledLi>
          <StyledLi>
            Furnizori implicați în mod direct/indirect în procesul de furnizare
            a serviciilor (de exemplu, furnizori de servicii IT, furnizori de
            servicii de facturare, furnizori de servicii de marketing,
            newsletter, evaluarea satisfacției clienților);
          </StyledLi>
          <StyledLi>Instituții bancare;</StyledLi>
          <StyledLi>
            Instanțe de judecata sau arbitrale, precum și autorități competente
            să cerceteze săvârșirea de fapte penale;
          </StyledLi>
        </StyledList>
        <StyledParagraph>
          Ro-Mega Trade va păstra controlul asupra datelor dumneavoastră cu
          caracter personal și va folosi măsuri corespunzătoare de protecție,
          conform legii aplicabile, pentru a asigura integritatea și securitatea
          datelor dumneavoastră.
        </StyledParagraph>
        <StyledHeader>
          7. Transferul datelor cu caracter personal în străinătate
        </StyledHeader>
        <StyledParagraph>
          Pentru realizarea unuia sau mai multor scopuri din cele indicate mai
          sus, datele dumneavoastră pot fi transferate către țări din afara
          Uniunii Europene, care nu oferă un grad de protecție adecvat. În cazul
          în care transferul către astfel de țări este necesar, Ro-Mega Trade va
          solicita respectivilor destinatari să protejeze datele conform
          cerințelor Regulamentului General privind Protecția Datelor (UE)
          2016/679 sau altor legi aplicabile.
        </StyledParagraph>
        <StyledParagraph>
          Ro-Mega Trade ia toate măsurile necesare pentru a se asigura că datele
          dumneavoastră sunt protejate în mod adecvat, indiferent de locul în
          care sunt transferate.
        </StyledParagraph>
        <StyledHeader>8. Perioada de retenție a datelor</StyledHeader>
        <StyledParagraph>
          Datele cu caracter personal colectate de Ro-Mega Trade vor fi
          prelucrate:
        </StyledParagraph>
        <StyledList>
          <StyledLi>pe toata perioada executării contractului</StyledLi>
          <StyledLi>
            ulterior încetării contractului, pentru o perioada de 10 ani
          </StyledLi>
          <StyledLi>
            ulterior expirării perioadei de 10 ani, în cazul în care păstrarea
            datelor personale colectate este necesară în conformitate cu
            legislația aplicabilă sau termenele de retenție prevăzute de
            legislația în domeniu și de politica de retenție stabilită de
            Ro-Mega Trade.
          </StyledLi>
        </StyledList>
        <StyledParagraph>
          Datele personale colectate în vederea transmiterii de comunicării
          comerciale vor fi prelucrate până la data retragerii consimțământului
          exprimat de dumneavoastră.
        </StyledParagraph>
        <StyledHeader>
          9. Drepturile dumneavoastră în legătură cu prelucrarea datelor cu
          caracter personal
        </StyledHeader>
        <StyledList>
          <StyledLi>
            Dreptul la informare – puteți solicita informații privind
            activitățile de prelucrare a datelor dumneavoastră personale;
          </StyledLi>
          <StyledLi>
            Dreptul la rectificare – puteți rectifica datele personale inexacte
            sau le puteți completa;
          </StyledLi>
          <StyledLi>
            Dreptul la ștergerea datelor („dreptul de a fi uitat”) – puteți
            obține ștergerea datelor, în cazul în care prelucrarea acestora nu a
            fost legală sau în alte cazuri prevăzute de lege;
          </StyledLi>
          <StyledLi>
            Dreptul la restricționarea prelucrării – puteți solicita
            restricționarea prelucrării în cazul în care contestați exactitatea
            datelor, precum și în alte cazuri prevăzute de lege;
          </StyledLi>
          <StyledLi>
            Dreptul de opoziție – puteți să vă opuneți, în special,
            prelucrărilor de date care se întemeiază pe interesul nostru
            legitim;
          </StyledLi>
          <StyledLi>
            Dreptul la portabilitatea datelor – puteți primi, în anumite
            condiții, datele personale pe care ni le-ați furnizat, într-un
            format care poate fi citit automat sau puteți solicita ca
            respectivele date să fie transmise altui operator;
          </StyledLi>
          <StyledLi>
            Dreptul de a depune plângere – puteți depune plângere fața de
            modalitatea de prelucrare a datelor personale la Autoritatea
            Naționala de Supraveghere a Prelucrării Datelor cu Caracter
            Personal;
          </StyledLi>
          <StyledLi>
            Dreptul de retragere a consimțământului – în cazurile în care
            prelucrarea se întemeiază pe consimțământul dumneavoastră, vi-l poți
            retrage oricând. Retragerea consimțământului va avea efecte doar
            pentru viitor, prelucrarea efectuată anterior retragerii rămânând în
            continuare valabilă;
          </StyledLi>
          <StyledLi>
            Drepturi suplimentare aferente deciziilor automate: puteți cere și
            obține intervenția umană cu privire la respectiva prelucrare, vă
            poți exprima propriul punct de vedere cu privire la aceasta și
            puteți contesta decizia.
          </StyledLi>
        </StyledList>
        <StyledHeader>
          10. Actualizarea Politicii de Confidențialitate
        </StyledHeader>
        <StyledParagraph>
          Cea mai recentă actualizare a acestei Politici de Confidențialitate a
          fost realizată în luna iunie 2020. Ne rezervăm dreptul de a actualiza
          și modifica periodic această Politică de Confidențialitate, pentru a
          reflecta orice modificări ale modului în care prelucrăm datele
          dumneavoastră cu caracter personal sau orice modificări ale cerințelor
          legale. În cazul oricărei astfel de modificări, vom afișa pe
          website-ul nostru versiunea modificată a Politicii de
          Confidențialitate și/sau o vom pune la dispoziție în alt mod.
        </StyledParagraph>
        <StyledHeader>11. Modalități de contact</StyledHeader>
        <StyledParagraph>
          Pentru exercitarea drepturilor menționate mai sus, ne puteți trimite o
          cerere scrisă la adresa Hyperion Towers, Oras Voluntari, Bulevardul
          Pipera, Nr. 1/VI sau un e-mail la office@romegatrade.ro.
        </StyledParagraph>
        <StyledParagraph>
          De asemenea, în cazul în care oricare dintre datele cu caracter
          personal pe care ni le-ați furnizat suferă modificări sau dacă aflați
          că deținem orice date cu caracter personal incorecte cu privire la
          dumneavoastră, vă rugăm să ne anunțați prin una din metodele de mai
          sus.
        </StyledParagraph>
      </StyledDiv>
      <Footer />
    </>
  );
}

export default PoliticaConfidentialitate;
