import DonatView
import GraphView
import map from "lodash/map";
import find from "lodash/find";
import Data  from "./stores/data";

const list = [
	{
		name: "diagram1",
		type: DonatView
	},
	{
		name: "diagram2",
		type: GraphView
	}
]

class Composition extends Component {
	render(){
		return map(list, d => createElement(d.type, find(Data, { name: d.name })))
	}
}