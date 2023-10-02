import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .row{
        display: flex;
        align-items: center;
    }

    .space-between{
        justify-content: space-between;
    }

    .justify-center{
        justify-content: center;
    }

    .text-center{
        text-align: center;
    }

    .clickable{
        cursor: pointer;
    }
`;
