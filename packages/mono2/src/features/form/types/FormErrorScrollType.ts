import {NamePath} from 'antd/es/form/interface'

/**
 * Component type to scroll, here direct means direct belongs to form, tab means fields in the tabs.
 */
export type FormErrorScrollBelongingType = 'tab' | 'direct'

/**
 * When a field item was added, it will add on scroll field info.
 */
export interface FormErrorScrollFieldInfo {
  /**
   * Field path
   */
  path?: NamePath
  /**
   * Belonging Type
   */
  belongsTo: FormErrorScrollBelongingType
  /**
   * Belonging Id
   */
  belongsToId: string
  /**
   * SpecficId, such as tab panel key
   */
  belongsToSpecificId?: string
}

export interface BelongingControlInfo {
  belongsType: FormErrorScrollBelongingType
  belongsToId: string
  navigateToSpecificId: (specificId?: string) => void
}
