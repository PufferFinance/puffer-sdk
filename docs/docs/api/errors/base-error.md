# errors/base-error

## Classes

### `abstract` BaseError\<T\>

#### Extends

- `Error`

#### Extended by

- [`AccountError`](validation-errors.md#accounterror)
- [`InvalidInputError`](validation-errors.md#invalidinputerror)

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `object` | [`ErrorBaseParameters`](types.md#errorbaseparameters) |

#### Constructors

##### new BaseError()

> **new BaseError**\<`T`\>(`message`, `params`): [`BaseError`](base-error.md#baseerrort)\<`T`\>

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |
| `params` | `T` |

###### Returns

[`BaseError`](base-error.md#baseerrort)\<`T`\>

###### Overrides

`Error.constructor`

###### Source

[lib/errors/base-error.ts:9](https://github.com/PufferFinance/puffer-sdk/blob/3a6a93d78d4850f7a255ba30661450ff72841125/lib/errors/base-error.ts#L9)

#### Methods

##### compileMessage()

> `protected` **compileMessage**(`message`, `params`): `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |
| `params` | `T` |

###### Returns

`string`

###### Source

[lib/errors/base-error.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/3a6a93d78d4850f7a255ba30661450ff72841125/lib/errors/base-error.ts#L14)
