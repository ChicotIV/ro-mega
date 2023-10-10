import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Branduri from "./pages/Branduri";
import Promotii from "./pages/Promotii";

import Evenimente from "./pages/Evenimente";

import Cariere from "./pages/Cariere";
import Contact from "./pages/Contact";
import Produse from "./pages/Produse";
import SoftwareProducts from "./pages/SoftwareProducts";

import DnSolutions from "./pages/DnSolutions";
import Mahr from "./pages/Mahr";
import Faro from "./pages/Faro";
import Wenzel from "./pages/Wenzel";
import OGP from "./pages/OGP";
import PolyWorks from "./pages/PolyWorks";
import Renishaw from "./pages/Renishaw";
import Matrix from "./pages/Matrix";
import UltraPrazision from "./pages/UltraPrazision";
import DK from "./pages/DK";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSoftware } from "./hooks/useSoftware";
import SoftwareProducIndividualItem from "./ui/SoftwareProducIndividualItem";
import MahrPromotions from "./ui/MahrPromotions";
import PoliticaConfidentialitate from "./pages/PoliticaConfidentialitate";
import { useEvenimente } from "./hooks/useEvenimente";
import Eveniment from "./ui/Eveniment";
import PhoneNav from "./ui/PhoneNav";
import ViziuneaNoastra from "./ui/ViziuneaNoastra";
import AWordFromManagement from "./ui/AWordFromManagement";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function StyledApp() {
  const { software } = useSoftware();

  const { evenimente } = useEvenimente();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<MainPage replace to="home" />} />
          <Route path="produse" element={<Produse />}></Route>
          <Route path="produse/software" element={<SoftwareProducts />} />

          {software?.map((item) => (
            <Route
              path={`/produse/software/${item.name
                .toString()
                .replaceAll(" ", "-")}`}
              key={item.id}
              element={<SoftwareProducIndividualItem data={item} />}
            />
          ))}

          <Route path="despre-noi" element={<AboutPage />} />
          <Route
            path="despre-noi/viziunea-noastra"
            element={<ViziuneaNoastra />}
          />
          <Route
            path="despre-noi/a-word-from-management"
            element={<AWordFromManagement />}
          />
          <Route path="branduri" element={<Branduri />} />

          <Route path="branduri/dn-solutions" element={<DnSolutions />} />
          <Route path="branduri/mahr" element={<Mahr />} />
          <Route path="branduri/faro" element={<Faro />} />
          <Route path="branduri/wenzel" element={<Wenzel />} />
          <Route path="branduri/ogp" element={<OGP />} />
          <Route path="branduri/polyworks" element={<PolyWorks />} />
          <Route path="branduri/renishaw" element={<Renishaw />} />
          <Route path="branduri/matrix" element={<Matrix />} />
          <Route path="branduri/ultraprazision" element={<UltraPrazision />} />
          <Route path="branduri/dk" element={<DK />} />
          <Route />

          <Route path="promotii" element={<Promotii />} />

          <Route path="promotii/mahr" element={<MahrPromotions />} />

          <Route path="evenimente" element={<Evenimente />} />

          {evenimente &&
            evenimente.map((item) => (
              <Route
                path={item.link}
                key={item.id}
                element={<Eveniment data={item} />}
              />
            ))}

          <Route path="cariere" element={<Cariere />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="test" element={<PhoneNav />} />

        <Route path="*" element={<PageNotFound />} />
        <Route
          path="/politica-de-confidentialitate"
          element={<PoliticaConfidentialitate />}
        />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <StyledApp />
      </QueryClientProvider>
    </>
  );
}

export default App;
