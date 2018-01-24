import { Component, createElement } from "react";
import find from "lodash/find";
import map from "lodash/map";
import chartOption from '@/chartOpton'
import Charts from './charts/charts'
// import TableChart from './charts/tableChart'



const list = [
	// {
	// 	name: "emails",
	// 	type: TableChart
	// },
	{
		name: "pie-interections",
		type: Charts
	},
	{
		name: "pie-language",
		type: Charts
	},
	{
		name: "bar-language",
		type: Charts
	},
	{
		name: "bar-performance",
		type: Charts
	},
	{
		name: "bar-leads",
		type: Charts
	},
	{
		name: "bar-language-area",
		type: Charts
	},
	{
		name: "bar-wishlist",
		type: Charts
	},
	{
		name: "pie-wishlist",
		type: Charts
	},
	{
		name: "pie-time-spent",
		type: Charts
	},
	{
		name: "bar-time-performance",
		type: Charts
	},
	{
		name: "bar-email",
		type: Charts
	},
	{
		name: "bar-aborted-sections",
		type: Charts
	}
]

export default class ChartsMainComposition extends Component {
	render(){
		return map(list, d => {
			const data = find(chartOption, { name: d.name })
			if(typeof data === "undefined") return null;
			return createElement("div",
				{
					className: d.name
				},
				createElement(d.type, data))
		})

	}
}
