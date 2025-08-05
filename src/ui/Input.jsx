import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--input-border, var(--color-grey-300));
  border-radius: var(--border-radius-sm); /* was color var earlier */
  box-shadow: var(--shadow-sm);
  padding: 0.8rem 1.2rem;
  background: var(--input-bg);
  color: var(--input-fg);
`;

export default Input;
