// Imports the UNIFIED and REMARK modules
import * as unified from 'unified';
const parse = require( 'remark-parse' );
const subsup = require( 'remark-sub-super' );
const align = require( 'remark-align' );
const iframes = require( 'remark-iframes' );

require( "regenerator-runtime/runtime" );

const iframeConfig = {
	'www.youtube.com': {
		replace: [
			[ 'watch?v=', 'embed/' ],
			[ 'http://', 'https://' ],
		],
		thumbnail: {
			format: 'http://img.youtube.com/vi/{id}/0.jpg',
			id: '.+/(.+)$'
		},
		removeAfter: '&'
	}
}

// Setupd the markdown parser configured with the given options @see {https://github.com/remarkjs/remark/tree/master/packages/remark-parse}
function markdownFactory() {
	return unified()
		.use( parse )
		.use( subsup )
		.use( align )
		.use( iframes, iframeConfig )
		.freeze();
}

// Exports the parser setup function
export { markdownFactory }
