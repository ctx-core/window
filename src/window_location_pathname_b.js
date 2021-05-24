import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { pathname_b } from './pathname_b';
import { window_location_b } from './window_location_b';
const key = 'window_location_pathname';
export const window_location_pathname_b = _b(key, ctx => derived$([
    pathname_b(ctx),
    window_location_b(ctx),
], ([pathname, location__window]) => (location__window && location__window.pathname)
    || pathname
    || ''));
export { window_location_pathname_b as b__pathname__location__window, };
