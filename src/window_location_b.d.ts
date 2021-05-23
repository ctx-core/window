import { Writable$ } from '@ctx-core/store';
import type { window_Ctx } from './window_Ctx';
export declare const window_location_b: import("@ctx-core/object").Be<window_Ctx, "window_location", window_location_T>;
export declare type $window_location_T = Location | undefined;
export interface window_location_T extends Writable$<$window_location_T> {
    reset_window_location: () => void;
    reset__location__window: () => void;
}
export { window_location_b as b__location__window, };
