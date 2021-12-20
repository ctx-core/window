import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { hostname$_b } from './hostname$_b.js'
import { window_location$_b } from './window_location$_b.js'
const key = 'window_location_hostname$'
export const window_location_hostname$_b:B<window_location_hostname$_T> = be_(key, ctx=>
	computed$([
			hostname$_b(ctx),
			window_location$_b(ctx),
		],
		(hostname, window_location)=>
			(window_location && (window_location as Location).hostname) || hostname || ''
	) as window_location_hostname$_T
)
export type window_location_hostname$_T = ReadableAtom$<string|undefined>
