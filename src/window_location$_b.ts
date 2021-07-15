import { B, be_, assign } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { Writable$, writable$ } from '@ctx-core/store'
import type { window_Ctx } from './window_Ctx.js'
const key = 'window_location$'
export const window_location$_b:B<window_Ctx, typeof key> = be_(key, ()=>{
	const window_location$ = writable$<Location|undefined>(undefined)
	const window_location_reload_popstate_bound$ =
		writable$(undefined) as Writable$<boolean|undefined>
	if (has_dom) {
		reset_window_location()
	}
	return assign(window_location$, {
		reset_window_location,
		reset__location__window: reset_window_location,
	}) as window_location$_T
	function reset_window_location() {
		if (!has_dom) return
		if (!window_location_reload_popstate_bound$.$) {
			window_location_reload_popstate_bound$.set(true)
			window.addEventListener(
				'popstate',
				reset_window_location)
		}
		window_location$.set(window.location)
	}
})
export interface window_location$_T extends Writable$<Location|undefined> {
	reset_window_location:()=>void
	reset__location__window:()=>void
}
export {
	window_location$_b as b__location__window,
}
