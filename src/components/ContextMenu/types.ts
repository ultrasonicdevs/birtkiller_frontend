import {Dispatch, SetStateAction, ReactElement} from "react";
import {ButtonProps} from "../../ui";

export interface IRef {
	setVisible: Dispatch<SetStateAction<boolean>>
}

export type ContextMenuState = {
	visible: boolean
	left?: number
	top?: number
}

export type SubItemProps = {
	visible: boolean
	setVisible: Dispatch<SetStateAction<boolean>>
	children: any
};

export type ContextMenuItem = {
	button: ButtonProps
	subItems?: (arg0: IRef) => ReactElement
}

export type ContextMenuProps = {
	menuItems?: ContextMenuItem[]
	element: ContextMenuState,
}

