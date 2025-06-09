import AnnouncementBar from "./Components/AnnouncementBar";
import Header from "./Components/Header";
import MainContainer from "./MainContainer";
import HomePage from "./Pages/HomePage";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import { useState } from "react";

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
      <MainContainer>
        <HomePage />
      </MainContainer>
      {isCartOpen ? <Cart handleClick={handleCartOpen} isClosing={isCartClosing} /> : ""}
      <Footer />
    </div>
  );
}

export default App;
