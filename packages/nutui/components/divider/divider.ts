import type { ExtractPropTypes, PropType } from 'vue'

export const dividerProps = {
  contentPosition: {
    type: String as PropType<'left' | 'right' | 'center'>,
    default: 'center',
  },
  dashed: {
    type: Boolean,
    default: false,
  },
  hairline: {
    type: Boolean,
    default: true,
  },
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal',
  },
}

export type DividerProps = ExtractPropTypes<typeof dividerProps>
