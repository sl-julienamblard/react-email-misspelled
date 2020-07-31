/** @format */
import { FormEvent, ReactNode } from "react"
import * as CSS from "csstype"
import { EmailMisspelledConfig, Result } from "email-misspelled"

export interface SuggestionsComponentProps {
	suggestions: Result[]
	onClick: any
}

export interface EmailMisspelledInputProps extends EmailMisspelledConfig {
	className?: string
	defaultValue?: string
	placeholder?: string
	onChange?: (event?: FormEvent<HTMLInputElement>) => any
	inputStyles?: CSS.Properties
	SuggestionsComponent?: ReactNode<SuggestionsComponentProps>
}
