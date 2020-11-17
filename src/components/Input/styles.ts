import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: transparent;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: #6e6e6e;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
  `}

  ${props =>
    props.isFocused &&
    css`
      color: #436dde;
      border-color: #436dde;
  `}

  ${props =>
    props.isField &&
    css`
      color: #436dde;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #e8e8e8;
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #f4ede8;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
