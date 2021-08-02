import styled from "styled-components";

export const DefaultButton = styled.button`
  display: block;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  font-size: 40px;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: ${({ theme }) => theme.second_color};
  &:active {
    transform: scale(0.8);
  }
`;
