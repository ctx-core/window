import { be_ } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { hostname_b } from './hostname_b';
import { window_location_b } from './window_location_b';
const key = 'window_location_hostname';
export const window_location_hostname_b = be_(key, ctx => derived$([
    hostname_b(ctx),
    window_location_b(ctx),
], ([hostname, window_location]) => (window_location && window_location.hostname) || hostname || ''));
//# sourceMappingURL=src/window_location_hostname_b.js.map