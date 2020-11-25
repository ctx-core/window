import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { Writable, writable } from '@ctx-core/store'
export const pathname_b = _b<pathname_type>('__pathname', ()=>
	writable(null))
export { pathname_b as b__pathname }
export type $pathname_type = maybe_null<string>
export type pathname_type = Writable<$pathname_type>
