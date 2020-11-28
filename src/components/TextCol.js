import styled from 'styled-components';

const media = {
    xs: (styles) =>`
        @media only screen and (max-width: 480px) {
            ${styles}
        }
        `,
}

export const TextCol = styled.div`
flex: ${(props) => props.size};
padding-left:2rem;
${(props) => props.collapse && media[props.collapse](`
 display: none;
`)};
`;
export default TextCol;