import type { hostname_T } from './hostname_b';
import type { pathname_T } from './pathname_b';
import type { window_location_T } from './window_location_b';
import type { window_location_hostname_T } from './window_location_hostname_b';
import type { window_location_pathname_T } from './window_location_pathname_b';
export interface window_Ctx {
    hostname?: hostname_T;
    pathname?: pathname_T;
    window_location?: window_location_T;
    window_location_hostname?: window_location_hostname_T;
    window_location_pathname?: window_location_pathname_T;
}
