/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Multicall,
  MulticallInterface,
} from "../../../contracts/extension/Multicall";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x0004000000000002000700000000000200000000030100190000006004300270000000730340019700030000003103550002000000010355000000730040019d0000008004000039000500000004001d000000400040043f0000000102200190000000330000c13d000000040230008c000001670000413d000000000201043b0000007502200197000000760220009c000001670000c13d0000000002000416000000240430008c000001670000413d000000000202004b000001670000c13d0000000402100370000000000202043b000000770420009c000001670000213d0000002304200039000000000434004b000001670000813d0000000404200039000000000441034f000000000504043b000000770450009c000001670000213d000000050450021000000000064200190000002406600039000000000336004b000001670000213d0000003f034000390000007803300197000000790630009c0000003b0000413d000000800100004100000000001004350000004101000039000000040010043f0000008101000041000001ca000104300000000001000416000000000101004b000001670000c13d0000002001000039000001000010044300000120000004430000007401000041000001c90001042e0000008003300039000000400030043f000000800050043f000000000505004b000000530000c13d00000020010000390000000002130436000000800100043d0000000000120435000000400230003900000005041002100000000007240019000000000401004b000001690000c13d00000000013700490000007302000041000000730410009c0000000001028019000000730430009c000000000302801900000040023002100000006001100210000000000121019f000001c90001042e000000600a0000390000000003000019000000a0053000390000000000a504350000002003300039000000000543004b000000550000413d0000007a0b000041000000000c00001900010000000a001d000000050dc002100000000003d200190000002403300039000000000331034f00000000050000310000000004250049000000430440008a000000000303043b000000000643004b000000000600001900000000060b40190000007a044001970000007a07300197000000000847004b000000000800001900000000080b2019000000000447013f0000007a0440009c000000000806c019000000000408004b000001670000613d00000000032300190000002406300039000000000261034f000000000202043b000000770420009c000001670000213d00000000042500490000004407300039000000000347004b000000000300001900000000030b20190000007a044001970000007a08700197000000000948004b000000000900001900000000090b4019000000000448013f0000007a0440009c000000000903c019000000000309004b000001670000c13d0000001f03200039000000200e00008a0000000003e3016f0000003f033000390000000004e3016f000000400300043d0000000004430019000000000834004b00000000080000190000000108004039000000770940009c0000002d0000213d00000001088001900000002d0000c13d000000400040043f00000000042304360000000007720019000000000557004b000001670000213d0000002005600039000000000151034f0000000505200272000000a70000613d000000000600001900000005076002100000000008740019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b0000009f0000413d0000001f06200190000000b60000613d0000000505500210000000000151034f00000000055400190000000306600210000000000705043300000000076701cf000000000767022f000000000101043b0000010006600089000000000161022f00000000016101cf000000000171019f000000000015043500000000012400190000000000010435000000400900043d0000007b0190009c0000002d0000213d0000006001900039000000400010043f00000040019000390000007c02000041000000000021043500000020019000390000007d0200004100000000002104350000002701000039000000000019043500000000020304330000000001000414000000000f0004100000000403f0008c000000cd0000c13d00000001020000390000000103000031000000ec0000013d000000730340009c000000730500004100000000040580190000004003400210000000730420009c00000000020580190000006002200210000000000232019f000000730310009c0000000001058019000000c001100210000000000121019f00000000020f001900070000000c001d00060000000d001d000400000009001d00030000000e001d00020000000f001d01c801c30000040f000000020f000029000000030e0000290000000409000029000000060d000029000000070c0000290000007a0b000041000000010a000029000000010220018f00030000000103550000006001100270000100730010019d0000007303100197000000000103004b000000050100002900000000040a00190000011e0000613d000000770130009c0000002d0000213d0000001f013000390000000001e1016f0000003f011000390000000001e1016f000000400600043d0000000001160019000000000461004b00000000040000190000000104004039000000770510009c0000002d0000213d00000001044001900000002d0000c13d000000400010043f000000000e0600190000000001360436000000030400036700000005053002720000010e0000613d000000000600001900000005076002100000000008710019000000000774034f000000000707043b00000000007804350000000106600039000000000756004b000001060000413d0000001f033001900000014c0000613d0000000505500210000000000454034f00000000055100190000000303300210000000000605043300000000063601cf000000000636022f000000000404043b0000010003300089000000000434022f00000000033401cf000000000363019f000000000035043500000000040e00190000000003040433000000000202004b000001500000613d000000000103004b0000013a0000c13d000400000004001d00060000000d001d00070000000c001d0000007e0100004100000000001004390000000400f004430000000001000414000000730210009c0000007301008041000000c0011002100000007f011001c7000080020200003901c801be0000040f0000000102200190000001970000613d000000000101043b000000000101004b000000010a0000290000007a0b000041000000070c000029000000060d0000290000000404000029000001980000613d000000800100043d0000000001c1004b000001860000a13d000000a001d000390000000000410435000000800100043d0000000001c1004b000001860000a13d00000002010003670000000402100370000000000202043b0000000403200039000000000331034f000000000303043b000000010cc0003900000000033c004b0000005d0000413d0000018c0000013d00000000040e00190000000003040433000000000202004b000001210000c13d000000000203004b0000018e0000c13d000000400300043d000700000003001d000000830100004100000000001304350000000401300039000000200200003900000000002104350000002402300039000000000109001901c801aa0000040f000000070400002900000000014100490000007302000041000000730310009c0000000001028019000000730340009c000000000402801900000040024002100000006001100210000000000121019f000001ca000104300000000001000019000001ca00010430000000a004000039000000200500008a0000000006000019000001750000013d0000001f09800039000000000959016f0000000008870019000000000008043500000000079700190000000106600039000000000816004b000000490000813d0000000008370049000000400880008a0000000002820436000000004804043400000000980804340000000007870436000000000a08004b0000016d0000613d000000000a000019000000000b7a0019000000000ca90019000000000c0c04330000000000cb0435000000200aa00039000000000b8a004b0000017e0000413d0000016d0000013d000000800100004100000000001004350000003201000039000000040010043f0000008101000041000001ca00010430000000400300043d000000400000013d0000007302000041000000730430009c0000000003028019000000730410009c000000000102801900000040011002100000006002300210000000000112019f000001ca00010430000000000001042f000000400100043d00000044021000390000008203000041000000000032043500000024021000390000001d030000390000000000320435000000830200004100000000002104350000000402100039000000200300003900000000003204350000007302000041000000730310009c0000000001028019000000400110021000000084011001c7000001ca0001043000000000430104340000000001320436000000000203004b000001b60000613d000000000200001900000000052100190000000006240019000000000606043300000000006504350000002002200039000000000532004b000001af0000413d000000000231001900000000000204350000001f02300039000000200300008a000000000232016f0000000001210019000000000001042d000000000001042f000001c1002104230000000102000039000000000001042d0000000002000019000000000001042d000001c6002104250000000102000039000000000001042d0000000002000019000000000001042d000001c800000432000001c90001042e000001ca00010430000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0000000200000000000000000000000000000040000001000000000000000000ffffffff00000000000000000000000000000000000000000000000000000000ac9650d800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0000000000000000000000000000000000000000000000000ffffffffffffff808000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffff9f206661696c656400000000000000000000000000000000000000000000000000416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c1806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b8302000002000000000000000000000000000000240000000000000000000000004e487b71000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024000000000000000000000000416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000008c379a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a93dce49b2c194b08bec303e542075ab6f298429c2bcbc3cfdb690ea121d418";

type MulticallConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MulticallConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multicall__factory extends ContractFactory {
  constructor(...args: MulticallConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Multicall & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Multicall__factory {
    return super.connect(runner) as Multicall__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MulticallInterface {
    return new Interface(_abi) as MulticallInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Multicall {
    return new Contract(address, _abi, runner) as unknown as Multicall;
  }
}