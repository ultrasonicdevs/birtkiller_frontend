import React from 'react';
import {values} from "../../App";
import {Button} from "../../ui";

interface IModal {
	setSelected: React.Dispatch<React.SetStateAction<any[]>>
}

const Modal = ({setSelected}: IModal) => {
	const [value, setValue] = React.useState<number>(0);
	
	const Btn = <Button as={values[value].as}>{values[value].children}</Button>
  return (
	  <div>
		  <select value={value} onChange={(event:React.ChangeEvent<HTMLSelectElement>) => setValue(Number(event.target.value))}>
			  {Object.values(values).map((variant, index) => <option key={index} value={index}>{variant.as}</option>)}
		  </select>
			<button onClick={() => setSelected((prevState:any[]) => [...prevState, Btn])}>add</button>
	  </div>
  );
}

export default Modal;