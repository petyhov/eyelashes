import styled from "styled-components";
import Link from "next/link";

const Wrap = styled.div`
  width: 100%;
  display: flex;
`;
const CloseButton = styled.button`
  width: 64px;
  height: 64px;
  margin: 15px 15px 15px auto;
  border: none;
  background-color: transparent;
  background-image: url("/icons/close.svg");
  background-size: contain;
  &:active {
    transform: scale(0.8);
  }
`;

export const CloseIcon = () => (
  <Wrap>
    <Link href="/">
      <CloseButton />
    </Link>
  </Wrap>
);
