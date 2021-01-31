import { _b, assign } from '@ctx-core/object'
import { get, Writable, writable } from '@ctx-core/store'
import { has__dom } from '@ctx-core/dom'
import type { maybe } from '@ctx-core/function'
export const window_location_b = _b('window_location', ()=>{
	const window_location = writable<$window_location_type>(null)
	const window_location_reload_popstate_bound = writable(null) as Writable<null|boolean>
	if (has__dom) {
		reset_window_location()
	}
	return assign(window_location, {
		reset_window_location,
		reset__location__window: reset_window_location,
	}) as window_location_type
	function reset_window_location() {
		if (!has__dom) return
		if (!get(window_location_reload_popstate_bound)) {
			window_location_reload_popstate_bound.set(true)
			window.addEventListener(
				'popstate',
				reset_window_location)
		}
		window_location.set(window.location)
	}
})
export type $window_location_type = maybe<Location>
export interface window_location_type extends Writable<$window_location_type> {
	reset_window_location:()=>void
	reset__location__window:()=>void
}
export {
	$window_location_type as $type__location__window,
	window_location_b as b__location__window,
	window_location_type as type__location__window,
}
