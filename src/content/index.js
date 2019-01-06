import { blurbs } from './blurbs/articles'
import { technologies as tech } from './tech/stack'
import { projects as proj } from './projs'

export const maxArticles = blurbs.length
export const maxTech = tech.length
export const maxProjs = proj.length

export const sortedBlurbs = count => (
  blurbs.sort((a, b) => a.createdAt - b.createdAt).reverse().slice(0, count)
)

export const technologies = tech
export const projects = proj
