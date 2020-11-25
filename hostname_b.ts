import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { Writable, writable } from '@ctx-core/store'
export const hostname_b = _b<hostname_type>('__hostname', ()=>
	writable(null))
export { hostname_b as b__hostname }
export type $hostname_type = maybe_null<string>
export type hostname_type = Writable<$hostname_type>
