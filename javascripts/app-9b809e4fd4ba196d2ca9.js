!function(t){function e(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="javascripts/",e(e.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);n.n(o);console.log("app.js has loaded!")},function(t,e){$(".osbuttons li a").on("click",function(){$(".osbuttons li a.check").removeClass("check"),$(this).addClass("check")});var n=$(".grid").isotope({itemSelector:".grid-item",layoutMode:"vertical"});$(".osbuttons li a").on("click",function(){var t=$(this).attr("data-filter");n.isotope({filter:t})}),$(".nav-toggle").click(function(t){t.stopPropagation(),$(this).toggleClass("open"),$(".ham-container").toggleClass("nav-open")}),$(".ham-container").click(function(t){t.stopPropagation()}),$("body,html,li").click(function(t){$(".nav-toggle").removeClass("open"),$(".ham-container").removeClass("nav-open")}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(t){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);(e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length&&(t.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},1e3,function(){var t=$(e);if(t.focus(),t.is(":focus"))return!1;t.attr("tabindex","-1"),t.focus()}))}}),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var o={config:{background:"#FFFFFF",color:"rgb(250,20,75)",highlight:"rgb(250,20,20)"},dots:[]};o.canvas=document.getElementById("myLove"),o.ctx=o.canvas.getContext("2d"),Math.TO_RAD=Math.PI/180,Math.getDistance=function(t,e,n,o){var a=0,i=0;return a=t-n,i=e-o,a*=a,i*=i,Math.sqrt(a+i)},Math.getDegree=function(t,e,n,o){var a=n-t,i=o-e;return Math.atan2(i,a)/Math.TO_RAD};var a=function(t){this.color=t.color,this.x=0,this.y=0,this.dest_x=t.dest_x-75,this.dest_y=t.dest_y-75};a.prototype.update=function(){var t=this,e=t.dest_x-t.x,n=t.dest_y-t.y;t.x+=.05*e,t.y+=.05*n,o.ctx.fillStyle=t.color,o.ctx.fillRect(t.x-2,t.y-2,4,4)},o.setFullscreen=function(){o.width=o.canvas.width=window.innerWidth,o.height=o.canvas.height=200},o.handleMouseEvent=function(t,e){var n,a,i,r,s,c=o.dots.length,l=0;for(t.offsetX?(n=t.offsetX,a=t.offsetY):t.layerX&&(n=t.layerX,a=t.layerY),n-=o.width/2,a-=o.height/2;l<c;l+=1)s=o.dots[l],(i=Math.getDistance(n,a,s.x,s.y))<55?(r=Math.getDegree(s.x,s.y,n,a),s.x+=Math.cos(r*Math.TO_RAD)*((55-i)*e),s.y+=Math.sin(r*Math.TO_RAD)*((55-i)*e),s.color=o.config.highlight):s.color=o.config.color},o.createHeart=function(){for(var t=[[1,4],[1,5],[1,6],[1,7],[1,8],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8],[6,9],[6,10],[6,11],[6,12],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8],[7,9],[7,10],[7,11],[7,12],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],[8,9],[8,10],[8,11],[8,12],[8,13],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],[9,10],[9,11],[9,12],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],[10,11],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],[12,2],[12,3],[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[13,3],[13,4],[13,5],[13,6],[13,7],[13,8],[13,9],[14,4],[14,5],[14,6],[14,7],[14,8]],e=t.length,n=0;n<e;n+=1)o.dots.push(new a({dest_x:10*t[n][0],dest_y:10*t[n][1],color:o.config.color}))},o.loop=function(){var t=o.ctx,e=o.dots.length,n=0;for(t.fillStyle=o.config.background,t.fillRect(0,0,o.width,o.height),t.save(),t.translate(o.width/2,o.height/2);n<e;n+=1)o.dots[n].update();t.restore(),requestAnimFrame(o.loop)},window.addEventListener("resize",o.setFullscreen),o.canvas.addEventListener("mousemove",function(t){o.handleMouseEvent(t,-.1)}),o.canvas.addEventListener("mousedown",function(t){o.handleMouseEvent(t,1)}),o.setFullscreen(),o.createHeart(),o.loop()},function(t,e,n){t.exports=n(0)}]);