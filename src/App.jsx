import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import NewsDetail from "./views/NewsDetail";
import { useState } from "react";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  return (
    <>
      <Header searchProps={setSearchValue} sortProps={setSortValue} />
      <Routes>
        <Route
          path="/"
          element={
            <Home searchValueProp={searchValue} sortValueProp={sortValue} />
          }
        />
        <Route path="/:id" element={<NewsDetail />} />
      </Routes>
    </>
  );
};

export default App;
