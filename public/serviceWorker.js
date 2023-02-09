const CACHE_NAME = 'EnglishCards_v1'
const dynamicCache = 'dynamicCache_v1'
const urlToCache = ['index.html', 'offline.html']

self.addEventListener('install', async (event) => {
  const cacheStorege = await caches.open(CACHE_NAME)
  await cacheStorege.addAll(urlToCache)
})

self.addEventListener('fetch', (event) => {
  const { request } = event

  const url = new URL(request.url)
  // console.log('url', url)
  // console.log('request', request)

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(event.request))
  } else {
    event.respondWith(networkFirst(event.request))
  }
})

async function cacheFirst(request) {
  const cacheStorege = await caches.match(request)
  return cacheStorege ?? (await fetch(request))
}

async function networkFirst(request) {
  const cacheStorege = await caches.open(dynamicCache)
  // console.log('cacheStorege', cacheStorege);
  try {
    const res = await fetch(request)
    await cacheStorege.put(request, res.clone())
    return res
  } catch (e) {
    const cached = cacheStorege.match(request)
    return cached ?? caches.match('/offline.html')
  }
}
