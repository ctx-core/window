import { nullish__none_ } from '@ctx-core/function'
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { window_location$_ } from '../window_location/index.js'
/** @typedef {import('@ctx-core/object').Ctx} */
/** @type {typeof import('./index.d.ts').pathname$_} */
export const [
	pathname$_,
	pathname_,
] = be_computed_pair_(
	ctx=>window_location$_(ctx),
	window_location=>nullish__none_([window_location], ()=>
		window_location.pathname),
	{ id: 'pathname' })
export {
	pathname$_ as pathname__,
	pathname$_ as b__pathname,
	pathname$_ as window_location_pathname__,
	pathname$_ as window_location_pathname$_,
}
