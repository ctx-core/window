import { Writable } from 'svelte/store';
import { falsy } from '@ctx-core/function';
export declare const b__hostname: (ctx?: any, opts?: any) => Writable<any>;
export declare const __hostname: Writable<any>;
export declare const b__pathname: (ctx?: any, opts?: any) => Writable<any>;
export interface Writable__location__window extends Writable<falsy | Location> {
    reset__location__window: () => void;
}
export declare const b__location__window: (ctx?: any, opts?: any) => Writable__location__window;
export declare const __location__window: Writable__location__window;
export declare const b__hostname__location__window: (ctx?: any, opts?: any) => import("svelte/store").Readable<any>;
export declare const __hostname__location__window: import("svelte/store").Readable<any>;
export declare const b__pathname__location__window: (ctx?: any, opts?: any) => import("svelte/store").Readable<any>;
export declare const __pathname__location__window: import("svelte/store").Readable<any>;
