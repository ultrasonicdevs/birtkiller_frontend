import React from 'react';
import {Form} from "../styles";
import {SubItemProps} from "../types";
import {Button} from "../../../ui";

const SubItem = ({visible = false, children}: SubItemProps) => {

	
	return (
		<>
		<Form visible={visible}>
			{React.createElement(children)}
			<Button as="button">Отправить</Button>
		</Form>
		</>
	);
}

export default SubItem;