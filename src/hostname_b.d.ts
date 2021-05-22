import { Writable$ } from '@ctx-core/store';
export interface hostname_Ctx {
    hostname?: hostname_T;
}
export declare const hostname_b: import("@ctx-core/object").Be<hostname_Ctx, "hostname", hostname_T>;
export declare type $hostname_T = string | undefined;
export interface hostname_T extends Writable$<$hostname_T> {
}
export { hostname_b as b__hostname };
