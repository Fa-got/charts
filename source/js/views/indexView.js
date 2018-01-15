import { createElement } from "react";
import { ComponentStateStore } from "redux-store-controller";
import ChartsComposition from "./components/home/chartsComposition";

export default class IndexView extends ComponentStateStore {
	constructor(propsData) {
		super({ props: propsData, name: "indexView" });
	}

	render() {
		return createElement(ChartsComposition, {
			stores: this.props.stores
		});
	}
}
