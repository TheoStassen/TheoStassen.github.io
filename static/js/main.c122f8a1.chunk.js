(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(8),l=c.n(a),i=(c(14),c(2)),r=(c(15),[{checklist_id:0,id:-1,num_values:[{var:"difficult_intubation",val:1},{var:"diabetic",val:1}],values:[{id:1,name:"Intubation Difficile ? ",cond:{yes:[],no:[],num:[]},check:["yes","no","idk"],pre_check:{if:[{var:"difficult_intubation",op:"=",val:1}],then:"yes"},values:[{id:2,name:"A confirmer l'incubation difficile",cond:{yes:[],no:[],idk:[1],num:[]},check:["yes","no"],values:[]},{id:3,name:"2\xe8me Anesth\xe9siste",cond:{yes:[1],no:[],num:[]},check:["yes","no"],values:[]},{id:4,name:"2\xe8me Infirmi\xe8re",cond:{yes:[1],no:[],num:[]},check:["yes","no"],values:[]},{id:5,name:"Mat\xe9riel",cond:{yes:[1],no:[],num:[]},check:[],values:[{id:6,name:"Glidescope",cond:{yes:[1],no:[],num:[]},check:["yes","no"],values:[]},{id:7,name:"Laryngoscope",cond:{yes:[1],no:[],num:[]},check:["yes","no"],values:[]},{id:8,name:"Set Trach\xe9o",cond:{yes:[1],no:[],num:[]},check:["yes","no"],values:[]}]},{id:9,name:"Protocole",cond:{yes:[1],no:[],num:[]},check:["yes","no"],values:[]}]},{id:10,name:"Est-elle susceptible d'\xeatre enceinte ?",comment:"(Les donn\xe9es patient nous indiquent que la patiente est \xe2g\xe9e entre 15 et 60 ans)",cond:{yes:[],no:[],num:[{var:"yearofbirth",op:">",val:1960},{var:"gender",op:"=",val:"F"}]},check:["yes","no"],values:[{id:11,name:"Arr\xeat des r\xeagles depuis ?",cond:{yes:[10],no:[],num:[]},check:["text"],values:[]},{id:12,name:"Test disponible ?",cond:{yes:[10],no:[],num:[]},check:["yes","no"],values:[{id:13,name:"N\xe9gatif ?",cond:{yes:[12],no:[],num:[]},check:["yes","no"],values:[]},{id:14,name:"Faire test maintenant ?",cond:{yes:[],no:[12],num:[]},check:["yes","no"],values:[]},{id:15,name:"Postposer l'intervention ?",cond:{yes:[],no:[12],num:[]},check:["yes","no"],values:[]}]}]},{id:16,name:"Le patient est-il diab\xe9tique ?",cond:{yes:[],no:[],num:[]},check:["yes","no"],pre_check:{if:[{var:"diabetic",op:"=",val:1}],then:"yes"},values:[{id:17,name:"Traitement Oral ?",cond:{yes:[16],no:[],num:[]},check:["yes","no"],values:[{id:18,name:"Arr\xeat des m\xe9dicaments ?",cond:{yes:[17],no:[],num:[]},check:["yes","no"],values:[]}]},{id:19,name:"Traitement par piqure \xe0 insuline ?",cond:{yes:[16],no:[17],num:[]},check:["yes","no"],values:[{id:20,name:"Derni\xe8re piqure le ? ",cond:{yes:[19],no:[],num:[]},check:["text"],values:[]}]}]}]},{checklist_id:1,id:-1,num_values:[{var:"Intubation_difficile",val:1},{var:"Diab\xe9tique",val:1}],values:[{id:1,name:"Intubation ? ",cond:{yes:[],no:[],num:[]},check:["yes","no","?"],pre_check:{if:[{var:"Intubation_difficile",op:"=",val:1}],then:"yes"},values:[]},{id:2,name:"Test ? ",cond:{yes:[],no:[],num:[]},check:["yes","no","?"],values:[]}]}]),o=[{id:0,name:"Jean Dupont",gender:"M",yearofbirth:1970},{id:1,name:"Robert Edwards",gender:"M",yearofbirth:1998},{id:2,name:"Luc Monjeau",gender:"M",yearofbirth:1965},{id:3,name:"Eglantine Racine",gender:"F",yearofbirth:1987},{id:4,name:"Georgette Cailot",gender:"F",yearofbirth:1941}],d=["yes","no","idk","ok","not_ok"],m={yes:"Oui",no:"Non",idk:"?",ok:"OK",not_ok:"Non OK"},u=["diabetic","age","yearofbirth","difficult_intubation","gender"],j={diabetic:"Diab\xe9tique",age:"\xc2ge",yearofbirth:"Ann\xe9e de naissance",difficult_intubation:"Intubation Difficile",gender:"Genre"},b=["<",">","="],h=function(e){return m[e]},x=function(e){return j[e]},p=function(e,t,c){switch(t){case">":return e>c;case"<":return e<c;case"=":return e===c;default:return!0}};function v(e,t,c,s){this.dataArray=e,this.fileName=t,this.separator=c||",",this.addQuotes=!!s,this.addQuotes&&(this.separator='"'+this.separator+'"'),this.getDownloadLink=function(){var e=this.separator,t=this.addQuotes,c="data:text/csv;charset=utf-8",s=this.dataArray.map((function(c){var s=c.join(e);return s.length&&t?'"'+s+'"':s})).join("\n");return"function"===typeof btoa?(c+=";base64",s=btoa(s)):s=encodeURIComponent(s),this.downloadLink=this.downloadLink||c+","+s},this.getLinkElement=function(e){var t=this.getDownloadLink(),c=this.fileName;return this.linkElement=this.linkElement||function(){var s=document.createElement("a");return s.innerHTML=e||"",s.href=t,s.download=c,s}(),this.linkElement},this.download=function(e){var t=this.getLinkElement();t.style.display="none",document.body.appendChild(t),t.click(),e&&document.body.removeChild(t)}}var O=c(0);function N(e){var t=e.props,c=t.setCreationMode,s=t.setCreditMode,n=t.trimmedCanvasUrl,a=t.result,l=t.checklistList,r=t.swapchecklist;var o=function(){s(0)};return Object(O.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light border-bottom border-light shadow-sm mb-4",children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)("a",{className:"navbar-brand",href:"#",onClick:o,children:Object(O.jsx)("text",{className:"text-custom text-title",children:"SLS"})}),Object(O.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(O.jsx)("span",{className:"navbar-toggler-icon"})}),Object(O.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(O.jsxs)("div",{className:"navbar-nav",children:[Object(O.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:Object(O.jsx)("text",{className:"text-custom",onClick:o,children:"Page d'accueil"})}),Object(O.jsx)("a",{className:"nav-link",href:"#",onClick:function(){for(var e=[["id","name","answer"]],t=0,c=Object.entries(a);t<c.length;t++){var s=Object(i.a)(c[t],2),n=s[0],l=s[1];e.push([n,l.name,l.answer])}new v(e,"my_csv.csv").download(!0)},children:Object(O.jsx)("text",{className:"text-custom",children:"Importer la checklist"})}),Object(O.jsx)("a",{className:"nav-link",href:"#",onClick:function(){n&&f(n,"image.png")},children:Object(O.jsx)("text",{className:"text-custom",children:"Importer la signature"})}),Object(O.jsxs)("li",{className:"nav-item dropdown",children:[Object(O.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(O.jsx)("text",{className:"text-custom",children:"Liste des checklists disponibles"})}),Object(O.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:l.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return r(e.checklist_id)},children:Object(O.jsxs)("text",{className:"text-custom",children:["Checklist n\xb0",e.checklist_id]})})})}))})]}),Object(O.jsx)("a",{className:"nav-link",href:"#",onClick:function(){c(1)},children:Object(O.jsx)("text",{className:"text-custom",children:"Activer le mode Cr\xe9ation"})}),Object(O.jsx)("a",{className:"nav-link",href:"#",onClick:function(){c(0)},children:Object(O.jsx)("text",{className:"text-custom",children:"D\xe9sactiver le mode Cr\xe9ation"})}),Object(O.jsx)("a",{className:"nav-link",href:"#",onClick:function(){s(1)},children:Object(O.jsx)("text",{className:"text-custom",children:"A propos"})})]})})]})})}var f=function(e,t){var c=document.createElement("a");c.href=e,c.download=t,document.body.appendChild(c),c.click()},g=c(9),y=c.n(g);function k(e){var t=e.props,c=t.sigpad,s=t.setTrimmedCanvasUrl;return Object(O.jsx)("div",{className:"container mt-5 mx-auto p-0 container-custom",children:Object(O.jsxs)("div",{className:"row align-items-center p-0 m-0 h-100",children:[Object(O.jsx)("div",{className:"col-sm-3 m-0 p-0 text-center",children:Object(O.jsx)("div",{className:"card card-grey shadow-sm mx-4",children:Object(O.jsx)("div",{className:"card-body",children:Object(O.jsx)("text",{className:"text-custom",children:"Veuillez rentrer votre signature : "})})})}),Object(O.jsx)("div",{className:"col m-0 p-0 h-100 ",children:Object(O.jsx)("div",{className:"sigContainer",children:Object(O.jsx)(y.a,{canvasProps:{className:"sigPad"},ref:function(e){c=e}})})}),Object(O.jsxs)("div",{className:"col-md-auto mx-2 p-0",children:[Object(O.jsx)("div",{className:"row align-items-center p-0 m-0 w-100 mb-2",children:Object(O.jsx)("button",{type:"button",className:"btn btn-val shadow-sm",children:Object(O.jsx)("text",{className:"text-custom",onClick:function(){var e=c.getTrimmedCanvas().toDataURL();s(e)},children:"Valider la signature"})})}),Object(O.jsx)("div",{className:" row align-items-center p-0 m-0 h-100",children:Object(O.jsx)("button",{type:"button",className:"btn btn-change shadow-sm",children:Object(O.jsx)("text",{className:"text-custom",onClick:function(){c.clear(),s(null)},children:"R\xe9initialiser"})})})]})]})})}var w=c(7),C=c(6),_=c(3),S=c.n(_);function M(e){var t=e.props,c=t.checklist,n=t.setChecklist,a=t.swapchecklist,l=t.checklistList,r=t.setChecklistList,o=t.checklistId,m=t.setChecklistId,j=t.forceUpdate,p=Object(s.useState)(c.values[0]),v=Object(i.a)(p,2),N=v[0],f=v[1],g=Object(s.useState)(c),y=Object(i.a)(g,2),k=y[0],_=y[1],M=Object(s.useState)(c.values[0].name),L=Object(i.a)(M,2),E=L[0],q=L[1],Q=Object(s.useState)(c.comment?c.comment:null),A=Object(i.a)(Q,2),I=A[0],B=A[1],D=Object(s.useState)({}),P=Object(i.a)(D,2),T=P[0],K=P[1],U=Object(s.useState)({}),F=Object(i.a)(U,2),V=F[0],z=F[1];console.log("main",N);var R=[];!function e(t){t.id>0&&R.push(t.id);var c,s=Object(C.a)(t.values);try{for(s.s();!(c=s.n()).done;){e(c.value)}}catch(n){s.e(n)}finally{s.f()}}(c);var J=[];J=[],d.forEach((function(e){J.push({labelKey:e,value:h(e),isSelected:N.check.includes(e)})}));var G=[];G=[],u.forEach((function(e){G.push({labelKey:e,value:x(e)})}));var H=[];H=[],b.forEach((function(e){H.push({labelKey:e,value:e})}));var W=[];function X(){f(N),_(k),n(c),r(l)}function Y(e){f(e.values[0]),_(e),q(e.values[0].name)}function Z(e,t,c){e.id===c&&(console.log("found",e),k=t,f(N=e),_(k),q(N.name),K({}));var s,n=Object(C.a)(e.values);try{for(n.s();!(s=n.n()).done;){Z(s.value,e,c)}}catch(a){n.e(a)}finally{n.f()}}function $(){k.values=k.values.filter((function(e){return e.id!==N.id})),X(),Y(c)}function ee(e){var t=Object(w.a)({},N);t.cond={yes:[e],no:[],num:[]},$(),Z(c,null,e),N.values.push(t),X(),Z(c,null,t.id),j()}W=[],N.check.forEach((function(e){W.push({labelKey:e,value:h(e)})}));var te=function(e){e.selectedKey.length&&(N.check=e.selectedKey,f(N))},ce=function(e){Y(c=a(e)),j()},se=function(e){T||(T={}),T.var=e.selectedKey[0],K(T),j()},ne=function(e){T||(T={}),T.op=e.selectedKey[0],K(T),j()},ae=function(e){T||(T={}),T.val=e.target.value,K(T),j()},le=function(e){V||(V={}),V.var=e.selectedKey[0],z(V),j()},ie=function(e){V||(V={}),V.op=e.selectedKey[0],z(V),j()},re=function(e){V||(V={}),V.val=e.target.value,z(V),j()},oe=function(e){V||(V={}),V.then=e.selectedKey[0],z(V),j()};return Object(O.jsxs)("div",{className:"container p-2 container-custom border border-2 shadow-sm",children:[Object(O.jsx)("div",{className:"card card-grey text-center mb-2 ",children:Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:Object(O.jsx)("text",{className:"text-custom",children:"Mode Cr\xe9ation "})}),Object(O.jsx)("p",{className:"card-text text-custom m-0",children:"Vous pouvez ajouter, supprimer, modifier des checklists et des questions ici."}),Object(O.jsx)("p",{className:"card-text text-custom",children:"La checklist modifi\xe9e s'affiche en dessous."})]})}),Object(O.jsxs)("div",{className:"row align-items-center p-0 m-0 pb-2 border-bottom border-",children:[Object(O.jsx)("div",{className:"col align-items-center ",children:Object(O.jsxs)("div",{className:"dropdown text-center",children:[Object(O.jsx)("button",{className:"btn btn-val dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(O.jsx)("text",{className:"text-custom",children:" S\xe9lectionnez la checklist"})}),Object(O.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){!function(){var e=l[l.length-1].checklist_id+1,t={checklist_id:e,id:-1,num_values:[],values:[{id:1,name:"Vide",check:["yes","no"],cond:{yes:[],no:[],num:[]},values:[]}]};l.push(t),r(l),ce(e)}(),j()},children:Object(O.jsx)("text",{className:"text-custom",children:"Nouvelle checklist"})})}),l.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return ce(e.checklist_id)},children:Object(O.jsxs)("text",{className:"text-custom",children:["Checklist n\xb0",e.checklist_id]})})})}))]})]})}),Object(O.jsx)("div",{className:"col align-items-center p-2",children:Object(O.jsx)("div",{className:"card card-grey text-center shadow-sm",children:Object(O.jsxs)("text",{className:"text-custom",children:["Checklist n\xb0",o," "]})})}),Object(O.jsx)("div",{className:"col align-items-center p-2",children:Object(O.jsx)("div",{className:"card card-grey text-center shadow-sm",children:Object(O.jsxs)("text",{className:"text-custom",children:["Question n\xb0",N.id]})})}),Object(O.jsx)("div",{className:"col align-items-center ",children:Object(O.jsxs)("div",{className:"dropdown text-center",children:[Object(O.jsx)("button",{className:"btn btn-val dropdown-toggle ",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(O.jsx)("text",{className:"text-custom ",children:" S\xe9lectionnez la question"})}),Object(O.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(e){!function(){var e=R[R.length-1],t={id:e+1,name:"Nom vide",cond:{yes:[],no:[],num:[]},check:["yes","no"],values:[]};c.values.push(t),X(),Z(c,null,e+1)}(),j()},children:Object(O.jsx)("text",{className:"text-custom",children:"Nouvelle question"})})}),R.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){Z(c,null,e)},children:Object(O.jsxs)("text",{className:"text-custom",children:["Question n\xb0",e]})})})}))]})]})})]}),Object(O.jsxs)("div",{className:"row align-items-center p-2 m-0 border-bottom",children:[Object(O.jsx)("div",{className:"col-sm-4 align-items-center ",children:Object(O.jsx)("text",{className:"text-custom",children:" Nom de la question : "})}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center",children:Object(O.jsx)("input",{className:"card w-100 text-custom",type:"text ","aria-label":"text input",value:E,onChange:function(e){E=e.target.value,q(E)}})}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center p-0 text-center",children:Object(O.jsx)("button",{className:"btn btn-change",children:Object(O.jsx)("text",{className:"text-custom",onClick:function(e){N.name=E,X(),j()},children:"Valider le nom"})})})]}),Object(O.jsxs)("div",{className:"row align-items-center p-2 m-0 border-bottom",children:[Object(O.jsx)("div",{className:"col-sm-4 align-items-center ",children:Object(O.jsx)("text",{className:"text-custom",children:" Commentaire (optionnel) de la question : "})}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center",children:Object(O.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"2",value:I,onChange:function(e){I=e.target.value,B(I)}})}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center p-0 text-center",children:Object(O.jsx)("button",{className:"btn btn-change",onClick:function(e){I?N.comment=I:delete N.comment,X(),j()},children:Object(O.jsx)("text",{className:"text-custom",children:"Valider le commentaire"})})})]}),Object(O.jsxs)("div",{className:"row align-items-center p-2 m-0 border-bottom",children:[Object(O.jsx)("div",{className:"col-sm-4 align-items-center",children:Object(O.jsx)("text",{className:"text-custom",children:"Souhaitez vous placer la question \xe0 la suite d'une autre ? : "})}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center"}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center p-0 text-center",children:Object(O.jsxs)("div",{className:"dropdown text-center",children:[Object(O.jsx)("button",{className:"btn btn-change dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(O.jsx)("text",{className:"text-custom",children:" A la suite de quelle question ?"})}),Object(O.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return ee(-1)},children:Object(O.jsx)("text",{className:"text-custom",children:"Aucune"})})}),R.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return ee(e)},children:Object(O.jsxs)("text",{className:"text-custom",children:["Question n\xb0",e]})})})}))]})]})})]}),Object(O.jsxs)("div",{className:"row align-items-center p-2 m-0 border-bottom",children:[Object(O.jsx)("div",{className:"col-sm-4 align-items-center",children:Object(O.jsx)("text",{className:"text-custom",children:"S\xe9lectionnez la position de la question : "})}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center"}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center p-0 text-center",children:Object(O.jsxs)("div",{className:"dropdown text-center",children:[Object(O.jsx)("button",{className:"btn btn-change dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(O.jsx)("text",{className:"text-custom",children:" Quelle position ?"})}),Object(O.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:k.values.map((function(e,t){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return function(e){var t=Object(w.a)({},N);$(),Z(c,null,k.id),N.values.splice(e,0,t),X(),Z(c,null,t.id),j()}(t)},children:Object(O.jsxs)("text",{className:"text-custom",children:["Question n\xb0",e.id]})})})}))})]})})]}),Object(O.jsxs)("div",{className:"row align-items-center p-2 m-0 border-bottom",children:[Object(O.jsx)("div",{className:"col-sm-4 align-items-center",children:Object(O.jsx)("text",{className:"text-custom",children:"Quelles r\xe9ponses possibles ? : "})}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center"}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center p-0 text-center",children:R.map((function(e){return e===N.id?Object(O.jsx)(S.a,{options:J,isMultiSelect:!0,placeholder:"Aucune",onChange:te,onClose:j}):null}))})]}),Object(O.jsxs)("div",{className:"border-bottom m-0 p-0 text-center",children:[Object(O.jsx)("button",{className:"btn btn-change m-auto p-2 my-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseQuestionConditions","aria-expanded":"false","aria-controls":"collapseExample",children:Object(O.jsxs)("text",{className:"text-custom",children:[" ",Object(O.jsx)("i",{className:"fas fa-caret-down"}),"Ajouter/Supprimer des conditions sur les autres questions ",Object(O.jsx)("i",{className:"fas fa-caret-down"})," "]})}),Object(O.jsx)("div",{className:"collapse m-0 p-0",id:"collapseQuestionConditions",children:Object(O.jsxs)("div",{className:"row align-items-center p-2 m-0",children:[Object(O.jsx)("div",{className:"col-sm-3 align-items-center",children:Object(O.jsx)("text",{className:"text-custom",children:"Quelles conditions sur les r\xe9ponses ? : "})}),Object(O.jsx)("div",{className:"col-sm-9 align-items-center",children:d.map((function(e){return Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col align-items-center p-2 my-auto",children:Object(O.jsx)("div",{className:"card card-grey text-center shadow-sm m-0 ",children:Object(O.jsx)("text",{className:"text-custom",children:h(e)})})}),Object(O.jsx)("div",{className:"col align-items-center p-2",children:Object(O.jsx)("div",{className:"input-group m-0",children:N.cond[e]?N.cond[e].map((function(t){return Object(O.jsx)("div",{className:"input-group-prepend",children:Object(O.jsxs)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return function(e,t){N.cond[e]=N.cond[e].filter((function(e){return e!==t})),console.log(N),f(N),X(),j()}(e,t)},children:[Object(O.jsx)("text",{className:"text-custom",children:t})," "]})})})):null})}),Object(O.jsx)("div",{className:"col align-items-center p-2",children:Object(O.jsxs)("div",{className:"dropdown text-center",children:[Object(O.jsx)("button",{className:"btn btn-change dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(O.jsx)("text",{className:"text-custom",children:" Quelle question ?"})}),Object(O.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:R.map((function(t,c){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return function(e,t){N.cond[e].push(t),f(N),X(),j()}(e,t)},children:Object(O.jsxs)("text",{className:"text-custom",children:["Question n\xb0",t]})})})}))})]})})]})}))})]})})]}),Object(O.jsxs)("div",{className:"border-bottom m-0 p-0 text-center",children:[Object(O.jsx)("button",{className:"btn btn-change m-auto p-2 my-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseNumConditions","aria-expanded":"false","aria-controls":"collapseExample",children:Object(O.jsxs)("text",{className:"text-custom",children:[Object(O.jsx)("i",{className:"fas fa-caret-down"})," Ajouter/Supprimer des conditions num\xe9riques ",Object(O.jsx)("i",{className:"fas fa-caret-down"})," "]})}),Object(O.jsx)("div",{className:"collapse m-0 p-0",id:"collapseNumConditions",children:Object(O.jsxs)("div",{className:"col align-items-center p-2 m-0 border-bottom",children:[N.cond.num?N.cond.num.map((function(e,t){return Object(O.jsxs)("div",{className:"row justify-content-md-center py-2",children:[Object(O.jsx)("div",{className:"col-sm-2 align-items-center my-auto",children:Object(O.jsx)("div",{className:"card card-grey shadow-sm text-center",children:Object(O.jsx)("text",{className:"text-custom",children:x(e.var)})})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center my-auto ",children:Object(O.jsx)("div",{className:"card card-grey shadow-sm text-center",children:Object(O.jsx)("text",{className:"text-custom",children:e.op})})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center my-auto ",children:Object(O.jsx)("div",{className:"card card-grey shadow-sm text-center",children:Object(O.jsx)("text",{className:"text-custom",children:e.val})})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center my-auto text-center",children:Object(O.jsx)("button",{className:"btn btn-delete",onClick:function(){return function(e){console.log("supprimer",e),N.cond.num.splice(e,1),console.log(N.cond.num),f(N),X(),j()}(t)},children:Object(O.jsx)("div",{className:"text-custom",children:Object(O.jsx)("i",{className:"fas fa-trash"})})})})]})})):null,Object(O.jsx)("div",{children:R.map((function(e){return e===N.id?Object(O.jsxs)("div",{className:"row justify-content-md-center py-2",children:[Object(O.jsx)("div",{className:"col-sm-2 align-items-center ",children:Object(O.jsx)(S.a,{className:"w-100 text-custom",selectStyle:"btn btn-light border",placeholder:"Quelle variable ?",options:G,onChange:se})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center ",children:Object(O.jsx)(S.a,{className:"w-100 text-custom",selectStyle:"btn btn-light border",placeholder:"Quel op\xe9rateur ?",options:H,onChange:ne})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center ",children:Object(O.jsx)("input",{type:"number",className:"form-control text-custom",placeholder:"Quelle valeur ?",onChange:ae})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center text-center",children:Object(O.jsx)("button",{className:"btn btn-change w-100 ",onClick:function(){T.var&&T.op&&T.val&&(N.cond.num.push({var:T.var,op:T.op,val:T.val}),f(N),X(),j())},children:Object(O.jsx)("div",{className:"text-custom",children:"Valider"})})})]}):null}))})]})})]}),Object(O.jsxs)("div",{className:"border-bottom m-0 p-0 text-center",children:[Object(O.jsx)("button",{className:"btn btn-change m-auto p-2 my-2",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsePreCheck","aria-expanded":"false","aria-controls":"collapseExample",children:Object(O.jsxs)("text",{className:"text-custom",children:[Object(O.jsx)("i",{className:"fas fa-caret-down"})," Ajouter/Supprimer des conditions pour que la question soit pr\xe9-check\xe9e",Object(O.jsx)("i",{className:"fas fa-caret-down"})," "]})}),Object(O.jsx)("div",{className:"collapse m-0 p-0",id:"collapsePreCheck",children:Object(O.jsxs)("div",{className:"col align-items-center p-2 m-0 border-bottom",children:[N.pre_check?N.pre_check.if.map((function(e,t){return Object(O.jsxs)("div",{className:"row justify-content-md-center py-2",children:[Object(O.jsx)("div",{className:"col-sm-2 align-items-center my-auto",children:Object(O.jsx)("div",{className:"card card-grey shadow-sm text-center",children:Object(O.jsx)("text",{className:"text-custom",children:x(e.var)})})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center my-auto ",children:Object(O.jsx)("div",{className:"card card-grey shadow-sm text-center",children:Object(O.jsx)("text",{className:"text-custom",children:e.op})})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center my-auto ",children:Object(O.jsx)("div",{className:"card card-grey shadow-sm text-center",children:Object(O.jsx)("text",{className:"text-custom",children:e.val})})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center my-auto text-center",children:Object(O.jsx)("button",{className:"btn btn-delete",onClick:function(){return function(e){console.log("supprimer",e),N.pre_check.if.splice(e,1),N.pre_check.if.length||(N.pre_check=null),console.log(N.cond.num),f(N),X(),j()}(t)},children:Object(O.jsx)("div",{className:"text-custom",children:Object(O.jsx)("i",{className:"fas fa-trash"})})})})]})})):null,N.pre_check?Object(O.jsx)("div",{className:"row justify-content-md-center py-2",children:Object(O.jsx)("div",{className:"col-sm-2 align-items-center my-auto ",children:Object(O.jsx)("div",{className:"card card-grey shadow-sm text-center",children:Object(O.jsx)("text",{className:"text-custom",children:h(N.pre_check.then)})})})}):null,Object(O.jsx)("div",{children:R.map((function(e){return e===N.id?Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"row justify-content-md-center py-2",children:[Object(O.jsx)("div",{className:"col-sm-2 align-items-center ",children:Object(O.jsx)(S.a,{className:"w-100 text-custom",selectStyle:"btn btn-light border",placeholder:"Quelle variable ?",options:G,onChange:le})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center ",children:Object(O.jsx)(S.a,{className:"w-100 text-custom",selectStyle:"btn btn-light border",placeholder:"Quel op\xe9rateur ?",options:H,onChange:ie})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center ",children:Object(O.jsx)("input",{type:"number",className:"form-control text-custom",placeholder:"Quelle valeur ?",onChange:re})}),Object(O.jsx)("div",{className:"col-sm-2 align-items-center text-center",children:Object(O.jsx)("button",{className:"btn btn-change w-100 ",onClick:function(){V.var&&V.op&&V.val&&V.then&&(N.pre_check||(N.pre_check={if:[],then:null}),N.pre_check.then=V.then,N.pre_check.if.push({var:V.var,op:V.op,val:V.val}),f(N),X(),j())},children:Object(O.jsx)("div",{className:"text-custom",children:"Valider"})})})]}),Object(O.jsx)("div",{className:"row justify-content-md-center py-2",children:Object(O.jsx)("div",{className:"col-sm-2 align-items-center ",children:Object(O.jsx)(S.a,{className:"w-100 text-custom",selectStyle:"btn btn-light border",placeholder:"Quel pre-check ?",options:W,onChange:oe})})})]}):null}))})]})})]}),Object(O.jsxs)("div",{className:"row align-items-center p-2 m-0",children:[Object(O.jsx)("div",{className:"col-sm-4 align-items-center text-center",children:Object(O.jsx)("button",{className:"btn btn-change ",children:Object(O.jsx)("text",{className:"text-custom",onClick:function(e){console.log(l,o),l=l.filter((function(e){return e.checklist_id!==o})),console.log(l),m(l[0].checklist_id),c=l[0],X(),Y(c),j()},children:"Supprimer la checklist"})})}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center text-center",children:Object(O.jsx)("button",{className:"btn btn-change ",children:Object(O.jsx)("text",{className:"text-custom",onClick:function(){return function(e){var t="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e));console.log(t);var c=document.createElement("a");c.href=t,c.download="checklist.json",document.body.appendChild(c),c.click(),c.remove()}(l)},children:"Sauvegarder la liste de checklists"})})}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center text-center",children:Object(O.jsx)("button",{className:"btn btn-change ",children:Object(O.jsx)("text",{className:"text-custom",onClick:function(e){$(),j()},children:"Supprimer la question"})})})]})]})}function L(e){e.props;return Object(O.jsx)("div",{className:"card-inv text-center position-absolute top-50 start-50 translate-middle",children:Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title m-0",children:Object(O.jsx)("text",{className:"text-custom",children:"SLS Checklist App"})}),Object(O.jsx)("p",{className:"card-text text-custom m-0",children:"v0.5"}),Object(O.jsx)("p",{className:"card-text text-custom m-0",children:"D\xe9velopp\xe9 par Th\xe9o Stassen"}),Object(O.jsx)("p",{className:"card-text text-custom",children:"theo.stassen@protonmail.com"})]})})}function E(e){var t=e.props,c=t.patientList,s=t.currentPatient,n=t.setCurrentPatient;return Object(O.jsx)("div",{className:"container p-2 container-custom border border-2 shadow-sm",children:Object(O.jsxs)("div",{className:"row align-items-center p-2 m-0",children:[Object(O.jsx)("div",{className:"col-sm-4 align-items-center ",children:Object(O.jsx)("text",{className:"text-custom",children:" Patient Actuel : "})}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center ",children:Object(O.jsx)("div",{className:"card card-grey text-center shadow-sm",children:Object(O.jsx)("text",{className:"text-custom",children:s.name})})}),Object(O.jsx)("div",{className:"col-sm-4 align-items-center ",children:Object(O.jsxs)("div",{className:"dropdown text-center",children:[Object(O.jsx)("button",{className:"btn btn-val dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(O.jsx)("text",{className:"text-custom",children:" S\xe9lectionnez le patient"})}),Object(O.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:c.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return function(e){var t=c.filter((function(t){return t.id===e}))[0];n(t)}(e.id)},children:Object(O.jsx)("text",{className:"text-custom",children:e.name})})})}))})]})})]})})}function q(e){var t=e.init_items,c=e.item,s=e.dicts,n=e.forceUpdate,a=e.values_filter_cond,l=e.creationMode,r=Object(i.a)(s,7),o=r[0],m=r[1],u=r[2],j=r[3],b=r[4],x=r[5],v=r[6],N=function(e){var s=!o[e][c.id],n=d.filter((function(t){return t!==e}));s?(j[c.id]={name:c.name,answer:e},Q(t,t,c.id,o,m,j,n)):(delete j[c.id],Q(t,t,c.id,o,m,j,[e])),b(j),o[e][c.id]=s,n.forEach((function(e){o[e][c.id]=!1})),m(o)};c.pre_check&&!x.includes(c.id)&&c.pre_check.if.every((function(e){return p(u[e.var],e.op,e.val)}))&&(N(c.pre_check.then),x.push(c.id),v(x));var f=null,g=null;return c.values&&(g=a(c.values,o,u,l)),g&&g.length&&(f=Object(O.jsx)("ul",{className:"mb-0",children:g.map((function(e){return Object(O.jsx)(q,{init_items:t,item:e,dicts:s,forceUpdate:n,values_filter_cond:a})}))})),Object(O.jsxs)("div",{className:"container m-0 mt-3 p-0 mx-auto",children:[Object(O.jsxs)("div",{className:"row align-items-center m-0 p-0",children:[Object(O.jsx)("div",{className:"col-sm-1 m-0 p-0 w-auto",children:Object(O.jsx)("div",{className:"card card-grey text-center w-100 shadow-sm",children:Object(O.jsx)("div",{className:"card-body",children:Object(O.jsx)("text",{children:c.id})})})}),Object(O.jsxs)("div",{className:"col m-0 p-0 ",children:[c.comment?Object(O.jsx)("div",{className:"alert alert-info m-0 mt-0 align- shadow-sm",role:"alert",children:Object(O.jsxs)("p",{className:"mb-0",children:[" ",Object(O.jsx)("text",{className:"text-custom",children:c.comment})," "]})}):null,Object(O.jsx)("div",{className:"card w-100 shadow-sm",children:Object(O.jsx)("div",{className:"card-body",children:Object(O.jsx)("text",{className:"text-custom",children:c.name})})})]}),c.check.length?Object(O.jsx)("div",{className:"col-md-auto",children:Object(O.jsxs)("div",{className:"input-group ",children:[d.map((function(e){return c.check.includes(e)?Object(O.jsx)("div",{className:"input-group-prepend ",children:Object(O.jsx)("div",{className:"input-group-text shadow",children:Object(O.jsxs)("text",{className:"text-custom",children:[Object(O.jsx)("input",{type:"checkbox","aria-label":"Checkbox",checked:o[e][c.id],onChange:function(t){N(e),n()}}),"\xa0",h(e)]})})}):null})),c.check.includes("text")?Object(O.jsx)("div",{className:"input-group-prepend",children:Object(O.jsx)("div",{className:"input-group-text",children:Object(O.jsx)("input",{type:"text","aria-label":"text input",onChange:function(e){var t=e.target.value;j[c.id]={name:c.name,answer:t},b(j)}})})}):null]})}):Object(O.jsxs)("div",{className:"col-sm-8",children:[" ",null," "]})]}),f]})}function Q(e,t,c,s,n,a,l){var i=!1;t.cond&&l.forEach((function(e){t.cond[e]&&t.cond[e].includes(c)&&(d.forEach((function(e){s[e][t.id]=!1})),delete a[t.id],i=!0)})),t.values&&t.values.length&&t.values.forEach((function(t){Q(e,t,c,s,n,a,l)})),c!==t.id&&i&&Q(e,e,t.id,s,n,a,l)}function A(){var e=Object(s.useReducer)((function(e){return e+1}),0),t=Object(i.a)(e,2)[1],c=Object(s.useState)(0),n=Object(i.a)(c,2),a=n[0],l=n[1],m=Object(s.useState)(r),u=Object(i.a)(m,2),j=u[0],b=u[1],h=Object(s.useState)(o),x=Object(i.a)(h,2),p=x[0],v=(x[1],Object(s.useState)(p[0])),f=Object(i.a)(v,2),g=f[0],y=f[1],w=Object(s.useState)(j.filter((function(e){return e.checklist_id===a}))[0]),C=Object(i.a)(w,2),_=C[0],S=C[1],Q=Object(s.useState)({}),A=Object(i.a)(Q,2),B=A[0],D=A[1],P=Object(s.useState)([]),T=Object(i.a)(P,2),K=T[0],U=T[1],F=Object(s.useState)(0),V=Object(i.a)(F,2),z=V[0],R=V[1],J=Object(s.useState)(0),G=Object(i.a)(J,2),H=G[0],W=G[1],X=Object(s.useState)(null),Y=Object(i.a)(X,2),Z=Y[0],$=Y[1],ee={};d.forEach((function(e){ee[e]={0:!0}}));var te=Object(s.useState)(ee),ce=Object(i.a)(te,2),se=ce[0],ne=ce[1],ae=_.num_values,le={};ae.forEach((function(e){le[e.var]=e.val})),le.yearofbirth=g.yearofbirth,le.gender=g.gender;var ie=[se,ne,le,B,D,K,U],re=null;_.values&&(re=I(_.values,se,le,z));var oe=function(e){return l(e),_=j.filter((function(t){return t.checklist_id===e}))[0],S(_),D({}),ne(ee),U([]),_};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"bg-color-custom min-vh-100",children:[Object(O.jsx)(N,{props:{setCreationMode:R,setCreditMode:W,trimmedCanvasUrl:Z,result:B,checklistList:j,swapchecklist:oe}}),H?Object(O.jsx)(L,{props:null}):Object(O.jsxs)("div",{children:[z?Object(O.jsx)(M,{props:{checklist:_,setChecklist:S,swapchecklist:oe,checklistList:j,setChecklistList:b,checklistId:a,setChecklistId:l,forceUpdate:t}}):Object(O.jsx)(E,{props:{patientList:p,currentPatient:g,setCurrentPatient:y}}),re?re.map((function(e){return Object(O.jsx)(q,{init_items:_,item:e,dicts:ie,forceUpdate:t,values_filter_cond:I,creationMode:z})})):null,z?null:Object(O.jsx)(k,{props:{sigpad:{},setTrimmedCanvasUrl:$}})]})]}),Object(O.jsx)("div",{children:Object(O.jsx)("nav",{className:"navbar navbar-hidden",children:Object(O.jsx)("a",{className:"navbar-brand",href:"#",children:null})})})]})}function I(e,t,c,s){return e.filter((function(e){return Object.keys(e.cond).every((function(c){return"num"===c||!e.cond[c]||e.cond[c].every((function(e){return t[c][e]}))}))&&(s||e.cond.num.every((function(e){return!c[e.var]||p(c[e.var],e.op,e.val)})))}))}var B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,24)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),a(e),l(e)}))};l.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root")),B()}},[[23,1,2]]]);
//# sourceMappingURL=main.c122f8a1.chunk.js.map