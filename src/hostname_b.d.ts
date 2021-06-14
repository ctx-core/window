import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { window_Ctx } from './window_Ctx';
declare const key = "hostname";
export declare const hostname_b: B<window_Ctx, typeof key>;
export declare type $hostname_T = string | undefined;
export interface hostname_T extends Writable$<$hostname_T> {
}
export { hostname_b as b__hostname };
