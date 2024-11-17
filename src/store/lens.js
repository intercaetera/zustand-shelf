/** Returns the value focused by `lens` from the `whole`. */
export const view = (lens, whole) => lens.view(whole)

/** Returns a copy of `whole` with the value focused by `lens` updated with `part`. */
export const set = (lens, whole, part) => lens.set(whole, part)

/** Returns a copy of `whole` with the value focused by `lens` passed through `fn`. */
export const over = (lens, whole, fn) => set(lens, whole, fn(view(lens, whole)))

/** Composes two lenses together */
const composeTwo = (outer, inner) => ({
	view: whole => view(inner, view(outer, whole)),
	set: (whole, part) => set(outer, whole, set(inner, view(outer, whole), part)),
})

/** A lens that focuses on the whole value. */
const identityLens = { view: s => s, set: (_s, a) => a }

/** Compose any number of lenses together */
export const compose = (...lenses) => lenses.reduce(composeTwo, identityLens)

/** Creates a lens for a given field name. */
export const lfp = prop => ({
	view: whole => whole[prop],
	set: (whole, part) => ({ ...whole, [prop]: part }),
})

/** Creates a lens for a given index in an array. */
export const lfi = index => ({
	view: whole => whole[index],
	set: (whole, part) => whole.with(index, part),
})
