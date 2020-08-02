/** @format */
import React from "react"
import { EmailMisspelledWithInput, top100 } from "../../src"

const Cmp = () => {
	return (
		<>
			<h1>{"<EmailMisspelledWithInput />"}</h1>
			<EmailMisspelledWithInput
				className="customeClassname customeClassname2"
				placeholder="email..."
				domains={top100}
			/>
		</>
	)
}

export default Cmp
