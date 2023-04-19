import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const LabelContainer = styled.div`
  width: 100%;
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
  min-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
