(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{F63q:function(e,t,a){},HeyA:function(e,t,a){"use strict";a.r(t);var c=a("pVnL"),n=a.n(c),o=a("QILm"),l=a.n(o),r=a("cDcd"),i=a.n(r),s=a("MGin"),d=a("TSYQ"),u=a.n(d),m=a("YZNL"),b=a("OEX3"),p=a("eOGF"),j=a("aJtI");a("JszF");function f(e){const t=e.fullWidth,a=e.query,c=void 0===a?{}:a,o=e.prefetchProps,r=l()(e,["fullWidth","query","prefetchProps"]),d=Object(p.a)("/jobs/search",c);return i.a.createElement(j.a,n()({url:d},o),i.a.createElement(s.Link,n()({to:d,className:u()("job-promo-card",{"full-width":t}),"data-analytics":"ViewJob","data-attr1":"All","data-event-category":"HRC Jobs","data-event-label":"ViewAllJobs"},r),i.a.createElement(m.a,{layer:1,active:!0},i.a.createElement("div",null,i.a.createElement("h2",{className:"job-promo-card-title"},"Find Your Dream Job"),i.a.createElement("p",{className:"job-promo-card-text"},"Update your profile and apply to multiple companies.")),i.a.createElement(b.f,null,"View All Jobs"))))}f.defaultProps={prefetchProps:{}},t.default=f},JszF:function(e,t,a){},aVRc:function(e,t,a){},cSw4:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return m})),a.d(t,"b",(function(){return p}));a("rGqo");var c=a("peh1"),n=a("eOGF"),o=a("WWVs");const l=e=>e.community.jobs,r=Object(c.createSelector)([l],e=>Object.values(e.companies)),i=Object(c.createSelector)([(e,t)=>t.appUtil.location],e=>Object(n.t)(e)),s=Object(c.createSelector)([l],e=>e.list),d=Object(c.createSelector)([l],e=>e.filtered),u=Object(c.createSelector)([d,i],(e,t)=>{const a=t||{},c=a.role,n=a.zones;return e[JSON.stringify({role:c,zones:n})]}),m=()=>Object(c.createSelector)([s,u,o.h],(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.total,c=t.list,n=arguments.length>2?arguments[2]:void 0;return{total:a,jobs:(c||[]).map(t=>e[t]),triedAllSkillsVerificationTests:n}})),b=e=>Object(c.createSelector)([l],t=>{let a=t.recommended;return{jobIds:(a[e]||{}).list,didInvalidate:a.didInvalidate}}),p=e=>Object(c.createSelector)([s,b(e)],(e,t)=>{let a=t.jobIds,c=t.didInvalidate;return{jobs:a?a.map(t=>e[t]):null,didInvalidate:c}})},goSp:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var c=a("MVZn"),n=a.n(c),o=a("cDcd"),l=a.n(o),r=a("MGin"),i=a("YZNL"),s=a("eOGF"),d=a("aJtI"),u=a("5J+W"),m=a("WrgV"),b=a("9dg8"),p=a("xaeT");a("aVRc");function j(e){const t=e.active,a=void 0!==t&&t,c=e.job,n=e.job,o=n.title,r=n.company_name,s=n.company_new_logo,d=n.company_background_color,u=e.children,j=Object(p.l)(c),f=Object(p.j)(c);return l.a.createElement(i.a,{layer:1,active:a},l.a.createElement("div",{className:"job-card-logo-wrapper",style:{backgroundColor:d}},l.a.createElement("img",{className:"job-card-logo",src:s,alt:r+"'s logo"})),l.a.createElement("div",{className:"job-card-content"},l.a.createElement("h2",{className:"job-card-title"},o),l.a.createElement("span",{className:"job-card-company-name"},l.a.createElement("i",{className:"ui-icon-building"}),r),l.a.createElement("ul",{className:"job-card-detail"},l.a.createElement("li",{className:"job-card-field"},l.a.createElement(m.a,null),j),f&&l.a.createElement("li",{className:"job-card-field","data-automation":"experience-label"},l.a.createElement(b.a,null),f)),u))}t.b=Object(u.a)((function(e){const t=e.job,a=e.job,c=a.unique_id,o=a.company_slug,i=e.position,u=e.query,m=void 0===u?{}:u,b=e.prefetchProps,p=e.appUtil.location,f=Object(s.a)(`/companies/${o}/jobs/${c}`,n()({},p.query,m)),v=n()({url:f,shouldPrefetch:!1},b);return l.a.createElement(d.a,v,l.a.createElement(r.Link,{to:f,className:"job-card","data-analytics":"ViewJob","data-attr1":c,"data-attr8":i,"data-event-category":"HRC Jobs","data-event-label":"JobCard","data-cd-card-position":i,"data-cd-company-slug":o,"data-cd-job-unique-id":c},l.a.createElement(j,{job:t,active:!0})))}))}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/commons~hackerrank_r_dashboard~hackerrank_r_jobs~hackerrank_r_skills_verification~hackerrank_r_skill~d7f2654f-b06b10d7.js.map