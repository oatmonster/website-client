import { ScullyConfig, HandledRoute } from '@scullyio/scully';
import { registerPlugin } from '@scullyio/scully';

const removeLogosPlugin = async ( html: string, route: HandledRoute ) => {
  return html.replace( /sc-no-render=""/g, 'style="visibility: hidden;"' );
};

registerPlugin( 'render', 'removeLogosPlugin', removeLogosPlugin );

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "alex-zhao-blog",
  outDir: './dist/static',
  defaultPostRenderers: [ 'removeLogosPlugin' ],
  routes: {
    '/blog/:id': {
      type: 'json',
      id: {
        resultsHandler: ( res ) => res.posts,
        url: 'https://alex-zhao-api.herokuapp.com/blog?count=100',
        property: 'id',
      },
    },
    '/projects/:id': {
      type: 'json',
      id: {
        url: 'https://alex-zhao-api.herokuapp.com/projects',
        property: 'id',
      },
    }
  }
};