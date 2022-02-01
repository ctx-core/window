import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
export const hostname$_:B<hostname$_T> = be_('hostname$', ()=>
	atom$(undefined) as hostname$_T
)
export type hostname$_T = WritableAtom$<string|undefined>
