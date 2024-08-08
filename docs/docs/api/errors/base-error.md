# errors/base-error

## Classes

### `abstract` BaseError\<T\>

#### Extends

- `Error`

#### Extended by

- [`AccountError`](validation-errors.md#accounterror)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | [`ErrorBaseParameters`](types.md#errorbaseparameters) |

#### Constructors

##### new BaseError()

> **new BaseError**\<`T`\>(`message`, `params`): [`BaseError`](base-error.md#baseerrort)\<`T`\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `params` | `T` |

###### Returns

[`BaseError`](base-error.md#baseerrort)\<`T`\>

###### Overrides

`Error.constructor`

###### Defined in

[lib/errors/base-error.ts:9](https://github.com/PufferFinance/puffer-sdk/blob/76e7ef64bae7e516a3502e53b1b67e1ba5bfc496/lib/errors/base-error.ts#L9)

#### Methods

##### compileMessage()

> `protected` **compileMessage**(`message`, `params`): `string`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `params` | `T` |

###### Returns

`string`

###### Defined in

[lib/errors/base-error.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/76e7ef64bae7e516a3502e53b1b67e1ba5bfc496/lib/errors/base-error.ts#L14)
