/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { nullish__none_ } from 'ctx-core/function'
import { window_location$_ } from '../window_location/index.js'
/** @type {typeof hostname$_} */
export const [
	hostname$_,
	hostname_,
] = be_computed_pair_(
	ctx=>window_location$_(ctx),
	window_location=>nullish__none_([window_location], ()=>
		window_location.hostname),
	{ id: 'hostname' })
export {
	hostname$_ as hostname__,
	hostname$_ as window_location_hostname__,
	hostname$_ as window_location_hostname$_
}
