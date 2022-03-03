import { WritableAtom$ } from '@ctx-core/nanostores'
import { B } from '@ctx-core/object'
export declare const window_location$_:B<window_location$_T>
export interface window_location$_T extends WritableAtom$<Location|undefined> {
	reset_window_location:()=>void;
}
