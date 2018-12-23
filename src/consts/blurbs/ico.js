import { D3Icon, NumpyIcon, OpenCVIcon, PltIcon, PythonLangIcon, RLangIcon, TfIcon } from '../../images'
import React from 'react'

let icos = {
  numpy: { id: 1, i: <NumpyIcon/>, href: 'http://www.numpy.org/', name: 'numpy' },
  python: { id: 2, i: <PythonLangIcon/>, href: 'http://www.numpy.org/', name: 'numpy' },
  opencv: { id: 3, i: <OpenCVIcon/>, href: 'https://www.r-project.org/', name: 'opencv' },
  matplotlib: { id: 4, i: <PltIcon/>, href: 'https://matplotlib.org//', name: 'matplotlib' },
  r: { id: 4, i: <RLangIcon/>, href: 'https://www.r-project.org/', name: 'react' },
  d3: { id: 5, i: <D3Icon/>, href: 'https://d3js.org/', name: 'd3' },
  tensorflow: { id: 6, i: <TfIcon/>, href: 'https://www.tensorflow.org/', name: 'tensorflow' },

}

export default icos
