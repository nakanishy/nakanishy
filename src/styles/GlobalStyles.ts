import { createGlobalStyle } from 'styled-components'

import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '~/styles/variables'

export const GlobalStyles = createGlobalStyle`
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}
/*# sourceMappingURL=normalize.min.css.map */

*,
*::before,
*::after {
  margin: 0;
  box-sizing: border-box;
}
html,
body,
#react-root {
  height: 100%;
}
body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: ${(p) => p.theme.fg1};
  font-size: ${fontSize.m}px;
  font-family: ${fontFamily.sansSerif};
  font-feature-settings: 'palt';
  font-weight: ${fontWeight.normal};
  line-height: ${lineHeight.body};
  background-color: ${(p) => p.theme.bg1};
  overflow-y: scroll;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-size: ${fontSize.m}px;
}
h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: ${fontWeight.bold};
}

::selection {
  color: #ffffff;
  background-color: ${(p) => p.theme.theme};
}

::-webkit-scrollbar {
  width: 18px;
  height: 18px;
}
::-webkit-scrollbar-track {
  background-color: ${(p) => p.theme.bg1};
}
::-webkit-scrollbar-thumb {
  height: 6px;
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  background-color: ${(p) => p.theme.bg3};
  border-radius: 9px;
}
`
