import { createGlobalStyle } from 'styled-components';

// Reset CSS
export const GlobalStyles = createGlobalStyle`
    :root {
        font-family: 'Inter', sans-serif;
    }
    @supports (font-variation-settings: normal) {
        :root {
            font-family: 'InterVariable', sans-serif;
            font-optical-sizing: auto;
        }
    }

    @font-face {
        font-family: InterVariable;
        font-style: normal;
        font-weight: 100 900;
        font-display: swap;
        src: url('/fonts/InterVariable.woff2') format('woff2 supports variations');
    }
    @font-face {
        font-family: InterVariable;
        font-style: italic;
        font-weight: 100 900;
        font-display: swap;
        src: url('/fonts/InterVariable-Italic.woff2') format('woff2 supports variations');
    }

    /* static fonts */
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url('/fonts/Inter-Thin.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: url('/fonts/Inter-ThinItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url('/fonts/Inter-ExtraLight.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url('/fonts/Inter-ExtraLightItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/Inter-Light.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/Inter-LightItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Inter-Regular.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Inter-Italic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/Inter-Medium.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/Inter-MediumItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/Inter-SemiBold.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/Inter-SemiBoldItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Inter-Bold.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Inter-BoldItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/Inter-ExtraBold.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/Inter-ExtraBoldItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/Inter-Black.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Inter';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/Inter-BlackItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: url('/fonts/InterDisplay-Thin.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: url('/fonts/InterDisplay-ThinItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url('/fonts/InterDisplay-ExtraLight.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url('/fonts/InterDisplay-ExtraLightItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/InterDisplay-Light.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/InterDisplay-LightItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/InterDisplay-Regular.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/InterDisplay-Italic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/InterDisplay-Medium.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/InterDisplay-MediumItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/InterDisplay-SemiBold.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/InterDisplay-SemiBoldItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/InterDisplay-Bold.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/InterDisplay-BoldItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/InterDisplay-ExtraBold.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/InterDisplay-ExtraBoldItalic.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/InterDisplay-Black.woff2') format('woff2');
    }
    @font-face {
        font-family: 'InterDisplay';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/InterDisplay-BlackItalic.woff2') format('woff2');
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    body {
        line-height: 1;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        font-style: normal;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: '';
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;
