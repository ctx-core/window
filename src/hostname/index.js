import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { window_location_ } from '../window_location/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').hostname$_} */
export const [
	hostname$_,
	hostname_,
] = val__be_computed_pair_('hostname$_', ctx=>
	nullish__none_([window_location_(ctx)], window_location=>
		window_location.hostname))
export {
	hostname$_ as hostname__,
	hostname$_ as window_location_hostname__,
	hostname$_ as window_location_hostname$_
}
