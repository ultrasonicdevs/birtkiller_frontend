import React from 'react';
import {useContextMenu} from "./hooks";
import {ButtonProps} from "./ui/";
import {ContextMenu} from "./components";
import {Button} from './ui';


export type BtnState = ButtonProps

export const values : BtnState[] = [
	{as: "button", children: "button"},
	{as: "link", children: "link"}
];

const App = () => {
	const [items, setItems] = React.useState<ButtonProps[]>([]);
	
	const [ref, element, makeVisible] = useContextMenu();
	
	return (
		<section ref={ref} onContextMenu={(e:React.MouseEvent) => makeVisible(e)}>
			<ContextMenu element={element}/>
			{items.map(
				({
					as,
					children,
					...otherProps
				}: BtnState, index:number) =>
				<Button key={index} as={as} {...otherProps}>{children}</Button>
			)}
			<Button as="link" href="https://google.com" arrow>Google</Button>
		</section>
  );
}

export default App;
