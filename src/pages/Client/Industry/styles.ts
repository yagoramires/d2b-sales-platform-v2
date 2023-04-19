import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  /* overflow: hidden; */
`;

export const LabelContainer = styled.div`
  min-width: 1024px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 4px 8px;
`;

export const Label = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ProductsList = styled.ul`
  /* overflow-x: scroll; */
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
