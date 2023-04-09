import React from 'react';

import {useGetElementQuery} from "./api/baseQuery/base";
import {useContextMenu} from "./hooks";

import {ContextMenu} from "./components";
import {ButtonProps} from "./ui/";
import {Button} from './ui';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useLoginUserMutation} from "./api/users/token";
import * as yup from "yup";
// import { auth } from './api/users/slice';


export const values : ButtonProps[] = [
	{as: "button", children: "button"},
	{as: "link", children: "link"}
];


export type IForm = { username: string, password: string }


const App = () => {
	
	type Form = yup.InferType<typeof FormSchema>
	
	const {data} = useGetElementQuery<ButtonProps>('tags/')
	React.useEffect(() => console.log(data), [data]);
	
	const [ref, element, makeVisible] = useContextMenu();
	
	const {
		register,
		reset,
		handleSubmit
	} = useForm<Form>();
	
	const [login, {}] = useLoginUserMutation();
	
	const FormSchema = yup.object({
		username: yup.string().required(),
		password: yup.string().required()
	})
	const onSubmit: SubmitHandler<Form> = (values) => {
		login(values);
		reset();
		// console.log(token)
	};
	
	return (
		<section ref={ref} onContextMenu={(e:React.MouseEvent) => makeVisible(e)}>
			<ContextMenu element={element}/>
			{data?.map(
				({
					as,
					children,
					...otherProps
				}: ButtonProps, index: number) =>
				<Button key={index} as={as} {...otherProps}>{children}</Button>
			)}
			<Button as="link" href="https://google.com" arrow>Google</Button>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="text" {...register("username")}/>
				<input type="password" {...register("password")}/>
				<Button as="button" type="submit">Войти</Button>
			</form>
		</section>
  );
}

export default App;

