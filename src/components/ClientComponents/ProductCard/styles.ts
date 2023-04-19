import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.GRAY800};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 8px;
  border-radius: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;
export const ProductImg = styled.img`
  width: 40px;
`;
export const ProductQuantity = styled.input`
  width: 50px;
  height: 30px;
  background: ${({ theme }) => theme.COLORS.DARK50};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 8px;
  border-radius: 8px;
  text-align: center;
`;

export const ProductText = styled.span``;

export const CartButton = styled.button`
  background-color: transparent;
  padding: 8px;
`;
