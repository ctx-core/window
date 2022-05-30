import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { pathname$_ } from './pathname$_.js'
import { window_location$_ } from './window_location$_.js'
export const window_location_pathname$_ = be_('window_location_pathname$', (ctx)=>computed_([
	pathname$_(ctx),
	window_location$_(ctx),
], (pathname, location__window)=>
	location__window && location__window.pathname || pathname || ''))
