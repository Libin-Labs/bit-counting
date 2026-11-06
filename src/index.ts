export function countBits(value: number): number {
  if (!Number.isSafeInteger(value) || value < 0)
    throw new RangeError('Expected nonnegative safe integer');
  let n = BigInt(value),
    count = 0;
  while (n) {
    count += Number(n & 1n);
    n >>= 1n;
  }
  return count;
}
