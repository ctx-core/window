import { _b } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
const key = 'hostname';
export const hostname_b = _b(key, () => writable$(undefined));
export { hostname_b as b__hostname };
