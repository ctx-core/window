import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
export const window_location__ = be_('window_location__', ()=>{
	const window_location_ = atom_(undefined)
	const window_location_reload_popstate_bound$ = atom_(undefined)
	if (has_dom) {
		reset_window_location()
	}
	return assign(window_location_, {
		reset_window_location
	})
	function reset_window_location() {
		if (!has_dom) return
		if (!window_location_reload_popstate_bound$.$) {
			window_location_reload_popstate_bound$.set(true)
			window.addEventListener('popstate', reset_window_location)
		}
		window_location_.set(window.location)
	}
})
export { window_location__ as window_location$_ }
