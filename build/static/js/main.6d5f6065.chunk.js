(this.webpackJsonpbenchmark=this.webpackJsonpbenchmark||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(7),i=n.n(o),s=(n(14),n(9)),l=n(2),c=n(3),u=n(5),h=n(4),d=n(8),p=(n(15),n(16),n(0)),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsx)("h2",{style:{color:"green"},children:"Thanks for your submission!"})}}]),n}(r.Component),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsx)("h2",{style:{color:"red"},children:"An error occurred. Please try again. If this error persists, please contact Ash."})}}]),n}(r.Component),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).data=[["hipster","trendy"],["emo","sad"],["yeet","throw"],["lol","laugh"],["yolo","impulsive"],["simp","desperate"],["noob","new"],["geek","nerd"],["steezy","stylish"],["bye felicia","dismiss"],["netflix and chill","hookup"],["smh","disappointment"],["dork","misfit"],["tool","egotistical"],["fml","discontent"],["dank","excellent"],["boo","lover"],["douche","jerk"],["hmu","invite"],["meh","uninteresting"],["troll","provoke"],["karen","entitled"],["fleek","stylish"],["oof","discomfort"],["xd","laugh"],["bromance","friendship"],["lmao","laugh"],["friends with benefits","partner"],["trill","respected"],["antistalking","avoid"],["og","original"],["stoner","marijuana"],["derp","foolish"],["vsco girl","artsy"],["cool story bro","indifference"],["clout","influence"],["trolling","provoking"],["crunk","drunk"],["lit","awesome"],["food baby","full"],["ricer","car"],["fam","friend"],["dog","friend"],["based","authentic"],["neckbeard","misogynist"],["weenis","elbow"],["goat","greatest"],["man cave","room"],["soccer mom","entitled"],["homie","friend"],["shawty","woman"],["bro","man"],["dude","person"],["ghetto","impoverished"],["whipped","controlled"],["poser","fake"],["word","yes"],["nsfw","inappropriate"],["sike","not"],["dab","dance"],["tbh","honestly"],["worldstar","crazy"],["rest in power","condolence"],["g","gangster"],["savage","brutal"],["thx","thanks"],["chick flick","movie"],["struggle is real","hard"],["swerve","avoid"],["fomo","lonely"],["ratchet","undignified"],["selfie","photo"],["sup","hello"],["trap","deal"],["ftw","win"],["bop","dance"],["legit","authentic"],["finna","going"],["hater","critic"],["stan","supporter"],["catfish","mislead"],["thick","built"],["op","poster"],["no cap","TRUE"],["swagger","confidence"],["rofl","laugh"],["rekt","wrecked"],["zing","euphoria"],["pop a squat","sit"],["poggers","epic"],["love tap","nudge"],["stonks","stocks"],["gg","defeat"],["slay","succeed"],["yuge","huge"],["aight","alright"],["thirsty","desperate"],["sauce","source"],["soz","sorry"],["memes","jokes"]],e.vals=[{value:0},{value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9},{value:10}],e.onSubmit=function(t,n){var r=e.props.onComplete;try{var a=new XMLHttpRequest;a.open("POST","http://ashingtondc.com:5000/data",!0),a.onload=function(){console.log(this.status),200===this.status?r(!1):r(!0)},a.setRequestHeader("Content-Type","application/json"),a.send(JSON.stringify(t.data))}catch(o){r(!0)}},e}return Object(c.a)(n,[{key:"createElements",value:function(){var e,t=[],n=Object(s.a)(this.data);try{for(n.s();!(e=n.n()).done;){var r=e.value,a={type:"rating",name:r[0]+"|"+r[1],title:"".concat(r[0]," --- ").concat(r[1]),minRateDescription:"Not similar",maxRateDescription:"The same",isRequired:!0,rateValues:this.vals,defaultValue:5};t.push(a)}}catch(o){n.e(o)}finally{n.f()}return t}},{key:"render",value:function(){var e=new d.Model({elements:this.createElements()});return this.props.complete?this.props.error?Object(p.jsx)(g,{}):Object(p.jsx)(m,{}):Object(p.jsx)(d.Survey,{model:e,onComplete:this.onSubmit,showCompletedPage:!1})}}]),n}(r.Component),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).onComplete=function(e){r.setState({completed:!0}),e&&r.setState({error:!0})},r.state={completed:!1,error:!1},r}return Object(c.a)(n,[{key:"render",value:function(){return Object(p.jsx)(f,{onComplete:this.onComplete,complete:this.state.completed,error:this.state.error})}}]),n}(r.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)}))};i.a.render(Object(p.jsxs)(a.a.StrictMode,{children:[Object(p.jsx)("h1",{children:"Slang Term Similarity Graph Benchmark Survey"}),Object(p.jsx)("div",{style:{margin:"5px"},children:Object(p.jsxs)("p",{children:["Welcome! Thanks for offering to fill out this survey.",Object(p.jsx)("br",{}),"This data is needed for my senior project to create a benchmark modeling what a real human would think. My project involves building a similarity graph consisting of slang terms and regular English terms. This graph will yield a value between 0 and 1 indicating how similar a slang term and a regular English term are.",Object(p.jsx)("br",{}),"Thanks for helping me graduate!"]})}),Object(p.jsx)(b,{})]}),document.getElementById("root")),v()}},[[18,1,2]]]);
//# sourceMappingURL=main.6d5f6065.chunk.js.map