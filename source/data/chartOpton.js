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
			// data: [
			// 	[
			// 		"Month",
			// 		"Arabic",
			// 		// "English",
			// 		// "German",
			// 		// "French",
			// 		// "Russian",
			// 		// "Mandarin",
			// 		// "Spanish",
			// 		// "Italian"
			// 	],
			// 	["2012", ...times(8, () => Math.random()*250)],
			// 	["2013",  ...times(8, () => Math.random()*250)],
			// 	["2014",  ...times(8, () => Math.random()*250)],
			// 	["2015", ...times(8, () => Math.random()*250)],
			// 	["2016", ...times(8, () => Math.random()*250)]
			// ],

			// options: {
			// 	seriesType: "bars",
			// 	legend: {
			// 		position: "bottom",
			// 		maxLines: 3
			// 	},
			// 	colors: ["#CD5599", "#009bdf", "#6e2b62", "#115e67", "#63666a", "#a6192e"],
			// 	bar: { groupWidth: "50%" }
			// },
			// width: "100%",
			// height: "100%"}

			chartType: "ColumnChart",
				data:[["Genre","Fantasy & Sci Fi",{role:"style"}],
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
			h1: "Welcome",
			desc: "chart"
		},
		options: {
			graph_id: "bar-performance",
			chartType: "ComboChart",
			data: [
				[
					"Month",
					"Bolivia",
					"Ecuador",
					"Madagascar",
					"Papua New Guinea",
					"Rwanda",
					"Average"
				],
				["2012", 165, 938, 522, 998, 450, 614.6],
				["2013", 135, 1120, 599, 1268, 288, 682],
				["2014", 157, 139, 215, 968, 1110, 609.4],
				["2015", 139, 1110, 615, 968, 215, 609.4],
				["2016", 136, 691, 629, 1026, 366, 569.6]
			],
			options: {
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
					"#a6192e"
				],
				bar: { groupWidth: "50%" }
			},
			width: "100%",
			height: "100%"
		}
	},
	{
		name: "bar-leads",
		data: {
			h1: "Welcome",
			desc: "chart"
		},
		options: {
			graph_id: "bar-leads",
			chartType: "ComboChart",
			data: [
				[
					"Month",
					"Bolivia",
					"Ecuador",
					"Madagascar",
					"Papua New Guinea",
					"Rwanda",
					"Average"
				],
				["2012", 165, 938, 522, 998, 450, 614.6],
				["2013", 135, 1120, 599, 1268, 288, 682],
				["2014", 157, 139, 215, 968, 1110, 609.4],
				["2015", 139, 1110, 615, 968, 215, 609.4],
				["2016", 136, 691, 629, 1026, 366, 569.6]
			],
			options: {
				seriesType: "bars",
				legend: {
					position: "top",
					maxLines: "3"
				},
				colors: [
					"#CD5599",
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
		name: "bar-language-area",
		data: {
			h1: "Welcome",
			desc: "chart"
		},
		options: {
			graph_id: "bar-language-area",
			chartType: "ComboChart",
			data: [
				[
					"Month",
					"Bolivia",
					"Ecuador",
					"Madagascar",
					"Papua New Guinea",
					"Rwanda",
					"Average"
				],
				["2012", 165, 938, 522, 998, 450, 614.6],
				["2013", 135, 1120, 599, 1268, 288, 682],
				["2014", 157, 139, 215, 968, 1110, 609.4],
				["2015", 139, 1110, 615, 968, 215, 609.4],
				["2016", 136, 691, 629, 1026, 366, 569.6]
			],
			options: {
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
			h1: "Welcome",
			desc: "chart"
		},
		options: {
			graph_id: "bar-wishlist",
			chartType: "ComboChart",
			data: [
				[
					"Month",
					"Bolivia",
					"Ecuador",
					"Madagascar",
					"Papua New Guinea",
					"Rwanda",
					"Average"
				],
				["2012", 165, 938, 522, 998, 450, 614.6],
				["2013", 135, 1120, 599, 1268, 288, 682],
				["2014", 157, 139, 215, 968, 1110, 609.4],
				["2015", 139, 1110, 615, 968, 215, 609.4],
				["2016", 136, 691, 629, 1026, 366, 569.6]
			],
			options: {
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
					"#a6192e"
				],
				bar: { groupWidth: "50%" }
			},
			width: "100%",
			height: "100%"
		}
	},
	{
		name: "pie-wishlist",
		data: {
			h1: "Welcome",
			desc: "chart"
		},
		options: {
			graph_id: "pie-wishlist",
			chartType: "PieChart",
			options: {
				pieHole: 0.55,
				is3D: false,
				legend: { position: "bottom" },
				colors: ["#cd5599", "#009bdf", "#DC582A"]
			},
			data: [
				["Task", "Day Visitors"],
				["failures", 11],
				["concerned", 5],
				["bought", 2]
			],
			width: "100%",
			height: "100%"
		}
	},
	{
		name: "pie-time-spent",
		data: {
			h1: "Welcome",
			desc: "chart"
		},
		options: {
			graph_id: "pie-time-spent",
			chartType: "PieChart",
			options: {
				pieHole: 0.55,
				is3D: false,
				legend: { position: "bottom" },
				colors: ["#cd5599", "#009bdf", "#DC582A"]
			},
			data: [
				["Task", "Day Visitors"],
				["failures", 11],
				["concerned", 5],
				["bought", 2]
			],
			width: "100%",
			height: "100%"
		}
	},
	{
		name: "bar-time-performance",
		data: {
			h1: "Welcome",
			desc: "chart"
		},
		options: {
			graph_id: "bar-time-performance",
			chartType: "ComboChart",
			data: [
				[
					"Month",
					"Bolivia",
					"Ecuador",
					"Madagascar",
					"Papua New Guinea",
					"Rwanda",
					"Average"
				],
				["2012", 165, 938, 522, 998, 450, 614.6],
				["2013", 135, 1120, 599, 1268, 288, 682],
				["2014", 157, 139, 215, 968, 1110, 609.4],
				["2015", 139, 1110, 615, 968, 215, 609.4],
				["2016", 136, 691, 629, 1026, 366, 569.6]
			],
			options: {
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
			h1: "Welcome",
			desc: "chart"
		},
		options: {
			graph_id: "bar-email",
			chartType: "ComboChart",
			data: [
				[
					"Month",
					"Bolivia",
					"Ecuador",
					"Madagascar",
					"Papua New Guinea",
					"Rwanda",
					"Average"
				],
				["2012", 165, 938, 522, 998, 450, 614.6],
				["2013", 135, 1120, 599, 1268, 288, 682],
				["2014", 157, 139, 215, 968, 1110, 609.4],
				["2015", 139, 1110, 615, 968, 215, 609.4],
				["2016", 136, 691, 629, 1026, 366, 569.6]
			],
			options: {
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
					"#a6192e"
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
			h1: "Welcome",
			desc: "chart"
		},
		options: {
			graph_id: "bar-aborted-sections",
			chartType: "ComboChart",
			data: [
				[
					"Month",
					"Bolivia",
					"Ecuador",
					"Madagascar",
					"Papua New Guinea",
					"Rwanda",
					"Average"
				],
				["2012", 165, 938, 522, 998, 450, 614.6],
				["2013", 135, 1120, 599, 1268, 288, 682],
				["2014", 157, 139, 215, 968, 1110, 609.4],
				["2015", 139, 1110, 615, 968, 215, 609.4],
				["2016", 136, 691, 629, 1026, 366, 569.6]
			],
			options: {
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
					"#a6192e"
				],
				bar: { groupWidth: "50%" }
			},
			width: "100%",
			height: "100%"
		}
	}
];
