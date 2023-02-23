import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { hostname__ } from '../hostname__/index.js'
import { window_location__ } from '../window_location__/index.js'
/** @type {typeof import('./index.d.ts').window_location_hostname__} */
export const window_location_hostname__ = be_('window_location_hostname__', (ctx)=>computed_([
	hostname__(ctx),
	window_location__(ctx),
], (hostname, window_location)=>
	window_location && window_location.hostname || hostname || ''))
export { window_location_hostname__ as window_location_hostname$_ }
