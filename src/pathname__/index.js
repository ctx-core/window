import { nullish__check_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { window_location__ } from '../window_location__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').pathname__} */
export const pathname__ = be_('pathname__', ctx=>
	computed_(window_location__(ctx), window_location=>
		nullish__check_([window_location], ()=>
			window_location.pathname)))
export {
	pathname__ as pathname$_,
	pathname__ as b__pathname,
	pathname__ as window_location_pathname__,
	pathname__ as window_location_pathname$_,
}
/**
 * @param {Ctx}ctx
 * @returns {string}
 * @private
 */
export function pathname_(ctx) {
	return pathname__(ctx).$
}
