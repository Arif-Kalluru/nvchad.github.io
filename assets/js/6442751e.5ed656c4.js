"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[420],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=l,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(7462),l=(t(7294),t(3905));const r={},i=void 0,o={unversionedId:"quickstart/learn-lua",id:"quickstart/learn-lua",title:"learn-lua",description:"Print",source:"@site/docs/quickstart/learn-lua.md",sourceDirName:"quickstart",slug:"/quickstart/learn-lua",permalink:"/quickstart/learn-lua",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"post-install",permalink:"/quickstart/post-install"},next:{title:"Walkthrough",permalink:"/config/Walkthrough"}},s={},u=[{value:"Print",id:"print",level:2},{value:"Comments",id:"comments",level:2},{value:"Variables",id:"variables",level:2},{value:"Conditional Statements",id:"conditional-statements",level:2},{value:"Functions",id:"functions",level:2},{value:"Scope",id:"scope",level:2},{value:"Loops",id:"loops",level:2},{value:"While",id:"while",level:3},{value:"For",id:"for",level:3},{value:"Tables",id:"tables",level:2},{value:"Loop through tables",id:"loop-through-tables",level:3},{value:"Ipairs",id:"ipairs",level:4},{value:"Pairs",id:"pairs",level:4},{value:"Modules",id:"modules",level:2}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"print"},"Print"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'print("Hi")\n')),(0,l.kt)("h2",{id:"comments"},"Comments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- comment\nprint("Hi") -- comment\n\n--[[\n multiline \n comment\n]]\n')),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Different types\nlocal x = 10 -- number\nlocal name = "sid" -- string\nlocal isAlive = true -- boolean\nlocal a = nil --no value or invalid value\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Numbers")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- Examples\nlocal a = 1\nlocal b = 2\n\nprint(a + b) -- 3\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- increment\nlocal level = 1\nlevel = level + 1\nprint(level) -- 2\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Strings")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Concatenate strings\nlocal phrase = "I am"\nlocal name = "Sid"\nprint(phrase .. " " .. name) -- I am Sid\n\n--or\nprint("I am " .. "Sid")\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Boolean")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local isAlive = true\nprint(isAlive) -- true\n\nisAlive = false\nprint(isAlive) -- false\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Comparison Operators")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"== equality"),(0,l.kt)("li",{parentName:"ul"},"< less than"),(0,l.kt)("li",{parentName:"ul"},">"," greater than"),(0,l.kt)("li",{parentName:"ul"},"<= less than or equal to"),(0,l.kt)("li",{parentName:"ul"},">","= greater than or equal to"),(0,l.kt)("li",{parentName:"ul"},"~= inequality")),(0,l.kt)("h2",{id:"conditional-statements"},"Conditional Statements"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Number comparisons\nlocal age = 10\n\nif age > 18 then\n  print("over 18") -- this will not be executed\nend\n\n-- elseif and else\nage = 20\n\nif age > 18 then\n  print("over 18")\nelseif age == 18 then\n  print("18 huh")\nelse\n  print("kiddo")\nend\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Boolean comparison\nlocal isAlive = true\n\nif isAlive then\n    print("Be grateful!")\nend\n\n-- String comparisons\nlocal name = "sid"\n\nif name ~= "sid" then\n  print("not sid")\nend\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Combining Statements")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local age = 22\n\nif age == 10 and x > 0 then -- both should be true\n  print("kiddo!")\nelseif x == 18 or x > 18 then -- 1 or more are true\n  print("over 18")\nend\n\n-- result: over 18\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Invert Value")),(0,l.kt)("p",null,"you can also invert a value with the ",(0,l.kt)("strong",{parentName:"p"},"not")," keyword"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local x = 18\n\nif not x == 18 then\n  print("kiddo!") -- prints nothing as x is 18\nend\n')),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"local function num(a)\n  print(a)\nend\n\nor\n\nlocal num = function(a)\n  print(a)\nend\n\nnum(5) -- prints 5 \n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"-- multiple parameters\n\nfunction sum(a, b)\n  local result = a + b\n  print(result)\nend\n")),(0,l.kt)("h2",{id:"scope"},"Scope"),(0,l.kt)("p",null,"Variables have different scopes. Once the end of the scope is reached the values in that scope are no longer accessable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"function foo()\n  local n = 10\nend\n\nprint(n) -- nil , n isn't accessible outside foo()\n")),(0,l.kt)("h2",{id:"loops"},"Loops"),(0,l.kt)("p",null,"Different ways to make a loop"),(0,l.kt)("h3",{id:"while"},"While"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local i = 0\n\nwhile i <= 3 do\n   print("hi")\n   i = i + 1\nend\n')),(0,l.kt)("h3",{id:"for"},"For"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'for i = 0, 3 do\n   print("hi")\n   i = i + 1\nend\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-- prints\nhi\nhi\nhi\n")),(0,l.kt)("h2",{id:"tables"},"Tables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Basic table\nlocal colors = { "red", "green", "blue" }\n\nprint(colors[1]) -- red\nprint(colors[2]) -- green\nprint(colors[3]) -- blue\n\n-- Use a loop to iterate though the table\nfor i = 1, #colors do\n  print(colors[i])\nend\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Two Dimensional Table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- Tables within tables\nlocal data = {\n    { "billy", 12 },\n    { "john", 20 },\n}\n\nfor i = 1, #data do\n  print(data[i][1] .. " is " .. data[i][2] .. " years old")\nend\n')),(0,l.kt)("h3",{id:"loop-through-tables"},"Loop through tables"),(0,l.kt)("h4",{id:"ipairs"},"Ipairs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local names = { "sid", "tim", "lee" }\n\nfor index, value in ipairs(names) do\n   print(names[index])\n   -- or\n   print(value)\nend\n\n-- If you dont use index or value here then you can replace it with _ \nfor _, value in ipairs(names) do\n   print(value)\nend\n')),(0,l.kt)("h4",{id:"pairs"},"Pairs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local details = {\n   name = "sid",\n   age = 20,\n   distro = "void linux",\n}\n\nfor key, value in pairs(details) do\n   print(key .. value)\nend\n')),(0,l.kt)("h2",{id:"modules"},"Modules"),(0,l.kt)("p",null,"Include code from other files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'require("otherfile")\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Credits - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/pohka/Lua-Beginners-Guide"},"Lua-Beginners-Guide")),(0,l.kt)("li",{parentName:"ul"},"This tutorial is a modifed version of the above guide, shortened to teach lua stuff needed only to configure nvim in general")))}c.isMDXComponent=!0}}]);