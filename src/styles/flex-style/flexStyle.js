import styled from "styled-components";

export const FlexStyle = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
`;
