import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  overflow: auto;
`;

export const ProductsList = styled.ul`
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;
  column-gap: 8px;
  row-gap: 40px;

  justify-items: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
