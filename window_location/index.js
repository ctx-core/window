import { has_dom, no_dom } from '@ctx-core/dom'
import { atom_, be_computed_pair_, computed_, onMount } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const window_location__atom$_ = be_(()=>
	atom_())
/** @typedef {import('@ctx-core/object').be_atom_triple_T} */
/** @typedef {import('@ctx-core/nanostores').WritableAtom_} */
/** @typedef {import('@ctx-core/object').Be} */
/** @typedef {import('@ctx-core/object').Ctx} */
/** @type {typeof import('./index.d.ts').window_location$_} */
export const [
	window_location$_,
	window_location_,
] = /** @type {be_computed_pair_T<Location>} */ be_computed_pair_(be_(ctx=>{
	const window_location$ = computed_(window_location__atom$_(ctx),
		window_location__atom=>window_location__atom)
	if (has_dom) {
		let onpopstate = ()=>window_location__reset(ctx)
		onMount(window_location$, ()=>{
			window.addEventListener('popstate', onpopstate)
			return ()=>window.removeEventListener('popstate', onpopstate)
		})
	}
	return window_location$
}, { id: 'window_location' }))
export { window_location$_ as window_location__ }
/**
 * @param {Ctx}ctx
 */
export function window_location__reset(ctx) {
	if (no_dom) return
	window_location__atom$_(ctx).$ = window.location
}
