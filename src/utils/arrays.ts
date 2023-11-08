export const findOriginalString = (array: string[], lowerCaseString: string) => {
	// Create a map where each lowercase string maps to the original string
	const map: Map<string, string> = new Map(array.map((str) => [str.toLowerCase(), str]))

	// Return the original string that corresponds to the lowercase string
	return map.get(lowerCaseString) || 'String not found'
}
