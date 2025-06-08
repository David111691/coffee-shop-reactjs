import AnnouncementBar from "./Components/AnnouncementBar";
import Header from "./Components/Header";
import MainContainer from "./MainContainer";
import HomePage from "./Pages/HomePage";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <MainContainer>
        <HomePage />
      </MainContainer>
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
