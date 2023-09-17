import { styled } from 'styled-components'
import * as SelectPrimitive from '@radix-ui/react-select'

export const SelectPrimitiveTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  order: 2;

  padding: 0.65rem;
  border-radius: 4px;
  border: 1px solid var(--gray-200);
  background: transparent;
  color: var(--white);
  font-weight: 500;
`

export const SelectPrimitiveContent = styled(SelectPrimitive.Content)`
  border: 1px solid var(--gray-200);
  width: 10.5rem;
  border-radius: 4px;
  z-index: 2;
`

export const SelectPrimitiveItem = styled(SelectPrimitive.Item)`
  padding: 0.65rem;
  cursor: pointer;
  background-color: var(--gray-700);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--gray-200);
  }
`
