import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { hostname_b } from './hostname_b'
import { window_location_b } from './window_location_b'
import type { window_Ctx } from './window_Ctx'
const key = 'window_location_hostname'
export const window_location_hostname_b:B<window_Ctx, typeof key> = be_(key, ctx=>
	derived$([
			hostname_b(ctx),
			window_location_b(ctx),
		],
		([hostname, window_location])=>
			(window_location && (window_location as Location).hostname) || hostname || ''
	) as window_location_hostname_T
)
export type $window_location_hostname_T = string|undefined
export interface window_location_hostname_T extends Readable$<$window_location_hostname_T> {}
