import { nullish__check_ } from '@ctx-core/function'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { window_location__ } from '../window_location__/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').hostname__} */
export const hostname__ = be_('hostname__', ctx =>
	computed_(window_location__(ctx), window_location=>
		nullish__check_([window_location], ()=>
			window_location.hostname)))
export {
	hostname__ as hostname$_,
	hostname__ as window_location_hostname__,
	hostname__ as window_location_hostname$_
}
/**
 * @param {Ctx}ctx
 * @returns {string}
 * @private
 */
export function hostname_(ctx) {
	return hostname__(ctx).$
}
