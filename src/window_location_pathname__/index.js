import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { pathname__ } from '../pathname__/index.js'
import { window_location__ } from '../window_location__/index.js'
/** @type {typeof import('./index.d.ts').window_location_pathname__} */
export const window_location_pathname__ = be_('window_location_pathname__', ctx=>
	computed_([
		pathname__(ctx),
		window_location__(ctx),
	], (pathname, location__window)=>
		location__window && location__window.pathname || pathname || ''))
export { window_location_pathname__ as window_location_pathname$_ }
