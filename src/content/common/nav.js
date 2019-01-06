import React from 'react'
import { maxArticles, maxProjs, maxTech } from '../'

export const operationTabList = [
  {
    key: 'articles',
    tab: (
      <span>
            Articles <span style={{ fontSize: 14 }}>({maxArticles})</span>
      </span>
    ),
  },
  {
    key: 'applications',
    tab: (
      <span>
            Technologies <span style={{ fontSize: 14 }}>({maxTech})</span>
      </span>
    ),
  },
  {
    key: 'projects',
    tab: (
      <span>
            Projects <span style={{ fontSize: 14 }}>({maxProjs})</span>
      </span>
    ),
  },
]
