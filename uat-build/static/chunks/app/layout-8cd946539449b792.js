(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7223:function(t,e,i){Promise.resolve().then(i.bind(i,40957)),Promise.resolve().then(i.t.bind(i,473,23)),Promise.resolve().then(i.t.bind(i,98824,23)),Promise.resolve().then(i.t.bind(i,18357,23)),Promise.resolve().then(i.t.bind(i,93750,23)),Promise.resolve().then(i.t.bind(i,45602,23)),Promise.resolve().then(i.t.bind(i,34257,23))},40957:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return b}});var s=i(9268);i(86006);var r=i(87179),a=i(11728),n=i(64586),u=i(760),o=i(38511);class h extends o.F{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||a._,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,s=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?null!=s?s:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(t,e){let i=(0,r.oE)(this.state.data,t,this.options);return this.dispatch({data:i,type:"success",dataUpdatedAt:null==e?void 0:e.updatedAt,manual:null==e?void 0:e.manual}),i}setState(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})}cancel(t){var e;let i=this.promise;return null==(e=this.retryer)||e.cancel(t),i?i.then(r.ZT).catch(r.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,r.Kp)(this.state.dataUpdatedAt,t)}onFocus(){var t;let e=this.observers.find(t=>t.shouldFetchOnWindowFocus());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}onOnline(){var t;let e=this.observers.find(t=>t.shouldFetchOnReconnect());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,e){var i,s,a,n;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=e&&e.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(a=this.retryer)||a.continueRetry(),this.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}Array.isArray(this.options.queryKey);let o=(0,r.G9)(),h={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};l(h);let c={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(h)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};l(c),null==(i=this.options.behavior)||i.onFetch(c),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(s=c.fetchOptions)?void 0:s.meta))&&this.dispatch({type:"fetch",meta:null==(n=c.fetchOptions)?void 0:n.meta});let d=t=>{if((0,u.DV)(t)&&t.silent||this.dispatch({type:"error",error:t}),!(0,u.DV)(t)){var e,i,s,r;null==(e=(i=this.cache.config).onError)||e.call(i,t,this),null==(s=(r=this.cache.config).onSettled)||s.call(r,this.state.data,t,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,u.Mz)({fn:c.fetchFn,abort:null==o?void 0:o.abort.bind(o),onSuccess:t=>{var e,i,s,r;if(void 0===t){d(Error(this.queryHash+" data is undefined"));return}this.setData(t),null==(e=(i=this.cache.config).onSuccess)||e.call(i,t,this),null==(s=(r=this.cache.config).onSettled)||s.call(r,t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:d,onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){this.state=(e=>{var i,s;switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(i=t.meta)?i:null,fetchStatus:(0,u.Kw)(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:null!=(s=t.dataUpdatedAt)?s:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=t.error;if((0,u.DV)(r)&&r.revert&&this.revertState)return{...this.revertState};return{...e,error:r,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),n.V.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}var l=i(22772);class c extends l.l{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,e,i){var s;let a=e.queryKey,n=null!=(s=e.queryHash)?s:(0,r.Rm)(a,e),u=this.get(n);return u||(u=new h({cache:this,logger:t.getLogger(),queryKey:a,queryHash:n,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(a)}),this.add(u)),u}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){let e=this.queriesMap[t.queryHash];e&&(t.destroy(),this.queries=this.queries.filter(e=>e!==t),e===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){n.V.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,e){let[i]=(0,r.I6)(t,e);return void 0===i.exact&&(i.exact=!0),this.queries.find(t=>(0,r._x)(i,t))}findAll(t,e){let[i]=(0,r.I6)(t,e);return Object.keys(i).length>0?this.queries.filter(t=>(0,r._x)(i,t)):this.queries}notify(t){n.V.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}onFocus(){n.V.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){n.V.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}var d=i(58993);class f extends l.l{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,e,i){let s=new d.m({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(e),state:i,defaultOptions:e.mutationKey?t.getMutationDefaults(e.mutationKey):void 0});return this.add(s),s}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){n.V.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return void 0===t.exact&&(t.exact=!0),this.mutations.find(e=>(0,r.X7)(t,e))}findAll(t){return this.mutations.filter(e=>(0,r.X7)(t,e))}notify(t){n.V.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}resumePausedMutations(){var t;return this.resuming=(null!=(t=this.resuming)?t:Promise.resolve()).then(()=>{let t=this.mutations.filter(t=>t.state.isPaused);return n.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(r.ZT)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}var y=i(10189),p=i(57205);function v(t,e){return null==t.getNextPageParam?void 0:t.getNextPageParam(e[e.length-1],e)}var m=i(55194);let g=new class{constructor(t={}){this.queryCache=t.queryCache||new c,this.mutationCache=t.mutationCache||new f,this.logger=t.logger||a._,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=y.j.subscribe(()=>{y.j.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=p.N.subscribe(()=>{p.N.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,e;this.mountCount--,0===this.mountCount&&(null==(t=this.unsubscribeFocus)||t.call(this),this.unsubscribeFocus=void 0,null==(e=this.unsubscribeOnline)||e.call(this),this.unsubscribeOnline=void 0)}isFetching(t,e){let[i]=(0,r.I6)(t,e);return i.fetchStatus="fetching",this.queryCache.findAll(i).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state.data}ensureQueryData(t,e,i){let s=(0,r._v)(t,e,i),a=this.getQueryData(s.queryKey);return a?Promise.resolve(a):this.fetchQuery(s)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>{let i=e.data;return[t,i]})}setQueryData(t,e,i){let s=this.queryCache.find(t),a=null==s?void 0:s.state.data,n=(0,r.SE)(e,a);if(void 0===n)return;let u=(0,r._v)(t),o=this.defaultQueryOptions(u);return this.queryCache.build(this,o).setData(n,{...i,manual:!0})}setQueriesData(t,e,i){return n.V.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state}removeQueries(t,e){let[i]=(0,r.I6)(t,e),s=this.queryCache;n.V.batch(()=>{s.findAll(i).forEach(t=>{s.remove(t)})})}resetQueries(t,e,i){let[s,a]=(0,r.I6)(t,e,i),u=this.queryCache,o={type:"active",...s};return n.V.batch(()=>(u.findAll(s).forEach(t=>{t.reset()}),this.refetchQueries(o,a)))}cancelQueries(t,e,i){let[s,a={}]=(0,r.I6)(t,e,i);void 0===a.revert&&(a.revert=!0);let u=n.V.batch(()=>this.queryCache.findAll(s).map(t=>t.cancel(a)));return Promise.all(u).then(r.ZT).catch(r.ZT)}invalidateQueries(t,e,i){let[s,a]=(0,r.I6)(t,e,i);return n.V.batch(()=>{var t,e;if(this.queryCache.findAll(s).forEach(t=>{t.invalidate()}),"none"===s.refetchType)return Promise.resolve();let i={...s,type:null!=(t=null!=(e=s.refetchType)?e:s.type)?t:"active"};return this.refetchQueries(i,a)})}refetchQueries(t,e,i){let[s,a]=(0,r.I6)(t,e,i),u=n.V.batch(()=>this.queryCache.findAll(s).filter(t=>!t.isDisabled()).map(t=>{var e;return t.fetch(void 0,{...a,cancelRefetch:null==(e=null==a?void 0:a.cancelRefetch)||e,meta:{refetchPage:s.refetchPage}})})),o=Promise.all(u).then(r.ZT);return null!=a&&a.throwOnError||(o=o.catch(r.ZT)),o}fetchQuery(t,e,i){let s=(0,r._v)(t,e,i),a=this.defaultQueryOptions(s);void 0===a.retry&&(a.retry=!1);let n=this.queryCache.build(this,a);return n.isStaleByTime(a.staleTime)?n.fetch(a):Promise.resolve(n.state.data)}prefetchQuery(t,e,i){return this.fetchQuery(t,e,i).then(r.ZT).catch(r.ZT)}fetchInfiniteQuery(t,e,i){let s=(0,r._v)(t,e,i);return s.behavior={onFetch:t=>{t.fetchFn=()=>{var e,i,s,r,a,n,u;let o;let h=null==(e=t.fetchOptions)?void 0:null==(i=e.meta)?void 0:i.refetchPage,l=null==(s=t.fetchOptions)?void 0:null==(r=s.meta)?void 0:r.fetchMore,c=null==l?void 0:l.pageParam,d=(null==l?void 0:l.direction)==="forward",f=(null==l?void 0:l.direction)==="backward",y=(null==(a=t.state.data)?void 0:a.pages)||[],p=(null==(n=t.state.data)?void 0:n.pageParams)||[],m=p,g=!1,b=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{var e,i;return null!=(e=t.signal)&&e.aborted?g=!0:null==(i=t.signal)||i.addEventListener("abort",()=>{g=!0}),t.signal}})},q=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),O=(t,e,i,s)=>(m=s?[e,...m]:[...m,e],s?[i,...t]:[...t,i]),C=(e,i,s,r)=>{if(g)return Promise.reject("Cancelled");if(void 0===s&&!i&&e.length)return Promise.resolve(e);let a={queryKey:t.queryKey,pageParam:s,meta:t.options.meta};b(a);let n=q(a),u=Promise.resolve(n).then(t=>O(e,s,t,r));return u};if(y.length){if(d){let e=void 0!==c,i=e?c:v(t.options,y);o=C(y,e,i)}else if(f){let e=void 0!==c,i=e?c:null==(u=t.options).getPreviousPageParam?void 0:u.getPreviousPageParam(y[0],y);o=C(y,e,i,!0)}else{m=[];let e=void 0===t.options.getNextPageParam,i=!h||!y[0]||h(y[0],0,y);o=i?C([],e,p[0]):Promise.resolve(O([],p[0],y[0]));for(let i=1;i<y.length;i++)o=o.then(s=>{let r=!h||!y[i]||h(y[i],i,y);if(r){let r=e?p[i]:v(t.options,s);return C(s,e,r)}return Promise.resolve(O(s,p[i],y[i]))})}}else o=C([]);let P=o.then(t=>({pages:t,pageParams:m}));return P}}},this.fetchQuery(s)}prefetchInfiniteQuery(t,e,i){return this.fetchInfiniteQuery(t,e,i).then(r.ZT).catch(r.ZT)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,e){let i=this.queryDefaults.find(e=>(0,r.yF)(t)===(0,r.yF)(e.queryKey));i?i.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})}getQueryDefaults(t){if(!t)return;let e=this.queryDefaults.find(e=>(0,r.to)(t,e.queryKey));return null==e?void 0:e.defaultOptions}setMutationDefaults(t,e){let i=this.mutationDefaults.find(e=>(0,r.yF)(t)===(0,r.yF)(e.mutationKey));i?i.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})}getMutationDefaults(t){if(!t)return;let e=this.mutationDefaults.find(e=>(0,r.to)(t,e.mutationKey));return null==e?void 0:e.defaultOptions}defaultQueryOptions(t){if(null!=t&&t._defaulted)return t;let e={...this.defaultOptions.queries,...this.getQueryDefaults(null==t?void 0:t.queryKey),...t,_defaulted:!0};return!e.queryHash&&e.queryKey&&(e.queryHash=(0,r.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.useErrorBoundary&&(e.useErrorBoundary=!!e.suspense),e}defaultMutationOptions(t){return null!=t&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==t?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}({defaultOptions:{queries:{staleTime:1/0,cacheTime:0}}});var b=function(t){let{children:e}=t;return(0,s.jsx)(m.aH,{client:g,children:e})}},34257:function(){},45602:function(){},473:function(){},93750:function(){},18357:function(){},98824:function(){},83177:function(t,e,i){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i(86006),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,u=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,i){var s,a={},h=null,l=null;for(s in void 0!==i&&(h=""+i),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(l=e.ref),e)n.call(e,s)&&!o.hasOwnProperty(s)&&(a[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps)void 0===a[s]&&(a[s]=e[s]);return{$$typeof:r,type:t,key:h,ref:l,props:a,_owner:u.current}}e.Fragment=a,e.jsx=h,e.jsxs=h},9268:function(t,e,i){"use strict";t.exports=i(83177)}},function(t){t.O(0,[219,826,253,769,744],function(){return t(t.s=7223)}),_N_E=t.O()}]);
//# sourceMappingURL=layout-8cd946539449b792.js.map