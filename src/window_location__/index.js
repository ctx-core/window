import { has_dom, no_dom } from '@ctx-core/dom'
import { atom_, computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
const window_location__atom_ = be_('window_location__atom_', ()=>
	atom_())
/** @typedef {import('@ctx-core/nanostores').WritableAtom_}WritableAtom_ */
/** @typedef {import('@ctx-core/object').Be}Be */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {typeof import('./index.d.ts').window_location__} */
export const window_location__ = be_('window_location__', ctx=>{
	if (has_dom) {
		window.addEventListener('popstate', ()=>
			window_location__reset(ctx))
	}
	return computed_(
		window_location__atom_(ctx),
		$=>$)
})
export { window_location__ as window_location$_ }
/**
 * @param {Ctx}ctx
 * @returns {Location}
 * @private
 */
export function window_location_(ctx) {
  return window_location__(ctx).$
}
/** @typedef {Be<WritableAtom_<boolean>>} */
/**
 * @param {Ctx}ctx
 */
export function window_location__reset(ctx) {
	if (no_dom) return
	window_location__atom_(ctx).$ = window.location
}
