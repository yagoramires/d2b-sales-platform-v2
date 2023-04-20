import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);

  overflow: hidden;

  background: ${({ theme }) => theme.COLORS.DARK50};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  @media (min-width: 768px) {
    max-width: 380px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 150px;
`;

export const Label = styled.span`
  text-align: center;
  font-size: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY300};
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 0 8px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  max-width: 40ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductForm = styled.form`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductQuantity = styled.input`
  width: 70px;
  height: 40px;
  background: ${({ theme }) => theme.COLORS.DARK50};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 8px;
  border-radius: 8px;
  text-align: center;
`;
export const CartButton = styled.button`
  background-color: transparent;
`;
