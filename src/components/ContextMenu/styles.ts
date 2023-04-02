import styled, {css} from "styled-components";
import {ContextMenuState} from "./types";

export const ContextMenuContainer = styled.ul<ContextMenuState>`
  position: absolute;
	${({visible, top, left}) => css`
    top: ${top ? top - 5 : 0}px;
    left: ${left ? left : 0}px;
    display: ${visible ? "flex" : "none"};
  `}
  flex-direction: column;
  gap: 1px;
  list-style: none;

  box-sizing: border-box;
  border-radius: 4px;
  margin: 5px 0;
  border: none;
  width: 150px;
  padding: 0;

  background-color: #4D4D4D;
`;
export const Form = styled.form<ContextMenuState>`
  position: absolute;
  left: 150px;
  top: 0;
  
	background-color: #4D4D4D;
  color: #fff;
	font-family: Raleway, sans-serif;
	font-weight: 600;
	font-size: 20px;

  padding: 15px;
  margin: 0;

  ${({visible}:ContextMenuState ) => css`
    display: ${visible ? "flex" : "none"};
  `}
  flex-direction: column;
  gap: 10px;
`
