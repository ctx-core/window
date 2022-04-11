import { has_dom } from '@ctx-core/dom'
import { atom$ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
export const window_location$_ = be_('window_location$', ()=>{
	const window_location$ = atom$(undefined)
	const window_location_reload_popstate_bound$ = atom$(undefined)
	if (has_dom) {
		reset_window_location()
	}
	return assign(window_location$, {
		reset_window_location
	})
	function reset_window_location() {
		if (!has_dom) return
		if (!window_location_reload_popstate_bound$.$) {
			window_location_reload_popstate_bound$.set(true)
			window.addEventListener('popstate', reset_window_location)
		}
		window_location$.set(window.location)
	}
})