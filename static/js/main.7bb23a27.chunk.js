(this["webpackJsonpchess-ai"]=this["webpackJsonpchess-ai"]||[]).push([[0],{13:function(r,n,o){},14:function(r,n,o){},15:function(r,n,o){"use strict";o.r(n);var e=o(0),i=o.n(e),l=o(6),c=o.n(l),t=(o(13),o(7)),a=o(2),u=function(r){var n="rgb(208, 139, 76)",o="white";(r.i+r.k)%2==0&&(n="rgb(254, 206, 161)",o="black");return i.a.createElement("div",{onClick:function(){null!=r.piece||r.active?r.handleClick(r.i,r.k):r.clickNothing()},style:{display:"flex",width:100,height:100,backgroundColor:n,boxShadow:"0 0 40px 1px ".concat(r.active?r.piece?"red":"yellow":"transparent"," inset"),color:o,border:"1px solid black  ",boxSizing:"border-box"}},r.piece&&i.a.createElement("img",{src:"/chess-ai"+"/gfx/".concat(r.piece.color).concat(r.piece.type,".png"),alt:"".concat(r.piece.color," ").concat(r.piece.type),style:{margin:"auto",height:"80%"}}))},f=o(4),v=function r(n,o){Object(f.a)(this,r),this.type="",this.color="",this.canMoveTo=[[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]],this.numOfMoves=0,this.turnsSinceLastMove=0,this.importance=void 0,this.type=n,this.color=o;var e="W"===o?1:-1;this.importance="King"===n?1e4*e:"Queen"===n?1e3*e:"Knight"===n?200*e:"Rook"===n||"Bishop"===n?150*e:50*e},p=[[new v("Rook","B"),new v("Knight","B"),new v("Bishop","B"),new v("Queen","B"),new v("King","B"),new v("Bishop","B"),new v("Knight","B"),new v("Rook","B")],[new v("Pawn","B"),new v("Pawn","B"),new v("Pawn","B"),new v("Pawn","B"),new v("Pawn","B"),new v("Pawn","B"),new v("Pawn","B"),new v("Pawn","B")],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[new v("Pawn","W"),new v("Pawn","W"),new v("Pawn","W"),new v("Pawn","W"),new v("Pawn","W"),new v("Pawn","W"),new v("Pawn","W"),new v("Pawn","W")],[new v("Rook","W"),new v("Knight","W"),new v("Bishop","W"),new v("Queen","W"),new v("King","W"),new v("Bishop","W"),new v("Knight","W"),new v("Rook","W")]],s=[[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1],[!1,!1,!1,!1,!1,!1,!1,!1]],W=function(r){switch(r){case"King":return 5e3;case"Rook":return 100;case"Knight":return 150;case"Bishop":return 100;case"Pawn":return 30;case"Queen":return 500}},y=function(r,n,o,e,i){var l=150,c=function(r,o){var l=e.map((function(r){return r.slice()}));return l[r][o]=l[r][n],l[r][n]=null,d(l,"W"===i?"B":"W")},t=function(n,o){var l=e.map((function(r){return r.slice()}));return l[n][o]=l[r][o],l[r][o]=null,d(l,"W"===i?"B":"W")};if(0!==r)for(var a=r-1;a>=0;a--){var u=e[a][n];if(u){if(u.color===i)break;if(t(a,n))break}else if(t(a,n))continue;if(null!==u){u.color!==i&&(o[a][n]=!0,l+=W(u.type));break}o[a][n]=!0}if(7!==r)for(var f=r+1;f<=7;f++){var v=e[f][n];if(v){if(v.color===i)break;if(t(f,n))break}else if(t(f,n))continue;if(null!==v){v.color!==i&&(o[f][n]=!0,l+=W(v.type));break}o[f][n]=!0}if(0!==n)for(var p=n-1;p>=0;p--){var s=e[r][p];if(s){if(s.color===i)break;if(c(r,p))break}else if(c(r,p))continue;if(null!==s){s.color!==i&&(o[r][p]=!0,l+=W(s.type));break}o[r][p]=!0}if(7!==n)for(var y=n+1;y<=7;y++){var m=e[r][y];if(m){if(m.color===i)break;if(c(r,y))break}else if(c(r,y))continue;if(null!==m){m.color!==i&&(o[r][y]=!0,l+=W(m.type));break}o[r][y]=!0}l*="W"===i?1:-1,e[r][n].importance=l},m=function(r,n,o,e,i){var l=200;if(r>=2){if(n>=1){var c=e[r-2][n-1],t=!1;if(!c||c.color!==e[r][n].color){var a=e.map((function(r){return r.slice()}));a[r-2][n-1]=a[r][n],a[r][n]=null,t=d(a,"W"===i?"B":"W")}t||(null===c?o[r-2][n-1]=!0:c.color!==i&&(o[r-2][n-1]=!0,l+=W(c.type)))}if(n<=6){var u=e[r-2][n+1],f=!1;if(!u||u.color!==e[r][n].color){var v=e.map((function(r){return r.slice()}));v[r-2][n+1]=v[r][n],v[r][n]=null,f=d(v,"W"===i?"B":"W")}f||(null===u?o[r-2][n+1]=!0:u.color!==i&&(o[r-2][n+1]=!0,l+=W(u.type)))}}if(r<=5){if(n>=1){var p=e[r+2][n-1],s=!1;if(!p||p.color!==e[r][n].color){var y=e.map((function(r){return r.slice()}));y[r+2][n-1]=y[r][n],y[r][n]=null,s=d(y,"W"===i?"B":"W")}s||(null===p?o[r+2][n-1]=!0:p.color!==i&&(o[r+2][n-1]=!0,l+=W(p.type)))}if(n<=6){var m=e[r+2][n+1],B=!1;if(!m||m.color!==e[r][n].color){var k=e.map((function(r){return r.slice()}));k[r+2][n+1]=k[r][n],k[r][n]=null,B=d(k,"W"===i?"B":"W")}B||(null===m?o[r+2][n+1]=!0:m.color!==i&&(o[r+2][n+1]=!0,l+=W(m.type)))}}if(n>=2){if(r>=1){var b=e[r-1][n-2],w=!1;if(!b||b.color!==e[r][n].color){var g=e.map((function(r){return r.slice()}));g[r-1][n-2]=g[r][n],g[r][n]=null,w=d(g,"W"===i?"B":"W")}w||(null===b?o[r-1][n-2]=!0:b.color!==i&&(o[r-1][n-2]=!0,l+=W(b.type)))}if(r<=6){var h=e[r+1][n-2],K=!1;if(!h||h.color!==e[r][n].color){var M=e.map((function(r){return r.slice()}));M[r+1][n-2]=M[r][n],M[r][n]=null,K=d(M,"W"===i?"B":"W")}K||(null===h?o[r+1][n-2]=!0:h.color!==i&&(o[r+1][n-2]=!0,l+=W(h.type)))}}if(n<=5){if(r>=1){var P=e[r-1][n+2],O=!1;if(!P||P.color!==e[r][n].color){var j=e.map((function(r){return r.slice()}));j[r-1][n+2]=j[r][n],j[r][n]=null,O=d(j,"W"===i?"B":"W")}O||(null===P?o[r-1][n+2]=!0:P.color!==i&&(o[r-1][n+2]=!0,l+=W(P.type)))}if(r<=6){var S=e[r+1][n+2],T=!1;if(!S||S.color!==e[r][n].color){var x=e.map((function(r){return r.slice()}));x[r+1][n+2]=x[r][n],x[r][n]=null,T=d(x,"W"===i?"B":"W")}T||(null===S?o[r+1][n+2]=!0:S.color!==i&&(o[r+1][n+2]=!0,l+=W(S.type)))}}l*="W"===i?1:-1,e[r][n].importance=l},B=function(r,n,o,e,i){for(var l=150,c=1;c<8;c++){var t=function(o){var l=e.map((function(r){return r.slice()}));return l[r-o][n+o]=l[r][n],l[r][n]=null,d(l,"W"===i?"B":"W")};if(!(r-c>=0&&n+c<=7))break;var a=e[r-c][n+c];if(a){if(a.color===e[r][n].color)break;if(t(c))break}else if(t(c))continue;if(null!==a){a.color!==i&&(o[r-c][n+c]=!0,l+=W(a.type));break}o[r-c][n+c]=!0}for(var u=1;u<8;u++){var f=function(o){var l=e.map((function(r){return r.slice()}));return l[r+o][n+o]=l[r][n],l[r][n]=null,d(l,"W"===i?"B":"W")};if(!(r+u<=7&&n+u<=7))break;var v=e[r+u][n+u];if(v){if(v.color===e[r][n].color)break;if(f(u))break}else if(f(u))continue;if(null!==v){v.color!==i&&(o[r+u][n+u]=!0,l+=W(v.type));break}o[r+u][n+u]=!0}for(var p=1;p<8;p++){var s=function(o){var l=e.map((function(r){return r.slice()}));return l[r+o][n-o]=l[r][n],l[r][n]=null,d(l,"W"===i?"B":"W")};if(r+p<=7&&n-p>=0){var y=e[r+p][n-p];if(y){if(y.color===e[r][n].color)break;if(s(p))break}else if(s(p))continue;if(null!==y){y.color!==i&&(o[r+p][n-p]=!0,l+=W(y.type));break}o[r+p][n-p]=!0}}for(var m=1;m<8&&(r-m>=0&&n-m>=0);m++){var B=e[r-m][n-m],k=function(o){var l=e.map((function(r){return r.slice()}));return l[r-o][n-o]=l[r][n],l[r][n]=null,d(l,"W"===i?"B":"W")};if(B){if(B.color===e[r][n].color)break;if(k(m))break}else if(k(m))continue;if(null!==B){B.color!==i&&(o[r-m][n-m]=!0,l+=W(B.type));break}o[r-m][n-m]=!0}l*="W"===i?1:-1,e[r][n].importance=l},k=function(r,n,o,e,i){var l=1e4,c=e[r][n],t=e[r][n+3];if(e[r][n+3]&&"Rook"===e[r][n+3].type&&0===c.numOfMoves&&0===t.numOfMoves&&null===e[r][n+1]&&null===e[r][n+2]){var a=e.map((function(r){return r.slice()}));a[r][n+1]=e[r][n+3],a[r][n+2]=e[r][n],a[r][n]=null,a[r][n+3]=null,d(a,"W"===i?"B":"W")||(o[r][n+2]=!0)}if(r>=1){var u=e[r-1][n];if(!u||u.color!==i){var f=e.map((function(r){return r.slice()}));f[r-1][n]=e[r][n],f[r][n]=null,d(f,"W"===i?"B":"W")||(o[r-1][n]=!0,u&&(l+=W(u.type)))}if(n>=1){var v=e[r-1][n-1];if(!v||v.color!==i){var p=e.map((function(r){return r.slice()}));p[r-1][n-1]=e[r][n],p[r][n]=null,d(p,"W"===i?"B":"W")||(o[r-1][n-1]=!0,v&&(l+=W(v.type)))}}if(n<=6){var s=e[r-1][n+1];if(!s||s.color!==i){var y=e.map((function(r){return r.slice()}));y[r-1][n+1]=e[r][n],y[r][n]=null,d(y,"W"===i?"B":"W")||(o[r-1][n+1]=!0,s&&(l+=W(s.type)))}}}if(r<=6){var m=e[r+1][n];if(!m||m.color!==i){var B=e.map((function(r){return r.slice()}));B[r+1][n]=e[r][n],B[r][n]=null,d(B,"W"===i?"B":"W")||(o[r+1][n]=!0,m&&(l+=W(m.type)))}if(n>=1){var k=e[r+1][n-1];if(!k||k.color!==i){var b=e.map((function(r){return r.slice()}));b[r+1][n-1]=e[r][n],b[r][n]=null,d(b,"W"===i?"B":"W")||(o[r+1][n-1]=!0,k&&(l+=W(k.type)))}}if(n<=6){var w=e[r+1][n+1];if(!w||w.color!==i){var g=e.map((function(r){return r.slice()}));g[r+1][n+1]=e[r][n],g[r][n]=null,d(g,"W"===i?"B":"W")||(o[r+1][n+1]=!0,w&&(l+=W(w.type)))}}}if(n>=1){var h=e[r][n-1];if(!h||h.color!==i){var K=e.map((function(r){return r.slice()}));K[r][n-1]=e[r][n],K[r][n]=null,d(K,"W"===i?"B":"W")||(o[r][n-1]=!0,h&&(l+=W(h.type)))}}if(n<=6){var M=e[r][n+1];if(!M||M.color!==i){var P=e.map((function(r){return r.slice()}));P[r][n+1]=e[r][n],P[r][n]=null,d(P,"W"===i?"B":"W")||(o[r][n+1]=!0,M&&(l+=W(M.type)))}}l*="W"===i?1:-1,e[r][n].importance=l},b=function(r,n,o,e,i){var l=50;if(e[r][n].turnsSinceLastMove++,"W"===i){if(null===e[r-1][n]){var c=e.map((function(r){return r.slice()}));if(c[r-1][n]=e[r][n],c[r][n]=null,d(c,"W"===i?"B":"W")||(o[r-1][n]=!0),e[r][n]&&0===e[r][n].numOfMoves&&null===e[r-2][n]){var t=e.map((function(r){return r.slice()}));t[r-2][n]=e[r][n],t[r][n]=null,d(t,"W"===i?"B":"W")||(o[r-2][n]=!0)}}if(0!==n){var a=e[r-1][n-1],u=e[r][n-1];if(null!==a){if("B"===a.color){var f=e.map((function(r){return r.slice()}));f[r-1][n-1]=e[r][n],f[r][n]=null,d(f,"W"===i?"B":"W")||(o[r-1][n-1]=!0,l+=W(a.type))}}else if(3===r&&u&&1===u.numOfMoves&&0===u.turnsSinceLastMove){var v=e.map((function(r){return r.slice()}));v[r-1][n-1]=e[r][n],v[r][n-1]=null,d(v,"W"===i?"B":"W")||(o[r-1][n-1]=!0,l+=W(u.type))}}if(7!==n){var p=e[r-1][n+1],s=e[r][n+1];if(null!==p){if("B"===p.color){var y=e.map((function(r){return r.slice()}));y[r-1][n+1]=e[r][n],y[r][n]=null,d(y,"W"===i?"B":"W")||(o[r-1][n+1]=!0,l+=W(p.type))}}else if(3===r&&s&&1===s.numOfMoves&&0===s.turnsSinceLastMove){var m=e.map((function(r){return r.slice()}));m[r-1][n+1]=e[r][n],m[r][n+1]=null,d(m,"W"===i?"B":"W")||(o[r-1][n+1]=!0,l+=W(s.type))}}}if("B"===i){if(null===e[r+1][n]){var B=e.map((function(r){return r.slice()}));if(B[r+1][n]=e[r][n],B[r][n]=null,d(B,"W"===i?"B":"W")||(o[r+1][n]=!0),0===e[r][n].numOfMoves&&null==e[r+2][n]){var k=e.map((function(r){return r.slice()}));k[r+2][n]=e[r][n],k[r][n]=null,d(k,"W"===i?"B":"W")||(o[r+2][n]=!0)}}if(0!==n){var b=e[r+1][n-1],w=e[r][n-1];if(null!==b){if("W"===b.color){var g=e.map((function(r){return r.slice()}));g[r+1][n-1]=e[r][n],g[r][n]=null,d(g,"W"===i?"B":"W")||(o[r+1][n-1]=!0,l+=W(b.type))}}else if(4===r&&w&&1===w.numOfMoves&&0===w.turnsSinceLastMove){var h=e.map((function(r){return r.slice()}));h[r+1][n-1]=h[r][n],h[r][n-1]=null,d(h,"W"===i?"B":"W")||(o[r+1][n-1]=!0),l+=W(w.type)}}if(7!==n){var K=e[r+1][n+1],M=e[r][n+1];if(null!==K){if("W"===K.color){var P=e.map((function(r){return r.slice()}));P[r+1][n+1]=e[r][n],P[r][n]=null,d(P,"W"===i?"B":"W")||(o[r+1][n+1]=!0,l+=W(K.type))}}else if(4===r&&M&&1===M.numOfMoves&&0===M.turnsSinceLastMove){var O=e.map((function(r){return r.slice()}));O[r+1][n+1]=O[r][n],O[r][n+1]=null,d(O,"W"===i?"B":"W")||(o[r+1][n+1]=!0),l+=W(M.type)}}}l*="W"===i?1:-1,e[r][n].importance=l},w=function(r,n){for(var o=0,e=0;e<8;e++)for(var i=0;i<8;i++)if(r[e][i]&&r[e][i].color===n){switch(r[e][i].canMoveTo=s.map((function(r){return r.slice()})),r[e][i].type){case"Pawn":b(e,i,r[e][i].canMoveTo,r,r[e][i].color);break;case"Bishop":B(e,i,r[e][i].canMoveTo,r,r[e][i].color);break;case"King":k(e,i,r[e][i].canMoveTo,r,r[e][i].color);break;case"Queen":B(e,i,r[e][i].canMoveTo,r,r[e][i].color),y(e,i,r[e][i].canMoveTo,r,r[e][i].color);break;case"Rook":y(e,i,r[e][i].canMoveTo,r,r[e][i].color);break;case"Knight":m(e,i,r[e][i].canMoveTo,r,r[e][i].color)}o+=r[e][i].importance}else r[e][i]&&(o+=r[e][i].importance);return o},g=function(r,n,o){if(0===r||7===r)return!1;if("W"===o[r][n].color){if(0!==n){var e=o[r-1][n-1];if(null!==e&&"B"===e.color&&"King"==e.type)return!0}if(7!==n){var i=o[r-1][n+1];if(null!==i&&"B"===i.color&&"King"==i.type)return!0}}if("B"===o[r][n].color){if(0!==n){var l=o[r+1][n-1];if(null!==l&&"W"===l.color&&"King"===l.type)return!0}if(7!==n){var c=o[r+1][n+1];if(null!==c&&"W"===c.color&&"King"==c.type)return!0}}return!1},h=function(r,n,o){if(0!==r)for(var e=r-1;e>=0;e--){var i=o[e][n];if(i&&(i.color===o[r][n].color||i.color!==o[r][n].color&&"King"!==i.type))break;if(i&&i.color!==o[r][n].color&&"King"===i.type)return!0}if(7!==r)for(var l=r+1;l<=7;l++){var c=o[l][n];if(c&&(c.color===o[r][n].color||c.color!==o[r][n].color&&"King"!==c.type))break;if(c&&c.color!==o[r][n].color&&"King"===c.type)return!0}if(0!==n)for(var t=n-1;t>=0;t--){var a=o[r][t];if(a&&(a.color===o[r][n].color||a.color!==o[r][n].color&&"King"!==a.type))break;if(a&&a.color!==o[r][n].color&&"King"===a.type)return!0}if(7!==n)for(var u=n+1;u<=7;u++){var f=o[r][u];if(f&&(f.color===o[r][n].color||f.color!==o[r][n].color&&"King"!==f.type))break;if(f&&f.color!==o[r][n].color&&"King"===f.type)return!0}return!1},K=function(r,n,o){if(r>=2){if(n>=1){var e=o[r-2][n-1];if(e&&e.color!==o[r][n].color&&"King"===e.type)return!0}if(n<=6){var i=o[r-2][n+1];if(i&&i.color!==o[r][n].color&&"King"===i.type)return!0}}if(r<=5){if(n>=1){var l=o[r+2][n-1];if(l&&l.color!==o[r][n].color&&"King"===l.type)return!0}if(n<=6){var c=o[r+2][n+1];if(c&&c.color!==o[r][n].color&&"King"===c.type)return!0}}if(n>=2){if(r>=1){var t=o[r-1][n-2];if(t&&t.color!==o[r][n].color&&"King"===t.type)return!0}if(r<=6){var a=o[r+1][n-2];if(a&&a.color!==o[r][n].color&&"King"===a.type)return!0}}if(n<=5){if(r>=1){var u=o[r-1][n+2];if(u&&u.color!==o[r][n].color&&"King"===u.type)return!0}if(r<=6){var f=o[r+1][n+2];if(f&&f.color!==o[r][n].color&&"King"===f.type)return!0}}return!1},M=function(r,n,o){for(var e=1;e<8&&(r-e>=0&&n+e<=7);e++){var i=o[r-e][n+e];if(i&&(i.color===o[r][n].color||i.color!==o[r][n].color&&"King"!==i.type))break;if(i&&i.color!==o[r][n].color&&"King"===i.type)return!0}for(var l=1;l<8&&(r+l<=7&&n+l<=7);l++){var c=o[r+l][n+l];if(c&&(c.color===o[r][n].color||c.color!==o[r][n].color&&"King"!==c.type))break;if(c&&c.color!==o[r][n].color&&"King"===c.type)return!0}for(var t=1;t<8;t++)if(r+t<=7&&n-t>=0){var a=o[r+t][n-t];if(a&&(a.color===o[r][n].color||a.color!==o[r][n].color&&"King"!==a.type))break;if(a&&a.color!==o[r][n].color&&"King"===a.type)return!0}for(var u=1;u<8&&(r-u>=0&&n-u>=0);u++){var f=o[r-u][n-u];if(f&&(f.color===o[r][n].color||f.color!==o[r][n].color&&"King"!==f.type))break;if(f&&f.color!==o[r][n].color&&"King"===f.type)return!0}return!1},P=function(r,n,o){if(r>=1){var e=o[r-1][n];if(e&&e.color!==o[r][n].color&&"King"===e.type)return!0;if(n>=1){var i=o[r-1][n-1];if(i&&i.color!==o[r][n].color&&"King"===i.type)return!0}if(n<=6){var l=o[r-1][n+1];if(l&&l.color!==o[r][n].color&&"King"===l.type)return!0}}if(r<=6){var c=o[r+1][n];if(c&&c.color!==o[r][n].color&&"King"===c.type)return!0;if(n>=1){var t=o[r+1][n-1];if(t&&t.color!==o[r][n].color&&"King"===t.type)return!0}if(n<=6){var a=o[r+1][n+1];if(a&&a.color!==o[r][n].color&&"King"===a.type)return!0}}if(n>=1){var u=o[r][n-1];if(u&&u.color!==o[r][n].color&&"King"===u.type)return!0}if(n<=6){var f=o[r][n+1];if(f&&f.color!==o[r][n].color&&"King"===f.type)return!0}return!1},d=function(r,n){for(var o=0;o<8;o++)for(var e=0;e<8;e++)if(r[o][e]&&r[o][e].color===n){var i=!1;switch(r[o][e].type){case"Pawn":i=g(o,e,r);break;case"Bishop":i=M(o,e,r);break;case"King":i=P(o,e,r);break;case"Queen":(i=M(o,e,r))||(i=h(o,e,r));break;case"Rook":i=h(o,e,r);break;case"Knight":i=K(o,e,r)}if(i)return!0}return!1},O=function(r,n,o){var e=o[r][n].color,i=50;if("W"===e&&0!==r){if(0!==n){var l=o[r-1][n-1];if(l&&"B"===l.color){var c=o.map((function(r){return r.slice()}));c[r-1][n-1]=o[r][n],c[r][n]=null,d(c,"W"===e?"B":"W")||(i+=W(l.type))}}if(7!==n){var t=o[r-1][n+1];o[r][n+1];if(t&&"B"===t.color){var a=o.map((function(r){return r.slice()}));a[r-1][n+1]=o[r][n],a[r][n]=null,d(a,"W"===e?"B":"W")||(i+=W(t.type))}}}if("B"===e&&7!==r){if(0!==n){var u=o[r+1][n-1];o[r][n-1];if(u&&"W"===u.color){var f=o.map((function(r){return r.slice()}));f[r+1][n-1]=o[r][n],f[r][n]=null,d(f,"W"===e?"B":"W")||(i+=W(u.type))}}if(7!==n){var v=o[r+1][n+1];o[r][n+1];if(v&&"W"===v.color){var p=o.map((function(r){return r.slice()}));p[r+1][n+1]=o[r][n],p[r][n]=null,d(p,"W"===e?"B":"W")||(i+=W(v.type))}}}i*="W"===e?1:-1,o[r][n].importance=i},j=function(r,n,o){var e=150,i=o[r][n].color,l=function(r,e){var l=o.map((function(r){return r.slice()}));return l[r][e]=l[r][n],l[r][n]=null,d(l,"W"===i?"B":"W")},c=function(n,e){var l=o.map((function(r){return r.slice()}));return l[n][e]=l[r][e],l[r][e]=null,d(l,"W"===i?"B":"W")};if(0!==r)for(var t=r-1;t>=0;t--){var a=o[t][n];if(a){if(a.color===i)break;if(c(t,n))break;e+=W(a.type)}}if(7!==r)for(var u=r+1;u<=7;u++){var f=o[u][n];if(f){if(f.color===i)break;if(c(u,n))break;e+=W(f.type)}}if(0!==n)for(var v=n-1;v>=0;v--){var p=o[r][v];if(p){if(p.color===i)break;if(l(r,v))break;e+=W(p.type)}}if(7!==n)for(var s=n+1;s<=7;s++){var y=o[r][s];if(y){if(y.color===i)break;if(l(r,s))break;e+=W(y.type)}}e*="W"===i?1:-1,o[r][n].importance=e},S=function(r,n,o){for(var e=150,i=o[r][n].color,l=1;l<8;l++){if(!(r-l>=0&&n+l<=7))break;var c=o[r-l][n+l];if(c){if(c.color===o[r][n].color)break;if(function(e){var l=o.map((function(r){return r.slice()}));return l[r-e][n+e]=l[r][n],l[r][n]=null,d(l,"W"===i?"B":"W")}(l))break;e+=W(c.type)}}for(var t=1;t<8;t++){if(!(r+t<=7&&n+t<=7))break;var a=o[r+t][n+t];if(a){if(a.color===o[r][n].color)break;if(function(e){var l=o.map((function(r){return r.slice()}));return l[r+e][n+e]=l[r][n],l[r][n]=null,d(l,"W"===i?"B":"W")}(t))break;e+=W(a.type)}}for(var u=1;u<8;u++){if(r+u<=7&&n-u>=0){var f=o[r+u][n-u];if(f){if(f.color===o[r][n].color)break;if(function(e){var l=o.map((function(r){return r.slice()}));return l[r+e][n-e]=l[r][n],l[r][n]=null,d(l,"W"===i?"B":"W")}(u))break;e+=W(f.type)}}}for(var v=1;v<8&&(r-v>=0&&n-v>=0);v++){var p=o[r-v][n-v];if(p){if(p.color===o[r][n].color)break;if(function(e){var l=o.map((function(r){return r.slice()}));return l[r-e][n-e]=l[r][n],l[r][n]=null,d(l,"W"===i?"B":"W")}(v))break;e+=W(p.type)}}e*="W"===i?1:-1,o[r][n].importance=e},T=function(r,n,o){var e=1e4,i=o[r][n].color;if(r>=1){var l=o[r-1][n];if(!l||l.color!==i){var c=o.map((function(r){return r.slice()}));c[r-1][n]=o[r][n],c[r][n]=null,d(c,"W"===i?"B":"W")||l&&(e+=W(l.type))}if(n>=1){var t=o[r-1][n-1];if(!t||t.color!==i){var a=o.map((function(r){return r.slice()}));a[r-1][n-1]=o[r][n],a[r][n]=null,d(a,"W"===i?"B":"W")||t&&(e+=W(t.type))}}if(n<=6){var u=o[r-1][n+1];if(!u||u.color!==i){var f=o.map((function(r){return r.slice()}));f[r-1][n+1]=o[r][n],f[r][n]=null,d(f,"W"===i?"B":"W")||u&&(e+=W(u.type))}}}if(r<=6){var v=o[r+1][n];if(!v||v.color!==i){var p=o.map((function(r){return r.slice()}));p[r+1][n]=o[r][n],p[r][n]=null,d(p,"W"===i?"B":"W")||v&&(e+=W(v.type))}if(n>=1){var s=o[r+1][n-1];if(!s||s.color!==i){var y=o.map((function(r){return r.slice()}));y[r+1][n-1]=o[r][n],y[r][n]=null,d(y,"W"===i?"B":"W")||s&&(e+=W(s.type))}}if(n<=6){var m=o[r+1][n+1];if(!m||m.color!==i){var B=o.map((function(r){return r.slice()}));B[r+1][n+1]=o[r][n],B[r][n]=null,d(B,"W"===i?"B":"W")||m&&(e+=W(m.type))}}}if(n>=1){var k=o[r][n-1];if(!k||k.color!==i){var b=o.map((function(r){return r.slice()}));b[r][n-1]=o[r][n],b[r][n]=null,d(b,"W"===i?"B":"W")||k&&(e+=W(k.type))}}if(n<=6){var w=o[r][n+1];if(!w||w.color!==i){var g=o.map((function(r){return r.slice()}));g[r][n+1]=o[r][n],g[r][n]=null,d(g,"W"===i?"B":"W")||w&&(e+=W(w.type))}}e*="W"===i?1:-1,o[r][n].importance=e},x=function(r,n,o){var e=200,i=o[r][n].color;if(r>=2){if(n>=1){var l=o[r-2][n-1];if(l&&l.color!==o[r][n].color){var c=o.map((function(r){return r.slice()}));c[r-2][n-1]=c[r][n],c[r][n]=null,d(c,"W"===i?"B":"W")||(e+=W(l.type))}}if(n<=6){var t=o[r-2][n+1];if(t&&t.color!==o[r][n].color){var a=o.map((function(r){return r.slice()}));a[r-2][n+1]=a[r][n],a[r][n]=null,d(a,"W"===i?"B":"W")||(e+=W(t.type))}}}if(r<=5){if(n>=1){var u=o[r+2][n-1];if(u&&u.color!==o[r][n].color){var f=o.map((function(r){return r.slice()}));f[r+2][n-1]=f[r][n],f[r][n]=null,d(f,"W"===i?"B":"W")||(e+=W(u.type))}}if(n<=6){var v=o[r+2][n+1];if(v&&v.color!==o[r][n].color){var p=o.map((function(r){return r.slice()}));p[r+2][n+1]=p[r][n],p[r][n]=null,d(p,"W"===i?"B":"W")||(e+=W(v.type))}}}if(n>=2){if(r>=1){var s=o[r-1][n-2];if(s&&s.color!==o[r][n].color){var y=o.map((function(r){return r.slice()}));y[r-1][n-2]=y[r][n],y[r][n]=null,d(y,"W"===i?"B":"W")||(e+=W(s.type))}}if(r<=6){var m=o[r+1][n-2];if(m&&m.color!==o[r][n].color){var B=o.map((function(r){return r.slice()}));B[r+1][n-2]=B[r][n],B[r][n]=null,d(B,"W"===i?"B":"W")||(e+=W(m.type))}}}if(n<=5){if(r>=1){var k=o[r-1][n+2];if(k&&k.color!==o[r][n].color){var b=o.map((function(r){return r.slice()}));b[r-1][n+2]=b[r][n],b[r][n]=null,d(b,"W"===i?"B":"W")||(e+=W(k.type))}}if(r<=6){var w=o[r+1][n+2];if(w&&w.color!==o[r][n].color){var g=o.map((function(r){return r.slice()}));g[r+1][n+2]=g[r][n],g[r][n]=null,d(g,"W"===i?"B":"W")||(e+=W(w.type))}}}e*="W"===i?1:-1,o[r][n].importance=e},R=function r(n,o,e,i){Object(f.a)(this,r),this.i=void 0,this.j=void 0,this.x=void 0,this.y=void 0,this.i=n,this.j=o,this.x=e,this.y=i},E=function r(n,o,e){if(0===e)return{score:Q(n),moveToMake:new R(1,1,1,1)};var i=JSON.parse(JSON.stringify(n));w(i,o);for(var l={},c=0;c<8;c++)for(var t=0;t<8;t++)if(i[c][t]&&i[c][t].color===o)for(var a=0;a<8;a++)for(var u=0;u<8;u++){if(i[c][t].canMoveTo[a][u]){var f=n.map((function(r){return r.slice()}));f[a][u]=f[c][t],f[c][t]=null;var v=r(f,"W"===o?"B":"W",e-1),p=v.score,s=(v.moveToMake,new R(c,t,a,u));l[p]=s}}var W=0;if("W"===o)for(var y in W=-1e4,l){var m=parseInt(y);m>W&&(W=m)}else for(var B in W=1e4,l){var k=parseInt(B);k<W&&(W=k)}return{score:W,moveToMake:l[W]}},Q=function(r){for(var n=0,o=0;o<8;o++)for(var e=0;e<8;e++)if(r[o][e]){switch(r[o][e].type){case"Pawn":O(o,e,r);break;case"Bishop":S(o,e,r);break;case"King":T(o,e,r);break;case"Queen":S(o,e,r),j(o,e,r);break;case"Rook":j(o,e,r);break;case"Knight":x(o,e,r)}n+=r[o][e].importance}return n};w(p,"W");var L=function(){var r=Object(e.useState)((function(){return p})),n=Object(a.a)(r,2),o=n[0],l=n[1],c=Object(e.useState)([4,4]),f=Object(a.a)(c,2),v=f[0],W=f[1],y=Object(e.useState)("W"),m=Object(a.a)(y,2),B=m[0],k=m[1],b=Object(e.useState)((function(){return Object(t.a)(s)})),g=Object(a.a)(b,2),h=g[0],K=g[1],M=function(){K(s.map((function(r){return r.slice()}))),W([9,9])},P=function(r,n){if((!o[r][n]||B===o[r][n].color||h[r][n])&&(r!==v[0]||n!==v[1]))if(1==h[r][n]){var e=function(r,n,o){var e=r.map((function(r){return r.slice()}));return e[n][o]&&"King"===e[n][o].type&&alert("Game over"),6!==o||0!==n&&7!==n||4!==v[1]||0!==v[0]&&7!==v[0]||"King"!==r[v[0]][v[1]].type||(e[n][o-1]=r[v[0]][7],e[n][7]=null,e[n][o-1].numOfMoves++),(2===n&&r[n+1][o]&&"Pawn"===r[n+1][o].type&&"Pawn"===r[v[0]][v[1]].type||5===n&&r[n-1][o]&&"Pawn"===r[n-1][o].type&&"Pawn"===r[v[0]][v[1]].type)&&(e[2===n?3:4][o]=null),(0===n&&r[1][o]&&"W"===r[1][o].color&&"Pawn"===r[1][o].type||7===n&&r[6][o]&&"B"===r[6][o].color&&"Pawn"===r[6][o].type)&&(r[0===n?1:6][o].type="Queen"),e[n][o]=r[v[0]][v[1]],e[v[0]][v[1]]=null,e[n][o].numOfMoves++,e[n][o].turnsSinceLastMove=0,e}(o,r,n);l(e),K(s.map((function(r){return r.slice()})));var i=E(e,"B",2),c=(i.score,i.moveToMake);l((function(r){var n=r.map((function(r){return r.slice()}));return n[c.x][c.y]=n[c.i][c.j],n[c.i][c.j]=null,n[c.x][c.y].numOfMoves++,w(n,"W"),n})),k("W")}else K((function(e){var i=o[r][n].canMoveTo.map((function(r){return r.slice()}));return i[r][n]=!0,i})),W([r,n])};return i.a.createElement("div",null,i.a.createElement("section",{className:"app_board",style:{margin:"auto"}},o.map((function(r,n){return r.map((function(r,e){return i.a.createElement(u,{clickNothing:M,k:e,i:n,key:"".concat(n,"_").concat(e),piece:o[n][e],handleClick:P,active:h[n][e]})}))}))))},N=(o(14),function(){return i.a.createElement("main",{className:"app"},i.a.createElement(L,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(r){r.unregister()})).catch((function(r){console.error(r.message)}))},8:function(r,n,o){r.exports=o(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.7bb23a27.chunk.js.map