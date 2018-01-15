import { StoreController } from "redux-store-controller";
import ViewController from "~/views/viewController";

import StoreList from "./storeList";
import SubscriptionMap from "./subscriptionMap";

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
