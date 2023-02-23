import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').hostname__} */
export const hostname__ = be_('hostname__', ()=>
	atom_(undefined))
export { hostname__ as hostname$_ }
