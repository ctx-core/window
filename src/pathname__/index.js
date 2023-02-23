import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').pathname__} */
export const pathname__ = be_('pathname__',
	()=>atom_(undefined))
export {
	pathname__ as pathname$_,
	pathname__ as b__pathname
}
