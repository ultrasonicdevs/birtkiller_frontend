import React, { ElementType } from 'react';
import { ButtonProps, VariantTags } from "./types";
import { useSpring } from "@react-spring/web";
import { StyleButton } from './styles';
import Arrow from "../Arrow/Arrow";
import {Modal} from "../../cpmponents";

const Button =
	<E extends ElementType = ElementType>
	({
		 as,
		 arrow = false,
		 children,
		 ...otherProps
	 }: ButtonProps<E>) => {
		const [child, setChild] = React.useState<any[]>([children]);
		const [hover, setHover] = React.useState<boolean>(false);
		
		const style = useSpring({
			background: hover ? "#1C1C1C" : "#F0F0F0",
			color: hover ? "#F0F0F0" : "#1C1C1C",
		});
		
		const Tag = VariantTags[as];
		
		return (
			<StyleButton
				as={Tag}
				style={style}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				{...otherProps}
			>
				{ child }
				<Modal setSelected={setChild} />
				{arrow && <Arrow/>}
			</StyleButton>
		)
	}
export default Button;