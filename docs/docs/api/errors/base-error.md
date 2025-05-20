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

[lib/errors/base-error.ts:9](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/errors/base-error.ts#L9)

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

[lib/errors/base-error.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/e2b72bf4bfc4848e2d2cb232e4eef09072a65670/lib/errors/base-error.ts#L14)
