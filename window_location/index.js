/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { has_dom, no_dom } from '@ctx-core/dom'
import { be_ } from 'ctx-core/be'
import { be_memo_pair_, sig_ } from 'ctx-core/rmemo'
const window_location__sig$_ = be_(()=>
	sig_())
/** @type {typeof window_location$_} */
export const [
	window_location$_,
	window_location_,
] = /** @type {be_memo_pair_T<Location>} */
	be_memo_pair_(
		ctx=>window_location__sig$_(ctx)(),
		{ id: 'window_location' }
	).add(ctx=>{
		if (has_dom) {
			let onpopstate = ()=>window_location__reset(ctx)
			window.addEventListener('popstate', onpopstate)
		}
	})
export { window_location$_ as window_location__ }
/**
 * @param {Ctx}ctx
 */
export function window_location__reset(ctx) {
	if (no_dom) return
	window_location__sig$_(ctx)._ = window.location
}
