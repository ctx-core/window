import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { hostname_b } from './hostname_b';
import { window_location_b } from './window_location_b';
const key = 'window_location_hostname';
export const window_location_hostname_b = _b(key, ctx => derived$([
    hostname_b(ctx),
    window_location_b(ctx),
], ([hostname, window_location]) => (window_location && window_location.hostname) || hostname || ''));
