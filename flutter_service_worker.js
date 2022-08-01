'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0101ec394c0aab563042a4ca9e9c9294",
".git/config": "2f179f677e5b69e7410c0fddb5b72e01",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4394d59454b82a8dacb59d9c969e4f42",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "58213cd5d9294abcac1531f6cb7d5da9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee4b74735308dc80386eefcff5360533",
".git/logs/refs/heads/main": "f0412386fce4a5b2f757a812f4f69d6c",
".git/logs/refs/remotes/origin/main": "8e5eaaf2ad20e1636720e6e0aa4e2283",
".git/logs/refs/remotes/origin/master": "e0c0a9f21557c74fdb97e8a3c45e4628",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/0c/6c438519814dd7a41c0f7410ce05ad71742c7f": "37f5ae880b65604a840e421d6ed7d7f3",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1c/c765e9fd3cc045682ed2bc54a3e60352de3a66": "e66ff0eba6246a42872876466332e219",
".git/objects/1f/8f7eb658ad3653009610141ba4615ea984f07a": "82ee15c139405090b78c5a37021d7e1c",
".git/objects/24/0ac3f888c7018172ece46f68bba450878814d4": "169f2ae030933b0945b95012436696cb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/54aaffa804fefe937fa37401856c61becdf244": "eaf99a70aa40af733cebcf1e43c46377",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3b/e7676d21c422b6a4f93c2852e4d8424796a735": "7098bcf986b9b16a46d80483afe27ae2",
".git/objects/3c/96f383e4b62fad2f19075edd30302bd3018ce6": "866356346f8f912ec7b08b890906e8ff",
".git/objects/3f/1f78df28d595572aaa1979ee0bcaa08faae4f7": "10e30a59e11395cecdce729cd36970fc",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/70/a94d7d74a69aa4b6d629be7b59f240de6c7dc5": "b917fe01592938efb4498a3f20c3433b",
".git/objects/74/6cf4a79dcf60e0d5075a7f9b06d1e866f3a6b2": "5a5218ccdf9f41c0d847bbe6dd5415a4",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/58610adb80ba02e7a9fe5434122ae09f5db7ca": "99ec53c1691dbe6f394df362759f5f99",
".git/objects/84/b82038500bbc13470c702ba1faa9ef22cb353f": "91692b81377056ab7df1e52729a929d3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/c4712789d50c7deb409ea65becb9b1ac1f608f": "5bae97edb4bc3d67c4f32dcb51626240",
".git/objects/9c/beb15d19e304bce52207cd6f62c852c3ac9ebf": "968e99f21d835322a92c71dfcc275535",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/2b19440a9cb9bfa1a1f86eb80b1f8ab30061f6": "b11eeef8b0ccd520bd280672151eb607",
".git/objects/a7/e299291091e267bf3aed4005387bcb3d12c8de": "10f41ea0cda6ac5cfac38fc8eda3c087",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/e78db333f462f6713c7745664f1f009ee72724": "466c70bcc23bd78a3016c8b4cae96c58",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/549dd6a57eaefe5dbb72d519c7905254d32d5e": "a5d978134abfdc1052228b1332bd1c2b",
".git/objects/b8/020d539739fa19e5e7eecc1ea440fa2a135206": "9fbfddb9a1717df207a5a6b6216301b8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/dc6e5a7bb093c4cc5a211c9b911fc796af010e": "cf420b769ffcfcc663679709c0c6995f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fe72364f464a1d060e90f5d7046a54c8e99041": "5fd7c09d27f6fd14c7cb7f73074907e2",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e1/3fd4a5a290a753104fbde3c32d088c03f3e77d": "24a2a295085770f77460ccb8a71d0ab6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/47db1679656e44d316aa177cc9fdfa5ff0e276": "b2dffd6cb41eb554e748eb5511d25611",
".git/objects/e9/a7a0fd8f8aab9523a2adace48dad31e87d512c": "07cf46a643913821ce78b00263a026e1",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/805699190e10e219938ae12106786049700595": "f7911ae56c1099d7918b66efd943e52b",
".git/objects/f0/ca87e9fd0b32b9fee6b1b79f92ba0304e35697": "3ebb79c57cf08d993ce4511b7832f6b8",
".git/objects/pack/pack-1344d5bdaf184191836b1b1f41f33817b4859b88.idx": "3514191879a4a4fcc911e95fa75f111f",
".git/objects/pack/pack-1344d5bdaf184191836b1b1f41f33817b4859b88.pack": "d04e65f5d619eeb60330634a02443a4e",
".git/objects/pack/tmp_pack_5Y8IAr": "16588b37df9a272c9714022eb1598991",
".git/ORIG_HEAD": "7ba93bd22175da0d8830a4192c62cf95",
".git/refs/heads/main": "a1f0bffb3e184e609c572a02d6a2bdd4",
".git/refs/remotes/origin/main": "a1f0bffb3e184e609c572a02d6a2bdd4",
".git/refs/remotes/origin/master": "9b96240876fb4f00ac59355458080249",
"assets/AssetManifest.json": "f2d20d60892d9cdcc1d5ad940c445ffb",
"assets/FontManifest.json": "77a8e6744be7a1abd9c208f4cad371e5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/lib/assets/logo.png": "a4b0b8c859129c655c4a23ff468e06ee",
"assets/lib/assets/modified_avcton_logo.png": "8901fcbad5cfb8dedcf27ba50e6d56d5",
"assets/lib/assets/splash/alien_animation.json": "bc424c3750ef01362f41b94c964c82d2",
"assets/NOTICES": "7d4f06dcf83968d77cc6876b0eab82b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "be82dbd277ba67cb037557b31e55f548",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "41ffa583a517304e8fb89a274361c11b",
"/": "41ffa583a517304e8fb89a274361c11b",
"main.dart.js": "41f21f6db8abc4ee02410e14285037c0",
"manifest.json": "d6ca57350173b3ccd7074f958253fbee",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/splash.json": "bc424c3750ef01362f41b94c964c82d2",
"splash/style.css": "051d090817004f223014d935c4396f01",
"version.json": "c8f979d408e51acd1ee06f6af9b9722c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
