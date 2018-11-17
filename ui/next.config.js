module.exports={ 
  exportPathMap: () => ({ 
      "/": {page: '/'}
  })
}

const	withCss	=	require('@zeit/next-css');
const	withImages	=	require('next-images');
module.exports	=	withImages(withCss({cssModules: true}));