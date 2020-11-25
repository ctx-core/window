import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { derived, Readable } from '@ctx-core/store'
import { $hostname_type, hostname_b } from './hostname_b'
import { $window_location_type, window_location_b } from './window_location_b'
export const b__hostname__location__window = _b<window_location_hostname>(
	'__hostname__location__window', ctx=>
		derived([
				hostname_b(ctx),
				window_location_b(ctx),
			],
			([hostname, location__window]:[$hostname_type, $window_location_type])=>
				(location__window && (location__window as Location).hostname) || hostname || ''))
export type $window_location_hostname = maybe_null<string>
export type { $window_location_hostname as $hostname__location__window }
export type window_location_hostname = Readable<$window_location_hostname>
export type { window_location_hostname as hostname__location__window }
