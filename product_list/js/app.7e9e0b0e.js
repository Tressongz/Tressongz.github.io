(function(){"use strict";var t={2137:function(t,u,r){var o=r(9242),e=r(3396),c=r(7139);const d={class:"wrapper"},n=["onClick"],i=["onClick"];function s(t,u,r,s,a,l){const p=(0,e.Q2)("focus");return(0,e.wg)(),(0,e.iD)("div",d,[(0,e.wy)((0,e._)("input",{onKeydown:u[0]||(u[0]=(0,o.D2)((t=>l.button(this.productValue)),["enter"])),"onUpdate:modelValue":u[1]||(u[1]=t=>a.productValue=t),class:"product-value",placeholder:"Введите название продукта"},null,544),[[p],[o.nr,a.productValue]]),(0,e._)("button",{onClick:u[2]||(u[2]=t=>l.button(this.productValue)),class:"addProduct"},"Добавить продукт"),(0,e.Wm)(o.W3,{name:"product_list"},{default:(0,e.w5)((()=>[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.products,(u=>((0,e.wg)(),(0,e.iD)("li",{class:"product-element",key:u.id},[(0,e._)("div",{class:(0,c.C_)([{checked:u.value},"element"])},(0,c.zw)(u.product),3),u.value?((0,e.wg)(),(0,e.iD)("div",{key:1,onClick:r=>t.checkProduct(u),class:"checkProduct"},"Куплено",8,i)):((0,e.wg)(),(0,e.iD)("div",{key:0,onClick:r=>t.checkProduct(u),class:"checkProduct"},"Не куплено",8,n))])))),128))])),_:1})])}var a=r(65),l={data(){return{productValue:""}},methods:{...(0,a.OI)({setProducts:"setProducts"}),...(0,a.nv)({checkProduct:"checkProduct",addProduct:"addProduct"}),button(t){this.addProduct(t),this.productValue=""}},computed:{...(0,a.rn)({products:t=>t.products}),...(0,a.Se)({sortedProducts:"sortedProducts"})}},p=r(89);const f=(0,p.Z)(l,[["render",s]]);var v=f,h=r(2415),P=(0,a.MT)({plugins:[(0,h.Z)()],state:{products:[{id:1,product:"Молоко",value:!1},{id:2,product:"Хлеб",value:!1},{id:3,product:"Кефир",value:!1},{id:4,product:"Конфеты",value:!1},{id:5,product:"Сок",value:!1},{id:6,product:"Печенье",value:!1},{id:7,product:"Какао",value:!1},{id:8,product:"Кофе",value:!1},{id:9,product:"Газировка",value:!1},{id:10,product:"Колбаса",value:!1}]},getters:{sortedProducts(t){return t.products}},mutations:{setProducts(t,u){t.products=u}},actions:{checkProduct({state:t,commit:u},r){if(!1===r.value){let o=t.products.find((t=>t.id===r.id));o.value=!o.value,u("setProducts",t.products.filter((t=>t.id!==r.id))),u("setProducts",[...t.products,o])}else{let o=t.products.find((t=>t.id===r.id));o.value=!o.value,u("setProducts",t.products.filter((t=>t.id!==r.id))),u("setProducts",[o,...t.products])}},addProduct({state:t,commit:u},r){if(""!==r){let o={};o.id=t.products.length+1,o.product=r,o.value=!1,u("setProducts",[o,...t.products])}}},modules:{}}),k={mounted(t){t.focus()},name:"focus"},m=[k];const w=(0,o.ri)(v);m.forEach((t=>{w.directive(t.name,t)})),w.use(P).mount("#app")}},u={};function r(o){var e=u[o];if(void 0!==e)return e.exports;var c=u[o]={exports:{}};return t[o].call(c.exports,c,c.exports,r),c.exports}r.m=t,function(){var t=[];r.O=function(u,o,e,c){if(!o){var d=1/0;for(a=0;a<t.length;a++){o=t[a][0],e=t[a][1],c=t[a][2];for(var n=!0,i=0;i<o.length;i++)(!1&c||d>=c)&&Object.keys(r.O).every((function(t){return r.O[t](o[i])}))?o.splice(i--,1):(n=!1,c<d&&(d=c));if(n){t.splice(a--,1);var s=e();void 0!==s&&(u=s)}}return u}c=c||0;for(var a=t.length;a>0&&t[a-1][2]>c;a--)t[a]=t[a-1];t[a]=[o,e,c]}}(),function(){r.n=function(t){var u=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(u,{a:u}),u}}(),function(){r.d=function(t,u){for(var o in u)r.o(u,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:u[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,u){return Object.prototype.hasOwnProperty.call(t,u)}}(),function(){var t={143:0};r.O.j=function(u){return 0===t[u]};var u=function(u,o){var e,c,d=o[0],n=o[1],i=o[2],s=0;if(d.some((function(u){return 0!==t[u]}))){for(e in n)r.o(n,e)&&(r.m[e]=n[e]);if(i)var a=i(r)}for(u&&u(o);s<d.length;s++)c=d[s],r.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return r.O(a)},o=self["webpackChunkproducts_list"]=self["webpackChunkproducts_list"]||[];o.forEach(u.bind(null,0)),o.push=u.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(2137)}));o=r.O(o)})();
//# sourceMappingURL=app.7e9e0b0e.js.map