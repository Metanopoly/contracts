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
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  ERC20,
  ERC20Interface,
} from "../../../../../../contracts/external-deps/openzeppelin/token/ERC20/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x0008000000000002000000000701034f0000008001000039000000400010043f000000000107001900000060011002700000011a011001970000000102200190000000300000c13d000000040210008c0000031f0000413d000000000207043b000000e002200270000001200320009c000001040000a13d000001210320009c000001130000213d000001250320009c000001460000613d000001260320009c000001800000613d000001270120009c0000031f0000c13d0000000001000416000000000101004b0000031f0000c13d0000000403000039000000000203041a000000010520019000000001012002700000007f0410018f00000000010460190000001f0610008c00000000060000190000000106002039000000000662013f0000000106600190000002490000c13d000000800010043f000000000505004b000002590000c13d000001000100008a000000000112016f000000a00010043f000000000104004b000000c001000039000000a0010060390000026d0000013d0000000002000416000000000202004b0000031f0000c13d0000001f021000390000011b022001970000008002200039000000400020043f0000001f0210018f0000000503100272000000430000613d00000000040000190000000505400210000000000657034f000000000606043b000000800550003900000000006504350000000104400039000000000534004b0000003b0000413d000000000402004b000000520000613d0000000503300210000000000437034f00000003022002100000008003300039000000000503043300000000052501cf000000000525022f000000000404043b0000010002200089000000000424022f00000000022401cf000000000252019f0000000000230435000000400210008c0000031f0000413d000000800400043d0000011c0240009c0000031f0000213d0000001f024000390000011d03000041000000000512004b000000000500001900000000050380190000011d02200197000000000602004b00000000030080190000011d0220009c000000000305c019000000000203004b0000031f0000c13d000000800240003900000000030204330000011c0230009c0000027e0000213d0000001f02300039000000200800008a000000000282016f0000003f02200039000000000282016f000000400900043d0000000005290019000000000295004b000000000200001900000001020040390000011c0650009c0000027e0000213d00000001022001900000027e0000c13d0000008002100039000000400050043f000000000a390436000000a0044000390000000005430019000000000525004b0000031f0000213d000000000503004b000000860000613d000000000500001900000000065a00190000000007450019000000000707043300000000007604350000002005500039000000000635004b0000007f0000413d000000000393001900000020033000390000000000030435000000a00300043d0000011c0430009c0000031f0000213d0000001f043000390000011d05000041000000000114004b000000000100001900000000010580190000011d04400197000000000604004b00000000050080190000011d0440009c000000000501c019000000000105004b0000031f0000c13d000000800130003900000000010104330000011c0410009c0000027e0000213d0000001f04100039000000000484016f0000003f04400039000000000484016f000000400700043d0000000004470019000000000574004b000000000500001900000001050040390000011c0640009c0000027e0000213d00000001055001900000027e0000c13d000000400040043f0000000006170436000000a0033000390000000004310019000000000224004b0000031f0000213d000000000201004b000000b90000613d000000000200001900000000042600190000000005320019000000000505043300000000005404350000002002200039000000000412004b000000b20000413d00000000017100190000002001100039000000000001043500000000050904330000011c0150009c0000027e0000213d0000000304000039000000000104041a000000010210019000000001011002700000007f0310018f000000000301c0190000001f0130008c00000000010000190000000101002039000000000112004b000002490000c13d00030000000a001d000200000009001d000100000006001d000600000007001d000500000008001d000400000003001d000000200130008c000700000004001d000800000005001d000000f10000413d00000000004004350000011a0100004100000000020004140000011a0320009c0000000002018019000000c0012002100000011e011001c700008010020000390464045f0000040f00000001022001900000031f0000613d00000008050000290000001f025000390000000502200270000000200350008c0000000002004019000000000301043b00000004010000290000001f01100039000000050110027000000000011300190000000002230019000000000312004b0000000704000029000000f10000813d000000000002041b0000000102200039000000000312004b000000ed0000413d0000001f0150008c000002ad0000a13d00000000004004350000011a0100004100000000020004140000011a0320009c0000000002018019000000c0012002100000011e011001c700008010020000390464045f0000040f000000010220019000000005020000290000031f0000613d0000000803200180000000000101043b000002bb0000c13d0000002002000039000002c60000013d000001280320009c000001340000a13d000001290320009c0000018f0000613d0000012a0320009c000001970000613d0000012b0120009c0000031f0000c13d0000000001000416000000000101004b0000031f0000c13d0000001201000039000000800010043f0000012f01000041000004650001042e000001220320009c000001e00000613d000001230320009c000002240000613d000001240220009c0000031f0000c13d0000000002000416000000440110008c0000031f0000413d000000000102004b0000031f0000c13d0000000401700370000000000101043b0000012e0210009c0000031f0000213d0000002402700370000000000302043b0000012e0230009c0000031f0000213d00000000001004350000000101000039000000200010043f0000004002000039000800000002001d0000000001000019000700000003001d046404440000040f00000007020000290000000000200435000000200010043f000000000100001900000008020000290000018d0000013d0000012c0320009c0000023a0000613d0000012d0220009c0000031f0000c13d0000000002000416000000440110008c0000031f0000413d000000000102004b0000031f0000c13d0000000401700370000000000201043b0000012e0120009c0000031f0000213d0000002401700370000000000301043b0000000001000411046403660000040f000002310000013d0000000002000416000000440110008c0000031f0000413d000000000102004b0000031f0000c13d0000000401700370000000000101043b000800000001001d0000012e0110009c0000031f0000213d0000000001000411000500000001001d00000000001004350000000101000039000600000001001d000000200010043f0000011a0300004100000000010004140000011a0210009c0000000001038019000000c00110021000000131011001c7000080100200003900070000000703530464045f0000040f000000070300035f00000001022001900000031f0000613d000000000101043b00000008020000290000000000200435000000200010043f0000002401300370000000000101043b000700000001001d00000000010004140000011a0210009c0000011a01008041000000c00110021000000131011001c700008010020000390464045f0000040f00000001022001900000031f0000613d000000000101043b000000000101041a0000000703100029000000000113004b00000000010000190000000101004039000000010110008c000002950000c13d000001380100004100000000001004350000001101000039000000040010043f000001390100004100000466000104300000000002000416000000240110008c0000031f0000413d000000000102004b0000031f0000c13d0000000401700370000000000101043b0000012e0210009c0000031f0000213d0000000000100435000000200000043f00000040020000390000000001000019046404440000040f000001930000013d0000000001000416000000000101004b0000031f0000c13d0000000201000039000000000101041a000000800010043f0000012f01000041000004650001042e0000000002000416000000640110008c0000031f0000413d000000000102004b0000031f0000c13d0000000401700370000000000301043b0000012e0130009c0000031f0000213d0000002401700370000000000101043b000800000001001d0000012e0110009c0000031f0000213d0000004401700370000000000101043b000600000001001d00000000003004350000000101000039000500000001001d000000200010043f0000011a0400004100000000010004140000011a0210009c0000000001048019000000c00110021000000131011001c70000801002000039000700000003001d0464045f0000040f00000001022001900000031f0000613d000000000101043b0000000002000411000400000002001d0000000000200435000000200010043f00000000010004140000011a0210009c0000011a01008041000000c00110021000000131011001c700008010020000390464045f0000040f000000070400002900000001022001900000031f0000613d000000000101043b000000000101041a000000010200008a000000000221004b000002a00000613d0000000603000029000000000231004b0000029b0000813d000000400100043d00000044021000390000013a03000041000000000032043500000024021000390000001d030000390000000000320435000001340200004100000000002104350000000402100039000000200300003900000000003204350000011a020000410000011a0310009c000000000102801900000040011002100000013b011001c700000466000104300000000002000416000000440110008c0000031f0000413d000000000102004b0000031f0000c13d0000000401700370000000000101043b000800000001001d0000012e0110009c0000031f0000213d0000002401700370000000000101043b000700000001001d0000000001000411000500000001001d00000000001004350000000101000039000600000001001d000000200010043f0000011a0300004100000000010004140000011a0210009c0000000001038019000000c00110021000000131011001c700008010020000390464045f0000040f00000001022001900000031f0000613d000000000101043b00000008020000290000000000200435000000200010043f00000000010004140000011a0210009c0000011a01008041000000c00110021000000131011001c700008010020000390464045f0000040f00000001022001900000031f0000613d000000000101043b000000000101041a0000000703000029000000000231004b000002940000813d000000400100043d000000640210003900000132030000410000000000320435000000440210003900000133030000410000000000320435000000240210003900000025030000390000000000320435000001340200004100000000002104350000000402100039000000200300003900000000003204350000011a020000410000011a0310009c0000000001028019000000400110021000000135011001c700000466000104300000000002000416000000440110008c0000031f0000413d000000000102004b0000031f0000c13d0000000401700370000000000201043b0000012e0120009c0000031f0000213d0000002401700370000000000301043b0000000001000411046403c00000040f0000000101000039000000400200043d00000000001204350000011a010000410000011a0320009c0000000002018019000000400120021000000130011001c7000004650001042e0000000001000416000000000101004b0000031f0000c13d0000000303000039000000000203041a000000010520019000000001012002700000007f0410018f00000000010460190000001f0610008c00000000060000190000000106002039000000000662013f00000001066001900000024f0000613d000001380100004100000000001004350000002201000039000000040010043f00000139010000410000046600010430000000800010043f000000000505004b0000025d0000c13d000001000100008a000000000112016f000000a00010043f000000000104004b000000c001000039000000a001006039000002790000013d0000000000300435000000020220008c000002620000813d000002600000013d0000000000300435000000020220008c0000026e0000813d0000002001000039000002840000013d000001360200004100000000040000190000000003040019000000000402041a000000a005300039000000000045043500000001022000390000002004300039000000000514004b000002640000413d000000c001300039000002790000013d0000013c0200004100000000040000190000000003040019000000000402041a000000a005300039000000000045043500000001022000390000002004300039000000000514004b000002700000413d000000c001300039000000610110008a000000200200008a000000000121016f000001370210009c000002840000a13d000001380100004100000000001004350000004101000039000000040010043f000001390100004100000466000104300000008001100039000800000001001d000000400010043f0000008002000039046403500000040f000000080400002900000000014100490000011a020000410000011a0310009c00000000010280190000011a0340009c000000000402801900000040024002100000006001100210000000000121019f000004650001042e000000000331004900000005010000290000000802000029046403660000040f000000400100043d0000000602000029000002a60000013d000000000331004900000000010400190000000402000029046403660000040f0000000704000029000000000104001900000008020000290000000603000029046403c00000040f000000400100043d000000050200002900000000002104350000011a020000410000011a0310009c0000000001028019000000400110021000000130011001c7000004650001042e000000080100006b0000000001000019000002b20000613d0000000301000029000000000101043300000008040000290000000302400210000000010300008a000000000223022f000000000232013f000000000121016f0000000102400210000000000121019f000002d50000013d00000020020000390000000004000019000000020600002900000000056200190000000005050433000000000051041b000000200220003900000001011000390000002004400039000000000534004b000002be0000413d000000080330006c000002d20000813d00000008030000290000000303300210000000f80330018f000000010400008a000000000334022f000000000343013f00000002022000290000000002020433000000000232016f000000000021041b0000000801000029000000010110021000000001011001bf0000000702000029000000000012041b00000006010000290000000001010433000800000001001d0000011c0110009c0000027e0000213d0000000401000039000700000001001d000000000101041a000000010210019000000001021002700000007f0320018f000000000302c019000400000003001d0000001f0230008c00000000020000190000000102002039000000000121013f0000000101100190000002490000c13d0000000401000029000000200110008c0000030a0000413d000000070100002900000000001004350000011a0100004100000000020004140000011a0320009c0000000002018019000000c0012002100000011e011001c700008010020000390464045f0000040f00000001022001900000031f0000613d00000008030000290000001f023000390000000502200270000000200330008c0000000002004019000000000301043b00000004010000290000001f01100039000000050110027000000000011300190000000002230019000000000312004b0000030a0000813d000000000002041b0000000102200039000000000312004b000003060000413d00000008010000290000001f0110008c000003210000a13d000000070100002900000000001004350000011a0100004100000000020004140000011a0320009c0000000002018019000000c0012002100000011e011001c700008010020000390464045f0000040f000000010220019000000005020000290000031f0000613d0000000803200180000000000101043b0000032e0000c13d0000002002000039000003390000013d00000000010000190000046600010430000000080100006b0000000001000019000003260000613d0000000101000029000000000101043300000008040000290000000302400210000000010300008a000000000223022f000000000232013f000000000221016f0000000101400210000003480000013d00000020020000390000000004000019000000060600002900000000056200190000000005050433000000000051041b000000200220003900000001011000390000002004400039000000000534004b000003310000413d000000080330006c000003450000813d00000008030000290000000303300210000000f80330018f000000010400008a000000000334022f000000000343013f00000006022000290000000002020433000000000232016f000000000021041b000000010100003900000008020000290000000102200210000000000112019f0000000702000029000000000012041b0000002001000039000001000010044300000120000004430000011f01000041000004650001042e00000020030000390000000004310436000000003202043400000000002404350000004001100039000000000402004b0000035f0000613d000000000400001900000000054100190000000006430019000000000606043300000000006504350000002004400039000000000524004b000003580000413d000000000321001900000000000304350000001f02200039000000200300008a000000000232016f0000000001210019000000000001042d00030000000000020000012e01100198000003a10000613d000200000003001d0003012e0020019c000003ab0000613d000100000001001d00000000001004350000000101000039000000200010043f0000011a0300004100000000010004140000011a0210009c0000000001038019000000c00110021000000131011001c700008010020000390464045f0000040f000000010220019000000003030000290000039f0000613d000000000101043b0000000000300435000000200010043f00000000010004140000011a0210009c0000011a01008041000000c00110021000000131011001c700008010020000390464045f0000040f000000030600002900000001022001900000039f0000613d000000000101043b0000000202000029000000000021041b000000400100043d00000000002104350000011a0200004100000000030004140000011a0430009c00000000030280190000011a0410009c00000000010280190000004001100210000000c002300210000000000112019f0000011e011001c70000800d0200003900000003030000390000013d0400004100000001050000290464045a0000040f00000001012001900000039f0000613d000000000001042d00000000010000190000046600010430000000400100043d00000064021000390000014003000041000000000032043500000044021000390000014103000041000000000032043500000024021000390000002403000039000003b40000013d000000400100043d00000064021000390000013e03000041000000000032043500000044021000390000013f030000410000000000320435000000240210003900000022030000390000000000320435000001340200004100000000002104350000000402100039000000200300003900000000003204350000011a020000410000011a0310009c0000000001028019000000400110021000000135011001c7000004660001043000040000000000020000012e01100198000004150000613d000400000003001d0002012e0020019c0000041f0000613d000300000001001d0000000000100435000000200000043f0000011a0100004100000000020004140000011a0320009c0000000002018019000000c00120021000000131011001c700008010020000390464045f0000040f0000000102200190000004130000613d000000000101043b000000000201041a000100000002001d000000040120006c000004290000413d00000003010000290000000000100435000000200000043f0000011a0300004100000000010004140000011a0210009c0000000001038019000000c00110021000000131011001c700008010020000390464045f0000040f0000000102200190000004130000613d0000000103000029000000040230006a000000000101043b000000000021041b0000000201000029000000000010043500000000010004140000011a0210009c0000011a01008041000000c00110021000000131011001c700008010020000390464045f0000040f0000000102200190000004130000613d000000000101043b000000000301041a00000004040000290000000002430019000000000332004b00000000030000190000000103004039000000010330008c0000043e0000613d000000000021041b000000400100043d00000000004104350000011a0200004100000000030004140000011a0430009c00000000030280190000011a0410009c00000000010280190000004001100210000000c002300210000000000112019f0000011e011001c70000800d0200003900000003030000390000014204000041000000030500002900000002060000290464045a0000040f0000000101200190000004130000613d000000000001042d00000000010000190000046600010430000000400100043d00000064021000390000014703000041000000000032043500000044021000390000014803000041000000000032043500000024021000390000002503000039000004320000013d000000400100043d00000064021000390000014503000041000000000032043500000044021000390000014603000041000000000032043500000024021000390000002303000039000004320000013d000000400100043d000000640210003900000143030000410000000000320435000000440210003900000144030000410000000000320435000000240210003900000026030000390000000000320435000001340200004100000000002104350000000402100039000000200300003900000000003204350000011a020000410000011a0310009c0000000001028019000000400110021000000135011001c70000046600010430000001380100004100000000001004350000001101000039000000040010043f000001390100004100000466000104300000011a030000410000011a0410009c000000000103801900000040011002100000011a0420009c00000000020380190000006002200210000000000112019f00000000020004140000011a0420009c0000000002038019000000c002200210000000000112019f00000149011001c700008010020000390464045f0000040f0000000102200190000004580000613d000000000101043b000000000001042d000000000100001900000466000104300000045d002104210000000102000039000000000001042d0000000002000019000000000001042d00000462002104230000000102000039000000000001042d0000000002000019000000000001042d0000046400000432000004650001042e0000046600010430000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000001ffffffe0000000000000000000000000000000000000000000000000ffffffffffffffff800000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000200000000000000000000000000000000200000000000000000000000000000040000001000000000000000000000000000000000000000000000000000000000000000000000000003950935000000000000000000000000000000000000000000000000000000000a457c2d600000000000000000000000000000000000000000000000000000000a457c2d700000000000000000000000000000000000000000000000000000000a9059cbb00000000000000000000000000000000000000000000000000000000dd62ed3e00000000000000000000000000000000000000000000000000000000395093510000000000000000000000000000000000000000000000000000000070a082310000000000000000000000000000000000000000000000000000000095d89b410000000000000000000000000000000000000000000000000000000018160ddc0000000000000000000000000000000000000000000000000000000018160ddd0000000000000000000000000000000000000000000000000000000023b872dd00000000000000000000000000000000000000000000000000000000313ce5670000000000000000000000000000000000000000000000000000000006fdde0300000000000000000000000000000000000000000000000000000000095ea7b3000000000000000000000000ffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000002000000080000000000000000000000000000000000000000000000000000000200000000000000000000000000200000000000000000000000000000000000040000000000000000000000000207a65726f00000000000000000000000000000000000000000000000000000045524332303a2064656372656173656420616c6c6f77616e63652062656c6f7708c379a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000840000000000000000000000008a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b000000000000000000000000000000000000000000000000ffffffffffffff7f4e487b7100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002400000000000000000000000045524332303a20696e73756666696369656e7420616c6c6f77616e63650000000000000000000000000000000000000000000064000000000000000000000000c2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925737300000000000000000000000000000000000000000000000000000000000045524332303a20617070726f766520746f20746865207a65726f206164647265726573730000000000000000000000000000000000000000000000000000000045524332303a20617070726f76652066726f6d20746865207a65726f20616464ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef616c616e6365000000000000000000000000000000000000000000000000000045524332303a207472616e7366657220616d6f756e7420657863656564732062657373000000000000000000000000000000000000000000000000000000000045524332303a207472616e7366657220746f20746865207a65726f2061646472647265737300000000000000000000000000000000000000000000000000000045524332303a207472616e736665722066726f6d20746865207a65726f2061640200000000000000000000000000000000000000000000000000000000000000ce16a10abde1487c85a9144c2d8796aa38f2293213fecceab4308a565b4ae14a";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override deploy(
    name_: string,
    symbol_: string,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<
      ERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC20__factory {
    return super.connect(runner) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC20 {
    return new Contract(address, _abi, runner) as unknown as ERC20;
  }
}