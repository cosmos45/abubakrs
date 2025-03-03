var njtWhatsApp;(()=>{var t={484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,s="millisecond",i="second",r="minute",o="hour",a="day",c="week",u="month",l="quarter",d="year",p="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},_={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(s,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,u),r=n-i<0,o=e.clone().add(s+(r?-1:1),u);return+(-(s+(n-i)/(r?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:d,w:c,d:a,D:p,h:o,m:r,s:i,ms:s,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",b={};b[w]=g;var y=function(t){return t instanceof S},$=function t(e,n,s){var i;if(!e)return w;if("string"==typeof e){var r=e.toLowerCase();b[r]&&(i=r),n&&(b[r]=n,i=r);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;b[a]=e,i=a}return!s&&i&&(w=i),i||!s&&w},x=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},M=_;M.l=$,M.i=y,M.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function g(t){this.$L=$(t.locale,null,!0),this.parse(t)}var v=g.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(h);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return x(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<x(t)},v.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,s=!!M.u(e)||e,l=M.p(t),f=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return s?i:i.endOf(a)},h=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,g=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(l){case d:return s?f(1,0):f(31,11);case u:return s?f(1,g):f(0,g+1);case c:var w=this.$locale().weekStart||0,b=(m<w?m+7:m)-w;return f(s?v-b:v+(6-b),g);case a:case p:return h(_+"Hours",0);case o:return h(_+"Minutes",1);case r:return h(_+"Seconds",2);case i:return h(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,c=M.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[a]=l+"Date",n[p]=l+"Date",n[u]=l+"Month",n[d]=l+"FullYear",n[o]=l+"Hours",n[r]=l+"Minutes",n[i]=l+"Seconds",n[s]=l+"Milliseconds",n)[c],h=c===a?this.$D+(e-this.$W):e;if(c===u||c===d){var m=this.clone().set(p,1);m.$d[f](h),m.init(),this.$d=m.set(p,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[M.p(t)]()},v.add=function(s,l){var p,f=this;s=Number(s);var h=M.p(l),m=function(t){var e=x(f);return M.w(e.date(e.date()+Math.round(t*s)),f)};if(h===u)return this.set(u,this.$M+s);if(h===d)return this.set(d,this.$y+s);if(h===a)return m(1);if(h===c)return m(7);var g=(p={},p[r]=e,p[o]=n,p[i]=t,p)[h]||1,v=this.$d.getTime()+s*g;return M.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),r=this.$H,o=this.$m,a=this.$M,c=n.weekdays,u=n.months,l=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].slice(0,r)},d=function(t){return M.s(r%12||12,t,"0")},p=n.meridiem||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:M.s(a+1,2,"0"),MMM:l(n.monthsShort,a,u,3),MMMM:l(u,a),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,c,2),ddd:l(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(r),HH:M.s(r,2,"0"),h:d(1),hh:d(2),a:p(r,o,!0),A:p(r,o,!1),m:String(o),mm:M.s(o,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return s.replace(m,(function(t,e){return e||h[t]||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(s,p,f){var h,m=M.p(p),g=x(s),v=(g.utcOffset()-this.utcOffset())*e,_=this-g,w=M.m(this,g);return w=(h={},h[d]=w/12,h[u]=w,h[l]=w/3,h[c]=(_-v)/6048e5,h[a]=(_-v)/864e5,h[o]=_/n,h[r]=_/e,h[i]=_/t,h)[m]||_,f?w:M.a(w)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return b[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=$(t,e,!0);return s&&(n.$L=s),n},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),k=S.prototype;return x.prototype=k,[["$ms",s],["$s",i],["$m",r],["$H",o],["$W",a],["$M",u],["$y",d],["$D",p]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,S,x),t.$i=!0),x},x.locale=$,x.isDayjs=y,x.unix=function(t){return x(1e3*t)},x.en=b[w],x.Ls=b,x.p={},x}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,c=2592e6,u=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:a,months:c,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof _},p=function(t,e,n){return new _(t,n,e.$l)},f=function(t){return e.p(t)+"s"},h=function(t){return t<0},m=function(t){return h(t)?Math.ceil(t):Math.floor(t)},g=function(t){return Math.abs(t)},v=function(t,e){return t?h(t)?{negative:!0,format:""+g(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},_=function(){function h(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return p(t*l[f(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[f(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(u);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var g=h.prototype;return g.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*l[n]}),0)},g.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/c),t%=c,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/i),t%=i,this.$d.minutes=m(t/s),t%=s,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},g.toISOString=function(){var t=v(this.$d.years,"Y"),e=v(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=v(n,"D"),i=v(this.$d.hours,"H"),r=v(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var a=v(o,"S"),c=t.negative||e.negative||s.negative||i.negative||r.negative||a.negative,u=i.format||r.format||a.format?"T":"",l=(c?"-":"")+"P"+t.format+e.format+s.format+u+i.format+r.format+a.format;return"P"===l||"-P"===l?"P0D":l},g.toJSON=function(){return this.toISOString()},g.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(s[t])}))},g.as=function(t){return this.$ms/l[f(t)]},g.get=function(t){var e=this.$ms,n=f(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/l[n]):this.$d[n],0===e?0:e},g.add=function(t,e,n){var s;return s=e?t*l[f(e)]:d(t)?t.$ms:p(t,this).$ms,p(this.$ms+s*(n?-1:1),this)},g.subtract=function(t,e){return this.add(t,e,!0)},g.locale=function(t){var e=this.clone();return e.$l=t,e},g.clone=function(){return p(this.$ms,this)},g.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},g.milliseconds=function(){return this.get("milliseconds")},g.asMilliseconds=function(){return this.as("milliseconds")},g.seconds=function(){return this.get("seconds")},g.asSeconds=function(){return this.as("seconds")},g.minutes=function(){return this.get("minutes")},g.asMinutes=function(){return this.as("minutes")},g.hours=function(){return this.get("hours")},g.asHours=function(){return this.as("hours")},g.days=function(){return this.get("days")},g.asDays=function(){return this.as("days")},g.weeks=function(){return this.get("weeks")},g.asWeeks=function(){return this.as("weeks")},g.months=function(){return this.get("months")},g.asMonths=function(){return this.as("months")},g.years=function(){return this.get("years")},g.asYears=function(){return this.as("years")},h}();return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return p(t,{$l:n},e)},i.isDuration=d;var r=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(t,e){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,e)}}}()},387:function(t){t.exports=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,s,i){var r,o=function(t,n,s){void 0===s&&(s={});var i=new Date(t),r=function(t,n){void 0===n&&(n={});var s=n.timeZoneName||"short",i=t+"|"+s,r=e[i];return r||(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:s}),e[i]=r),r}(n,s);return r.formatToParts(i)},a=function(e,n){for(var s=o(e,n),r=[],a=0;a<s.length;a+=1){var c=s[a],u=c.type,l=c.value,d=t[u];d>=0&&(r[d]=parseInt(l,10))}var p=r[3],f=24===p?0:p,h=r[0]+"-"+r[1]+"-"+r[2]+" "+f+":"+r[4]+":"+r[5]+":000",m=+e;return(i.utc(h).valueOf()-(m-=m%1e3))/6e4},c=s.prototype;c.tz=function(t,e){void 0===t&&(t=r);var n=this.utcOffset(),s=this.toDate(),o=s.toLocaleString("en-US",{timeZone:t}),a=Math.round((s-new Date(o))/1e3/60),c=i(o).$set("millisecond",this.$ms).utcOffset(15*-Math.round(s.getTimezoneOffset()/15)-a,!0);if(e){var u=c.utcOffset();c=c.add(n-u,"minute")}return c.$x.$timezone=t,c},c.offsetName=function(t){var e=this.$x.$timezone||i.tz.guess(),n=o(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var u=c.startOf;c.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return u.call(this,t,e);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return u.call(n,t,e).tz(this.$x.$timezone,!0)},i.tz=function(t,e,n){var s=n&&e,o=n||e||r,c=a(+i(),o);if("string"!=typeof t)return i(t).tz(o);var u=function(t,e,n){var s=t-60*e*1e3,i=a(s,n);if(e===i)return[s,e];var r=a(s-=60*(i-e)*1e3,n);return i===r?[s,i]:[t-60*Math.min(i,r)*1e3,Math.max(i,r)]}(i.utc(t,s).valueOf(),c,o),l=u[0],d=u[1],p=i(l).utcOffset(d);return p.$x.$timezone=o,p},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(t){r=t}}}()},178:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(s,i,r){var o=i.prototype;r.utc=function(t){return new i({date:t,utc:!0,args:arguments})},o.utc=function(e){var n=r(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},o.local=function(){return r(this.toDate(),{locale:this.$L,utc:!1})};var a=o.parse;o.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var c=o.init;o.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else c.call(this)};var u=o.utcOffset;o.utcOffset=function(s,i){var r=this.$utils().u;if(r(s))return this.$u?0:r(this.$offset)?u.call(this):this.$offset;if("string"==typeof s&&(s=function(t){void 0===t&&(t="");var s=t.match(e);if(!s)return null;var i=(""+s[0]).match(n)||["-",0,0],r=i[0],o=60*+i[1]+ +i[2];return 0===o?0:"+"===r?o:-o}(s),null===s))return this;var o=Math.abs(s)<=16?60*s:s,a=this;if(i)return a.$offset=o,a.$u=0===s,a;if(0!==s){var c=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(o+c,t)).$offset=o,a.$x.$localOffset=c}else a=this.utc();return a};var l=o.format;o.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},o.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},o.isUTC=function(){return!!this.$u},o.toISOString=function(){return this.toDate().toISOString()},o.toString=function(){return this.toDate().toUTCString()};var d=o.toDate;o.toDate=function(t){return"s"===t&&this.$offset?r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var p=o.diff;o.diff=function(t,e,n){if(t&&this.$u===t.$u)return p.call(this,t,e,n);var s=this.local(),i=r(t).local();return p.call(s,i,e,n)}}}()}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};(()=>{"use strict";n.r(s),n.d(s,{createButton:()=>M,createWidget:()=>x,getBackTime:()=>v,ready:()=>S});var t=n(484),e=n.n(t),i=n(178),r=n.n(i),o=n(646),a=n.n(o),c=n(387),u=n.n(c);e().extend(r()),e().extend(a()),e().extend(u());const l=e(),d=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],p=function(t){const e=(t||"").split(":");return 2==e.length?{hour:e[0],minute:e[1]}:null},f=function(t){const e=(t||"").split(":");if(e.length>=2){return{hours:parseInt(e[0],10),minutes:parseInt(e[1],10)}}return null},h=function(t,e){const n=f(t),s=f(e),i=n.minutes+60*n.hours,r=s.minutes+60*s.hours;return i===r?0:i>r?1:-1},m=function(t,e,n){var s=new Date;s.setTime(s.getTime()+24*n*60*60*1e3);var i="expires="+s.toUTCString();document.cookie=t+"="+e+";"+i+";path=/"},g=function(t){for(var e=t+"=",n=document.cookie.split(";"),s=0;s<n.length;s++){for(var i=n[s];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(e))return i.substring(e.length,i.length)}return""},v=function(t,e){let n;if("ON"===t.isAlwaysAvailable)return"online";var s;s=e.timezone,n=/\d/.test(s)?l().utcOffset(function(t){const e=t.split(":");let n,s;return 2===e.length?(n=parseInt(e[0]),s=parseInt(e[1])):(n=parseInt(e[0]),s=0),-1!==t.indexOf("-")?-(60*Math.abs(n)+s):60*n+s}(e.timezone)):l(l()).tz(e.timezone);const i=d[n.get("day")],r=t.daysOfWeekWorking[i];if("OFF"===r.isWorkingOnDay)return t.dayOffsText;for(let s=0;s<r.workHours.length;s++){const i=n.get("hour")+":"+n.get("minute"),c=r.workHours[s].startTime,u=r.workHours[s].endTime;if(-1===h(i,c)){const s=f(c),i=(o={hour:s.hours,minute:s.minutes},a={hour:n.get("hour"),minute:n.get("minute")},1e3*(3600*(o.hour-a.hour)+60*(o.minute-a.minute))),r=l.duration(i),u=p(e.options.display.time_symbols),d=` ${r.get("hours")}${u.hour}:${r.get("minutes")}${u.minute} `;return t.willBeBackText.replace(/\[njwa_time_work\]/gi,d)}if(0===h(i,c)||0===h(i,u))return"online";if(1===h(i,c)&&-1===h(i,u))return"online"}var o,a;return t.dayOffsText},_=function(t,e){if("ON"==e.enabledFacebook||"ON"==e.enabledGoogle){var n=t.href,s=n.indexOf("phone=")+6,i=n.indexOf("&text=");-1===i&&(i=n.length);var r=n.substring(s,i),o="SeedGrow WhatsApp",a="Phone Number: "+r,c=document.title;if("ON"===e.enabledFacebook&&"undefined"!=typeof fbq&&fbq("trackCustom","SeedGrow WhatsApp",{phone:r,label:c}),"ON"===e.enabledGoogle){if("undefined"!=typeof gtag)"ON"===e.enabledGoogleGA4?gtag("event","SeedGrow WhatsApp",{number:r,title:c,url:window.location.href}):gtag("event",a,{event_category:o,event_label:c});else if("undefined"!=typeof ga&&void 0!==ga.getAll){ga.getAll()[0].send("event",o,a,c)}else"undefined"!=typeof __gaTracker&&__gaTracker("send","event",o,a,c);"undefined"!=typeof dataLayer&&dataLayer.push({event:"SeedGrow WhatsApp",number:r,title:c,url:window.location.href,event_category:o,event_label:c,event_action:a})}}};void 0===String.prototype.replaceAll&&(String.prototype.replaceAll=function(t,e){return this.replace(new RegExp(t,"g"),(()=>e))});const w=(y=!1,b=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(y=!0),y);var b,y;const $=function(t,e){let n="",s=t.predefinedText;if(s=s.replace(/\[njwa_page_title\]/gi,encodeURIComponent(document.title)),s=s.replace(/\[njwa_page_url\]/gi,window.location.href),s=s.replaceAll(/\n/gi,"%0A"),-1!==t.number.indexOf("chat.whatsapp.com"))n+=t.number;else{if(-1!==t.number.indexOf("wa.me"))return n+=t.number,n+=t.predefinedText?"?text="+s:"",n;let i=e.urlSettings[w?"onMobile":"onDesktop"];if(i||(i="api"),"protocol"===i)return"whatsapp://send?phone="+t.number.replace(/[^0-9]/gi,"");n+="https://"+i+".whatsapp.com/send?phone=",n+=t.number.replace(/[^0-9]/gi,""),n+=t.predefinedText?"&text="+s:""}return n},x=function(t,e){const n=Object.assign({accounts:[],timezone:"",defaultAvatar:"",gdprStatus:!1,options:{display:{},styles:{},analytics:{}},urlSettings:{}},e);if("OFF"==n.options.display.showOnDesktop&&!w)return;if("OFF"==n.options.display.showOnMobile&&w)return;const s=n.options.styles;t.classList.add("wa__widget_container");const i=document.createElement("div");i.setAttribute("class","wa__btn_popup_txt"),i.appendChild((()=>{const t=document.createElement("span");return t.innerHTML=s.btnLabel,t})()),i.style.display="ON"==s.isShowBtnLabel?"block":"none",i.style.left="left"==s.btnPosition?"100%":"unset",i.style.right="right"==s.btnPosition?"100%":"unset",i.style.marginRight="right"==s.btnPosition?"7px":"0px",i.style.marginLeft="left"==s.btnPosition?"7px":"0px",i.style.width=s.btnLabelWidth+"px";const r=document.createElement("div");r.setAttribute("class","wa__btn_popup_icon"),r.style.background=s.backgroundColor;const o=document.createElement("div");o.setAttribute("class","wa__btn_popup"),o.onclick=function(t){const e=function(t,e){if("simple"===e.options.styles.widgetType&&1===e.accounts.length){const t=$(e.accounts[0],e);return e.urlSettings.openInNewTab?window.open(t):location.href=t,!0}return!1}(0,n);if(e)return;let s,i;const r=document.querySelector(".wa__popup_chat_box"),o=document.querySelector(".wa__btn_popup");r.classList.contains("wa__active")?(r.classList.remove("wa__active"),o.classList.remove("wa__active"),clearTimeout(i),r.classList.contains("wa__lauch")&&(s=setTimeout((function(){r.classList.remove("wa__pending"),r.classList.remove("wa__lauch")}),400))):(r.classList.add("wa__pending"),r.classList.add("wa__active"),o.classList.add("wa__active"),clearTimeout(s),r.classList.contains("wa__lauch")||(i=setTimeout((function(){r.classList.add("wa__lauch")}),100)))},o.appendChild(i),o.appendChild(r),o.style.left="left"==s.btnPosition?parseInt(s.btnLeftDistance)+"px":"unset",o.style.right="right"==s.btnPosition?parseInt(s.btnRightDistance)+"px":"unset",o.style.bottom=parseInt(s.btnBottomDistance)+"px",t.appendChild(o);const a=document.createElement("div");a.setAttribute("class","wa__popup_heading"),a.style.background=s.backgroundColor,a.append((()=>{const t=document.createElement("div");return t.className="wa__popup_title",t.innerHTML=s.title,t.style.color=s.textColor,t})()),a.append((()=>{const t=document.createElement("div");return t.className="wa__popup_intro",t.innerHTML=s.description.replaceAll(/\r\n\r\n/gm,"<br/>"),t.style="#fff"==s.textColor||"#ffffff"==s.textColor?"color: #D9EBC6":"color: "+s.textColor+"; opacity: 0.8",t})());const c=document.createElement("div");c.className="nta-wa-gdpr",c.appendChild((()=>{const t=document.createElement("input");t.setAttribute("id","nta-wa-gdpr"),t.setAttribute("type","checkbox"),t.setAttribute("value","accept"),t.onchange=function(t){if(t.target.checked&&(m("nta-wa-gdpr","accept",30),""!=g("nta-wa-gdpr"))){const t=document.querySelectorAll(".nta-wa-gdpr");c.style.opacity=0,setTimeout((()=>{t.forEach((t=>t.style.display="none"))}),400);document.querySelectorAll(".wa__popup_content_item").forEach((t=>t.classList.remove("pointer-disable")))}};const e=document.createElement("span");e.appendChild(t),e.appendChild((()=>{const t=document.createElement("span");return t.innerHTML=n.options.styles.gdprContent.replaceAll(/\r\n\r\n/gm,"<br/>"),t})());const s=document.createElement("label");return s.setAttribute("for","nta-wa-gdpr"),s.appendChild(e),s})());const u=document.createElement("div");u.className="wa__popup_content wa__popup_content_left",u.appendChild((()=>{const t=document.createElement("div");return t.className="wa__popup_notice",t.innerHTML=s.responseText.replaceAll(/\r\n\r\n/gm,"<br/>"),t})()),u.appendChild("ON"==s.isShowGDPR&&1==n.gdprStatus?c:document.createTextNode("")),u.appendChild((()=>{const t=document.createElement("div");var e;return t.className="wa__popup_content_list",t.onclick=function(){""==g("nta-wa-gdpr")&&(c.style.background="red",c.style.color="#fff")},e=t,n.accounts.forEach((t=>{const s=v(t,n);let i=$(t,n);const r=document.createElement("div");r.className="wa__popup_avatar"+(t.avatar?"":" nta-default-avt"),r.appendChild((()=>{if(t.avatar){const e=document.createElement("div");return e.className="wa__cs_img_wrap",e.style=`background: url(${t.avatar}) center center no-repeat; background-size: cover;`,e}return document.createRange().createContextualFragment(n.defaultAvatar)})());const o=document.createElement("div");o.className="wa__popup_content_item"+(n.gdprStatus?" pointer-disable":""),o.appendChild((()=>{const e=document.createElement("a");return e.setAttribute("target","ON"==n.urlSettings.openInNewTab?"_blank":"_self"),e.setAttribute("href",i),e.setAttribute("rel","nofollow noopener noreferrer"),e.className="wa__stt"+("online"===s?" wa__stt_online":" wa__stt_offline"),e.onclick=function(){_(this,{enabledFacebook:n.options.analytics.enabledFacebook,enabledGoogle:n.options.analytics.enabledGoogle,enabledGoogleGA4:n.options.analytics.enabledGoogleGA4})},e.appendChild(r),e.appendChild((()=>{const e=document.createElement("div");e.className="wa__popup_txt";let n="";return n+=`<div class="wa__member_name">${t.accountName}</div>`,n+=`<div class="wa__member_duty">${t.title}</div>`,n+="online"!=s?`<div class="wa__member_status">${s}</div>`:"",e.innerHTML=n,e})()),e})()),e.appendChild(o)})),t})());"ON"===s.isShowPoweredBy&&u.appendChild((()=>{const t=document.createElement("div");return t.className=w?"wa__popup_powered_mb":"wa__popup_powered",t.innerHTML=w?'<span class="wa__popup_tooltiptext_mb"> POWERED BY<a target="_blank" href="https://apps.shopify.com/whatsapp-chat-widget"><svg class="wa__popup_icon-ninja" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve"><g><g><g style="opacity:0;"><path d="M183,256H73c-13.8,0-26.8-3.8-37.8-10.5C14.1,232.7,0,209.5,0,183L0,73c0-22.1,9.9-42,25.4-55.4C38.2,6.6,54.8,0,73,0 l110,0c20.2,0,38.4,8.2,51.6,21.4S256,52.9,256,73v110c0,23.7-11.3,44.8-28.9,58.2C214.9,250.5,199.6,256,183,256z"/></g><g><path fill="#E9FDEC" d="M183,256H73c-13.8,0-26.8-3.8-37.8-10.5C14.1,232.7,0,209.5,0,183L0,73c0-22.1,9.9-42,25.4-55.4 C38.2,6.6,54.8,0,73,0l110,0c20.2,0,38.4,8.2,51.6,21.4S256,52.9,256,73v110c0,23.7-11.3,44.8-28.9,58.2 C214.9,250.5,199.6,256,183,256z"/></g></g><g><g><path fill="#00D503" d="M77.5,205.1c-0.2-25.5-1-51.1-0.3-76.5c0.4-15.8,8.4-29.2,22.1-36.8c25.5-14.1,51.9-26.6,79.6-40.6 c0,28.1,1.3,54.4-0.5,80.4c-1.1,16.4-11.9,28.8-27,36.4c-24.7,12.4-49.5,24.6-74.2,36.9C77.2,204.9,77.5,205.1,77.5,205.1z"/></g></g></g></svg></a><span class="wa__popup_tooltiptext-ninja-mb">SEEDGROW</span></span>':'<div class="wa__popup_powered_content"><a target="_blank" href="https://apps.shopify.com/whatsapp-chat-widget"><svg class="wa__popup_icon-ninja" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 256 256" style="enable-background:new 0 0 256 256;" xml:space="preserve"><g><g><g style="opacity:0;"><path d="M183,256H73c-13.8,0-26.8-3.8-37.8-10.5C14.1,232.7,0,209.5,0,183L0,73c0-22.1,9.9-42,25.4-55.4C38.2,6.6,54.8,0,73,0 l110,0c20.2,0,38.4,8.2,51.6,21.4S256,52.9,256,73v110c0,23.7-11.3,44.8-28.9,58.2C214.9,250.5,199.6,256,183,256z"/></g><g><path fill="#E9FDEC" d="M183,256H73c-13.8,0-26.8-3.8-37.8-10.5C14.1,232.7,0,209.5,0,183L0,73c0-22.1,9.9-42,25.4-55.4 C38.2,6.6,54.8,0,73,0l110,0c20.2,0,38.4,8.2,51.6,21.4S256,52.9,256,73v110c0,23.7-11.3,44.8-28.9,58.2 C214.9,250.5,199.6,256,183,256z"/></g></g><g><g><path fill="#00D503" d="M77.5,205.1c-0.2-25.5-1-51.1-0.3-76.5c0.4-15.8,8.4-29.2,22.1-36.8c25.5-14.1,51.9-26.6,79.6-40.6 c0,28.1,1.3,54.4-0.5,80.4c-1.1,16.4-11.9,28.8-27,36.4c-24.7,12.4-49.5,24.6-74.2,36.9C77.2,204.9,77.5,205.1,77.5,205.1z"/></g></g></g></svg></a><span class="wa__popup_tooltiptext"><svg class="wa__popup_icon-tooltip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFAC33" d="M32.938 15.651C32.792 15.26 32.418 15 32 15H19.925L26.89 1.458c.219-.426.106-.947-.271-1.243C26.437.071 26.218 0 26 0c-.233 0-.466.082-.653.243L18 6.588 3.347 19.243c-.316.273-.43.714-.284 1.105S3.582 21 4 21h12.075L9.11 34.542c-.219.426-.106.947.271 1.243.182.144.401.215.619.215.233 0 .466-.082.653-.243L18 29.412l14.653-12.655c.317-.273.43-.714.285-1.106z"/></svg> Powered by <span class="wa__popup_tooltiptext-ninja">SeedGrow</span></span></div>',t})()),"ON"===s.isShowScroll&&(u.style.maxHeight=parseInt(s.scrollHeight)+"px",u.style.overflow="auto");const l=document.createElement("div");l.className="wa__popup_chat_box",l.appendChild(a),l.style.left="left"==s.btnPosition?parseInt(s.btnLeftDistance)+"px":"unset",l.style.right="right"==s.btnPosition?parseInt(s.btnRightDistance)+"px":"unset",l.style.bottom=parseInt(s.btnBottomDistance)+72+"px",l.appendChild(u),t.appendChild(l)},M=function(t,e){const n=Object.assign({},e),s=n.info,i=v(s,n);let r="";r+="round"==n.styles.type?" wa__r_button":" wa__sq_button",r+="online"==i?" wa__stt_online":" wa__stt_offline",r+=n.avatar?" wa__btn_w_img":" wa__btn_w_icon",r+=n.name?"":" wa__button_text_only";let o=$(s,n);const a=document.createElement("div");a.setAttribute("class",n.avatar?"wa__cs_img":"wa__btn_icon"),a.appendChild((()=>{if(n.avatar){const t=document.createElement("div");return t.setAttribute("class","wa__cs_img_wrap"),t.setAttribute("style",`background: url(${n.avatar}) center center no-repeat; background-size: cover`),t}{const t=document.createElement("img");return t.setAttribute("alt","img"),t.setAttribute("src",n.defaultAvatar),t}})());const c=document.createElement("div");c.setAttribute("class","wa__btn_txt"),c.appendChild(n.name?(()=>{const t=document.createElement("div");return t.className="wa__cs_info",t.appendChild((()=>{const t=document.createElement("div");return t.setAttribute("class","wa__cs_name"),t.setAttribute("style","online"==i?`color: ${"#fff"==n.styles.textColor||"#ffffff"==n.styles.textColor?"#d5f0d9":n.styles.textColor}; opacity: ${"#fff"==n.styles.textColor||"#ffffff"==n.styles.textColor?1:.8}`:""),t.innerHTML=n.name,t})()),t.appendChild((()=>{const t=document.createElement("div");return t.setAttribute("class","wa__cs_status"),t.innerHTML="online"===i?n.i18n.online:n.i18n.offline,t})()),t})():document.createTextNode("")),c.appendChild((()=>{const t=document.createElement("div");return t.setAttribute("class","wa__btn_title"),t.setAttribute("style","online"==i?"color: "+n.styles.textColor:""),t.innerHTML=n.styles.label,t})()),c.appendChild((()=>{if("online"!=i){const t=document.createElement("div");return t.setAttribute("class","wa__btn_status"),t.innerHTML=i,t}return document.createTextNode("")})());const u=document.createElement("div");u.setAttribute("class","nta-wa-gdpr"),u.appendChild((()=>{const t=document.createElement("input");t.setAttribute("id","nta-wa-gdpr"),t.setAttribute("type","checkbox"),t.setAttribute("value","accept"),t.onchange=function(t){if(t.target.checked&&(m("nta-wa-gdpr","accept",30),""!=g("nta-wa-gdpr"))){const t=document.querySelectorAll(".nta-wa-gdpr");u.style.opacity=0,setTimeout((()=>{t.forEach((t=>t.style.display="none"))}),400);document.querySelectorAll(".wa__popup_content_item").forEach((t=>t.classList.remove("pointer-disable")))}};const e=document.createElement("span");e.appendChild(t),e.appendChild((()=>{const t=document.createElement("span");return t.innerHTML=n.options.styles.gdprContent.replaceAll(/\r\n\r\n/gm,"<br/>"),t})());const s=document.createElement("label");return s.setAttribute("for","nta-wa-gdpr"),s.appendChild(e),s})());const l=document.createElement("a");l.setAttribute("target","ON"==n.urlSettings.openInNewTab?"_blank":"_self"),l.setAttribute("href",o),l.setAttribute("rel","nofollow noopener noreferrer"),l.setAttribute("class","wa__button"+r),l.onclick=function(t){if(n.gdprStatus&&!g("nta-wa-gdpr"))return t.preventDefault(),u.style.background="red",void(u.style.color="#fff");_(this,{enabledFacebook:n.options.analytics.enabledFacebook,enabledGoogle:n.options.analytics.enabledGoogle,enabledGoogleGA4:n.options.analytics.enabledGoogleGA4})},"online"==i&&(l.style.backgroundColor=n.styles.backgroundColor),l.appendChild(a),l.appendChild(c),t.appendChild(l),n.gdprStatus&&t.appendChild(u),t._isWaButton=!0},S=function(t){return(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t)}})(),njtWhatsApp=s})();