import { be_, assign } from '@ctx-core/object';
import { has_dom } from '@ctx-core/dom';
import { writable$ } from '@ctx-core/store';
const key = 'window_location';
export const window_location_b = be_(key, () => {
    const window_location = writable$(undefined);
    const window_location_reload_popstate_bound = writable$(undefined);
    if (has_dom) {
        reset_window_location();
    }
    return assign(window_location, {
        reset_window_location,
        reset__location__window: reset_window_location,
    });
    function reset_window_location() {
        if (!has_dom)
            return;
        if (!window_location_reload_popstate_bound.$) {
            window_location_reload_popstate_bound.set(true);
            window.addEventListener('popstate', reset_window_location);
        }
        window_location.set(window.location);
    }
});
export { window_location_b as b__location__window, };
//# sourceMappingURL=src/window_location_b.js.map