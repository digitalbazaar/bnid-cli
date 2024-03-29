/*!
 * Copyright (c) 2020-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {generateId} from 'bnid';
import yargs from 'yargs';

export async function main() {
  const args = yargs(process.argv)
    .usage('Usage: $0 [options]')
    .option('bit-length', {
      alias: 'n',
      describe: 'Number of random bits',
      type: 'number',
      default: 128
    })
    .option('fixed-length', {
      alias: 'f',
      describe:
        'Ensure fixed length output string\n' +
        'Helps to account for variable base58 encoded length. ' +
        'Decoders may output an extra leading zero byte for certain fixed ' +
        'encoded values.',
      type: 'boolean',
      default: false
    })
    .option('fixed-bit-length', {
      alias: 'b',
      describe:
        'Fixed bit length\n' +
        'Allows for leading zero bits to be encoded.',
      type: 'number'
    })
    .option('encoding', {
      alias: 'e',
      describe: 'Encoding to use',
      choices: [
        'hex', 'base16',
        'base16upper', 'b16upper',
        'base58', 'base58btc'
      ],
      default: 'base58btc'
    })
    .option('multibase', {
      alias: 'm',
      describe: 'Use multibase format',
      type: 'boolean',
      default: true
    })
    .option('multihash', {
      alias: 'u',
      describe: 'Use multihash format',
      type: 'boolean',
      default: true
    })
    .alias('h', 'help')
    .argv;
  try {
    console.log(await generateId({
      bitLength: args.bitLength,
      encoding: args.encoding,
      multibase: args.multibase,
      multihash: args.multihash,
      fixedLength: args.fixedLength,
      fixedBitLength: args.fixedBitLength
    }));
  } catch(e) {
    console.error(e);
    process.exit(1);
  }
}
