var _statcounter=function(C){var T=!1;function we(p,F){for(var x=0;x<F.length;x++)if(F[x]==p)return!0;return!1}function ye(p){return we(p,[12225189,11548023,11878871,12214659,981359,9560334,6709687,9879613,4124138,204609,10776808,11601825])}function He(p){return!1}try{var p=function(e,t){F()?document.writeln(e):$.insertAdjacentHTML("afterend",e)},F=function(e){return e==="invisible"?!1:$===!1||!$.insertAdjacentHTML},x=function(e){var t=9e6;return we(e,[4344864,4124138,204609])||e>t},Ot=function(e){return we(e,[204609,4124138])},At=function(e){var t=!0;try{if(typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&typeof JSON.parse=="function"&&"sessionStorage"in window&&"withCredentials"in new XMLHttpRequest||(t=!1),O("sc_project_config_"+e)===1&&O("sc_project_time_difference_"+e)!==null&&(t=!1),O("sc_block_project_config_"+e)!==null&&(t=!1),t){var n=B("sc_project_config_"+e,-1);n?Se="good":Se="bad";var r=O("sc_project_config_"+e);t=r===-1,Se+=r}}catch(i){t=!1}return t},Qe=function(){var e=""+v.referrer;return typeof sc_referer_scr08!="undefined"&&(e=sc_referer_scr08),e},Le=function(){var e=""+v.title;return e=e.substring(0,300),encodeURIComponent?e=encodeURIComponent(e):e=escape(e),e},se=function(){var e=""+v.location;return e=="about:srcdoc"&&(e=""+document.baseURI),e=e.substring(0,300),e=escape(e),e},Mt=function(){return b.screen.width},Nt=function(){return b.screen.height},De=function(e){if(ct==0){var t="",n="",r="";try{if(typeof performance!="undefined"){var i=Math.round(performance.now());t="&sc_rum_e_s="+pe+"&sc_rum_e_e="+i;var a=i-pe;n=Ct(e,a)}}catch(s){t="",n=""}try{if(typeof performance!="undefined")for(var o=performance.getEntriesByType("resource"),l=0;l<o.length;l++){var u=o[l];if(u.name.includes("statcounter.com/counter/counter.js")||u.name.includes("statcounter.com/counter/counter_test.js")){r="&sc_rum_f_s="+Math.round(u.requestStart)+"&sc_rum_f_e="+Math.round(u.responseEnd);break}}}catch(s){r=""}return t+n+r}return""},Ct=function(e,t){var n="";if(Ot(e)&&typeof performance!="undefined"){var r=document.getElementById("sc-ttfb-bd"),i="-1";r&&(i=r.textContent);var a=performance.timing.responseStart-performance.timing.connectStart,o=document.getElementById("sc-perf-wh"),l=0;o&&(l=o.textContent);var u=document.getElementById("sc-perf-pn"),s=0;u&&(s=u.textContent);var g=document.getElementById("sc-perf-db"),c=0;g&&(c=g.textContent),n="&sc_ev_scperf_js_exec="+t+"&sc_ev_scperf_ttfb_frontend="+a+"&sc_ev_scperf_ttfb_backend="+i+"&sc_ev_scperf_ws="+l+"&sc_ev_scperf_pn="+s+"&sc_ev_scperf_db="+c}return n},Lt=function(e,t){t=(((t||"")+"").toLowerCase().match(/<[a-z][a-z0-9]*>/g)||[]).join("");var n=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,r=/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;return e.replace(r,"").replace(n,function(i,a){return t.indexOf("<"+a.toLowerCase()+">")>-1?i:""})},Dt=function(e){for(var t=0;t<e.length;t++)e[t]=(""+e[t]).trim();return e},Bt=function(e){var t=10,n=1,r=300,i=[];if(e.length%2!=0)i.push("Every tag must have a name and value.");else{e.length/2>t&&i.push("No more than "+t+" tags can be passed - "+e.length/2+" passed.");for(var a=0;a<e.length;a++){var o=(""+e[a]).length;(o<n||o>r)&&i.push("Tag names and values must be between "+n+" and "+r+" characters in length ('"+e[a]+"' is "+e[a].length+" characters long).")}for(var a=0;a<e.length;a++)Lt(""+e[a])!=""+e[a]&&i.push("Tag names and values may not contain HTML tags.")}if(i.length!=0){for(var a=0;a<i.length;a++);return!1}return!0},Pt=function(e){function t(o,l){var u=o.__proto__||o.constructor.prototype;return l in o&&(!(l in u)||u[l]!==o[l])}if(Object.prototype.hasOwnProperty)var t=function(l,u){return l.hasOwnProperty(u)};var n={};if(t(e,"tags")&&typeof e.tags=="object"){var r=[];for(var i in e.tags)r[r.length]=i,r[r.length]=e.tags[i];if(Bt(r)){r=Dt(r);for(var a=0;a<r.length;a=a+2)n["sc_ev_"+encodeURIComponent(r[a])]=encodeURIComponent(r[a+1])}}return n},Jt=function(e){var t,n=e.length,r=this,i=0,a=r.i=r.j=0,o=r.S=[];for(n||(e=[n++]);i<H;)o[i]=i++;for(i=0;i<H;i++)o[i]=o[a=K&a+e[i%n]+(t=o[i])],o[a]=t;(r.g=function(l){for(var u,s=0,g=r.i,c=r.j,d=r.S;l--;)u=d[g=K&g+1],s=s*H+d[K&(d[g]=d[c=K&c+u])+(d[c]=u)];return r.i=g,r.j=c,s})(H)},Ze=function(e,t){var n=[],r=(typeof e)[0],i;if(t&&r=="o")for(i in e)try{n.push(Ze(e[i],t-1))}catch(a){}return n.length?n:r=="s"?e:e+"\0"},Be=function(e,t){for(var n=e+"",r,i=0;i<n.length;)t[K&i]=K&(r^=t[K&i]*19)+n.charCodeAt(i++);return ee(t)},Rt=function(e){try{return window.crypto.getRandomValues(e=new Uint8Array(H)),ee(e)}catch(t){return[+new Date,window,window.navigator.plugins,window.screen,ee(Oe)]}},ee=function(e){return String.fromCharCode.apply(0,e)},Ut=function(){var e=[],t,n,r={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"},i=new RegExp("Mac OS X.*Safari/").test(navigator.userAgent)&&window.devicePixelRatio||1;if(!new RegExp("MSIE").test(navigator.userAgent)){if(navigator.mimeTypes&&navigator.mimeTypes.length)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n=navigator.mimeTypes[r[t]],e.push(n&&n.enabledPlugin?"1":"0"));typeof navigator.javaEnabled!="unknown"&&typeof navigator.javaEnabled!="undefined"&&navigator.javaEnabled()&&e.push("java"),typeof window.GearsFactory=="function"&&e.push("gears")}return e.push(screen.width*i+"x"+screen.height*i),e.join("")},le=function(e){var t=new Date,n=!1;e===void 0&&(e=32,n&&(e=36));var r=Math.round(t.getTime()/1e3)+t.getMilliseconds(),i=(navigator.userAgent||"")+(navigator.platform||"")+Ut()+t.getTimezoneOffset()+window.innerWidth+window.innerHeight+window.screen.colorDepth+document.URL+r;tn(i);for(var a="0123456789ABCDEF".split(""),o=new Array(e),l=0,u,s=0;s<e;s++)n&&(s==8||s==13||s==18||s==23)?o[s]="-":s==12&&!n||s==14&&n?o[s]="4":s==13&&!n||s==15&&n?o[s]="F":(l<=2&&(l=33554432+bt()*16777216|0),u=l&15,l=l>>4,o[s]=a[s==19?u&3|8:u]);return o.join("")},Pe=function(){var e=!1;if("localStorage"in window)try{e=window.localStorage!==null}catch(t){if((!t.name||t.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr")&&(!t.number||parseInt(t.number,10)!==-2147024891))throw t}return e},Je=function(e,t,n){if(Pe()){try{e==="is_visitor_unique"?localStorage.setItem("statcounter.com/localstorage/",t):localStorage.setItem("statcounter_"+e,t)}catch(r){if((!r.name||r.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr")&&(!r.number||parseInt(r.number,10)!==-2147024891))throw r;return!1}return!0}return!1},qe=function(e,t,n,r,i,a){typeof t=="string"&&(t=[t]),r===void 0&&(r=""),i===void 0&&(i=30);var o=!1;if(j=="localStorage")o=Je(e,r+t.join("-"),n),o?ue(e)!==null&&tt(e,n):o=et(e,r+t.join("-"),n,void 0,a);else{var l=t.slice(0,i).join("-");o=et(e,r+l,n,void 0,a),o?t.length>i?Je(e,"mx"+t.slice(i).join("-"),n):_e(e):o=Je(e,r+t.join("-"),n)}return o},je=function(e,t){var n=null;if(Pe()&&(e==="is_visitor_unique"?n=localStorage.getItem("statcounter.com/localstorage/"):n=localStorage.getItem("statcounter_"+e)),j=="localStorage"&&n!==null&&n.substring(0,2)=="rx")return n;var r=ue(e,t);if(n!==null){if(r===null&&n.substring(0,2)=="rx")return n;r!==null&&n.substring(0,2)=="mx"&&(r+="-"+n.substring(2))}return r},_e=function(e){Pe()&&(e==="is_visitor_unique"&&localStorage.removeItem("statcounter.com/localstorage/"),localStorage.removeItem("statcounter_"+e))},Ht=function(e,t){_e(e),ue(e)&&tt(e,t)},ue=function(e,t){var n="sc_"+e+"=",r=null;if(v.cookie)for(var i=v.cookie.split(";"),a=0;a<i.length;a++){for(var o=i[a];o.charAt(0)==" ";)o=o.substring(1,o.length);if(o.indexOf(n)==0){var l=o.substring(n.length,o.length);r&&t!==void 0&&r.indexOf(""+t+".")!==-1&&l.indexOf(""+t+".")===-1||(r=l)}}return r},et=function(e,t,n,r,i){var a=!1;r===void 0?a=63072e6:r!=="session"&&(a=1e3*r);var o="";if(a!==!1){var l=new Date;l.setTime(l.getTime()+a),o="; expires="+l.toGMTString()}var u=3050;t.length>u-50&&t.substring(0,u).indexOf("-")!==-1&&(t=t.substring(0,t.substring(0,u).lastIndexOf("-")));var s="; SameSite=Lax";v.cookie="sc_"+e+"="+t+o+"; domain="+n+"; path=/"+s;var g=ue(e,i);return g!==null&&g===t},tt=function(e,t){v.location.host=="www"+t&&(v.cookie="sc_"+e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.www"+t+"; path=/; SameSite=Lax"),v.cookie="sc_"+e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+t+"; path=/; SameSite=Lax"},nt=function(){var e={};try{sessionStorage.getItem("statcounter_config")!==null&&(e=JSON.parse(sessionStorage.getItem("statcounter_config")))}catch(t){e={}}return e},O=function(e){if(!("sessionStorage"in window))return null;var t=nt();if(t[e]!==void 0)return t[e];var n=null;try{n=sessionStorage.getItem(e)}catch(r){return null}return n!==null?(B(e,n),sessionStorage.removeItem(e),n):null},B=function(e,t){if(!("sessionStorage"in window))return console.log("returning false"),!1;var n=nt();try{return n[e]=t,sessionStorage.setItem("statcounter_config",JSON.stringify(n)),!0}catch(r){return!1}},zt=function(e,t,n){var r="t.php",i=Y;if(He(e)&&(r="counter_test.php",i="https://1ctest.statcounter.com/"),t.substring(0,1)=="?")var a=i+r+t;else var a=t;a=a+"&xhr_request=true",Re(a,n)},Re=function(e,t,n){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(this.readyState==4&&this.status==200){var i=JSON.parse(this.responseText);t(i)}},n!==void 0&&r.addEventListener("error",n),r.withCredentials=!0,r.open("GET",e,!0),r.send()},ve=function(e,t,n){f.get_config(t,function(r){B("sc_project_config_"+e,1);var i=B("sc_project_time_difference_"+e,parseInt(r.time_difference));if(i?We="true":We="false",Ie=r.time_difference,r.visitor_recording===1||r.visitor_recording===3)f.record(e);else if(r.visitor_recording===2||r.visitor_recording===4)f.record(e,"test");else{var a=O("record_"+e);a&&a.indexOf("dev")!==-1&&Ae(e)}r.visitor_recording_unmask!==void 0&&B("sc_unmask_"+e,r.visitor_recording_unmask),typeof n!="undefined"&&n(r)})},$t=function(e,t){var n=e.split("."),r=t.split("."),i=Math.min(n.length,r.length),a=2;n.length>1&&(n[n.length-2].length<=3&&n[n.length-1]in{at:1,au:1,br:1,es:1,hu:1,il:1,nz:1,tr:1,uk:1,us:1,za:1}||n[n.length-1]=="kr"||n[n.length-1]=="ru"||n[n.length-1]=="au"&&n[n.length-2]in{csiro:1}||n[n.length-1]=="at"&&n[n.length-2]in{priv:1}||n[n.length-1]=="fr"&&n[n.length-2]in{avocat:1,aeroport:1,veterinaire:1}||n[n.length-1]=="hu"&&n[n.length-2]in{film:1,lakas:1,ingatlan:1,sport:1,hotel:1}||n[n.length-1]=="nz"&&n[n.length-2]in{geek:1,kiwi:1,maori:1,school:1,govt:1,health:1,parliament:1}||n[n.length-1]=="il"&&n[n.length-2]in{muni:1}||n[n.length-1]=="za"&&n[n.length-2]in{school:1}||n[n.length-1]=="tr"&&n[n.length-2]in{name:1}||n[n.length-1]=="uk"&&n[n.length-2]in{police:1})&&(a=3);for(var o=1;o<=i;o++){if(n[n.length-o]!=r[r.length-o])return!1;if(o>=a)return!0}return n.length==r.length},rt=function(e,t){if(t=="")return"d";var n=t.split("/")[2].replace(/^www\./,""),r=v.location.host.replace(/^www\./,"");if(x(e)&&(r==n||$t(n,r)))return"internal";if(t.search(/\bgoogle\..*\?.*adurl=http/)!==-1)return"p";for(var i=["utm_source=bing","?gclid=","&gclid=","utm_medium=cpc","utm_medium=paid-media","utm_medium=ppc"],a=0;a<i.length;a++)if(v.location.search.indexOf(i[a])!==-1)return"p";for(var o=["utm_medium=email"],a=0;a<o.length;a++)if(v.location.search.indexOf(o[a])!==-1)return"e";if(!x(e)&&r==n)return"internal";for(var l in oe)if(n.replace(l,"#").split(".").indexOf("#")!==-1){if(oe[l]===null)return l;for(var a=0;a<oe[l].length;a++){var u=oe[l][a];if(t.indexOf("?"+u+"=")!==-1||t.indexOf("&"+u+"=")!==-1)return l}}for(var s in Me)for(var a=0;a<Me[s].length;a++){var l=Me[s][a];if(n.replace(l,"#").split(".").indexOf("#")!==-1)return s}return n},ge=function(e){return e=="d"||e=="p"||e=="e"||e=="internal"?e:e in oe?"o":e in Me?"s":"r"},Ue=function(e){if(window.sc_counter_width&&window.sc_counter_height)var t=' width="'+sc_counter_width+'" height="'+sc_counter_height+'"';var n="StatCounter - Free Web Tracker and Counter";return window.sc_remove_alt&&(n=""),'<img src="'+e+'" alt="'+n+'" border="0"'+t+">"},te=function(e,t,n){var r={};r.u1="za";var i=At(e);try{$e=Date.now()}catch(M){}if(fe[e]=new Date().getTime(),window!==b)if(b.sc_top_reg===void 0&&(b.sc_top_reg={}),b.sc_top_reg[e]===void 0)b.sc_top_reg[e]=1;else{Ae(e);return}var a={};if(!x(e)){var o=rt(e,Ne),l=ge(o);o!="internal"&&(a.rcat=l,a.rdom=o)}var u=Math.round(new Date().getTime()/1e3);if(j!="disabled"){if(x(e)){var o=rt(e,Ne),l=ge(o);o!="internal"&&(a.rcat=l,a.rdom=o)}try{var s=JSON.parse(localStorage.getItem("sc_medium_source"));s==null&&(s={});var g=null,c=null,d=null,I=0;for(var h in s){(g===null||s[h]>s[g])&&(g=h);var A=ge(h);l==A&&(c===null||s[h]>s[c])&&(c=h),A=="r"&&(d===null||s[h]<s[d])&&(d=h),I+=1}I>30&&d!==null&&delete s[d],sessionStorage.getItem("statcounter_bounce")&&(sessionStorage.removeItem("statcounter_bounce"),a.bb=0);var S=30;if(x(e)||(S=15),o=="d"&&g!==null&&g!="d"&&u-s[g]<60*S&&(o="internal"),x(e)&&(sessionStorage.getItem("statcounter_session")&&u-parseInt(sessionStorage.getItem("statcounter_session"),10)<1800&&(o="internal"),sessionStorage.setItem("statcounter_session",u)),x(e)||l=="r"&&sessionStorage.getItem("statcounter_exit_domain")==o&&(o="internal"),o=="internal")g!==null&&(a.rcat=ge(g),a.rdom!==void 0&&delete a.rdom,a.rdomo=g,a.rdomg=u-s[g],s[g]=u);else{var m=!1;o in s?(o==g&&a.rdom!==void 0&&(a.rdomo=a.rdom,delete a.rdom),a.rdomg=u-s[o],u-s[o]<1800&&(m=!0)):a.rdomg="new",a.bb===void 0&&!m&&(sessionStorage.setItem("statcounter_bounce","1"),a.bb=1),c!==null&&(!(o in s)||o!=c)&&(a.rcatg=u-s[c]),s[o]=u}try{localStorage.setItem("sc_medium_source",JSON.stringify(s))}catch(M){x(e)&&(a={})}}catch(M){x(e)&&(a={})}for(var y in a)n[y]=a[y];if(a.rdom!==void 0)var E=!0;else var E=!1;var L=f.update_cookie(e,u,E);if(L.session_incremented){var Z=O("record_"+e);Z&&!Z.match(/(^test$|wsdev$|^dev[0-9]*)/)&&(i=!0,B("sc_project_time_difference_"+e,!1))}f._session_increment_calculated[e]=!0,n.jg=L.jg,n.rr=L.rr,L.u1!==void 0&&(r.u1=L.u1)}if(Object.prototype.toString.call(f._pending_tags)==="[object Array]"){var P=f._pending_tags.length;if(P>=1){var ne=Pt(f._pending_tags[0]);for(var y in ne)n[y]=ne[y]}}f._pending_tags={},at(e,t,i,r,n),Ne=se(),Ae(e)},at=function(e,t,n,r,i){r.java=1,r.security=f._security_codes[e],r.sc_snum=X,r.sess=f.version();var a=Y;if(t=="text")a+="text.php?";else{var o="t.php";He(e)&&(o="counter_test.php",a="https://1ctest.statcounter.com/"),a+=o+"?"}e!==999?a+="sc_project="+e:window.usr&&(a+="usr="+window.usr);for(var l in r)a+="&"+l+"="+r[l];i.resolution=Mt(),i.h=Nt(),i.camefrom=Ne.substring(0,600),i.u=se(),i.t=Le(),t=="invisible"?i.invisible="1":t=="text"&&(i.text=window.sc_text);var u="";for(var l in i)u+="&"+l+"="+i[l];if(t=="invisible"){var s=!1;w!=""&&typeof JSON=="object"&&JSON&&typeof JSON.stringify=="function"&&"sessionStorage"in window&&(s=!0);var g=!1;if(s)try{var c=sessionStorage.getItem("statcounter_pending");if(c)try{var d=JSON.parse(c)}catch(J){var d={}}else var d={};d[e]===void 0&&(d[e]={});var I=new Date().getTime();for(d[e][I]=u;;){if(c=JSON.stringify(d),c=="{}"){sessionStorage.removeItem("statcounter_pending");break}var h=c.split(/:.{20}/).length-1;if(h<20){var A=!0;try{sessionStorage.setItem("statcounter_pending",c)}catch(J){if(!J.name||J.name.toLowerCase().replace(/_/g,"").substring(0,16)!=="quotaexceedederr")throw J;A=!1}if(A)break}var S=!1,m=!1,y=!1;for(var E in d)for(var L in d[E]){var Z=/jg=(\d+)/.exec(d[E][L]);if(Z!==null)var P=parseInt(Z[1]);else var P=!1;(S===!1||P!==!1&&P<S)&&(P!==!1&&(S=P),m=E,y=L)}if(y===!1)break;delete d[m][y],JSON.stringify(d[m])=="{}"&&delete d[m]}for(var ne in d[e])(function(J,N){var he=d[N][J];function ut(){d[N]!==void 0&&(delete d[N][J],JSON.stringify(d[N])=="{}"&&delete d[N]);var vt=JSON.stringify(d);vt=="{}"?sessionStorage.removeItem("statcounter_pending"):sessionStorage.setItem("statcounter_pending",vt)}var me=a+he;if(J!=I?me+="&pg="+Math.round((I-J)/1e3):(g=!0,me+=De(e)),n)ve(e,me,function(vt){ut()});else if(navigator.sendBeacon)navigator.sendBeacon(me,""),ut();else{var Zt=new Image;Zt.onload=ut,Zt.src=me+"&sc_random="+Math.random()}})(parseInt(ne,10),e)}catch(J){}if(!s||!g){var M=a+De(e)+u;if(n)ve(e,M);else if(navigator.sendBeacon)navigator.sendBeacon(M,"");else{var on=new Image;on.src=M+"&sc_random="+Math.random()}}}else{var M=a+De(e)+u,q="sc_counter_"+e;if(X!=1&&(q+="_"+X),t=="text"){var Qt=function(N){if(N.text)document.getElementById(q).innerHTML=N.text;else if(N.counter_image){var he=Ue(N.counter_image);document.getElementById(q).innerHTML=he}};n?(p('<span class="statcounter" id="'+q+'"></span>',e),ve(e,M,Qt)):(p('<span class="statcounter" id="'+q+'"></span>',e),zt(e,M,Qt))}else{if(window.sc_remove_link)var st="",lt="";else var st='<a id="'+q+'" class="statcounter" href="https://www.'+gt+'/" target="_blank">',lt="</a>";n?(p('<span class="statcounter">'+st+"Statcounter"+lt+"</span>",e),ve(e,M,function(N){var he=Ue(N.counter_image);document.getElementById(q).innerHTML=he})):(M+="&sc_random="+Math.random(),p('<span class="statcounter">'+st+Ue(M.replace(/&/g,"&amp;"))+lt+"</span>",e))}}ct++},de=function(e){var t=function(){for(var n in f._security_codes)ot(parseInt(n,10),this);return!0};e.addEventListener?e.addEventListener("mousedown",t):e.attachEvent&&e.attachEvent("onmousedown",t)},Vt=function(){},it=function(){if(window.sc_click_stat)var e=window.sc_click_stat;else var e=0;for(var t=new Date,n=t.getTime()+e;t.getTime()<n;)var t=new Date},ot=function(e,t,n){var r="https?|ftp|telnet|ssh|ssl|mailto|spotify|zoommtg|zoomus|slack|skype|callto|bitcoin|gtalk|tel",i="ac|co|gov|ltd|me|mod|net|nic|nhs|org|plc|police|sch|com",a=new RegExp("\\.("+dt+")$","i"),o=new RegExp("^("+r+"):","i"),l=new RegExp("^("+i+")$","i"),u=location.host.replace(/^www\./i,""),s=u.split("."),g=s.pop(),c=s.pop();l.test(c)&&(g=c+"."+g,c=s.pop()),g=c+"."+g;var d="^https?://(.*)("+g+"|webcache.googleusercontent.com)",I=new RegExp(d,"i");if(t){var h=0;if(o.test(t)?I.test(t)?a.test(t)?h=1:(Ve!==!1&&Ve.test(t)||ae==2)&&(h=2):h=2:n===!0&&(h=2),h!=0){var A=escape(t);if(A.length>0){if(!x(e)&&h==2&&j!="disabled"&&o.test(t))try{sessionStorage.setItem("statcounter_exit_domain",A.split("/")[2].replace(/^www\./,""))}catch(L){}var S=Y+"click.gif?sc_project="+e+"&security="+f._security_codes[e]+"&c="+A+"&m="+h+"&u="+se()+"&t="+Le()+"&sess="+f.version()+"&rand="+Math.random(),m=Math.round(new Date().getTime()/1e3),y=f.update_cookie(e,m);y.u1!==void 0&&(S+="&u1="+y.u1),S+="&jg="+y.jg,S+="&rr="+y.rr;var E=new Image;E.onload=Vt,E.src=S,f._add_recording_event&&f._add_recording_event(h==1?"download":h==2?"exit":"unknown",{link:unescape(A)}),it()}}}},ce=function(e,t){if(t.src.match(Xe))var n=escape(t.src);else var n=escape("Google Adsense "+t.width+"x"+t.height);var r=Y+"click.gif?sc_project="+e+"&security="+f._security_codes[e]+"&c="+n+"&m=2&u="+se()+"&t="+Le()+"&sess="+f.version()+"&rand="+Math.random(),i=Math.round(new Date().getTime()/1e3),a=f.update_cookie(e,i);if(a.u1!==void 0&&(r+="&u1="+a.u1),r+="&jg="+a.jg,r+="&rr="+a.rr,navigator.sendBeacon)navigator.sendBeacon(r,"");else{var o=new Image;o.src=r,it()}f._add_recording_event&&f._add_recording_event("adsense",{link:unescape(n)})},Wt=function(e){var t=e.defaultView,n=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,r=/Firefox/.test(navigator.userAgent)&&/Android/.test(navigator.userAgent);if(n||r)for(var i=e.getElementsByTagName("iframe"),a=0;a<i.length;a++)i[a].id.substring(0,6)=="aswift"&&i[a].addEventListener("mouseenter",function(l){for(var u in f._security_codes)ce(parseInt(u,10),this)});else if(e.all&&typeof window.opera=="undefined")for(var i=e.getElementsByTagName("iframe"),a=0;a<i.length;a++)(i[a].src.match(Xe)||i[a].id.match(xt))&&(i[a].onfocus=function(){for(var s in f._security_codes)ce(parseInt(s,10),this)});else if(typeof window.addEventListener!="undefined"){var o="unload";o="beforeunload",t&&(t.focus(),t.addEventListener("blur",function(){var l=e.activeElement;Ce=l,It=new Date().getTime()}),t.addEventListener(o,Yt,!1),t.addEventListener("mousemove",Ft,!0))}},kt=function(){var e=navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return 10>=parseInt(e.substring(t+5,e.indexOf(".",t)),10);var n=e.indexOf("Trident/");if(n>0){var r=e.indexOf("rv:");return 11>=parseInt(e.substring(r+3,e.indexOf(".",r)),10)}return!1},Ft=function(e){typeof e.pageX=="number"?(Q=e.pageX,_=e.pageY):typeof e.clientX=="number"&&(Q=e.clientX,_=e.clientY,v.body&&(v.body.scrollLeft||v.body.scrollTop)?(Q+=v.body.scrollLeft,_+=v.body.scrollTop):v.documentElement&&(v.documentElement.scrollLeft||v.documentElement.scrollTop)&&(Q+=v.documentElement.scrollLeft,_+=v.documentElement.scrollTop))},Xt=function(e){for(var t=0;e;)t+=e.offsetTop,e=e.offsetParent;return t},Gt=function(e){for(var t=0;e;)t+=e.offsetLeft,e=e.offsetParent;return t},Yt=function(e){var t=v.getElementsByTagName("iframe");if(typeof Q!="undefined")for(var n=0;n<t.length;n++){var r=Gt(t[n]),i=Xt(t[n]),a=parseInt(r,10)+parseInt(t[n].width,10)+15,o=parseInt(i,10)+parseInt(t[n].height,10)+10,l=Q>r-10&&Q<a,u=_>i-10&&_<o;if(u&&l&&(t[n].src.match(Xe)||t[n].id.match(xt)))for(var s in f._security_codes)ce(parseInt(s,10),t[n])}if(typeof Ce!="undefined"&&Ce.id.substring(0,6)=="aswift"){var g=new Date().getTime()-It;if(g<300)for(var s in f._security_codes)ce(parseInt(s,10),Ce)}},Kt=function(e){var t=!1;for(var n in f._security_codes){var r=parseInt(n,10);(ye(r)||r==12718861||r==12537497)&&(t=!0)}if(t)try{var i=function(o){try{if(o.nodeType!==1)return;(o.tagName.toLowerCase()=="a"||o.tagName.toLowerCase()=="area"&&typeof o.hasAttribute=="function"&&o.hasAttribute("href"))&&de(o),o.hasChildNodes()&&o.childNodes.forEach(i)}catch(l){}},a=new MutationObserver(function(o){try{o.forEach(function(l){return l.addedNodes.forEach(i)})}catch(l){}});a.observe(e.body,{subtree:!0,childList:!0})}catch(o){}},ft=function(e){for(var t=e.defaultView,n=function(){Wt(e)},r=e.getElementsByTagName("a"),i=e.getElementsByTagName("area"),a=0;a<r.length;a++){var o=r[a];de(o)}for(var a=0;a<i.length;a++){var o=i[a];typeof o.hasAttribute=="function"&&o.hasAttribute("href")&&de(o)}if(Kt(e),typeof window.addEventListener!="undefined")t.addEventListener("load",n,!1);else if(typeof e.addEventListener!="undefined")e.addEventListener("load",n,!1);else if(typeof window.attachEvent!="undefined")t.attachEvent("onload",n);else if(typeof window.onload=="function"){var l=onload;t.onload=function(){l(),n()}}else t.onload=n},fn=p,sn=F,ln=x,un=Ot,vn=At,gn=Qe,dn=Le,cn=se,hn=Mt,mn=Nt,wn=De,yn=Ct,pn=Lt,bn=Dt,xn=Bt,In=Pt,Sn=Jt,En=Ze,Tn=Be,On=Rt,An=ee,Mn=Ut,Nn=le,Cn=Pe,Ln=Je,Dn=qe,Bn=je,Pn=_e,Jn=Ht,Rn=ue,Un=et,Hn=tt,zn=nt,$n=O,Vn=B,Wn=zt,kn=Re,Fn=ve,Xn=$t,Gn=rt,Yn=ge,Kn=Ue,Qn=te,Zn=at,qn=de,jn=Vt,_n=it,er=ot,tr=ce,nr=Wt,rr=kt,ar=Ft,ir=Xt,or=Gt,fr=Yt,sr=Kt,lr=ft,f,X=1,re=!1,G;try{var z=new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}});z._heatmap&&z._heatmap.match("^(dev[^.]+.)?statcounter$")&&(re=!0,G="https://"+z._heatmap+".com")}catch(e){}typeof C!="undefined"&&C.record_pageview?(f=C,X=f._get_script_num()+1):(typeof C=="undefined"?(f=function(){},f._pending_tags={}):(C.start_recording?(f=C,C._pageview_tags_in&&(C=C._pageview_tags_in)):f=function(){},Object.prototype.toString.call(C)==="[object Array]"?f._pending_tags=C:f._pending_tags={}),f._session_increment_calculated={},f._returning_values={},f._security_codes={}),f.push=function(e){f._pending_tags=[e]};var pe=!1;if(typeof performance!="undefined")try{pe=Math.round(performance.now())}catch(e){pe=!1}var $=!1,ze=!1;if(document.currentScript&&document.currentScript.src){try{$=document.currentScript}catch(e){var be=document.getElementsByTagName("script");if(be.length){for(var xe=be.length-1;xe>=0;xe--)if(be[xe].src.indexOf("/counter")!==-1){$=be[xe];break}}}if($)try{new URL($.src).host.replace(/www\.|dev.[0-9]+\./,"")==="statcounter.com"&&(ze=$.src)}catch(e){}}var ae=-1,Y="",gt="statcounter.com",w="",j="cookie",$e=!1,dt="7z|aac|avi|csv|doc|docx|exe|flv|gif|gz|jpe?g|js|mp(3|4|e?g)|mov|pdf|phps|png|ppt|rar|sit|tar|torrent|txt|wma|wmv|xls|xlsx|xml|zip";typeof window.sc_download_type=="string"&&(dt=window.sc_download_type);var Ve=!1;typeof window.sc_exit_link_detect=="string"&&(Ve=new RegExp(sc_exit_link_detect,"i")),window.sc_client_storage&&(j=window.sc_client_storage),typeof window.sc_first_party_cookie!="undefined"&&sc_first_party_cookie=="0"&&(j="disabled"),window.sc_click_stat&&(ae=window.sc_click_stat),window.sc_local?Y=sc_local:(ae==-1&&(ae=1),Y="https://c."+gt+"/"),window.sc_project&&(T=parseInt(window.sc_project,10),window.sc_security?f._security_codes[T]=sc_security:f._security_codes[T]===void 0&&(f._security_codes[T]=""));var V=[30,60,120,180,360,720,1440,2880,10080],Ie="ntd",We="ntd",Se="ntd";f.get_top_window=function(){for(var e=window;e.parent&&e.parent!==e;)try{var t=e.parent.document;e=e.parent}catch(n){break}return e};var b=f.get_top_window(),v=b.document;f.get_referrer=Qe;var ct=0;if(f.inject_script=function(e,t){if(!(e===void 0||!e.match(/^https?:\/\/(?:[^\/]+\.)?statcounter\.com/))){var n=document.createElement("script");n.type="text/javascript",n.async=!0;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r),t&&(n.onload=t,n.onreadystatechange=function(){this.readyState=="complete"&&t()}),n.src=e}},re&&(!window.parent||window.parent===window)){var e=function(){for(var t=document.head.firstChild;t!==null;t=n){var n=t.nextSibling;t._deleteme&&document.head.removeChild(t)}document.head.appendChild(Fe);for(var r=0;r<document.documentElement.attributes.length;r++){var i=document.documentElement.attributes[r];i.specified&&nested_iframe.contentDocument.documentElement.setAttribute(i.name,i.value)}for(var r=0;r<document.body.attributes.length;r++){var i=document.body.attributes[r];i.specified&&nested_iframe.contentDocument.body.setAttribute(i.name,i.value)}for(var t=document.body.firstChild;t!==null;t=n){var n=t.nextSibling;t!==nested_iframe&&t!==statcounter_iframe&&t.className!=="heatmap-wrapper"&&nested_iframe.contentDocument.body.appendChild(t)}for(var r=0;r<document.documentElement.attributes.length;r++){var i=document.documentElement.attributes[r];i.specified&&document.documentElement.removeAttribute(i.name)}for(var r=0;r<document.body.attributes.length;r++){var i=document.body.attributes[r];i.specified&&document.body.removeAttribute(i.name)}if(document.body.className="heatmap-popup",document.doctype==="<!DOCTYPE html>"){var a=document.implementation.createDocumentType("html","","");document.doctype.parentNode.replaceChild(a,document.doctype)}var o=W.closest(".heatmap-popup").clientWidth,l=W.querySelector("iframe"),u=parseInt(nested_iframe.getAttribute("width"));if(u>o){var s=o/u;W.style.scale=s}},ur=e,Ee="";z.hms?(z.hms.startsWith("d")&&(ie="desktop"),Ee=z.hms.substring(1),sessionStorage.setItem("sc_hms",Ee),sessionStorage.setItem("sc_s",ie),window.history.replaceState(history.state,document.title,document.location.href.split("&hms=")[0])):sessionStorage.getItem("sc_hms")&&(Ee=sessionStorage.getItem("sc_hms"),ie=sessionStorage.getItem("sc_s"));var ht={mobile:430,desktop:1570},ie="mobile",ke=document.location.host.replace(/^www./,"")+document.location.pathname;ke=ke.replace(/\/index\.(html?|php|cfm)$/,"");var Fe=document.createElement("style");Fe.innerText="body { margin: 0; display: flex; } iframe { border: none; min-height: 100vh; }",statcounter_iframe=document.createElement("iframe"),statcounter_iframe.setAttribute("scrolling","no"),statcounter_iframe.classList.add("heatmap-controls");var mt="";document.location.search.indexOf("hdebug")!==-1&&(mt="&hdebug"),statcounter_iframe.setAttribute("src",G+"/p"+T+"/heatmap/?domainpath="+ke+"&origin="+document.location.origin+mt+"&hms="+encodeURIComponent(Ee));var W=document.createElement("div");W.classList.add("heatmap-wrapper"),W.style.maxWidth=ht[ie]+"px";var wt=document.createElement("div");wt.classList.add("canvas-container"),W.appendChild(wt),nested_iframe=document.createElement("iframe"),nested_iframe.setAttribute("scrolling","no"),nested_iframe.setAttribute("width",ht[ie]),W.appendChild(nested_iframe);var Te=document.createElement("link");Te.setAttribute("rel","shortcut icon"),Te.setAttribute("href",G+"/images/favicon.png?v=1"),Te.setAttribute("type","image/x-icon"),document.head.appendChild(Te),document.startViewTransition?(document.body.style.viewTransitionName="website",document.startViewTransition(function(){document.body.style.viewTransitionName="none",nested_iframe.style.viewTransitionName="website",e(),document.body.appendChild(statcounter_iframe)})):(nested_iframe.addEventListener("load",e),document.body.appendChild(statcounter_iframe)),document.body.appendChild(W),nested_iframe.contentDocument.open(),nested_iframe.contentDocument.close();for(var R=document.head.firstChild;R!==null;R=qt){var qt=R.nextSibling;R.tagName==="TITLE"?R.innerHTML="Heatmap | "+R.innerHTML+" | Statcounter":R!==Fe&&(nested_iframe.contentDocument.head.appendChild(R.cloneNode(!0)),R._deleteme=!0)}var U=document.createElement("script");z._heatmap.startsWith("dev")?(U.setAttribute("src",G+"/js/hotspot.module.js"),U.setAttribute("type","module")):U.setAttribute("src",G+"/js/hotspot-PACKED.js"),document.head.appendChild(U)}if(re){var U=document.createElement("script");z._heatmap.startsWith("dev")?(U.setAttribute("src",G+"/js/heatmap-embedded.module.js"),U.setAttribute("type","module")):U.setAttribute("src",G+"/js/heatmap-embedded-PACKED.js"),document.head.appendChild(U)}var Oe=[],H=256,yt=6,jt=52,_t=Math.pow(H,yt),pt=Math.pow(2,jt),en=pt*2,K=H-1,bt,tn=function(e,t){var n=[],r=Be(Ze(t?[e,ee(Oe)]:0 in arguments?e:Rt(),3),n),i=new Jt(n);return Be(ee(i.S),Oe),bt=function(){for(var a=i.g(yt),o=_t,l=0;a<pt;)a=(a+l)*H,o*=H,l=i.g(1);for(;a>=en;)a/=2,o/=2,l>>>=1;return(a+l)/o},r};Be(Math.random(),Oe);var k;typeof window.sc_cookie_domain=="undefined"?k=v.location.host.replace(/^www\./,""):k=window.sc_cookie_domain,k.substring(0,1)!="."&&(k="."+k),f.getSessionConfig=O,f._recording_initiated===void 0&&(f._recording_initiated={});var Ae=function(e){if(!re&&!f._recording_initiated[e]){var t=O("record_"+e);if(!(!t||!t.match(/(^on$|test$|test_[a-z]{12}$|wsdev$|^dev[0-9]*)/))&&!kt()&&f._session_increment_calculated[e]&&O("sc_project_time_difference_"+e)){if(window!==b){if(b.sc_top_reg===void 0&&(b.sc_top_reg={}),b.sc_top_reg[e]===2)return;b.sc_top_reg[e]=2}if(f.start_recording)f.start_recording(e,t,$e);else{var n="https://www.statcounter.com/counter/recorder.js";ze&&(n=ze.replace(/\/counter([^\/])/,"/recorder$1").replace("_xhtml",""),n=n.replace(/^http:\/\//,"https://")),t.indexOf("test")!=-1&&(n=n.replace(/\/recorder(.[^t])/,"/recorder_test$1")),t.indexOf("_")!=-1&&(n=n.replace(/\.js/,"_"+t.split("_")[1]+".js")),t.substring(0,3)=="dev"&&t!=="dev"?n=n.replace(/\/\/(www\.|secure\.)?/,"//"+t.split("_")[0].replace(/\//g,"").replace("test","").replace("wsdev","")+"."):n=n.replace(/\/\/(secure\.)?statcounter\./,"//www.statcounter."),f.inject_script(n,function(){_statcounter.start_recording(e,t,$e)})}f._recording_initiated[e]=!0}}};f.get_config=function(e,t){var n=!1;e.match(/sc_project=[0-9]+/)&&(n=parseInt(e.match(/sc_project=([0-9]+)/)[1],10));var r="t.php",i=Y;if(He(n)&&(r="counter_test.php",i="https://1ctest.statcounter.com/"),e.substring(0,1)=="?")var a=i+r+e;else var a=e;a=a+"&get_config=true",n!==!1?Re(a,t,function(o){B("sc_block_project_config_"+n,1)}):Re(a,t)};var oe={google:null,bing:["q"],"search.yahoo":null,"m.yahoo":null,"m2.yahoo":null,baidu:["wd","word"],yandex:["text"],"ya.ru":["text"],haosou:["q"],"so.com":["q"],"360.cn":["q"],"360sou":["q"],aol:["query","q"],duckduckgo:null,"ask.com":["q","QUERYT"],"mail.ru":["words"],sogou:["q","query"]},Me={fb:["facebook.com","fb.me"],pi:["pinterest.com"],tw:["twitter.com","t.co"],ln:["linkedin.com"],in:["instagram.com"],rd:["reddit.com"],tb:["tumblr.com"],st:["stumbleupon.com"],yt:["youtube.com"],gp:["plus.google.com","plus.url.google.com"]},Ne=escape(Qe());f.record_pageview=function(e,t){if(!re){var n="invisible";if(typeof e=="undefined"){if(T===!1)if(window.usr)e=999;else{console.error("Need to define a global `var sc_project` and `var security code`, or else call record_pageview with these arguments"),p("Statcounter code invalid. Insert a fresh copy.",e);return}else e=T;window.sc_invisible&&window.sc_invisible==1?n="invisible":window.sc_text?n="text":n="image"}else if(e=parseInt(e,10),isNaN(e)){console.error("Please call record_pageview with your statcounter project id");return}else if(typeof t=="string")f._security_codes[e]=t;else if(f._security_codes[e]===void 0){console.error("Please include the security code for project "+e+" as the second argument to record_pageview");return}f._security_codes[e]===void 0&&(f._security_codes[e]="");var r=0;(e==4135125||e==6169619||e==6222332||e==5106510||e==6311399||e==6320092||e==5291656||e==7324465||e==6640020||e==4629288||e==1480088||e==2447031)&&Math.floor(Math.random()*6)!=1&&(r=1);var i=!1,a=/Chrome/.test(navigator.userAgent),o=!1;try{if(navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&navigator.userAgentData.platform&&!F(n)&&(navigator.userAgentData.platform==="Windows"||a)){i="[pending]";var l=["platformVersion"];a&&l.push("model"),navigator.userAgentData.getHighEntropyValues(l).then(function(s){i=parseInt(s.platformVersion.split(".")[0]),a&&(o=s.model)}).catch(function(s){if(ye(e))throw s})}}catch(s){if(ye(e))throw s}if(r!=1)if(v.webkitVisibilityState=="prerender"){if(X==1){var s=function(){if(v.webkitVisibilityState!="prerender"){for(var g in f._security_codes)a&&o?te(parseInt(g,10),"invisible",{p:2,pv:i,dm:o}):te(parseInt(g,10),"invisible",{p:2,pv:i});v.removeEventListener("webkitvisibilitychange",s,!1)}},u=s;v.addEventListener("webkitvisibilitychange",s,!1)}at(e,n,!1,{},{p:1})}else i=="[pending]"?setTimeout(function(){a&&o?te(e,n,{p:0,pv:i,dm:o}):te(e,n,{p:0,pv:i})},1):te(e,n,{p:0})}};var fe={};f.record_click=function(e,t){if(e=parseInt(e,10),isNaN(e)){console.error("Please call record_click with your statcounter project id");return}else if(f._security_codes[e]===void 0){console.error("Please set up security codes (e.g. by calling record_pageview) prior to record_click");return}ot(e,t,!0)};var Xe="googlesyndication.com|ypn-js.overture.com|ypn-js.ysm.yahoo.com|googleads.g.doubleclick.net",xt="^aswift_[0-9]+$",Q,_,Ce,It;if(f.update_cookie=function(e,t,n){t===void 0&&(t=Math.round(new Date().getTime()/1e3));var r=O("sc_project_time_difference_"+e),i={},a="1.1.1.1.1.1.1.1.1",o="is_visitor_unique";try{var l=je(o,e)}catch(P){var l=!1;w=".ex"}var u=[],s=[];if(l&&l.substring(0,2)=="rx"){Ht(o,k);var g=l.substring(2);u=g.split("-");for(var c=!1,d=!1,I=0;I<u.length;I++){var h=u[I].split(".");if(parseInt(h[0],10)==e){c=!0;var A=parseInt(h[1],10);f._returning_values[e]=[];var S=2;h[2].length==32?(w="."+h[2],S=3):w=d;for(var m=0;m<V.length;m++){var y=parseInt(h[m+S],10);isNaN(y)&&(y=1),f._returning_values[e].push(y)}i.jg=t-A;for(var m=0;m<V.length;m++)n?f._returning_values[e][m]++:t>A+60*V[m]&&(V[m]*60===r&&(i.session_incremented=!0),f._returning_values[e][m]++);i.rr=f._returning_values[e].join("."),s.push(""+e+"."+t+w+"."+f._returning_values[e].join("."))}else s.push(u[I]),I==0&&h[2].length==32&&w==""&&(w="."+h[2]);I==0&&(d=w)}c||(s.length==0&&w==""&&(w="."+le()),s.push(""+e+"."+t+w+"."+a),f._returning_values[e]=a.split("."),i.jg="new",i.rr=a),s.sort(function(P,ne){return parseInt(ne.split(".")[1],10)-parseInt(P.split(".")[1],10)});for(var E=1;E<s.length;E++)s[E]=s[E].replace("."+s[0].split(".")[2]+".",".");var L=qe(o,s,k,"rx",3,e)}else if(w!=".ex"){w="."+le(),s=[""+e+"."+t+w+"."+a];var Z=qe(o,s,k,"rx",3,e);Z?(f._returning_values[e]=a.split("."),i.jg="new",i.rr=a):w=".na"}return w!=""&&(i.u1=w.substring(1)),i},f.get_visitor_id=function(){if(w.length>1)return w.substring(1);var e=!1;try{e=je("is_visitor_unique")}catch(t){}return e&&e.substring(0,2)=="rx"&&e.split(".").length>2&&e.split(".")[2].length==32?e.split(".")[2]:"x-no-visitor"},f.get_session_num=function(e){var t=O("sc_project_time_difference_"+e),n=!1;if(!t&&Ie!=="ntd"?n=Ie:n=t,n!=!1&&f._session_increment_calculated[e]&&f._returning_values[e].length==V.length){for(var r=0;r<V.length;r++)if(V[r]*60==parseInt(n))return f._returning_values[e][r]}var i="-"+Ie+"-"+e+"-"+We+"-"+Se;if(t===null)return"x-no-session-num-99"+Math.round(1e3*Math.random())+i;if(f._session_increment_calculated[e]){if(f._returning_values[e].length!==V.length)return"x-no-session-num-97"+Math.round(1e3*Math.random())+i;if(t==!1)return"x-no-session-num-96"+Math.round(1e3*Math.random())+i}else return"x-no-session-num-98"+Math.round(1e3*Math.random())+i;return"x-no-session-num-95"+t+i},f.version=function(){return"TEST"},f.get_tab_session=function(){var e=!1;try{if(e=sessionStorage.getItem("statcounter_tab_session"),!e){e=le(8);try{sessionStorage.setItem("statcounter_tab_session",e)}catch(t){e=!1}}}catch(t){e=!1}if(e===!1)session_tab_id="x-no-session-storage-"+Math.round(1e5*Math.random());else return e},f.record=function(e,t){if(t===void 0&&(t="on"),e===void 0||e==="on"||e==="dev")if(T!==!1)console.log("Turning on session recording for p"+T),e=T;else return;else if(parseInt(e,10)+""==e)e=parseInt(e,10);else return;B("record_"+e,t),O("sc_project_time_difference_"+e)||B("sc_project_time_difference_"+e,1800),Ae(e)},f._get_script_num=function(){return X},X==1){if(ae>0){var D=[];for(D.push.apply(D,v.getElementsByTagName("frame")),D.push.apply(D,v.getElementsByTagName("iframe"));D.length;){var nn=D.pop(0);try{var Ge=nn.contentDocument;ft(Ge),D.push.apply(D,Ge.getElementsByTagName("frame")),D.push.apply(D,Ge.getElementsByTagName("iframe"))}catch(e){}}ft(v)}try{var St=v.getElementsByTagName("title");if(St.length){var Et=v.title,Ye=v.location.href.split("#")[0],rn=new MutationObserver(function(){var e=v.location.href.split("#")[0];if(v.title!=Et&&e!=Ye){for(var t in f._security_codes){var n=parseInt(t,10);(fe[n]===void 0||new Date().getTime()-fe[n]>1e3)&&setTimeout(function(r){(fe[r]===void 0||new Date().getTime()-fe[r]>1e3)&&(b.sc_top_reg!==void 0&&(b.sc_top_reg[r]=void 0),f.record_pageview(r))},200,n)}f._add_recording_event&&f._add_recording_event("history-pageload",{referrer:Ye,href:e}),Et=v.title,Ye=e}});rn.observe(St[0],{childList:!0,attributes:!1,subtree:!1})}}catch(e){}}return f._generate_uuid=le,f}catch(p){if(T!=!1&&ye(T)){typeof encodeURIComponent!="function"&&(encodeURIComponent=function(F){return escape(F)});var Ke="";for(var Tt in p)Ke+="property: "+Tt+" value: ["+p[Tt]+"]\n";Ke+="toString():  value: ["+p.toString()+"]\n";var an=new Image;an.src="https://statcounter.com/feedback/?email=javascript@statcounter.com&page_url="+encodeURIComponent(v.location.protocol+"//"+v.location.host+v.location.pathname+v.location.search+v.location.hash)+"&name=Auto%20JS&feedback_username=statcounter&pid="+T+"&fake_post&user_company&feedback=consistent%20uniques%20js%20exception:%20"+encodeURIComponent(Ke)}}}(_statcounter);_statcounter.record_pageview();