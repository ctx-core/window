import { be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { window_Ctx } from './window_Ctx'
const key = 'hostname'
export const hostname_b = be_<window_Ctx, typeof key>(key, ()=>
	writable$(undefined) as hostname_T
)
export type $hostname_T = string|undefined
export interface hostname_T extends Writable$<$hostname_T> {}
export { hostname_b as b__hostname }
