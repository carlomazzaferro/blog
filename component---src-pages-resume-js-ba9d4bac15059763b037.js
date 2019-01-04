(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(415),a(159));t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{title:"resume"}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"header_one"},"Carlo Mazzaferro",r.a.createElement("small",null,"A Résumé of Sorts")),r.a.createElement("h3",null,"Synopsis"),r.a.createElement("div",{className:"synopsis"},r.a.createElement("span",{className:"title"},"Technologist working where data, machine learning, engineering and design meet.")),r.a.createElement("h3",{className:"header_three"},"Career History"),r.a.createElement("div",{className:"position"},r.a.createElement("span",{className:"title"},"Machine Learning Engineer - ByteCubed"),r.a.createElement("span",{className:"time-period"},"November 2018 to Present")),r.a.createElement("div",{className:"position"},r.a.createElement("span",{className:"title"},"Junior Data Scientist - ByteCubed"),r.a.createElement("span",{className:"time-period"},"August 2017 to November 2018")),r.a.createElement("div",{className:"position"},r.a.createElement("span",{className:"title"},"Data Science Intern - ByteCubed"),r.a.createElement("span",{className:"time-period"},"June 2017 to August 2017")),r.a.createElement("div",{className:"position"},r.a.createElement("span",{className:"title"},"Software Engineering Co-op - Center for Computational Biology and Bioinformatics, UCSD"),r.a.createElement("span",{className:"time-period"},"February 2016 to June 2017")),r.a.createElement("h3",{className:"header_three"},"Internships"),r.a.createElement("div",{className:"internship"},r.a.createElement("span",{className:"title"},"Application Developer Intern - UCSD Medical "),r.a.createElement("span",{className:"time-period"},"June 2015 to October 2015")),r.a.createElement("div",{className:"internship"},r.a.createElement("span",{className:"title"},"Data Analysis Intern - The Scripps Research Institute (TSRI)"),r.a.createElement("span",{className:"time-period"},"June 2014 to October 2014")),r.a.createElement("h3",{className:"header_three"},"Education"),r.a.createElement("div",{className:"education"},r.a.createElement("span",{className:"title"},"University of California, San Diego"),r.a.createElement("span",{className:"supplemental"},"Bachelor of Biomedical Engineering"),r.a.createElement("span",{className:"time-period"},"2012-2017")),r.a.createElement("h3",{className:"header_three"},"Conferences"),r.a.createElement("div",{className:"conferences"},r.a.createElement("span",{className:"title"},"PyData, Washington DC Oct 2018"),r.a.createElement("a",{href:"https://pydata.org/dc2018/schedule/presentation/10/"},r.a.createElement("span",{className:"supplemental"},"RESTful Machine Learning with Flask and TensorFlow Serving"))),r.a.createElement("h3",{className:"header_three"},"Publications"),r.a.createElement("div",{className:"publications"},r.a.createElement("a",{href:"https://github.com/ucsd-ccbb/VAPr"},r.a.createElement("span",{className:"title"}," Effortless variant analysis in Python with VAPr")),r.a.createElement("span",{className:"supplemental"},"Oxford Journals of Bioinformatics"),r.a.createElement("span",{className:"time-period"},"Apr 2018")),r.a.createElement("div",{className:"publications"},r.a.createElement("a",{href:"http://biorxiv.org/content/early/2017/04/18/128223"},r.a.createElement("span",{className:"title"},"Predicting Protein Binding Affinity With Word Embeddings And Recurrent Neural Networks")),r.a.createElement("span",{className:"supplemental"}," Biorxiv. Pre-print."),r.a.createElement("span",{className:"time-period"},"Submitted Mar 2017"))))}},146:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(140),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var o=a(146),m=a.n(o);a.d(t,"PageRenderer",function(){return m.a});var u=a(30);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),s=a(4),c=a.n(s),l=a(180),o=a.n(l),m=a(150);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,c=e.title;return i.a.createElement(m.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u;var p="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},161:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(51),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},415:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-resume-js-ba9d4bac15059763b037.js.map