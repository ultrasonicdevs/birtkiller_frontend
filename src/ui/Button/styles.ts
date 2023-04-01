import {animated} from "@react-spring/web";
import styled from "styled-components";

export const StyleButton = animated(
	styled.button`
		border: ${props => props?.style?.border || "solid 1px #1C1C1C"};
	  border-radius: ${props => props?.style?.borderRadius || "10px"};
	  padding: ${props => props?.style?.padding || "14px 24px"};
		
	  justify-content: ${props => props?.style?.justifyContent || "space-between"};
	  flex-direction: ${props => props?.style?.flexDirection || "row"};
	  align-items: ${props => props?.style?.alignItems || "center"};
	  display: ${props => props?.style?.display || "flex"};
	  gap: ${props => props?.style?.gap || "12px"};
	
	  font-family: Raleway, sans-serif;
	  text-decoration: none;
	  font-style: normal;
	  line-height: 20px;
	  font-weight: 600;
	  font-size: 16px;
		box-sizing: border-box;
	
	  cursor: pointer;
	  outline: none;
	`
)