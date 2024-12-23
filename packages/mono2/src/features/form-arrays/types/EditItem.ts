export type EditItemProps<T extends object> = {
  current: T | null
  previous: T | null
}

export type Mode = 'edit' | 'display' | null
