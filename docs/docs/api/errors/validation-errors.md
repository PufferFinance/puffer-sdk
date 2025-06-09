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
| :------ | :------ |
| `message` | `string` |
| `params` | [`ErrorBaseParameters`](types.md#errorbaseparameters) |

###### Returns

[`AccountError`](validation-errors.md#accounterror)

###### Inherited from

[`BaseError`](base-error.md#baseerrort).[`constructor`](base-error.md#constructors)

###### Source

[lib/errors/base-error.ts:9](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/errors/base-error.ts#L9)

#### Methods

##### compileMessage()

> `protected` **compileMessage**(`message`, `params`): `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |
| `params` | [`ErrorBaseParameters`](types.md#errorbaseparameters) |

###### Returns

`string`

###### Inherited from

[`BaseError`](base-error.md#baseerrort).[`compileMessage`](base-error.md#compilemessage)

###### Source

[lib/errors/base-error.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/errors/base-error.ts#L14)

***

### InvalidInputError

#### Extends

- [`BaseError`](base-error.md#baseerrort)

#### Constructors

##### new InvalidInputError()

> **new InvalidInputError**(`message`, `params`): [`InvalidInputError`](validation-errors.md#invalidinputerror)

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |
| `params` | [`ErrorBaseParameters`](types.md#errorbaseparameters) |

###### Returns

[`InvalidInputError`](validation-errors.md#invalidinputerror)

###### Inherited from

[`BaseError`](base-error.md#baseerrort).[`constructor`](base-error.md#constructors)

###### Source

[lib/errors/base-error.ts:9](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/errors/base-error.ts#L9)

#### Methods

##### compileMessage()

> `protected` **compileMessage**(`message`, `params`): `string`

###### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |
| `params` | [`ErrorBaseParameters`](types.md#errorbaseparameters) |

###### Returns

`string`

###### Inherited from

[`BaseError`](base-error.md#baseerrort).[`compileMessage`](base-error.md#compilemessage)

###### Source

[lib/errors/base-error.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/10365ebce6b373a61e6c9804fcda42b179782f27/lib/errors/base-error.ts#L14)
