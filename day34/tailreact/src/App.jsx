import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Products from "./Products";

const App = () => {
  const isAuth = localStorage.getItem("auth");

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/products"
        element={isAuth ? <Products /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
