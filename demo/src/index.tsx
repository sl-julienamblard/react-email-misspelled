/** @format */
import React from "react"
import { render } from "react-dom"
import { top100 } from "email-misspelled"
import EmailMisspelledInput from "../../src"
import "./core.scss"

const CustomeSuggestions = ({ suggestions, onClick }) => {
	return (
		<ul>
			{suggestions.map(suggestion => (
				<li onClick={() => onClick(suggestion)}>{suggestion.suggest}</li>
			))}
		</ul>
	)
}

const App = () => {
	const handleChange = e => console.log("on handlechange", e)
	return (
		<EmailMisspelledInput
			className="customeClassname customeClassname2"
			onChange={handleChange}
			placeholder="placeholder"
			// inputStyles={{
			// 	backgroundColor: "red",
			// }}
			domains={top100}
			SuggestionsComponent={EmailMisspelledInput.components.one}
		/>
	)
}

render(<App />, document.querySelector("#root"))
