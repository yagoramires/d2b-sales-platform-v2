import styled, { css } from 'styled-components';

interface TextProps {
  width: string;
}
export const ListContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;

  overflow-x: auto;
`;

export const LabelContainer = styled.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const LabelText = styled.span<TextProps>`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  width: 25%;

  max-width: 50ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 768px) {
    width: ${({ width }) => width};
  }
`;

export const ListCard = styled.li`
  width: 100%;
  min-height: 60px;
  background: ${({ theme }) => theme.COLORS.GRAY800};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  border-radius: 8px;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const CardText = styled.span<TextProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  width: 25%;

  max-width: 50ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (min-width: 768px) {
    width: ${({ width }) => width};
  }
`;
