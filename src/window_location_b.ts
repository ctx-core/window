import { _b, assign } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'window_location'
export interface window_location_Ctx {
	window_location?:window_location_T
}
export const window_location_b = _b<window_location_Ctx, typeof key>(key, ()=>{
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
