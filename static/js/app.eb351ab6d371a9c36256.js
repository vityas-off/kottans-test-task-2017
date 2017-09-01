webpackJsonp([1],[,,,,,,function(e,t,r){"use strict";t.a={props:["value"],computed:{val:{get:function(){return this.value},set:function(e){return this.$emit("input",e),e}}}}},,,,,,,function(e,t,r){"use strict";var n=r(111),s=r.n(n),a=r(24),o=r.n(a),i=r(45),u=r.n(i),c=r(46),l=r.n(c),p=r(44),d=r.n(p),f=r(43),h=r.n(f),v=r(66),m=r.n(v),_=r(156),g=r.n(_),y=m.a.create({baseURL:"https://api.github.com"});y.interceptors.response.use(null,function(e){throw e}),y.defaults.headers.common.Accept="application/vnd.github.mercy-preview+json";var x=function(e,t){return h()(e).reduce(function(r,n){return t.includes(n)&&(r[n]=e[n]),r},{})};t.a={searchUsers:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return d()(l.a.mark(function n(){var s,a,o;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.get("/search/users?q="+e);case 3:return s=t.sent,a=s.data,o=a.items.map(function(e){return x(e,["login","avatar_url","type"])}).map(function(e){return e.avatar_url+="&s="+r,e}),t.abrupt("return",o);case 9:throw t.prev=9,t.t0=t.catch(0),new Error("An error occurred during search request. "+t.t0.message);case 12:case"end":return t.stop()}},n,t,[[0,9]])}))()},getUserInfo:function(e){var t=this;return d()(l.a.mark(function r(){var n,s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.get("/users/"+e);case 3:return n=t.sent,s=n.data,t.abrupt("return",x(s,["avatar_url","name","type","email","login","location","public_repos"]));case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Failed to fetch "+e+" data. "+t.t0.message);case 11:case"end":return t.stop()}},r,t,[[0,8]])}))()},getUserRepos:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return d()(l.a.mark(function n(){var s,a,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.all([y.get("/users/"+e+"/repos?page="+r),t.getEmojis()]);case 3:return s=n.sent,a=u()(s,1),i=a[0],n.abrupt("return",i.data.map(function(e){return x(e,["name","description","fork","language","forked_from","updated_at","stargazers_count","open_issues_count","topics"])}).map(function(e){if(!e.description)return e;var r=g()(e.description);return e.description.length>100&&(r=r.substr(0,97).trim()+"..."),h()(t.emojis).forEach(function(e){r=r.replace(new RegExp(":"+e+":","g"),'<img class=emoji src="'+t.emojis[e]+'" alt="'+e+'">')}),e.description=r,e}));case 9:throw n.prev=9,n.t0=n.catch(0),new Error("Failed to fetch "+e+"'s repositories. "+n.t0.message);case 12:case"end":return n.stop()}},n,t,[[0,9]])}))()},getRepoDetails:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;return d()(l.a.mark(function a(){var i,c,p,d,f,v,m,_,g,b,k,w,$,S;return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,i="/repos/"+t+"/"+e,r.next=4,o.a.all([y.get(i),y.get(i+"/contributors"),y.get(i+"/languages"),y.get(i+"/pulls?sort=popularity")]).then(function(e){return e.map(function(e){return e.data})});case 4:return c=r.sent,p=u()(c,4),d=p[0],f=p[1],v=p[2],m=p[3],_=x(d,["source","html_url"]),g=_.source,b=_.html_url,k=g?{name:g.name,url:g.html_url}:null,w=f.slice(0,3).map(function(e){return x(e,["login","contributions","avatar_url"])}).map(function(e){return e.avatar_url+="&s="+n,e}),$=h()(v).reduce(function(e,t){return v[t]>1024&&e.push(s()({},t,v[t])),e},[]),S=m.slice(0,5).map(function(e){return x(e,["html_url","title"])}),r.abrupt("return",{url:b,forkedFrom:k,contributors:w,languages:$,pulls:S});case 18:throw r.prev=18,r.t0=r.catch(0),new Error("Failed to fetch "+e+" repository info. "+r.t0.message);case 21:case"end":return r.stop()}},a,r,[[0,18]])}))()},getEmojis:function(){var e=this;return d()(l.a.mark(function t(){var r,n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.emojis){t.next=2;break}return t.abrupt("return",e.emojis);case 2:return t.prev=2,t.next=5,y.get("/emojis");case 5:return r=t.sent,n=r.data,e.emojis=n,t.abrupt("return",n);case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",{});case 14:case"end":return t.stop()}},t,e,[[2,11]])}))()}}},,,,,,,,,,,,,,,,,,,,,,function(e,t,r){r(170);var n=r(0)(r(102),r(217),"data-v-93372b00",null);e.exports=n.exports},,,,,,function(e,t,r){"use strict";var n=r(22);t.a=new n.a({})},function(e,t,r){"use strict";t.a={hasOpenIssues:!1,hasTopics:!1,starredMoreThan:0,updatedAfter:"",type:"All",sorting:"Repo name",order:"asc",selectedLang:"any"}},,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";var n=r(22),s=r(222),a=r(183),o=r.n(a),i=r(198),u=r.n(i);n.a.use(s.a),t.a=new s.a({routes:[{path:"/",name:"FirstScreen",component:o.a},{path:"/:user",name:"UserDetails",component:u.a}]})},function(e,t,r){r(160);var n=r(0)(r(85),r(204),null,null);e.exports=n.exports},,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(22),s=r(65),a=r.n(s),o=r(64);n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,render:function(e){return e(a.a)}})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(182),s=r.n(n);t.default={name:"app",components:{AppHeader:s.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(226),s=r.n(n);t.default={name:"Header",components:{GithubLogo:s.a},computed:{isSmall:function(){return"UserDetails"===this.$route.name}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(46),s=r.n(n),a=r(44),o=r.n(a),i=r(13),u=r(177),c=r.n(u),l=r(187),p=r.n(l),d=r(188),f=r.n(d),h=r(35),v=r.n(h);t.default={name:"FirstScreen",data:function(){return{searchQuery:"",isLoading:!1,users:[],error:null}},mounted:function(){this.$route.query.search&&(this.searchQuery=this.$route.query.search,this.search())},components:{SearchField:p.a,SearchResults:f.a,Spinner:v.a},methods:{searchEdited:function(e){this.searchQuery=e,this.$router.replace({query:this.searchQuery?{search:this.searchQuery}:{}})},search:c()(function(){function e(e){return t.apply(this,arguments)}var t=o()(s.a.mark(function e(t){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=3;break}return this.reset(),e.abrupt("return");case 3:return e.prev=3,e.next=6,i.a.searchUsers(t);case 6:r=e.sent,this.error=null,this.users=r,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.error=e.t0.message;case 14:return e.prev=14,this.isLoading=!1,e.finish(14);case 17:case"end":return e.stop()}},e,this,[[3,11,14,17]])}));return e}(),1e3),reset:function(){this.users=[],this.error=null,this.isLoading=!1}},watch:{searchQuery:function(e){this.isLoading=!0,""===e&&this.reset(),this.search(e)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{show:!1}},methods:{escPressed:function(e){27===e.keyCode&&this.$emit("close")}},created:function(){window.addEventListener("keyup",this.escPressed)},destroyed:function(){window.removeEventListener("keyup",this.escPressed)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(225),s=r.n(n),a=r(62),o=r.n(a),i=r(181),u=r.n(i),c=u()();t.default={props:["info","emojis"],filters:{unitizeStars:function(e){return e<999?e:o()(e).precision(1).toString(!1)},timeAgo:function(e){return c.format(e)}},components:{Star:s.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(110),s=r.n(n),a=r(35),o=r.n(a),i=r(13),u=r(62),c=r.n(u);t.default={props:["name","user"],components:{Spinner:o.a},data:function(){return{info:null,error:null}},created:function(){var e=this;i.a.getRepoDetails(this.name,this.user).then(function(t){e.info=t,e.error=null}).catch(function(t){e.error=t})},filters:{bytesToSI:function(e){return c.a.bytes(e).toString()}},computed:{totalLangs:function(){return this.info.languages.map(function(e){return s()(e)[0]}).reduce(function(e,t){return e+t},0)/100},totalContribs:function(){return this.info.contributors.reduce(function(e,t){return e+t.contributions},0)/100}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(224),s=r.n(n),a=r(175);t.default={name:"SearchFiled",data:function(){return{hasFocus:!1,input:""}},computed:{isValid:function(){return!this.input||a.a.test(this.input)}},methods:{edited:function(e){this.isValid&&this.$emit("edited",e)}},mounted:function(){this.input=this.initial},components:{SearchIcon:s.a},props:["initial"]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["users","isEmpty"],filters:{crop:function(e){return e.length<=16?e:e.substr(0,14)+"..."}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(43),s=r.n(n),a=r(5),o=r.n(a),i=r(192),u=r.n(i),c=r(195),l=r.n(c),p=r(197),d=r.n(p),f=r(190),h=r.n(f),v=r(196),m=r.n(v),_=r(191),g=r.n(_),y=r(193),x=r.n(y),b=r(194),k=r.n(b),w=r(41),$=r(42);t.default={name:"Settings",data:function(){return{s:o()({},$.a),languages:[]}},created:function(){var e=this;w.a.$on("languagesUpdated",function(t){e.languages=t}),s()(this.$route.query).length&&(this.$route.query.sort&&(this.s.sorting=this.$route.query.sort),this.$route.query.has_topics&&(this.s.hasTopics=!0),this.$route.query.has_open_issues&&(this.s.hasOpenIssues=!0),this.$route.query.lang&&(this.s.selectedLang=this.$route.query.lang),this.$route.query.updated_after&&(this.s.updatedAfter=this.$route.query.updated_after),this.$route.query.stargazers_count&&(this.s.starredMoreThan=this.$route.query.stargazers_count),this.$route.query.type&&(this.s.type=this.$route.query.type),this.$route.query.order&&(this.s.order="desc"))},components:{OpenIssuesCheckbox:u.a,StarredMoreThanInput:l.a,UpdatedAfterInput:d.a,HasTopicsCheckbox:h.a,TypeSelect:m.a,LanguagesSelect:g.a,SortBySelect:x.a,SortOrder:k.a},watch:{s:{handler:function(){w.a.$emit("updated",this.s)},deep:!0}},methods:{resetAll:function(){var e=this;s()($.a).forEach(function(t){e.$set(e.s,t,$.a[t])}),this.$router.replace({query:{}})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),s=r.n(n),a=r(6);t.default={name:"HasTopicsCheckbox",mixins:[a.a],watch:{val:function(){var e=s()({},this.$route.query);!0===this.val?e.has_topics=!0:delete e.has_topics,this.$router.replace({append:!0,query:e})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),s=r.n(n),a=r(6);t.default={name:"LanguagesSelect",mixins:[a.a],props:["value","langs"],methods:{change:function(e){var t=s()({},this.$route.query);"any"===e.target.value?delete t.lang:t.lang=e.target.value,this.$router.replace({append:!0,query:t})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),s=r.n(n),a=r(6);t.default={name:"OpenIssuesCheckbox",mixins:[a.a],watch:{val:function(){var e=s()({},this.$route.query);!0===this.val?e.has_open_issues=!0:delete e.has_open_issues,this.$router.replace({append:!0,query:e})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),s=r.n(n),a=r(6);t.default={name:"SortBySelect",mixins:[a.a],methods:{change:function(e){var t=s()({},this.$route.query);"Repo name"===e.target.value?delete t.sort:t.sort=e.target.value,this.$router.replace({append:!0,query:t})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),s=r.n(n),a=r(6);t.default={name:"Sortorder",mixins:[a.a],methods:{change:function(e){var t=s()({},this.$route.query);"desc"!==e.target.value?delete t.order:t.order=e.target.value,this.$router.replace({append:!0,query:t})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),s=r.n(n),a=r(6);t.default={name:"StarredMoreThanInput",mixins:[a.a],methods:{change:function(e){var t=s()({},this.$route.query);"0"===e.target.value?delete t.stargazers_count:t.stargazers_count=e.target.value,this.$router.replace({append:!0,query:t})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),s=r.n(n),a=r(6);t.default={name:"TypeSelect",mixins:[a.a],methods:{change:function(e){var t=s()({},this.$route.query);"All"===e.target.value?delete t.type:t.type=e.target.value,this.$router.replace({append:!0,query:t})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),s=r.n(n),a=r(6);t.default={name:"UpdatedAfterInput",mixins:[a.a],methods:{change:function(e){var t=s()({},this.$route.query);e.target.value?t.updated_after=e.target.value:delete t.updated_after,this.$router.replace({append:!0,query:t})}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(227),s=r.n(n);t.default={name:"Spinner",components:{AppSpinner:s.a}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(45),s=r.n(n),a=r(24),o=r.n(a),i=r(199),u=r.n(i),c=r(200),l=r.n(c),p=r(189),d=r.n(p),f=r(35),h=r.n(f),v=r(13);t.default={components:{UserInfo:u.a,UserRepos:l.a,Settings:d.a,Spinner:h.a},data:function(){return{info:{},error:null,repos:[],isLoading:!0}},methods:{fetchData:function(){var e=this;this.isLoading=!0,o.a.all([v.a.getUserInfo(this.$route.params.user),v.a.getUserRepos(this.$route.params.user)]).then(function(t){var r=s()(t,2);e.info=r[0],e.repos=r[1],e.error=null}).catch(function(t){e.error=t}).finally(function(){e.isLoading=!1})}},watch:{$route:function(e,t){e.params.user!==t.params.user&&this.fetchData()}},created:function(){this.fetchData()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"UserInfo",props:["info"]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(185),s=r.n(n),a=r(184),o=r.n(a),i=r(186),u=r.n(i),c=r(41),l=r(42),p=r(13);t.default={name:"UserRepos",props:["init","count"],components:{RepoCard:s.a,Modal:o.a,RepoDetails:u.a},data:function(){return{isLoading:!1,repos:[],s:l.a,appliedFilters:[],sorting:"None",showModal:!1,selectedRepo:null,emojis:{}}},created:function(){var e=this;c.a.$on("updated",function(t){e.s=t}),p.a.getEmojis().then(function(t){e.emojis=t})},methods:{loadMoreRepos:function(){var e=this;this.isLoading=!0;var t=Math.ceil(this.repos.length/30+1);p.a.getUserRepos(this.$route.params.user,t).then(function(t){e.repos=e.repos.concat(t)}).finally(function(){e.isLoading=!1})},repoCardClicked:function(e){this.selectedRepo=e,this.showModal=!0},handleScroll:function(){window.innerHeight+window.pageYOffset>=document.body.offsetHeight&&!this.isLoading&&this.loadMoreRepos()},filterByTopics:function(e){return Boolean(e.topics.length)},filterByType:function(e){return(e.fork?"Forks":"Sources")===this.s.type},filterByStars:function(e){return e.stargazers_count>=this.s.starredMoreThan},filterByIssues:function(e){return e.open_issues_count>0},filterByDate:function(e){return new Date(e.updated_at)>new Date(this.s.updatedAfter)},filterByLang:function(e){return this.s.selectedLang===e.language},applySort:function(e){var t=this;return e.sort(function(e,r){return e[t.s.sorting]<r[t.s.sorting]?1:-1})}},computed:{computedRepos:function(){var e=this,t=this.repos.filter(function(t){return e.appliedFilters.every(function(e){return e(t)})}),r="Repo name"===this.s.sorting?t:this.applySort(t);return"asc"===this.s.order?r:r.reverse()},languages:function(){return this.repos.reduce(function(e,t){return t.language&&!e.includes(t.language)&&e.push(t.language),e},[])},allReposLoaded:function(){return this.repos.length===this.count}},watch:{repos:function(e){e.length===this.count&&document.removeEventListener("scroll",this.handleScroll)},s:{handler:function(){var e=[];this.s.hasOpenIssues&&e.push(this.filterByIssues),this.s.hasTopics&&e.push(this.filterByTopics),this.s.starredMoreThan>0&&e.push(this.filterByStars),this.s.updatedAfter&&e.push(this.filterByDate),"All"!==this.s.type&&e.push(this.filterByType),"any"!==this.s.selectedLang&&e.push(this.filterByLang),this.appliedFilters=e},deep:!0},languages:function(e){c.a.$emit("languagesUpdated",e)}},mounted:function(){this.repos=this.init,document.addEventListener("scroll",this.handleScroll)},destroyed:function(){document.removeEventListener("scroll",this.handleScroll)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,,,,function(e,t,r){r(167);var n=r(0)(r(86),r(214),"data-v-5c15ca35",null);e.exports=n.exports},function(e,t,r){var n=r(0)(r(87),r(206),null,null);e.exports=n.exports},function(e,t,r){r(171);var n=r(0)(r(88),r(218),"data-v-9368de58",null);e.exports=n.exports},function(e,t,r){r(172);var n=r(0)(r(89),r(219),"data-v-b1523a6a",null);e.exports=n.exports},function(e,t,r){r(159);var n=r(0)(r(90),r(203),"data-v-22848052",null);e.exports=n.exports},function(e,t,r){r(157);var n=r(0)(r(91),r(201),"data-v-10dfd899",null);e.exports=n.exports},function(e,t,r){r(168);var n=r(0)(r(92),r(215),"data-v-62e22fd5",null);e.exports=n.exports},function(e,t,r){r(169);var n=r(0)(r(93),r(216),"data-v-6eb034cc",null);e.exports=n.exports},function(e,t,r){var n=r(0)(r(94),r(211),null,null);e.exports=n.exports},function(e,t,r){r(165);var n=r(0)(r(95),r(212),"data-v-4c0354d8",null);e.exports=n.exports},function(e,t,r){var n=r(0)(r(96),r(209),null,null);e.exports=n.exports},function(e,t,r){r(166);var n=r(0)(r(97),r(213),"data-v-532936a4",null);e.exports=n.exports},function(e,t,r){r(173);var n=r(0)(r(98),r(220),"data-v-b413f7a6",null);e.exports=n.exports},function(e,t,r){r(162);var n=r(0)(r(99),r(207),"data-v-2ae9a5c8",null);e.exports=n.exports},function(e,t,r){r(158);var n=r(0)(r(100),r(202),"data-v-1459506e",null);e.exports=n.exports},function(e,t,r){r(174);var n=r(0)(r(101),r(221),"data-v-d0427e74",null);e.exports=n.exports},function(e,t,r){r(164);var n=r(0)(r(103),r(210),"data-v-2de4adde",null);e.exports=n.exports},function(e,t,r){r(163);var n=r(0)(r(104),r(208),"data-v-2babf4c2",null);e.exports=n.exports},function(e,t,r){r(161);var n=r(0)(r(105),r(205),"data-v-240c2f46",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{role:"search"},on:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"wrapper",class:{"not-valid":!e.isValid}},[r("label",{attrs:{for:"search"}},[r("search-icon",{class:{focus:e.hasFocus,invalid:!e.isValid},attrs:{id:"search-icon",alt:"Lense icon."}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],class:{invalid:!e.isValid},attrs:{id:"search",type:"search",placeholder:"Search user or organization","aria-label":"Search for an github user",spellcheck:"false"},domProps:{value:e.initial,value:e.input},on:{input:[function(t){t.target.composing||(e.input=t.target.value)},function(t){e.edited(t.target.value)}],focus:function(t){e.hasFocus=!0},blur:function(t){e.hasFocus=!1}}})],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("label",{attrs:{for:"TypeSelect"}},[e._v("Type")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{id:"TypeSelect"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.val=t.target.multiple?r:r[0]},e.change]}},[r("option",[e._v("All")]),r("option",[e._v("Forks")]),r("option",[e._v("Sources")])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.info?e.error?e._e():r("div",{staticClass:"content"},[e.info.error?r("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):[r("div",[r("a",{attrs:{href:e.info.url,target:"_blank"}},[e._v("Open on GitHub")])]),e.info.forkedFrom?r("div",[e._v("Forked from: "),r("a",{attrs:{href:e.info.forkedFrom.url}},[e._v(e._s(e.info.forkedFrom.name))])]):e._e(),r("hr"),e.info.contributors.length?[r("h2",[e._v("Top contributors")]),r("table",[r("tr",[r("th"),r("th",[e._v("username")]),r("th",[e._v("contributions")])]),e._l(e.info.contributors,function(t){return r("tr",[r("td",[r("img",{attrs:{src:t.avatar_url,alt:t.login+" avatar"}})]),r("td",[t.login!==e.$route.params.user?r("router-link",{attrs:{to:{name:"UserDetails",params:{user:t.login}}}},[e._v(e._s(t.login))]):r("span",[e._v(e._s(t.login))])],1),r("td",[e._v(e._s(t.contributions)),r("div",{staticClass:"progress",style:{width:t.contributions/e.totalContribs+"%"}})])])})],2)]:e._e(),e.info.languages.length?[r("h2",[e._v("Most used languages")]),r("table",[r("tr",[r("th",[e._v("Language")]),r("th",[e._v("Code size")])]),e._l(e.info.languages,function(t){return r("tr",[r("td",[e._v(e._s(Object.keys(t)[0]))]),r("td",[e._v(e._s(e._f("bytesToSI")(Object.values(t)[0]))),r("div",{staticClass:"progress",style:{width:Object.values(t)[0]/e.totalLangs+"%"}})])])})],2)]:e._e(),e.info.pulls.length?[r("h2",[e._v("Most popular PRs")]),r("ul",e._l(e.info.pulls,function(t){return r("li",[r("a",{attrs:{href:t.html_url,target:"_blank"}},[e._v(e._s(t.title))])])}))]:e._e()]],2):r("spinner")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("app-header"),r("transition",{attrs:{appear:"appear",name:"router-fade",mode:"out-in"}},[r("router-view")],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[e.showModal?r("modal",{on:{close:function(t){e.showModal=!1}}},[r("h1",[e._v(e._s(e.selectedRepo))]),r("repo-details",{attrs:{name:e.selectedRepo,user:e.$route.params.user}})],1):e._e(),e.count?r("div",[e.computedRepos.length?r("transition-group",{staticClass:"cards",attrs:{name:"list-complete",tag:"ul"}},e._l(e.computedRepos,function(t){return r("repo-card",{key:t.name,staticClass:"list-complete-item",attrs:{info:t,emojis:e.emojis},nativeOn:{click:function(r){e.repoCardClicked(t.name)},keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13))return null;e.repoCardClicked(t.name)}}})})):r("div",{staticClass:"nothing-found"},[e._v("No any repositories much applied filters.")]),e.isLoading?r("div",[e._v("Loading more repos. Please wait.")]):e._e(),e.allReposLoaded||e.isLoading?e._e():[r("div",{staticClass:"load-more"},[e._v("Loaded "+e._s(e.repos.length)+" from "+e._s(e.count)+" total.")]),r("button",{on:{click:e.loadMoreRepos}},[e._v(">>> Load more")])]],2):e._e(),0===e.count?r("div",{staticClass:"no-repos"},[e._v("This user has no repositories.")]):e._e()],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("search-field",{attrs:{initial:e.$route.query.search},on:{edited:e.searchEdited}}),e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error))]):r("div",[e.isLoading?r("spinner",{staticClass:"spinner"}):r("search-results",{attrs:{users:e.users,isEmpty:Boolean(e.searchQuery)}})],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("label",{attrs:{for:"StarredMoreThan"}},[e._v("Starred more than")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.val,expression:"val",modifiers:{number:!0}}],attrs:{id:"StarredMoreThan",type:"number",min:"0"},domProps:{value:e.val},on:{input:[function(t){t.target.composing||(e.val=e._n(t.target.value))},e.change],blur:function(t){e.$forceUpdate()}}})])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("img",{attrs:{src:e.info.avatar_url+"&s=160",alt:e.info.name+"'s avatar"}}),r("div",{staticClass:"wrapper"},[r("h1",[e._v(e._s(e.info.type)+" "+e._s(e.info.name?e.info.name:e.info.login))]),r("div",{staticClass:"details"},[r("span",[e._v("Location: "+e._s(e.info.location?e.info.location:"unknown"))]),r("address",[e._v("Email:"),e.info.email?r("a",{attrs:{href:"mailto:"+e.info.email}},[e._v(" "+e._s(e.info.email))]):r("span",[e._v(" hidden")])]),r("span",[e._v("Public repos: "+e._s(e.info.public_repos))])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{id:"OpenIssuesCheckbox",type:"checkbox"},domProps:{checked:Array.isArray(e.val)?e._i(e.val,null)>-1:e.val},on:{__c:function(t){var r=e.val,n=t.target,s=!!n.checked;if(Array.isArray(r)){var a=e._i(r,null);n.checked?a<0&&(e.val=r.concat(null)):a>-1&&(e.val=r.slice(0,a).concat(r.slice(a+1)))}else e.val=s}}}),r("label",{attrs:{for:"OpenIssuesCheckbox"}},[e._v("Has open issues")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[e.isLoading?r("spinner"):r("div",[e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error.message))]):r("div",[r("user-info",{attrs:{info:e.info}}),r("settings"),r("user-repos",{attrs:{init:e.repos,count:e.info.public_repos||0}})],1)])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{id:"HasTopicsCheckbox",type:"checkbox"},domProps:{checked:Array.isArray(e.val)?e._i(e.val,null)>-1:e.val},on:{__c:function(t){var r=e.val,n=t.target,s=!!n.checked;if(Array.isArray(r)){var a=e._i(r,null);n.checked?a<0&&(e.val=r.concat(null)):a>-1&&(e.val=r.slice(0,a).concat(r.slice(a+1)))}else e.val=s}}}),r("label",{attrs:{for:"HasTopicsCheckbox"}},[e._v("Has topics")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("label",{attrs:{for:"LangSelect"}},[e._v("Language")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{id:"LangSelect"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.val=t.target.multiple?r:r[0]},e.change]}},[r("option",{attrs:{value:"any"}},[e._v("Any")]),e._l(e.langs,function(t){return r("option",{domProps:{value:t}},[e._v(e._s(t))])})],2)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("label",{attrs:{for:"SortBySelect"}},[e._v("Sort by ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{id:"SortBySelect"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.val=t.target.multiple?r:r[0]},e.change]}},[r("option",[e._v("Repo name")]),r("option",{attrs:{value:"stargazers_count"}},[e._v("Stars count")]),r("option",{attrs:{value:"open_issues_count"}},[e._v("Open issues count")]),r("option",{attrs:{value:"updated_at"}},[e._v("Updated date")])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{class:{small:e.isSmall}},[r("router-link",{attrs:{to:{name:"FirstScreen"}}},[r("github-logo",{attrs:{id:"logo",alt:"GitHub octocat logo"}}),r("h1",[e._v("mini GitHub API client")])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.users.length?r("div",[r("div",{staticClass:"search-results"},e._l(e.users,function(t){return r("router-link",{key:t.login,class:{organization:"Organization"===t.type},attrs:{title:t.type+" "+t.login,to:{name:"UserDetails",params:{user:t.login}}}},[r("img",{attrs:{src:t.avatar_url,alt:"avatar of user "+t.login}}),r("span",[e._v(e._s(e._f("crop")(t.login)))])])}))]):!e.users.length&&e.isEmpty?r("div",{attrs:{id:"no-result"}},[e._v("Nothing found.")]):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("type-select",{model:{value:e.s.type,callback:function(t){e.s.type=t},expression:"s.type"}}),r("languages-select",{attrs:{langs:e.languages},model:{value:e.s.selectedLang,callback:function(t){e.s.selectedLang=t},expression:"s.selectedLang"}}),r("starred-more-than-input",{model:{value:e.s.starredMoreThan,callback:function(t){e.s.starredMoreThan=t},expression:"s.starredMoreThan"}}),r("open-issues-checkbox",{model:{value:e.s.hasOpenIssues,callback:function(t){e.s.hasOpenIssues=t},expression:"s.hasOpenIssues"}}),r("has-topics-checkbox",{model:{value:e.s.hasTopics,callback:function(t){e.s.hasTopics=t},expression:"s.hasTopics"}}),r("updated-after-input",{model:{value:e.s.updatedAfter,callback:function(t){e.s.updatedAfter=t},expression:"s.updatedAfter"}}),r("sort-by-select",{model:{value:e.s.sorting,callback:function(t){e.s.sorting=t},expression:"s.sorting"}}),r("sort-order",{model:{value:e.s.order,callback:function(t){e.s.order=t},expression:"s.order"}}),r("button",{on:{click:e.resetAll}},[e._v("Reset")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("app-spinner",{attrs:{alt:"Loading..."}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"modal"}},[r("div",{staticClass:"modal-mask",on:{click:function(t){e.$emit("close")}}},[r("div",{staticClass:"modal-inner",on:{click:function(e){e.stopPropagation()}}},[r("button",{attrs:{title:"Close modal"},on:{click:function(t){e.$emit("close")}}},[e._v("x")]),e._t("default")],2)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{class:{fork:e.info.fork},attrs:{tabindex:"0",role:"button"}},[r("h1",[e._v(e._s(e.info.name))]),r("div",{staticClass:"card-stats"},[r("div",{staticClass:"lang"},[e._v(e._s(e.info.language?e.info.language:"none"))]),r("div",{staticClass:"stars"},[r("star"),r("span",[e._v(e._s(e._f("unitizeStars")(e.info.stargazers_count)))])],1)]),e.info.description?r("div",{staticClass:"desc",domProps:{innerHTML:e._s(e.info.description)}}):e._e(),r("div",{staticClass:"updated-at"},[r("time",{attrs:{datetime:e.info.updated_at}},[e._v("updated "+e._s(e._f("timeAgo")(e.info.updated_at)))])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("label",{attrs:{for:"SortOrder"}},[e._v("Sort order")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{id:"SortOrder"},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.val=t.target.multiple?r:r[0]},e.change]}},[r("option",[e._v("asc")]),r("option",[e._v("desc")])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("label",{attrs:{for:"UpdatedAfterInput"}},[e._v("Updated After ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],attrs:{id:"UpdatedAfterInput",type:"date"},domProps:{value:e.val},on:{change:e.change,input:function(t){t.target.composing||(e.val=t.target.value)}}})])},staticRenderFns:[]}},,,function(module,exports){module.exports={render:function(){with(this)return _c("svg",{attrs:{width:"1792",height:"1792",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"}},[_c("path",{attrs:{d:"M1216 832q0-185-131.5-316.5T768 384 451.5 515.5 320 832t131.5 316.5T768 1280t316.5-131.5T1216 832zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225T64 832t55.5-273.5 150-225 225-150T768 128t273.5 55.5 225 150 150 225T1472 832q0 220-124 399l343 343q37 37 37 90z",fill:"#fff"}})])}}},function(module,exports){module.exports={render:function(){with(this)return _c("svg",{attrs:{height:"16",viewBox:"0 0 14 16",width:"14"}},[_c("path",{attrs:{"fill-rule":"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"}})])}}},function(module,exports){module.exports={render:function(){with(this)return _c("svg",{attrs:{height:"32",viewBox:"0 0 16 16",width:"32"}},[_c("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])}}},function(module,exports){module.exports={render:function(){with(this)return _c("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"320",height:"320",viewBox:"0 0 320 320"}},[_c("g",[_c("path",{attrs:{id:"a",stroke:"#111","stroke-width":"30","stroke-linecap":"round",d:"M15 160h50"}}),_c("use",{attrs:{"xlink:href":"#a",transform:"rotate(30 160 160)",opacity:".083"}}),_c("use",{attrs:{"xlink:href":"#a",transform:"rotate(60 160 160)",opacity:".166"}}),_c("use",{attrs:{"xlink:href":"#a",transform:"rotate(90 160 160)",opacity:".25"}}),_c("use",{attrs:{"xlink:href":"#a",transform:"rotate(120 160 160)",opacity:".333"}}),_c("use",{attrs:{"xlink:href":"#a",transform:"rotate(150 160 160)",opacity:".417"}}),_c("use",{attrs:{"xlink:href":"#a",transform:"rotate(180 160 160)",opacity:".5"}}),_c("use",{attrs:{"xlink:href":"#a",transform:"rotate(210 160 160)",opacity:".583"}}),_c("use",{attrs:{"xlink:href":"#a",transform:"rotate(240 160 160)",opacity:".667"}}),_c("use",{attrs:{"xlink:href":"#a",transform:"rotate(270 160 160)",opacity:".75"}}),_c("use",{attrs:{"xlink:href":"#a",transform:"rotate(300 160 160)",opacity:".833"}}),_c("use",{attrs:{"xlink:href":"#a",transform:"rotate(330 160 160)",opacity:".917"}}),_c("animateTransform",{attrs:{attributeName:"transform",attributeType:"XML",type:"rotate",begin:"0s",dur:"1s",repeatCount:"indefinite",calcMode:"discrete",keyTimes:"0;.0833;.166;.25;.3333;.4166;.5;.5833;.6666;.75;.8333;.9166;1",values:"0,160,160;30,160,160;60,160,160;90,160,160;120,160,160;150,160,160;180,160,160;210,160,160;240,160,160;270,160,160;300,160,160;330,160,160;360,160,160"}})],1)])}}}],[84]);