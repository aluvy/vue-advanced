(function(){"use strict";var t={4043:function(t,r,e){var a=e(7195),n=function(){var t=this,r=t._self._c;return r("div",[r("h1",[t._v("Chart.js")]),r("BarChart",{attrs:{propsData:t.chartDataSet}}),r("LineChart")],1)},o=[],i=function(){var t=this,r=t._self._c;return r("div",[r("canvas",{ref:"BarChart"})])},s=[],l={props:{propsData:Array},methods:{refreshChart(){this.$emit("refreshChart")},setBarChart(){const t=this.$refs.BarChart;new this.$_Chart(t,{type:"bar",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:this.propsData},options:{scales:{y:{beginAtZero:!0}},onClick:t=>{t.chart.data.datasets[0].data=[3,7,19,14,6,11],t.chart.update()}}})}},mounted(){console.log("mounted"),this.setBarChart()}},u=l,h=e(1001),c=(0,h.Z)(u,i,s,!1,null,null,null),C=c.exports,p=function(){var t=this,r=t._self._c;return r("div",[r("canvas",{ref:"LineChart"})])},f=[],d={mounted(){const t=this.$refs.LineChart;new this.$_Chart(t,{type:"line",data:{labels:this.$_ChartUtils.months({count:7}),datasets:[{label:"Dataset 1",data:[30,22,56,77,21,99,81],borderColor:this.$_ChartUtils.COLOR.red,backgroundColor:this.$_ChartUtils.BGCOLOR.red},{label:"Dataset 2",data:[1,30,20,77,2,67,88],borderColor:this.$_ChartUtils.COLOR.blue,backgroundColor:this.$_ChartUtils.BGCOLOR.blue}]},options:{responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Chart.js Line Chart"}}}})}},b=d,O=(0,h.Z)(b,p,f,!1,null,null,null),g=O.exports,v={components:{BarChart:C,LineChart:g},data(){return{chartDataSet:[{label:"# of Votes",data:[12,19,3,5,2,3],backgroundColor:[this.$_ChartUtils.BGCOLOR.red,this.$_ChartUtils.BGCOLOR.blue,this.$_ChartUtils.BGCOLOR.yellow,this.$_ChartUtils.BGCOLOR.green,this.$_ChartUtils.BGCOLOR.purple,this.$_ChartUtils.BGCOLOR.orange],borderColor:[this.$_ChartUtils.COLOR.red,this.$_ChartUtils.COLOR.blue,this.$_ChartUtils.COLOR.yellow,this.$_ChartUtils.COLOR.green,this.$_ChartUtils.COLOR.purple,this.$_ChartUtils.COLOR.orange],borderWidth:1}]}}},_=v,L=(0,h.Z)(_,n,o,!1,null,null,null),$=L.exports,y=(e(560),{MONTHS:["January","February","March","April","May","June","July","August","September","October","November","December"],COLOR:{red:"rgba(255, 99, 132, 1)",blue:"rgba(54, 162, 235, 1)",yellow:"rgba(255, 206, 86, 1)",green:"rgba(75, 192, 192, 1)",purple:"rgba(153, 102, 255, 1)",orange:"rgba(255, 159, 64, 1)"},BGCOLOR:{red:"rgba(255, 99, 132, 0.2)",blue:"rgba(54, 162, 235, 0.2)",yellow:"rgba(255, 206, 86, 0.2)",green:"rgba(75, 192, 192, 0.2)",purple:"rgba(153, 102, 255, 0.2)",orange:"rgba(255, 159, 64, 0.2)"},months(t){var r,e,a=t||{},n=a.count||12,o=a.section,i=[];for(r=0;r<n;++r)e=this.MONTHS[Math.ceil(r)%12],i.push(e.substring(0,o));return i}}),R=e(9430);R.kL.register(...R.zX);var U={install(t){console.log("chart plugin loaded"),t.prototype.$_Chart=R.kL,t.prototype.$_ChartUtils=y}};a.ZP.config.productionTip=!1,a.ZP.use(U),new a.ZP({render:t=>t($)}).$mount("#app")}},r={};function e(a){var n=r[a];if(void 0!==n)return n.exports;var o=r[a]={exports:{}};return t[a].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(r,a,n,o){if(!a){var i=1/0;for(h=0;h<t.length;h++){a=t[h][0],n=t[h][1],o=t[h][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||i>=o)&&Object.keys(e.O).every((function(t){return e.O[t](a[l])}))?a.splice(l--,1):(s=!1,o<i&&(i=o));if(s){t.splice(h--,1);var u=n();void 0!==u&&(r=u)}}return r}o=o||0;for(var h=t.length;h>0&&t[h-1][2]>o;h--)t[h]=t[h-1];t[h]=[a,n,o]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,a){var n,o,i=a[0],s=a[1],l=a[2],u=0;if(i.some((function(r){return 0!==t[r]}))){for(n in s)e.o(s,n)&&(e.m[n]=s[n]);if(l)var h=l(e)}for(r&&r(a);u<i.length;u++)o=i[u],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(h)},a=self["webpackChunkvue_charts"]=self["webpackChunkvue_charts"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=e.O(void 0,[998],(function(){return e(4043)}));a=e.O(a)})();
//# sourceMappingURL=app.407aa0c5.js.map