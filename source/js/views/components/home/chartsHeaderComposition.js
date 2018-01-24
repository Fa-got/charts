import React, { Component } from "react";
import jspdf from "jspdf";
import html2canvas from "html2canvas";


export default class ChartsHeaderComposition extends Component {

	// eslint-disable-next-line class-methods-use-this
	printDocument() {

		const input = window.document.getElementById("main");
		html2canvas(input).then(canvas => {
			const imgData = canvas.toDataURL("image/JPEG");
			// eslint-disable-next-line new-cap
			const pdf = new jspdf('', 'mm', [canvas.width, canvas.height]);
			pdf.addImage(imgData, "JPEG",10,10,canvas.width, canvas.height);
			pdf.save("charts.pdf");
		});
	}

	render() {
		return (
			<div className="home-header">
				<div className="left">
					<div className="month">
						<p>Select the month</p>
						<button>Current period</button>
					</div>

					<div className="year">
						<p>Select the year</p>
						<button>2018</button>
					</div>
				</div>

				<div className="center">
					<button className="all-pdf" onClick={this.printDocument.bind(this)}>Save all to PDF</button>
				</div>

				<div className="right">
					<p>Selected Tables</p>
					<div>5</div>
					<button className="select-pdf">Save selected to PDF</button>
				</div>
			</div>
		);
	}
}
