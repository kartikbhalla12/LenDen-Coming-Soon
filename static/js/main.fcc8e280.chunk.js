(this["webpackJsonplenden-coming-soon"]=this["webpackJsonplenden-coming-soon"]||[]).push([[0],{37:function(e,t,a){e.exports=a(60)},42:function(e,t,a){},52:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),i=a.n(s),o=(a(42),a(20)),c=a.n(o),l=a(25),m=a(8),d=a(9),u=a(14),h=a(13),v=a(62),p=a(64),g=a(63),E=a(18),y=a.n(E),f=(a(45),a(26)),b=a(31),w=(a(52),a(34)),x=a(10),S=a.n(x),N=a(65),B=a(27),k=a.n(B),W=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:{},error:"",success:"",loading:!1,date:{days:0,hours:0,minutes:0,seconds:0}},e.schema={email:S.a.string().email().required().label("Email")},e.componentDidMount=function(){e.myInterval=setInterval((function(){var t=y()("2020-07-14").countdown();e.setState({date:{days:t.days,hours:t.hours,minutes:t.minutes,seconds:t.seconds}})}),1e3)},e.doSubmit=Object(l.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.state.data,e.setState({loading:!0});try{setTimeout((function(){e.setState({loading:!1,success:"Subscribed Successfully!"})}),2e3)}catch(a){"Something Failed",e.setState({error:"Something Failed"}),e.setState({loading:!1})}case 3:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.date,t=e.days,a=e.minutes,n=e.hours,s=e.seconds;return r.a.createElement("div",{className:"mainBox"},r.a.createElement("div",{className:"subBox"},r.a.createElement(v.a,{src:"".concat("","/logo.png"),style:{maxWidth:"260px",width:"40vw",marginBottom:"2vh"}}),r.a.createElement("h1",{className:"companyName"},"Hello there!"),r.a.createElement("p",{className:"comingSoon",style:{marginBottom:"2vh",marginTop:"1vh"}},"Times are testing. We hope that you are safe and healthy."),r.a.createElement("p",{className:"comingSoon"},"We are in the process of redefining exchange and our team is super glad that you decided to stick with us from Day 1."),r.a.createElement("p",{className:"comingSoon"},"However, we might need some time and patience from you. Our team sincerely hopes that you stick with us while we launch our social media handles."),r.a.createElement("p",{className:"comingSoon"},"Getting curious? Write to us at"," ",r.a.createElement("a",{href:"mailto: info@lendenindia.in"},"info@lendenindia.in")),r.a.createElement("div",{className:"timerBox",style:{display:"flex",padding:"10px",alignItems:"flex-end"}},r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%",position:"relative"}},r.a.createElement(v.a,{src:"".concat("","/phone.png"),style:{maxHeight:"13vw",maxWidth:"70%"}}),r.a.createElement("div",null,t),r.a.createElement("div",{className:"timerElementName"},"Days")),r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%",position:"relative"}},r.a.createElement(v.a,{src:"".concat("","/book.png"),style:{maxHeight:"15vw",maxWidth:"60%"}}),r.a.createElement("div",null,n),r.a.createElement("div",{className:"timerElementName"},"Hours")),r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%",position:"relative"}},r.a.createElement(v.a,{src:"".concat("","/gaming.png"),style:{maxHeight:"15vw",maxWidth:"70%"}}),r.a.createElement("div",null,a),r.a.createElement("div",{className:"timerElementName"},"Minutes")),r.a.createElement("div",{className:"timerElement",style:{flexBasis:"25%",position:"relative"}},r.a.createElement(v.a,{src:"".concat("","/headphones.png"),style:{maxHeight:"15vw",maxWidth:"70%"}}),r.a.createElement("div",null,s),r.a.createElement("div",{className:"timerElementName"},"Seconds"))),r.a.createElement("div",{style:{border:"1px solid #FDBA49",marginTop:"6vh",width:"80vw",maxWidth:"400px",padding:"15px 25px",margin:"5vh auto "}},r.a.createElement(f.a,{icon:b.a,style:{color:"#FDBA49",fontSize:"35px",marginTop:"1vh",marginBottom:"2vh"}}),r.a.createElement("p",{className:"newsletter"},"No love (news)letters, purely barter."),r.a.createElement("p",{className:"newsletter"}," Subscribe now"),r.a.createElement(p.a,{style:{maxWidth:300,margin:"auto"},noValidate:!0,onSubmit:this.handleSubmit},this.renderInput("email","Email Address"),this.renderAlert(),this.renderSuccessAlert(),this.renderLoader(),r.a.createElement(g.a,{variant:"primary",type:"submit",style:{backgroundColor:"#FDBA49",border:"none"}},"Subscribe")))))}}]),a}(function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={data:{},error:"",success:""},e.handleChange=function(t){var a=t.currentTarget,n=Object(w.a)({},e.state.data);n[a.name]=a.value,e.setState({data:n})},e.validate=function(){var t=S.a.validate(e.state.data,e.schema).error;return t?t.details[0].message:""},e.handleSubmit=function(t){t.preventDefault(),e.setState({success:"",error:""});var a=e.validate();e.setState({error:a}),a||e.doSubmit()},e.renderAlert=function(){var t=e.state.error;return t&&r.a.createElement(N.a,{id:"error-alert",variant:"danger"},t)},e.renderSuccessAlert=function(){var t=e.state.success;return t&&r.a.createElement(N.a,{id:"error-success",variant:"primary"},t)},e.renderLoader=function(){return r.a.createElement(k.a,{css:{display:"block",margin:"3vh auto 3vh auto"},size:50,color:"#FDBA49",loading:e.state.loading})},e.resetForm=function(){e.setState({data:{email:""}})},e}return Object(d.a)(a,[{key:"renderInput",value:function(e,t){var a=this.state.data;return r.a.createElement(p.a.Group,{controlId:e},r.a.createElement(p.a.Control,{className:"input",name:e,type:e,placeholder:t,value:a[e],onChange:this.handleChange}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(58);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.fcc8e280.chunk.js.map