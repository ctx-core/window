import { Writable, Readable } from '@ctx-core/store';
import type { maybe, maybe_null } from '@ctx-core/function';
export declare type $hostname_type = maybe_null<string>;
export declare type hostname_type = Writable<$hostname_type>;
export declare const b__hostname: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => hostname_type;
export declare const __hostname: hostname_type;
export declare const b__pathname: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => pathname_type;
export declare type $pathname_type = maybe_null<string>;
export declare type pathname_type = Writable<$pathname_type>;
export declare const b__location__window: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => type__location__window;
export declare type $type__location__window = maybe<Location>;
export interface type__location__window extends Writable<$type__location__window> {
    reset__location__window: () => void;
}
export declare const __location__window: type__location__window;
export declare const reset__location__window: () => void;
export declare const b__hostname__location__window: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => hostname__location__window;
export declare type $hostname__location__window = maybe_null<string>;
export declare type hostname__location__window = Readable<$hostname__location__window>;
export declare const __hostname__location__window: hostname__location__window;
export declare const b__pathname__location__window: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => pathname__location__window;
export declare const __pathname__location__window: pathname__location__window;
export declare type $pathname__location__window = maybe_null<string>;
export declare type pathname__location__window = Readable<$pathname__location__window>;
