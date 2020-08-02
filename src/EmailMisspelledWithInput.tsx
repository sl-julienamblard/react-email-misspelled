/** @format */
import React, { ChangeEvent, useState, useCallback, useRef } from "react"
import EmailMisspelled, { Result } from "email-misspelled"
import { EmailMisspelledInputProps } from "./interface"
import { useOutsideHandler } from "./outsideHooks"
import { Wrapper, Input, InputLabel } from "./styles"
import { FirstSuggestion } from "./suggestions"

export const EmailMisspelledWithInput = ({
	id = "react-email-misspelled-with-input",
	className = "",
	label = "Email",
	name,
	defaultValue = "",
	placeholder = "",
	pattern,
	required = false,
	minlength,
	maxlength,
	size,
	onChange,
	onFocus,
	onBlur,
	inputStyles,
	SuggestionsComponent,
	lengthDiffMax,
	maxMisspelled,
	domains,
}: EmailMisspelledInputProps) => {
	const $input = useRef<HTMLInputElement>(null)
	const $wrapper = useRef<HTMLDivElement>(null)
	const [suggestions, setSuggestions] = useState<Result[]>([])
	const checker = useCallback(EmailMisspelled({ domains, lengthDiffMax, maxMisspelled }), [
		domains,
		lengthDiffMax,
		maxMisspelled,
	])
	const Suggestions = SuggestionsComponent || FirstSuggestion

	useOutsideHandler($wrapper, () => setSuggestions([]))

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		typeof onChange === "function" && onChange(e)
		setSuggestions(checker(e.target.value))
	}

	const handleClick = ({ corrected }) => {
		$input.current.value = corrected
		setSuggestions([])
	}
	const handleFocus = (e: MouseEvent) => {
		typeof onFocus === "function" && onFocus(e)
		setSuggestions(checker($input.current.value))
	}
	const handleBlur = (e: MouseEvent) => {
		typeof onBlur === "function" && onBlur(e)
	}

	return (
		<Wrapper className={className.trim()} ref={$wrapper}>
			<InputLabel htmlFor={id}>{label}</InputLabel>
			<Input
				id={id}
				name={name}
				ref={$input}
				styles={inputStyles}
				type="text"
				defaultValue={defaultValue}
				placeholder={placeholder}
				pattern={pattern}
				required={required}
				minlength={minlength}
				maxlength={maxlength}
				size={size}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				spellcheck={false}
			/>
			<Suggestions suggestions={suggestions} onClick={handleClick} />
		</Wrapper>
	)
}

export default EmailMisspelledWithInput
