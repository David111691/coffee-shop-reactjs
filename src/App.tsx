import AnnouncementBar from "./Components/AnnouncementBar";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainContainer from "./MainContainer";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <AnnouncementBar />
      <Header />
      <MainContainer>
        <HomePage />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
