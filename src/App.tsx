import { Route, Routes } from "react-router";

// component
import Header from "./component/header/Header";
import Layout from "./component/Layout/Layout";
import MainHome from "./component/home/MainHome";
import SearchResults from "./component/home/SearchResults";
import ImgDetails from "./component/img-details/ImgDetails";
import Collections from "./component/collections/main-page/Collections";
import ActiveCollection from "./component/collections/active-collection-page/ActiveCollection";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainHome />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="photos/:id" element={<ImgDetails />} />

          <Route path="/collection">
            <Route index element={<Collections />} />
            <Route path=":id" element={<ActiveCollection />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
