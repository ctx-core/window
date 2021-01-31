import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { Writable, writable } from '@ctx-core/store'
export const pathname_b = _b('__pathname', ()=>
	writable(null) as pathname_type
)
export type $pathname_type = maybe_null<string>
export interface pathname_type extends Writable<$pathname_type> {}
export { pathname_b as b__pathname }
