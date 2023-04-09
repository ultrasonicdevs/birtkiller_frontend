import React from 'react';
import {Button} from "../../../ui";
import SubItem from "../SubItem/SubItem";
import {ContextMenuItem} from "../types";
import {useVisible} from "../../../hooks";

const Item = ({button, subItems}: ContextMenuItem) => {
	
	const [ref, state, setVisible] = useVisible();
	return (
		<section ref={ref}>
			<Button {...button} onClick={(e: React.MouseEvent) => setVisible(e)}>{button.children}</Button>
			<SubItem visible={state}>{subItems}</SubItem>
		</section>
	)
}

export default Item;