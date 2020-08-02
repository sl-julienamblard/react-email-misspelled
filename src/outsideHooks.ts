/** @format */

import { useEffect } from "react"
export function useOutsideHandler(ref, onOutside: () => void, updateOn: any[] = []) {
	useEffect(() => {
		const handle = (event: MouseEvent) => ref.current && !ref.current.contains(event.target) && onOutside()
		document.addEventListener("mousedown", handle)
		return () => document.removeEventListener("mousedown", handle)
	}, [ref, ...updateOn])
}
