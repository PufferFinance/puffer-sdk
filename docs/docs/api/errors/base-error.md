# errors/base-error

## Classes

### `abstract` BaseError

Defined in: [lib/errors/base-error.ts:6](https://github.com/PufferFinance/puffer-sdk/blob/08c5d78ca12a4e34eb8b33ccb14c4c8b103e0baa/lib/errors/base-error.ts#L6)

#### Extends

- `Error`

#### Extended by

- [`AccountError`](validation-errors.md#accounterror)
- [`InvalidInputError`](validation-errors.md#invalidinputerror)
- [`InvalidContractAddressError`](validation-errors.md#invalidcontractaddresserror)

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` *extends* `object` | [`ErrorBaseParameters`](types.md#errorbaseparameters) |

#### Constructors

##### Constructor

> **new BaseError**\<`T`\>(`message`, `params`): [`BaseError`](#baseerror)\<`T`\>

Defined in: [lib/errors/base-error.ts:9](https://github.com/PufferFinance/puffer-sdk/blob/08c5d78ca12a4e34eb8b33ccb14c4c8b103e0baa/lib/errors/base-error.ts#L9)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `params` | `T` |

###### Returns

[`BaseError`](#baseerror)\<`T`\>

###### Overrides

`Error.constructor`

#### Methods

##### compileMessage()

> `protected` **compileMessage**(`message`, `params`): `string`

Defined in: [lib/errors/base-error.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/08c5d78ca12a4e34eb8b33ccb14c4c8b103e0baa/lib/errors/base-error.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `params` | `T` |

###### Returns

`string`
