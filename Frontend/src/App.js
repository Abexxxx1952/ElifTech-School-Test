import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Shop from "./Components/Shop/Shop";
import ShopingCart from "./Components/ShopingCart/ShopingCart";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shopingcart" element={<ShopingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
