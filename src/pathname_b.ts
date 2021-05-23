import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { window_Ctx } from './window_Ctx'
const key = 'pathname'
export const pathname_b = _b<window_Ctx, typeof key>(key, ()=>
	writable$(undefined) as pathname_T
)
export type $pathname_T = string|undefined
export interface pathname_T extends Writable$<$pathname_T> {}
export { pathname_b as b__pathname }
