import * as api from '@lp-labs/bit-counting';
import { countBits } from '@lp-labs/bit-counting';
console.log(countBits(23));
// @ts-expect-error invalid argument must be rejected by declarations
api.countBits('23');
