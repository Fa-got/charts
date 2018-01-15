import React, { createElement } from "react";
import { ComponentStateStore } from "redux-store-controller";
import map from "lodash/map";
import ChartsMainComposition from './chartsMainComposition';
import ChartsHeaderComposition from './chartsHeaderComposition';



export default class ChartsComposition extends ComponentStateStore {
	constructor(propsData){
		super({ props: propsData, name: "homeComposition" });
	}
	headerView() {
		return createElement(ChartsHeaderComposition, {
			stores: this.props.stores
		});
	}
	mainView() {
		return createElement(
			"div",
			{
				className: "home-main"
			},
			createElement(ChartsMainComposition, {
			stores: this.props.stores
		}));
	}


	render() {
		return createElement(
			"div",
			{
				className: "article"
			},
			this.headerView(),
			this.mainView()
		);
	}
}

