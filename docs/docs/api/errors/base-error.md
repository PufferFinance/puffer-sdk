# errors/base-error

## Classes

### `abstract` BaseError

Defined in: [lib/errors/base-error.ts:6](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/errors/base-error.ts#L6)

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

Defined in: [lib/errors/base-error.ts:9](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/errors/base-error.ts#L9)

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

Defined in: [lib/errors/base-error.ts:14](https://github.com/PufferFinance/puffer-sdk/blob/e6845b3da08d17a7c5d54966cd7800adabb594de/lib/errors/base-error.ts#L14)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `params` | `T` |

###### Returns

`string`
