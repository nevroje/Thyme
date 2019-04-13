import React, { Component } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import axios from "axios";
import { getProjects } from "../modules/getProjects";
import { getTimesheets } from "../modules/getData";
import { Dropdown } from "semantic-ui-react";
import { endOfYesterday } from "date-fns";
import _ from 'lodash';



class DashboardChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			labels: [],
			datasets: [],
			user: "",
			projects: [],
			activities: []
		};
	}

	async chartData(month) {
		const projectsResponse = await getProjects();
		const timesheetsResponse = await getTimesheets();
		const projects = projectsResponse.data;
		const timesheets = timesheetsResponse.data;

		// Timesheets for this month
		const timeSheetsForMonth = timesheets.filter(timesheet => Date.parse(timesheet.begin) > Date.parse(month))

		// Unique project names in the relevant timesheets
		let projectNames = []
		timeSheetsForMonth.forEach(timesheet => {
			let timeSheetProjectName = projects.findIndex(project => {
				if (project.id === timesheet.project) {
					return project.name
				}
			})
			if (!projectNames.includes(timeSheetProjectName.name)) {
				projectNames.push({ id: projects[timeSheetProjectName].id, name: projects[timeSheetProjectName].name })
			}
		})

		let dataForDoughnutChart = timeSheetsForMonth.reduce((array, timesheet) => {
			var projectId = timesheet.project;
			let project = projectNames.filter(project => project.id === projectId)[0].name
			if (!array[project]) {
				array[project] = [];
			}
			array[project].push(timesheet);
			return array;
		}, []);

		let dataSets = []
		for (var entry in dataForDoughnutChart) {
			console.log(dataForDoughnutChart[entry])
			let duration = _.sumBy(dataForDoughnutChart[entry], 'duration')
			dataSets.push(duration)
		}

		let chartData = {
			labels: Object.keys(dataForDoughnutChart),
			datasets: dataSets
		}

		this.setState({
			labels: chartData.labels,
			datasets: [{ data: chartData.datasets, backgroundColor: this.getRandomColors(chartData.datasets) }]
		})

	}

	componentDidMount() {
		this.chartData("2019-04-01 00:00")
	}

	getRandomColors(array) {
		let colors = []
		array.forEach(() => {
			let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
			colors.push(color)
		})
		return colors
	}
	render() {
		const months = [
			{
				key: 1,
				value: 'jan',
				text: 'January'
			},
			{
				key: 2,
				value: 'jan',
				text: 'Fabruary'
			},
			{
				key: 3,
				value: 'mar',
				text: 'March'
			},
			{
				key: 4,
				value: 'apr',
				text: 'April'
			}

		]

		return (
			<div style={{ marginLeft: '77px', paddingBottom: "40px" }}>

				<h1>Dashboard </h1>
				<Dropdown
					options={months}
					placeholder="Customer"
					id="customer"
					selection
					onChange={(e, { value }) => this.chartData(new Date('2019' + value))}
				>
				</Dropdown>
				<div className="chart-data">
					<Doughnut
						data={{
							labels: this.state.labels,
							datasets: this.state.datasets
						}}
					/>
				</div>
			</div>
		);
	}
}

export default DashboardChart;