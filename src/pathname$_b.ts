import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { window_Ctx } from './window_Ctx'
const key = 'pathname$'
export const pathname$_b:B<window_Ctx, typeof key> = be_(key, ()=>
	writable$(undefined) as pathname$_T
)
export interface pathname$_T extends Writable$<string|undefined> {}
export { pathname$_b as b__pathname }
