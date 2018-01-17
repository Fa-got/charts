import React, { Component, createElement } from "react";

export default class TableCharts extends Component {
	render() {
		return (
			<div className="block">
				<div className="head">
					<div>
						<h1>{this.props.data.h1}</h1>
					</div>
					<button>Select</button>
				</div>
				{createElement("div", this.props.options)}
			</div>
		);
	}
}
