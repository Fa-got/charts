import { StoreController } from "redux-store-controller";
import ViewController from "~/views/viewController";

import StoreList from "./storeList";
import SubscriptionMap from "./subscriptionMap";
import DbAgent from "./../js/controller/dbAgent";

const LoaderList = [
	{
		step: 0,
		parts: [
			{
				name: "storeList",
				type: "data",
				controller: StoreList
			},
			{
				name: "subscriptionMap",
				type: "data",
				controller: SubscriptionMap
			},
			{
				name: "stores",
				type: "class",
				controller: StoreController,
				params: ["storeList", "subscriptionMap"]
			},
			{
				name: "db",
				type: "class",
				controller: DbAgent,
				params: ["stores"],
				isLoaded: false
			}
		]
	},
	{
		step: 2,
		parts: [
			{
				name: "view",
				type: "class",
				controller: ViewController,
				params: ["stores"]
			}
		]
	}
];

export default LoaderList;
