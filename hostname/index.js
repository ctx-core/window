import { nullish__none_ } from '@ctx-core/function'
import { be_computed_pair_ } from '@ctx-core/nanostores'
import { window_location_ } from '../window_location/index.js'
/** @typedef {import('@ctx-core/object').Ctx} */
/** @type {typeof import('./index.d.ts').hostname$_} */
export const [
	hostname$_,
	hostname_,
] = be_computed_pair_(ctx=>
	nullish__none_([window_location_(ctx)], window_location=>
		window_location.hostname))
	.config({ id: 'hostname' })
export {
	hostname$_ as hostname__,
	hostname$_ as window_location_hostname__,
	hostname$_ as window_location_hostname$_
}
