import React from 'react';
import {Form} from "../styles";
import {SubItemProps} from "../types";
import {Button} from "../../../ui";

const SubItem = ({visible = false, setVisible, children}: SubItemProps) => {
	return (
		<Form visible={visible}>
			{React.createElement(children)}
			<Button as="button" onClick={() => setVisible(false)}>Отправить</Button>
		</Form>
	);
}

export default SubItem;