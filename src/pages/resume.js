import React from 'react'
import './resume.css'
import SEO from '../components/seo'

const resume = () => (
  <div>
    <SEO title="resume"/>
    <div className='content'>
      <h1 className="header_one">
        Carlo Mazzaferro
        <small>A Résumé of Sorts</small>
      </h1>
      <h3>Synopsis</h3>
      <div className='synopsis'>
        <span className='title'>
          Technologist working where data, machine learning, engineering and design meet.
        </span>
      </div>

      <h3 className="header_three">Career History</h3>

      <div className='position'>
        <span className='title'>Machine Learning Engineer - ByteCubed</span>
        <span className='time-period'>November 2018 to Present</span>
      </div>

      <div className='position'>
        <span className='title'>Junior Data Scientist - ByteCubed</span>
        <span className='time-period'>August 2017 to November 2018</span>
      </div>

      <div className='position'>
        <span className='title'>Data Science Intern - ByteCubed</span>
        <span className='time-period'>June 2017 to August 2017</span>
      </div>

      <div className='position'>
        <span
          className='title'>Software Engineering Co-op - Center for Computational Biology and Bioinformatics, UCSD</span>
        <span className='time-period'>February 2016 to June 2017</span>
      </div>

      <h3 className="header_three">Internships</h3>

      <div className='internship'>
        <span className='title'>Application Developer Intern - UCSD Medical </span>
        <span className='time-period'>June 2015 to October 2015</span>
      </div>

      <div className='internship'>
        <span className='title'>Data Analysis Intern - The Scripps Research Institute (TSRI)</span>
        <span className='time-period'>June 2014 to October 2014</span>
      </div>

      <h3 className="header_three">Education</h3>

      <div className='education'>
        <span className='title'>University of California, San Diego</span>
        <span className='supplemental'>Bachelor of Biomedical Engineering</span>
        <span className='time-period'>2012-2017</span>
      </div>

      <h3 className="header_three">Conferences</h3>
      <div className='conferences'>
        <span className='title'>PyData, Washington DC Oct 2018</span>
        <a href={'https://pydata.org/dc2018/schedule/presentation/10/'}>
          <span className='supplemental'>RESTful Machine Learning with Flask and TensorFlow Serving</span>
        </a>
      </div>

      <h3 className="header_three">Publications</h3>

      <div className='publications'>
        <a href={'https://github.com/ucsd-ccbb/VAPr'}>
          <span className='title'> Effortless variant analysis in Python with VAPr</span>
        </a>
        <span className='supplemental'>Oxford Journals of Bioinformatics</span>
        <span className='time-period'>Apr 2018</span>
      </div>
      <div className='publications'>
        <a href={'http://biorxiv.org/content/early/2017/04/18/128223'}>
          <span className='title'>Predicting Protein Binding Affinity With Word Embeddings And Recurrent Neural Networks</span>
        </a>
        <span className='supplemental'> Biorxiv. Pre-print.</span>
        <span className='time-period'>Submitted Mar 2017</span>
      </div>
    </div>
  </div>
)

export default resume
