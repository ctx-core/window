import { Writable$ } from '@ctx-core/store';
export interface pathname_Ctx {
    pathname?: pathname_T;
}
export declare const pathname_b: import("@ctx-core/object").Be<pathname_Ctx, "pathname", pathname_T>;
export declare type $pathname_T = string | undefined;
export interface pathname_T extends Writable$<$pathname_T> {
}
export { pathname_b as b__pathname };
