import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'hostname'
export interface hostname_Ctx {
	hostname?:hostname_T
}
export const hostname_b = _b<hostname_Ctx, typeof key>(key, ()=>
	writable$(undefined) as hostname_T
)
export type $hostname_T = string|undefined
export interface hostname_T extends Writable$<$hostname_T> {}
export { hostname_b as b__hostname }
