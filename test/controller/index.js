import Data from "./../stores/data";
import find from "lodash/find";

const name = "diagram1";
const dia = find(Data, { name });

dia.data = {
	field1: 65,
	field2: 76
}