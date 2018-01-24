// import times from "lodash/times";

export default [
	{
		name: "emails",
		data: {
			h1: "List of EMAILS Collected"
		},
		options: {}
	},
	{
		name: "pie-interections",
		data: {
			h1: "Number of Interactions ",
			desc: "Number of passengers interacted and \r\n aborted the interactions"
		},
		options: {
			graph_id: "pie-interections",
			chartType: "PieChart",
			options: {
				pieHole: 0.55,
				is3D: false,
				legend: { position: "bottom" },
				colors: ["#cd5599", "#009bdf", "#DC582A"]
			},
			data: [
				["", ""],
				["Interacted", Math.random() * 100],
				["Aborted", Math.random() * 100]
			],
			width: "100%",
			height: "80%"
		}
	},
	{
		name: "pie-language",
		data: {
			h1: "Language Selection, %",
			desc: "Percentage overview of people choosing \r\n the specific language"
		},
		options: {
			graph_id: "pie-language",
			chartType: "PieChart",
			options: {
				pieHole: 0.55,
				is3D: false,
				legend: {
					position: "bottom"
				},
				colors: [
					"#cd5599",
					"#009bdf",
					"#6e2b62",
					"#115e67",
					"#63666a",
					"#a6192e",
					"#0067b8",
					"#00a9ac"
				]
			},
			data: [
				["Task", "Day Visitors"],
				["Arabic", Math.random() * 100],
				["English", Math.random() * 100],
				["German", Math.random() * 100],
				["French", Math.random() * 100],
				["Russian", Math.random() * 100],
				["Mandarin", Math.random() * 100],
				["Spanish", Math.random() * 100],
				["Italian", Math.random() * 100]
			],
			width: "100%",
			height: "80%"
		}
	},
	{
		name: "bar-language",
		data: {
			h1: "Language Selection, numberS\n",
			desc: "Number of people choosing the specific language"
		},
		options: {
			graph_id: "bar-language",
			chartType: "ColumnChart",
			data:[["","",{role:"style"}],
				["Arabic", Math.random()*250,"#CD5599"],
				["English", Math.random()*250,"#009bdf"],
				["German", Math.random()*250,"#6e2b62"],
				["French", Math.random()*250,"#115e67"],
				["Russian", Math.random()*250,"#63666a"],
				["Mandarin", Math.random()*250,"#00a9ac"],
				["Spanish", Math.random()*250,"#0067b9"],
				["Italian", Math.random()*250,"#a6192e"]

			],
			width: "100%",
			height: "100%",
			options: {
				vAxis: {
					gridlines: {
						color: 'none'
					},
					lineWidth: 1
				},
				legend: { position: "none", maxLines: 3 },
				bar: { groupWidth: "50%" },

			}
		}
	},

	{
		name: "bar-performance",
		data: {
			h1: "DAILY PERFORMANCE\n",
			desc: "Number of iteractions during the specific days"
		},
		options: {
			graph_id: "bar-performance",
			chartType: "ColumnChart",
			data: [
				[
					"day",
					"Interacted",
					"Aborted",
				],
				["1", 165, 238],
				["2", 250, 45],
				["3", 157, 139],
				["4", 139, 250],
				["5", 136, 91],
				["6", 136, 91],
				["7", 136, 91],
				["8", 136, 68],
				["9", 136, 54],
				["10", 136, 87],
				["11", 250, 86],
				["12", 136, 200],
				["13", 136, 23],
				["14", 136, 56],
				["15", 165, 87],
				["16", 135, 250],
				["17", 250, 139],
				["18", 139, 250],
				["19", 136, 18],
				["20", 136, 125],
				["21", 250, 250],
				["22", 136, 56],
				["23", 136, 38],
				["24", 136, 87],
				["25", 136, 45],
				["26", 136, 12],
				["27", 136, 245],
				["28", 136, 45],
				["29", 136, 21],
				["30", 250, 158],
				["31", 136, 250],
			],
			options: {
				vAxis: {
					gridlines: {
						color: 'none'
					},
					lineWidth: 1
				},
				seriesType: "bars",
				legend: {
					position: "bottom",
					maxLines: 3
				},
				colors: ["#009bdf", "#CD5599"],
				bar: { groupWidth: "60%" }
			},
			width: "100%",
			height: "100%"
		}

	},
	{
		name: "bar-leads",
		data: {
			h1: "NUMBER OF LEADS\n",
			desc: "Number of leads \"Do it now\" to Emirates"
		},
		options: {
			graph_id: "bar-leads",
			chartType: "ComboChart",
			data: [
				[
					"Do it now",
					"Do it now",
				],
				["1", 238],
				["2", 45],
				["3", 139],
				["4", 250],
				["5", 91],
				["6", 91],
				["7", 91],
				["8", 68],
				["9", 54],
				["10", 87],
				["11", 86],
				["12", 200],
				["13", 23],
				["14", 56],
				["15", 87],
				["16", 250],
				["17", 139],
				["18", 250],
				["19", 18],
				["20", 125],
				["21", 250],
				["22", 56],
				["23", 38],
				["24", 87],
				["25", 45],
				["26", 12],
				["27", 245],
				["28", 45],
				["29", 21],
				["30", 158],
				["31", 250],
			],
			options: {
				vAxis: {
					gridlines: {
						color: 'none'
					},
					lineWidth: 1
				},
				seriesType: "bars",
				legend: {
					position: "bottom",
					maxLines: 3
				},
				colors: ["#009bdf"],
				bar: { groupWidth: "40%" }
			},
			width: "100%",
			height: "100%"
		}
	},
	{
		name: "bar-language-area",
		data: {
			h1: "Areas of Interest by Language\n",
			desc: "Statistics on areas of interest (experience) by languages"
		},
		options: {
			graph_id: "bar-language-area",
			chartType: "ComboChart",
			data: [
				[
					"package",
					"Arts & Heritage",
					"Beaches",
					"Family \n Entertainment",
					"Sports &\n  Adventure",
					"Dining",
					"Spa",
					"Shopping",
					"Events"
				],
				["Arabic", 165, 938, 522, 998, 450, 614.6, 450, 614.6],
				["English", 135, 1120, 599, 1268, 288, 682, 450, 614.6],
				["Spanish", 157, 139, 215, 968, 1110, 609.4, 450, 614.6],
				["French", 139, 1110, 615, 968, 215, 609.4, 450, 614.6],
				["Russian", 136, 691, 629, 1026, 366, 569.6, 450, 614.6],
				["Mandarin", 136, 691, 629, 1026, 366, 569.6, 450, 614.6],
				["German", 136, 691, 629, 1026, 366, 569.6, 450, 614.6],
				["Italian", 136, 691, 629, 1026, 366, 569.6, 450, 614.6]
			],
			options: {
				vAxis: {
					gridlines: {
						color: 'none'
					},
					lineWidth: 1
				},
				seriesType: "bars",
				legend: {
					position: "bottom",
					maxLines: 3
				},
				colors: [
					"#CD5599",
					"#009bdf",
					"#6e2b62",
					"#115e67",
					"#63666a",
					"#00a9ac",
					"#0067b9",
					"#a6192e"
				],
				bar: { groupWidth: "50%" }
			},
			width: "100%",
			height: "100%"
		}
	},
	{
		name: "bar-wishlist",
		data: {
			h1: "Option Selection: \"Wishlist\"or \"Do it now\"\n",
			desc: "Path from experience to \"Wishlist\" or to \"Do it now\""
		},
		options: {
			graph_id: "bar-wishlist",
			chartType: "ComboChart",
			data: [
				[
					"Lang",
					"Experiences",
					"Wishlist",
					"Do it now",
				],
				["Arabic", 165, 938, 522],
				["English", 135, 1120, 599],
				["Spanish", 157, 139, 215],
				["French", 157, 139, 215],
				["Russian", 157, 139, 215],
				["Mandarin", 157, 139, 215],
				["German", 157, 139, 215],
				["Italian", 157, 139, 215],
			],
			options: {
				vAxis: {
					gridlines: {
						color: 'none'
					},
					lineWidth: 1
				},
				seriesType: "bars",
				legend: {
					position: "bottom",
					maxLines: 3
				},
				colors: [
					"#009bdf",
					"#CD5599",
					"#0067b8"
				],
				bar: { groupWidth: "70%" }
			},
			width: "100%",
			height: "100%"
		}
	},
	{
		name: "pie-wishlist",
		data: {
			h1: "WISHLIST COMPLETION\n",
			desc: "Number and details of wishlists completed"
		},
		options: {
			graph_id: "pie-wishlist",
			chartType: "PieChart",
			options: {
				pieHole: 0.55,
				is3D: false,
				legend: { position: "bottom" },
				colors: ["#009bdf", "#cd5599"]
			},
			data: [
				["", ""],
				["Created", Math.random() * 100],
				["Completed", Math.random() * 100]
			],
			width: "100%",
			height: "100%"
		}
	},
	{
		name: "pie-time-spent",
		data: {
			h1: "Time Spent on Interaction\n",
			desc: "Time spent on each experience or package"
		},
		options: {
			graph_id: "pie-time-spent",
			chartType: "PieChart",
			options: {
				pieHole: 0.55,
				is3D: false,
				legend: {
					position: "bottom"
				},
				colors: [
					"#CB5599",
					"#D066A3",
					"#D577AD",
					"#DB88B8",
					"#E099C2",
					"#E5AACC",
					"#EABBD6",
					"#EFCCE0",
					"#009BDF",
					"#33AFE5",
					"#66C3EC",
					"#99D7F2",
					"#CCEBF9",

				]
			},
			data: [
				["",""],
				["Arts & Heritage", Math.random() * 100],
				["Beaches", Math.random() * 100],
				["Family Entertainment", Math.random() * 100],
				["Spa", Math.random() * 100],
				["Sports & Adventure", Math.random() * 100],
				["Dining", Math.random() * 100],
				["Shopping", Math.random() * 100],
				["Events", Math.random() * 100],
				["Stop-Over in 6 hrs", Math.random() * 100],
				["Stop-Over in 24 hrs", Math.random() * 100],
				["Stop-Over in 48 hrs", Math.random() * 100],
				["Family Experiences", Math.random() * 100],
				["Couples Experiences", Math.random() * 100]
			],
			width: "100%",
			height: "100%"
		}
	},
	{
		name: "bar-time-performance",
		data: {
			h1: "TIME PERFORMANCE",
			desc: "Number of interactions during the specific time"
		},
		options: {
			graph_id: "bar-time-performance",
			chartType: "ComboChart",
			data: [
				[
					"Users",
					"Users",
				],
				["00:00-00:30", 238],
				["00:30-01:00", 45],
				["01:00-01:30", 139],
				["01:30-02:00", 250],
				["02:00-02:30", 91],
				["02:30-03:00", 91],
				["03:00-03:30", 91],
				["03:30-04:00", 68],
				["04:00-04:30", 54],
				["04:30-05:00", 87],
				["05:00-05:30", 86],
				["05:30-06:00", 200],
				["06:00-06:30", 23],
				["06:30-07:00", 56],
				["07:00-07:30", 87],
				["07:30-08:00", 250],
				["08:00-08:30", 139],
				["08:30-09:00", 250],
				["09:00-09:30", 18],
				["09:30-10:00", 125],
				["10:00-10:30", 250],
				["10:30-11:00", 56],
				["11:00-11:30", 38],
				["11:30-12:00", 87],
				["12:00-12:30", 45],
				["12:30-13:00", 12],
				["13:00-13:30", 245],
				["13:30-14:00", 45],
				["14:00-14:30", 21],
				["14:30-15:00", 158],
				["15:00-15:30", 23],
				["15:30-16:00", 1],
				["16:00-16:30", 23],
				["16:30-17:00", 20],
				["17:00-17:30", 45],
				["17:30-18:00", 6],
				["18:00-18:30", 43],
				["18:30-19:00", 5],
				["19:00-19:30", 6],
				["19:30-20:00", 7],
				["20:00-20:30", 87],
				["20:30-21:00", 43],
				["21:00-21:30", 3],
				["21:30-22:00", 2],
				["22:00-22:30", 2],
				["22:30-23:00", 1],
				["23:00-23:30", 9],
				["23:30-00:00", 0],

			],
			options: {
				vAxis: {
					gridlines: {
						color: 'none'
					},
					lineWidth: 1
				},
				seriesType: "bars",
				legend: {
					position: "bottom",
					maxLines: 3
				},
				colors: [
					"#009bdf",
					"#6e2b62",
					"#115e67",
					"#63666a",
					"#a6192e"
				],
				bar: { groupWidth: "50%" }
			},
			width: "100%",
			height: "100%"
		}
	},
	{
		name: "bar-email",
		data: {
			h1: "EMAILS COLLECTED\n",
			desc: "Number of emails collected"
		},
		options: {
			graph_id: "bar-email",
			chartType: "ComboChart",
			data: [
				[
					"Emails",
					"Emails",
				],
				["1", 238],
				["2", 45],
				["3", 139],
				["4", 250],
				["5", 91],
				["6", 91],
				["7", 91],
				["8", 68],
				["9", 54],
				["10", 87],
				["11", 86],
				["12", 200],
				["13", 23],
				["14", 56],
				["15", 87],
				["16", 250],
				["17", 139],
				["18", 250],
				["19", 18],
				["20", 125],
				["21", 250],
				["22", 56],
				["23", 38],
				["24", 87],
				["25", 45],
				["26", 12],
				["27", 245],
				["28", 45],
				["29", 21],
				["30", 158],
				["31", 250],
			],
			options: {
				vAxis: {
					gridlines: {
						color: 'none'
					},
					lineWidth: 1
				},
				seriesType: "bars",
				legend: {
					position: "bottom",
					maxLines: 3
				},
				colors: [
					"#009bdf"
				],
				bar: { groupWidth: "50%" }
			},
			width: "100%",
			height: "100%"
		}
	},
	{
		name: "bar-aborted-sections",
		data: {
			h1: "ABORTED SECTIONS OVERVIEW\n",
			desc: "At what stage do people abort the experience?"
		},
		options: {
			graph_id: "bar-aborted-sections",
			chartType: "ColumnChart",
			data: [["", "", {role: "style"}],
				["Home Page", Math.random() * 250, "#009BDF"],
				["Experience or Packages Pages", Math.random() * 250, "#CB5599"],
				["Wishlist", Math.random() * 250, "#0067B9"],
				["User authorization", Math.random() * 250, "#DC582A"],
			],
			width: "100%",
			height: "100%",
			options: {
				vAxis: {
					gridlines: {
						color: 'none'
					},
					lineWidth: 1
				},
				legend: {position: "none", maxLines: 3},
				bar: {groupWidth: "50%"},

			}
		}
	}
];
