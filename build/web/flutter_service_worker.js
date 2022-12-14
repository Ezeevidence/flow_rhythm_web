'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "81f28522db473d9139d0d4fb8d614063",
".git/config": "0e73a7b283df9a188b23eca4dec05e36",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3ea4b5a5e4e9137c62785dc725a810bb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3fdc0780c6ab65b421684ec3aee44c17",
".git/logs/refs/heads/main": "172ff21f411bef2a7dcd762ce0281674",
".git/logs/refs/remotes/origin/main": "987a0c8c3f15047dcd858fc3ad423dd1",
".git/objects/04/f877f9b2fdd79e51750a0798889095c8cbcdc8": "2efa385d4cfc293a72c1dcec64d8c202",
".git/objects/07/4943b3071670582906dec3dcdf8b8340c85e7e": "17a101f72b9c8fccea3dc4adf9e4afea",
".git/objects/0a/628d3004dcc7f807f16d1477e973cb80ce1535": "6ff0f471f7457aeddc6f56a5ac3f3c5a",
".git/objects/0a/9dd40b92b5a457597ea4afbd1202fcaf4c83b6": "94d0a42beb8a74653bf8ead5534c2fda",
".git/objects/0e/3cf03ae66ab73a8e685c300822915a03f38bb6": "2883a8d5252bad6a9a835d0491d0c618",
".git/objects/11/499683844d6ee38d50e6b8a30d01e786c75ed9": "78e2f231e079469c0ef8c266d64cc96e",
".git/objects/11/c037e3a5bfb70c35ef0e3852a7d5631790292d": "599f6d28ad6977a20b51d3fdecfa2231",
".git/objects/13/12a6e1661a5c30548d9c5389b09d0c403246c8": "e4ab11d34e4d4c3007c11125dda2692f",
".git/objects/14/42da4e67762909661ecffc097f774ffe115fa6": "d2db3668f6545fa6e2617768ba2ff03c",
".git/objects/15/932c1e79bcc0bed2e43eefc2cb7d66f8c54803": "297e7051469528cb21822c58cc9c4474",
".git/objects/17/11d2165803e7b60c84eefe45a3939587332c70": "501fdbf8ad53e3e8a09b03ca5feebcae",
".git/objects/17/e1f66bc3a76df6064000ab9e878740167a6420": "f223d508f32f3ba08a1329928f538058",
".git/objects/18/51a432c9f168f7be8b2608cc87411b531539f5": "e03d6970bdbe4cc713f4f6fc331d735d",
".git/objects/18/8b2b8730caf44ff7478c8580f07844aa0def7c": "fba998f0f4ab494a88c6b3e8d13a2319",
".git/objects/18/d9cff1dbaac7914af5ba855253704be0a717aa": "3a11fe91961ae76f520c5c2d60c8e1cf",
".git/objects/19/dd9900018df7049448f2ea58fd4ef2a6a1defc": "c797f9db6d90bde15649164a120c1ef8",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/056a2a01c6093f1000bd868cf9d3a8d8df6b1d": "e5e8bc4d02e3699655ca4f2a01e7baca",
".git/objects/1d/09c07cb6c3fb86d9ae430ea8a6236d03bf8cf5": "9286de1026430cb5bfa5ab70d3825861",
".git/objects/1e/2ba22e81e1a7f4e4210de1ee8aab79b0de709b": "52e8be1f9574fd2fedad201750126245",
".git/objects/21/2e7938b4110145d46afb64ba60731db7ac0dd8": "0eee152505e6e29f6854345b76b64053",
".git/objects/22/db43513aadad04853713464e6555d93d8d46bb": "fd728bab3be1a1cbc0a235222861321c",
".git/objects/23/038e39630e149867bfc28ab3c4edb17fbc9713": "03435f5987ed735a6400ebe7a9141877",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/da3e507c7c83b19f03a2ce34244f32eca66506": "8e762569fb7a02fc607d7bea4a01ed76",
".git/objects/24/5cc44d6fad6efcb414909dbcdaff911a5bd074": "0aa8578a6c7eff553dd9c2f2a45bcda1",
".git/objects/25/717019bb5c9fffd6a8d94d505e79e163129b97": "fca6c76b097f8c70a4a874a3b7135314",
".git/objects/25/bb005d300f9b329bb95bd643c9499218e91bbe": "f7bbd8065b11878cec8a0fba36c068b1",
".git/objects/28/26640e6549eecf984c97165848b2ab5e8fc093": "c85602b5f41c922046e0c55550b1ed6b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/7897d13fcb327e4baa2ad222e17f4ecce28962": "d240732952dc9a0f3cbda1e5b5da345f",
".git/objects/2b/900a58350bb5bc0f8ac3cb925cb919c0fe588c": "4a8657ca91c8fef59f4637fa327f7f0b",
".git/objects/2b/f3026e371416b37e3fc8b0eb2f4e6dc2e235aa": "7b2c339de03b9cfafd00395d35a46598",
".git/objects/2e/d4d46eeb079af2998aa1963d3729a5bf29c832": "f029923c12d53e5029116a91cca4e769",
".git/objects/30/02556aebb7496acff09827fbdac9c97e19c191": "1e4c7c581cf4069ca6a0c98232b9e06c",
".git/objects/30/7c9f5820a0037b6ff6998d5a5796f84b5ca9ed": "13f5f5403af1e38f2d6a66b8dc19e801",
".git/objects/31/d81ed67a0f02974427433745869001ac578324": "ccee8b47687607a9ea9947fd8a87cbb5",
".git/objects/34/3addf07fa18eef0692078c5becfe2701b32dcc": "dac2070cf1909d75c9dd1768dbeaa976",
".git/objects/34/64a03bb69a8f1bbb8ed0b34dce1d4eb4a4e3fd": "d14b24b814701222ce9e8908326b047f",
".git/objects/37/585b43c512949bd5b9a632fcf8c44677929b62": "f7ad81c63149b2a680b43132195c7ee0",
".git/objects/38/de544154dd4200151274ce41962490569b624b": "22c9b4a27022db6df764d8c4d5d26c5a",
".git/objects/39/a1fa19b0642c7b365111ff45c21dd7e162b78b": "efa3873717230d41d76cb1726cd5fbe3",
".git/objects/3c/3e8099810b1c942f1be1e6163dc6251a92e4d5": "607dad3ccaede89c587fcbe684621c80",
".git/objects/3c/46d881be1f261c0702fa7ca1487d1a8ec6fcd6": "c58dedf7897e4dc2880aa807950af3c7",
".git/objects/3d/10d62d4900f6c859b217ec1e4e65ce7043cac2": "75687417df1c2272595cb5b49d98a64e",
".git/objects/3d/b6019534eb0610dfa026293c9cbd6a14dabfb6": "c8cca7734a121924edd58b3951917a10",
".git/objects/3e/9e070dbff171121a4cbef00b5e7b31ffc3ef38": "d65c7db228029ae9051466314fc9744e",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/995904eff60139f3a683db4b03786fd5846442": "572928f92322fc408014a0a695f8b4f7",
".git/objects/40/280dc80ad9e334826f28054299614b15c638bb": "1e3f8e22965540807bf1e992b154964a",
".git/objects/42/bbca71bde0402e159adcd3a09ed601cd2c1458": "55c033c370aa29f5f4a573fac6e1f628",
".git/objects/47/7b431786f4c8cab3fdebc0af4cf3aa0c49fa80": "2ea44dea0323c691000244ae2a3c9878",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/48/5efd25a532ce8b4e63372be52dfa95bb3c85df": "28a75202afb17d0b2b841e55a927620a",
".git/objects/48/835313ead03fa84ddb80fc3fa0b9edbc07d003": "350cb6d8fcc521b41e811f1ba0aa58be",
".git/objects/4d/746ed5ba09b223c97b21e4351319dffdc60441": "68a0bc4b899604f230e7e889e2593f44",
".git/objects/4e/48f2bb8d31104b2a1c4a6ed68f7bbe91e368b2": "365cc2eadbd509c707de840338e72aa8",
".git/objects/53/a006de197bf5d599ae20ea06219fabb1944b0b": "03257330b43ee071da949e84d720391b",
".git/objects/54/12a9bb39ae4fe8264c643916ba02dcbb28c740": "09060c38d33f9909cef8d1f44715dd2e",
".git/objects/56/3de0574f74e6ce0fd2b1b3aff1fb3723e857fb": "6c858d26bbc3aec94749e65e82fa8081",
".git/objects/57/b632beb84ae84aa386d05816cec68d9925ffd9": "94747587d5deea63970c5922c0f6fc6e",
".git/objects/59/4f36d9e986df2e170e1155a24ebf50b6cb0777": "8e1e09f82794f5574ba8c00037ac1ab6",
".git/objects/5b/7b32492b2827abf0303c9fad7e40aad1a62164": "ce2b8dfb86874b5c0132a68a64851d09",
".git/objects/5d/583e8c1dfe6d44225ac24d69ea1367ef75cbfd": "3134792e56816bdb57b8bed0986fdd26",
".git/objects/5e/827d3e410829e26d264750b05278560ac49505": "26fcbd05106acb0be4eeea0e6f800b9a",
".git/objects/60/2d740ce4927410a98f999a2b32365d80fec2ec": "61b32b1724217a947fd1d7c20dd83eb6",
".git/objects/61/20e532673d16e1bca57987e15bf7da544bb140": "c4af69ea04fa5c890dfb515bc0f4fccc",
".git/objects/63/5eb4bc349d1dc575e8be280a43e20ba02827fc": "576d9abb00114689be1ae257b753314d",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/65/ed35a2ef94c4153f5041cf0484d1926f18eec2": "c79cba2dfc273923667e3c2dbc3f301c",
".git/objects/6b/2c2bfee758a36f4d8ecdc3082674022fc60c5f": "f31c9c493c5e2273c0e4418e88f48a9f",
".git/objects/6b/cc0e349bffe8f3b14ca93455fc2be91036e2bd": "489bd11d0a3503620fe3142537ba6294",
".git/objects/6c/a6e5a817f3ddadbf496aa12854a6bfd5f57da3": "d88f9315f4411bd90d4b88027b62efad",
".git/objects/6f/03813eae36637f78d1ebf2e2cef29d84ff03c3": "268e052d2cbc0f357e47c705df8d57be",
".git/objects/6f/39f70feaf4d4b74a7a79f5cd8a05d19ff3f8e1": "be123240f477d5011d0c721418fc36a5",
".git/objects/70/5c8326360a772c42037015ae5fe054f98dae85": "5d946fa015d572dc3c69c68ae6e29b81",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/71/bca061044c2a6223390023c8f39de8c555bf22": "aa2325829381a84db8c35ac29f15b776",
".git/objects/74/403229a4d4130820655f0c21006ed90ddd20fe": "ba0f35a9a8a8b782f5e2aaa6dbcf36d5",
".git/objects/76/00d4952224c71f45c821287bd7c4bd78cb500c": "e0ed280950c404469eeee996801e0095",
".git/objects/76/6b135ccd212def3324bc8677844d064e193869": "8883f23c521fff88a74fc55cadf6ef3b",
".git/objects/77/b18b89bbe382b477550961d17814897aae45d7": "bf77dc2c66a79f218f3cc1838fe8bfa9",
".git/objects/78/6c5a3d79e925fbfec712114ff2d27dc094408b": "8109e972e64c90b49bba9c70c51687c5",
".git/objects/79/7898aef0759e9616b57a5064c7c7a7a4b9e36a": "542aac4746d532ce315ef67c1caea3bb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/91c152a3c2f3760b1b3af43e26ab6457e3b7d3": "e2be284fb8a9c2557806eb5a73fdc3b1",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/ed6e5e9ab840f5e358101ba915b0915c695da8": "37c935d58cdb1bab069654e88c0a88c3",
".git/objects/7e/69d09ad41d98aad31298657ff89eb7b96843c8": "a4dfc924a4c99d5c836caec64f426b6a",
".git/objects/7f/a26d8be0a7aa516db3c78c0bcaa992f97b0bf2": "ac8faf89fa208c0212a507ffdf08c40d",
".git/objects/84/85fa31049071763769158be9dd3fe59bc7b11d": "b28e8af6f539fb101fab70d1e11004b1",
".git/objects/88/5ada09b6a9ea4ae767638fb7668d003d71b334": "8924bafb50c7b7f9cbaa138c717ce187",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/212512f347ab0aca1e226dbf88e9ecb67ad01b": "fd57c54134b9c534a358e060477ab24a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/1bfab53b7f7722dca84a0c58bd34de3dd19eda": "9ee273e8cb1a2fed446167cbcccb4642",
".git/objects/8d/24d46b8b56abb1a762a1ea66b2e67793a5b172": "a19cbc976a705582f3bf5388f1a79844",
".git/objects/8e/39002643ca2f7652930cd39e66b7641b366d2b": "b886e822e9b2fbb3f8fab96a8536c14e",
".git/objects/8e/65594d624a7feb9958a6534920cb942baae49b": "87dd22bf33d102151be83755656c17b2",
".git/objects/91/a11bbd917c65eb926101ac35ddacbcd2f970fa": "59c7af8ce150f4e38d8f434445c5ed3c",
".git/objects/92/06cda6f324575d286432ee26e3ff4e037a8c94": "114740718119a163c17aa2b16e220e51",
".git/objects/92/c3252877a2b0da5016ca75d68d390018ccdab7": "7e97b2db34723f68f10f0a63c88213b3",
".git/objects/94/06a3b0091b475ba0c19562af9d59e57b5a2c13": "a73efcd7086cd5be4b196e2a62e1531f",
".git/objects/94/11597b6f702bcca5ac5c17a3fa60cc2ab678f5": "7af0c96a7b39f7b52179da804bca8113",
".git/objects/95/803b5a7e328c8ddec3c7377d8d66911b1c217e": "99d1116b52e7d134b9c105473df25741",
".git/objects/96/1b8ceb958c174871c047708a38be6cd361de69": "e5f654dde3d68a24b83880eb0f541026",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/6dec36d73b3ec54e6bc051e0d999ac76cfb1f3": "f62cb75cd3c0a86da53243ff2a968e15",
".git/objects/9a/6ad9e89b6519ae36240cbf168d0eef1eb41b22": "8af02f866272606cc8f73a2a5ca4111c",
".git/objects/9b/771939dccf6aeea5301891dee7d1555989258e": "d45ec050b7ce40b5e310fe87157cbb88",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/9d/4ad5ca0fc95cbed10a90a47cb28bead0e1578d": "92fcdd7855afaa867dc54f6cb7b68a47",
".git/objects/9d/d1905d9a7a542b51dbea86151eb0f2328e9727": "308b82d04ea7fe782cb94cb7e217b469",
".git/objects/a0/5e55d075ae7464f2367926e303e18f1cee46f6": "1164b4df79eed82ae935983d72ea5518",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/16728064f9adc46ed8b72506a6b1f4c25cffb0": "b1530e160dd3d4c5221d86bf9a818932",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/bad79a1e67efc0ad18a7ce11c2985112203f8d": "9f00edc7d13839c4db20ca493c61cfe0",
".git/objects/a8/4ec0255eac0f77909e4b74c48df7730fa8a2de": "2671c0496c15be818a17899e5607c735",
".git/objects/a8/ace09c8a8b020e14c9f914fe3c5263a3ce5f45": "b91d176eaa89d1ff45611bd042eff549",
".git/objects/a9/10c82f21df35177dc46da0d74a28c91d82e394": "eb383c8ab27e14a5df5e46ae3b089cf6",
".git/objects/a9/d5676e7a382710d6814acd22d53f0fb6fc200b": "da65744babd3b0e9cbe9c3080e0ee04d",
".git/objects/ad/3343087b5b7f41df5aaafd4a08d38ae110ce4c": "791339da4dcfed1ffa06c5c1b7d131ec",
".git/objects/ad/3f9f18f704582ec20124bbc1a8052a6d3f9d22": "4ece65644f9b93c2445f9a833b683894",
".git/objects/ad/fbaa8ce86591a02f967d9175b6243a298b710f": "e1922923c45ea5a2063e352d5a860ff1",
".git/objects/b2/c388d510aa0d84ed154968825d9ae664238f89": "7363ea9d4ae5cdb359f624bb29470aee",
".git/objects/b3/9d8032632f9888ab0d3712a594b9fb7a62fb61": "f800991a2425e212b56e5e8ae937827e",
".git/objects/b7/27a4645c981487ffb767bd4194f02934ec99c6": "68236c53fbce543d986968a550cc6d6a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/8476cc2da6b9bd2da1e9cc9ee0835bd4baf4a7": "759079bed4edb7e16d840248e0437487",
".git/objects/b8/ad9cd3eb2efee6ba8244e6eeb66d86b093fdfe": "6d27438fe7be6ce4066756b7c6b2bd2b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3f74a7c466f08e2995436cf6c4a61efb2d5973": "3bc67273521da0652cfca60d3ece6330",
".git/objects/b9/5022799592ef3e263f034532400daa10d397ed": "a15cd38475175967a85c96784c300575",
".git/objects/b9/f74925bd9c144a238dbff87b43f476b84540da": "a5581c8c8775fc947375dbc1d5d75bc0",
".git/objects/ba/36faa5f0cd467f329b95d924fec5f2de62c51f": "7200d999dfa3839b515284a301d3bb3b",
".git/objects/bc/3a78cf22d3a44b2cf6dec1e4c5cf2ec9913705": "e5fc7e27be2237052f68f1bf88f333bc",
".git/objects/bd/d46b89faebb2d802295bcf0f6b75be527f56d5": "ac0ff3b50f4044c2df4c1524d5d3ac96",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/bf/82c0a65e7368405e9c67b1ba339cc568f9daa6": "6900f9c0f41185f5c0d14ab829a172e6",
".git/objects/c2/1751d7c5b321eac90027f3ecb85ae45b209ba3": "559e69ced39e82f51ac275a7a7c4775a",
".git/objects/c2/4bd23385e23c00f3b0b5501db5b5b6c9e97715": "78b00d843921e0aab3ccd846e5425e34",
".git/objects/c4/b1cbe0787949e081f43bd557cf40958c9eca0e": "ee72b1c2e55c40c382d93a6fda487186",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c6/1f1214fa58d019f895c2be87ac2a8f3e3346df": "0125369671541014fdb91ce165d1cf47",
".git/objects/c7/5ef35e97a67f5bd2f07b22cd4d9dd951c4b733": "f9a7b00352c9573f6da808d4bff8f021",
".git/objects/c8/4cacb81bb54653c527d8a2335fdf7670538c82": "d6fe454628ba0a828526e92875759dce",
".git/objects/c9/64f6979f2a7d30fb0d5c4bcd0d15f877495116": "aa94c4284b67b974c5ad40b7ade96804",
".git/objects/ca/b886d254ab66fc9735789640878b10b0d81401": "5f8e3109839f8f8e0c72617427d7587c",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/6df2ab00db6011a3ee720d639f08773c2a8615": "ec431d5ef914f868a1f709de470afc2a",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/948484abb2a5ee541da0e977c71c419bf65f8b": "12c20d7ea00616f596b35a118d94ff3c",
".git/objects/d3/7b856b0cb092c1f950fb3d0870b22e79f8f23e": "e76f166b61fff037eb1be131428a7863",
".git/objects/d3/a18df93a504ced02a52f5ce6c534b2bb72ccff": "dae0cee9272feb2cd22ff899bc642639",
".git/objects/d4/671d1d5f9997e5660da9b2313c442cf22b7653": "7852a6c1817f5638a345018b93214bde",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fcd94c04e5ab948e70a26dacbe58bb5f21dbe5": "331def338cb5c13b88d8ba37f60d4852",
".git/objects/db/9f036217402bc5b4f37a9a28e1b33c2ffa1eaa": "2ca79a1e280ef4ea428b5976812435ef",
".git/objects/dc/cf9ede2ba0dac533b011f27ee42f5033dab64d": "7ad459ec6b5fa3c5e743c611b8f1d67e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/04fbd17514c50e69687dc280dd4d8d006d4de7": "259599ca4812814ff0d476b2b3d21ca3",
".git/objects/e5/5297a550f2bb54c45f79ea38cf7f205824214b": "f566ffb3222e8735caace34189481a9a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/ad043f7a1c67acc54271cc0b8579612d6cd35b": "ae0bfe17c8849279a7951c47d787e50f",
".git/objects/e6/d701d2b06e1758093dfea3be6ff780d62f9fd4": "02f67b7de35b3214a39ae530b19cab6d",
".git/objects/e7/50384df10c329a9893610f7a319bc5035ce928": "3b9beded9c642e1d5e4e543b63dbdb9c",
".git/objects/e7/573adc0b324fe7d2c651aa4e107cbe596891d8": "11bcda5a94fb0548dd5c44fd32d61e1e",
".git/objects/e8/a5400e693ccda80ba3692b8b23fad3331d77aa": "9905a2b8ccd03a97628dbb1c2cd4f620",
".git/objects/e9/362a5e236480aaf1911369a97311336c68eda4": "0ede3ddeaab19e088b6ffb9c9c8091bd",
".git/objects/ea/4d4bb203a8178bcafd31c3ccec56a1d20a6d24": "b01c9f60f3e973a73baa8dfd37356f82",
".git/objects/ea/7f623d5acfb36d4a2944ec4db90c4e7f394687": "3733fbb29629439e8d2829ca9610438a",
".git/objects/ea/cac8feff7c1341be8ae9518d79c53ab0753278": "4d9545ff0f2f0f74ddff4c8ed05067d4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/c9eb69a7c1e68f81d9a428ca9ecc626a8fc226": "f0814b3f4a10c9f98d399e286e6a24b7",
".git/objects/ed/9f44e3a5fa5cb38d5e319fa976eb8bff6feb21": "56d609d7748e0a368342875d910ceb8e",
".git/objects/f2/88981340dfe31e7f1da4b3fac8cdce27bdfbca": "0d40649225274eb9be59beb2772de4c4",
".git/objects/f5/3ad42afb5daea83ea89d3a101a81f48d03a45b": "5b7bd475d31dd59bd54d30c33c2aa7cb",
".git/objects/f5/4926ff146536f18bfcf9ae73429cad43ea8d19": "58eeda700f73d3ebc609a041ada66f11",
".git/objects/f6/71a09fd023212e1ae2cf40721adacc7c7f0bb9": "b0c43505880c1d0e66e5e494a20ee546",
".git/objects/f7/58a8dd50110f4414eee4f111fb73283e74dd80": "76b20234875d27d222f6f534fbfe9d13",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/objects/fc/90d0cd12c4441c37eaf51c8722108e91db780a": "133bd4a7b2eae94db00cbb572f8cdae4",
".git/objects/fe/96e5ec00f7548f3f4fda1d6aa2a8fae75fd01f": "5ca8f6c2ef13482e69c241cb4fcc4cbe",
".git/refs/heads/main": "ac510a707a81b748e2e9e674f258f536",
".git/refs/remotes/origin/main": "ac510a707a81b748e2e9e674f258f536",
"assets/AssetManifest.json": "dca89ad55ca705c9e1b584dac43e4758",
"assets/assets/background.png": "770d36ea54547fec24532bdb35707cda",
"assets/assets/background.svg": "6a0f73ee7e85720d64d1f485ba8b95df",
"assets/assets/circle.png": "f29db2a209f4355b3cf948129fd7802d",
"assets/assets/headset.png": "2df646408a0a779b1d8bc23050768340",
"assets/assets/instagram.svg": "e1cdb7a60905aaff45d6ca9e8f0aeaa4",
"assets/assets/logo.png": "e22438b9a001dccfe5c2b70e5a7a0348",
"assets/assets/logo.svg": "560127908f097d5081d36ac0e4bcc9c5",
"assets/assets/logos.svg": "3ef5b1ea404b3e17d1c05cdd95d22064",
"assets/assets/music_note.png": "e9309a5d3337e1d9f86f7fbe0d19f7de",
"assets/assets/png_background.png": "e005953e2261362301ab808fcdbcf9fc",
"assets/assets/png_backgrounds.png": "9964c50ebe53df18afc397392493fde4",
"assets/assets/square.png": "b0c6db1baa8d37e3657327327f2adb76",
"assets/assets/tick.png": "28a336454169ce5e7fd1980eadeb43df",
"assets/assets/tick.svg": "654f30a62845de441ca77c0afc2a6824",
"assets/assets/user_data.png": "56dd57bf67515ab77bf9e3eb613f0fa4",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f7188ee01e53bf9c2c1707922d01578a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d89ccd13a1baee9b4940b3e4a16c55a1",
"/": "d89ccd13a1baee9b4940b3e4a16c55a1",
"main.dart.js": "69b39780a26df7bdf232e51034716891",
"manifest.json": "563b629cd8ca98d30bbfd3322e8f6ecd",
"version.json": "1d5b04348106fc84f367b73659b38047"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
