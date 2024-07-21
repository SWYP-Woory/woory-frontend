if (!self.define) {
  let e,
    a = {};
  const i = (i, f) => (
    (i = new URL(i + '.js', f).href),
    a[i] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = a), document.head.appendChild(e);
        } else (e = i), importScripts(i), a();
      }).then(() => {
        let e = a[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (f, s) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (a[c]) return;
    let t = {};
    const d = (e) => i(e, c),
      n = { module: { uri: c }, exports: t, require: d };
    a[c] = Promise.all(f.map((e) => n[e] || d(e))).then((e) => (s(...e), t));
  };
}
define(['./workbox-e9849328'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/app-build-manifest.json', revision: 'aef6bec0ca68facffda4a55da83fd726' },
        { url: '/_next/static/VUZ6JkUZ9r1le301oWUfF/_buildManifest.js', revision: '9b8d10413205eeb2c54fe8eea15d6e01' },
        { url: '/_next/static/VUZ6JkUZ9r1le301oWUfF/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/_next/static/chunks/1228-0a99fdb3f4075730.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/2996-e64877893d425827.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/3009-93ad080c6b6b9d21.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/3104-c5b25e6eeed097c2.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/3417-772554ee27c3d741.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/4590-f5cdcf9040884f7c.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/5165.7ead2bab6eee1812.js', revision: '7ead2bab6eee1812' },
        { url: '/_next/static/chunks/6238-eaf04e8e1bab6a50.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/6615-7b04e1e4252c5ef9.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/7904-2f29fb5500bdadf8.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/7d68f5e9-76f68fb44c3f6d1b.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/8425-ecb9f14aabe140c8.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/853-edb8a2e70f596d4d.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/9454-093e1df992a294e9.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/favorites/page-936337d79c0cdab5.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/home/calendar/%5Bmonth%5D/page-29149b18476b382b.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/home/daily/%5Bday%5D/page-280d28f903632775.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/layout-12331feda1d06872.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/members/page-793c0bc162c161c4.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/@modal/(.)account-deletion/page-839be5e316bc185c.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/@modal/(.)family-select/page-1a7cf5b03ed1d145.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/@modal/(.)privacy-policy/page-dfb568fa84a318d1.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/@modal/(.)service-inquiry/page-b0bae39d59146e8d.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/@modal/(.)terms-of-use/page-fe186517842fc114.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/@modal/default-ef21b843936bd81b.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/account-deletion/page-d61405aefbf34f1e.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/family-select/page-73416ff841c57668.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/layout-8cb3cca5d53db9c6.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/page-d7441a731669f28f.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/privacy-policy/page-ef0834d3036974a2.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/service-inquiry/page-90f6090922f3c7f1.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(main)/mypage/terms-of-use/page-c73f20f9a92c8fcf.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(profile)/family-edit/@modal/(.)family-delete/page-132a8e4fc631eeeb.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(profile)/family-edit/@modal/default-bcd0740b3c6de7f3.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(profile)/family-edit/family-delete/page-203bd855d43d100f.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(profile)/family-edit/layout-8ba3365fe0974fcb.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(profile)/family-edit/page-79364c6222d2bc39.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(profile)/family/page-824fe45a6bd1f1b0.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/(profile)/profile/page-3b74c3b18a678fb5.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/family-select/page-4ee72668e9b925c2.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        { url: '/_next/static/chunks/app/(afterLogin)/layout-ee29690b1df83c02.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        {
          url: '/_next/static/chunks/app/(afterLogin)/notification/page-06a1d99d496a2a2b.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/posts/%5BpostId%5D/image-modal/page-3ea621287a949dfc.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/posts/%5BpostId%5D/page-15a987a787b0acbd.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(afterLogin)/posts/page-64a027cbf9fb134d.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(beforeLogin)/@modal/(.)family-select/page-a9b73f41fbea756c.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(beforeLogin)/@modal/(.)privacy-policy/page-7cce4f3325d1b991.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(beforeLogin)/@modal/(.)terms-of-use/page-938dbcc251075733.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(beforeLogin)/@modal/default-efbb72fe43144a3d.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        { url: '/_next/static/chunks/app/(beforeLogin)/layout-5dcf1b85061d06de.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/app/(beforeLogin)/page-179eaf08faba5499.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        {
          url: '/_next/static/chunks/app/(beforeLogin)/privacy-policy/page-9b591a4d53d3e8be.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        {
          url: '/_next/static/chunks/app/(beforeLogin)/terms-of-use/page-ad52c2f63dc10775.js',
          revision: 'VUZ6JkUZ9r1le301oWUfF',
        },
        { url: '/_next/static/chunks/app/_not-found/page-a655e4487a04d700.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/app/layout-52923fa9e22d0dc1.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/app/not-found-db939621937d378f.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/framework-63a5d844a3662ade.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/main-app-bd225103d668234c.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/main-eceecd7782cb274f.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/pages/_app-9506f5b70a7b9d55.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/pages/_error-f690faab9036582f.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js', revision: '79330112775102f91e1010318bae2bd3' },
        { url: '/_next/static/chunks/webpack-8b5e4970f8d00130.js', revision: 'VUZ6JkUZ9r1le301oWUfF' },
        { url: '/_next/static/css/b6bdc0202c97f61f.css', revision: 'b6bdc0202c97f61f' },
        { url: '/_next/static/css/e43d9cf24a6824da.css', revision: 'e43d9cf24a6824da' },
        { url: '/_next/static/media/077368df55fe91f4-s.woff2', revision: '0c6a58570c07ca178d87c9e4a9d9d204' },
        { url: '/_next/static/media/08c7397d5fea555d-s.woff2', revision: 'd09f30e5b2e518a1c5cb45a1d26a465c' },
        { url: '/_next/static/media/08f557dc97ec70a9-s.woff2', revision: '777aad143a98273e5f703520f0e0ad81' },
        { url: '/_next/static/media/0b36f04c74ad3e39-s.woff2', revision: '05932ea1f535dfc02281c0f40aef65af' },
        { url: '/_next/static/media/0cf52d99f95900ad-s.woff2', revision: 'f3cf20fc7b31b6a636fec40357d19468' },
        { url: '/_next/static/media/0d1c7d6cf57f004c-s.woff2', revision: '7f705aa84a24caed67a48c4eb140e9a6' },
        { url: '/_next/static/media/0d736319924c55b9-s.woff2', revision: '62bf709e6d594b89df26594525653ca2' },
        { url: '/_next/static/media/0e0bb23f264956dd-s.woff2', revision: '0d64ff36f5c76c0a56139d403d9770e4' },
        { url: '/_next/static/media/0e11d1ba597439a4-s.woff2', revision: 'c2330df429e9ccaa06f1a288467594ab' },
        { url: '/_next/static/media/0f3c8e473c7d1a73-s.woff2', revision: 'cbacbe39a16afdd83e533e549850c608' },
        { url: '/_next/static/media/112d7e8ba1d66d26-s.woff2', revision: '1c6a8c3c4f7cf43217bd0b2a7707d255' },
        { url: '/_next/static/media/136a9fc1d3bf904c-s.woff2', revision: '5c1e2ead6e8132990fcb4ad90b046236' },
        { url: '/_next/static/media/152b6579977bacaf-s.woff2', revision: 'cf5bfec8864e3edbf0cfae7f2ed3ceb0' },
        { url: '/_next/static/media/1623fcb438a05362-s.woff2', revision: '3a902eca75ac36a595c06fbb2503c810' },
        { url: '/_next/static/media/17058390214cbd85-s.woff2', revision: '1efcdc724f7457420540ad8baa735325' },
        { url: '/_next/static/media/1aca0b31b883225e-s.woff2', revision: '19b6f06bdad9d975302515dfeed5c355' },
        { url: '/_next/static/media/23f1e6bb1b0e203c-s.woff2', revision: '8418e5367e802388f37affa086052377' },
        { url: '/_next/static/media/2436f7f15bc3ff3e-s.woff2', revision: '4039383410d1af8de8f7ba0b2edb3ce3' },
        { url: '/_next/static/media/248abbafaa3fa4d2-s.woff2', revision: '4047a58b27923991166e0970fbeda471' },
        { url: '/_next/static/media/2bd178020e434f09-s.woff2', revision: '047552294b2a7e4874dcfcaa3511718e' },
        { url: '/_next/static/media/34439db70028ab9e-s.woff2', revision: '4259d7dc3bd285a4c4b6044a5a1d16dd' },
        { url: '/_next/static/media/39ac661985b06481-s.woff2', revision: '6f829bb6253ff5ac897d6d44eaa105d3' },
        { url: '/_next/static/media/3ae2189c6709884d-s.woff2', revision: 'fdeb368d97951db978c077a8d137f9b1' },
        { url: '/_next/static/media/3c94ad760a5b31e3-s.woff2', revision: 'c6b01f2b33e8ad704e568bcedb7c1ba1' },
        { url: '/_next/static/media/3e1ff04fc5e35247-s.woff2', revision: 'ad5ba739687530457c1eee6e6b53aee4' },
        { url: '/_next/static/media/3e72417b182cfe7c-s.woff2', revision: 'ed804b78206b1c3912c33913c34f4644' },
        { url: '/_next/static/media/3fb5300461085eea-s.woff2', revision: '21e7f7a84b82ce3a3d0af3c9f41bcfe3' },
        { url: '/_next/static/media/3fdf0f034c0d628c-s.woff2', revision: '60bece55d39014cc05098a913771f51b' },
        { url: '/_next/static/media/4204520547289e8f-s.woff2', revision: 'b22d50ff74945d6879ce96e6be12776b' },
        { url: '/_next/static/media/42fb88eb6d28ea9b-s.woff2', revision: '76af838f0cd934041a433d04c6f1642b' },
        { url: '/_next/static/media/431a5a928053f06f-s.woff2', revision: 'a122836e56c55b4f5262e3b50ad702ba' },
        { url: '/_next/static/media/450bf4b105c8f86a-s.woff2', revision: '7ad72492ec7d0bd24837e8c415f6255e' },
        { url: '/_next/static/media/4618c8ef54d03fa4-s.woff2', revision: '217382e36211a9857e30a9cdfd7251bd' },
        { url: '/_next/static/media/4e330ff71d6ae865-s.woff2', revision: '72372ae68744f06c9f7f70b345268035' },
        { url: '/_next/static/media/4f2d12174ea5ff25-s.woff2', revision: 'ec8a81d898a98e8eb517bab543d90101' },
        { url: '/_next/static/media/5135d747f675d315-s.woff2', revision: '9e1e60d9bca220442489eac8a1a7d491' },
        { url: '/_next/static/media/52e0f552affb584c-s.woff2', revision: 'f3591a1bf8126b920fba3fcf2aaced84' },
        { url: '/_next/static/media/53a81453dbff9923-s.woff2', revision: '09c06a02256891c478b6f5916d098bba' },
        { url: '/_next/static/media/54605b38320ebfc8-s.woff2', revision: '7d606ad071e699b46106b8fda05251f7' },
        { url: '/_next/static/media/584510b1f78d3230-s.woff2', revision: 'b75666d928adfc0e50299db708b0e911' },
        { url: '/_next/static/media/5dead239cc21d744-s.woff2', revision: '62cecfabba4105fbc1f979e35d61f95f' },
        { url: '/_next/static/media/602b99911665cfc1-s.woff2', revision: '524f0128f0080a593823df870aa4f166' },
        { url: '/_next/static/media/609dd8505175383c-s.woff2', revision: 'aa7f174f17d91cd070538461351e2a63' },
        { url: '/_next/static/media/6181ba986e5bb628-s.woff2', revision: '816e87f68c8d35cd51fb7cea5e47660c' },
        { url: '/_next/static/media/623d01d7ec5acf66-s.woff2', revision: '508a929780476fef68ca8709f0e83fdf' },
        { url: '/_next/static/media/63267a632f120da1-s.woff2', revision: 'ae9b3021d7525dfe3c10377e77d4a916' },
        { url: '/_next/static/media/6404eba50d3e27ea-s.woff2', revision: '6fdde727d22edbc41fd58105b0fc2e94' },
        { url: '/_next/static/media/67187b44aa046303-s.woff2', revision: 'eda9fb8cf41015ef938483f324f61031' },
        { url: '/_next/static/media/68b1ee3bfe32fb36-s.woff2', revision: '579177ae8646c9b4761f55b6811a44c9' },
        { url: '/_next/static/media/6dd0729d33f087c8-s.woff2', revision: 'cb2dc03d496c4d47f2e547a1e55c2a93' },
        { url: '/_next/static/media/6de31cd3a9a203b0-s.woff2', revision: 'f0f5451c8f6714b948ce3b7699689d2f' },
        { url: '/_next/static/media/70db7f798086a1d2-s.woff2', revision: '8ccc5f970696da0ac5095d30c8aa6e83' },
        { url: '/_next/static/media/72a7fda5b0451b7f-s.woff2', revision: 'a2f5996de594faeec89e3e06e37e4bb3' },
        { url: '/_next/static/media/72e8803503b1926f-s.woff2', revision: '9ae0a4667b0c8ac0a10ba35587fb6aa2' },
        { url: '/_next/static/media/738a82c448f6b06b-s.woff2', revision: 'bd41d4d60003e1b5d5013467df65d7d6' },
        { url: '/_next/static/media/73b07eb7d04fae24-s.woff2', revision: '1b13b51ef3c332a5c89493b5d84df7a6' },
        { url: '/_next/static/media/75c1026c311bd04a-s.woff2', revision: '74d655830a43fb2c688469a4158d211e' },
        { url: '/_next/static/media/7627558653e50b07-s.woff2', revision: '805a3aa8ee1462be3bb4745ceaa667eb' },
        { url: '/_next/static/media/7ad98388e765261d-s.woff2', revision: '944969bd5624f1ee62d70e56108d91f2' },
        { url: '/_next/static/media/7b20dde41b32ac57-s.woff2', revision: '459bacd601d2a3d206c65dbffc576132' },
        { url: '/_next/static/media/7d1929e7a7e6876f-s.woff2', revision: '66ca6051228e06f151ea3136699e70e3' },
        { url: '/_next/static/media/7ee0c729381bcebe-s.woff2', revision: 'e5e6320c49f26ffa0046b0ec707e46fe' },
        { url: '/_next/static/media/8353e41003a9126f-s.woff2', revision: '65a8a8de024b09962f391905177564ec' },
        { url: '/_next/static/media/84dd75c65fa14923-s.woff2', revision: '8ac56511738d17312d1bbed993735000' },
        { url: '/_next/static/media/85fd4d0839edd1c9-s.woff2', revision: '3b18c0b22c9204cdf084f08a17490502' },
        { url: '/_next/static/media/881909c4cf5ba90d-s.woff2', revision: 'f507125082efba8350bb22291e97852b' },
        { url: '/_next/static/media/88e37f9e1fef129b-s.woff2', revision: '4e163714dc901df27afa9c81ab615b3a' },
        { url: '/_next/static/media/8986beb29c9d1214-s.woff2', revision: '54a01c3babacfc154758f45fbc261bde' },
        { url: '/_next/static/media/8c7cc31428063835-s.woff2', revision: '7d482421473e9852aeb3d6a3ff75db70' },
        { url: '/_next/static/media/8f9476b8045e0f28-s.woff2', revision: '7496252e4eb879d93cc3b0327dadc52e' },
        { url: '/_next/static/media/8faa129b2b7b2e5a-s.woff2', revision: '95dca62dcef9ea6ebd53083927a28b19' },
        { url: '/_next/static/media/90c80e6c77125fbe-s.woff2', revision: 'f384f42e8e134d3ada7019ad205d6956' },
        { url: '/_next/static/media/938189aca6cfeb3c-s.woff2', revision: '13e204397c75ceb52a6cc891169db92a' },
        { url: '/_next/static/media/947b8435931baedd-s.woff2', revision: '4017fc50e69d72826a6e5bbe4afc82d4' },
        { url: '/_next/static/media/95495e4bcbe577e7-s.woff2', revision: '61ba8ba04928e6e6c00038a392270da8' },
        { url: '/_next/static/media/95559b10cfb10ce1-s.woff2', revision: 'b9267f221fd29dba25a541fd5ebc489f' },
        { url: '/_next/static/media/9af94fa073f0dece-s.woff2', revision: '1b5fd98149c76868e1f83cbf5c195f29' },
        { url: '/_next/static/media/9beed73cf4708c9a-s.woff2', revision: '014bd0a2f3a483dc7aaa02893285bac3' },
        { url: '/_next/static/media/9db5dea353fa52ff-s.woff2', revision: 'a2dc9d993de33720cdf8d02a609870ff' },
        { url: '/_next/static/media/a29365d39f7570ff-s.woff2', revision: '23fdbbf9d5809cb51b8fdb6877ecff2c' },
        { url: '/_next/static/media/a5a9a4e91af5b8dc-s.woff2', revision: '1ba71cafea7a9bf57ebd50695ba18181' },
        { url: '/_next/static/media/a8f29b0652ae5fee-s.woff2', revision: 'f8927f8cb74a0ea8047c0cdace540bd8' },
        { url: '/_next/static/media/ac022fe8a63a3038-s.woff2', revision: 'e876db9d5749b7c5b0772dc6b46c00e8' },
        { url: '/_next/static/media/acc07c9594f52221-s.woff2', revision: '951d8621aee1a611819f1b5a8028701c' },
        { url: '/_next/static/media/b1af34f55ac245e4-s.woff2', revision: '075040eccdfa641259b6f06781e9328d' },
        { url: '/_next/static/media/b23aa3ac8e80a5fb-s.woff2', revision: 'd8f1028d236f198f10a2e1d699e0fe11' },
        { url: '/_next/static/media/b64e1a8602ac7787-s.woff2', revision: '70e803ba6c3194c24e774243a2aeea17' },
        { url: '/_next/static/media/b69f4552f4c0eb2d-s.woff2', revision: '2cd7d6684d63e81ae45b6c68a2313616' },
        { url: '/_next/static/media/b7ffeec27d9f5224-s.woff2', revision: '2cdbf5ca42c1c03804f80ef4c81f8e1c' },
        { url: '/_next/static/media/b93605453f14c527-s.woff2', revision: '62c3c146aa468ad7c090831f221cb9a8' },
        { url: '/_next/static/media/ba7081edbc1533b5-s.woff2', revision: '2dbf60cd122c75ba3057527022da9869' },
        { url: '/_next/static/media/bd42f3af16da60c0-s.woff2', revision: '5ca5092558f7b795617a95d6305af437' },
        { url: '/_next/static/media/bd7608a87c233aa4-s.woff2', revision: '1ff4442f620e319fc1aa17d64cb742ac' },
        { url: '/_next/static/media/bd7923283a6e29f1-s.woff2', revision: '50ec9006abdbebf7a501c1eadbbe3e61' },
        { url: '/_next/static/media/bdb09e879c3c6af7-s.woff2', revision: '5aaf287b94591c45216f854dc17c08ae' },
        { url: '/_next/static/media/bdb570d67aa3a3d1-s.woff2', revision: '5e2b2276f3ddc6bb4d4e534589c62cda' },
        { url: '/_next/static/media/c0f72ab4c5670f55-s.woff2', revision: '9cf3ca20f073f7bef51723a39f6153bc' },
        { url: '/_next/static/media/c15793806da00246-s.woff2', revision: '09f98f7f191e419068b7fc08c4d84075' },
        { url: '/_next/static/media/c256b843558afaf9-s.woff2', revision: 'cbf9ee93c417457f5d5c0cc1247a303f' },
        { url: '/_next/static/media/c2d2f9d5bac331a6-s.woff2', revision: '0f463e3888684d692baf911a0e3800ad' },
        { url: '/_next/static/media/c4cd5fd0ff478698-s.woff2', revision: '140dc756a005e1f3819bda3744bade85' },
        { url: '/_next/static/media/c63fe8099aad4122-s.woff2', revision: '811e8e4fda691021accb2774ab50a66d' },
        { url: '/_next/static/media/c643770c07eb14c4-s.woff2', revision: '6a4aeb80583a3f983fef6cff77053eb2' },
        { url: '/_next/static/media/c9b88a0c1ac54189-s.woff2', revision: '95161b114018478e011695f8783c6b42' },
        { url: '/_next/static/media/ca0653b1fdf659cc-s.woff2', revision: '9835fba10fa268cd978bd40473966c7d' },
        { url: '/_next/static/media/ca47e3b5f9b13dbd-s.woff2', revision: 'e8c99c1dbe7dfbe081b2be0cc48f8bc9' },
        { url: '/_next/static/media/cb6a1a14eed7bdbb-s.woff2', revision: '4a51bd84062516d686dadb952d9191e1' },
        { url: '/_next/static/media/d0376e88f6818127-s.woff2', revision: 'b822fe31d5ae7547c4cd8ed62c3bf79d' },
        { url: '/_next/static/media/d0f34e60a57f8726-s.woff2', revision: 'ff489c1ded2e401264a0ee05fdd1246d' },
        { url: '/_next/static/media/d2473846bfdd5d35-s.woff2', revision: 'd70a98f5fbfa0cc91a1e059723ad2e28' },
        { url: '/_next/static/media/d95abd2739c690ac-s.woff2', revision: '9b50eb8106fd1e612e0aa10722048771' },
        { url: '/_next/static/media/default_profile.50c8108b.png', revision: 'e221c2434d4e48957a5acdc58556a582' },
        { url: '/_next/static/media/e032c09d75cf1ddd-s.woff2', revision: '9a76a5cacdf9641598cc3c2e9e4d103d' },
        { url: '/_next/static/media/e3242f7a0e84d6bf-s.woff2', revision: 'cd3733eb9356ed0ff796e4b98bb91615' },
        { url: '/_next/static/media/e34b938da871341c-s.p.woff2', revision: '083317823ccc873f2f893d912a1e2136' },
        { url: '/_next/static/media/e38b07de852ed73d-s.woff2', revision: 'f907ccfe67e87390662d50d4092a0d27' },
        { url: '/_next/static/media/e64f5af5c8d533a7-s.woff2', revision: 'dbd28771251c3be87fecfa8ed2dfabcf' },
        { url: '/_next/static/media/f000154d45090afe-s.woff2', revision: '216edcc320c25275590f9001dec038d3' },
        { url: '/_next/static/media/f24f9be9cd06f17e-s.woff2', revision: '16b1755dd78756fae8478f6adf4b9a8b' },
        { url: '/_next/static/media/f67dd2816656b048-s.woff2', revision: '9c4cbba2dfe2fde747a91ef510fc006f' },
        { url: '/_next/static/media/f734c2a2e432c3b0-s.woff2', revision: '77df525c534aeaa4b1b4e81141e3724a' },
        { url: '/_next/static/media/fc395d708deeeb90-s.woff2', revision: '4ca8b82b3a4b40d28874aeb6c2223da8' },
        { url: '/_next/static/media/fc62488bab4fb773-s.woff2', revision: '67770319beae21032858c2e2d3505e90' },
        { url: '/_next/static/media/fd0c82bf6ed1d947-s.woff2', revision: '442a0a832e5fdec653a3b0ec9a269930' },
        { url: '/_next/static/media/ff95f73440cfe2b9-s.woff2', revision: '578ca7ad4310a18564d8f5e654590adf' },
        { url: '/_next/static/media/kakao-image.71af6a05.png', revision: '6bd17971d55f3188b2a991a03565bed0' },
        { url: '/_next/static/media/logo_woory_profile.36e7d013.png', revision: '2503d214de494efe042460ef6cb0e28f' },
        { url: '/_next/static/media/naver-image.3cb60d01.png', revision: 'bb42706626fb2ddfa6ecf78ff1622005' },
        { url: '/icon512_maskable.png', revision: '6d8a0c71d0081e71ea3e0208ea02952d' },
        { url: '/icon512_rounded.png', revision: '9da34a32c5b3fe543fde285e34bdd9b4' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: a, event: i, state: f }) =>
              a && 'opaqueredirect' === a.type
                ? new Response(a.body, { status: 200, statusText: 'OK', headers: a.headers })
                : a,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const a = e.pathname;
        return !a.startsWith('/api/auth/') && !!a.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    );
});
