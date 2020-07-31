/** @format */
import React, { FormEvent, useState, useCallback, useRef } from "react"
import EmailMisspelled, { top100, Result } from "email-misspelled"
import { EmailMisspelledInputProps } from "./interface"
import { Wrapper, Input } from "./styles"
import { DefaultSuggestions, OneSuggestion } from "./suggestions"

export const EmailMisspelledInput = ({
	className = "",
	defaultValue = "",
	placeholder = "",
	onChange,
	inputStyles,
	SuggestionsComponent,
}: EmailMisspelledInputProps) => {
	const $input = useRef(null)
	const [suggestions, setSuggestions]: [Array<Result>, any] = useState([])
	const checker = useCallback(EmailMisspelled({ domains: top100 }), [])
	const Suggestions = SuggestionsComponent || DefaultSuggestions

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		if (typeof onChange === "function") onChange(e)
		setSuggestions(checker(e.target.value))
	}

	const handleClick = ({ corrected }) => {
		$input.current.value = corrected
		setSuggestions([])
	}

	return (
		<Wrapper className={className.trim()}>
			<Input
				ref={$input}
				styles={inputStyles}
				type="text"
				placeholder={placeholder}
				defaultValue={defaultValue}
				onChange={handleChange}
			/>
			<Suggestions suggestions={suggestions} onClick={handleClick} />
		</Wrapper>
	)
}

EmailMisspelledInput.components = {
	default: DefaultSuggestions,
	one: OneSuggestion,
}

export default EmailMisspelledInput
