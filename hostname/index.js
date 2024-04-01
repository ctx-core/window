/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { id_be_memo_pair_, nullish__none_ } from 'ctx-core/rmemo'
import { window_location_ } from '../window_location/index.js'
/** @type {typeof hostname$_} */
export const [
	hostname$_,
	hostname_,
] = id_be_memo_pair_(
	'hostname',
	ctx=>
		nullish__none_([window_location_(ctx)],
			window_location=>
				window_location.hostname))
export {
	hostname$_ as hostname__,
	hostname$_ as window_location_hostname__,
	hostname$_ as window_location_hostname$_
}
