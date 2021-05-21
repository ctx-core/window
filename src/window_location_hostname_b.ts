import { _b } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { hostname_b, hostname_Ctx } from './hostname_b'
import { window_location_b, window_location_Ctx } from './window_location_b'
const key = 'window_location_hostname'
export interface window_location_hostname_Ctx
	extends hostname_Ctx, window_location_Ctx {
	window_location_hostname?:window_location_hostname_T
}
export const window_location_hostname_b = _b<window_location_hostname_Ctx, typeof key>(key, ctx=>
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
