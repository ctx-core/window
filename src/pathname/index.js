import { nullish__none_ } from '@ctx-core/function'
import { val__be_computed_pair_ } from '@ctx-core/nanostores'
import { window_location_ } from '../window_location/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').pathname$_} */
export const [
	pathname$_,
	pathname_,
] = val__be_computed_pair_('pathname$_', ctx=>
	nullish__none_([window_location_(ctx)], window_location=>
		window_location.pathname))
export {
	pathname$_ as pathname__,
	pathname$_ as b__pathname,
	pathname$_ as window_location_pathname__,
	pathname$_ as window_location_pathname$_,
}
