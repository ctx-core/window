import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { derived, Readable } from '@ctx-core/store'
import { $hostname_type, hostname_b } from './hostname_b'
import { $window_location_type, window_location_b } from './window_location_b'
export const window_location_hostname_b = _b('window_location_hostname', ctx=>
	derived([
			hostname_b(ctx),
			window_location_b(ctx),
		],
		([hostname, location__window]:[$hostname_type, $window_location_type])=>
			(location__window && (location__window as Location).hostname) || hostname || ''
	) as window_location_hostname_type
)
export type $window_location_hostname_type = maybe_null<string>
export interface window_location_hostname_type extends Readable<$window_location_hostname_type> {}
