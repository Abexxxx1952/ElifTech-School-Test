import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Shop from "./Components/Shop/Shop";
import ShopingCart from "./Components/ShopingCart/ShopingCart";
import { ContextProvider } from "./Context/ContextProviderHook";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shopingcart" element={<ShopingCart />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
