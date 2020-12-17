import type { maybe_null } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare const pathname_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type | undefined) => pathname_type;
export declare type $pathname_type = maybe_null<string>;
export interface pathname_type extends Writable<$pathname_type> {
}
export { pathname_b as b__pathname };
