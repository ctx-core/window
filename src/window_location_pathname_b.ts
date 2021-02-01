import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { derived, Readable } from '@ctx-core/store'
import { $pathname_type, pathname_b } from './pathname_b'
import { $window_location_type, window_location_b } from './window_location_b'
export const window_location_pathname_b = _b('window_location_pathname', ctx=>
	derived([
			pathname_b(ctx),
			window_location_b(ctx),
		],
		([pathname, location__window]:[$pathname_type, $window_location_type])=>
			(location__window && (location__window as Location).pathname)
			|| pathname
			|| ''
	) as window_location_pathname_type
)
export type $window_location_pathname_type = maybe_null<string>
export interface window_location_pathname_type extends Readable<$window_location_pathname_type> {}
export {
	window_location_pathname_b as b__pathname__location__window,
}
