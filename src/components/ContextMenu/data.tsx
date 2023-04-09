import {ContextMenuItem} from "./types";
import React, {ReactElement} from "react";
// import styled from "styled-components";

const style = {
	backgroundHover: "#4D4D4D",
	background: "#383838",
	borderRadius: "0",
	color: "#C1C1C1",
	border: "none",
	width: "100%",
}
const Refactor = (): ReactElement => {
	return (
		<>
			<p>форма изменения компонента</p>
		</>
	);
}

// const Form = styled.form`
// 	background-color: #4D4D4D;
//   color: #fff;
// 	font-family: Raleway, sans-serif;
// 	font-weight: 600;
// 	font-size: 20px;
//
//   padding: 15px;
//   margin: 0;
// 	flex-direction: column;
//   gap: 10px;
// `

const Add = (): ReactElement => (
	<>
		<select name="component-type" id="component-type">
			<option value=""></option>
		</select>
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