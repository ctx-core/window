import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'pathname'
export interface pathname_Ctx {
	pathname?:pathname_T
}
export const pathname_b = _b<pathname_Ctx, typeof key>(key, ()=>
	writable$(undefined) as pathname_T
)
export type $pathname_T = string|undefined
export interface pathname_T extends Writable$<$pathname_T> {}
export { pathname_b as b__pathname }
