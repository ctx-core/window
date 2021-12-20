import { WritableAtom$, atom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
const key = 'pathname$'
export const pathname$_b:B<pathname$_T> = be_(key, ()=>
	atom$(undefined) as pathname$_T
)
export interface pathname$_T extends WritableAtom$<string|undefined> {}
export { pathname$_b as b__pathname }
