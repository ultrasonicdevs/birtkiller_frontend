import {types} from "mobx-state-tree";
import {actions} from "../actions/Button";

export const Button = types.model({
	id: types.identifier,
	as: "button" || "link",
	children: types.string,
	style: types.string,
	props: types.string
}).actions(self => actions)


