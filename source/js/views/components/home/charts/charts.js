import React, { Component, createElement } from "react";
import { Chart } from "react-google-charts";

export default class Charts extends Component {
	render() {
		return (
			<div className="block">
				<div className="head">
					<div>
						<h1>{this.props.data.h1}</h1>
						<h3>{this.props.data.desc}</h3>
					</div>
					<button>Select</button>
				</div>
				{createElement(Chart, this.props.options)}
			</div>
		);
	}
}
