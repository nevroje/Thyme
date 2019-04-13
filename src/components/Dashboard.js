import React, { Component } from "react";
import DashboardChart from './DashboardChart';
import Menubar from "./Menubar";
import Footer from "./footer";

class Dashboard extends Component {
	render() {
		return (
			<div style={{ background: "#354152", height: '100vh' }}>
				<Menubar />
				<DashboardChart />
				<Footer />
			</div >
		);
	}
}

export default Dashboard;
