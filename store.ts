import { writable, derived, get, Writable, Readable } from '@ctx-core/store'
import { _has__dom } from '@ctx-core/dom'
import { assign, _b } from '@ctx-core/object'
import type { maybe, maybe_null } from '@ctx-core/function'
export type $hostname_type = maybe_null<string>
export type hostname_type = Writable<$hostname_type>
export const b__hostname = _b<hostname_type>('__hostname', ()=>
	writable(null))
export const __hostname = b__hostname()
export const b__pathname = _b<pathname_type>('__pathname', ()=>
	writable(null))
export type $pathname_type = maybe_null<string>
export type pathname_type = Writable<$pathname_type>
export const b__location__window = _b<type__location__window>('__location__window', ()=>{
	const __location__window = writable(null) as type__location__window
	const __bound__popstate__reload__location__window = writable(null) as Writable<null|boolean>
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
export type $type__location__window = maybe<Location>
export interface type__location__window extends Writable<$type__location__window> {
	reset__location__window:()=>void
}
export const __location__window = b__location__window()
export const {
	reset__location__window,
} = __location__window
export const b__hostname__location__window = _b<hostname__location__window>(
	'__hostname__location__window', ctx=>
		derived([
				b__hostname(ctx),
				b__location__window(ctx),
			],
			([hostname, location__window]:[$hostname_type, $type__location__window])=>
				(location__window && (location__window as Location).hostname) || hostname || ''))
export type $hostname__location__window = maybe_null<string>
export type hostname__location__window = Readable<$hostname__location__window>
export const __hostname__location__window = b__hostname__location__window()
export const b__pathname__location__window = _b<pathname__location__window>(
	'__pathname__location__window', ctx=>
		derived([
				b__pathname(ctx),
				b__location__window(ctx),
			],
			([pathname, location__window]:[$pathname_type, $type__location__window])=>
				(location__window && (location__window as Location).pathname)
				|| pathname
				|| ''))
export const __pathname__location__window = b__pathname__location__window()
export type $pathname__location__window = maybe_null<string>
export type pathname__location__window = Readable<$pathname__location__window>
