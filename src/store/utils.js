/** Converts an object of reducers in the form of (state, ...args) => state into Zustand
  * actions in the form of (...args) => void.
	* @param {function} setFn Zustand `set` function.
	* @param {object} reducers An object containing the reducers to convert.
	*/
export const convertReducersToActions = (setFn, reducers) => {
	const entries = Object.entries(reducers)
	const actions = entries.map(([type, fn]) =>
		([type, (...args) => setFn(state => fn(state, ...args), undefined, { type, ...args })]))
	return Object.fromEntries(actions)
}
