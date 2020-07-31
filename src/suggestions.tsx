/** @format */

import React from "react"
import { SuggestionsComponentProps } from "./interface"
import { Suggest, SuggestLink, SuggestItem } from "./styles"

export const DefaultSuggestions = ({ suggestions, onClick }: SuggestionsComponentProps) => {
	return (
		<Suggest>
			{suggestions.map(suggestion => (
				<SuggestItem key={suggestion.suggest} onClick={() => onClick(suggestion)}>
					{suggestion.corrected}
				</SuggestItem>
			))}
		</Suggest>
	)
}

export const OneSuggestion = ({ suggestions, onClick }: SuggestionsComponentProps) => {
	return (
		<Suggest>
			{suggestions?.[0] && (
				<SuggestItem onClick={() => onClick(suggestions[0])}>
					Did you mean <SuggestLink>{suggestions[0].corrected}</SuggestLink> ?
				</SuggestItem>
			)}
		</Suggest>
	)
}
