import {MouseEvent, RefObject} from "react";

export type UseVisibleReturn = [RefObject<HTMLElement>, boolean, (event: MouseEvent) => void]