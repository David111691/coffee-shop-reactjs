import { useState } from "react";

import AnnouncementBar from "./Components/AnnouncementBar";
import Header from "./Components/Header";

import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import { AuthProvider } from "./Auth/AuthContext";
import { Outlet } from "react-router";

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
      <AuthProvider>
        <AnnouncementBar />
        <Header handleCartClick={handleCartOpen} />
        <Outlet />
        {isCartOpen ? <Cart handleClick={handleCartOpen} isClosing={isCartClosing} /> : ""}
        <Footer />
      </ AuthProvider>
    </div>
  );
}

export default App;
