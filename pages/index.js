import Link from "next/link";
import styled from "styled-components";

import { DefaultButton } from "../src/components";

const Wrap = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  button:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export default function Home() {
  return (
      <Wrap>
        <Link href="/add-client">
          <DefaultButton>ДОДАТИ КЛІЄНТА</DefaultButton>
        </Link>
        <Link href="/add-client">
          <DefaultButton>СТАТИСТИКА</DefaultButton>
        </Link>
      </Wrap>
  );
}
