import type { maybe_null } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare const hostname_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type | undefined) => hostname_type;
export declare type $hostname_type = maybe_null<string>;
export interface hostname_type extends Writable<$hostname_type> {
}
export { hostname_b as b__hostname };