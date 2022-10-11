export function getImageUrl(type: string, name: string) {
  return new URL(`../assets/img/${type}/${name}.png`, import.meta.url).href
}
export function getImageUrlWithPath(path: string, name: string) {
  return new URL(`/assets/img/${path}/${name}.png`, import.meta.url).href
}
export function getImageUrlSvg(type: string, name: string, oneMoreLvl?: boolean): string {
  if (oneMoreLvl) { return import.meta.env.DEV ? `../../assets/img/${type}/${name}.svg` : `../assets/img/${type}/${name}.svg?url` } else { return import.meta.env.DEV ? `/assets/img/${type}/${name}.svg` : `/assets/img/${type}/${name}.svg?url` }
}


