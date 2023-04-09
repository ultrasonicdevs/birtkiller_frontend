import React from "react";
import {UseVisibleReturn} from "./types";

const useVisible = (): UseVisibleReturn => {
	
	const [isVisible, setVisible] = React.useState(false);
	const wrapperRef :React.LegacyRef<HTMLElement> = React.useRef<HTMLElement>(null);
	
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
		setVisible(true);
	}
	
	return [wrapperRef, isVisible, makeVisible];
}

export default useVisible;