import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import AlbumDetails from "./Pages/AlbumDetails/AlbumDetails";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<LandingPage />} />

				<Route path="/album/:slug" element={<AlbumDetails />} />

				<Route path="*" element={<LandingPage />} />
			</Routes>
		</div>
	);
}

export default App;