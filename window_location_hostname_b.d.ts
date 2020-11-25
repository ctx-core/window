import type { maybe_null } from '@ctx-core/function';
import { Readable } from '@ctx-core/store';
export declare const b__hostname__location__window: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type | undefined) => window_location_hostname;
export declare type $window_location_hostname = maybe_null<string>;
export type { $window_location_hostname as $hostname__location__window };
export declare type window_location_hostname = Readable<$window_location_hostname>;
export type { window_location_hostname as hostname__location__window };
