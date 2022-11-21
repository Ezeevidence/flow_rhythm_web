'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
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
".git/index": "091ceae211412fc15d20d66823974dc7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f58d660c7fd9d2c3e41b96d88254ed1",
".git/logs/refs/heads/main": "66d945ba8a6b67d0469de4377126f626",
".git/logs/refs/remotes/origin/main": "80cef0936564682688a34c41d776f01b",
".git/objects/0e/3cf03ae66ab73a8e685c300822915a03f38bb6": "2883a8d5252bad6a9a835d0491d0c618",
".git/objects/13/12a6e1661a5c30548d9c5389b09d0c403246c8": "e4ab11d34e4d4c3007c11125dda2692f",
".git/objects/18/d9cff1dbaac7914af5ba855253704be0a717aa": "3a11fe91961ae76f520c5c2d60c8e1cf",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/056a2a01c6093f1000bd868cf9d3a8d8df6b1d": "e5e8bc4d02e3699655ca4f2a01e7baca",
".git/objects/1d/09c07cb6c3fb86d9ae430ea8a6236d03bf8cf5": "9286de1026430cb5bfa5ab70d3825861",
".git/objects/21/2e7938b4110145d46afb64ba60731db7ac0dd8": "0eee152505e6e29f6854345b76b64053",
".git/objects/22/db43513aadad04853713464e6555d93d8d46bb": "fd728bab3be1a1cbc0a235222861321c",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/da3e507c7c83b19f03a2ce34244f32eca66506": "8e762569fb7a02fc607d7bea4a01ed76",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/30/02556aebb7496acff09827fbdac9c97e19c191": "1e4c7c581cf4069ca6a0c98232b9e06c",
".git/objects/34/64a03bb69a8f1bbb8ed0b34dce1d4eb4a4e3fd": "d14b24b814701222ce9e8908326b047f",
".git/objects/3d/b6019534eb0610dfa026293c9cbd6a14dabfb6": "c8cca7734a121924edd58b3951917a10",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/47/818cc125f4b61ab58210edd3c06f8c437f90ba": "ce1161c7701ab241f737dc9b927be76d",
".git/objects/48/5efd25a532ce8b4e63372be52dfa95bb3c85df": "28a75202afb17d0b2b841e55a927620a",
".git/objects/4d/746ed5ba09b223c97b21e4351319dffdc60441": "68a0bc4b899604f230e7e889e2593f44",
".git/objects/4e/48f2bb8d31104b2a1c4a6ed68f7bbe91e368b2": "365cc2eadbd509c707de840338e72aa8",
".git/objects/54/12a9bb39ae4fe8264c643916ba02dcbb28c740": "09060c38d33f9909cef8d1f44715dd2e",
".git/objects/56/3de0574f74e6ce0fd2b1b3aff1fb3723e857fb": "6c858d26bbc3aec94749e65e82fa8081",
".git/objects/59/4f36d9e986df2e170e1155a24ebf50b6cb0777": "8e1e09f82794f5574ba8c00037ac1ab6",
".git/objects/5d/583e8c1dfe6d44225ac24d69ea1367ef75cbfd": "3134792e56816bdb57b8bed0986fdd26",
".git/objects/5e/827d3e410829e26d264750b05278560ac49505": "26fcbd05106acb0be4eeea0e6f800b9a",
".git/objects/61/20e532673d16e1bca57987e15bf7da544bb140": "c4af69ea04fa5c890dfb515bc0f4fccc",
".git/objects/63/de0ca6b54aa744e08e67fb650a28090bd37981": "b4d32faf892a7431397f40ede6a1eb6f",
".git/objects/71/28e318c71a3c890191035a2e2d3d11a846965f": "e571130db50f4894bffae848cfa43bbf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/91c152a3c2f3760b1b3af43e26ab6457e3b7d3": "e2be284fb8a9c2557806eb5a73fdc3b1",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/ed6e5e9ab840f5e358101ba915b0915c695da8": "37c935d58cdb1bab069654e88c0a88c3",
".git/objects/7f/a26d8be0a7aa516db3c78c0bcaa992f97b0bf2": "ac8faf89fa208c0212a507ffdf08c40d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/06cda6f324575d286432ee26e3ff4e037a8c94": "114740718119a163c17aa2b16e220e51",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/6ad9e89b6519ae36240cbf168d0eef1eb41b22": "8af02f866272606cc8f73a2a5ca4111c",
".git/objects/9d/2ad795459f75fc1b596cb086dd33726c6ff56e": "9aa1a5c07869866463f8d0b9ae522f61",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/b3/9d8032632f9888ab0d3712a594b9fb7a62fb61": "f800991a2425e212b56e5e8ae937827e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/ad9cd3eb2efee6ba8244e6eeb66d86b093fdfe": "6d27438fe7be6ce4066756b7c6b2bd2b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f74925bd9c144a238dbff87b43f476b84540da": "a5581c8c8775fc947375dbc1d5d75bc0",
".git/objects/ba/36faa5f0cd467f329b95d924fec5f2de62c51f": "7200d999dfa3839b515284a301d3bb3b",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c4/dd984f88f7ebc199bb524f8a453f17e278c5d9": "384c234614fc2c5f1ca411c66341716c",
".git/objects/c6/1f1214fa58d019f895c2be87ac2a8f3e3346df": "0125369671541014fdb91ce165d1cf47",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d3/a18df93a504ced02a52f5ce6c534b2bb72ccff": "dae0cee9272feb2cd22ff899bc642639",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/362a5e236480aaf1911369a97311336c68eda4": "0ede3ddeaab19e088b6ffb9c9c8091bd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/88981340dfe31e7f1da4b3fac8cdce27bdfbca": "0d40649225274eb9be59beb2772de4c4",
".git/objects/f8/9fc9f854f31dfa1481d31d1b19c25816da4947": "6e21873c815076cd177381687146928c",
".git/refs/heads/main": "1d927cc6ff7e977c66ed1ba230b3a3a2",
".git/refs/remotes/origin/main": "1d927cc6ff7e977c66ed1ba230b3a3a2",
"assets/AssetManifest.json": "4310a445e66cc50311a2d5d292ce6004",
"assets/assets/background.png": "770d36ea54547fec24532bdb35707cda",
"assets/assets/background.svg": "6a0f73ee7e85720d64d1f485ba8b95df",
"assets/assets/background1.svg": "d1b5bc6402c2ba70a8efd777ea94d5a3",
"assets/assets/instagram.svg": "e1cdb7a60905aaff45d6ca9e8f0aeaa4",
"assets/assets/logo.png": "e22438b9a001dccfe5c2b70e5a7a0348",
"assets/assets/logo.svg": "560127908f097d5081d36ac0e4bcc9c5",
"assets/assets/logos.svg": "3ef5b1ea404b3e17d1c05cdd95d22064",
"assets/assets/tick.png": "28a336454169ce5e7fd1980eadeb43df",
"assets/assets/tick.svg": "654f30a62845de441ca77c0afc2a6824",
"assets/assets/twitter.svg": "2e59f048a1b069278d290138c504e63a",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "31ec53a37f482dcc752af3c1a26c9775",
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
"index.html": "7fd32f906716107a75310b224dc9a430",
"/": "7fd32f906716107a75310b224dc9a430",
"main.dart.js": "41a9d883d1ff3d1a8fa0f27ee1e51149",
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
