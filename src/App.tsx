import { useState } from "react";

import AnnouncementBar from "./Components/AnnouncementBar";
import Header from "./Components/Header";

import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

import { RouterProvider } from "react-router";
import router from './routes';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCartClosing, setIsCartClosing] = useState(false);
  function handleCartOpen() {
    if (!isCartOpen) {
      setIsCartOpen(true);
      return;
    }
    setIsCartClosing(true);
    setTimeout(() => {
      setIsCartClosing(false);
      setIsCartOpen(false);
    }, 500);
  }

  return (
    <div>
      <AnnouncementBar />
      <Header handleCartClick={handleCartOpen} />
      <RouterProvider router={router} />
      {isCartOpen ? <Cart handleClick={handleCartOpen} isClosing={isCartClosing} /> : ""}
      <Footer />
    </div>
  );
}

export default App;
