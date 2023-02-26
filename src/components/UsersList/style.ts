import styled, { css } from "styled-components";

export const StyledUsersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;

    & > div {
      margin: 0.5rem;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
`;
export const HomeHeaderDetailsSearch = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    ${theme.mixins.input()};
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    input {
      background: transparent;
      border: none;
      height: 100%;
      color: ${theme.colors.textColor};
    }
  `}
`;
