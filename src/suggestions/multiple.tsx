/** @format */

import React, { forwardRef } from "react"
import { SuggestionsComponentProps } from "../interface"
import { Suggest, SuggestItem } from "../styles"

interface MultipleSuggestionsProps extends SuggestionsComponentProps {
	itemClassName?: string
}

export const MultipleSuggestions = forwardRef(
	({ id, className, itemClassName, suggestions, onClick }: MultipleSuggestionsProps, ref) => {
		return (
			<Suggest ref={ref} id={id} className={className}>
				{suggestions.map(suggestion => (
					<SuggestItem
						key={suggestion.suggest}
						className={itemClassName}
						onClick={(event: MouseEvent) => onClick(suggestion, event)}
					>
						{suggestion.corrected}
					</SuggestItem>
				))}
			</Suggest>
		)
	}
)
