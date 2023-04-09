import React from "react";
import {MenuState, UseContextMenuReturn} from "./types";
import {useVisible} from "../index";

const useContextMenu = (): UseContextMenuReturn => {
	
	const [wrapperRef, isVisible, makeVisible] = useVisible()
	const [points, setPoints] = React.useState({
		x: 0,
		y: 0,
	});
	
	const onClick = (event: React.MouseEvent) => {
		event.preventDefault();
		makeVisible(event);
		setPoints({x: event.pageX, y: event.pageY});
	}
	
	const state: MenuState = {
		visible: isVisible,
		left: points.x,
		top:  points.y
	}
	
	return [wrapperRef, state, onClick]
}
export default useContextMenu;