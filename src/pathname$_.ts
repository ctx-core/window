import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'pathname$'
export const pathname$_:B<pathname$_T> = be_(key, ()=>
	atom$(undefined) as pathname$_T
)
export type pathname$_T = WritableAtom$<string|undefined>
export { pathname$_ as b__pathname }
