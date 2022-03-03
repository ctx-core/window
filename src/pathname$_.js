import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
export const pathname$_ = be_('pathname$',
	()=>atom$(undefined))
export { pathname$_ as b__pathname }
