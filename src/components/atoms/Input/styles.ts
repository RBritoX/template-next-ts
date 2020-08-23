import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px 16px;
  border: 2px solid;

  & + div {
    margin: 8px 0;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
    }
  }

  svg {
    margin-right: 16px;
  }
`;
