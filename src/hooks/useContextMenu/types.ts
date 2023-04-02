import {Ref, Dispatch, SetStateAction, MouseEvent, RefObject} from "react";


export type MenuState = {
	visible: boolean,
	setVisible: Dispatch<SetStateAction<boolean>>
	left: number,
	top: number,
}

export type UseContextMenuReturn = [RefObject<HTMLElement> ,MenuState, (event: MouseEvent) => void]