# errors/validation-errors

## Classes

### AccountError

#### Extends

- [`BaseError`](base-error.md#baseerrort)

#### Constructors

##### new AccountError()

> **new AccountError**(`message`, `params`): [`AccountError`](validation-errors.md#accounterror)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `params` | [`ErrorBaseParameters`](types.md#errorbaseparameters) |

###### Returns

[`AccountError`](validation-errors.md#accounterror)

###### Inherited from

[`BaseError`](base-error.md#baseerrort).[`constructor`](base-error.md#constructors)

###### Defined in

[lib/errors/base-error.ts:9](https://github.com/PufferFinance/puffer-sdk/blob/76e7ef64bae7e516a3502e53b1b67e1ba5bfc496/lib/errors/base-error.ts#L9)

#### Methods

##### compileMessage()

> `protected` **compileMessage**(`message`, `params`): `string`

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `params` | [`ErrorBaseParameters`](types.md#errorbaseparameters) |

###### Returns

`string`

###### Inherited from

[`BaseError`](base-error.md#baseerrort).[`compileMessage`](base-error.md#compilemessage)

###### Defined in

[lib/errors/base-error.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/76e7ef64bae7e516a3502e53b1b67e1ba5bfc496/lib/errors/base-error.ts#L14)
