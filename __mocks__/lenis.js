// Jest can't transform Lenis's ESM build inside node_modules, and smooth
// scroll is irrelevant in jsdom — this stub stands in during tests.
export default class Lenis {
  raf() {}

  scrollTo() {}

  destroy() {}
}
