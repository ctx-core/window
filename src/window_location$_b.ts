import { has_dom } from '@ctx-core/dom'
import { WritableAtom$, atom$ } from '@ctx-core/nanostores'
import { B, be_, assign } from '@ctx-core/object'
const key = 'window_location$'
export const window_location$_b:B<window_location$_T> = be_(key, ()=>{
	const window_location$ = atom$<Location|undefined>(undefined)
	const window_location_reload_popstate_bound$ =
		atom$(undefined) as WritableAtom$<boolean|undefined>
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
export interface window_location$_T extends WritableAtom$<Location|undefined> {
	reset_window_location:()=>void
	reset__location__window:()=>void
}
export {
	window_location$_b as b__location__window,
}
