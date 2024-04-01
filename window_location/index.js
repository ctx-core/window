/// <reference types="ctx-core" />
import { be_ } from 'ctx-core/be'
/// <reference types="./index.d.ts" />
import { is_browser_, is_server_ } from 'ctx-core/env'
import { id_be_memo_pair_, sig_ } from 'ctx-core/rmemo'
const window_location__sig$_ = be_(()=>
	sig_())
/** @type {typeof window_location$_} */
export const [
	window_location$_,
	window_location_,
] = /** @type {be_memo_pair_T<Location>} */
	id_be_memo_pair_(
		'window_location',
		ctx=>window_location__sig$_(ctx)(),
		[
			ctx=>{
				if (is_browser_()) {
					let onpopstate = ()=>window_location__reset(ctx)
					window.addEventListener('popstate', onpopstate)
				}
			}
		])
export { window_location$_ as window_location__ }
/**
 * @param {ctx_T}ctx
 */
export function window_location__reset(ctx) {
	if (is_server_()) return
	window_location__sig$_(ctx)._ = window.location
}
