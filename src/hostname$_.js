import { atom$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
export const hostname$_ = be_('hostname$', ()=>
	atom$(undefined))
