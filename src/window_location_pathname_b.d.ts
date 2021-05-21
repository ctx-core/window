import { Readable$ } from '@ctx-core/store';
import { pathname_Ctx } from './pathname_b';
import { window_location_Ctx } from './window_location_b';
export interface window_location_pathname_Ctx extends pathname_Ctx, window_location_Ctx {
    window_location_pathname?: window_location_pathname_T;
}
export declare const window_location_pathname_b: import("@ctx-core/object").Be<window_location_pathname_Ctx, "window_location_pathname">;
export declare type $window_location_pathname_T = string | undefined;
export interface window_location_pathname_T extends Readable$<$window_location_pathname_T> {
}
export { window_location_pathname_b as b__pathname__location__window, };
