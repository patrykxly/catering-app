"use strict";(self.webpackChunkcateringApp=self.webpackChunkcateringApp||[]).push([[486],{8486:(Vt,A,r)=>{r.r(A),r.d(A,{AccountSettingsModule:()=>qt});var L=r(3060),h=r(4006),J=r(8505),T=r(5412),t=r(4650),S=r(4859);let $=(()=>{class i{constructor(e,a){this.dialogRef=e,this.data=a}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(T.so),t.Y36(T.WI))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-confirm-dialog"]],decls:8,vars:1,consts:[[1,"container"],[1,"buttons"],["mat-button","",1,"close-button",3,"click"],["mat-button","",1,"confirm-button",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"p"),t._uU(2),t.qZA(),t.TgZ(3,"div",1)(4,"button",2),t.NdJ("click",function(){return a.dialogRef.close(!1)}),t._uU(5," Close "),t.qZA(),t.TgZ(6,"button",3),t.NdJ("click",function(){return a.dialogRef.close(!0)}),t._uU(7," Confirm "),t.qZA()()()),2&e&&(t.xp6(2),t.hij("Are you sure you want to ",a.data,"?"))},dependencies:[S.lW],styles:["p[_ngcontent-%COMP%]{font-size:1.2em;font-weight:400;text-align:center}.buttons[_ngcontent-%COMP%]   .confirm-button[_ngcontent-%COMP%]{display:flex;float:right}.buttons[_ngcontent-%COMP%]   .close-button[_ngcontent-%COMP%]{display:flex;float:left}"]}),i})();var q=r(4961),O=r(7009),m=r(6895),V=r(2645),C=r(9549),K=r(4144),x=r(3546),I=r(2687),N=r(9643),_=r(4080),u=r(3238),E=r(5698),k=r(8675),X=r(1884),f=r(2722),tt=r(3900),et=r(5684),y=r(7579),g=r(727),P=r(4968),at=r(9646),w=r(6451),nt=r(515),it=r(9751),ot=r(5963),v=r(445),b=r(7340),p=r(1281),D=r(5589),M=r(3353),R=r(9521);function st(i,o){1&i&&t.Hsn(0)}const H=["*"];function rt(i,o){}const lt=function(i){return{animationDuration:i}},ct=function(i,o){return{value:i,params:o}},dt=["tabListContainer"],bt=["tabList"],ht=["tabListInner"],ut=["nextPaginator"],pt=["previousPaginator"],mt=["tabBodyWrapper"],ft=["tabHeader"];function _t(i,o){}function gt(i,o){if(1&i&&t.YNc(0,_t,0,0,"ng-template",10),2&i){const e=t.oxw().$implicit;t.Q6J("cdkPortalOutlet",e.templateLabel)}}function vt(i,o){if(1&i&&t._uU(0),2&i){const e=t.oxw().$implicit;t.Oqu(e.textLabel)}}function Tt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(){const n=t.CHM(e),s=n.$implicit,l=n.index,c=t.oxw(),d=t.MAs(1);return t.KtG(c._handleClick(s,d,l))})("cdkFocusChange",function(n){const l=t.CHM(e).index,c=t.oxw();return t.KtG(c._tabFocusChanged(n,l))}),t.TgZ(1,"div",7),t.YNc(2,gt,1,1,"ng-template",8),t.YNc(3,vt,1,1,"ng-template",null,9,t.W1O),t.qZA()()}if(2&i){const e=o.$implicit,a=o.index,n=t.MAs(4),s=t.oxw();t.ekj("mat-tab-label-active",s.selectedIndex===a),t.Q6J("id",s._getTabLabelId(a))("ngClass",e.labelClass)("disabled",e.disabled)("matRippleDisabled",e.disabled||s.disableRipple),t.uIk("tabIndex",s._getTabIndex(e,a))("aria-posinset",a+1)("aria-setsize",s._tabs.length)("aria-controls",s._getTabContentId(a))("aria-selected",s.selectedIndex===a)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),t.xp6(2),t.Q6J("ngIf",e.templateLabel)("ngIfElse",n)}}function xt(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"mat-tab-body",11),t.NdJ("_onCentered",function(){t.CHM(e);const n=t.oxw();return t.KtG(n._removeTabBodyWrapperHeight())})("_onCentering",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s._setTabBodyWrapperHeight(n))}),t.qZA()}if(2&i){const e=o.$implicit,a=o.index,n=t.oxw();t.ekj("mat-tab-body-active",n.selectedIndex===a),t.Q6J("id",n._getTabContentId(a))("ngClass",e.bodyClass)("content",e.content)("position",e.position)("origin",e.origin)("animationDuration",n.animationDuration)("preserveContent",n.preserveContent),t.uIk("tabindex",null!=n.contentTabIndex&&n.selectedIndex===a?n.contentTabIndex:null)("aria-labelledby",n._getTabLabelId(a))}}const yt=new t.OlP("MatInkBarPositioner",{providedIn:"root",factory:function Mt(){return o=>({left:o?(o.offsetLeft||0)+"px":"0",width:o?(o.offsetWidth||0)+"px":"0"})}});let F=(()=>{class i{constructor(e,a,n,s){this._elementRef=e,this._ngZone=a,this._inkBarPositioner=n,this._animationMode=s}alignToElement(e){this.show(),this._ngZone.run(()=>{this._ngZone.onStable.pipe((0,E.q)(1)).subscribe(()=>{const a=this._inkBarPositioner(e),n=this._elementRef.nativeElement;n.style.left=a.left,n.style.width=a.width})})}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(yt),t.Y36(t.QbO,8))},i.\u0275dir=t.lG2({type:i,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(e,a){2&e&&t.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode)}}),i})();const Ct=new t.OlP("MatTabContent"),It=new t.OlP("MatTabLabel"),kt=new t.OlP("MAT_TAB"),Pt=(0,u.Id)(class{}),Z=new t.OlP("MAT_TAB_GROUP");let j=(()=>{class i extends Pt{constructor(e,a){super(),this._viewContainerRef=e,this._closestTabGroup=a,this.textLabel="",this._contentPortal=null,this._stateChanges=new y.x,this.position=null,this.origin=null,this.isActive=!1}get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}get content(){return this._contentPortal}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new _.UE(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.s_b),t.Y36(Z,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-tab"]],contentQueries:function(e,a,n){if(1&e&&(t.Suo(n,It,5),t.Suo(n,Ct,7,t.Rgc)),2&e){let s;t.iGM(s=t.CRH())&&(a.templateLabel=s.first),t.iGM(s=t.CRH())&&(a._explicitContent=s.first)}},viewQuery:function(e,a){if(1&e&&t.Gf(t.Rgc,7),2&e){let n;t.iGM(n=t.CRH())&&(a._implicitContent=n.first)}},inputs:{disabled:"disabled",textLabel:["label","textLabel"],ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass"},exportAs:["matTab"],features:[t._Bn([{provide:kt,useExisting:i}]),t.qOj,t.TTD],ngContentSelectors:H,decls:1,vars:0,template:function(e,a){1&e&&(t.F$t(),t.YNc(0,st,1,0,"ng-template"))},encapsulation:2}),i})();const wt={translateTab:(0,b.X$)("translateTab",[(0,b.SB)("center, void, left-origin-center, right-origin-center",(0,b.oB)({transform:"none"})),(0,b.SB)("left",(0,b.oB)({transform:"translate3d(-100%, 0, 0)",minHeight:"1px",visibility:"hidden"})),(0,b.SB)("right",(0,b.oB)({transform:"translate3d(100%, 0, 0)",minHeight:"1px",visibility:"hidden"})),(0,b.eR)("* => left, * => right, left => center, right => center",(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),(0,b.eR)("void => left-origin-center",[(0,b.oB)({transform:"translate3d(-100%, 0, 0)",visibility:"hidden"}),(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),(0,b.eR)("void => right-origin-center",[(0,b.oB)({transform:"translate3d(100%, 0, 0)",visibility:"hidden"}),(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])};let Dt=(()=>{class i extends _.Pl{constructor(e,a,n,s){super(e,a,s),this._host=n,this._centeringSub=g.w0.EMPTY,this._leavingSub=g.w0.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe((0,k.O)(this._host._isCenterPosition(this._host._position))).subscribe(e=>{e&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t._Vd),t.Y36(t.s_b),t.Y36((0,t.Gpc)(()=>G)),t.Y36(m.K0))},i.\u0275dir=t.lG2({type:i,selectors:[["","matTabBodyHost",""]],features:[t.qOj]}),i})(),Rt=(()=>{class i{constructor(e,a,n){this._elementRef=e,this._dir=a,this._dirChangeSubscription=g.w0.EMPTY,this._translateTabComplete=new y.x,this._onCentering=new t.vpe,this._beforeCentering=new t.vpe,this._afterLeavingCenter=new t.vpe,this._onCentered=new t.vpe(!0),this.animationDuration="500ms",this.preserveContent=!1,a&&(this._dirChangeSubscription=a.change.subscribe(s=>{this._computePositionAnimationState(s),n.markForCheck()})),this._translateTabComplete.pipe((0,X.x)((s,l)=>s.fromState===l.fromState&&s.toState===l.toState)).subscribe(s=>{this._isCenterPosition(s.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(s.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}set position(e){this._positionIndex=e,this._computePositionAnimationState()}ngOnInit(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(e){const a=this._isCenterPosition(e.toState);this._beforeCentering.emit(a),a&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_isCenterPosition(e){return"center"==e||"left-origin-center"==e||"right-origin-center"==e}_computePositionAnimationState(e=this._getLayoutDirection()){this._position=this._positionIndex<0?"ltr"==e?"left":"right":this._positionIndex>0?"ltr"==e?"right":"left":"center"}_computePositionFromOrigin(e){const a=this._getLayoutDirection();return"ltr"==a&&e<=0||"rtl"==a&&e>0?"left-origin-center":"right-origin-center"}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(v.Is,8),t.Y36(t.sBO))},i.\u0275dir=t.lG2({type:i,inputs:{_content:["content","_content"],origin:"origin",animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"}}),i})(),G=(()=>{class i extends Rt{constructor(e,a,n){super(e,a,n)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(v.Is,8),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-tab-body"]],viewQuery:function(e,a){if(1&e&&t.Gf(_.Pl,5),2&e){let n;t.iGM(n=t.CRH())&&(a._portalHost=n.first)}},hostAttrs:[1,"mat-tab-body"],features:[t.qOj],decls:3,vars:6,consts:[["cdkScrollable","",1,"mat-tab-body-content"],["content",""],["matTabBodyHost",""]],template:function(e,a){1&e&&(t.TgZ(0,"div",0,1),t.NdJ("@translateTab.start",function(s){return a._onTranslateTabStarted(s)})("@translateTab.done",function(s){return a._translateTabComplete.next(s)}),t.YNc(2,rt,0,0,"ng-template",2),t.qZA()),2&e&&t.Q6J("@translateTab",t.WLB(3,ct,a._position,t.VKq(1,lt,a.animationDuration)))},dependencies:[Dt],styles:['.mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}.mat-tab-body-content[style*="visibility: hidden"]{display:none}'],encapsulation:2,data:{animation:[wt.translateTab]}}),i})();const Y=new t.OlP("MAT_TABS_CONFIG"),Bt=(0,u.Id)(class{});let Q=(()=>{class i extends Bt{constructor(e){super(),this.elementRef=e}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq))},i.\u0275dir=t.lG2({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,a){2&e&&(t.uIk("aria-disabled",!!a.disabled),t.ekj("mat-tab-disabled",a.disabled))},inputs:{disabled:"disabled"},features:[t.qOj]}),i})();const W=(0,M.i$)({passive:!0});let St=(()=>{class i{constructor(e,a,n,s,l,c,d){this._elementRef=e,this._changeDetectorRef=a,this._viewportRuler=n,this._dir=s,this._ngZone=l,this._platform=c,this._animationMode=d,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new y.x,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new y.x,this._disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new t.vpe,this.indexFocused=new t.vpe,l.runOutsideAngular(()=>{(0,P.R)(e.nativeElement,"mouseleave").pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get disablePagination(){return this._disablePagination}set disablePagination(e){this._disablePagination=(0,p.Ig)(e)}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){e=(0,p.su)(e),this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}ngAfterViewInit(){(0,P.R)(this._previousPaginator.nativeElement,"touchstart",W).pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),(0,P.R)(this._nextPaginator.nativeElement,"touchstart",W).pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const e=this._dir?this._dir.change:(0,at.of)("ltr"),a=this._viewportRuler.change(150),n=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new I.Em(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),this._ngZone.onStable.pipe((0,E.q)(1)).subscribe(n),(0,w.T)(e,a,this._items.changes,this._itemsResized()).pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),n()})}),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe((0,f.R)(this._destroyed)).subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return"function"!=typeof ResizeObserver?nt.E:this._items.changes.pipe((0,k.O)(this._items),(0,tt.w)(e=>new it.y(a=>this._ngZone.runOutsideAngular(()=>{const n=new ResizeObserver(()=>{a.next()});return e.forEach(s=>{n.observe(s.elementRef.nativeElement)}),()=>{n.disconnect()}}))),(0,et.T)(1))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!(0,R.Vb)(e))switch(e.keyCode){case R.K5:case R.L_:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e));break;default:this._keyManager.onKeydown(e)}}_onContentChanges(){const e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){if(!this._items)return!0;const a=this._items?this._items.toArray()[e]:null;return!!a&&!a.disabled}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();const a=this._tabListContainer.nativeElement;a.scrollLeft="ltr"==this._getLayoutDirection()?0:a.scrollWidth-a.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const e=this.scrollDistance,a="ltr"===this._getLayoutDirection()?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(a)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){return this._scrollTo(this._scrollDistance+("before"==e?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;const a=this._items?this._items.toArray()[e]:null;if(!a)return;const n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:s,offsetWidth:l}=a.elementRef.nativeElement;let c,d;"ltr"==this._getLayoutDirection()?(c=s,d=c+l):(d=this._tabListInner.nativeElement.offsetWidth-s,c=d-l);const B=this.scrollDistance,z=this.scrollDistance+n;c<B?this.scrollDistance-=B-c+60:d>z&&(this.scrollDistance+=d-z+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const e=this._tabListInner.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;e||(this.scrollDistance=0),e!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=e}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,a=e?e.elementRef.nativeElement:null;a?this._inkBar.alignToElement(a):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,a){a&&null!=a.button&&0!==a.button||(this._stopInterval(),(0,ot.H)(650,100).pipe((0,f.R)((0,w.T)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:n,distance:s}=this._scrollHeader(e);(0===s||s>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const a=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(a,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:a,distance:this._scrollDistance}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(D.rL),t.Y36(v.Is,8),t.Y36(t.R0b),t.Y36(M.t4),t.Y36(t.QbO,8))},i.\u0275dir=t.lG2({type:i,inputs:{disablePagination:"disablePagination"}}),i})(),Ot=(()=>{class i extends St{constructor(e,a,n,s,l,c,d){super(e,a,n,s,l,c,d),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=(0,p.Ig)(e)}_itemSelected(e){e.preventDefault()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(D.rL),t.Y36(v.Is,8),t.Y36(t.R0b),t.Y36(M.t4),t.Y36(t.QbO,8))},i.\u0275dir=t.lG2({type:i,inputs:{disableRipple:"disableRipple"},features:[t.qOj]}),i})(),Nt=(()=>{class i extends Ot{constructor(e,a,n,s,l,c,d){super(e,a,n,s,l,c,d)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(D.rL),t.Y36(v.Is,8),t.Y36(t.R0b),t.Y36(M.t4),t.Y36(t.QbO,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-tab-header"]],contentQueries:function(e,a,n){if(1&e&&t.Suo(n,Q,4),2&e){let s;t.iGM(s=t.CRH())&&(a._items=s)}},viewQuery:function(e,a){if(1&e&&(t.Gf(F,7),t.Gf(dt,7),t.Gf(bt,7),t.Gf(ht,7),t.Gf(ut,5),t.Gf(pt,5)),2&e){let n;t.iGM(n=t.CRH())&&(a._inkBar=n.first),t.iGM(n=t.CRH())&&(a._tabListContainer=n.first),t.iGM(n=t.CRH())&&(a._tabList=n.first),t.iGM(n=t.CRH())&&(a._tabListInner=n.first),t.iGM(n=t.CRH())&&(a._nextPaginator=n.first),t.iGM(n=t.CRH())&&(a._previousPaginator=n.first)}},hostAttrs:[1,"mat-tab-header"],hostVars:4,hostBindings:function(e,a){2&e&&t.ekj("mat-tab-header-pagination-controls-enabled",a._showPaginationControls)("mat-tab-header-rtl","rtl"==a._getLayoutDirection())},inputs:{selectedIndex:"selectedIndex"},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[t.qOj],ngContentSelectors:H,decls:14,vars:10,consts:[["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","disabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-label-container",3,"keydown"],["tabListContainer",""],["role","tablist",1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-labels"],["tabListInner",""],["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","disabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(e,a){1&e&&(t.F$t(),t.TgZ(0,"button",0,1),t.NdJ("click",function(){return a._handlePaginatorClick("before")})("mousedown",function(s){return a._handlePaginatorPress("before",s)})("touchend",function(){return a._stopInterval()}),t._UZ(2,"div",2),t.qZA(),t.TgZ(3,"div",3,4),t.NdJ("keydown",function(s){return a._handleKeydown(s)}),t.TgZ(5,"div",5,6),t.NdJ("cdkObserveContent",function(){return a._onContentChanges()}),t.TgZ(7,"div",7,8),t.Hsn(9),t.qZA(),t._UZ(10,"mat-ink-bar"),t.qZA()(),t.TgZ(11,"button",9,10),t.NdJ("mousedown",function(s){return a._handlePaginatorPress("after",s)})("click",function(){return a._handlePaginatorClick("after")})("touchend",function(){return a._stopInterval()}),t._UZ(13,"div",2),t.qZA()),2&e&&(t.ekj("mat-tab-header-pagination-disabled",a._disableScrollBefore),t.Q6J("matRippleDisabled",a._disableScrollBefore||a.disableRipple)("disabled",a._disableScrollBefore||null),t.xp6(5),t.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode),t.xp6(6),t.ekj("mat-tab-header-pagination-disabled",a._disableScrollAfter),t.Q6J("matRippleDisabled",a._disableScrollAfter||a.disableRipple)("disabled",a._disableScrollAfter||null))},dependencies:[u.wG,N.wD,F],styles:[".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-list._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}.mat-tab-label::before{margin:5px}@media(max-width: 599px){.mat-tab-label{min-width:72px}}"],encapsulation:2}),i})(),Et=0;class Ht{}const Ft=(0,u.pj)((0,u.Kr)(class{constructor(i){this._elementRef=i}}),"primary");let Zt=(()=>{class i extends Ft{constructor(e,a,n,s){super(e),this._changeDetectorRef=a,this._animationMode=s,this._tabs=new t.n_E,this._indexToSelect=0,this._lastFocusedTabIndex=null,this._tabBodyWrapperHeight=0,this._tabsSubscription=g.w0.EMPTY,this._tabLabelSubscription=g.w0.EMPTY,this._dynamicHeight=!1,this._selectedIndex=null,this.headerPosition="above",this._disablePagination=!1,this._preserveContent=!1,this.selectedIndexChange=new t.vpe,this.focusChange=new t.vpe,this.animationDone=new t.vpe,this.selectedTabChange=new t.vpe(!0),this._groupId=Et++,this.animationDuration=n&&n.animationDuration?n.animationDuration:"500ms",this.disablePagination=!(!n||null==n.disablePagination)&&n.disablePagination,this.dynamicHeight=!(!n||null==n.dynamicHeight)&&n.dynamicHeight,this.contentTabIndex=n?.contentTabIndex??null,this.preserveContent=!!n?.preserveContent}get dynamicHeight(){return this._dynamicHeight}set dynamicHeight(e){this._dynamicHeight=(0,p.Ig)(e)}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=(0,p.su)(e,null)}get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e+"")?e+"ms":e}get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=(0,p.su)(e,null)}get disablePagination(){return this._disablePagination}set disablePagination(e){this._disablePagination=(0,p.Ig)(e)}get preserveContent(){return this._preserveContent}set preserveContent(e){this._preserveContent=(0,p.Ig)(e)}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){const a=this._elementRef.nativeElement;a.classList.remove(`mat-background-${this.backgroundColor}`),e&&a.classList.add(`mat-background-${e}`),this._backgroundColor=e}ngAfterContentChecked(){const e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){const a=null==this._selectedIndex;if(!a){this.selectedTabChange.emit(this._createChangeEvent(e));const n=this._tabBodyWrapper.nativeElement;n.style.minHeight=n.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((n,s)=>n.isActive=s===e),a||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((a,n)=>{a.position=n-e,null!=this._selectedIndex&&0==a.position&&!a.origin&&(a.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{const e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){const a=this._tabs.toArray();let n;for(let s=0;s<a.length;s++)if(a[s].isActive){this._indexToSelect=this._selectedIndex=s,this._lastFocusedTabIndex=null,n=a[s];break}!n&&a[e]&&Promise.resolve().then(()=>{a[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe((0,k.O)(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(a=>a._closestTabGroup===this||!a._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){const a=this._tabHeader;a&&(a.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){const a=new Ht;return a.index=e,this._tabs&&this._tabs.length&&(a.tab=this._tabs.toArray()[e]),a}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=(0,w.T)(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e){return`mat-tab-label-${this._groupId}-${e}`}_getTabContentId(e){return`mat-tab-content-${this._groupId}-${e}`}_setTabBodyWrapperHeight(e){if(!this._dynamicHeight||!this._tabBodyWrapperHeight)return;const a=this._tabBodyWrapper.nativeElement;a.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(a.style.height=e+"px")}_removeTabBodyWrapperHeight(){const e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this.animationDone.emit()}_handleClick(e,a,n){e.disabled||(this.selectedIndex=a.focusIndex=n)}_getTabIndex(e,a){return e.disabled?null:a===(this._lastFocusedTabIndex??this.selectedIndex)?0:-1}_tabFocusChanged(e,a){e&&"mouse"!==e&&"touch"!==e&&(this._tabHeader.focusIndex=a)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(Y,8),t.Y36(t.QbO,8))},i.\u0275dir=t.lG2({type:i,inputs:{dynamicHeight:"dynamicHeight",selectedIndex:"selectedIndex",headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:"contentTabIndex",disablePagination:"disablePagination",preserveContent:"preserveContent",backgroundColor:"backgroundColor"},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},features:[t.qOj]}),i})(),jt=(()=>{class i extends Zt{constructor(e,a,n,s){super(e,a,n,s)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(Y,8),t.Y36(t.QbO,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-tab-group"]],contentQueries:function(e,a,n){if(1&e&&t.Suo(n,j,5),2&e){let s;t.iGM(s=t.CRH())&&(a._allTabs=s)}},viewQuery:function(e,a){if(1&e&&(t.Gf(mt,5),t.Gf(ft,5)),2&e){let n;t.iGM(n=t.CRH())&&(a._tabBodyWrapper=n.first),t.iGM(n=t.CRH())&&(a._tabHeader=n.first)}},hostAttrs:[1,"mat-tab-group"],hostVars:4,hostBindings:function(e,a){2&e&&t.ekj("mat-tab-group-dynamic-height",a.dynamicHeight)("mat-tab-group-inverted-header","below"===a.headerPosition)},inputs:{color:"color",disableRipple:"disableRipple"},exportAs:["matTabGroup"],features:[t._Bn([{provide:Z,useExisting:i}]),t.qOj],decls:6,vars:7,consts:[[3,"selectedIndex","disableRipple","disablePagination","indexFocused","selectFocusedIndex"],["tabHeader",""],["class","mat-tab-label mat-focus-indicator","role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",3,"id","mat-tab-label-active","ngClass","disabled","matRippleDisabled","click","cdkFocusChange",4,"ngFor","ngForOf"],[1,"mat-tab-body-wrapper"],["tabBodyWrapper",""],["role","tabpanel",3,"id","mat-tab-body-active","ngClass","content","position","origin","animationDuration","preserveContent","_onCentered","_onCentering",4,"ngFor","ngForOf"],["role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",1,"mat-tab-label","mat-focus-indicator",3,"id","ngClass","disabled","matRippleDisabled","click","cdkFocusChange"],[1,"mat-tab-label-content"],[3,"ngIf","ngIfElse"],["tabTextLabel",""],[3,"cdkPortalOutlet"],["role","tabpanel",3,"id","ngClass","content","position","origin","animationDuration","preserveContent","_onCentered","_onCentering"]],template:function(e,a){1&e&&(t.TgZ(0,"mat-tab-header",0,1),t.NdJ("indexFocused",function(s){return a._focusChanged(s)})("selectFocusedIndex",function(s){return a.selectedIndex=s}),t.YNc(2,Tt,5,15,"div",2),t.qZA(),t.TgZ(3,"div",3,4),t.YNc(5,xt,1,11,"mat-tab-body",5),t.qZA()),2&e&&(t.Q6J("selectedIndex",a.selectedIndex||0)("disableRipple",a.disableRipple)("disablePagination",a.disablePagination),t.xp6(2),t.Q6J("ngForOf",a._tabs),t.xp6(1),t.ekj("_mat-animation-noopable","NoopAnimations"===a._animationMode),t.xp6(2),t.Q6J("ngForOf",a._tabs))},dependencies:[m.mk,m.sg,m.O5,_.Pl,u.wG,I.kH,Q,G,Nt],styles:[".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}"],encapsulation:2}),i})(),Gt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.ez,u.BQ,_.eL,u.si,N.Q8,I.rt,u.BQ]}),i})();function Yt(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1," Name cannot be empty. "),t.qZA())}function Qt(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Password is too weak."),t.qZA())}function Wt(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Passwords do not match."),t.qZA())}function Ut(i,o){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Data has not changed."),t.qZA())}const zt=[{path:"",component:(()=>{class i{constructor(e,a,n,s){this._formBuilder=e,this.dialog=a,this._userService=n,this._snackBar=s,this.isPasswordWeak=!1,this.passwordsDoNotMatch=!1}ngOnInit(){const e=JSON.parse(localStorage.getItem("current user"));this.userData=this._formBuilder.group({email:[{value:e.email,disabled:!0}],firstname:[e.firstname,h.kI.required],password:[""],confirmPassword:[""]}),this.initialName=e.firstname}onSubmit(){this.isDataChanged=!0,this.setPasswordBooleans(),this.dataHasChanged()&&this.arePasswordsValid()?this.openConfirmDialog():this.isDataChanged=!!this.dataHasChanged()}isPasswordCorrect(){const a=this.userData.get("password");return/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(a?.value)}arePasswordsMatching(){return this.userData.get("password")?.value===this.userData.get("confirmPassword")?.value}setPasswordBooleans(){const e=this.userData.get("password");e?.touched&&""!==e.value&&(this.isPasswordWeak=!this.isPasswordCorrect(),this.passwordsDoNotMatch=!this.arePasswordsMatching())}arePasswordsValid(){return!this.isPasswordWeak&&!this.passwordsDoNotMatch}dataHasChanged(){return""!==this.userData.get("password")?.value||this.initialName!==this.userData.get("firstname")?.value}openConfirmDialog(){this.dialog.open($,{width:"30%",data:"change your credentials"}).afterClosed().subscribe(a=>{console.info("Detail dialog closed"),a&&this.modifyUserCredentials()})}modifyUserCredentials(){const e={email:this.userData.get("email")?.value,firstname:this.userData.get("firstname")?.value,password:this.userData.get("password")?.value,confirmPassword:this.userData.get("confirmPassword")?.value};this._userService.modifyCredentials(e).pipe((0,J.b)(a=>{localStorage.removeItem("current user"),localStorage.setItem("current user",JSON.stringify(a)),this.openSnackBar()})).subscribe()}openSnackBar(){this._snackBar.open("Credentials have been changed.","Close",{duration:3e3,panelClass:["custom-snackbar"]})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h.qu),t.Y36(T.uw),t.Y36(q.f),t.Y36(O.ux))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-account-settings"]],decls:37,vars:5,consts:[[1,"settings-container"],[1,"settings-content"],["mat-align-tabs","center"],["label","Settings"],[1,"settings-form",3,"formGroup"],["appearance","fill"],["matInput","","formControlName","email"],["matInput","","type","text","formControlName","firstname","required",""],[4,"ngIf"],["matInput","","type","password","formControlName","password"],["matInput","","type","password","formControlName","confirmPassword"],["mat-button","","type","submit",1,"change-button",3,"click"],["label","Orders"]],template:function(e,a){if(1&e&&(t._UZ(0,"app-navbar"),t.TgZ(1,"div",0)(2,"mat-card",1)(3,"mat-card-title"),t._uU(4,"User settings"),t.qZA(),t.TgZ(5,"mat-card-content")(6,"mat-tab-group",2)(7,"mat-tab",3)(8,"form",4)(9,"p")(10,"mat-form-field",5)(11,"mat-label"),t._uU(12,"E-mail"),t.qZA(),t._UZ(13,"input",6),t.qZA()(),t.TgZ(14,"p")(15,"mat-form-field",5)(16,"mat-label"),t._uU(17,"First name"),t.qZA(),t._UZ(18,"input",7),t.qZA(),t.YNc(19,Yt,2,0,"mat-error",8),t.qZA(),t.TgZ(20,"p")(21,"mat-form-field",5)(22,"mat-label"),t._uU(23,"Password"),t.qZA(),t._UZ(24,"input",9),t.qZA(),t.YNc(25,Qt,2,0,"mat-error",8),t.qZA(),t.TgZ(26,"p")(27,"mat-form-field",5)(28,"mat-label"),t._uU(29,"Confirm password"),t.qZA(),t._UZ(30,"input",10),t.qZA(),t.YNc(31,Wt,2,0,"mat-error",8),t.qZA(),t.TgZ(32,"button",11),t.NdJ("click",function(){return a.onSubmit()}),t._uU(33," Change credentials "),t.qZA(),t.YNc(34,Ut,2,0,"mat-error",8),t.qZA()(),t.TgZ(35,"mat-tab",12),t._uU(36," My orders "),t.qZA()()()()()),2&e){let n;t.xp6(8),t.Q6J("formGroup",a.userData),t.xp6(11),t.Q6J("ngIf",null==(n=a.userData.get("firstname"))||null==n.errors?null:n.errors.required),t.xp6(6),t.Q6J("ngIf",a.isPasswordWeak),t.xp6(6),t.Q6J("ngIf",a.passwordsDoNotMatch),t.xp6(3),t.Q6J("ngIf",!1===a.isDataChanged)}},dependencies:[m.O5,V.S,S.lW,C.TO,C.KE,C.hX,K.Nt,h._Y,h.Fj,h.JJ,h.JL,h.Q7,h.sg,h.u,x.a8,x.dn,x.n5,jt,j],styles:[".settings-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.settings-container[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{text-align:center}.settings-container[_ngcontent-%COMP%]   .settings-content[_ngcontent-%COMP%]{width:30%;display:flex;flex-direction:column}.settings-container[_ngcontent-%COMP%]   .settings-content[_ngcontent-%COMP%]   .settings-form[_ngcontent-%COMP%]{margin-top:2em;display:flex;flex-direction:column;align-items:center}.settings-container[_ngcontent-%COMP%]   .settings-content[_ngcontent-%COMP%]   .change-button[_ngcontent-%COMP%]{display:flex;float:right}"]}),i})()}];let Jt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[L.Bz.forChild(zt),L.Bz]}),i})();var $t=r(6269);let qt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[Jt,$t.m,x.QW,Gt,T.Is,O.ZX]}),i})()}}]);