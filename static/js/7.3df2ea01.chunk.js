(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{181:function(e,a,t){"use strict";var n=t(87),r=t(88);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=r(t(0)),o=(0,n(t(89)).default)(c.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");a.default=o},182:function(e,a,t){"use strict";var n=t(87),r=t(88);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=r(t(0)),o=(0,n(t(89)).default)(c.createElement(c.Fragment,null,c.createElement("path",{d:"M5 19h14V5H5v14zm5-7V8h4v4h3l-5 5-5-5h3z",opacity:".3"}),c.createElement("path",{d:"M17 12h-3V8h-4v4H7l5 5zm2-9h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64S3 4.72 3 5v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"})),"AssignmentReturnedTwoTone");a.default=o},229:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return z}));var n=t(55),r=t(0),c=t.n(r),o=t(12),i=t(182),s=t.n(i),l=t(167),u=t(170),d=t(234),m=t(22),p=t(232),b=t(236),h=t(224),j=t(222),v=t(181),f=t.n(v),g=t(2);function O(){return Math.round(20*Math.random())-10}function x(){var e=50+O(),a=50+O();return{top:"".concat(e,"%"),left:"".concat(a,"%"),transform:"translate(-".concat(e,"%, -").concat(a,"%)")}}var w=Object(l.a)((function(e){return{paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),alignItems:"center"},margin:{margin:e.spacing(1)},avatar:{margin:e.spacing(1),backgroundColor:"#19c719"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function z(){var e=w(),a=c.a.useState(x),t=Object(n.a)(a,1)[0],i=c.a.useState(!1),l=Object(n.a)(i,2),v=l[0],O=l[1],z=Object(o.b)(),C=Object(r.useState)(""),y=Object(n.a)(C,2),M=y[0],S=y[1],V=Object(r.useState)(""),k=Object(n.a)(V,2),A=k[0],H=k[1],N=Object(r.useState)(""),Z=Object(n.a)(N,2),E=Z[0],W=Z[1],_=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"name":return S(n);case"email":return H(n);case"password":return W(n);default:return}},q=Object(g.jsxs)("div",{style:t,className:e.paper,children:[Object(g.jsx)(b.a,{className:e.avatar,children:Object(g.jsx)(f.a,{})}),Object(g.jsx)(j.a,{component:"h1",variant:"h6",children:"Sing Up"}),Object(g.jsxs)("form",{className:e.root,noValidate:!0,onSubmit:function(e){e.preventDefault(),z(m.a.register({name:M,email:A,password:E})),S(""),H(""),W("")},autoComplete:"off",children:[Object(g.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Usename",name:"name",autoComplete:"name",autoFocus:!0,value:M,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:_}),Object(g.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",name:"email",autoComplete:"email",autoFocus:!0,value:A,onChange:_}),Object(g.jsx)(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password",autoComplete:"current-password",value:E,pattern:"^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",title:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0438\u0437 \u0432\u043e\u0441\u044c\u043c\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043f\u043e \u043a\u0440\u0430\u0439\u043d\u0435\u0439 \u043c\u0435\u0440\u0435 \u043e\u0434\u043d\u0430 \u0431\u0443\u043a\u0432\u0430 \u0438 \u043e\u0434\u043d\u043e \u0447\u0438\u0441\u043b\u043e",onChange:_}),Object(g.jsx)(u.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Register Me"})]})]});return Object(g.jsxs)(h.a,{container:!0,component:"main",className:e.root,children:[Object(g.jsx)(u.a,{variant:"contained",className:e.margin,type:"button",onClick:function(){O(!0)},children:Object(g.jsx)(s.a,{})}),Object(g.jsx)(d.a,{open:v,onClose:function(){O(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:q})]})}}}]);
//# sourceMappingURL=7.3df2ea01.chunk.js.map