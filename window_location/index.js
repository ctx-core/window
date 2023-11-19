import { has_dom, no_dom } from '@ctx-core/dom'
import { atom_, be_computed_pair_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const window_location__atom$_ = be_(()=>
	atom_())
/** @typedef {import('@ctx-core/nanostores').WritableAtom_} */
/** @typedef {import('@ctx-core/object').Be} */
/** @typedef {import('@ctx-core/object').Ctx} */
/** @type {typeof import('./index.d.ts').window_location$_} */
export const [
	window_location$_,
	window_location_,
] = be_computed_pair_(ctx=>{
	if (has_dom) {
		let onpopstate = ()=>window_location__reset(ctx)
		asub
			.on(()=>window.addEventListener('popstate', onpopstate))
			.off(()=>window.removeEventListener('popstate', onpopstate))
	}
	return window_location__atom$_(ctx)
}).config({ id: 'window_location' })
export { window_location$_ as window_location__ }
/**
 * @param {Ctx}ctx
 */
export function window_location__reset(ctx) {
	if (no_dom) return
	window_location__atom$_(ctx).$ = window.location
}
