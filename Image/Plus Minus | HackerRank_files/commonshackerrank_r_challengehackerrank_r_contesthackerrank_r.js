(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9WS3":function(e,t,a){"use strict";var r=a("pVnL"),i=a.n(r),s=a("QILm"),o=a.n(s),l=a("lSNA"),n=a.n(l),c=a("cDcd"),p=a.n(c),d=a("17x9"),u=a.n(d),m=a("/MKj"),h=a("ANjH"),f=a("OEX3"),g=a("fe33"),b=a("iGQG"),E=a("5J+W");class N extends c.Component{constructor(){super(),n()(this,"state",void 0),n()(this,"toggleFollow",()=>{const e=this.props,t=e.profile,a=e.user,r=e.profileActions,i=e.appUtil.isAuthRequired;t.username?(this.setState({toggleFollowOngoing:!0}),r.toggleFollow({username:t.username,followable_id:a.id,followable_username:a.username}).then(()=>{this.setState({toggleFollowOngoing:!1})})):i({type:"info",data:"Please signup or login to perform this action."})}),this.state={toggleFollowOngoing:!1}}render(){const e=this.props,t=e.className,a=e.user,r=(e.metadata,e.dispatch,e.appUtil,e.abTest,e.profileActions,e.profile,o()(e,["className","user","metadata","dispatch","appUtil","abTest","profileActions","profile"])),s=a.is_following,l=this.state.toggleFollowOngoing,n=s?"Unfollow":"Follow";return p.a.createElement(f.d,i()({disabled:!!l,loading:l,onClick:this.toggleFollow,className:t,"data-attr2":n},r),n)}}n()(N,"propTypes",{profileActions:u.a.object.isRequired,profile:u.a.object.isRequired,user:u.a.object.isRequired,abTest:u.a.object.isRequired,appUtil:u.a.object.isRequired});N=Object(m.c)(e=>({profile:e.community.profile}),e=>({profileActions:Object(h.b)(g.a,e)}))(N),N=Object(b.b)(N),N=Object(E.a)(N),t.a=N},"c/vF":function(e,t,a){"use strict";var r=a("pVnL"),i=a.n(r),s=a("cDcd"),o=a.n(s),l=a("17x9"),n=a.n(l),c=a("TSYQ"),p=a.n(c),d=a("5J+W");let u=e=>{const t=e.country,a=e.appUtil.getCountryFlag,r=e.className,s=e.disableTooltip,l=e.tooltipPos,n=e.tooltipText,c=!s&&{"data-balloon":n||t,"data-balloon-pos":l||"up"};return o.a.createElement("span",i()({},c,{className:"flag-tooltip"}),o.a.createElement("img",{className:p()(r),src:a(t),alt:"flag of "+t}))};u.propTypes={country:n.a.string,appUtil:n.a.object.isRequired,disableTooltip:n.a.bool,tooltipPos:n.a.string,tooltipText:n.a.string,className:n.a.string};u=Object(d.a)(u),t.a=u},g2Lf:function(e,t,a){},saer:function(e,t,a){"use strict";var r=a("MVZn"),i=a.n(r),s=a("pVnL"),o=a.n(s),l=a("QILm"),n=a.n(l),c=a("lSNA"),p=a.n(c),d=a("cDcd"),u=a.n(d),m=a("17x9"),h=a.n(m),f=a("/MKj"),g=a("ANjH"),b=a("MGin"),E=a("oBtd"),N=a("5J+W"),w=a("eOGF"),v=a("fe33"),j=a("foLx"),A=a("61np"),y=a("9WS3"),F=a("6fer"),R=a("oXWk"),q=a("c/vF");a("g2Lf");class P extends d.Component{constructor(){super(...arguments),p()(this,"handlePopupOpen",()=>{const e=this.props,t=e.profileActions,a=e.user.username,r=e.isFetchRequired,i=e.analyticsAttributes;r&&t.loadProfile({username:a},!1).then(()=>{t.fetchScores({username:a},!1)}),E.a.track("Hover","ProfileCard",i)}),p()(this,"renderItem",e=>void 0!==e?e:u.a.createElement(R.a,{height:"18px"})),p()(this,"renderAvatar",()=>{const e=this.props.userProfile,t=e.name,a=e.avatar;return u.a.createElement("div",{className:"mlT profile-card-avatar d-block"},a&&t?u.a.createElement(j.a,{name:t,size:100,avatar:a}):u.a.createElement(R.a,{width:"100px",height:"100px",shape:"circle"}))}),p()(this,"renderAvatarWithFlag",()=>{const e=this.props.userProfile,t=e.username,a=e.country;return u.a.createElement("div",{className:"card-half"},u.a.createElement(b.Link,{to:"/profile/"+t,target:"_blank"},this.renderAvatar(),u.a.createElement(q.a,{country:a})))}),p()(this,"renderDetails",()=>{const e=this.props.userProfile,t=e.name,a=e.school,r=e.company,i=e.username,s=e.country;return u.a.createElement("div",{className:"card-half msR"},u.a.createElement("h1",{className:"profile-card-name"},u.a.createElement(b.Link,{to:"/profile/"+i,target:"_blank",className:"profile-link"},this.renderItem(t)||i)),u.a.createElement("ul",{className:"list-none"},u.a.createElement("li",{className:"d-flex profile-card-school"},!!a&&u.a.createElement("i",{className:"ui-icon-graduation card-details-icon"})," ",this.renderItem(a)),u.a.createElement("li",{className:"d-flex profile-card-company"},!!r&&u.a.createElement("i",{className:"ui-icon-employment card-details-icon"})," ",this.renderItem(r)),!a&&!r&&u.a.createElement("li",{className:"d-flex profile-card-country"},!!s&&u.a.createElement("i",{className:"ui-icon-location card-details-icon"})," ",this.renderItem(s))))}),p()(this,"renderFollow",()=>{const e=this.props,t=e.userProfile.followers_count,a=e.userProfile,r=e.analyticsAttributes,i=t?t+" Followers":"Be first to follow";return u.a.createElement("div",{className:"card-half"},a?u.a.createElement(y.a,{className:"follow-btn",user:a,"data-analytics":"hrFollowButton","data-attr1":r.attribute1}):u.a.createElement(R.a,{height:"40px"}),u.a.createElement("p",{className:"profile-card-followers"},void 0!==t?i:u.a.createElement(R.a,{height:"18px"})))}),p()(this,"renderMedals",()=>{const e=this.props.userProfile.scores;return u.a.createElement("div",{className:"card-half msR"},e?u.a.createElement(F.a,{scores:e}):u.a.createElement(R.a,{height:"31px"}))}),p()(this,"renderProfileContent",()=>u.a.createElement("div",{className:"theme-m profile-card-container"},u.a.createElement("div",{className:"d-flex"},this.renderAvatarWithFlag(),this.renderDetails()),u.a.createElement("div",{className:"d-flex align-items-center"},this.renderFollow(),this.renderMedals())))}render(){const e=this.props,t=e.children,a=(e.user,e.userProfile),r=(e.metadata,e.dispatch,e.appUtil,e.profileActions,e.isFetchRequired,e.analyticsAttributes,n()(e,["children","user","userProfile","metadata","dispatch","appUtil","profileActions","isFetchRequired","analyticsAttributes"]));return Object(w.C)(a)?t:u.a.createElement(A.a,o()({content:this.renderProfileContent,variant:"light",onTooltipOpen:this.handlePopupOpen,delay:800,align:"top-left"},r),t)}}p()(P,"propTypes",{profileActions:h.a.object.isRequired,user:h.a.object.isRequired,appUtil:h.a.object.isRequired,userProfile:h.a.object.isRequired,isFetchRequired:h.a.bool.isRequired,analyticsAttributes:h.a.shape({attribute1:h.a.string.isRequired,attribute2:h.a.string.isRequired,attribute3:h.a.string,attribute4:h.a.string}).isRequired});P=Object(f.c)((e,t)=>{const a=e.community.viewProfiles,r=t.user.username,s=t.user,o=Object(w.w)(a,r),l=void 0===o;return{userProfile:i()({},s,o),isFetchRequired:l}},e=>({profileActions:Object(g.b)(v.a,e)}))(P),P=Object(N.a)(P),t.a=P}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/commons~hackerrank_r_challenge~hackerrank_r_contest~hackerrank_r_forum~hackerrank_r_leaderboard~hack~480eafbe-322b5b39.js.map