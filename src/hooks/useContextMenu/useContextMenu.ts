import React from "react";
import {MenuState, UseContextMenuReturn} from "./types";

const useContextMenu = (): UseContextMenuReturn => {
	const [isVisible, setVisible] = React.useState(false);
	const [points, setPoints] = React.useState({
		x: 0,
		y: 0,
	});
	
	const wrapperRef = React.useRef<HTMLElement>(null);
	
	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target as HTMLElement)) {
				setVisible(false)
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const makeVisible = (event: React.MouseEvent) => {
		event.preventDefault();
		setVisible(true)
		setPoints({x: event.pageX, y: event.pageY});
	}
	
	const state: MenuState = {
		visible: isVisible,
		setVisible: setVisible,
		left: points.x,
		top:  points.y
	}
	
	return [wrapperRef, state, makeVisible]
}
export default useContextMenu;