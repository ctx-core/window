import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { pathname$_ } from './pathname$_.js'
import { window_location$_ } from './window_location$_.js'
export const window_location_pathname$_:B<window_location_pathname$_T> = be_('window_location_pathname$', ctx=>
	computed$([
			pathname$_(ctx),
			window_location$_(ctx),
		],
		(pathname, location__window)=>
			(location__window && (location__window as Location).pathname)
			|| pathname
			|| ''
	) as window_location_pathname$_T
)
export type window_location_pathname_T = string|undefined
export type window_location_pathname$_T = ReadableAtom$<window_location_pathname_T>
