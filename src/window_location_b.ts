import { B, be_, assign } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { Writable$, writable$ } from '@ctx-core/store'
import type { window_Ctx } from './window_Ctx'
const key = 'window_location'
export const window_location_b:B<window_Ctx, typeof key> = be_(key, ()=>{
	const window_location = writable$<$window_location_T>(undefined)
	const window_location_reload_popstate_bound =
		writable$(undefined) as Writable$<boolean|undefined>
	if (has_dom) {
		reset_window_location()
	}
	return assign(window_location, {
		reset_window_location,
		reset__location__window: reset_window_location,
	}) as window_location_T
	function reset_window_location() {
		if (!has_dom) return
		if (!window_location_reload_popstate_bound.$) {
			window_location_reload_popstate_bound.set(true)
			window.addEventListener(
				'popstate',
				reset_window_location)
		}
		window_location.set(window.location)
	}
})
export type $window_location_T = Location|undefined
export interface window_location_T extends Writable$<$window_location_T> {
	reset_window_location:()=>void
	reset__location__window:()=>void
}
export {
	window_location_b as b__location__window,
}
