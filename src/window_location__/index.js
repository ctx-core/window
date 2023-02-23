import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').window_location__} */
export const window_location__ = be_('window_location__', ()=>{
	const window_location_ = atom_(undefined)
	const window_location__onpopstate__bound_ = atom_(false)
	if (has_dom) {
		window_location__reset()
	}
	return assign(window_location_, {
		window_location__reset
	})
	function window_location__reset() {
		if (!has_dom) return
		if (!window_location__onpopstate__bound_.$) {
			window_location__onpopstate__bound_.set(true)
			window.addEventListener('popstate', window_location__reset)
		}
		window_location_.set(window.location)
	}
})
export { window_location__ as window_location$_ }
