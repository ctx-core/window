import { Writable } from '@ctx-core/store';
import type { maybe } from '@ctx-core/function';
export declare const window_location_b: import("@ctx-core/object").be_type<window_location_type, object>;
export declare type $window_location_type = maybe<Location>;
export interface window_location_type extends Writable<$window_location_type> {
    reset_window_location: () => void;
    reset__location__window: () => void;
}
export { $window_location_type as $type__location__window, window_location_b as b__location__window, window_location_type as type__location__window, };
