webpackJsonp([1],{"4pZM":function(t,s){},"8/sa":function(t,s){},"8PTi":function(t,s){},"8pRX":function(t,s){},"9ip7":function(t,s){},"DoM+":function(t,s){},EbDw:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i={name:"Header",props:["checkLogin"],methods:{logout:function(t){var s=this;t.preventDefault(),this.$http.post("/user/logout").then(function(t){s.$store.commit("logout"),s.$router.push("/")}).catch(function(t){console.log("Logout API Error : "+t)})}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"navbar navbar-default",attrs:{id:"subnav"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"navbar-header"},[a("router-link",{staticClass:"navbar-btn btn btn-default btn-plus dropdown-toggle",staticStyle:{"margin-left":"15px"},attrs:{to:"/","data-toggle":"dropdown"}},[a("i",{staticClass:"glyphicon glyphicon-home",staticStyle:{color:"#dd1111"}}),t._v(" Home "),a("small",[a("i",{staticClass:"glyphicon glyphicon-chevron-down"})])]),t._v(" "),a("ul",{staticClass:"nav dropdown-menu"},[a("li",[a("router-link",{attrs:{to:"user/profile"}},[a("i",{staticClass:"glyphicon glyphicon-user",staticStyle:{color:"#1111dd"}}),t._v("\n          Profile")])],1),t._v(" "),a("li",{staticClass:"nav-divider"}),t._v(" "),a("li",[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"glyphicon glyphicon-cog",staticStyle:{color:"#dd1111"}}),t._v(" Settings")])],1)]),t._v(" "),t._m(0)],1),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar-collapse2"}},[t.checkLogin?a("ul",{staticClass:"nav navbar-nav navbar-right"},[a("li",[a("router-link",{staticClass:"active",attrs:{to:"/"}},[t._v("Posts")])],1),t._v(" "),a("li",[a("a",{on:{click:t.logout}},[t._v("로그아웃")])]),t._v(" "),a("li",[a("router-link",{attrs:{to:"/user/edit",role:"button"}},[t._v("개인정보수정")])],1)]):a("ul",{staticClass:"nav navbar-nav navbar-right"},[a("li",{staticClass:"active"},[a("router-link",{attrs:{to:"/"}},[t._v("Posts")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/user/login",role:"button"}},[t._v("로그인")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/user/form",role:"button"}},[t._v("회원가입")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar-collapse2"}},[s("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),s("span",{staticClass:"icon-bar"}),this._v(" "),s("span",{staticClass:"icon-bar"}),this._v(" "),s("span",{staticClass:"icon-bar"})])}]};var r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("nav",{staticClass:"navbar navbar-fixed-top header"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"navbar-header"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("SLiPP")]),t._v(" "),t._m(0)],1),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar-collapse1"}},[t._m(1),t._v(" "),a("ul",{staticClass:"nav navbar-nav navbar-right"},[a("li",[a("router-link",{staticClass:"dropdown-toggle",attrs:{to:"/","data-toggle":"dropdown"}},[a("i",{staticClass:"glyphicon glyphicon-bell"})]),t._v(" "),a("ul",{staticClass:"dropdown-menu"},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("SLiPP")])],1),t._v(" "),t._m(2)])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/user/list"}},[a("i",{staticClass:"glyphicon glyphicon-user"})])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar-collapse1"}},[s("i",{staticClass:"glyphicon glyphicon-search"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("form",{staticClass:"navbar-form pull-left"},[s("div",{staticClass:"input-group",staticStyle:{"max-width":"470px"}},[s("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search",name:"srch-term",id:"srch-term"}}),this._v(" "),s("div",{staticClass:"input-group-btn"},[s("button",{staticClass:"btn btn-default btn-primary",attrs:{type:"submit"}},[s("i",{staticClass:"glyphicon glyphicon-search"})])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("a",{attrs:{href:"https://facebook.com",target:"_blank"}},[this._v("Facebook")])])}]};var o={name:"App",components:{Header:a("VU/8")(i,n,!1,function(t){a("EbDw")},"data-v-8ba2a03e",null).exports,Nav:a("VU/8")({name:"Nav",props:["checkLogin"]},r,!1,function(t){a("8PTi")},"data-v-06d3f9fb",null).exports},methods:{checkUnload:function(){if(7==document.getElementById("main").innerHTML.length)return alert("잘못된 접근 방식입니다. \n메인 주소로 이동합니다."),this.$router.push({path:"/"}),!1}},mounted:function(){this.checkUnload()}},l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("header",[s("Nav",{attrs:{"check-login":this.$store.state.session}}),this._v(" "),s("Header",{attrs:{"check-login":this.$store.state.session}})],1),this._v(" "),s("section",[s("div",{staticClass:"container",attrs:{id:"main"}},[s("router-view",{attrs:{"check-login":this.$store.state.session,user:this.$store.state.user}})],1)])])},staticRenderFns:[]};var c=a("VU/8")(o,l,!1,function(t){a("wP3X")},null,null).exports,u=a("/ocq"),d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-12 col-sm-12 col-lg-10 col-lg-offset-1"},[a("div",{staticClass:"panel panel-default qna-list"},[a("ul",{staticClass:"list"},[a("li",[a("div",{staticClass:"wrap"},[a("div",{staticClass:"main"},[a("strong",{staticClass:"subject"},[a("router-link",{attrs:{to:"/qna/show/2"}},[t._v("국내에서 Ruby on Rails와 Play가 활성화되기 힘든 이유는 뭘까?")])],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])])]),t._v(" "),a("li",[a("div",{staticClass:"wrap"},[a("div",{staticClass:"main"},[a("strong",{staticClass:"subject"},[a("router-link",{attrs:{to:"/qna/show/1"}},[t._v("runtime 에 reflect 발동 주체 객체가 뭔지 알 방법이 있을까요?")])],1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"}),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"col-md-3 qna-write"},[a("router-link",{staticClass:"btn btn-primary pull-right",attrs:{to:"/qna/form",role:"button"}},[t._v("질문하기")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"auth-info"},[s("i",{staticClass:"icon-add-comment"}),this._v(" "),s("span",{staticClass:"time"},[this._v("2016-01-15 18:47")]),this._v(" "),s("a",{staticClass:"author",attrs:{href:"./user/profile.html"}},[this._v("자바지기")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"reply",attrs:{title:"댓글"}},[s("i",{staticClass:"icon-reply"}),this._v(" "),s("span",{staticClass:"point"},[this._v("8")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"auth-info"},[s("i",{staticClass:"icon-add-comment"}),this._v(" "),s("span",{staticClass:"time"},[this._v("2016-01-05 18:47")]),this._v(" "),s("a",{staticClass:"author",attrs:{href:"./user/profile.html"}},[this._v("김문수")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"reply",attrs:{title:"댓글"}},[s("i",{staticClass:"icon-reply"}),this._v(" "),s("span",{staticClass:"point"},[this._v("12")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6 text-center"},[a("ul",{staticClass:"pagination center-block",staticStyle:{display:"inline-block"}},[a("li",[a("a",{attrs:{href:"#"}},[t._v("«")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("1")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("2")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("3")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("4")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("5")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("»")])])])])}]};var v=a("VU/8")({name:"MainIndex",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(t){a("8/sa")},null,null).exports,m={name:"List",data:function(){return{listUsers:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$http.get("/user/list/getUserList.json").then(function(s){t.listUsers=s.data}).catch(function(t){console.log("List API Error : "+t)})}}},p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-10 col-md-offset-1"},[a("div",{staticClass:"panel panel-default"},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.listUsers,function(s,e){return a("tr",[a("th",{attrs:{scope:"row"}},[t._v(t._s(e+1))]),t._v(" "),a("td",[t._v(t._s(s.userId))]),t._v(" "),a("td",[t._v(t._s(s.name))]),t._v(" "),a("td",[t._v(t._s(s.email))]),t._v(" "),t._m(1,!0)])}),0)])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("사용자 아이디")]),t._v(" "),a("th",[t._v("이름")]),t._v(" "),a("th",[t._v("이메일")]),t._v(" "),a("th")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("td",[s("a",{staticClass:"btn btn-success",attrs:{href:"#",role:"button"}},[this._v("수정")])])}]};var h=a("VU/8")(m,p,!1,function(t){a("oAfz")},null,null).exports,f={name:"Form",methods:{userCreate:function(t){var s=this;t.preventDefault(),this.$http.post("/user/create",{userId:this.userId,password:this.password,name:this.name,email:this.email}).then(function(t){s.$router.push({path:"/"})}).catch(function(t){console.log("List API Error : "+t),s.loginFailed=!0})}}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("div",{staticClass:"panel panel-default content-main"},[a("form",{attrs:{name:"question",method:"post"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userId"}},[t._v("사용자 아이디")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],staticClass:"form-control",attrs:{id:"userId",name:"userId",placeholder:"User ID"},domProps:{value:t.userId},on:{input:function(s){s.target.composing||(t.userId=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("비밀번호")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("이름")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",placeholder:"Name"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("이메일")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-success clearfix pull-right",attrs:{type:"submit"},on:{click:t.userCreate}},[t._v("회원가입")]),t._v(" "),a("div",{staticClass:"clearfix"})])])])},staticRenderFns:[]};var g=a("VU/8")(f,_,!1,function(t){a("8pRX")},null,null).exports,C={name:"Update",props:["checkLogin","user"],methods:{update:function(t){var s=this,a="/user/edit/"+this.user.id;t.preventDefault(),this.$http.get(a,{params:{password:this.updatePassword,name:this.updateName,email:this.updateEmail}}).then(function(t){s.$router.push("/user/list")}).catch(function(t){console.log("Update API Error : "+t)})}}},b={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("div",{staticClass:"panel panel-default content-main"},[a("form",{attrs:{name:"question",method:"post"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userId"}},[t._v("아이디")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{readonly:""},domProps:{value:t.user.userId}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("비밀번호")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.updatePassword,expression:"updatePassword"}],staticClass:"form-control",attrs:{type:"password",id:"password",name:"password",required:""},domProps:{value:t.updatePassword},on:{input:function(s){s.target.composing||(t.updatePassword=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("이름")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.updateName,expression:"updateName"}],staticClass:"form-control",attrs:{id:"name",name:"name"},domProps:{value:t.updateName},on:{input:function(s){s.target.composing||(t.updateName=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("이메일")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.updateEmail,expression:"updateEmail"}],staticClass:"form-control",attrs:{type:"email",id:"email",name:"email"},domProps:{value:t.updateEmail},on:{input:function(s){s.target.composing||(t.updateEmail=s.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-success clearfix pull-right",attrs:{type:"submit"},on:{click:t.update}},[t._v("정보 수정")]),t._v(" "),a("div",{staticClass:"clearfix"})])])])},staticRenderFns:[]};var w=a("VU/8")(C,b,!1,function(t){a("4pZM")},"data-v-1059cd48",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-md-6 col-md-offset-3"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[s("h4",[this._v("Profiles")])]),this._v(" "),s("div",{staticClass:"panel-body"},[s("div",{staticClass:"well well-sm"},[s("div",{staticClass:"media"},[s("a",{staticClass:"thumbnail pull-left",attrs:{href:"#"}},[s("img",{staticClass:"media-object",attrs:{src:""}})]),this._v(" "),s("div",{staticClass:"media-body"},[s("h4",{staticClass:"media-heading"},[this._v("자바지기")]),this._v(" "),s("p",[s("a",{staticClass:"btn btn-xs btn-default",attrs:{href:"#"}},[s("span",{staticClass:"glyphicon glyphicon-envelope"}),this._v(" javajigi@slipp.net")])])])])])])])])}]};var $=a("VU/8")({name:"Profile"},y,!1,function(t){a("YROv")},"data-v-42b790fc",null).exports,k={name:"Login",data:function(){return{loginFailed:!1}},methods:{validateLogin:function(t){var s=this;t.preventDefault(),this.$http.post("/user/login",{userId:this.userId,password:this.password}).then(function(t){s.$store.commit("login"),s.$store.state.user=t.data,s.$router.push("/")}).catch(function(t){console.log("Login API Error : "+t),s.loginFailed=!0})}}},x={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-6 col-md-offset-3"},[a("div",{staticClass:"panel panel-default content-main"},[t.loginFailed?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("아이디 또는 비밀번호가 틀립니다. 다시 로그인 해주세요.")]):t._e(),t._v(" "),a("form",{attrs:{name:"question",method:"post",action:"/user/login"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userId"}},[t._v("사용자 아이디")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userId,expression:"userId"}],staticClass:"form-control",attrs:{id:"userId",name:"userId",placeholder:"User ID"},domProps:{value:t.userId},on:{input:function(s){s.target.composing||(t.userId=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("비밀번호")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-success clearfix pull-right",attrs:{type:"submit"},on:{click:t.validateLogin}},[t._v("로그인")]),t._v(" "),a("div",{staticClass:"clearfix"})])])])},staticRenderFns:[]};var P=a("VU/8")(k,x,!1,function(t){a("9ip7")},"data-v-20aa8bf4",null).exports,E={name:"Form",props:["user"],methods:{question:function(t){var s=this;t.preventDefault(),this.$http.post("/qna/form",{title:this.title,contents:this.contents}).then(function(t){s.$router.push({path:"/qna/show/"+t.data})}).catch(function(t){console.log("Qna Form API "+t)})}}},q={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-12 col-sm-12 col-lg-10 col-lg-offset-1"},[a("div",{staticClass:"panel panel-default content-main"},[a("form",{attrs:{name:"question",method:"post",action:""}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"writer"}},[t._v("글쓴이")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{id:"writer",name:"writer",readonly:""},domProps:{value:t.user.name}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("제목")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"title",name:"title",placeholder:"제목"},domProps:{value:t.title},on:{input:function(s){s.target.composing||(t.title=s.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"contents"}},[t._v("내용")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contents,expression:"contents"}],staticClass:"form-control",attrs:{name:"contents",id:"contents",rows:"5"},domProps:{value:t.contents},on:{input:function(s){s.target.composing||(t.contents=s.target.value)}}})]),t._v(" "),a("button",{staticClass:"btn btn-success clearfix pull-right",attrs:{type:"submit"},on:{click:t.question}},[t._v("질문하기")]),t._v(" "),a("div",{staticClass:"clearfix"})])])])},staticRenderFns:[]};var I=a("VU/8")(E,q,!1,function(t){a("DoM+")},"data-v-0ff799bb",null).exports,N={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"qna-comment-slipp"},[s("p",{staticClass:"qna-comment-count"},[s("strong",[this._v(this._s(this.replyCnt))]),this._v("개의 의견")]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"qna-comment-slipp-articles"},[s("form",{staticClass:"submit-write"},[s("div",{staticClass:"form-group",staticStyle:{padding:"14px"}},[s("textarea",{staticClass:"form-control",attrs:{placeholder:"Update your status"}})]),this._v(" "),s("button",{staticClass:"btn btn-success pull-right",attrs:{type:"button"}},[this._v("답변하기")]),this._v(" "),s("div",{staticClass:"clearfix"})])])}]};var U={name:"Show",components:{Answer:a("VU/8")({name:"answer",props:["answer"],data:function(){return{replyCnt:0}},mounted:function(){this.replyCnt=this.answer.length}},N,!1,function(t){a("Wa+Z")},"data-v-8669212e",null).exports},props:["id"],data:function(){return{qna:[],writerName:""}},methods:{load:function(){var t=this;this.$http.post("/qna/show/"+this.id).then(function(s){t.qna=s.data,t.writerName=s.data.writer.name}).catch(function(t){console.log("Qna Show API "+t)})},delete:function(t){var s=this;t.preventDefault(),this.$http.post("/qna/delete/"+this.qna.idx).then(function(t){s.$router.push("/")}).catch(function(t){console.log("Qna Delete API "+t)})}},mounted:function(){this.load()}},L={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-md-12 col-sm-12 col-lg-12"},[a("div",{staticClass:"panel panel-default"},[a("header",{staticClass:"qna-header"},[a("h2",{staticClass:"qna-title"},[t._v(" "+t._s(this.qna.title))])]),t._v(" "),a("div",{staticClass:"content-main"},[a("article",{staticClass:"article"},[a("div",{staticClass:"article-header"},[t._m(0),t._v(" "),a("div",{staticClass:"article-header-text"},[a("p",{staticClass:"article-author-name"},[t._v(" "+t._s(t.writerName)+" ")]),t._v(" "),a("p",{staticClass:"article-header-time",attrs:{title:"퍼머링크"}},[t._v("\n              "+t._s(this.qna.formattedCreateDate)+"\n              "),a("i",{staticClass:"icon-link"})])])]),t._v(" "),a("div",{staticClass:"article-doc"},[t._v("\n          "+t._s(this.qna.contents)+"\n        ")]),t._v(" "),a("div",{staticClass:"article-util"},[a("ul",{staticClass:"article-util-list"},[a("li",[a("router-link",{staticClass:"link-modify-article",attrs:{to:"/qna/edit/"+this.qna.idx}},[t._v("수정")])],1),t._v(" "),a("li",[a("form",{staticClass:"form-delete",attrs:{method:"POST"}},[a("input",{attrs:{type:"hidden",name:"_method",value:"DELETE"}}),t._v(" "),a("button",{staticClass:"link-delete-article",attrs:{type:"submit"},on:{click:this.delete}},[t._v("삭제")])])]),t._v(" "),a("li",[a("router-link",{staticClass:"link-modify-article",attrs:{to:"/"}},[t._v("목록")])],1)])])]),t._v(" "),a("div",{staticClass:"qna-comment"},[a("Answer",{attrs:{answer:this.qna.answer}})],1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"article-header-thumb"},[s("img",{staticClass:"article-author-thumb",attrs:{src:"https://graph.facebook.com/v2.3/100000059371774/picture",alt:""}})])}]};var F=a("VU/8")(U,L,!1,function(t){a("lKk9")},"data-v-37b20949",null).exports;e.a.use(u.a);var R=new u.a({mode:"history",routes:[{path:"/",component:v},{path:"/user/list",component:h},{path:"/user/profile",component:$},{path:"/user/edit",component:w},{path:"/user/form",component:g},{path:"/user/login",component:P},{path:"/qna/form",component:I},{path:"/qna/show/:id",component:F,props:!0}]}),D=a("mtWM"),S=a.n(D),A=a("NYxO");e.a.use(A.a);var V=new A.a.Store({state:{session:!1,user:[]},getters:{getSession:function(t){return t.session},getUser:function(t){return t.user}},mutations:{login:function(t){t.session=!0},logout:function(t){t.session=!1,t.user=[]}},actions:{checkLogin:function(t){S.a.post("/user/checkLogin").then(function(s){t.commit("login"),t.state.user=s.data}).catch(function(t){console.log("CheckLogin API "+t)})}}});e.a.prototype.$http=S.a,new e.a({render:function(t){return t(c)},router:R,store:V,beforeCreate:function(){this.$store.dispatch("checkLogin")}}).$mount("#main")},"Wa+Z":function(t,s){},YROv:function(t,s){},lKk9:function(t,s){},oAfz:function(t,s){},wP3X:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.98d7323175374a1eb948.js.map