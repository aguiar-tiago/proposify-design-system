import { createGlobalStyle } from 'styled-components';

import ProximaNovaThinEot from '../font/ProximaNova-Thin-webfont.eot';
import ProximaNovaThinSvg from '../font/ProximaNova-Thin-webfont.svg';
import ProximaNovaThinTtf from '../font/ProximaNova-Thin-webfont.ttf';
import ProximaNovaThinWoff from '../font/ProximaNova-Thin-webfont.woff';
import ProximaNovaThinWoff2 from '../font/ProximaNova-Thin-webfont.woff2';

import ProximaNovaThinItEot from '../font/ProximaNova-ThinIt-webfont.eot';
import ProximaNovaThinItSvg from '../font/ProximaNova-ThinIt-webfont.svg';
import ProximaNovaThinItTtf from '../font/ProximaNova-ThinIt-webfont.ttf';
import ProximaNovaThinItWoff from '../font/ProximaNova-ThinIt-webfont.woff';
import ProximaNovaThinItWoff2 from '../font/ProximaNova-ThinIt-webfont.woff2';

import ProximaNovaLightEot from '../font/ProximaNova-Light-webfont.eot';
import ProximaNovaLightSvg from '../font/ProximaNova-Light-webfont.svg';
import ProximaNovaLightTtf from '../font/ProximaNova-Light-webfont.ttf';
import ProximaNovaLightWoff from '../font/ProximaNova-Light-webfont.woff';
import ProximaNovaLightWoff2 from '../font/ProximaNova-Light-webfont.woff2';

import ProximaNovaLightItEot from '../font/ProximaNova-LightIt-webfont.eot';
import ProximaNovaLightItSvg from '../font/ProximaNova-LightIt-webfont.svg';
import ProximaNovaLightItTtf from '../font/ProximaNova-LightIt-webfont.ttf';
import ProximaNovaLightItWoff from '../font/ProximaNova-LightIt-webfont.woff';
import ProximaNovaLightItWoff2 from '../font/ProximaNova-LightIt-webfont.woff2';

import ProximaNovaRegEot from '../font/ProximaNova-Reg-webfont.eot';
import ProximaNovaRegSvg from '../font/ProximaNova-Reg-webfont.svg';
import ProximaNovaRegTtf from '../font/ProximaNova-Reg-webfont.ttf';
import ProximaNovaRegWoff from '../font/ProximaNova-Reg-webfont.woff';
import ProximaNovaRegWoff2 from '../font/ProximaNova-Reg-webfont.woff2';

import ProximaNovaRegItEot from '../font/ProximaNova-RegIt-webfont.eot';
import ProximaNovaRegItSvg from '../font/ProximaNova-RegIt-webfont.svg';
import ProximaNovaRegItTtf from '../font/ProximaNova-RegIt-webfont.ttf';
import ProximaNovaRegItWoff from '../font/ProximaNova-RegIt-webfont.woff';
import ProximaNovaRegItWoff2 from '../font/ProximaNova-RegIt-webfont.woff2';

import ProximaNovaSboldEot from '../font/ProximaNova-Sbold-webfont.eot';
import ProximaNovaSboldSvg from '../font/ProximaNova-Sbold-webfont.svg';
import ProximaNovaSboldTtf from '../font/ProximaNova-Sbold-webfont.ttf';
import ProximaNovaSboldWoff from '../font/ProximaNova-Sbold-webfont.woff';
import ProximaNovaSboldWoff2 from '../font/ProximaNova-Sbold-webfont.woff2';
       
import ProximaNovaSboldItEot from '../font/ProximaNova-SboldIt-webfont.eot';
import ProximaNovaSboldItSvg from '../font/ProximaNova-SboldIt-webfont.svg';
import ProximaNovaSboldItTtf from '../font/ProximaNova-SboldIt-webfont.ttf';
import ProximaNovaSboldItWoff from '../font/ProximaNova-SboldIt-webfont.woff';
import ProximaNovaSboldItWoff2 from '../font/ProximaNova-SboldIt-webfont.woff2';

import ProximaNovaBoldItEot from '../font/ProximaNova-BoldIt-webfont.eot';
import ProximaNovaBoldItSvg from '../font/ProximaNova-BoldIt-webfont.svg';
import ProximaNovaBoldItTtf from '../font/ProximaNova-BoldIt-webfont.ttf';
import ProximaNovaBoldItWoff from '../font/ProximaNova-BoldIt-webfont.woff';
import ProximaNovaBoldItWoff2 from '../font/ProximaNova-BoldIt-webfont.woff2';

import ProximaNovaBoldEot from '../font/ProximaNova-Bold-webfont.eot';
import ProximaNovaBoldSvg from '../font/ProximaNova-Bold-webfont.svg';
import ProximaNovaBoldTtf from '../font/ProximaNova-Bold-webfont.ttf';
import ProximaNovaBoldWoff from '../font/ProximaNova-Bold-webfont.woff';
import ProximaNovaBoldWoff2 from '../font/ProximaNova-Bold-webfont.woff2';




