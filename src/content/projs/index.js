import React from 'react'
import { racket } from './racket/racket'
import { kryproflow } from './kryptoflow/kryptoflow'
import { vapr } from './VAPr/vapr'
import { mhcpreds } from './mhcPreds/mhcPreds'

export const testing = true

export const projects = [
  {
    ...racket,
    id: 1,
  },
  {
    ...kryproflow,
    id: 2,
  },
  {
    ...vapr,
    id: 3,
  },
  {
    ...mhcpreds,
    id: 4,
  },

]
