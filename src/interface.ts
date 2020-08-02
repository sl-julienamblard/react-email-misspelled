/** @format */
import { ChangeEvent, FC, RefObject } from "react"
import * as CSS from "csstype"
import { EmailMisspelledConfig, Result } from "email-misspelled"

export interface SuggestionsComponentProps {
	className?: string
	id?: string
	suggestions: Result[]
	onClick: (result: Result, event: MouseEvent) => void
	ref?: RefObject<any>
}

export interface EmailMisspelledInputProps extends EmailMisspelledConfig {
	className?: string
	id?: string
	defaultValue?: string
	pattern?: RegExp
	name?: string
	required?: boolean
	minlength?: number
	maxlength?: number
	size?: number
	placeholder?: string
	onChange?: (event?: ChangeEvent<HTMLInputElement>) => any
	onFocus?: (event?: MouseEvent) => any
	onBlur?: (event?: MouseEvent) => any
	inputStyles?: CSS.Properties
	SuggestionsComponent?: FC<SuggestionsComponentProps>
}
