import { Readable$ } from '@ctx-core/store';
import { hostname_Ctx } from './hostname_b';
import { window_location_Ctx } from './window_location_b';
export interface window_location_hostname_Ctx extends hostname_Ctx, window_location_Ctx {
    window_location_hostname?: window_location_hostname_T;
}
export declare const window_location_hostname_b: import("@ctx-core/object").Be<window_location_hostname_Ctx, "window_location_hostname">;
export declare type $window_location_hostname_T = string | undefined;
export interface window_location_hostname_T extends Readable$<$window_location_hostname_T> {
}
