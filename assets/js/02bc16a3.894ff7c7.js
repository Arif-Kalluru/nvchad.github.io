"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,g=f["".concat(s,".").concat(m)]||f[m]||u[m]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},i=void 0,o={unversionedId:"config/Lsp stuff",id:"config/Lsp stuff",title:"Lsp stuff",description:"Setup lsp server",source:"@site/docs/config/Lsp stuff.md",sourceDirName:"config",slug:"/config/Lsp stuff",permalink:"/config/Lsp stuff",tags:[],version:"current",frontMatter:{},sidebar:"config",previous:{title:"Mappings",permalink:"/config/Mappings"},next:{title:"Format & lint",permalink:"/config/Format & lint"}},s={},p=[{value:"Setup lsp server",id:"setup-lsp-server",level:2},{value:"Overriding <code>on_attach</code>",id:"overriding-on_attach",level:3},{value:"lsp-installer",id:"lsp-installer",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setup-lsp-server"},"Setup lsp server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Skim through ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neovim/nvim-lspconfig"},"lspconfig repo")," to get a general overview of how the config looks/works.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Then check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md"},"server_configurations.md")," to make sure your language's lsp server is present there.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Create a file in your custom folder. (I would suggest creating plugins dir in custom folder , so /custom/plugins/lspconfig.lua is the config file for this example).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Enter the file path in the chadrc's lspconfig section :"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'M.plugins = {\n   options = {\n      lspconfig = {\n         setup_lspconf = "custom.plugins.lspconfig",\n      },\n   },\n}\n\n-- so setup_lspconf = any file but that should be in custom dir!\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The following file is an example lspconfig file ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local M = {}\n\nM.setup_lsp = function(attach, capabilities)\n   local lspconfig = require "lspconfig"\n\n   -- lspservers with default config\n   local servers = { "html", "cssls", "clangd" }\n\n   for _, lsp in ipairs(servers) do\n      lspconfig[lsp].setup {\n         on_attach = attach,\n         capabilities = capabilities,\n      }\n   end\nend\n\nreturn M\n')),(0,a.kt)("h3",{id:"overriding-on_attach"},"Overriding ",(0,a.kt)("inlineCode",{parentName:"h3"},"on_attach")),(0,a.kt)("p",null,"You can override the default ",(0,a.kt)("inlineCode",{parentName:"p"},"on_attach")," for example to change the server capabilities:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'M.setup_lsp = function(attach, capabilities)\n   -- [...]\n\n   for _, lsp in ipairs(servers) do\n      lspconfig[lsp].setup {\n         on_attach = function(client, bufnr)\n            attach(client, bufnr)\n            -- change gopls server capabilities\n            if lsp == "gopls" then\n               client.resolved_capabilities.document_formatting = true\n               client.resolved_capabilities.document_range_formatting = true\n            end\n         end,\n         capabilities = capabilities,\n      }\n   end\nend\n')),(0,a.kt)("p",null,"Make sure you pass ",(0,a.kt)("inlineCode",{parentName:"p"},"bufnr")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"attach")," function."),(0,a.kt)("h2",{id:"lsp-installer"},"lsp-installer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":LspInstall clangd \n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We've enabled automatic installation in lsp-installer config, meaning that you dont have to run LspInstall anymore. Any lsp server you configure in your custom lspconfig file, lsp-installer will detect it and install the lsp server automatically!")))}u.isMDXComponent=!0}}]);