import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  margin-top: 2em;
  img{
    width: 100%;
  }
  .messageContainer {
    margin: 1em 0;
  }
`;


export const CommentsStyled = styled.div`
  text-align: left;
  
  form{
    margin-bottom: 2em;
    padding-bottom: 1em;
    border-bottom: 1px solid #363636;
  }
  .author{
    display: flex;
    font-weight: bold;
  }
  .author img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1em;
  }
`