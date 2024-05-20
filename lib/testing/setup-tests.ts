import { TextDecoder, TextEncoder } from 'util';

Object.assign(globalThis, {
  TextEncoder,
  TextDecoder,
});
