import styled from 'styled-components';

const media = {
    xs: (styles) =>`
        @media only screen and (max-width: 480px) {
            ${styles}
        }
        `,
}

export const Col = styled.div`
flex: ${(props) => props.size};
${(props) => props.collapse && media[props.collapse](`
 display: none;
`)};
`;
export default Col;