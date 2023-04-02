import React from 'react';
import {ContextMenuItem, ContextMenuProps} from "./types";
import {ContextMenuContainer} from "./styles";
import {tagContextMenu} from "./data";
import Item from "./Item/Item";

const ContextMenu = ({element}: ContextMenuProps) => {
	return (
		<ContextMenuContainer
			{...element}
		>
			{tagContextMenu.map(({button, subItems}: ContextMenuItem, index:number) => <Item key={index} button={button} subItems={subItems} />)}
		</ContextMenuContainer>
	);
}

export default ContextMenu;