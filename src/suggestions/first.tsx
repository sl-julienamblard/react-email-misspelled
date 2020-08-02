/** @format */

import React, { forwardRef } from "react"
import { SuggestionsComponentProps } from "../interface"
import { Suggest, SuggestLink, SuggestItem } from "../styles"

export const FirstSuggestion = forwardRef(({ id, className, suggestions, onClick }: SuggestionsComponentProps, ref) => {
	return (
		<Suggest id={id} className={className} ref={ref}>
			{!!suggestions?.[0] && (
				<SuggestItem onClick={(event: MouseEvent) => onClick(suggestions[0], event)}>
					Did you mean <SuggestLink>{suggestions[0].corrected}</SuggestLink> ?
				</SuggestItem>
			)}
		</Suggest>
	)
})
