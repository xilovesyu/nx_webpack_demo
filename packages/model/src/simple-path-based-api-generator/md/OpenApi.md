### Data Types

| Common Name | type    | format    | Comments                                         |
| ----------- | ------- | --------- | ------------------------------------------------ | --- | -------------- |
| integer     | integer |           | int32                                            |     | signed 32 bits |
| long        | integer | int64     | signed 64 bits                                   |
| float       | number  | float     |                                                  |
| double      | number  | double    |                                                  |
| string      | string  |           |
| byte        | string  | byte      | base64 encoded characters                        |
| binary      | string  | binary    | any sequence of octets                           |
| boolean     | boolean |           |                                                  |
| date        | string  | date      | As defined by full-date - RFC3339                |
| dateTime    | string  | date-time | As defined by date-time - RFC3339                |
| password    | string  | password  | Used to hint UIs the input needs to be obscured. |