const GlobalStyles = createGlobalStyle`
  html, body {
    display: flex; // firefox
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fonts.main};
    background: ${props => props.theme.colors.global};
    min-height: 100%;
    min-height: -webkit-fill-available;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    min-height: -webkit-fill-available;
  }

  * {
    box-sizing: border-box;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaThinEot});
    src:url(${ProximaNovaThinWoff2}) format('woff2'),
      url(${ProximaNovaThinWoff}) format('woff'),
      url(${ProximaNovaThinTtf}) format('truetype'),
      url(${ProximaNovaThinSvg}) format('svg');
    font-weight:100;
    font-style:normal;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaThinItEot});
    src:url(${ProximaNovaThinItWoff2}) format('woff2'),
      url(${ProximaNovaThinItWoff}) format('woff'),
      url(${ProximaNovaThinItTtf}) format('truetype'),
      url(${ProximaNovaThinItSvg}) format('svg');
    font-weight:100;
    font-style:italic;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaThinEot});
    src:url(${ProximaNovaThinWoff2}) format('woff2'),
      url(${ProximaNovaThinWoff}) format('woff'),
      url(${ProximaNovaThinTtf}) format('truetype'),
      url(${ProximaNovaThinSvg}) format('svg');
    font-weight:200;
    font-style:normal;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaThinItEot});
    src:url(${ProximaNovaThinItWoff2}) format('woff2'),
      url(${ProximaNovaThinItWoff}) format('woff'),
      url(${ProximaNovaThinItTtf}) format('truetype'),
      url(${ProximaNovaThinItSvg}) format('svg');
    font-weight:200;
    font-style:italic;
  }

  @font-face {
    font-family:'proxima-nova';
    font-family:'proxima-nova';
    src:url(${ProximaNovaThinEot});
    src:url(${ProximaNovaThinWoff2}) format('woff2'),
      url(${ProximaNovaThinWoff}) format('woff'),
      url(${ProximaNovaThinTtf}) format('truetype'),
      url(${ProximaNovaThinSvg}) format('svg');
    font-weight:300;
    font-style:normal;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaThinItEot});
    src:url(${ProximaNovaThinItWoff2}) format('woff2'),
      url(${ProximaNovaThinItWoff}) format('woff'),
      url(${ProximaNovaThinItTtf}) format('truetype'),
      url(${ProximaNovaThinItSvg}) format('svg');
    font-weight:300;
    font-style:italic;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaLightEot});
    src:url(${ProximaNovaLightWoff2}) format('woff2'),
      url(${ProximaNovaLightWoff}) format('woff'),
      url(${ProximaNovaLightTtf}) format('truetype'),
      url(${ProximaNovaLightSvg}) format('svg');
    font-weight:400;
    font-style:normal;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaLightItEot});
    src:url(${ProximaNovaLightItWoff2}) format('woff2'),
      url(${ProximaNovaLightItWoff}) format('woff'),
      url(${ProximaNovaLightItTtf}) format('truetype'),
      url(${ProximaNovaLightItSvg}) format('svg');
    font-weight:400;
    font-style:italic;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaRegEot});
    src:url(${ProximaNovaRegWoff2}) format('woff2'),
      url(${ProximaNovaRegWoff}) format('woff'),
      url(${ProximaNovaRegTtf}) format('truetype'),
      url(${ProximaNovaRegSvg}) format('svg');
    font-weight:500;
    font-style:normal;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaRegItEot});
    src:url(${ProximaNovaRegItWoff2}) format('woff2'),
      url(${ProximaNovaRegItWoff}) format('woff'),
      url(${ProximaNovaRegItTtf}) format('truetype'),
      url(${ProximaNovaRegItSvg}) format('svg');
    font-weight:500;
    font-style:italic;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaBoldEot});
    src:url(${ProximaNovaBoldWoff2}) format('woff2'),
      url(${ProximaNovaBoldWoff}) format('woff'),
      url(${ProximaNovaBoldTtf}) format('truetype'),
      url(${ProximaNovaBoldSvg}) format('svg');
    font-weight:600;
    font-style:normal;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaBoldItEot});
    src:url(${ProximaNovaBoldItWoff2}) format('woff2'),
      url(${ProximaNovaBoldItWoff}) format('woff'),
      url(${ProximaNovaBoldItTtf}) format('truetype'),
      url(${ProximaNovaBoldItSvg}) format('svg');
    font-weight:600;
    font-style:italic;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaBoldEot});
    src:url(${ProximaNovaBoldWoff2}) format('woff2'),
      url(${ProximaNovaBoldWoff}) format('woff'),
      url(${ProximaNovaBoldTtf}) format('truetype'),
      url(${ProximaNovaBoldSvg}) format('svg');
    font-weight:700;
    font-style:normal;
  }

  @font-face {
    font-family:'proxima-nova';
    src:url(${ProximaNovaSboldItEot});
    src:url(${ProximaNovaSboldItWoff2}) format('woff2'),
      url(${ProximaNovaSboldItWoff}) format('woff'),
      url(${ProximaNovaSboldItTtf}) format('truetype'),
      url(${ProximaNovaSboldItSvg}) format('svg');
    font-weight:700;
    font-style:italic;
  }

`;

export default GlobalStyles;
