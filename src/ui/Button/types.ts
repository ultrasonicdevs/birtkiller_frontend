import {ComponentProps, ElementType} from "react";

export const VariantTags = {
	button: "button",
	link: "a",
	// input: "input",
} as const;

// const InputTags = {
// 	input: "input",
// } as const;
// export const VariantInput = {
// 	button: "button",
// 	submit: "submit"
// } as const;
// type InputButtonOwnProps = { as: keyof typeof InputTags, arrow?: boolean, type: keyof typeof VariantInput, value: any, children?: never }
// type InputButtonProps <E extends ElementType> = InputButtonOwnProps & Omit<ComponentProps<E>, keyof InputButtonOwnProps>;
// export type ButtonProps <E extends ElementType> = (ButtonOwnProps & Omit<ComponentProps<E>, keyof ButtonOwnProps>) | InputButtonProps<E>;
type ButtonOwnProps = {
	as: keyof typeof VariantTags,
	children: any,
	arrow?: boolean
}
export type ButtonProps
	<E extends ElementType = ElementType> = (
		ButtonOwnProps & Omit<ComponentProps<E>, keyof ButtonOwnProps>
	);
