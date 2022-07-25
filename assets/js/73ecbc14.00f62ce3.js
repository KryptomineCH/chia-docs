"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[1157],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return u}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return t?n.createElement(h,l(l({ref:a},d),{},{components:t})):n.createElement(h,l({ref:a},d))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2360:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(7294),i=t(6010),o="tabItem_OmH5";function l(e){var a=e.children,t=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,l),hidden:t},a)}},3029:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(7462),i=t(7294),o=t(2389),l=t(7392),r=t(7094),s=t(2466),p=t(6010),d="tabList_uSqn",c="tabItem_LplD";function m(e){var a,t,o,m=e.lazy,u=e.block,h=e.defaultValue,k=e.values,N=e.groupId,v=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:g.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),b=(0,l.l)(f,(function(e,a){return e.value===a.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===h?h:null!=(a=null!=h?h:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(o=g[0])?void 0:o.props.value;if(null!==w&&!f.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,r.U)(),T=y.tabGroupChoices,C=y.setTabGroupChoices,x=(0,i.useState)(w),I=x[0],E=x[1],A=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var R=T[N];null!=R&&R!==I&&f.some((function(e){return e.value===R}))&&E(R)}var S=function(e){var a=e.currentTarget,t=A.indexOf(a),n=f[t].value;n!==I&&(O(a),E(n),null!=N&&C(N,n))},H=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=A.indexOf(e.currentTarget)+1;t=A[n]||A[0];break;case"ArrowLeft":var i=A.indexOf(e.currentTarget)-1;t=A[i]||A[A.length-1]}null==(a=t)||a.focus()};return i.createElement("div",{className:(0,p.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":u},v)},f.map((function(e){var a=e.value,t=e.label,o=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:I===a?0:-1,"aria-selected":I===a,key:a,ref:function(e){return A.push(e)},onKeyDown:H,onFocus:S,onClick:S},o,{className:(0,p.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":I===a})}),null!=t?t:a)}))),m?(0,i.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map((function(e,a){return(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==I})}))))}function u(e){var a=(0,o.Z)();return i.createElement(m,(0,n.Z)({key:String(a)},e))}},3162:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),l=t(3029),r=t(2360),s=["components"],p={id:"cat2-snapshot",title:"CAT1 Snapshot Generation",sidebar_label:"2. Snapshot Generation",sidebar_position:2},d=void 0,c={unversionedId:"cat2/cat2-snapshot",id:"cat2/cat2-snapshot",title:"CAT1 Snapshot Generation",description:"CAT1 will reach its end of life at block 2,311,760, which will occur on July 26, 2022 at around 17:00 UTC.",source:"@site/docs/cat2/cat2-snapshot.mdx",sourceDirName:"cat2",slug:"/cat2/cat2-snapshot",permalink:"/docs/cat2/cat2-snapshot",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cat2/cat2-snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"cat2-snapshot",title:"CAT1 Snapshot Generation",sidebar_label:"2. Snapshot Generation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Intro & FAQ",permalink:"/docs/cat2/cat2-intro"},next:{title:"3. Token Reissuance",permalink:"/docs/cat2/cat2-issuance"}},m={},u=[{value:"Generate a CAT1 Snapshot",id:"generate",level:2},{value:"Export Your Data from the Snapshot",id:"export",level:2},{value:"Data Cleanup",id:"cleanup",level:2},{value:"Export Data for all CATs",id:"export-all",level:2}],h={toc:u};function k(e){var a=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/puzzles/cats"},"CAT1")," will reach its end of life at block 2,311,760, which will occur on July 26, 2022 at around 17:00 UTC."),(0,o.kt)("p",{parentName:"div"},"For more information on this end-of-life process, see the ",(0,o.kt)("a",{parentName:"p",href:"cat2-intro"},"CAT2 Intro & FAQ"),"."))),(0,o.kt)("p",null,"This document will show CAT1 issuers how to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate a snapshot of their CAT1 status. This will show the puzzle hash (address) and value of each individual token at the end-of-life block height"),(0,o.kt)("li",{parentName:"ol"},"Export their required data from the snapshot")),(0,o.kt)("p",null,"After completing this, CAT issuers will be able to proceed to the ",(0,o.kt)("a",{parentName:"p",href:"cat2-issuance"},"Token Reissuance guide"),"."),(0,o.kt)("h2",{id:"generate"},"Generate a CAT1 Snapshot"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We recommend that you follow this section to generate your own snapshot of your CAT1 tokens. Please note that this process could take over 40 hours to complete. For your convenience and reference, we will also publish our own snapshot, which should be identical to the snapshot that you produce."))),(0,o.kt)("p",null,"This section will show you how to install the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/CAT-addresses"},"CAT-addresses tool")," and use it to get a snapshot of the puzzle hash (address) and value of each coin of a particular CAT1. It can even obtain this info for all CAT1s on Chia's blockchain.'"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In order to use this tool, you are required to run a fully synced Chia node. This node must be running version 1.5 or greater. Please ensure that you have satisfied both of these requirements before continuing."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a terminal window and ensure you have direct access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia")," command by doing one of the following:"),(0,o.kt)(l.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you previously installed Chia from a ",(0,o.kt)("strong",{parentName:"p"},"binary build"),", then set up an alias to the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia")," command:"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Ensure that you replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<username>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<version>")," with the actual folders"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'Set-Alias -Name chia "C:\\Users\\<username>\\AppData\\Local\\chia-blockchain\\app-<version>\\resources\\app.asar.unpacked\\daemon\\chia.exe"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you previously installed Chia ",(0,o.kt)("strong",{parentName:"p"},"from source"),", then navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia-blockchain")," directory and activate your virtual environment:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},".\\venv\\Scripts\\Activate.ps1\n"))))),(0,o.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you previously installed Chia from a ",(0,o.kt)("strong",{parentName:"p"},"binary build"),", then ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia")," binary's directory is included in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you previously installed Chia ",(0,o.kt)("strong",{parentName:"p"},"from source"),", then navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia-blockchain")," directory and activate your virtual environment:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},". ./activate\n"))))),(0,o.kt)(r.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you previously installed Chia from a ",(0,o.kt)("strong",{parentName:"p"},"binary build"),", then set up an alias to the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia")," command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'alias chia="/Applications/Chia.app/Contents/Resources/app.asar.unpacked/daemon/chia"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you previously installed Chia ",(0,o.kt)("strong",{parentName:"p"},"from source"),", then navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia-blockchain")," directory and activate your virtual environment:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},". ./activate\n"))))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia version\n")),(0,o.kt)("p",{parentName:"li"},"If step 1 was successful, you should see a version number in the output, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"1.5.0"),". This is a requirement for the snapshot tool to work.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the same terminal window, create a new directory in which to install the ",(0,o.kt)("inlineCode",{parentName:"p"},"CAT-addresses")," repository (it can be in the parent directory) and run the following:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/CAT-addresses.git -b main\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The following environment variables need to be set in order to use this tool:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"FULL_NODE_HOSTNAME")," - The hostname of the full node to call the RPCs against. This can be ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"DB_SOURCE_DIR")," - The location of the full node database on the host machine."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"START_HEIGHT")," - The height of the blockchain to start creating the snapshot from (default: ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"). If you are attempting to obtain all records for your CAT, the recommended start height is ",(0,o.kt)("inlineCode",{parentName:"li"},"1146800"),", which is just before CAT1 was introduced."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"TARGET_HEIGHT")," - The height of the blockchain to end the snapshot (no default - must be set). The recommended height is ",(0,o.kt)("inlineCode",{parentName:"li"},"2311760"),", which is the last block at which CAT1 is valid.")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Running this process with the recommended block heights could take over 40 hours to complete. You may wish to test it first by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"TARGET_HEIGHT")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"1146900"),". This will pull data from only 100 blocks, which should only take a few seconds."))),(0,o.kt)("p",{parentName:"li"},"In order to set these variables, you are recommended to put them into a file called ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," at the root of the ",(0,o.kt)("inlineCode",{parentName:"p"},"CAT-addresses")," project. The tool will automatically read the variables in this file. For example:"),(0,o.kt)(l.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=C:\\Users\\Username\\.chia\\mainnet\\db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"))),(0,o.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=/home/Username/.chia/mainnet/db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"))),(0,o.kt)(r.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},"FULL_NODE_HOSTNAME=localhost\nDB_SOURCE_DIR=/Users/Username/.chia/mainnet/db\nSTART_HEIGHT=1146800\nTARGET_HEIGHT=2311760\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install dependencies:"),(0,o.kt)(l.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"python setup.py install\n"))),(0,o.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup.py install\n"))),(0,o.kt)(r.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup.py install\n")))),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The result may contain several warnings such as ",(0,o.kt)("inlineCode",{parentName:"p"},"WARNING: The wheel package is not available.")," These can be safely ignored."))),(0,o.kt)("p",{parentName:"li"},"This command may take a few minutes to complete. At the end of the output, you should see something like:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Finished processing dependencies for chia-transaction-exporter==0.1.dev55\u201d\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotenv")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"backoff")," modules:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install python-dotenv\npip install backoff\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set up the database:"),(0,o.kt)(l.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"python setup_database.py\n"))),(0,o.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup_database.py\n"))),(0,o.kt)(r.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 setup_database.py\n")))),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you receive an error message such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleNotFoundError: No module named 'chia'"),", then make sure you can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"chia")," command from this directory and try again."))),(0,o.kt)("p",{parentName:"li"},"If this command succeeds, then it will output:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"INFO:setup_database:Setting up database\nINFO:setup_database:Database setup complete\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the snapshot generator:"),(0,o.kt)(l.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"python start.py\n"))),(0,o.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 start.py\n"))),(0,o.kt)(r.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 start.py\n")))),(0,o.kt)("p",{parentName:"li"},"This command will show its progress according to the block height. If you used the recommended range for ",(0,o.kt)("inlineCode",{parentName:"p"},"START_HEIGHT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TARGET_HEIGHT")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, then this command could take over 40 hours to complete. The reason it takes so long is it needs to process each block, one at a time. If multiple blocks were done in parallel, then there would be a chance that the results would not be accurate. By processing one block at a time, the tool will return the correct results for the range provided."),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can only generate a snapshot for each block once. If you attempt to run this command over a range against which it has already been run, you will receive an error containing this message:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"sqlite3.IntegrityError: UNIQUE constraint failed: coin_create.coin_name\n")),(0,o.kt)("p",{parentName:"div"},"In this case, you either need to start from a higher height, or (recommended) start over. Follow the ",(0,o.kt)("a",{parentName:"p",href:"#cleanup"},"Data Cleanup section")," and try again."))))),(0,o.kt)("h2",{id:"export"},"Export Your Data from the Snapshot"),(0,o.kt)("p",null,"Once you have populated the database with a snapshot, you can run a data export."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://www.taildatabase.com/"},"taildatabase.com"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Search for your CAT. We'll use ",(0,o.kt)("a",{parentName:"p",href:"https://www.taildatabase.com/tail/1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a"},"CAT King Cole")," for this example. Note the TAIL hash, which is listed above the title of the token. In this example, it's:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate a CSV file containing all inner puzzle hashes and amounts for your CAT:"),(0,o.kt)(l.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --tail-hash <TAIL-HASH> --coins\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example command"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir C:\\Users\\Username\\Chia\\CAT-addresses\\results\\CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n")))),(0,o.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --tail-hash <TAIL-HASH> --coins\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example command"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir /home/Username/CAT-addresses/results/CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n")))),(0,o.kt)(r.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --tail-hash <TAIL-HASH> --coins\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example command"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir /Users/Username/CAT-addresses/results/CKC_ --tail-hash 1121996b75cce3c746369aced2c8887b02b84e95592c3dc006d82a145adf349a\n"))))),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<OUTPUT-DIR>")," - a directory of your choice in which to save the CSV file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<PREFIX>")," - a string to be prepended to the output file name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<TAIL-HASH>")," - the TAIL hash you obtained from taildatabase.com"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--coins")," - an ",(0,o.kt)("strong",{parentName:"li"},"optional")," flag that will add information about individual coins to the output (which might be helpful for auditing purposes)")))),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This command will not create any directories, so make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"<OUTPUT-DIR>")," already exists before running it. Otherwise, you will receive a ",(0,o.kt)("inlineCode",{parentName:"p"},"FileNotFoundError"),"."))))),(0,o.kt)("h2",{id:"cleanup"},"Data Cleanup"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional:")," If the application exits partway through a run, it will only have imported some blocks at a particular height. You can delete the records from the database at and above a provided height by running the following command:"),(0,o.kt)(l.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"python clean.py --height <BLOCK-HEIGHT>\n"))),(0,o.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 clean.py --height <BLOCK-HEIGHT>\n"))),(0,o.kt)(r.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 clean.py --height <BLOCK-HEIGHT>\n")))),(0,o.kt)("h2",{id:"export-all"},"Export Data for all CATs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Optional:")," If you wish to obtain the balance of all CATs on the Chia blockchain, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"export-py")," with various different options:"),(0,o.kt)(l.Z,{defaultValue:"windows",groupId:"os",values:[{label:"Windows",value:"windows"},{label:"Linux",value:"linux"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--tail-hash")," flag can be dropped, resulting in an output of a single CSV file containing every puzzle hash amount for every CAT on the Chia blockchain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--coins")," flag can be added, which will add information about individual coins:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --coins\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--explode")," flag can be added, which will generate multiple CSV files, each of which containing a single CAT's puzzle hashes and amounts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"python export.py --output-dir <OUTPUT-DIR>\\<PREFIX> --explode\n")),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--explode")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--coins")," flags together, which will generate individual CSV files that also contain coin info.")),(0,o.kt)(r.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--tail-hash")," flag can be dropped, resulting in an output of a single CSV file containing every puzzle hash amount for every CAT on the Chia blockchain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--coins")," flag can be added, which will add information about individual coins:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --coins\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--explode")," flag can be added, which will generate multiple CSV files, each of which containing a single CAT's puzzle hashes and amounts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --explode\n")),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--explode")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--coins")," flags together, which will generate individual CSV files that also contain coin info.")),(0,o.kt)(r.Z,{value:"macos",mdxType:"TabItem"},(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--tail-hash")," flag can be dropped, resulting in an output of a single CSV file containing every puzzle hash amount for every CAT on the Chia blockchain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX>\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--coins")," flag can be added, which will add information about individual coins:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --coins\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--explode")," flag can be added, which will generate multiple CSV files, each of which containing a single CAT's puzzle hashes and amounts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 export.py --output-dir <OUTPUT-DIR>/<PREFIX> --explode\n")),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--explode")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--coins")," flags together, which will generate individual CSV files that also contain coin info."))))}k.isMDXComponent=!0}}]);