import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store.js";

// Pages
import CreateEvent from "./pages/createEvent.jsx";
import CreateClub from "./pages/createClub.jsx";
import "antd/dist/antd.css";
import Navbar from "./components/layouts/navbar.jsx";
import Footer from "./components/layouts/footer.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/create-event">
						<CreateEvent />
					</Route>
					<Route exact path="/create-club">
						<CreateClub />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</Provider>
	);
};

export default App;
