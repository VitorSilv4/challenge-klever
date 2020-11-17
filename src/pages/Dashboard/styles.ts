import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.header`
  padding: 12px 0;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  img {
    height: 30px;
  }
  button {
    margin-left: auto;
    background: none;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
    }

    &:hover {
      background-color: #7d3ff1;
    }
  }
`;


export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
`;


export const Title = styled.strong`
    height: 0px;
`;

export const ProductList = styled.ul`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  width: 100%;

  max-height: 700px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ProductItem = styled.li`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 1s;

  border-radius: 15px;

  & + li {
    margin-top: 10px;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.7);
  }
`;

export const ProductDetails = styled.div`
  strong, h5, p {
    color: #fff;
    padding-bottom: 2px;
  }
  
  strong {
    font-weight: bold;
    font-size: 20px;
  }

  h5 {
    padding: 5px 0;
  }

  p { 
    font-weight: 500;
  }
`;

export const ProductButtons = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    height: 25px;
    width: 25px;
    border: 0;
    background-color: transparent;

    svg {
      color: #e9bb00;

      &:hover {
        color: ${shade(0.3, '#e9bb00')}
      }
    }
  }

  button:last-child {
    margin-top: 10px;

    svg {
      color: #ee1b1d;

      &:hover {
        color: ${shade(0.3, '#ee1b1d')};
      }
    }
  }
`;
