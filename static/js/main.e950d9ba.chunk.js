(this["webpackJsonplenden-coming-soon"]=this["webpackJsonplenden-coming-soon"]||[]).push([[0],{37:function(e,a,t){e.exports=t(60)},42:function(e,a,t){},52:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(6),o=t.n(s),i=(t(42),t(20)),l=t.n(i),c=t(25),m=t(8),d=t(9),u=t(14),h=t(13),v=t(62),p=t(64),g=t(63),E=t(18),f=t.n(E),y=(t(45),t(26)),b=t(31),S=(t(52),t(34)),w=t(10),x=t.n(w),N=t(65),B=t(27),A=t.n(B),j=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={data:{},error:"",success:"",loading:!1,date:{days:0,hours:0,minutes:0,seconds:0}},e.schema={email:x.a.string().email().required().label("Email")},e.componentDidMount=function(){e.myInterval=setInterval((function(){var a=f()("2020-07-03").countdown();e.setState({date:{days:a.days,hours:a.hours,minutes:a.minutes,seconds:a.seconds}})}),1e3)},e.doSubmit=Object(c.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.state.data,e.setState({loading:!0});try{setTimeout((function(){e.setState({loading:!1,success:"Subscribed Successfully!"})}),2e3)}catch(t){"Something Failed",e.setState({error:"Something Failed"}),e.setState({loading:!1})}case 3:case"end":return a.stop()}}),a)}))),e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state.date,a=e.days,t=e.minutes,n=e.hours,s=e.seconds;return r.a.createElement("div",{className:"mainBox"},r.a.createElement("div",{className:"subBox"},r.a.createElement(v.a,{src:"".concat("/LenDen-Coming-Soon","/logo.png"),style:{maxWidth:"260px",width:"40vw",borderRadius:"100%",border:"2px solid #424242"}}),r.a.createElement("h1",{className:"companyName"},"Hola Amigos, "),r.a.createElement("p",{className:"comingSoon",style:{marginBottom:"4vh",marginTop:"1vh"}},"We hope you are well and safe during these tough times."),r.a.createElement("p",{className:"comingSoon"},"Thank you for visiting our website. We are coming soon to redefine exchange. Brace yourselves."),r.a.createElement("p",{className:"comingSoon",style:{marginTop:"0vh"}},"We will soon be launching our social media handles."),r.a.createElement("div",{className:"timerBox",style:{display:"flex",border:"1px solid #FDBA49",padding:"10px"}},r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%"}},r.a.createElement("div",null,a),r.a.createElement("div",{className:"timerElementName"},"Days")),r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%"}},r.a.createElement("div",null,n),r.a.createElement("div",{className:"timerElementName"},"Hours")),r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%"}},r.a.createElement("div",null,t),r.a.createElement("div",{className:"timerElementName"},"Minutes")),r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%"}},r.a.createElement("div",null,s),r.a.createElement("div",{className:"timerElementName"},"Seconds")))),r.a.createElement("div",{style:{border:"1px solid #FDBA49",marginTop:"6vh",width:"80vw",maxWidth:"400px",padding:"15px 25px",margin:"5vh auto "}},r.a.createElement(y.a,{icon:b.a,style:{color:"#FDBA49",fontSize:"35px",marginTop:"1vh",marginBottom:"2vh"}}),r.a.createElement("p",{className:"newsletter"},"Do not miss any update from us."),r.a.createElement("p",{className:"newsletter"},"Subscribe to our newsletter"),r.a.createElement(p.a,{style:{maxWidth:300,margin:"auto"},noValidate:!0,onSubmit:this.handleSubmit},this.renderInput("email","Email Address"),this.renderAlert(),this.renderSuccessAlert(),this.renderLoader(),r.a.createElement(g.a,{variant:"primary",type:"submit",style:{backgroundColor:"#FDBA49",border:"none"}},"Subscribe"))))}}]),t}(function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=a.call.apply(a,[this].concat(s))).state={data:{},error:"",success:""},e.handleChange=function(a){var t=a.currentTarget,n=Object(S.a)({},e.state.data);n[t.name]=t.value,e.setState({data:n})},e.validate=function(){var a=x.a.validate(e.state.data,e.schema).error;return a?a.details[0].message:""},e.handleSubmit=function(a){a.preventDefault(),e.setState({success:"",error:""});var t=e.validate();e.setState({error:t}),t||e.doSubmit()},e.renderAlert=function(){var a=e.state.error;return a&&r.a.createElement(N.a,{id:"error-alert",variant:"danger"},a)},e.renderSuccessAlert=function(){var a=e.state.success;return a&&r.a.createElement(N.a,{id:"error-success",variant:"primary"},a)},e.renderLoader=function(){return r.a.createElement(A.a,{css:{display:"block",margin:"3vh auto 3vh auto"},size:50,color:"#FDBA49",loading:e.state.loading})},e.resetForm=function(){e.setState({data:{email:""}})},e}return Object(d.a)(t,[{key:"renderInput",value:function(e,a){var t=this.state.data;return r.a.createElement(p.a.Group,{controlId:e},r.a.createElement(p.a.Control,{className:"input",name:e,type:e,placeholder:a,value:t[e],onChange:this.handleChange}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(58);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.e950d9ba.chunk.js.map