import styled from 'styled-components';

export const Contact = styled.div`

background-color:#333;
text-align: center;
align-items: center;
justify-content: center;
padding:.65rem;
border-radius: 20px;
box-shadow:5px 5px 10px rgba(0,0,0,0.1),
-5px -5px 10px #333 ;

-moz-box-shadow:
5px 5px 10px rgba(0,0,0,0.1),
-5px -5px 10px #333 ;

  box-shadow:
5px 5px 10px rgba(0,0,0,0.1),
-5px -5px 10px #333 ;

&:hover {
  -webkit-box-shadow:
  inset  10px 10px 20px rgba(0,0,0,0.05),
   inset -15px -15px 20px #333;

-moz-box-shadow:
  inset  10px 10px 20px rgba(0,0,0,0.05),
   inset -15px -15px 20px #333;

 box-shadow:
  inset  10px 10px 20px rgba(0,0,0,0.05),
   inset -15px -15px 20px #333;
}

`;

export default Contact;
