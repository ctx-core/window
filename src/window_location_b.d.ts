import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { window_Ctx } from './window_Ctx';
declare const key = "window_location";
export declare const window_location_b: B<window_Ctx, typeof key>;
export declare type $window_location_T = Location | undefined;
export interface window_location_T extends Writable$<$window_location_T> {
    reset_window_location: () => void;
    reset__location__window: () => void;
}
export { window_location_b as b__location__window, };
