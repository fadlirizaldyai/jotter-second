import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404";
import DetailPage from "./pages/Detail";
import { getInitialData } from "./utils";
import TesPage from "./pages/TesPage";

function App() {
  const [data, setData] = useState(getInitialData);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage data={data} setData={setData} />
              </>
            }
          />
          <Route
            path="/note/:id"
            element={
              <>
                <DetailPage data={data} setData={setData} />
              </>
            }
          />
          <Route
            path="/test"
            element={
              <>
                <TesPage />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <NotFoundPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
