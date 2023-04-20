import styled from 'styled-components';

interface LabelProps {
  width: string;
}

export const LabelContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 4px 8px;
`;

export const Label = styled.span<LabelProps>`
  font-size: 12px;
  min-width: ${({ width }) => width};
  max-width: ${({ width }) => width};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
