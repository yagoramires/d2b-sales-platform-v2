import styled from 'styled-components';

interface CardTextProps {
  width: string;
}

export const CardContainer = styled.li`
  min-height: 80px;
  background: ${({ theme }) => theme.COLORS.GRAY800};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  padding: 8px;
  border-radius: 8px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const CardText = styled.span<CardTextProps>`
  font-size: 14px;
  min-width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
