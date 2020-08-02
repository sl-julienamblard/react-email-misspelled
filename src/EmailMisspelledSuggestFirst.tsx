/** @format */

import React, { useCallback, useEffect, useState, useRef, RefObject } from "react"
import emailMisspelled, { EmailMisspelledConfig, Result, EmailMisspelled } from "email-misspelled"
import { FirstSuggestion } from "./suggestions"
import { useOutsideHandler } from "./outsideHooks"

interface EmailMisspelledSuggestProps extends EmailMisspelledConfig {
	className?: string
	id?: string
	email: string
	handleClickOutsite?: boolean
	onClick: (result: Result, event?: MouseEvent) => void
	inputRef?: RefObject<HTMLInputElement>
}

export const EmailMisspelledSuggestFirst = ({
	className,
	id,
	email,
	onClick,
	handleClickOutsite = false,
	inputRef,
	domains,
	lengthDiffMax,
	maxMisspelled,
}: EmailMisspelledSuggestProps) => {
	const $suggest = useRef()
	const checker: EmailMisspelled = useCallback(emailMisspelled({ domains, lengthDiffMax, maxMisspelled }), [
		domains,
		lengthDiffMax,
		maxMisspelled,
	])
	const [get, set] = useState<Result[]>([])
	const onValChanged = () => set(checker(email))
	useEffect(onValChanged, [email])

	handleClickOutsite && useOutsideHandler($suggest, () => set([]))
	useEffect(() => {
		const onFocus = () => set(checker(inputRef.current.value))
		!!inputRef?.current && inputRef.current.addEventListener("focus", onFocus)
		return () => !!inputRef?.current && inputRef.current.removeEventListener("focus", onFocus)
	}, [inputRef])

	return <FirstSuggestion ref={$suggest} id={id} className={className} suggestions={get} onClick={onClick} />
}

export default EmailMisspelledSuggestFirst
