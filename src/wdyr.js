import React from 'react';

if (process.env.MODE === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    logOwnerReasons: true,
    
    titleColor: "green",
    diffNameColor: "blue"
  });
}