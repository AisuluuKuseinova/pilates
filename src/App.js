import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import MainRoutes from "./mainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <MainRoutes />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
