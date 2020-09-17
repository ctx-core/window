import { Writable } from 'svelte/store';
import type { maybe } from '@ctx-core/function';
export declare const b__hostname: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => Writable<any>;
export declare const __hostname: Writable<any>;
export declare const b__pathname: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => Writable<any>;
export declare type $type__location__window = maybe<Location>;
export interface type__location__window extends Writable<$type__location__window> {
    reset__location__window: () => void;
}
export declare const b__location__window: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => type__location__window;
export declare const __location__window: type__location__window;
export declare const reset__location__window: () => void;
export declare const b__hostname__location__window: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => import("svelte/store").Readable<string>;
export declare const __hostname__location__window: import("svelte/store").Readable<string>;
export declare const b__pathname__location__window: (ctx?: unknown, opts?: import("@ctx-core/object")._be_opts_type) => import("svelte/store").Readable<string>;
export declare const __pathname__location__window: import("svelte/store").Readable<string>;
