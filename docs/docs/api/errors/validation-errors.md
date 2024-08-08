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

[lib/errors/base-error.ts:9](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/errors/base-error.ts#L9)

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

[lib/errors/base-error.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/9a2052c66d4e242693f95406bd756015cdd4bdd5/lib/errors/base-error.ts#L14)
