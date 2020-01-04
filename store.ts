import { writable, derived, get, Writable } from 'svelte/store'
import { _has__dom } from '@ctx-core/dom'
import { assign, _b } from '@ctx-core/object'
import { falsy } from '@ctx-core/function'
export const b__hostname = _b('__hostname', ()=>
	writable(null))
export const __hostname = b__hostname()
export const b__pathname = _b('__pathname', ()=>
	writable(null))
export interface Writable__location__window extends Writable<falsy|Location> {
	reset__location__window:()=>void
}
export const b__location__window = _b<Writable__location__window>('__location__window', ()=>{
	const __location__window = writable(null)
	const __bound__popstate__reload__location__window = writable(null)
	if (_has__dom()) {
		reset__location__window()
	}
	return assign(__location__window, {
		reset__location__window,
	})
	function reset__location__window() {
		if (!_has__dom()) return
		if (!get(__bound__popstate__reload__location__window)) {
			__bound__popstate__reload__location__window.set(true)
			window.addEventListener(
				'popstate',
				reset__location__window)
		}
		__location__window.set(window.location)
	}
})
export const __location__window = b__location__window()
export const b__hostname__location__window = _b('__hostname__location__window', ctx=>
	derived([
			b__hostname(ctx),
			b__location__window(ctx),
		],
		([hostname, location__window])=>
			(location__window && location__window.hostname) || hostname || ''))
export const __hostname__location__window = b__hostname__location__window()
export const b__pathname__location__window = _b('__pathname__location__window', ctx=>
	derived([
			b__pathname(ctx),
			b__location__window(ctx),
		],
		([pathname, location__window])=>
			(location__window && location__window.pathname)
			|| pathname
			|| ''))
export const __pathname__location__window = b__pathname__location__window()
