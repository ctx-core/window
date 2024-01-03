/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { window_location_ } from '../window_location/index.js'
/** @typedef {Ctx} */
/** @type {typeof pathname$_} */
export const [
	pathname$_,
	pathname_,
] = be_memo_pair_(
	ctx=>
		nullish__none_([window_location_(ctx)], window_location=>
			window_location.pathname),
	{ id: 'pathname' })
export {
	pathname$_ as pathname__,
	pathname$_ as b__pathname,
	pathname$_ as window_location_pathname__,
	pathname$_ as window_location_pathname$_,
}
