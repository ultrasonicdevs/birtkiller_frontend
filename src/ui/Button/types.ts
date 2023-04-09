import {ComponentProps, ElementType} from "react";

export const VariantTags = {
	button: "button",
	link: "a",
} as const;

type ButtonOwnProps = {
	as: keyof typeof VariantTags,
	children: any,
	arrow?: boolean
}
export type ButtonProps
	<E extends ElementType = ElementType> = (
		ButtonOwnProps & Omit<ComponentProps<E>, keyof ButtonOwnProps>
	);
