import { injectGlobal } from 'styled-components';

const globalStyle = () => injectGlobal`
    ::-webkit-input-placeholder {
        font-family: gotham-book;
        font-size:15px;
        color:#999;
    }
    * {
        box-sizing: border-box;
        margin:0;
        padding:0;
    }
    body{
        font-family: sans-serif;
        color: #777;
        background-color: #fbfbfb;
    }
    a{
        color: #d75014;;
        text-decoration: none;
    }
    li{
        list-style:none;
    }
    pre{
        background: #f4f4f4;
        border: 1px solid #ddd;
        border-left: 3px solid #f36d33;
        color: #666;
        page-break-inside: avoid;
        font-family: monospace;
        font-size: 12px;
        line-height: 1.6;
        max-width: 100%;
        width:80%;
        margin:10px auto;
        overflow: auto;
        padding: 1em 1.5em;
        word-wrap: break-word;
    }
`;

export default globalStyle;