import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { Writable, writable } from '@ctx-core/store'
export const hostname_b = _b('__hostname', ()=>
	writable(null) as hostname_type
)
export type $hostname_type = maybe_null<string>
export interface hostname_type extends Writable<$hostname_type> {}
export { hostname_b as b__hostname }
