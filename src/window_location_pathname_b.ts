import { be_ } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { $pathname_T, pathname_b } from './pathname_b'
import { $window_location_T, window_location_b } from './window_location_b'
import type { window_Ctx } from './window_Ctx'
const key = 'window_location_pathname'
export const window_location_pathname_b = be_<window_Ctx, typeof key>(key, ctx=>
	derived$([
			pathname_b(ctx),
			window_location_b(ctx),
		],
		([pathname, location__window]:[$pathname_T, $window_location_T])=>
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
