(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"App_container__3Ap_-"}},11:function(t,e,n){t.exports={contactList:"ContactList_contactList__1VawV",contact:"ContactList_contact__39szH"}},14:function(t,e,n){t.exports={input:"Filter_input__2GG64"}},2:function(t,e,n){t.exports={form:"ContactForm_form__3CNFi",text:"ContactForm_text__1X5TX",input:"ContactForm_input__2KJsN",btn:"ContactForm_btn__3ImuC"}},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=(n(21),n(16)),i=n(4),u=n(5),l=n(7),m=n(6),b=n(13),h=n.n(b),j=n(10),d=n.n(j),p=n(14),f=n.n(p),C=n(0),x=function(t){var e=t.value,n=t.onChange;return Object(C.jsxs)("label",{children:["Find contacts by name",Object(C.jsx)("input",{className:f.a.input,type:"text",name:"filter",value:e,onChange:n})]})},O=n(15),_=n(2),v=n.n(_),N=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleNameChenge=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(O.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(C.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(C.jsx)("p",{className:v.a.text,children:"Name"}),Object(C.jsx)("input",{className:v.a.input,type:"text",name:"name",value:e,onChange:this.handleNameChenge,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(C.jsx)("p",{className:v.a.text,children:"Number"}),Object(C.jsx)("input",{className:v.a.input,type:"tel",name:"number",value:n,onChange:this.handleNameChenge,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(C.jsx)("button",{className:v.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=n(11),y=n.n(g),S=n(8),k=n.n(S),A=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("p",{className:k.a.contactName,children:[n,":"]}),Object(C.jsx)("p",{className:k.a.contactNumber,children:a}),Object(C.jsx)("button",{className:k.a.contactBtn,onClick:function(){return c(e)},children:"delete"})]})},F=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(C.jsx)("ul",{className:y.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(C.jsx)("li",{className:y.a.contact,children:Object(C.jsx)(A,{id:e,name:a,number:c,onDeleteContact:n})},e)}))})},w=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:h.a.generate(),name:n,number:a};t.state.contacts.some((function(t){return t.name===n}))?alert("".concat(n," is alreaby in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))},t.deleteContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.chengeFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(C.jsxs)("div",{className:d.a.container,children:[Object(C.jsx)("h1",{className:d.a.title,children:"Phonebook"}),Object(C.jsx)(N,{onSubmit:this.addContact}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(x,{value:t,onChange:this.chengeFilter}),Object(C.jsx)(F,{contacts:e,onDeleteContact:this.deleteContacts})]})}}]),n}(a.Component);o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(w,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={contactName:"ContactItem_contactName__3OkL9",contactNumber:"ContactItem_contactNumber__Nk8T-",contactBtn:"ContactItem_contactBtn__UrpvJ"}}},[[31,1,2]]]);
//# sourceMappingURL=main.96100b9e.chunk.js.map