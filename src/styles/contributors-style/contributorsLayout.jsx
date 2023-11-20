import styled from "styled-components";

export const ContributorsStyle = styled.div`
  height: ${({ height }) => height};
  width: 48px;
  background-color: ${({ bgcolor }) => bgcolor};
  border-radius: 4px;
  padding: 4px 0px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  P {
    color: ${({ bgcolor }) => (bgcolor === "#FCE8FC" ? "#851188" : bgcolor === "#FEF7F0" ? "#E46C0B" : "white")};
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }
`;
