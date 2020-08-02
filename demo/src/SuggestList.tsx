/** @format */
import React, { useState, useRef } from "react"
import { EmailMisspelledSuggestList, top100 } from "../../src"
import "./core.scss"

const cmp = () => {
	const [val, setVal] = useState<string>("")
	const inputRef = useRef<HTMLInputElement>()
	return (
		<div>
			<h1>{"<EmailMisspelledSuggestList />"}</h1>
			<div style={{ position: "relative" }}>
				<input
					type="text"
					ref={inputRef}
					onChange={e => setVal(e.currentTarget.value)}
					defaultValue={val}
					placeholder="email..."
				/>
				<EmailMisspelledSuggestList
					domains={top100}
					value={val}
					onClick={({ corrected }) => {
						inputRef.current.value = corrected
						setVal(corrected)
					}}
					handleClickOutsite={true}
					inputRef={inputRef}
				/>
			</div>
		</div>
	)
}

export default cmp
