import { ComponentProps } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CaretDown } from '@phosphor-icons/react'

import {
  SelectPrimitiveContent,
  SelectPrimitiveItem,
  SelectPrimitiveTrigger,
} from './styles'

interface SelectProps extends ComponentProps<typeof SelectPrimitive.Root> {
  placeholder: string
  items: {
    label: string
    value: string
  }[]
}

export function Select({ placeholder, items, ...rest }: SelectProps) {
  return (
    <SelectPrimitive.Root {...rest}>
      <SelectPrimitiveTrigger>
        <SelectPrimitive.Value>{placeholder}</SelectPrimitive.Value>
        <SelectPrimitive.Icon>
          <CaretDown size={18} color="var(--gray-200)" />
        </SelectPrimitive.Icon>
      </SelectPrimitiveTrigger>

      <SelectPrimitiveContent position="popper">
        {items.map((item) => (
          <SelectPrimitiveItem key={item.value} value={item.value}>
            {item.label}
          </SelectPrimitiveItem>
        ))}
      </SelectPrimitiveContent>
    </SelectPrimitive.Root>
  )
}
