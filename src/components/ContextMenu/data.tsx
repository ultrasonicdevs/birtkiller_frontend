import {ContextMenuItem} from "./types";
import React, {ReactElement} from "react";


const style = {
	backgroundHover: "#4D4D4D",
	background: "#383838",
	borderRadius: "0",
	color: "#C1C1C1",
	border: "none",
	width: "100%",
}
const Refactor = (): ReactElement => (
	<>
		<p>форма изменения компонента</p>
	</>
);
const Add = (): ReactElement => (
	<>
		<p>форма создание компонента</p>
	</>
);
export const tagContextMenu: ContextMenuItem[] = [
	{
		button: {
			as: "button",
			children: "Добавить",
			style: style,
		},
		subItems: Add
	},
	{
		button: {
			as: "button",
			children: "Изменить",
			style: style,
		},
		subItems: Refactor
	}
];