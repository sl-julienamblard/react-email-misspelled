/** @format */

import React, { useCallback, useEffect, useState, useRef, RefObject } from "react"
import emailMisspelled, { EmailMisspelledConfig, Result, EmailMisspelled } from "email-misspelled"
import { MultipleSuggestions } from "./suggestions/multiple"
import { useOutsideHandler } from "./outsideHooks"

interface EmailMisspelledSuggestListProps extends EmailMisspelledConfig {
	className?: string
	itemClassName?: string
	id?: string
	value: string
	handleClickOutsite?: boolean
	inputRef?: RefObject<HTMLInputElement>
	onClick: (result: Result, event?: MouseEvent) => void
}

export const EmailMisspelledSuggestList = ({
	className,
	itemClassName,
	id,
	value,
	handleClickOutsite = false,
	inputRef,
	onClick,
	domains,
	lengthDiffMax,
	maxMisspelled,
}: EmailMisspelledSuggestListProps) => {
	const $suggestList = useRef()
	const checker: EmailMisspelled = useCallback(emailMisspelled({ domains, lengthDiffMax, maxMisspelled }), [
		domains,
		lengthDiffMax,
		maxMisspelled,
	])
	const [get, set] = useState([])
	const onValChanged = () => set(checker(value))
	useEffect(onValChanged, [value])

	handleClickOutsite && useOutsideHandler($suggestList, () => set([]))
	useEffect(() => {
		const onFocus = () => set(checker(inputRef.current.value))
		!!inputRef?.current && inputRef.current.addEventListener("focus", onFocus)
		return () => !!inputRef?.current && inputRef.current.removeEventListener("focus", onFocus)
	}, [inputRef])

	return (
		<MultipleSuggestions
			ref={$suggestList}
			id={id}
			className={className}
			itemClassName={itemClassName}
			suggestions={get}
			onClick={onClick}
		/>
	)
}

export default EmailMisspelledSuggestList
