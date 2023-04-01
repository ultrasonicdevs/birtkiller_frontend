import React from 'react';
import {animated, useSpring} from "@react-spring/web";

const Arrow = () =>  {
	const [hover, setHover] = React.useState<boolean>(false);
	const filter  = useSpring({
		filter: hover ? "invert(1)" : "invert(0)"
	});
	
	return (
		<animated.img
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			style={filter}
			className="self-end"
			src="/linkArrow.svg"
			alt=""
		/>
	);
}

export default Arrow;