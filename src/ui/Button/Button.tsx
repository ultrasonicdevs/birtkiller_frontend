import React, { ElementType } from 'react';
import { ButtonProps, VariantTags } from "./types";
import { useSpring } from "@react-spring/web";
import { StyleButton } from './styles';
import Arrow from "../Arrow/Arrow";

const Button =
	<E extends ElementType = ElementType>
	({
		 as,
		 arrow = false,
		 children,
		 style = {},
		 ...otherProps
	 }: ButtonProps<E>) => {
		const [child, setChild] =
			React.useState<any[]>([children]);
		const [hover, setHover] =
			React.useState<boolean>(false);
		
		const animation = useSpring({
			background: hover ?
				style.backgroundHover || "#1C1C1C"
				: style.background || "#F0F0F0",
			color: hover ?
				style.colorHover || "#F0F0F0"
				: style.color || "#1C1C1C",
		});
		
		const Tag = VariantTags[as];
		
		return (
			<StyleButton
				as={Tag}
				style={{...style, ...animation}}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				{...otherProps}
			>
				{ child }
				{arrow && <Arrow/>}
			</StyleButton>
		)
	}
export default Button;