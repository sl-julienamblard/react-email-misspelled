/** @format */

import styled from "styled-components"

export const Wrapper = styled.div`
	position: relative;
`

export const Input = styled.input`
	${props =>
		props.styles ||
		`
		padding: 12px 8px;
		width: 300px;
		border-radius: 4px;
		border: 0;
	`}
`

export const Suggest = styled.div`
	position: absolute;
	margin-top: 5px;
	border-radius: 4px;
	overflow: hidden;
`

export const SuggestItem = styled.div`
	background-color: white;
	padding: 8px;
	color: black;
	cursor: pointer;
	&:hover {
		background-color: #cddc39;
	}
`

export const SuggestLink = styled.span`
	color: blue;
	text-decoration: underline;
`
