import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { hostname$_ } from './hostname$_.js'
import { window_location$_ } from './window_location$_.js'
export const window_location_hostname$_ = be_('window_location_hostname$', (ctx)=>computed_([
	hostname$_(ctx),
	window_location$_(ctx),
], (hostname, window_location)=>
	window_location && window_location.hostname || hostname || ''))
