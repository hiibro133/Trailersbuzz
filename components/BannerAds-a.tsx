// AdComponent.js
import React from 'react';
//<iframe data-aa='2284222' src='//ad.a-ads.com/2284222?size=120x60' style='width:120px; height:60px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>
//<iframe data-aa='2284223' src='//ad.a-ads.com/2284223?size=728x90' style='width:728px; height:90px; border:0px; padding:0; overflow:hidden; background-color: transparent;'></iframe>
const BannerAdsa = () => (
  <iframe
    data-aa='2284223'//'2284222'//'2283722'
    src='//ad.a-ads.com/2284223?size=728x90''//'//ad.a-ads.com/2284222?size=120x60'//'ad.a-ads.com/2283722?size=728x90'
    style= {{ width: '728px', height: '90px', border: '0', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }} //{{ width: '728px', height: '90px', border: '0', padding: '0', overflow: 'hidden', backgroundColor: 'transparent' }}
  ></iframe>
);

export default BannerAdsa;
