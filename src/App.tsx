import AnnouncementBar from "./Components/AnnouncementBar";
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
		</div>
	);
}

export default App;
