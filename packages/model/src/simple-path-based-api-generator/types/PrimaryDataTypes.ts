interface IntegerDataTypesTypes {
  type: 'integer'
  format: 'int32' | 'int64'
}

interface NumberDataTypesTypes {
  type: 'number'
  format: 'float' | 'double'
}

interface StringDataTypesTypes {
  type: 'string'
  format?: 'byte' | 'binary' | 'date' | 'date-time' | 'password'
}

interface BooleanDataTypesTypes {
  type: 'boolean'
}

type PrimaryDataTypesTypes =
  | IntegerDataTypesTypes
  | NumberDataTypesTypes
  | StringDataTypesTypes
  | BooleanDataTypesTypes

export const PrimaryDataTypes: PrimaryDataTypesTypes[] = [
  {
    type: 'integer',
    format: 'int64'
  },
  {
    type: 'integer',
    format: 'int32'
  },
  {
    type: 'number',
    format: 'float'
  },
  {
    type: 'number',
    format: 'double'
  },
  {
    type: 'string'
  },
  {
    type: 'string',
    format: 'byte'
  },
  {
    type: 'string',
    format: 'binary'
  },
  {
    type: 'string',
    format: 'date'
  },
  {
    type: 'string',
    format: 'date-time'
  },
  {
    type: 'string',
    format: 'password'
  },
  {
    type: 'boolean'
  }
]
