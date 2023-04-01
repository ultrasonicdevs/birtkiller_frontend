import React, {ElementType} from 'react';
import {Button} from './ui';
import {ButtonProps} from "./ui/Button/types";
import {Modal} from "./cpmponents";


export type BtnState = ButtonProps<ElementType>

export const values : BtnState[] = [
	{as: "button", children: "button"},
	{as: "link", children: "link"}
];

const App = () => {
	const [items, setItems] = React.useState<any[]>([]);
	return (
		<>
			<Modal setSelected={setItems} />
			{items.map(({as,children, ...otherProps}: BtnState, index: number) => <Button key={index} as={as} {...otherProps}>{children}</Button>)}
		</>
  );
}

export default App;
