(this["webpackJsonplenden-coming-soon"]=this["webpackJsonplenden-coming-soon"]||[]).push([[0],{37:function(e,t,a){e.exports=a(60)},42:function(e,t,a){},52:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),o=a.n(s),l=(a(42),a(20)),c=a.n(l),i=a(25),m=a(8),u=a(9),d=a(14),h=a(13),v=a(62),g=a(64),f=a(63),p=a(18),E=a.n(p),y=(a(45),a(26)),b=a(31),S=(a(52),a(34)),w=a(10),x=a.n(w),N=a(65),B=a(27),j=a.n(B),k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:{},error:"",success:"",loading:!1,date:{days:0,hours:0,minutes:0,seconds:0}},e.schema={email:x.a.string().email().required().label("Email")},e.componentDidMount=function(){e.myInterval=setInterval((function(){var t=E()("2020-07-03").countdown();e.setState({date:{days:t.days,hours:t.hours,minutes:t.minutes,seconds:t.seconds}})}),1e3)},e.doSubmit=Object(i.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.state.data,e.setState({loading:!0});try{setTimeout((function(){e.setState({loading:!1,success:"Subscribed Successfully!"})}),2e3)}catch(a){"Something Failed",e.setState({error:"Something Failed"}),e.setState({loading:!1})}case 3:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state.date,t=e.days,a=e.minutes,n=e.hours,s=e.seconds;return r.a.createElement("div",{className:"mainBox"},r.a.createElement("div",{className:"subBox"},r.a.createElement(v.a,{src:"".concat("/LenDen-Coming-Soon","/demoLogo.png"),style:{maxWidth:"260px",width:"40vw"}}),r.a.createElement("h1",{className:"companyName"},"Hola Amigos, "),r.a.createElement("p",{className:"comingSoon",style:{marginBottom:"6vh",marginTop:"1vh"}},"We hope you are well and safe during these tough times."),r.a.createElement("p",{className:"comingSoon"},"Thank you for visiting our website. We are coming soon to redefine exchange. Brace yourselves."),r.a.createElement("p",{className:"comingSoon",style:{marginTop:"0vh"}},"We will soon be launching our social media handles."),r.a.createElement("div",{className:"timerBox",style:{display:"flex"}},r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%"}},r.a.createElement("div",null,t),r.a.createElement("div",null,"Days")),r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%"}},r.a.createElement("div",null,n),r.a.createElement("div",null,"Hours")),r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%"}},r.a.createElement("div",null,a),r.a.createElement("div",null,"Minutes")),r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%"}},r.a.createElement("div",null,s),r.a.createElement("div",null,"Seconds")))),r.a.createElement("div",null,r.a.createElement(y.a,{icon:b.a,style:{color:"#fff",fontSize:"35px",marginTop:"6vh",marginBottom:"2vh"}}),r.a.createElement("p",{className:"newsletter"},"Do not miss any update from us."),r.a.createElement("p",{className:"newsletter"},"Subscribe to our newsletter"),r.a.createElement(g.a,{style:{maxWidth:300,margin:"auto"},noValidate:!0,onSubmit:this.handleSubmit},this.renderInput("email","Email Address"),this.renderAlert(),this.renderSuccessAlert(),this.renderLoader(),r.a.createElement(f.a,{variant:"primary",type:"submit",style:{backgroundColor:"#ef5350",border:"none"}},"Subscribe"))))}}]),a}(function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={data:{},error:"",success:""},e.handleChange=function(t){var a=t.currentTarget,n=Object(S.a)({},e.state.data);n[a.name]=a.value,e.setState({data:n})},e.validate=function(){var t=x.a.validate(e.state.data,e.schema).error;return t?t.details[0].message:""},e.handleSubmit=function(t){t.preventDefault(),e.setState({success:"",error:""});var a=e.validate();e.setState({error:a}),a||e.doSubmit()},e.renderAlert=function(){var t=e.state.error;return t&&r.a.createElement(N.a,{id:"error-alert",variant:"danger"},t)},e.renderSuccessAlert=function(){var t=e.state.success;return t&&r.a.createElement(N.a,{id:"error-success",variant:"primary"},t)},e.renderLoader=function(){return r.a.createElement(j.a,{css:{display:"block",margin:"3vh auto 3vh auto"},size:50,color:"#ef5350",loading:e.state.loading})},e.resetForm=function(){e.setState({data:{email:""}})},e}return Object(u.a)(a,[{key:"renderInput",value:function(e,t){var a=this.state.data;return r.a.createElement(g.a.Group,{controlId:e},r.a.createElement(g.a.Control,{className:"input",name:e,type:e,placeholder:t,value:a[e],onChange:this.handleChange}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(58);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5ce96656.chunk.js.map