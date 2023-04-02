import React from 'react';
import {Button} from "../../../ui";
import SubItem from "../SubItem/SubItem";
import {ContextMenuItem} from "../types";
import {useContextMenu} from "../../../hooks";

const Item = ({button, subItems}: ContextMenuItem) => {
	
	// const [isVisible, setVisible] = React.useState<boolean>(false)
	const [ref, state, setVisible] = useContextMenu();
	return (
		<li>
			<Button {...button} onClick={(e: React.MouseEvent) => setVisible(e)}>{button.children}</Button>
			<SubItem visible={state.visible} setVisible={state.setVisible}>{subItems}</SubItem>
		</li>
	)
}

export default Item;