import { blurbs } from './articles'

export const maxArticles = blurbs.length

export const sortedBlurbs = count => (
  blurbs.sort((a, b) => a.createdAt - b.createdAt).reverse().slice(0, count)
)
