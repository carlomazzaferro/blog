(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{127:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(159);e.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(t,e,n){var a;t.exports=(a=n(161))&&a.default||a},150:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return y}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(140),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var c=n(146),d=n.n(c);n.d(e,"PageRenderer",function(){return d.a});var l=n(30);n.d(e,"parsePath",function(){return l.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},159:function(t,e,n){"use strict";var a=n(160),r=n(0),i=n.n(r),o=n(4),s=n.n(o),u=n(180),c=n.n(u),d=n(150);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,s=t.title;return i.a.createElement(d.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=l;var p="1025518380"},160:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},161:function(t,e,n){"use strict";n.r(e);n(28);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(51),u=n(2),c=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c}}]);
//# sourceMappingURL=component---src-pages-404-js-cb3016fcdf02bc7ff475.js.map