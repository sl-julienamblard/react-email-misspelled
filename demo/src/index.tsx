/** @format */
import React from "react"
import { render } from "react-dom"
import SuggestFirst from "./SuggestFirst"
import SuggestList from "./SuggestList"
import WithInput from "./WithInput"
import "./core.scss"

const App = () => {
	return (
		<>
			<WithInput />
			<br />
			<SuggestFirst />
			<br />
			<SuggestList />
		</>
	)
}

render(<App />, document.querySelector("#root"))
