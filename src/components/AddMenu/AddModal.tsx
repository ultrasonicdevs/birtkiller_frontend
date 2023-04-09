import React from 'react';
import {values} from "../../App";
import {Button} from "../../ui";
import {IModal} from "./types";

const AddModal = ({setSelected}: IModal) => {
	const [value, setValue] = React.useState<number>(1);
	
	// const submitHandler = (event: React.FormEvent<HTMLElement>) => {};
	
  return (
	  <form>
		  <select value={value} onChange={(event:React.ChangeEvent<HTMLSelectElement>) => setValue(Number(event.target.value))}>
			  {Object.values(values).map((variant, index) => <option key={index} value={index}>{variant.as}</option>)}
		  </select>
			<Button as="button" type="submit" onClick={(e: React.MouseEvent) => {
				e.preventDefault();
				setSelected((prevState:any[]) =>
				[
					...prevState,
					<Button key={prevState.length} as={values[value].as}>{values[value].children}</Button>
				])}
			}
			>add</Button>
	  </form>
  );
}

export default AddModal;