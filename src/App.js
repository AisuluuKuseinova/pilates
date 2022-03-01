import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import MainRoutes from "./mainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <ProductContextProvider>
            <Navbar />
            <MainRoutes />
          </ProductContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
