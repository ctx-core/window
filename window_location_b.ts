import { _b, assign } from '@ctx-core/object'
import { get, Writable, writable } from '@ctx-core/store'
import { has__dom } from '@ctx-core/dom'
import type { maybe } from '@ctx-core/function'
export const window_location_b = _b<window_location_type>('__location__window', ()=>{
	const __location__window = writable(null) as window_location_type
	const __bound__popstate__reload__location__window = writable(null) as Writable<null|boolean>
	if (has__dom) {
		reset_window_location()
	}
	return assign(__location__window, {
		reset_window_location,
		reset__location__window: reset_window_location,
	})
	function reset_window_location() {
		if (!has__dom) return
		if (!get(__bound__popstate__reload__location__window)) {
			__bound__popstate__reload__location__window.set(true)
			window.addEventListener(
				'popstate',
				reset_window_location)
		}
		__location__window.set(window.location)
	}
})
export { window_location_b as b__location__window }
export type $window_location_type = maybe<Location>
export type { $window_location_type as $type__location__window }
export interface window_location_type extends Writable<$window_location_type> {
	reset_window_location:()=>void
	reset__location__window:()=>void
}
export type { window_location_type as type__location__window }
