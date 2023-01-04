import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="search" element={<Search />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
