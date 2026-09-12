import { Route, Routes } from "react-router";

// component
import Header from "./component/header/Header";
import Layout from "./component/Layout/Layout";
import MainHome from "./component/Layout/MainHome";
import SearchResults from "./component/Layout/SearchResults";
import ImageDetails from "./component/Layout/ImageDetails";
import Collections from "./component/Layout/Collections";
import ActiveCollection from "./component/Layout/ActiveCollection";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainHome />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="photos/:id" element={<ImageDetails />} />

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
