import { B, be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { window_Ctx } from './window_Ctx'
const key = 'hostname$'
export const hostname$_b:B<window_Ctx, typeof key> = be_(key, ()=>
	writable$(undefined) as hostname$_T
)
export type hostname$_T = Writable$<string|undefined>
export { hostname$_b as b__hostname }
