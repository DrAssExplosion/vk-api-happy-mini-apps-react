(this["webpackJsonpvk-api-happy-mini-apps"]=this["webpackJsonpvk-api-happy-mini-apps"]||[]).push([[0],{200:function(e,t,n){e.exports=n(324)},324:function(e,t,n){"use strict";n.r(t);n(201),n(227),n(229),n(230),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269);var a=n(0),r=n.n(a),o=n(23),c=n.n(o),i=n(13),s=n.n(i),u=n(11),l=n.n(u),p=n(25),_=n(58),m=n(116),d=n.n(m),h=n(115),f=n.n(h),g=(n(278),n(47)),b=n.n(g),w=n(48),E=n.n(w),k=n(24),y=n.n(k),v=n(38),j=n.n(v),x=n(26),C=n.n(x),O=n(62),T=n.n(O),I=n(114),A=n.n(I),D=n(113),S=n.n(D),B=function(e){var t=e.id,n=e.go,a=e.fetchedUser,o=e.fetchedGroupsInfo;return r.a.createElement(b.a,{id:t},r.a.createElement(E.a,null,"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441 \u0414\u0420"),a&&r.a.createElement(y.a,{title:"User Data Fetched with VK Bridge"},r.a.createElement(j.a,{before:a.photo_200?r.a.createElement(T.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),r.a.createElement(y.a,null,r.a.createElement(C.a,null,r.a.createElement(S.a,{onChange:function(e){function t(){return(t=Object(p.a)(l.a.mark((function t(){var a,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.send("VKWebAppCallAPIMethod",{method:"groups.search",params:{q:e.target.value,count:30,access_token:window.obj_user_group_info.user_auth_token,v:"5.103"}});case 2:a=t.sent,console.log(a),o=a.response.items,c.a.render(r.a.createElement("div",null,o.map((function(e){return r.a.createElement(y.a,null,r.a.createElement(j.a,{onClick:n,id_group:e.id,"data-to":"groupinfo",before:e.photo_200?r.a.createElement(T.a,{src:e.photo_200}):null,description:""},"".concat(e.name)))}))),document.querySelector(".resultSearch"));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}}),r.a.createElement(y.a,null,r.a.createElement(A.a,null,r.a.createElement(C.a,{className:"resultSearch"}),r.a.createElement(C.a,null,o&&r.a.createElement(y.a,null,o.response.map((function(e){return r.a.createElement(j.a,{onClick:n,id_group:e.id,"data-to":"groupinfo",before:e.photo_200?r.a.createElement(T.a,{src:e.photo_200}):null,description:e.members_count},"".concat(e.name))})))))))))},M=n(49),K=n(57),V=n.n(K),W=n(55),N=n.n(W),q=n(56),L=n.n(q),P=n(50),U=n(39),G=n.n(U),H=n(82),J=n.n(H),F=Object(M.b)(),Y=function(){var e=window.obj_user_group_info.happy_list_name_congratulation;e&&navigator.clipboard.writeText(e).then((function(){})).catch((function(e){alert("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438",e)}))},z=function(e){var t,n,a=e._d.toString().substring(8,10);switch(e._d.toString().substring(4,7)){case"Jan":t="\u042f\u043d\u0432\u0430\u0440\u044f",n=1;break;case"Feb":t="\u0424\u0435\u0432\u0440\u0430\u043b\u044f",n=2;break;case"Mar":t="\u041c\u0430\u0440\u0442\u0430",n=3;break;case"Apr":t="\u0410\u043f\u0440\u0435\u043b\u044f",n=4;break;case"May":t="\u041c\u0430\u044f",n=5;break;case"Jun":t="\u0418\u044e\u043d\u044f",n=6;break;case"Jul":t="\u0418\u044e\u043e\u044f",n=7;break;case"Aug":t="\u0410\u0432\u0433\u0443\u0441\u0442\u0430",n=8;break;case"Sep":t="\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f",n=9;break;case"Oct":t="\u041e\u043a\u0442\u0430\u0431\u0440\u044f",n=10;break;case"Nov":t="\u041d\u043e\u044f\u0431\u0440\u044f",n=11;break;case"Dec":t="\u0414\u0435\u043a\u0430\u0431\u0440\u044f",n=12;break;default:alert("\u041d\u0435\u0442 \u0442\u0430\u043a\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439")}function r(){return(r=Object(p.a)(l.a.mark((function e(){var t,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppCallAPIMethod",{method:"users.search",params:{group_id:window.obj_user_group_info.group_id,count:500,birth_day:a,birth_month:n,has_photo:1,fields:"photo_id,photo_50,bdate",access_token:window.obj_user_group_info.user_auth_token,v:"5.103"}});case 2:for(r in t=e.sent,window.obj_user_group_info.happy_list_name_congratulation="",t.response.items)window.obj_user_group_info.happy_list_name_congratulation+=" [id"+t.response.items[r].id+"|"+t.response.items[r].first_name+" "+t.response.items[r].last_name+"] ";if(window.obj_user_group_info.happy_list_photo_congratulation="",t.response.items.length>0){for(o=0;o<10;o++)void 0!==t.response.items[o].photo_id&&(window.obj_user_group_info.happy_list_photo_congratulation+=",photo"+t.response.items[o].photo_id);window.obj_user_group_info.happy_list_photo_congratulation=window.obj_user_group_info.happy_list_photo_congratulation.slice(1)}document.querySelector(".happyListDiv").innerHTML="\n\t\t<h3>\u041d\u0430\u0439\u0434\u0435\u043d\u043e ".concat(t.response.count," \u0438\u043c\u0435\u043d\u0438\u043d\u043d\u0438\u043a\u043e\u0432</h3>\n\t\t");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.querySelector(".happyDateDiv").innerHTML="<h3>".concat(a," ").concat(t,"</h3>"),document.querySelector(".happyListDiv").innerHTML="",function(){r.apply(this,arguments)}()},Q=function(e){var t=e.id,n=e.go;e.can_post;return r.a.createElement(b.a,{id:t},r.a.createElement(E.a,{left:r.a.createElement(V.a,{onClick:n,"data-to":"home"},F===M.a?r.a.createElement(N.a,null):r.a.createElement(L.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0433\u0440\u0443\u043f\u043f\u0435"),r.a.createElement(C.a,{align:"center"},"\u041a\u043e\u0433\u0434\u0430 \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ?"),r.a.createElement(C.a,{align:"center"},r.a.createElement(P.Calendar,{onChange:z})),r.a.createElement("div",{align:"center",className:"happyDateDiv"}),r.a.createElement("div",{align:"center",className:"happyListDiv"}),r.a.createElement("br",null),r.a.createElement(C.a,{align:"center"},r.a.createElement(y.a,{header:r.a.createElement(J.a,{mode:"secondary"},"\u0420\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u0441\u0442")},r.a.createElement("br",null),r.a.createElement(G.a,{nameTitleOptions:"1",onClick:n,"data-to":"postoptions",mode:"commerce"},"\u0421 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(G.a,{nameTitleOptions:"0",onClick:n,"data-to":"postoptions",mode:"commerce"},"\u0411\u0435\u0437 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(y.a,{header:r.a.createElement(J.a,{mode:"secondary"},"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u0431\u0443\u0444\u0435\u0440")},r.a.createElement("br",null),r.a.createElement(G.a,{onClick:Y,mode:"primary"},"\u0418\u043c\u0435\u043d\u0430 \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u0438 \u043a\u0430\u043a \u0441\u0441\u044b\u043b\u043a\u0438"))))},R=n(63),X=n.n(R),Z=n(83),$=n.n(Z),ee=Object(M.b)(),te=function(e){var t=e._d.getDate(),n=e._d.getFullYear(),a=new Date;a.setFullYear(n),a.setDate(t),a.setHours("9","0","0"),window.obj_user_group_info.publish_date=Math.round(a.getTime()/1e3)},ne=function(){var e=Math.round(10*Math.random());window.obj_user_group_info.random_congratulation=ae[e],document.querySelector(".Textarea__el").value=window.obj_user_group_info.random_congratulation},ae=["\u041e\u0447\u0435\u043d\u044c \u043f\u0440\u0438\u044f\u0442\u043d\u043e \u0432\u0430\u0441 \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0442\u044c ! \n \u0425\u043e\u0447\u0443 \u0432 \u044d\u0442\u043e\u0442 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a \u0432\u0430\u043c \u043f\u043e\u0436\u0435\u043b\u0430\u0442\u044c \n \u0427\u0442\u043e\u0431 \u0431\u0438\u043b\u0430 \u044d\u043d\u0435\u0440\u0433\u0438\u044f \u0436\u0438\u0437\u043d\u0438 \u043a\u043b\u044e\u0447\u043e\u043c \n \u041b\u044e\u0431\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0431\u044b\u043b\u0430 \u043d\u0438\u043f\u043e\u0447\u0435\u043c","\u0412\u0430\u043c \u0435\u0441\u0442\u044c \u0447\u0435\u043c \u0433\u043e\u0440\u0434\u0438\u0442\u044c\u0441\u044f , \u0447\u0442\u043e \u043f\u0440\u0430\u0437\u0434\u043d\u043e\u0432\u0430\u0442\u044c ,\n \u041a\u0443\u0434\u0430 \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043e\u043f\u0430\u0437\u0434\u044b\u0432\u0430\u0442\u044c ,\n \u041e \u0447\u0435\u043c \u0432\u043e\u043b\u043d\u043e\u0432\u0430\u0442\u044c\u0441\u044f , \u0447\u0435\u043c \u0436\u0438\u0442\u044c ,\n \u0418 \u0434\u0435\u043b\u043e , \u0447\u0442\u043e \u0441\u0442\u043e\u0438\u0442 \u043b\u044e\u0431\u0438\u0442\u044c !","\u0416\u0435\u043b\u0430\u044e \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u044f , \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438 ,\n \u0412 \u0440\u0430\u0431\u043e\u0442\u0435 \u2013 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438 !\n \u0426\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043b\u043b\u0435\u043a\u0442\u0438\u0432 , \u0431\u0435\u0437 \u0441\u043e\u043c\u043d\u0435\u043d\u0438\u044f ,\n \u0412\u0441\u0435\u0433\u0434\u0430 \u0431\u044b\u0442\u044c \u0435\u0433\u043e \u0443\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u0435\u043c !","\u0416\u0435\u043b\u0430\u0435\u043c \u0441\u0447\u0430\u0441\u0442\u044c\u044f \u0432 \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c,\n \u0422\u0435\u043f\u043b\u0430 \u043e\u0442 \u0432\u0441\u0435\u0445 \u043a\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0440\u044f\u0434\u043e\u043c.\n \u0423\u043b\u044b\u0431\u043e\u043a \u0441\u0432\u0435\u0442\u043b\u044b\u0445 \u043d\u0430 \u043b\u0438\u0446\u0435\n \u0418 \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0445 \u043b\u0443\u0447\u0435\u0439 \u0432 \u043d\u0430\u0433\u0440\u0430\u0434\u0443.\n \u0416\u0435\u043b\u0430\u0435\u043c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0443\u0434\u0430\u0447,\n \u0416\u0435\u043b\u0430\u0435\u043c \u043c\u043e\u043b\u043e\u0434\u043e\u0441\u0442\u0438 \u0432\u0435\u0447\u043d\u043e\u0439,\n \u041f\u0443\u0441\u0442\u044c \u0432\u0441\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0442\u0441\u044f \u043c\u0435\u0447\u0442\u044b\n \u0418 \u0441\u0447\u0430\u0441\u0442\u044c\u0435 \u0431\u0443\u0434\u0435\u0442 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u043c!","\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443 \u0441 \u0414\u043d\u0451\u043c \u0420\u043e\u0436\u0434\u0435\u043d\u044c\u044f. \u0416\u0435\u043b\u0430\u044e \u0435\u0439 \u043f\u0440\u043e\u0446\u0432\u0435\u0442\u0430\u043d\u0438\u044f. \u0418 \u0441\u043f\u0430\u0441\u0438\u0431\u043e \u0432\u0441\u0435\u043c, \u043a\u0442\u043e \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u0435\u0451 \u0436\u0438\u0437\u043d\u0438.","\u0416\u0435\u043b\u0430\u0435\u043c \u0441\u0447\u0430\u0441\u0442\u044c\u044f \u0432 \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c,\n \u0422\u0435\u043f\u043b\u0430 \u043e\u0442 \u0432\u0441\u0435\u0445 \u043a\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0440\u044f\u0434\u043e\u043c.\n \u0423\u043b\u044b\u0431\u043e\u043a \u0441\u0432\u0435\u0442\u043b\u044b\u0445 \u043d\u0430 \u043b\u0438\u0446\u0435\n \u0418 \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0445 \u043b\u0443\u0447\u0435\u0439 \u0432 \u043d\u0430\u0433\u0440\u0430\u0434\u0443.\n \u0416\u0435\u043b\u0430\u0435\u043c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0443\u0434\u0430\u0447,\n \u0416\u0435\u043b\u0430\u0435\u043c \u043c\u043e\u043b\u043e\u0434\u043e\u0441\u0442\u0438 \u0432\u0435\u0447\u043d\u043e\u0439,\n \u041f\u0443\u0441\u0442\u044c \u0432\u0441\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0442\u0441\u044f \u043c\u0435\u0447\u0442\u044b\n \u0418 \u0441\u0447\u0430\u0441\u0442\u044c\u0435 \u0431\u0443\u0434\u0435\u0442 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u043c!","\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443 \u0441 \u0414\u043d\u0451\u043c \u0420\u043e\u0436\u0434\u0435\u043d\u044c\u044f. \u0416\u0435\u043b\u0430\u044e \u0435\u0439 \u043f\u0440\u043e\u0446\u0432\u0435\u0442\u0430\u043d\u0438\u044f. \u0418 \u0441\u043f\u0430\u0441\u0438\u0431\u043e \u0432\u0441\u0435\u043c, \u043a\u0442\u043e \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u0435\u0451 \u0436\u0438\u0437\u043d\u0438.","\u041e\u0447\u0435\u043d\u044c \u043f\u0440\u0438\u044f\u0442\u043d\u043e \u0432\u0430\u0441 \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0442\u044c ! \n \u0425\u043e\u0447\u0443 \u0432 \u044d\u0442\u043e\u0442 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a \u0432\u0430\u043c \u043f\u043e\u0436\u0435\u043b\u0430\u0442\u044c \n \u0427\u0442\u043e\u0431 \u0431\u0438\u043b\u0430 \u044d\u043d\u0435\u0440\u0433\u0438\u044f \u0436\u0438\u0437\u043d\u0438 \u043a\u043b\u044e\u0447\u043e\u043c \n \u041b\u044e\u0431\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u0431\u044b\u043b\u0430 \u043d\u0438\u043f\u043e\u0447\u0435\u043c","\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443 \u0441 \u0414\u043d\u0451\u043c \u0420\u043e\u0436\u0434\u0435\u043d\u044c\u044f. \u0416\u0435\u043b\u0430\u044e \u0435\u0439 \u043f\u0440\u043e\u0446\u0432\u0435\u0442\u0430\u043d\u0438\u044f. \u0418 \u0441\u043f\u0430\u0441\u0438\u0431\u043e \u0432\u0441\u0435\u043c, \u043a\u0442\u043e \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u0435\u0451 \u0436\u0438\u0437\u043d\u0438.","\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u044e \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443 \u0441 \u0414\u043d\u0451\u043c \u0420\u043e\u0436\u0434\u0435\u043d\u044c\u044f. \u0416\u0435\u043b\u0430\u044e \u0435\u0439 \u043f\u0440\u043e\u0446\u0432\u0435\u0442\u0430\u043d\u0438\u044f. \u0418 \u0441\u043f\u0430\u0441\u0438\u0431\u043e \u0432\u0441\u0435\u043c, \u043a\u0442\u043e \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0442 \u0432 \u0435\u0451 \u0436\u0438\u0437\u043d\u0438."],re=function(e){var t,n=e.id,a=e.go,o=1,i=0,u=!0;function _(){return m.apply(this,arguments)}function m(){return(m=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return!0===u?t="-"+window.obj_user_group_info.group_id:!1===u&&(t=window.obj_user_group_info.user_id),e.next=3,s.a.send("VKWebAppShowWallPostBox",{from_group:o,owner_id:t,publish_date:window.obj_user_group_info.publish_date,close_comments:i,message:window.obj_user_group_info.start_congratulation+"\n\n"+window.obj_user_group_info.happy_list_name_congratulation+"\n\n"+window.obj_user_group_info.random_congratulation,attachments:window.obj_user_group_info.happy_list_photo_congratulation});case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return"1"===window.obj_user_group_info.nameTitleOptions?r.a.createElement(b.a,{id:n},r.a.createElement(E.a,{left:r.a.createElement(V.a,{onClick:a,"data-to":"groupinfo"},ee===M.a?r.a.createElement(N.a,null):r.a.createElement(L.a,null))},"\u041f\u043e\u0441\u0442 \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438"),r.a.createElement(y.a,null,r.a.createElement(j.a,{asideContent:r.a.createElement(X.a,{onChange:function(e){!0===(u=e.target.checked)?c.a.render(r.a.createElement("p",{id:"text_post_wall_switch"},"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0441\u0442\u0435\u043d\u0443 \u0433\u0440\u0443\u043f\u043f\u044b"),document.getElementById("text_post_wall_switch")):!1===u&&c.a.render(r.a.createElement("p",{id:"text_post_wall_switch"},"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0441\u0432\u043e\u044e \u0441\u0442\u0435\u043d\u0443"),document.getElementById("text_post_wall_switch"))},defaultChecked:!0})},r.a.createElement("p",{id:"text_post_wall_switch"},"\u0417\u0430\u043f\u0438\u0441\u044c \u043d\u0430 \u0441\u0442\u0435\u043d\u0443 \u0433\u0440\u0443\u043f\u043f\u044b")),r.a.createElement(j.a,{asideContent:r.a.createElement(X.a,{onChange:function(e){1===(i=+!e.target.checked)?c.a.render(r.a.createElement("p",{id:"text_comments_switch"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043a \u0437\u0430\u043f\u0438\u0441\u044f\u043c \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b"),document.getElementById("text_comments_switch")):0===i&&c.a.render(r.a.createElement("p",{id:"text_comments_switch"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043a \u0437\u0430\u043f\u0438\u0441\u044f\u043c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b"),document.getElementById("text_comments_switch"))},defaultChecked:!0})},r.a.createElement("p",{id:"text_comments_switch"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043a \u0437\u0430\u043f\u0438\u0441\u044f\u043c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b")),r.a.createElement(j.a,{asideContent:r.a.createElement(X.a,{onChange:function(e){1===(o=+e.target.checked)?c.a.render(r.a.createElement("p",{id:"text_from_group_of_user_switch"},"\u041e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0433\u0440\u0443\u043f\u043f\u044b"),document.getElementById("text_from_group_of_user_switch")):0===o&&c.a.render(r.a.createElement("p",{id:"text_from_group_of_user_switch"},"\u041e\u0442 \u0438\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),document.getElementById("text_from_group_of_user_switch"))},defaultChecked:!0})},r.a.createElement("p",{id:"text_from_group_of_user_switch"},"\u041e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0433\u0440\u0443\u043f\u043f\u044b")),r.a.createElement(C.a,{align:"center"},r.a.createElement(j.a,null,"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 ",r.a.createElement("br",null),r.a.createElement(P.Calendar,{onChange:te})),r.a.createElement(G.a,{onClick:ne,mode:"outline"},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),r.a.createElement(P.Box,null,r.a.createElement($.a,{className:"randCongBlock",placeholder:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",rows:1})),r.a.createElement(G.a,{onClick:_,mode:"commerce"},"\u0420\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u0441\u0442")))):"0"===window.obj_user_group_info.nameTitleOptions?r.a.createElement(b.a,{id:n},r.a.createElement(E.a,{left:r.a.createElement(V.a,{onClick:a,"data-to":"groupinfo"},ee===M.a?r.a.createElement(N.a,null):r.a.createElement(L.a,null))},"\u041f\u043e\u0441\u0442 \u0431\u0435\u0437 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),r.a.createElement(y.a,null,r.a.createElement(C.a,{align:"center"},r.a.createElement(G.a,{onClick:ne,mode:"outline"},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),r.a.createElement(P.Box,null,r.a.createElement($.a,{className:"randCongBlock",placeholder:"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435",rows:1})),r.a.createElement(G.a,{onClick:_,mode:"commerce"},"\u0420\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u0441\u0442")))):void 0},oe=function(){var e=Object(a.useState)("home"),t=Object(_.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(null),i=Object(_.a)(c,2),u=i[0],m=i[1],h=Object(a.useState)(null),g=Object(_.a)(h,2),b=g[0],w=g[1],E=Object(a.useState)(r.a.createElement(f.a,{size:"large"})),k=Object(_.a)(E,2),y=k[0],v=k[1];Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetAuthToken",{app_id:7348710,scope:"friends,groups"});case 2:n=e.sent,window.obj_user_group_info.user_auth_token=n.access_token,t();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return n.apply(this,arguments)}function n(){return(n=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,m(t),window.obj_user_group_info.user_id=t.id,a();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return r.apply(this,arguments)}function r(){return(r=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppCallAPIMethod",{method:"groups.get",params:{count:15,user_ids:window.obj_user_group_info.user_id,access_token:window.obj_user_group_info.user_auth_token,v:"5.103"}});case 2:t=e.sent,o(t.response.items.join(",")).catch(alert);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return c.apply(this,arguments)}function c(){return(c=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppCallAPIMethod",{method:"groups.getById",params:{fields:"members_count",group_ids:t,access_token:window.obj_user_group_info.user_auth_token,v:"5.103"}});case 2:n=e.sent,w(n),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){e.apply(this,arguments)}()}),[]);var j=function(e){void 0!==e.currentTarget.attributes.id_group&&null!==e.currentTarget.attributes.id_group&&(window.obj_user_group_info.group_id=e.currentTarget.attributes.id_group.value),void 0!==e.currentTarget.attributes.nameTitleOptions&&null!==e.currentTarget.attributes.nameTitleOptions&&(window.obj_user_group_info.nameTitleOptions=e.currentTarget.attributes.nameTitleOptions.value),o(e.currentTarget.dataset.to)};return r.a.createElement(d.a,{activePanel:n,popout:y},r.a.createElement(B,{fetchedGroupsInfo:b,id:"home",fetchedUser:u,go:j}),r.a.createElement(Q,{id:"groupinfo",go:j}),r.a.createElement(re,{id:"postoptions",go:j}))};n(323);window.obj_user_group_info={group_id:"",bdate:"",user_id:"",user_auth_token:"",objGroupsInfo:[],nameTitleOptions:"",start_congratulation:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u043c\u044b \u0441\u043f\u0435\u0448\u0438\u043c \u043f\u043e\u0437\u0434\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u0448\u0438\u0445 \u0441\u043e\u043e\u0431\u0449\u043d\u0438\u043a\u043e\u0432 \u0441 \u0414\u041d\u0415\u041c \u0420\u041e\u0416\u0414\u0415\u041d\u0418\u042f !!!! \n\n\n",random_congratulation:"",happy_list_name_congratulation:"",happy_list_photo_congratulation:"",publish_date:""};!function(){var e=new Date,t=e.getDate()+1;e.setDate(t),e.setHours("9","0","0"),window.obj_user_group_info.publish_date=Math.round(e.getTime()/1e3)}(),window._hsMobileUI=!0,s.a.send("VKWebAppInit"),c.a.render(r.a.createElement(oe,null),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.86804bf0.chunk.js.map