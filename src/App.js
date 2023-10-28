import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./components/store/authContext";
import Layout from "./components/layout/Layout";
import LoginPage from "./components/routePages/LoginPages";
import Header from "./components/layout/Header";
import ProductList from "./components/Product/ProductList";

function App() {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [authCtx.isLoggedIn, navigate]);

  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={authCtx.isLoggedIn ? <Navigate to="/header" /> : <LoginPage />}
          />
          <Route
            path="/header"
            element={authCtx.isLoggedIn ? <Header /> : <Navigate to="/" />}
          />
          <Route
            path="/productList"
            element={authCtx.isLoggedIn ? <ProductList /> : <Navigate to="/" />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

