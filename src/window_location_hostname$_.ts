import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { hostname$_ } from './hostname$_.js'
import { window_location$_ } from './window_location$_.js'
const key = 'window_location_hostname$'
export const window_location_hostname$_:B<window_location_hostname$_T> = be_(key, ctx=>
	computed$([
			hostname$_(ctx),
			window_location$_(ctx),
		],
		(hostname, window_location)=>
			(window_location && (window_location as Location).hostname) || hostname || ''
	) as window_location_hostname$_T
)
export type window_location_hostname$_T = ReadableAtom$<string|undefined>
