import { B, be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { pathname$_b } from './pathname$_b.js'
import { window_location$_b } from './window_location$_b.js'
import type { window_Ctx } from './window_Ctx'
const key = 'window_location_pathname'
export const window_location_pathname_b:B<window_Ctx, typeof key> = be_(key, ctx=>
	derived$([
			pathname$_b(ctx),
			window_location$_b(ctx),
		],
		([pathname, location__window]:[string|undefined, Location|undefined])=>
			(location__window && (location__window as Location).pathname)
			|| pathname
			|| ''
	) as window_location_pathname_T
)
export type $window_location_pathname_T = string|undefined
export interface window_location_pathname_T extends Readable$<$window_location_pathname_T> {}
export {
	window_location_pathname_b as b__pathname__location__window,
}
