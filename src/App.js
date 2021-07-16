import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import CrackerJacks from "./CrackerJacks";
import Peanuts from "./Peanuts";
import Beer from "./Beer";
import NavBar from './NavBar';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Route exact path="/">
				<VendingMachine />
			</Route>
			<Route exact path="/beer">
				<Beer />
			</Route>
			<Route exact path="/peanuts">
				<Peanuts />
			</Route>
			<Route exact path="/crackerjacks">
				<CrackerJacks />
			</Route>
		</BrowserRouter>
	);
}

export default App;
