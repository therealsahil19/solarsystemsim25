(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="179",js={ROTATE:0,DOLLY:1,PAN:2},is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},H0=0,mf=1,V0=2,Ym=1,qm=2,Ai=3,fs=0,en=1,an=2,cs=0,Wr=1,Pu=2,gf=3,_f=4,G0=5,Fs=100,W0=101,X0=102,j0=103,Y0=104,q0=200,K0=201,$0=202,Z0=203,Du=204,Iu=205,J0=206,Q0=207,tv=208,ev=209,nv=210,iv=211,sv=212,rv=213,ov=214,Lu=0,Uu=1,Ou=2,to=3,Fu=4,Nu=5,Bu=6,ku=7,Km=0,av=1,lv=2,us=0,cv=1,uv=2,hv=3,$m=4,dv=5,fv=6,pv=7,Zm=300,eo=301,no=302,zu=303,Hu=304,ac=306,ta=1e3,ks=1001,Vu=1002,wn=1003,mv=1004,Pa=1005,ai=1006,Ec=1007,zs=1008,pi=1009,Jm=1010,Qm=1011,ea=1012,ad=1013,nr=1014,li=1015,Sa=1016,ld=1017,cd=1018,na=1020,tg=35902,eg=1021,ng=1022,Kn=1023,ia=1026,sa=1027,ud=1028,hd=1029,ig=1030,dd=1031,fd=1033,vl=33776,xl=33777,yl=33778,Sl=33779,Gu=35840,Wu=35841,Xu=35842,ju=35843,Yu=36196,qu=37492,Ku=37496,$u=37808,Zu=37809,Ju=37810,Qu=37811,th=37812,eh=37813,nh=37814,ih=37815,sh=37816,rh=37817,oh=37818,ah=37819,lh=37820,ch=37821,Ml=36492,uh=36494,hh=36495,sg=36283,dh=36284,fh=36285,ph=36286,gv=3200,_v=3201,rg=0,vv=1,es="",xn="srgb",io="srgb-linear",Il="linear",ne="srgb",gr=7680,vf=519,xv=512,yv=513,Sv=514,og=515,Mv=516,Ev=517,bv=518,wv=519,mh=35044,bc=35048,xf="300 es",ci=2e3,Ll=2001;class ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yf=1234567;const Ho=Math.PI/180,ra=180/Math.PI;function Fi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Nt(i,t,e){return Math.max(t,Math.min(e,i))}function pd(i,t){return(i%t+t)%t}function Tv(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Av(i,t,e){return i!==t?(e-i)/(t-i):0}function Vo(i,t,e){return(1-e)*i+e*t}function Cv(i,t,e,n){return Vo(i,t,1-Math.exp(-e*n))}function Rv(i,t=1){return t-Math.abs(pd(i,t*2)-t)}function Pv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Dv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Iv(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Lv(i,t){return i+Math.random()*(t-i)}function Uv(i){return i*(.5-Math.random())}function Ov(i){i!==void 0&&(yf=i);let t=yf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fv(i){return i*Ho}function Nv(i){return i*ra}function Bv(i){return(i&i-1)===0&&i!==0}function kv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hv(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const oa={DEG2RAD:Ho,RAD2DEG:ra,generateUUID:Fi,clamp:Nt,euclideanModulo:pd,mapLinear:Tv,inverseLerp:Av,lerp:Vo,damp:Cv,pingpong:Rv,smoothstep:Pv,smootherstep:Dv,randInt:Iv,randFloat:Lv,randFloatSpread:Uv,seededRandom:Ov,degToRad:Fv,radToDeg:Nv,isPowerOfTwo:Bv,ceilPowerOfTwo:kv,floorPowerOfTwo:zv,setQuaternionFromProperEuler:Hv,normalize:Jt,denormalize:jn};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ir{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-a;const p=l*d+c*f+u*_+h*g,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const b=Math.sqrt(S),T=Math.atan2(b,p*M);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}const v=a*M;if(l=l*m+d*v,c=c*m+f*v,u=u*m+_*v,h=h*m+g*v,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+u*h+l*f-c*d,t[e+1]=l*_+u*d+c*h-a*f,t[e+2]=c*_+u*f+a*d-l*h,t[e+3]=u*_-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Nt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wc.copy(this).projectOnVector(t),this.sub(wc)}reflect(t){return this.sub(wc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wc=new D,Sf=new ir;class zt{constructor(t,e,n,s,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=s[0],m=s[3],p=s[6],M=s[1],S=s[4],v=s[7],b=s[2],T=s[5],A=s[8];return r[0]=o*g+a*M+l*b,r[3]=o*m+a*S+l*T,r[6]=o*p+a*v+l*A,r[1]=c*g+u*M+h*b,r[4]=c*m+u*S+h*T,r[7]=c*p+u*v+h*A,r[2]=d*g+f*M+_*b,r[5]=d*m+f*S+_*T,r[8]=d*p+f*v+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,_=e*h+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(s*c-u*n)*g,t[2]=(a*n-s*o)*g,t[3]=d*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new zt;function ag(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vv(){const i=aa("canvas");return i.style.display="block",i}const Mf={};function Xr(i){i in Mf||(Mf[i]=!0,console.warn(i))}function Gv(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ef=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bf=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wv(){const i={enabled:!0,workingColorSpace:io,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(s.r=jr(s.r),s.g=jr(s.g),s.b=jr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?Il:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[io]:{primaries:t,whitePoint:n,transfer:Il,toXYZ:Ef,fromXYZ:bf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Ef,fromXYZ:bf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}const Kt=Wv();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _r;class Xv{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{_r===void 0&&(_r=aa("canvas")),_r.width=t.width,_r.height=t.height;const s=_r.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=_r}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=aa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let jv=0;class md{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=Fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ac(s[o].image)):r.push(Ac(s[o]))}else r=Ac(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yv=0;const Cc=new D;class Ve extends ur{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=ks,s=ks,r=ai,o=zs,a=Kn,l=pi,c=Ve.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Fi(),this.name="",this.source=new md(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cc).x}get height(){return this.source.getSize(Cc).y}get depth(){return this.source.getSize(Cc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ta:t.x=t.x-Math.floor(t.x);break;case ks:t.x=t.x<0?0:1;break;case Vu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ta:t.y=t.y-Math.floor(t.y);break;case ks:t.y=t.y<0?0:1;break;case Vu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Zm;Ve.DEFAULT_ANISOTROPY=1;class Yt{constructor(t=0,e=0,n=0,s=1){Yt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(f+1)/2,b=(p+1)/2,T=(u+d)/4,A=(h+g)/4,P=(_+m)/4;return S>v&&S>b?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=A/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=P/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=P/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Nt(this.x,t.x,e.x),this.y=Nt(this.y,t.y,e.y),this.z=Nt(this.z,t.z,e.z),this.w=Nt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Nt(this.x,t,e),this.y=Nt(this.y,t,e),this.z=Nt(this.z,t,e),this.w=Nt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qv extends ur{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Yt(0,0,t,e),this.scissorTest=!1,this.viewport=new Yt(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ve(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new md(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends qv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lg extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kv extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Da.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(t.matrixWorld),this.union(Da)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),Ia.subVectors(this.max,wo),vr.subVectors(t.a,wo),xr.subVectors(t.b,wo),yr.subVectors(t.c,wo),Ki.subVectors(xr,vr),$i.subVectors(yr,xr),ws.subVectors(vr,yr);let e=[0,-Ki.z,Ki.y,0,-$i.z,$i.y,0,-ws.z,ws.y,Ki.z,0,-Ki.x,$i.z,0,-$i.x,ws.z,0,-ws.x,-Ki.y,Ki.x,0,-$i.y,$i.x,0,-ws.y,ws.x,0];return!Rc(e,vr,xr,yr,Ia)||(e=[1,0,0,0,1,0,0,0,1],!Rc(e,vr,xr,yr,Ia))?!1:(La.crossVectors(Ki,$i),e=[La.x,La.y,La.z],Rc(e,vr,xr,yr,Ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Mi=[new D,new D,new D,new D,new D,new D,new D,new D],Gn=new D,Da=new Cn,vr=new D,xr=new D,yr=new D,Ki=new D,$i=new D,ws=new D,wo=new D,Ia=new D,La=new D,Ts=new D;function Rc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ts.fromArray(i,r);const a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=t.dot(Ts),c=e.dot(Ts),u=n.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $v=new Cn,To=new D,Pc=new D;class Qn{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$v.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;To.subVectors(t,this.center);const e=To.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(To,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(To.copy(t.center).add(Pc)),this.expandByPoint(To.copy(t.center).sub(Pc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ei=new D,Dc=new D,Ua=new D,Zi=new D,Ic=new D,Oa=new D,Lc=new D;class Ma{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ei.copy(this.origin).addScaledVector(this.direction,e),Ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Dc.copy(t).add(e).multiplyScalar(.5),Ua.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(Dc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ua),a=Zi.dot(this.direction),l=-Zi.dot(Ua),c=Zi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Dc).addScaledVector(Ua,d),f}intersectSphere(t,e){Ei.subVectors(t.center,this.origin);const n=Ei.dot(this.direction),s=Ei.dot(Ei)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ei)!==null}intersectTriangle(t,e,n,s,r){Ic.subVectors(e,t),Oa.subVectors(n,t),Lc.crossVectors(Ic,Oa);let o=this.direction.dot(Lc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,t);const l=a*this.direction.dot(Oa.crossVectors(Zi,Oa));if(l<0)return null;const c=a*this.direction.dot(Ic.cross(Zi));if(c<0||l+c>o)return null;const u=-a*Zi.dot(Lc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,o,a,l,c,u,h,d,f,_,g,m){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,f,_,g,m)}set(t,e,n,s,r,o,a,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Sr.setFromMatrixColumn(t,0).length(),r=1/Sr.setFromMatrixColumn(t,1).length(),o=1/Sr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;e[0]=d+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;e[0]=d-g*a,e[4]=-o*h,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,_=a*u,g=a*h;e[0]=l*u,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-d*h,e[8]=_*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+_,e[10]=d-g*h}else if(t.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=o*u,e[9]=f*h-_,e[2]=_*h-f,e[6]=a*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zv,t,Jv)}lookAt(t,e,n){const s=this.elements;return gn.subVectors(t,e),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ji.crossVectors(n,gn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ji.crossVectors(n,gn)),Ji.normalize(),Fa.crossVectors(gn,Ji),s[0]=Ji.x,s[4]=Fa.x,s[8]=gn.x,s[1]=Ji.y,s[5]=Fa.y,s[9]=gn.y,s[2]=Ji.z,s[6]=Fa.z,s[10]=gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],S=n[7],v=n[11],b=n[15],T=s[0],A=s[4],P=s[8],y=s[12],x=s[1],C=s[5],F=s[9],z=s[13],G=s[2],L=s[6],U=s[10],N=s[14],k=s[3],K=s[7],$=s[11],tt=s[15];return r[0]=o*T+a*x+l*G+c*k,r[4]=o*A+a*C+l*L+c*K,r[8]=o*P+a*F+l*U+c*$,r[12]=o*y+a*z+l*N+c*tt,r[1]=u*T+h*x+d*G+f*k,r[5]=u*A+h*C+d*L+f*K,r[9]=u*P+h*F+d*U+f*$,r[13]=u*y+h*z+d*N+f*tt,r[2]=_*T+g*x+m*G+p*k,r[6]=_*A+g*C+m*L+p*K,r[10]=_*P+g*F+m*U+p*$,r[14]=_*y+g*z+m*N+p*tt,r[3]=M*T+S*x+v*G+b*k,r[7]=M*A+S*C+v*L+b*K,r[11]=M*P+S*F+v*U+b*$,r[15]=M*y+S*z+v*N+b*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+g*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],M=h*m*c-g*d*c+g*l*f-a*m*f-h*l*p+a*d*p,S=_*d*c-u*m*c-_*l*f+o*m*f+u*l*p-o*d*p,v=u*g*c-_*h*c+_*a*f-o*g*f-u*a*p+o*h*p,b=_*h*l-u*g*l-_*a*d+o*g*d+u*a*m-o*h*m,T=e*M+n*S+s*v+r*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=M*A,t[1]=(g*d*r-h*m*r-g*s*f+n*m*f+h*s*p-n*d*p)*A,t[2]=(a*m*r-g*l*r+g*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*A,t[4]=S*A,t[5]=(u*m*r-_*d*r+_*s*f-e*m*f-u*s*p+e*d*p)*A,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=v*A,t[9]=(_*h*r-u*g*r-_*n*f+e*g*f+u*n*p-e*h*p)*A,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*p+e*a*p)*A,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*A,t[12]=b*A,t[13]=(u*g*s-_*h*s+_*n*d-e*g*d-u*n*m+e*h*m)*A,t[14]=(_*a*s-o*g*s-_*n*l+e*g*l+o*n*m-e*a*m)*A,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,_=r*h,g=o*u,m=o*h,p=a*h,M=l*c,S=l*u,v=l*h,b=n.x,T=n.y,A=n.z;return s[0]=(1-(g+p))*b,s[1]=(f+v)*b,s[2]=(_-S)*b,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(_+S)*A,s[9]=(m-M)*A,s[10]=(1-(d+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Sr.set(s[0],s[1],s[2]).length();const o=Sr.set(s[4],s[5],s[6]).length(),a=Sr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Wn.copy(this);const c=1/r,u=1/o,h=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,e.setFromRotationMatrix(Wn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ci,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let _,g;if(l)_=r/(o-r),g=o*r/(o-r);else if(a===ci)_=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ll)_=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ci,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let _,g;if(l)_=1/(o-r),g=o/(o-r);else if(a===ci)_=-2/(o-r),g=-(o+r)/(o-r);else if(a===Ll)_=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Sr=new D,Wn=new te,Zv=new D(0,0,0),Jv=new D(1,1,1),Ji=new D,Fa=new D,gn=new D,wf=new te,Tf=new ir;class mi{constructor(t=0,e=0,n=0,s=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tf.setFromEuler(this),this.setFromQuaternion(Tf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class gd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qv=0;const Af=new D,Mr=new ir,bi=new te,Na=new D,Ao=new D,tx=new D,ex=new ir,Cf=new D(1,0,0),Rf=new D(0,1,0),Pf=new D(0,0,1),Df={type:"added"},nx={type:"removed"},Er={type:"childadded",child:null},Uc={type:"childremoved",child:null};class Fe extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new D,e=new mi,n=new ir,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new zt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(Cf,t)}rotateY(t){return this.rotateOnAxis(Rf,t)}rotateZ(t){return this.rotateOnAxis(Pf,t)}translateOnAxis(t,e){return Af.copy(t).applyQuaternion(this.quaternion),this.position.add(Af.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cf,t)}translateY(t){return this.translateOnAxis(Rf,t)}translateZ(t){return this.translateOnAxis(Pf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Na.copy(t):Na.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Ao,Na,this.up):bi.lookAt(Na,Ao,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Mr.setFromRotationMatrix(bi),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Df),Er.child=t,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nx),Uc.child=t,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Df),Er.child=t,this.dispatchEvent(Er),Er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,tx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,ex,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new D(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new D,wi=new D,Oc=new D,Ti=new D,br=new D,wr=new D,If=new D,Fc=new D,Nc=new D,Bc=new D,kc=new Yt,zc=new Yt,Hc=new Yt;class Yn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),wi.subVectors(n,e),Oc.subVectors(t,e);const o=Xn.dot(Xn),a=Xn.dot(wi),l=Xn.dot(Oc),c=wi.dot(wi),u=wi.dot(Oc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return kc.setScalar(0),zc.setScalar(0),Hc.setScalar(0),kc.fromBufferAttribute(t,e),zc.fromBufferAttribute(t,n),Hc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(kc,r.x),o.addScaledVector(zc,r.y),o.addScaledVector(Hc,r.z),o}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),wi.subVectors(t,e),Xn.cross(wi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Xn.cross(wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;br.subVectors(s,n),wr.subVectors(r,n),Fc.subVectors(t,n);const l=br.dot(Fc),c=wr.dot(Fc);if(l<=0&&c<=0)return e.copy(n);Nc.subVectors(t,s);const u=br.dot(Nc),h=wr.dot(Nc);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(br,o);Bc.subVectors(t,r);const f=br.dot(Bc),_=wr.dot(Bc);if(_>=0&&f<=_)return e.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(wr,a);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return If.subVectors(r,s),a=(h-u)/(h-u+(f-_)),e.copy(s).addScaledVector(If,a);const p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(br,o).addScaledVector(wr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Vc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=pd(t,1),e=Nt(e,0,1),n=Nt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Vc(o,r,t+1/3),this.g=Vc(o,r,t),this.b=Vc(o,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=cg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return Kt.workingToColorSpace(je.copy(this),t),Math.round(Nt(je.r*255,0,255))*65536+Math.round(Nt(je.g*255,0,255))*256+Math.round(Nt(je.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(je.copy(this),e);const n=je.r,s=je.g,r=je.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=xn){Kt.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(Ba);const n=Vo(Qi.h,Ba.h,e),s=Vo(Qi.s,Ba.s,e),r=Vo(Qi.l,Ba.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Wt;Wt.NAMES=cg;let ix=0;class hr extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=Wr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Iu,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(n.blending=this.blending),this.side!==fs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Du&&(n.blendSrc=this.blendSrc),this.blendDst!==Iu&&(n.blendDst=this.blendDst),this.blendEquation!==Fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _d extends hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new D,ka=new Ft;let sx=0;class Hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mh,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ka.fromBufferAttribute(this,e),ka.applyMatrix3(t),this.setXY(e,ka.x,ka.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mh&&(t.usage=this.usage),t}}class ug extends Hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hg extends Hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class De extends Hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rx=0;const On=new te,Gc=new Fe,Tr=new D,_n=new Cn,Co=new Cn,Oe=new D;class We extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ag(t)?hg:ug)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return Gc.lookAt(t),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new De(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(_n.min,Co.min),_n.expandByPoint(Oe),Oe.addVectors(_n.max,Co.max),_n.expandByPoint(Oe)):(_n.expandByPoint(Co.min),_n.expandByPoint(Co.max))}_n.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Oe.fromBufferAttribute(a,c),l&&(Tr.fromBufferAttribute(t,c),Oe.add(Tr)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new D,l[P]=new D;const c=new D,u=new D,h=new D,d=new Ft,f=new Ft,_=new Ft,g=new D,m=new D;function p(P,y,x){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,y),_.fromBufferAttribute(r,x),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const C=1/(f.x*_.y-_.x*f.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(C),a[P].add(g),a[y].add(g),a[x].add(g),l[P].add(m),l[y].add(m),l[x].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,y=M.length;P<y;++P){const x=M[P],C=x.start,F=x.count;for(let z=C,G=C+F;z<G;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new D,v=new D,b=new D,T=new D;function A(P){b.fromBufferAttribute(s,P),T.copy(b);const y=a[P];S.copy(y),S.sub(b.multiplyScalar(b.dot(y))).normalize(),v.crossVectors(T,y);const C=v.dot(l[P])<0?-1:1;o.setXYZW(P,S.x,S.y,S.z,C)}for(let P=0,y=M.length;P<y;++P){const x=M[P],C=x.start,F=x.count;for(let z=C,G=C+F;z<G;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new Hn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lf=new te,As=new Ma,za=new Qn,Uf=new D,Ha=new D,Va=new D,Ga=new D,Wc=new D,Wa=new D,Of=new D,Xa=new D;class Pe extends Fe{constructor(t=new We,e=new _d){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Wc.fromBufferAttribute(h,t),o?Wa.addScaledVector(Wc,u):Wa.addScaledVector(Wc.sub(e),u))}e.add(Wa)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),As.copy(t.ray).recast(t.near),!(za.containsPoint(As.origin)===!1&&(As.intersectSphere(za,Uf)===null||As.origin.distanceToSquared(Uf)>(t.far-t.near)**2))&&(Lf.copy(r).invert(),As.copy(t.ray).applyMatrix4(Lf),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=S;v<b;v+=3){const T=a.getX(v),A=a.getX(v+1),P=a.getX(v+2);s=ja(this,p,t,n,c,u,h,T,A,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=ja(this,o,t,n,c,u,h,M,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=S;v<b;v+=3){const T=v,A=v+1,P=v+2;s=ja(this,p,t,n,c,u,h,T,A,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=m,S=m+1,v=m+2;s=ja(this,o,t,n,c,u,h,M,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ox(i,t,e,n,s,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===fs,a),l===null)return null;Xa.copy(a),Xa.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Xa);return c<e.near||c>e.far?null:{distance:c,point:Xa.clone(),object:i}}function ja(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ha),i.getVertexPosition(l,Va),i.getVertexPosition(c,Ga);const u=ox(i,t,e,n,Ha,Va,Ga,Of);if(u){const h=new D;Yn.getBarycoord(Of,Ha,Va,Ga,h),s&&(u.uv=Yn.getInterpolatedAttribute(s,a,l,c,h,new Ft)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,a,l,c,h,new Ft)),o&&(u.normal=Yn.getInterpolatedAttribute(o,a,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Yn.getNormal(Ha,Va,Ga,d.normal),u.face=d,u.barycoord=h}return u}class Ea extends We{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(u,3)),this.setAttribute("uv",new De(h,2));function _(g,m,p,M,S,v,b,T,A,P,y){const x=v/A,C=b/P,F=v/2,z=b/2,G=T/2,L=A+1,U=P+1;let N=0,k=0;const K=new D;for(let $=0;$<U;$++){const tt=$*C-z;for(let ut=0;ut<L;ut++){const at=ut*x-F;K[g]=at*M,K[m]=tt*S,K[p]=G,c.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[p]=T>0?1:-1,u.push(K.x,K.y,K.z),h.push(ut/A),h.push(1-$/P),N+=1}}for(let $=0;$<P;$++)for(let tt=0;tt<A;tt++){const ut=d+tt+L*$,at=d+tt+L*($+1),ft=d+(tt+1)+L*($+1),H=d+(tt+1)+L*$;l.push(ut,at,H),l.push(at,ft,H),k+=6}a.addGroup(f,k,y),f+=k,d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function so(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=so(i[e]);for(const s in n)t[s]=n[s]}return t}function ax(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dg(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const vd={clone:so,merge:Qe};var lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=so(t.uniforms),this.uniformsGroups=ax(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fg extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new D,Ff=new Ft,Nf=new Ft;class Sn extends fg{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,Ff,Nf),e.subVectors(Nf,Ff)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ho*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ar=-90,Cr=1;class ux extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Ar,Cr,t,e);s.layers=this.layers,this.add(s);const r=new Sn(Ar,Cr,t,e);r.layers=this.layers,this.add(r);const o=new Sn(Ar,Cr,t,e);o.layers=this.layers,this.add(o);const a=new Sn(Ar,Cr,t,e);a.layers=this.layers,this.add(a);const l=new Sn(Ar,Cr,t,e);l.layers=this.layers,this.add(l);const c=new Sn(Ar,Cr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ll)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class pg extends Ve{constructor(t=[],e=eo,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hx extends sr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pg(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ea(5,5,5),r=new Hi({name:"CubemapFromEquirect",uniforms:so(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:cs});r.uniforms.tEquirect.value=e;const o=new Pe(s,r),a=e.minFilter;return e.minFilter===zs&&(e.minFilter=ai),new ux(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}let Li=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}};const dx={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class fx extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class px{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mh,this.updateRanges=[],this.version=0,this.uuid=Fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new D;class ss{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ss(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ya=new D,Bf=new D;class jc extends Fe{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,s=e.length;n<s;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const s=this.levels;let r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const s=e.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,s;for(n=1,s=e.length;n<s;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Ya.setFromMatrixPosition(this.matrixWorld);const s=t.ray.origin.distanceTo(Ya);this.getObjectForDistance(s).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Ya.setFromMatrixPosition(t.matrixWorld),Bf.setFromMatrixPosition(this.matrixWorld);const n=Ya.distanceTo(Bf)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let o=e[s].distance;if(e[s].object.visible&&(o-=o*e[s].hysteresis),n>=o)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const o=n[s];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}class mx extends Ve{constructor(t=null,e=1,n=1,s,r,o,a,l,c=wn,u=wn,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul extends Hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Rr=new te,kf=new te,qa=[],zf=new Cn,gx=new te,Ro=new Pe,Po=new Qn;class Hf extends Pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rr),zf.copy(t.boundingBox).applyMatrix4(Rr),this.boundingBox.union(zf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rr),Po.copy(t.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(Po)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ro.geometry=this.geometry,Ro.material=this.material,Ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(n),t.ray.intersectsSphere(Po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rr),kf.multiplyMatrices(n,Rr),Ro.matrixWorld=kf,Ro.raycast(t,qa);for(let o=0,a=qa.length;o<a;o++){const l=qa[o];l.instanceId=r,l.object=this,e.push(l)}qa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new mx(new Float32Array(s*this.count),s,this.count,ud,li));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Yc=new D,_x=new D,vx=new zt;class Pi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Yc.subVectors(n,e).cross(_x.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Yc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vx.getNormalMatrix(t),s=this.coplanarPoint(Yc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new Qn,xx=new Ft(.5,.5),Ka=new D;class xd{constructor(t=new Pi,e=new Pi,n=new Pi,s=new Pi,r=new Pi,o=new Pi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],_=r[8],g=r[9],m=r[10],p=r[11],M=r[12],S=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-o,f-u,p-_,b-M).normalize(),s[1].setComponents(c+o,f+u,p+_,b+M).normalize(),s[2].setComponents(c+a,f+h,p+g,b+S).normalize(),s[3].setComponents(c-a,f-h,p-g,b-S).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,b-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,b-v).normalize(),e===ci)s[5].setComponents(c+l,f+d,p+m,b+v).normalize();else if(e===Ll)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);const e=xx.distanceTo(t.center);return Cs.radius=.7071067811865476+e,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ka.x=s.normal.x>0?t.max.x:t.min.x,Ka.y=s.normal.y>0?t.max.y:t.min.y,Ka.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mg extends hr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ol=new D,Fl=new D,Vf=new te,Do=new Ma,$a=new Qn,qc=new D,Gf=new D;class yx extends Fe{constructor(t=new We,e=new mg){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ol.fromBufferAttribute(e,s-1),Fl.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ol.distanceTo(Fl);t.setAttribute("lineDistance",new De(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,t.ray.intersectsSphere($a)===!1)return;Vf.copy(s).invert(),Do.copy(t.ray).applyMatrix4(Vf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=u.getX(g),M=u.getX(g+1),S=Za(this,t,Do,l,p,M,g);S&&e.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(f),p=Za(this,t,Do,l,g,m,_-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=Za(this,t,Do,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=Za(this,t,Do,l,_-1,f,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Za(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Ol.fromBufferAttribute(a,s),Fl.fromBufferAttribute(a,r),e.distanceSqToSegment(Ol,Fl,qc,Gf)>n)return;qc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qc);if(!(c<t.near||c>t.far))return{distance:c,point:Gf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class yd extends hr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wf=new te,gh=new Ma,Ja=new Qn,Qa=new D;class gg extends Fe{constructor(t=new We,e=new yd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,t.ray.intersectsSphere(Ja)===!1)return;Wf.copy(s).invert(),gh.copy(t.ray).applyMatrix4(Wf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);Qa.fromBufferAttribute(h,m),Xf(Qa,m,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=d,g=f;_<g;_++)Qa.fromBufferAttribute(h,_),Xf(Qa,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xf(i,t,e,n,s,r,o){const a=gh.distanceSqToPoint(i);if(a<e){const l=new D;gh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class _g extends Ve{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vg extends Ve{constructor(t,e,n=nr,s,r,o,a=wn,l=wn,c,u=ia,h=1){if(u!==ia&&u!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new md(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class lc extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let S=0;S<c;S++){const v=S*h-r;_.push(v,-M,0),g.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,v=M+c*(p+1),b=M+1+c*(p+1),T=M+1+c*p;f.push(S,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new De(_,3)),this.setAttribute("normal",new De(g,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lc(t.width,t.height,t.widthSegments,t.heightSegments)}}class ro extends We{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,f=new D,_=new Ft;for(let g=0;g<=s;g++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,u.push(_.x,_.y)}h+=d}for(let g=0;g<s;g++){const m=g*(n+1);for(let p=0;p<n;p++){const M=p+m,S=M,v=M+n+1,b=M+n+2,T=M+1;a.push(S,v,T),a.push(v,b,T)}}this.setIndex(a),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Br extends We{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,d=new D,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const T=b/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+S*a),h.y=t*Math.cos(o+S*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+S*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(T+v,1-S),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const S=u[p][M+1],v=u[p][M],b=u[p+1][M],T=u[p+1][M+1];(p!==0||o>0)&&f.push(S,v,T),(p!==n-1||l<Math.PI)&&f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new De(_,3)),this.setAttribute("normal",new De(g,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sx extends We{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new D,r=new D;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let _=d,g=d+f;_<g;_+=3)for(let m=0;m<3;m++){const p=a.getX(_+m),M=a.getX(_+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,M),jf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),jf(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new De(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function jf(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class Ui extends hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rg,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mx extends hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ex extends hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class bx{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const wx=new bx;class Sd{constructor(t){this.manager=t!==void 0?t:wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Sd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pr=new WeakMap;class Tx extends Sd{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Kc.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=Pr.get(o);h===void 0&&(h=[],Pr.set(o,h)),h.push({onLoad:e,onError:s})}return o}const a=aa("img");function l(){u(),e&&e(this);const h=Pr.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Pr.delete(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),Kc.remove(`image:${t}`);const d=Pr.get(this)||[];for(let f=0;f<d.length;f++){const _=d[f];_.onError&&_.onError(h)}Pr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Kc.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Ax extends Sd{constructor(t){super(t)}load(t,e,n,s){const r=new Ve,o=new Tx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class xg extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const $c=new te,Yf=new D,qf=new D;class Cx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xd,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yf),qf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qf),e.updateMatrixWorld(),$c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Kf=new te,Io=new D,Zc=new D;class Rx extends Cx{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new Yt(2,1,1,1),new Yt(0,1,1,1),new Yt(3,1,1,1),new Yt(1,1,1,1),new Yt(3,0,1,1),new Yt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Io.setFromMatrixPosition(t.matrixWorld),n.position.copy(Io),Zc.copy(n.position),Zc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zc),n.updateMatrixWorld(),s.makeTranslation(-Io.x,-Io.y,-Io.z),Kf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kf,n.coordinateSystem,n.reversedDepth)}}class Px extends xg{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Dx extends fg{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ix extends xg{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lx extends We{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Ux extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class _h extends px{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const $f=new te;class Ox{constructor(t,e,n=0,s=1/0){this.ray=new Ma(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $f.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($f),this}intersectObject(t,e=!0,n=[]){return vh(t,this,n,e),n.sort(Zf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)vh(t[s],this,n,e);return n.sort(Zf),n}}function Zf(i,t){return i.distance-t.distance}function vh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)vh(r[o],t,e,!0)}}class Jf{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Nt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Nt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qf=new D,tl=new D,Dr=new D,Ir=new D,Jc=new D,Fx=new D,Nx=new D;class Bx{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Qf.subVectors(t,this.start),tl.subVectors(this.end,this.start);const n=tl.dot(tl);let r=tl.dot(Qf)/n;return e&&(r=Nt(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Fx,n=Nx){const s=10000000000000001e-32;let r,o;const a=this.start,l=t.start,c=this.end,u=t.end;Dr.subVectors(c,a),Ir.subVectors(u,l),Jc.subVectors(a,l);const h=Dr.dot(Dr),d=Ir.dot(Ir),f=Ir.dot(Jc);if(h<=s&&d<=s)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(h<=s)r=0,o=f/d,o=Nt(o,0,1);else{const _=Dr.dot(Jc);if(d<=s)o=0,r=Nt(-_/h,0,1);else{const g=Dr.dot(Ir),m=h*d-g*g;m!==0?r=Nt((g*f-_*d)/m,0,1):r=0,o=(g*r+f)/d,o<0?(o=0,r=Nt(-_/h,0,1)):o>1&&(o=1,r=Nt((g-_)/h,0,1))}}return e.copy(a).add(Dr.multiplyScalar(r)),n.copy(l).add(Ir.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class kx extends ur{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function tp(i,t,e,n){const s=zx(n);switch(e){case eg:return i*t;case ud:return i*t/s.components*s.byteLength;case hd:return i*t/s.components*s.byteLength;case ig:return i*t*2/s.components*s.byteLength;case dd:return i*t*2/s.components*s.byteLength;case ng:return i*t*3/s.components*s.byteLength;case Kn:return i*t*4/s.components*s.byteLength;case fd:return i*t*4/s.components*s.byteLength;case vl:case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case yl:case Sl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wu:case ju:return Math.max(i,16)*Math.max(t,8)/4;case Gu:case Xu:return Math.max(i,8)*Math.max(t,8)/2;case Yu:case qu:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ku:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $u:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zu:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ju:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case th:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case eh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case nh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ih:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case sh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case rh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case lh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ch:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ml:case uh:case hh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sg:case dh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case fh:case ph:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zx(i){switch(i){case pi:case Jm:return{byteLength:1,components:1};case ea:case Qm:case Sa:return{byteLength:2,components:1};case ld:case cd:return{byteLength:2,components:4};case nr:case ad:case li:return{byteLength:4,components:1};case tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yg(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hx(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$x=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ty=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ey=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ny=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,My=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ry=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Iy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ly=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ky=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_S=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,US=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,OS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,NS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$S=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Vx,alphahash_pars_fragment:Gx,alphamap_fragment:Wx,alphamap_pars_fragment:Xx,alphatest_fragment:jx,alphatest_pars_fragment:Yx,aomap_fragment:qx,aomap_pars_fragment:Kx,batching_pars_vertex:$x,batching_vertex:Zx,begin_vertex:Jx,beginnormal_vertex:Qx,bsdfs:ty,iridescence_fragment:ey,bumpmap_pars_fragment:ny,clipping_planes_fragment:iy,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:ry,clipping_planes_vertex:oy,color_fragment:ay,color_pars_fragment:ly,color_pars_vertex:cy,color_vertex:uy,common:hy,cube_uv_reflection_fragment:dy,defaultnormal_vertex:fy,displacementmap_pars_vertex:py,displacementmap_vertex:my,emissivemap_fragment:gy,emissivemap_pars_fragment:_y,colorspace_fragment:vy,colorspace_pars_fragment:xy,envmap_fragment:yy,envmap_common_pars_fragment:Sy,envmap_pars_fragment:My,envmap_pars_vertex:Ey,envmap_physical_pars_fragment:Uy,envmap_vertex:by,fog_vertex:wy,fog_pars_vertex:Ty,fog_fragment:Ay,fog_pars_fragment:Cy,gradientmap_pars_fragment:Ry,lightmap_pars_fragment:Py,lights_lambert_fragment:Dy,lights_lambert_pars_fragment:Iy,lights_pars_begin:Ly,lights_toon_fragment:Oy,lights_toon_pars_fragment:Fy,lights_phong_fragment:Ny,lights_phong_pars_fragment:By,lights_physical_fragment:ky,lights_physical_pars_fragment:zy,lights_fragment_begin:Hy,lights_fragment_maps:Vy,lights_fragment_end:Gy,logdepthbuf_fragment:Wy,logdepthbuf_pars_fragment:Xy,logdepthbuf_pars_vertex:jy,logdepthbuf_vertex:Yy,map_fragment:qy,map_pars_fragment:Ky,map_particle_fragment:$y,map_particle_pars_fragment:Zy,metalnessmap_fragment:Jy,metalnessmap_pars_fragment:Qy,morphinstance_vertex:tS,morphcolor_vertex:eS,morphnormal_vertex:nS,morphtarget_pars_vertex:iS,morphtarget_vertex:sS,normal_fragment_begin:rS,normal_fragment_maps:oS,normal_pars_fragment:aS,normal_pars_vertex:lS,normal_vertex:cS,normalmap_pars_fragment:uS,clearcoat_normal_fragment_begin:hS,clearcoat_normal_fragment_maps:dS,clearcoat_pars_fragment:fS,iridescence_pars_fragment:pS,opaque_fragment:mS,packing:gS,premultiplied_alpha_fragment:_S,project_vertex:vS,dithering_fragment:xS,dithering_pars_fragment:yS,roughnessmap_fragment:SS,roughnessmap_pars_fragment:MS,shadowmap_pars_fragment:ES,shadowmap_pars_vertex:bS,shadowmap_vertex:wS,shadowmask_pars_fragment:TS,skinbase_vertex:AS,skinning_pars_vertex:CS,skinning_vertex:RS,skinnormal_vertex:PS,specularmap_fragment:DS,specularmap_pars_fragment:IS,tonemapping_fragment:LS,tonemapping_pars_fragment:US,transmission_fragment:OS,transmission_pars_fragment:FS,uv_pars_fragment:NS,uv_pars_vertex:BS,uv_vertex:kS,worldpos_vertex:zS,background_vert:HS,background_frag:VS,backgroundCube_vert:GS,backgroundCube_frag:WS,cube_vert:XS,cube_frag:jS,depth_vert:YS,depth_frag:qS,distanceRGBA_vert:KS,distanceRGBA_frag:$S,equirect_vert:ZS,equirect_frag:JS,linedashed_vert:QS,linedashed_frag:tM,meshbasic_vert:eM,meshbasic_frag:nM,meshlambert_vert:iM,meshlambert_frag:sM,meshmatcap_vert:rM,meshmatcap_frag:oM,meshnormal_vert:aM,meshnormal_frag:lM,meshphong_vert:cM,meshphong_frag:uM,meshphysical_vert:hM,meshphysical_frag:dM,meshtoon_vert:fM,meshtoon_frag:pM,points_vert:mM,points_frag:gM,shadow_vert:_M,shadow_frag:vM,sprite_vert:xM,sprite_frag:yM},ct={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},on={basic:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Qe([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Qe([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Qe([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Qe([ct.points,ct.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Qe([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Qe([ct.common,ct.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Qe([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Qe([ct.sprite,ct.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Qe([ct.common,ct.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Qe([ct.lights,ct.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};on.physical={uniforms:Qe([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const el={r:0,b:0,g:0},Rs=new mi,SM=new te;function MM(i,t,e,n,s,r,o){const a=new Wt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function _(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function g(S){let v=!1;const b=_(S);b===null?p(a,l):b&&b.isColor&&(p(b,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){const b=_(v);b&&(b.isCubeTexture||b.mapping===ac)?(u===void 0&&(u=new Pe(new Ea(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:so(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Rs.copy(v.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(SM.makeRotationFromEuler(Rs)),u.material.toneMapped=Kt.getTransfer(b.colorSpace)!==ne,(h!==b||d!==b.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Pe(new lc(2,2),new Hi({name:"BackgroundMaterial",uniforms:so(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(b.colorSpace)!==ne,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(el,dg(i)),n.buffers.color.setClear(el.r,el.g,el.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:m,dispose:M}}function EM(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,C,F,z,G){let L=!1;const U=h(z,F,C);r!==U&&(r=U,c(r.object)),L=f(x,z,F,G),L&&_(x,z,F,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,v(x,C,F,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,C,F){const z=F.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let L=G[C.id];L===void 0&&(L={},G[C.id]=L);let U=L[z];return U===void 0&&(U=d(l()),L[z]=U),U}function d(x){const C=[],F=[],z=[];for(let G=0;G<e;G++)C[G]=0,F[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:z,object:x,attributes:{},index:null}}function f(x,C,F,z){const G=r.attributes,L=C.attributes;let U=0;const N=F.getAttributes();for(const k in N)if(N[k].location>=0){const $=G[k];let tt=L[k];if(tt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(tt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(tt=x.instanceColor)),$===void 0||$.attribute!==tt||tt&&$.data!==tt.data)return!0;U++}return r.attributesNum!==U||r.index!==z}function _(x,C,F,z){const G={},L=C.attributes;let U=0;const N=F.getAttributes();for(const k in N)if(N[k].location>=0){let $=L[k];$===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&($=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&($=x.instanceColor));const tt={};tt.attribute=$,$&&$.data&&(tt.data=$.data),G[k]=tt,U++}r.attributes=G,r.attributesNum=U,r.index=z}function g(){const x=r.newAttributes;for(let C=0,F=x.length;C<F;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const F=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;F[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),G[x]!==C&&(i.vertexAttribDivisor(x,C),G[x]=C)}function M(){const x=r.newAttributes,C=r.enabledAttributes;for(let F=0,z=C.length;F<z;F++)C[F]!==x[F]&&(i.disableVertexAttribArray(F),C[F]=0)}function S(x,C,F,z,G,L,U){U===!0?i.vertexAttribIPointer(x,C,F,G,L):i.vertexAttribPointer(x,C,F,z,G,L)}function v(x,C,F,z){g();const G=z.attributes,L=F.getAttributes(),U=C.defaultAttributeValues;for(const N in L){const k=L[N];if(k.location>=0){let K=G[N];if(K===void 0&&(N==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),N==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const $=K.normalized,tt=K.itemSize,ut=t.get(K);if(ut===void 0)continue;const at=ut.buffer,ft=ut.type,H=ut.bytesPerElement,rt=ft===i.INT||ft===i.UNSIGNED_INT||K.gpuType===ad;if(K.isInterleavedBufferAttribute){const Q=K.data,St=Q.stride,Et=K.offset;if(Q.isInstancedInterleavedBuffer){for(let Ct=0;Ct<k.locationSize;Ct++)p(k.location+Ct,Q.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ct=0;Ct<k.locationSize;Ct++)m(k.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Ct=0;Ct<k.locationSize;Ct++)S(k.location+Ct,tt/k.locationSize,ft,$,St*H,(Et+tt/k.locationSize*Ct)*H,rt)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)p(k.location+Q,K.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<k.locationSize;Q++)m(k.location+Q);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Q=0;Q<k.locationSize;Q++)S(k.location+Q,tt/k.locationSize,ft,$,tt*H,tt/k.locationSize*Q*H,rt)}}else if(U!==void 0){const $=U[N];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(k.location,$);break;case 3:i.vertexAttrib3fv(k.location,$);break;case 4:i.vertexAttrib4fv(k.location,$);break;default:i.vertexAttrib1fv(k.location,$)}}}}M()}function b(){P();for(const x in n){const C=n[x];for(const F in C){const z=C[F];for(const G in z)u(z[G].object),delete z[G];delete C[F]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const F in C){const z=C[F];for(const G in z)u(z[G].object),delete z[G];delete C[F]}delete n[x.id]}function A(x){for(const C in n){const F=n[C];if(F[x.id]===void 0)continue;const z=F[x.id];for(const G in z)u(z[G].object),delete z[G];delete F[x.id]}}function P(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function bM(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==pi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==li&&!P)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:b,maxSamples:T}}function TM(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Pi,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,S=M*4;let v=p.clippingState||null;l.value=v,v=u(_,d,S,f);for(let b=0;b!==S;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==g;++S,v+=4)o.copy(h[S]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function AM(i){let t=new WeakMap;function e(o,a){return a===zu?o.mapping=eo:a===Hu&&(o.mapping=no),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===zu||a===Hu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hx(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const kr=4,ep=[.125,.215,.35,.446,.526,.582],Ns=20,Qc=new Dx,np=new Wt;let tu=null,eu=0,nu=0,iu=!1;const Ls=(1+Math.sqrt(5))/2,Lr=1/Ls,ip=[new D(-Ls,Lr,0),new D(Ls,Lr,0),new D(-Lr,0,Ls),new D(Lr,0,Ls),new D(0,Ls,-Lr),new D(0,Ls,Lr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],CM=new D;class sp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=CM}=r;tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tu,eu,nu),this._renderer.xr.enabled=iu,t.scissorTest=!1,nl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===eo||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Sa,format:Kn,colorSpace:io,depthBuffer:!1},s=rp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rp(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RM(r)),this._blurMaterial=PM(r,t,e)}return s}_compileMaterial(t){const e=new Pe(this._lodPlanes[0],t);this._renderer.compile(e,Qc)}_sceneToCubeUV(t,e,n,s,r){const l=new Sn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(np),h.toneMapping=us,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const g=new _d({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new Pe(new Ea,g);let p=!1;const M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(np),p=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const b=this._cubeSize;nl(s,v*b,S>2?b:0,b,b),h.setRenderTarget(s),p&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===eo||t.mapping===no;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=op());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;nl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Qc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ip[(s-r-1)%ip.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ns-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):Ns;m>Ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ns}`);const p=[];let M=0;for(let A=0;A<Ns;++A){const P=A/g,y=Math.exp(-P*P/2);p.push(y),A===0?M+=y:A<m&&(M+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const v=this._sizeLods[s],b=3*v*(s>S-kr?s-S+kr:0),T=4*(this._cubeSize-v);nl(e,b,T,3*v,2*v),l.setRenderTarget(e),l.render(h,Qc)}}function RM(i){const t=[],e=[],n=[];let s=i;const r=i-kr+1+ep.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-kr?l=ep[o-i+kr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),S=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let T=0;T<f;T++){const A=T%3*2/3-1,P=T>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];M.set(y,g*_*T),S.set(d,m*_*T);const x=[T,T,T,T,T,T];v.set(x,p*_*T)}const b=new We;b.setAttribute("position",new Hn(M,g)),b.setAttribute("uv",new Hn(S,m)),b.setAttribute("faceIndex",new Hn(v,p)),t.push(b),s>kr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rp(i,t,e){const n=new sr(i,t,e);return n.texture.mapping=ac,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nl(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function PM(i,t,e){const n=new Float32Array(Ns),s=new D(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function op(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function ap(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function Md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DM(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===zu||l===Hu,u=l===eo||l===no;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new sp(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new sp(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function IM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function LM(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let S=0,v=M.length;S<v;S+=3){const b=M[S+0],T=M[S+1],A=M[S+2];d.push(b,T,T,A,A,b)}}else if(_!==void 0){const M=_.array;g=_.version;for(let S=0,v=M.length/3-1;S<v;S+=3){const b=S+0,T=S+1,A=S+2;d.push(b,T,T,A,A,b)}}else return;const m=new(ag(d)?hg:ug)(d,1);m.version=g;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function UM(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,d*o,_),e.update(f,n,_))}function u(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M]*g[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function OM(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function FM(i,t,e){const n=new WeakMap,s=new Yt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let v=a.attributes.position.count*S,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const T=new Float32Array(v*b*4*h),A=new lg(T,v,b,h);A.type=li,A.needsUpdate=!0;const P=S*4;for(let x=0;x<h;x++){const C=m[x],F=p[x],z=M[x],G=v*b*4*x;for(let L=0;L<C.count;L++){const U=L*P;f===!0&&(s.fromBufferAttribute(C,L),T[G+U+0]=s.x,T[G+U+1]=s.y,T[G+U+2]=s.z,T[G+U+3]=0),_===!0&&(s.fromBufferAttribute(F,L),T[G+U+4]=s.x,T[G+U+5]=s.y,T[G+U+6]=s.z,T[G+U+7]=0),g===!0&&(s.fromBufferAttribute(z,L),T[G+U+8]=s.x,T[G+U+9]=s.y,T[G+U+10]=s.z,T[G+U+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new Ft(v,b)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function NM(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Sg=new Ve,lp=new vg(1,1),Mg=new lg,Eg=new Kv,bg=new pg,cp=[],up=[],hp=new Float32Array(16),dp=new Float32Array(9),fp=new Float32Array(4);function So(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=cp[s];if(r===void 0&&(r=new Float32Array(s),cp[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cc(i,t){let e=up[t];e===void 0&&(e=new Int32Array(t),up[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function BM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function zM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function HM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function VM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;fp.set(n),i.uniformMatrix2fv(this.addr,!1,fp),Le(e,n)}}function GM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;dp.set(n),i.uniformMatrix3fv(this.addr,!1,dp),Le(e,n)}}function WM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;hp.set(n),i.uniformMatrix4fv(this.addr,!1,hp),Le(e,n)}}function XM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function YM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function qM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function KM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $M(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function ZM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function JM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function QM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lp.compareFunction=og,r=lp):r=Sg,e.setTexture2D(t||r,s)}function tE(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eg,s)}function eE(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bg,s)}function nE(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Mg,s)}function iE(i){switch(i){case 5126:return BM;case 35664:return kM;case 35665:return zM;case 35666:return HM;case 35674:return VM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return XM;case 35667:case 35671:return jM;case 35668:case 35672:return YM;case 35669:case 35673:return qM;case 5125:return KM;case 36294:return $M;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return tE;case 35680:case 36300:case 36308:case 36293:return eE;case 36289:case 36303:case 36311:case 36292:return nE}}function sE(i,t){i.uniform1fv(this.addr,t)}function rE(i,t){const e=So(t,this.size,2);i.uniform2fv(this.addr,e)}function oE(i,t){const e=So(t,this.size,3);i.uniform3fv(this.addr,e)}function aE(i,t){const e=So(t,this.size,4);i.uniform4fv(this.addr,e)}function lE(i,t){const e=So(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cE(i,t){const e=So(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function uE(i,t){const e=So(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hE(i,t){i.uniform1iv(this.addr,t)}function dE(i,t){i.uniform2iv(this.addr,t)}function fE(i,t){i.uniform3iv(this.addr,t)}function pE(i,t){i.uniform4iv(this.addr,t)}function mE(i,t){i.uniform1uiv(this.addr,t)}function gE(i,t){i.uniform2uiv(this.addr,t)}function _E(i,t){i.uniform3uiv(this.addr,t)}function vE(i,t){i.uniform4uiv(this.addr,t)}function xE(i,t,e){const n=this.cache,s=t.length,r=cc(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Sg,r[o])}function yE(i,t,e){const n=this.cache,s=t.length,r=cc(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Eg,r[o])}function SE(i,t,e){const n=this.cache,s=t.length,r=cc(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bg,r[o])}function ME(i,t,e){const n=this.cache,s=t.length,r=cc(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Mg,r[o])}function EE(i){switch(i){case 5126:return sE;case 35664:return rE;case 35665:return oE;case 35666:return aE;case 35674:return lE;case 35675:return cE;case 35676:return uE;case 5124:case 35670:return hE;case 35667:case 35671:return dE;case 35668:case 35672:return fE;case 35669:case 35673:return pE;case 5125:return mE;case 36294:return gE;case 36295:return _E;case 36296:return vE;case 35678:case 36198:case 36298:case 36306:case 35682:return xE;case 35679:case 36299:case 36307:return yE;case 35680:case 36300:case 36308:case 36293:return SE;case 36289:case 36303:case 36311:case 36292:return ME}}class bE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=iE(e.type)}}class wE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=EE(e.type)}}class TE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const su=/(\w+)(\])?(\[|\.)?/g;function pp(i,t){i.seq.push(t),i.map[t.id]=t}function AE(i,t,e){const n=i.name,s=n.length;for(su.lastIndex=0;;){const r=su.exec(n),o=su.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pp(e,c===void 0?new bE(a,i,t):new wE(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new TE(a),pp(e,h)),e=h}}}class El{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);AE(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function mp(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const CE=37297;let RE=0;function PE(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const gp=new zt;function DE(i){Kt._getMatrix(gp,Kt.workingColorSpace,i);const t=`mat3( ${gp.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case Il:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function _p(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+PE(i.getShaderSource(t),a)}else return r}function IE(i,t){const e=DE(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function LE(i,t){let e;switch(t){case cv:e="Linear";break;case uv:e="Reinhard";break;case hv:e="Cineon";break;case $m:e="ACESFilmic";break;case fv:e="AgX";break;case pv:e="Neutral";break;case dv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const il=new D;function UE(){Kt.getLuminanceCoefficients(il);const i=il.x.toFixed(4),t=il.y.toFixed(4),e=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function FE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function NE(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fo(i){return i!==""}function vp(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const BE=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(i){return i.replace(BE,zE)}const kE=new Map;function zE(i,t){let e=Ht[t];if(e===void 0){const n=kE.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xh(e)}const HE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yp(i){return i.replace(HE,VE)}function VE(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function GE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ym?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ai&&(t="SHADOWMAP_TYPE_VSM"),t}function WE(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case eo:case no:t="ENVMAP_TYPE_CUBE";break;case ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function XE(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case no:t="ENVMAP_MODE_REFRACTION";break}return t}function jE(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Km:t="ENVMAP_BLENDING_MULTIPLY";break;case av:t="ENVMAP_BLENDING_MIX";break;case lv:t="ENVMAP_BLENDING_ADD";break}return t}function YE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function qE(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=GE(e),c=WE(e),u=XE(e),h=jE(e),d=YE(e),f=OE(e),_=FE(r),g=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fo).join(`
`),p.length>0&&(p+=`
`)):(m=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),p=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==us?"#define TONE_MAPPING":"",e.toneMapping!==us?Ht.tonemapping_pars_fragment:"",e.toneMapping!==us?LE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,IE("linearToOutputTexel",e.outputColorSpace),UE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fo).join(`
`)),o=xh(o),o=vp(o,e),o=xp(o,e),a=xh(a),a=vp(a,e),a=xp(a,e),o=yp(o),a=yp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,v=M+p+a,b=mp(s,s.VERTEX_SHADER,S),T=mp(s,s.FRAGMENT_SHADER,v);s.attachShader(g,b),s.attachShader(g,T),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(C){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(b)||"",G=s.getShaderInfoLog(T)||"",L=F.trim(),U=z.trim(),N=G.trim();let k=!0,K=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,T);else{const $=_p(s,b,"vertex"),tt=_p(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+$+`
`+tt)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(U===""||N==="")&&(K=!1);K&&(C.diagnostics={runnable:k,programLog:L,vertexShader:{log:U,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(b),s.deleteShader(T),P=new El(s,g),y=NE(s,g)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(g,CE)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=RE++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}let KE=0;class $E{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ZE(t),e.set(t,n)),n}}class ZE{constructor(t){this.id=KE++,this.code=t,this.usedTimes=0}}function JE(i,t,e,n,s,r,o){const a=new gd,l=new $E,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,C,F,z){const G=F.fog,L=z.geometry,U=y.isMeshStandardMaterial?F.environment:null,N=(y.isMeshStandardMaterial?e:t).get(y.envMap||U),k=N&&N.mapping===ac?N.image.height:null,K=_[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const $=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,tt=$!==void 0?$.length:0;let ut=0;L.morphAttributes.position!==void 0&&(ut=1),L.morphAttributes.normal!==void 0&&(ut=2),L.morphAttributes.color!==void 0&&(ut=3);let at,ft,H,rt;if(K){const Zt=on[K];at=Zt.vertexShader,ft=Zt.fragmentShader}else at=y.vertexShader,ft=y.fragmentShader,l.update(y),H=l.getVertexShaderID(y),rt=l.getFragmentShaderID(y);const Q=i.getRenderTarget(),St=i.state.buffers.depth.getReversed(),Et=z.isInstancedMesh===!0,Ct=z.isBatchedMesh===!0,fe=!!y.map,Xt=!!y.matcap,I=!!N,se=!!y.aoMap,Rt=!!y.lightMap,$t=!!y.bumpMap,At=!!y.normalMap,pe=!!y.displacementMap,_t=!!y.emissiveMap,Vt=!!y.metalnessMap,Ue=!!y.roughnessMap,Me=y.anisotropy>0,R=y.clearcoat>0,E=y.dispersion>0,W=y.iridescence>0,q=y.sheen>0,J=y.transmission>0,Y=Me&&!!y.anisotropyMap,Tt=R&&!!y.clearcoatMap,ot=R&&!!y.clearcoatNormalMap,Mt=R&&!!y.clearcoatRoughnessMap,bt=W&&!!y.iridescenceMap,it=W&&!!y.iridescenceThicknessMap,pt=q&&!!y.sheenColorMap,Lt=q&&!!y.sheenRoughnessMap,wt=!!y.specularMap,ht=!!y.specularColorMap,kt=!!y.specularIntensityMap,O=J&&!!y.transmissionMap,st=J&&!!y.thicknessMap,lt=!!y.gradientMap,gt=!!y.alphaMap,et=y.alphaTest>0,Z=!!y.alphaHash,yt=!!y.extensions;let Bt=us;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Bt=i.toneMapping);const ce={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:at,fragmentShader:ft,defines:y.defines,customVertexShaderID:H,customFragmentShaderID:rt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&z._colorsTexture!==null,instancing:Et,instancingColor:Et&&z.instanceColor!==null,instancingMorph:Et&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:io,alphaToCoverage:!!y.alphaToCoverage,map:fe,matcap:Xt,envMap:I,envMapMode:I&&N.mapping,envMapCubeUVHeight:k,aoMap:se,lightMap:Rt,bumpMap:$t,normalMap:At,displacementMap:d&&pe,emissiveMap:_t,normalMapObjectSpace:At&&y.normalMapType===vv,normalMapTangentSpace:At&&y.normalMapType===rg,metalnessMap:Vt,roughnessMap:Ue,anisotropy:Me,anisotropyMap:Y,clearcoat:R,clearcoatMap:Tt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Mt,dispersion:E,iridescence:W,iridescenceMap:bt,iridescenceThicknessMap:it,sheen:q,sheenColorMap:pt,sheenRoughnessMap:Lt,specularMap:wt,specularColorMap:ht,specularIntensityMap:kt,transmission:J,transmissionMap:O,thicknessMap:st,gradientMap:lt,opaque:y.transparent===!1&&y.blending===Wr&&y.alphaToCoverage===!1,alphaMap:gt,alphaTest:et,alphaHash:Z,combine:y.combine,mapUv:fe&&g(y.map.channel),aoMapUv:se&&g(y.aoMap.channel),lightMapUv:Rt&&g(y.lightMap.channel),bumpMapUv:$t&&g(y.bumpMap.channel),normalMapUv:At&&g(y.normalMap.channel),displacementMapUv:pe&&g(y.displacementMap.channel),emissiveMapUv:_t&&g(y.emissiveMap.channel),metalnessMapUv:Vt&&g(y.metalnessMap.channel),roughnessMapUv:Ue&&g(y.roughnessMap.channel),anisotropyMapUv:Y&&g(y.anisotropyMap.channel),clearcoatMapUv:Tt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:it&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&g(y.sheenRoughnessMap.channel),specularMapUv:wt&&g(y.specularMap.channel),specularColorMapUv:ht&&g(y.specularColorMap.channel),specularIntensityMapUv:kt&&g(y.specularIntensityMap.channel),transmissionMapUv:O&&g(y.transmissionMap.channel),thicknessMapUv:st&&g(y.thicknessMap.channel),alphaMapUv:gt&&g(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(At||Me),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!L.attributes.uv&&(fe||gt),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:St,skinning:z.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:ut,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:fe&&y.map.isVideoTexture===!0&&Kt.getTransfer(y.map.colorSpace)===ne,decodeVideoTextureEmissive:_t&&y.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(y.emissiveMap.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===an,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:yt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&y.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ce.vertexUv1s=c.has(1),ce.vertexUv2s=c.has(2),ce.vertexUv3s=c.has(3),c.clear(),ce}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)x.push(C),x.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(M(x,y),S(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function S(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const x=_[y.type];let C;if(x){const F=on[x];C=vd.clone(F.uniforms)}else C=y.uniforms;return C}function b(y,x){let C;for(let F=0,z=u.length;F<z;F++){const G=u[F];if(G.cacheKey===x){C=G,++C.usedTimes;break}}return C===void 0&&(C=new qE(i,x,y,r),u.push(C)),C}function T(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:P}}function QE(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function tb(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ep(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,f,_,g,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function a(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,d,f,_,g,m){const p=o(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||tb),n.length>1&&n.sort(d||Mp),s.length>1&&s.sort(d||Mp)}function u(){for(let h=t,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function eb(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ep,i.set(n,[o])):s>=r.length?(o=new Ep,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function nb(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Wt};break;case"SpotLight":e={position:new D,direction:new D,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function ib(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let sb=0;function rb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ob(i){const t=new nb,e=ib(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new te,o=new te;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,S=0,v=0,b=0,T=0,A=0;c.sort(rb);for(let y=0,x=c.length;y<x;y++){const C=c[y],F=C.color,z=C.intensity,G=C.distance,L=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=F.r*z,h+=F.g*z,d+=F.b*z;else if(C.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(C.sh.coefficients[U],z);A++}else if(C.isDirectionalLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,k=e.get(C);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=C.shadow.matrix,M++}n.directional[f]=U,f++}else if(C.isSpotLight){const U=t.get(C);U.position.setFromMatrixPosition(C.matrixWorld),U.color.copy(F).multiplyScalar(z),U.distance=G,U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,n.spot[g]=U;const N=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,N.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[g]=N.matrix,C.castShadow){const k=e.get(C);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=L,v++}g++}else if(C.isRectAreaLight){const U=t.get(C);U.color.copy(F).multiplyScalar(z),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=U,m++}else if(C.isPointLight){const U=t.get(C);if(U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow){const N=C.shadow,k=e.get(C);k.shadowIntensity=N.intensity,k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,k.shadowCameraNear=N.camera.near,k.shadowCameraFar=N.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=L,n.pointShadowMatrix[_]=C.shadow.matrix,S++}n.point[_]=U,_++}else if(C.isHemisphereLight){const U=t.get(C);U.skyColor.copy(C.color).multiplyScalar(z),U.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==S||P.numSpotShadows!==v||P.numSpotMaps!==b||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+b-T,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,P.directionalLength=f,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=S,P.numSpotShadows=v,P.numSpotMaps=b,P.numLightProbes=A,n.version=sb++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function bp(i){const t=new ob(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ab(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new bp(i),t.set(s,[a])):r>=o.length?(a=new bp(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ub(i,t,e){let n=new xd;const s=new Ft,r=new Ft,o=new Yt,a=new Mx({depthPacking:_v}),l=new Ex,c={},u=e.maxTextureSize,h={[fs]:en,[en]:fs,[an]:an},d=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:lb,fragmentShader:cb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new We;_.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Pe(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ym;let p=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),F=i.state;F.setBlending(cs),F.buffers.depth.getReversed()?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==Ai&&this.type===Ai,G=p===Ai&&this.type!==Ai;for(let L=0,U=T.length;L<U;L++){const N=T[L],k=N.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const K=k.getFrameExtents();if(s.multiply(K),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,k.mapSize.y=r.y)),k.map===null||z===!0||G===!0){const tt=this.type!==Ai?{minFilter:wn,magFilter:wn}:{};k.map!==null&&k.map.dispose(),k.map=new sr(s.x,s.y,tt),k.map.texture.name=N.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const $=k.getViewportCount();for(let tt=0;tt<$;tt++){const ut=k.getViewport(tt);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),F.viewport(o),k.updateMatrices(N,tt),n=k.getFrustum(),v(A,P,k.camera,N,this.type)}k.isPointLightShadow!==!0&&this.type===Ai&&M(k,P),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,C)};function M(T,A){const P=t.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new sr(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,P,f,g,null)}function S(T,A,P,y){let x=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=x.uuid,z=A.uuid;let G=c[F];G===void 0&&(G={},c[F]=G);let L=G[z];L===void 0&&(L=x.clone(),G[z]=L,A.addEventListener("dispose",b)),x=L}if(x.visible=A.visible,x.wireframe=A.wireframe,y===Ai?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=P}return x}function v(T,A,P,y,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Ai)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const z=t.update(T),G=T.material;if(Array.isArray(G)){const L=z.groups;for(let U=0,N=L.length;U<N;U++){const k=L[U],K=G[k.materialIndex];if(K&&K.visible){const $=S(T,K,y,x);T.onBeforeShadow(i,T,A,P,z,$,k),i.renderBufferDirect(P,null,z,$,T,k),T.onAfterShadow(i,T,A,P,z,$,k)}}}else if(G.visible){const L=S(T,G,y,x);T.onBeforeShadow(i,T,A,P,z,L,null),i.renderBufferDirect(P,null,z,L,T,null),T.onAfterShadow(i,T,A,P,z,L,null)}}const F=T.children;for(let z=0,G=F.length;z<G;z++)v(F[z],A,P,y,x)}function b(T){T.target.removeEventListener("dispose",b);for(const P in c){const y=c[P],x=T.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const hb={[Lu]:Uu,[Ou]:Bu,[Fu]:ku,[to]:Nu,[Uu]:Lu,[Bu]:Ou,[ku]:Fu,[Nu]:to};function db(i,t){function e(){let O=!1;const st=new Yt;let lt=null;const gt=new Yt(0,0,0,0);return{setMask:function(et){lt!==et&&!O&&(i.colorMask(et,et,et,et),lt=et)},setLocked:function(et){O=et},setClear:function(et,Z,yt,Bt,ce){ce===!0&&(et*=Bt,Z*=Bt,yt*=Bt),st.set(et,Z,yt,Bt),gt.equals(st)===!1&&(i.clearColor(et,Z,yt,Bt),gt.copy(st))},reset:function(){O=!1,lt=null,gt.set(-1,0,0,0)}}}function n(){let O=!1,st=!1,lt=null,gt=null,et=null;return{setReversed:function(Z){if(st!==Z){const yt=t.get("EXT_clip_control");Z?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),st=Z;const Bt=et;et=null,this.setClear(Bt)}},getReversed:function(){return st},setTest:function(Z){Z?Q(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(Z){lt!==Z&&!O&&(i.depthMask(Z),lt=Z)},setFunc:function(Z){if(st&&(Z=hb[Z]),gt!==Z){switch(Z){case Lu:i.depthFunc(i.NEVER);break;case Uu:i.depthFunc(i.ALWAYS);break;case Ou:i.depthFunc(i.LESS);break;case to:i.depthFunc(i.LEQUAL);break;case Fu:i.depthFunc(i.EQUAL);break;case Nu:i.depthFunc(i.GEQUAL);break;case Bu:i.depthFunc(i.GREATER);break;case ku:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=Z}},setLocked:function(Z){O=Z},setClear:function(Z){et!==Z&&(st&&(Z=1-Z),i.clearDepth(Z),et=Z)},reset:function(){O=!1,lt=null,gt=null,et=null,st=!1}}}function s(){let O=!1,st=null,lt=null,gt=null,et=null,Z=null,yt=null,Bt=null,ce=null;return{setTest:function(Zt){O||(Zt?Q(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(Zt){st!==Zt&&!O&&(i.stencilMask(Zt),st=Zt)},setFunc:function(Zt,Si,ei){(lt!==Zt||gt!==Si||et!==ei)&&(i.stencilFunc(Zt,Si,ei),lt=Zt,gt=Si,et=ei)},setOp:function(Zt,Si,ei){(Z!==Zt||yt!==Si||Bt!==ei)&&(i.stencilOp(Zt,Si,ei),Z=Zt,yt=Si,Bt=ei)},setLocked:function(Zt){O=Zt},setClear:function(Zt){ce!==Zt&&(i.clearStencil(Zt),ce=Zt)},reset:function(){O=!1,st=null,lt=null,gt=null,et=null,Z=null,yt=null,Bt=null,ce=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,S=null,v=null,b=null,T=null,A=new Wt(0,0,0),P=0,y=!1,x=null,C=null,F=null,z=null,G=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,N=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=N>=1):k.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=N>=2);let K=null,$={};const tt=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),at=new Yt().fromArray(tt),ft=new Yt().fromArray(ut);function H(O,st,lt,gt){const et=new Uint8Array(4),Z=i.createTexture();i.bindTexture(O,Z),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let yt=0;yt<lt;yt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(st+yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return Z}const rt={};rt[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(to),$t(!1),At(mf),Q(i.CULL_FACE),se(cs);function Q(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function St(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Et(O,st){return h[O]!==st?(i.bindFramebuffer(O,st),h[O]=st,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=st),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Ct(O,st){let lt=f,gt=!1;if(O){lt=d.get(st),lt===void 0&&(lt=[],d.set(st,lt));const et=O.textures;if(lt.length!==et.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,yt=et.length;Z<yt;Z++)lt[Z]=i.COLOR_ATTACHMENT0+Z;lt.length=et.length,gt=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(lt)}function fe(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const Xt={[Fs]:i.FUNC_ADD,[W0]:i.FUNC_SUBTRACT,[X0]:i.FUNC_REVERSE_SUBTRACT};Xt[j0]=i.MIN,Xt[Y0]=i.MAX;const I={[q0]:i.ZERO,[K0]:i.ONE,[$0]:i.SRC_COLOR,[Du]:i.SRC_ALPHA,[nv]:i.SRC_ALPHA_SATURATE,[tv]:i.DST_COLOR,[J0]:i.DST_ALPHA,[Z0]:i.ONE_MINUS_SRC_COLOR,[Iu]:i.ONE_MINUS_SRC_ALPHA,[ev]:i.ONE_MINUS_DST_COLOR,[Q0]:i.ONE_MINUS_DST_ALPHA,[iv]:i.CONSTANT_COLOR,[sv]:i.ONE_MINUS_CONSTANT_COLOR,[rv]:i.CONSTANT_ALPHA,[ov]:i.ONE_MINUS_CONSTANT_ALPHA};function se(O,st,lt,gt,et,Z,yt,Bt,ce,Zt){if(O===cs){g===!0&&(St(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),O!==G0){if(O!==m||Zt!==y){if((p!==Fs||v!==Fs)&&(i.blendEquation(i.FUNC_ADD),p=Fs,v=Fs),Zt)switch(O){case Wr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pu:i.blendFunc(i.ONE,i.ONE);break;case gf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _f:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Wr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _f:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,S=null,b=null,T=null,A.set(0,0,0),P=0,m=O,y=Zt}return}et=et||st,Z=Z||lt,yt=yt||gt,(st!==p||et!==v)&&(i.blendEquationSeparate(Xt[st],Xt[et]),p=st,v=et),(lt!==M||gt!==S||Z!==b||yt!==T)&&(i.blendFuncSeparate(I[lt],I[gt],I[Z],I[yt]),M=lt,S=gt,b=Z,T=yt),(Bt.equals(A)===!1||ce!==P)&&(i.blendColor(Bt.r,Bt.g,Bt.b,ce),A.copy(Bt),P=ce),m=O,y=!1}function Rt(O,st){O.side===an?St(i.CULL_FACE):Q(i.CULL_FACE);let lt=O.side===en;st&&(lt=!lt),$t(lt),O.blending===Wr&&O.transparent===!1?se(cs):se(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const gt=O.stencilWrite;a.setTest(gt),gt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),_t(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(O){x!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),x=O)}function At(O){O!==H0?(Q(i.CULL_FACE),O!==C&&(O===mf?i.cullFace(i.BACK):O===V0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),C=O}function pe(O){O!==F&&(U&&i.lineWidth(O),F=O)}function _t(O,st,lt){O?(Q(i.POLYGON_OFFSET_FILL),(z!==st||G!==lt)&&(i.polygonOffset(st,lt),z=st,G=lt)):St(i.POLYGON_OFFSET_FILL)}function Vt(O){O?Q(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function Ue(O){O===void 0&&(O=i.TEXTURE0+L-1),K!==O&&(i.activeTexture(O),K=O)}function Me(O,st,lt){lt===void 0&&(K===null?lt=i.TEXTURE0+L-1:lt=K);let gt=$[lt];gt===void 0&&(gt={type:void 0,texture:void 0},$[lt]=gt),(gt.type!==O||gt.texture!==st)&&(K!==lt&&(i.activeTexture(lt),K=lt),i.bindTexture(O,st||rt[O]),gt.type=O,gt.texture=st)}function R(){const O=$[K];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(O){at.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),at.copy(O))}function Lt(O){ft.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ft.copy(O))}function wt(O,st){let lt=c.get(st);lt===void 0&&(lt=new WeakMap,c.set(st,lt));let gt=lt.get(O);gt===void 0&&(gt=i.getUniformBlockIndex(st,O.name),lt.set(O,gt))}function ht(O,st){const gt=c.get(st).get(O);l.get(st)!==gt&&(i.uniformBlockBinding(st,gt,O.__bindingPointIndex),l.set(st,gt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,$={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,S=null,v=null,b=null,T=null,A=new Wt(0,0,0),P=0,y=!1,x=null,C=null,F=null,z=null,G=null,at.set(0,0,i.canvas.width,i.canvas.height),ft.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:St,bindFramebuffer:Et,drawBuffers:Ct,useProgram:fe,setBlending:se,setMaterial:Rt,setFlipSided:$t,setCullFace:At,setLineWidth:pe,setPolygonOffset:_t,setScissorTest:Vt,activeTexture:Ue,bindTexture:Me,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:bt,texImage3D:it,updateUBOMapping:wt,uniformBlockBinding:ht,texStorage2D:ot,texStorage3D:Mt,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:Y,compressedTexSubImage3D:Tt,scissor:pt,viewport:Lt,reset:kt}}function fb(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return f?new OffscreenCanvas(R,E):aa("canvas")}function g(R,E,W){let q=1;const J=Me(R);if((J.width>W||J.height>W)&&(q=W/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(q*J.width),Tt=Math.floor(q*J.height);h===void 0&&(h=_(Y,Tt));const ot=E?_(Y,Tt):h;return ot.width=Y,ot.height=Tt,ot.getContext("2d").drawImage(R,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Tt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,E,W,q,J=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=E;if(E===i.RED&&(W===i.FLOAT&&(Y=i.R32F),W===i.HALF_FLOAT&&(Y=i.R16F),W===i.UNSIGNED_BYTE&&(Y=i.R8)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Y=i.R8UI),W===i.UNSIGNED_SHORT&&(Y=i.R16UI),W===i.UNSIGNED_INT&&(Y=i.R32UI),W===i.BYTE&&(Y=i.R8I),W===i.SHORT&&(Y=i.R16I),W===i.INT&&(Y=i.R32I)),E===i.RG&&(W===i.FLOAT&&(Y=i.RG32F),W===i.HALF_FLOAT&&(Y=i.RG16F),W===i.UNSIGNED_BYTE&&(Y=i.RG8)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Y=i.RG8UI),W===i.UNSIGNED_SHORT&&(Y=i.RG16UI),W===i.UNSIGNED_INT&&(Y=i.RG32UI),W===i.BYTE&&(Y=i.RG8I),W===i.SHORT&&(Y=i.RG16I),W===i.INT&&(Y=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),W===i.UNSIGNED_INT&&(Y=i.RGB32UI),W===i.BYTE&&(Y=i.RGB8I),W===i.SHORT&&(Y=i.RGB16I),W===i.INT&&(Y=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),W===i.UNSIGNED_INT&&(Y=i.RGBA32UI),W===i.BYTE&&(Y=i.RGBA8I),W===i.SHORT&&(Y=i.RGBA16I),W===i.INT&&(Y=i.RGBA32I)),E===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),E===i.RGBA){const Tt=J?Il:Kt.getTransfer(q);W===i.FLOAT&&(Y=i.RGBA32F),W===i.HALF_FLOAT&&(Y=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Y=Tt===ne?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(R,E){let W;return R?E===null||E===nr||E===na?W=i.DEPTH24_STENCIL8:E===li?W=i.DEPTH32F_STENCIL8:E===ea&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===nr||E===na?W=i.DEPTH_COMPONENT24:E===li?W=i.DEPTH_COMPONENT32F:E===ea&&(W=i.DEPTH_COMPONENT16),W}function b(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==ai?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function T(R){const E=R.target;E.removeEventListener("dispose",T),P(E),E.isVideoTexture&&u.delete(E)}function A(R){const E=R.target;E.removeEventListener("dispose",A),x(E)}function P(R){const E=n.get(R);if(E.__webglInit===void 0)return;const W=R.source,q=d.get(W);if(q){const J=q[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(R),Object.keys(q).length===0&&d.delete(W)}n.remove(R)}function y(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const W=R.source,q=d.get(W);delete q[E.__cacheKey],o.memory.textures--}function x(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(E.__webglFramebuffer[q]))for(let J=0;J<E.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(E.__webglFramebuffer[q][J]);else i.deleteFramebuffer(E.__webglFramebuffer[q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[q])}else{if(Array.isArray(E.__webglFramebuffer))for(let q=0;q<E.__webglFramebuffer.length;q++)i.deleteFramebuffer(E.__webglFramebuffer[q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let q=0;q<E.__webglColorRenderbuffer.length;q++)E.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=R.textures;for(let q=0,J=W.length;q<J;q++){const Y=n.get(W[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(W[q])}n.remove(R)}let C=0;function F(){C=0}function z(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function G(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function L(R,E){const W=n.get(R);if(R.isVideoTexture&&Vt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(W,R,E);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function U(R,E){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){rt(W,R,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function N(R,E){const W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){rt(W,R,E);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function k(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){Q(W,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}const K={[ta]:i.REPEAT,[ks]:i.CLAMP_TO_EDGE,[Vu]:i.MIRRORED_REPEAT},$={[wn]:i.NEAREST,[mv]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[ai]:i.LINEAR,[Ec]:i.LINEAR_MIPMAP_NEAREST,[zs]:i.LINEAR_MIPMAP_LINEAR},tt={[xv]:i.NEVER,[wv]:i.ALWAYS,[yv]:i.LESS,[og]:i.LEQUAL,[Sv]:i.EQUAL,[bv]:i.GEQUAL,[Mv]:i.GREATER,[Ev]:i.NOTEQUAL};function ut(R,E){if(E.type===li&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ai||E.magFilter===Ec||E.magFilter===Pa||E.magFilter===zs||E.minFilter===ai||E.minFilter===Ec||E.minFilter===Pa||E.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,K[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,K[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,K[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,$[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,tt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==Pa&&E.minFilter!==zs||E.type===li&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function at(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",T));const q=E.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const Y=G(E);if(Y!==R.__cacheKey){J[Y]===void 0&&(J[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),J[Y].usedTimes++;const Tt=J[R.__cacheKey];Tt!==void 0&&(J[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&y(E)),R.__cacheKey=Y,R.__webglTexture=J[Y].texture}return W}function ft(R,E,W){return Math.floor(Math.floor(R/W)/E)}function H(R,E,W,q){const Y=R.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,q,E.data);else{Y.sort((it,pt)=>it.start-pt.start);let Tt=0;for(let it=1;it<Y.length;it++){const pt=Y[Tt],Lt=Y[it],wt=pt.start+pt.count,ht=ft(Lt.start,E.width,4),kt=ft(pt.start,E.width,4);Lt.start<=wt+1&&ht===kt&&ft(Lt.start+Lt.count-1,E.width,4)===ht?pt.count=Math.max(pt.count,Lt.start+Lt.count-pt.start):(++Tt,Y[Tt]=Lt)}Y.length=Tt+1;const ot=i.getParameter(i.UNPACK_ROW_LENGTH),Mt=i.getParameter(i.UNPACK_SKIP_PIXELS),bt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let it=0,pt=Y.length;it<pt;it++){const Lt=Y[it],wt=Math.floor(Lt.start/4),ht=Math.ceil(Lt.count/4),kt=wt%E.width,O=Math.floor(wt/E.width),st=ht,lt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,kt,O,st,lt,W,q,E.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ot),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function rt(R,E,W){let q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(q=i.TEXTURE_3D);const J=at(R,E),Y=E.source;e.bindTexture(q,R.__webglTexture,i.TEXTURE0+W);const Tt=n.get(Y);if(Y.version!==Tt.__version||J===!0){e.activeTexture(i.TEXTURE0+W);const ot=Kt.getPrimaries(Kt.workingColorSpace),Mt=E.colorSpace===es?null:Kt.getPrimaries(E.colorSpace),bt=E.colorSpace===es||ot===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let it=g(E.image,!1,s.maxTextureSize);it=Ue(E,it);const pt=r.convert(E.format,E.colorSpace),Lt=r.convert(E.type);let wt=S(E.internalFormat,pt,Lt,E.colorSpace,E.isVideoTexture);ut(q,E);let ht;const kt=E.mipmaps,O=E.isVideoTexture!==!0,st=Tt.__version===void 0||J===!0,lt=Y.dataReady,gt=b(E,it);if(E.isDepthTexture)wt=v(E.format===sa,E.type),st&&(O?e.texStorage2D(i.TEXTURE_2D,1,wt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,wt,it.width,it.height,0,pt,Lt,null));else if(E.isDataTexture)if(kt.length>0){O&&st&&e.texStorage2D(i.TEXTURE_2D,gt,wt,kt[0].width,kt[0].height);for(let et=0,Z=kt.length;et<Z;et++)ht=kt[et],O?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ht.width,ht.height,pt,Lt,ht.data):e.texImage2D(i.TEXTURE_2D,et,wt,ht.width,ht.height,0,pt,Lt,ht.data);E.generateMipmaps=!1}else O?(st&&e.texStorage2D(i.TEXTURE_2D,gt,wt,it.width,it.height),lt&&H(E,it,pt,Lt)):e.texImage2D(i.TEXTURE_2D,0,wt,it.width,it.height,0,pt,Lt,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){O&&st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,wt,kt[0].width,kt[0].height,it.depth);for(let et=0,Z=kt.length;et<Z;et++)if(ht=kt[et],E.format!==Kn)if(pt!==null)if(O){if(lt)if(E.layerUpdates.size>0){const yt=tp(ht.width,ht.height,E.format,E.type);for(const Bt of E.layerUpdates){const ce=ht.data.subarray(Bt*yt/ht.data.BYTES_PER_ELEMENT,(Bt+1)*yt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,Bt,ht.width,ht.height,1,pt,ce)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,it.depth,pt,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,wt,ht.width,ht.height,it.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,it.depth,pt,Lt,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,wt,ht.width,ht.height,it.depth,0,pt,Lt,ht.data)}else{O&&st&&e.texStorage2D(i.TEXTURE_2D,gt,wt,kt[0].width,kt[0].height);for(let et=0,Z=kt.length;et<Z;et++)ht=kt[et],E.format!==Kn?pt!==null?O?lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,ht.width,ht.height,pt,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,et,wt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ht.width,ht.height,pt,Lt,ht.data):e.texImage2D(i.TEXTURE_2D,et,wt,ht.width,ht.height,0,pt,Lt,ht.data)}else if(E.isDataArrayTexture)if(O){if(st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,wt,it.width,it.height,it.depth),lt)if(E.layerUpdates.size>0){const et=tp(it.width,it.height,E.format,E.type);for(const Z of E.layerUpdates){const yt=it.data.subarray(Z*et/it.data.BYTES_PER_ELEMENT,(Z+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,it.width,it.height,1,pt,Lt,yt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Lt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,it.width,it.height,it.depth,0,pt,Lt,it.data);else if(E.isData3DTexture)O?(st&&e.texStorage3D(i.TEXTURE_3D,gt,wt,it.width,it.height,it.depth),lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Lt,it.data)):e.texImage3D(i.TEXTURE_3D,0,wt,it.width,it.height,it.depth,0,pt,Lt,it.data);else if(E.isFramebufferTexture){if(st)if(O)e.texStorage2D(i.TEXTURE_2D,gt,wt,it.width,it.height);else{let et=it.width,Z=it.height;for(let yt=0;yt<gt;yt++)e.texImage2D(i.TEXTURE_2D,yt,wt,et,Z,0,pt,Lt,null),et>>=1,Z>>=1}}else if(kt.length>0){if(O&&st){const et=Me(kt[0]);e.texStorage2D(i.TEXTURE_2D,gt,wt,et.width,et.height)}for(let et=0,Z=kt.length;et<Z;et++)ht=kt[et],O?lt&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,pt,Lt,ht):e.texImage2D(i.TEXTURE_2D,et,wt,pt,Lt,ht);E.generateMipmaps=!1}else if(O){if(st){const et=Me(it);e.texStorage2D(i.TEXTURE_2D,gt,wt,et.width,et.height)}lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Lt,it)}else e.texImage2D(i.TEXTURE_2D,0,wt,pt,Lt,it);m(E)&&p(q),Tt.__version=Y.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Q(R,E,W){if(E.image.length!==6)return;const q=at(R,E),J=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const Y=n.get(J);if(J.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+W);const Tt=Kt.getPrimaries(Kt.workingColorSpace),ot=E.colorSpace===es?null:Kt.getPrimaries(E.colorSpace),Mt=E.colorSpace===es||Tt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const bt=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,pt=[];for(let Z=0;Z<6;Z++)!bt&&!it?pt[Z]=g(E.image[Z],!0,s.maxCubemapSize):pt[Z]=it?E.image[Z].image:E.image[Z],pt[Z]=Ue(E,pt[Z]);const Lt=pt[0],wt=r.convert(E.format,E.colorSpace),ht=r.convert(E.type),kt=S(E.internalFormat,wt,ht,E.colorSpace),O=E.isVideoTexture!==!0,st=Y.__version===void 0||q===!0,lt=J.dataReady;let gt=b(E,Lt);ut(i.TEXTURE_CUBE_MAP,E);let et;if(bt){O&&st&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,kt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){et=pt[Z].mipmaps;for(let yt=0;yt<et.length;yt++){const Bt=et[yt];E.format!==Kn?wt!==null?O?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,0,0,Bt.width,Bt.height,wt,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,kt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,0,0,Bt.width,Bt.height,wt,ht,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt,kt,Bt.width,Bt.height,0,wt,ht,Bt.data)}}}else{if(et=E.mipmaps,O&&st){et.length>0&&gt++;const Z=Me(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,kt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(it){O?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,pt[Z].width,pt[Z].height,wt,ht,pt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,pt[Z].width,pt[Z].height,0,wt,ht,pt[Z].data);for(let yt=0;yt<et.length;yt++){const ce=et[yt].image[Z].image;O?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,0,0,ce.width,ce.height,wt,ht,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,kt,ce.width,ce.height,0,wt,ht,ce.data)}}else{O?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,wt,ht,pt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,kt,wt,ht,pt[Z]);for(let yt=0;yt<et.length;yt++){const Bt=et[yt];O?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,0,0,wt,ht,Bt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,yt+1,kt,wt,ht,Bt.image[Z])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),Y.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function St(R,E,W,q,J,Y){const Tt=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),Mt=S(W.internalFormat,Tt,ot,W.colorSpace),bt=n.get(E),it=n.get(W);if(it.__renderTarget=E,!bt.__hasExternalTextures){const pt=Math.max(1,E.width>>Y),Lt=Math.max(1,E.height>>Y);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,Mt,pt,Lt,E.depth,0,Tt,ot,null):e.texImage2D(J,Y,Mt,pt,Lt,0,Tt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),_t(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,it.__webglTexture,0,pe(E)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,it.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(R,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){const q=E.depthTexture,J=q&&q.isDepthTexture?q.type:null,Y=v(E.stencilBuffer,J),Tt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=pe(E);_t(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Y,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Y,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Y,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,R)}else{const q=E.textures;for(let J=0;J<q.length;J++){const Y=q[J],Tt=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),Mt=S(Y.internalFormat,Tt,ot,Y.colorSpace),bt=pe(E);W&&_t(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,Mt,E.width,E.height):_t(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt,Mt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(E.depthTexture);q.__renderTarget=E,(!q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),L(E.depthTexture,0);const J=q.__webglTexture,Y=pe(E);if(E.depthTexture.format===ia)_t(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(E.depthTexture.format===sa)_t(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function fe(R){const E=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),q){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const q=R.texture.mipmaps;q&&q.length>0?Ct(E.__webglFramebuffer[0],R):Ct(E.__webglFramebuffer,R)}else if(W){E.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[q]),E.__webglDepthbuffer[q]===void 0)E.__webglDepthbuffer[q]=i.createRenderbuffer(),Et(E.__webglDepthbuffer[q],R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Et(E.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(R,E,W){const q=n.get(R);E!==void 0&&St(q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&fe(R)}function I(R){const E=R.texture,W=n.get(R),q=n.get(E);R.addEventListener("dispose",A);const J=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Tt=J.length>1;if(Tt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=E.version,o.memory.textures++),Y){W.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ot]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)W.__webglFramebuffer[ot][Mt]=i.createFramebuffer()}else W.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ot=0;ot<E.mipmaps.length;ot++)W.__webglFramebuffer[ot]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ot=0,Mt=J.length;ot<Mt;ot++){const bt=n.get(J[ot]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&_t(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const Mt=J[ot];W.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ot]);const bt=r.convert(Mt.format,Mt.colorSpace),it=r.convert(Mt.type),pt=S(Mt.internalFormat,bt,it,Mt.colorSpace,R.isXRRenderTarget===!0),Lt=pe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,pt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,W.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),ut(i.TEXTURE_CUBE_MAP,E);for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)St(W.__webglFramebuffer[ot][Mt],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt);else St(W.__webglFramebuffer[ot],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ot=0,Mt=J.length;ot<Mt;ot++){const bt=J[ot],it=n.get(bt);let pt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,it.__webglTexture),ut(pt,bt),St(W.__webglFramebuffer,R,bt,i.COLOR_ATTACHMENT0+ot,pt,0),m(bt)&&p(pt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,q.__webglTexture),ut(ot,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)St(W.__webglFramebuffer[Mt],R,E,i.COLOR_ATTACHMENT0,ot,Mt);else St(W.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,ot,0);m(E)&&p(ot),e.unbindTexture()}R.depthBuffer&&fe(R)}function se(R){const E=R.textures;for(let W=0,q=E.length;W<q;W++){const J=E[W];if(m(J)){const Y=M(R),Tt=n.get(J).__webglTexture;e.bindTexture(Y,Tt),p(Y),e.unbindTexture()}}}const Rt=[],$t=[];function At(R){if(R.samples>0){if(_t(R)===!1){const E=R.textures,W=R.width,q=R.height;let J=i.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(R),ot=E.length>1;if(ot)for(let bt=0;bt<E.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer);const Mt=R.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let bt=0;bt<E.length;bt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);const it=n.get(E[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,W,q,0,0,W,q,J,i.NEAREST),l===!0&&(Rt.length=0,$t.length=0,Rt.push(i.COLOR_ATTACHMENT0+bt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Rt.push(Y),$t.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let bt=0;bt<E.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[bt]);const it=n.get(E[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function pe(R){return Math.min(s.maxSamples,R.samples)}function _t(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Vt(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function Ue(R,E){const W=R.colorSpace,q=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==io&&W!==es&&(Kt.getTransfer(W)===ne?(q!==Kn||J!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=L,this.setTexture2DArray=U,this.setTexture3D=N,this.setTextureCube=k,this.rebindTextures=Xt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=St,this.useMultisampledRTT=_t}function pb(i,t){function e(n,s=es){let r;const o=Kt.getTransfer(s);if(n===pi)return i.UNSIGNED_BYTE;if(n===ld)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tg)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jm)return i.BYTE;if(n===Qm)return i.SHORT;if(n===ea)return i.UNSIGNED_SHORT;if(n===ad)return i.INT;if(n===nr)return i.UNSIGNED_INT;if(n===li)return i.FLOAT;if(n===Sa)return i.HALF_FLOAT;if(n===eg)return i.ALPHA;if(n===ng)return i.RGB;if(n===Kn)return i.RGBA;if(n===ia)return i.DEPTH_COMPONENT;if(n===sa)return i.DEPTH_STENCIL;if(n===ud)return i.RED;if(n===hd)return i.RED_INTEGER;if(n===ig)return i.RG;if(n===dd)return i.RG_INTEGER;if(n===fd)return i.RGBA_INTEGER;if(n===vl||n===xl||n===yl||n===Sl)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gu||n===Wu||n===Xu||n===ju)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ju)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yu||n===qu||n===Ku)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yu||n===qu)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ku)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$u||n===Zu||n===Ju||n===Qu||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$u)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zu)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ju)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qu)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===th)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eh)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nh)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ih)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sh)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rh)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oh)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ah)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lh)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ch)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===uh||n===hh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ml)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sg||n===dh||n===fh||n===ph)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===na?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class wg extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new wg(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hi({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new lc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vb extends ur{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=new _b,m={},p=e.getContextAttributes();let M=null,S=null;const v=[],b=[],T=new Ft;let A=null;const P=new Sn;P.viewport=new Yt;const y=new Sn;y.viewport=new Yt;const x=[P,y],C=new Ux;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let rt=v[H];return rt===void 0&&(rt=new Xc,v[H]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(H){let rt=v[H];return rt===void 0&&(rt=new Xc,v[H]=rt),rt.getGripSpace()},this.getHand=function(H){let rt=v[H];return rt===void 0&&(rt=new Xc,v[H]=rt),rt.getHandSpace()};function G(H){const rt=b.indexOf(H.inputSource);if(rt===-1)return;const Q=v[rt];Q!==void 0&&(Q.update(H.inputSource,H.frame,c||o),Q.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",U);for(let H=0;H<v.length;H++){const rt=b[H];rt!==null&&(b[H]=null,v[H].disconnect(rt))}F=null,z=null,g.reset();for(const H in m)delete m[H];t.setRenderTarget(M),f=null,d=null,h=null,s=null,S=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",L),s.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(s,e)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,St=null,Et=null;p.depth&&(Et=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?sa:ia,St=p.stencil?na:nr);const Ct={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};d=h.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new sr(d.textureWidth,d.textureHeight,{format:Kn,type:pi,depthTexture:new vg(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new sr(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(H){for(let rt=0;rt<H.removed.length;rt++){const Q=H.removed[rt],St=b.indexOf(Q);St>=0&&(b[St]=null,v[St].disconnect(Q))}for(let rt=0;rt<H.added.length;rt++){const Q=H.added[rt];let St=b.indexOf(Q);if(St===-1){for(let Ct=0;Ct<v.length;Ct++)if(Ct>=b.length){b.push(Q),St=Ct;break}else if(b[Ct]===null){b[Ct]=Q,St=Ct;break}if(St===-1)break}const Et=v[St];Et&&Et.connect(Q)}}const N=new D,k=new D;function K(H,rt,Q){N.setFromMatrixPosition(rt.matrixWorld),k.setFromMatrixPosition(Q.matrixWorld);const St=N.distanceTo(k),Et=rt.projectionMatrix.elements,Ct=Q.projectionMatrix.elements,fe=Et[14]/(Et[10]-1),Xt=Et[14]/(Et[10]+1),I=(Et[9]+1)/Et[5],se=(Et[9]-1)/Et[5],Rt=(Et[8]-1)/Et[0],$t=(Ct[8]+1)/Ct[0],At=fe*Rt,pe=fe*$t,_t=St/(-Rt+$t),Vt=_t*-Rt;if(rt.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Vt),H.translateZ(_t),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Et[10]===-1)H.projectionMatrix.copy(rt.projectionMatrix),H.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Ue=fe+_t,Me=Xt+_t,R=At-Vt,E=pe+(St-Vt),W=I*Xt/Me*Ue,q=se*Xt/Me*Ue;H.projectionMatrix.makePerspective(R,E,W,q,Ue,Me),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function $(H,rt){rt===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(rt.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let rt=H.near,Q=H.far;g.texture!==null&&(g.depthNear>0&&(rt=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),C.near=y.near=P.near=rt,C.far=y.far=P.far=Q,(F!==C.near||z!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),F=C.near,z=C.far),C.layers.mask=H.layers.mask|6,P.layers.mask=C.layers.mask&3,y.layers.mask=C.layers.mask&5;const St=H.parent,Et=C.cameras;$(C,St);for(let Ct=0;Ct<Et.length;Ct++)$(Et[Ct],St);Et.length===2?K(C,P,y):C.projectionMatrix.copy(P.projectionMatrix),tt(H,C,St)};function tt(H,rt,Q){Q===null?H.matrix.copy(rt.matrixWorld):(H.matrix.copy(Q.matrixWorld),H.matrix.invert(),H.matrix.multiply(rt.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(rt.projectionMatrix),H.projectionMatrixInverse.copy(rt.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ra*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(H){return m[H]};let ut=null;function at(H,rt){if(u=rt.getViewerPose(c||o),_=rt,u!==null){const Q=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let St=!1;Q.length!==C.cameras.length&&(C.cameras.length=0,St=!0);for(let Xt=0;Xt<Q.length;Xt++){const I=Q[Xt];let se=null;if(f!==null)se=f.getViewport(I);else{const $t=h.getViewSubImage(d,I);se=$t.viewport,Xt===0&&(t.setRenderTargetTextures(S,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(S))}let Rt=x[Xt];Rt===void 0&&(Rt=new Sn,Rt.layers.enable(Xt),Rt.viewport=new Yt,x[Xt]=Rt),Rt.matrix.fromArray(I.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(I.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(se.x,se.y,se.width,se.height),Xt===0&&(C.matrix.copy(Rt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),St===!0&&C.cameras.push(Rt)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Xt=h.getDepthInformation(Q[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,s.renderState)}if(Et&&Et.includes("camera-access")&&(t.state.unbindTexture(),h))for(let Xt=0;Xt<Q.length;Xt++){const I=Q[Xt].camera;if(I){let se=m[I];se||(se=new wg,m[I]=se);const Rt=h.getCameraImage(I);se.sourceTexture=Rt}}}for(let Q=0;Q<v.length;Q++){const St=b[Q],Et=v[Q];St!==null&&Et!==void 0&&Et.update(St,rt,c||o)}ut&&ut(H,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),_=null}const ft=new yg;ft.setAnimationLoop(at),this.setAnimationLoop=function(H){ut=H},this.dispose=function(){}}}const Ps=new mi,xb=new te;function yb(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,dg(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,Ps.copy(v),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),m.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(Ps)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Sb(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const v=S.program;n.uniformBlockBinding(M,v)}function c(M,S){let v=s[M.id];v===void 0&&(_(M),v=u(M),s[M.id]=v,M.addEventListener("dispose",m));const b=S.program;n.updateUBOMapping(M,b);const T=t.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function u(M){const S=h();M.__bindingPointIndex=S;const v=i.createBuffer(),b=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=s[M.id],v=M.uniforms,b=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,A=v.length;T<A;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,x=P.length;y<x;y++){const C=P[y];if(f(C,T,y,b)===!0){const F=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let L=0;L<z.length;L++){const U=z[L],N=g(U);typeof U=="number"||typeof U=="boolean"?(C.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,F+G,C.__data)):U.isMatrix3?(C.__data[0]=U.elements[0],C.__data[1]=U.elements[1],C.__data[2]=U.elements[2],C.__data[3]=0,C.__data[4]=U.elements[3],C.__data[5]=U.elements[4],C.__data[6]=U.elements[5],C.__data[7]=0,C.__data[8]=U.elements[6],C.__data[9]=U.elements[7],C.__data[10]=U.elements[8],C.__data[11]=0):(U.toArray(C.__data,G),G+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,S,v,b){const T=M.value,A=S+"_"+v;if(b[A]===void 0)return typeof T=="number"||typeof T=="boolean"?b[A]=T:b[A]=T.clone(),!0;{const P=b[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return b[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(M){const S=M.uniforms;let v=0;const b=16;for(let A=0,P=S.length;A<P;A++){const y=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,C=y.length;x<C;x++){const F=y[x],z=Array.isArray(F.value)?F.value:[F.value];for(let G=0,L=z.length;G<L;G++){const U=z[G],N=g(U),k=v%b,K=k%N.boundary,$=k+K;v+=K,$!==0&&b-$<N.storage&&(v+=b-$),F.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=N.storage}}}const T=v%b;return T>0&&(v+=b-T),M.__size=v,M.__cache={},this}function g(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Mb{constructor(t={}){const{canvas:e=Vv(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let b=!1;this._outputColorSpace=xn;let T=0,A=0,P=null,y=-1,x=null;const C=new Yt,F=new Yt;let z=null;const G=new Wt(0);let L=0,U=e.width,N=e.height,k=1,K=null,$=null;const tt=new Yt(0,0,U,N),ut=new Yt(0,0,U,N);let at=!1;const ft=new xd;let H=!1,rt=!1;const Q=new te,St=new D,Et=new Yt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Xt(){return P===null?k:1}let I=n;function se(w,B){return e.getContext(w,B)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${od}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",et,!1),I===null){const B="webgl2";if(I=se(B,w),I===null)throw se(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Rt,$t,At,pe,_t,Vt,Ue,Me,R,E,W,q,J,Y,Tt,ot,Mt,bt,it,pt,Lt,wt,ht,kt;function O(){Rt=new IM(I),Rt.init(),wt=new pb(I,Rt),$t=new wM(I,Rt,t,wt),At=new db(I,Rt),$t.reversedDepthBuffer&&d&&At.buffers.depth.setReversed(!0),pe=new OM(I),_t=new QE,Vt=new fb(I,Rt,At,_t,$t,wt,pe),Ue=new AM(v),Me=new DM(v),R=new Hx(I),ht=new EM(I,R),E=new LM(I,R,pe,ht),W=new NM(I,E,R,pe),it=new FM(I,$t,Vt),ot=new TM(_t),q=new JE(v,Ue,Me,Rt,$t,ht,ot),J=new yb(v,_t),Y=new eb,Tt=new ab(Rt),bt=new MM(v,Ue,Me,At,W,f,l),Mt=new ub(v,W,$t),kt=new Sb(I,pe,$t,At),pt=new bM(I,Rt,pe),Lt=new UM(I,Rt,pe),pe.programs=q.programs,v.capabilities=$t,v.extensions=Rt,v.properties=_t,v.renderLists=Y,v.shadowMap=Mt,v.state=At,v.info=pe}O();const st=new vb(v,I);this.xr=st,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Rt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Rt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(U,N,!1))},this.getSize=function(w){return w.set(U,N)},this.setSize=function(w,B,X=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,N=B,e.width=Math.floor(w*k),e.height=Math.floor(B*k),X===!0&&(e.style.width=w+"px",e.style.height=B+"px"),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(U*k,N*k).floor()},this.setDrawingBufferSize=function(w,B,X){U=w,N=B,k=X,e.width=Math.floor(w*X),e.height=Math.floor(B*X),this.setViewport(0,0,w,B)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(tt)},this.setViewport=function(w,B,X,j){w.isVector4?tt.set(w.x,w.y,w.z,w.w):tt.set(w,B,X,j),At.viewport(C.copy(tt).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(ut)},this.setScissor=function(w,B,X,j){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,B,X,j),At.scissor(F.copy(ut).multiplyScalar(k).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(w){At.setScissorTest(at=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,X=!0){let j=0;if(w){let V=!1;if(P!==null){const nt=P.texture.format;V=nt===fd||nt===dd||nt===hd}if(V){const nt=P.texture.type,dt=nt===pi||nt===nr||nt===ea||nt===na||nt===ld||nt===cd,xt=bt.getClearColor(),mt=bt.getClearAlpha(),It=xt.r,Ot=xt.g,Pt=xt.b;dt?(_[0]=It,_[1]=Ot,_[2]=Pt,_[3]=mt,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=It,g[1]=Ot,g[2]=Pt,g[3]=mt,I.clearBufferiv(I.COLOR,0,g))}else j|=I.COLOR_BUFFER_BIT}B&&(j|=I.DEPTH_BUFFER_BIT),X&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",et,!1),bt.dispose(),Y.dispose(),Tt.dispose(),_t.dispose(),Ue.dispose(),Me.dispose(),W.dispose(),ht.dispose(),kt.dispose(),q.dispose(),st.dispose(),st.removeEventListener("sessionstart",ei),st.removeEventListener("sessionend",cf),Es.stop()};function lt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const w=pe.autoReset,B=Mt.enabled,X=Mt.autoUpdate,j=Mt.needsUpdate,V=Mt.type;O(),pe.autoReset=w,Mt.enabled=B,Mt.autoUpdate=X,Mt.needsUpdate=j,Mt.type=V}function et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Z(w){const B=w.target;B.removeEventListener("dispose",Z),yt(B)}function yt(w){Bt(w),_t.remove(w)}function Bt(w){const B=_t.get(w).programs;B!==void 0&&(B.forEach(function(X){q.releaseProgram(X)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,X,j,V,nt){B===null&&(B=Ct);const dt=V.isMesh&&V.matrixWorld.determinant()<0,xt=O0(w,B,X,j,V);At.setMaterial(j,dt);let mt=X.index,It=1;if(j.wireframe===!0){if(mt=E.getWireframeAttribute(X),mt===void 0)return;It=2}const Ot=X.drawRange,Pt=X.attributes.position;let Gt=Ot.start*It,ee=(Ot.start+Ot.count)*It;nt!==null&&(Gt=Math.max(Gt,nt.start*It),ee=Math.min(ee,(nt.start+nt.count)*It)),mt!==null?(Gt=Math.max(Gt,0),ee=Math.min(ee,mt.count)):Pt!=null&&(Gt=Math.max(Gt,0),ee=Math.min(ee,Pt.count));const ye=ee-Gt;if(ye<0||ye===1/0)return;ht.setup(V,j,xt,X,mt);let ue,re=pt;if(mt!==null&&(ue=R.get(mt),re=Lt,re.setIndex(ue)),V.isMesh)j.wireframe===!0?(At.setLineWidth(j.wireframeLinewidth*Xt()),re.setMode(I.LINES)):re.setMode(I.TRIANGLES);else if(V.isLine){let Dt=j.linewidth;Dt===void 0&&(Dt=1),At.setLineWidth(Dt*Xt()),V.isLineSegments?re.setMode(I.LINES):V.isLineLoop?re.setMode(I.LINE_LOOP):re.setMode(I.LINE_STRIP)}else V.isPoints?re.setMode(I.POINTS):V.isSprite&&re.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Xr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Rt.get("WEBGL_multi_draw"))re.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Dt=V._multiDrawStarts,ge=V._multiDrawCounts,qt=V._multiDrawCount,pn=mt?R.get(mt).bytesPerElement:1,mr=_t.get(j).currentProgram.getUniforms();for(let mn=0;mn<qt;mn++)mr.setValue(I,"_gl_DrawID",mn),re.render(Dt[mn]/pn,ge[mn])}else if(V.isInstancedMesh)re.renderInstances(Gt,ye,V.count);else if(X.isInstancedBufferGeometry){const Dt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ge=Math.min(X.instanceCount,Dt);re.renderInstances(Gt,ye,ge)}else re.render(Gt,ye)};function ce(w,B,X){w.transparent===!0&&w.side===an&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,Ra(w,B,X),w.side=fs,w.needsUpdate=!0,Ra(w,B,X),w.side=an):Ra(w,B,X)}this.compile=function(w,B,X=null){X===null&&(X=w),p=Tt.get(X),p.init(B),S.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),w!==X&&w.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const j=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const nt=V.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){const xt=nt[dt];ce(xt,X,V),j.add(xt)}else ce(nt,X,V),j.add(nt)}),p=S.pop(),j},this.compileAsync=function(w,B,X=null){const j=this.compile(w,B,X);return new Promise(V=>{function nt(){if(j.forEach(function(dt){_t.get(dt).currentProgram.isReady()&&j.delete(dt)}),j.size===0){V(w);return}setTimeout(nt,10)}Rt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Zt=null;function Si(w){Zt&&Zt(w)}function ei(){Es.stop()}function cf(){Es.start()}const Es=new yg;Es.setAnimationLoop(Si),typeof self<"u"&&Es.setContext(self),this.setAnimationLoop=function(w){Zt=w,st.setAnimationLoop(w),w===null?Es.stop():Es.start()},st.addEventListener("sessionstart",ei),st.addEventListener("sessionend",cf),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(B),B=st.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,B,P),p=Tt.get(w,S.length),p.init(B),S.push(p),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ft.setFromProjectionMatrix(Q,ci,B.reversedDepth),rt=this.localClippingEnabled,H=ot.init(this.clippingPlanes,rt),m=Y.get(w,M.length),m.init(),M.push(m),st.enabled===!0&&st.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Sc(nt,B,-1/0,v.sortObjects)}Sc(w,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(K,$),fe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,fe&&bt.addToRenderList(m,w),this.info.render.frame++,H===!0&&ot.beginShadows();const X=p.state.shadowsArray;Mt.render(X,w,B),H===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,V=m.transmissive;if(p.setupLights(),B.isArrayCamera){const nt=B.cameras;if(V.length>0)for(let dt=0,xt=nt.length;dt<xt;dt++){const mt=nt[dt];hf(j,V,w,mt)}fe&&bt.render(w);for(let dt=0,xt=nt.length;dt<xt;dt++){const mt=nt[dt];uf(m,w,mt,mt.viewport)}}else V.length>0&&hf(j,V,w,B),fe&&bt.render(w),uf(m,w,B);P!==null&&A===0&&(Vt.updateMultisampleRenderTarget(P),Vt.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,B),ht.resetDefaultState(),y=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],H===!0&&ot.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Sc(w,B,X,j){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ft.intersectsSprite(w)){j&&Et.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);const dt=W.update(w),xt=w.material;xt.visible&&m.push(w,dt,xt,X,Et.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ft.intersectsObject(w))){const dt=W.update(w),xt=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Et.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Et.copy(dt.boundingSphere.center)),Et.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(xt)){const mt=dt.groups;for(let It=0,Ot=mt.length;It<Ot;It++){const Pt=mt[It],Gt=xt[Pt.materialIndex];Gt&&Gt.visible&&m.push(w,dt,Gt,X,Et.z,Pt)}}else xt.visible&&m.push(w,dt,xt,X,Et.z,null)}}const nt=w.children;for(let dt=0,xt=nt.length;dt<xt;dt++)Sc(nt[dt],B,X,j)}function uf(w,B,X,j){const V=w.opaque,nt=w.transmissive,dt=w.transparent;p.setupLightsView(X),H===!0&&ot.setGlobalState(v.clippingPlanes,X),j&&At.viewport(C.copy(j)),V.length>0&&Ca(V,B,X),nt.length>0&&Ca(nt,B,X),dt.length>0&&Ca(dt,B,X),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function hf(w,B,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new sr(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float")?Sa:pi,minFilter:zs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[j.id],dt=j.viewport||C;nt.setSize(dt.z*v.transmissionResolutionScale,dt.w*v.transmissionResolutionScale);const xt=v.getRenderTarget(),mt=v.getActiveCubeFace(),It=v.getActiveMipmapLevel();v.setRenderTarget(nt),v.getClearColor(G),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),fe&&bt.render(X);const Ot=v.toneMapping;v.toneMapping=us;const Pt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),H===!0&&ot.setGlobalState(v.clippingPlanes,j),Ca(w,X,j),Vt.updateMultisampleRenderTarget(nt),Vt.updateRenderTargetMipmap(nt),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let ee=0,ye=B.length;ee<ye;ee++){const ue=B[ee],re=ue.object,Dt=ue.geometry,ge=ue.material,qt=ue.group;if(ge.side===an&&re.layers.test(j.layers)){const pn=ge.side;ge.side=en,ge.needsUpdate=!0,df(re,X,j,Dt,ge,qt),ge.side=pn,ge.needsUpdate=!0,Gt=!0}}Gt===!0&&(Vt.updateMultisampleRenderTarget(nt),Vt.updateRenderTargetMipmap(nt))}v.setRenderTarget(xt,mt,It),v.setClearColor(G,L),Pt!==void 0&&(j.viewport=Pt),v.toneMapping=Ot}function Ca(w,B,X){const j=B.isScene===!0?B.overrideMaterial:null;for(let V=0,nt=w.length;V<nt;V++){const dt=w[V],xt=dt.object,mt=dt.geometry,It=dt.group;let Ot=dt.material;Ot.allowOverride===!0&&j!==null&&(Ot=j),xt.layers.test(X.layers)&&df(xt,B,X,mt,Ot,It)}}function df(w,B,X,j,V,nt){w.onBeforeRender(v,B,X,j,V,nt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(v,B,X,j,w,nt),V.transparent===!0&&V.side===an&&V.forceSinglePass===!1?(V.side=en,V.needsUpdate=!0,v.renderBufferDirect(X,B,j,V,w,nt),V.side=fs,V.needsUpdate=!0,v.renderBufferDirect(X,B,j,V,w,nt),V.side=an):v.renderBufferDirect(X,B,j,V,w,nt),w.onAfterRender(v,B,X,j,V,nt)}function Ra(w,B,X){B.isScene!==!0&&(B=Ct);const j=_t.get(w),V=p.state.lights,nt=p.state.shadowsArray,dt=V.state.version,xt=q.getParameters(w,V.state,nt,B,X),mt=q.getProgramCacheKey(xt);let It=j.programs;j.environment=w.isMeshStandardMaterial?B.environment:null,j.fog=B.fog,j.envMap=(w.isMeshStandardMaterial?Me:Ue).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",Z),It=new Map,j.programs=It);let Ot=It.get(mt);if(Ot!==void 0){if(j.currentProgram===Ot&&j.lightsStateVersion===dt)return pf(w,xt),Ot}else xt.uniforms=q.getUniforms(w),w.onBeforeCompile(xt,v),Ot=q.acquireProgram(xt,mt),It.set(mt,Ot),j.uniforms=xt.uniforms;const Pt=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=ot.uniform),pf(w,xt),j.needsLights=N0(w),j.lightsStateVersion=dt,j.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.directionalShadowMap.value=V.state.directionalShadowMap,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotShadowMap.value=V.state.spotShadowMap,Pt.spotLightMatrix.value=V.state.spotLightMatrix,Pt.spotLightMap.value=V.state.spotLightMap,Pt.pointShadowMap.value=V.state.pointShadowMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Ot,j.uniformsList=null,Ot}function ff(w){if(w.uniformsList===null){const B=w.currentProgram.getUniforms();w.uniformsList=El.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function pf(w,B){const X=_t.get(w);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function O0(w,B,X,j,V){B.isScene!==!0&&(B=Ct),Vt.resetTextureUnits();const nt=B.fog,dt=j.isMeshStandardMaterial?B.environment:null,xt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:io,mt=(j.isMeshStandardMaterial?Me:Ue).get(j.envMap||dt),It=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ot=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Pt=!!X.morphAttributes.position,Gt=!!X.morphAttributes.normal,ee=!!X.morphAttributes.color;let ye=us;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ye=v.toneMapping);const ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=ue!==void 0?ue.length:0,Dt=_t.get(j),ge=p.state.lights;if(H===!0&&(rt===!0||w!==x)){const Ze=w===x&&j.id===y;ot.setState(j,w,Ze)}let qt=!1;j.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==ge.state.version||Dt.outputColorSpace!==xt||V.isBatchedMesh&&Dt.batching===!1||!V.isBatchedMesh&&Dt.batching===!0||V.isBatchedMesh&&Dt.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Dt.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Dt.instancing===!1||!V.isInstancedMesh&&Dt.instancing===!0||V.isSkinnedMesh&&Dt.skinning===!1||!V.isSkinnedMesh&&Dt.skinning===!0||V.isInstancedMesh&&Dt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Dt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Dt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Dt.instancingMorph===!1&&V.morphTexture!==null||Dt.envMap!==mt||j.fog===!0&&Dt.fog!==nt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==ot.numPlanes||Dt.numIntersection!==ot.numIntersection)||Dt.vertexAlphas!==It||Dt.vertexTangents!==Ot||Dt.morphTargets!==Pt||Dt.morphNormals!==Gt||Dt.morphColors!==ee||Dt.toneMapping!==ye||Dt.morphTargetsCount!==re)&&(qt=!0):(qt=!0,Dt.__version=j.version);let pn=Dt.currentProgram;qt===!0&&(pn=Ra(j,B,V));let mr=!1,mn=!1,bo=!1;const _e=pn.getUniforms(),Ln=Dt.uniforms;if(At.useProgram(pn.program)&&(mr=!0,mn=!0,bo=!0),j.id!==y&&(y=j.id,mn=!0),mr||x!==w){At.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),_e.setValue(I,"projectionMatrix",w.projectionMatrix),_e.setValue(I,"viewMatrix",w.matrixWorldInverse);const nn=_e.map.cameraPosition;nn!==void 0&&nn.setValue(I,St.setFromMatrixPosition(w.matrixWorld)),$t.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&_e.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,mn=!0,bo=!0)}if(V.isSkinnedMesh){_e.setOptional(I,V,"bindMatrix"),_e.setOptional(I,V,"bindMatrixInverse");const Ze=V.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),_e.setValue(I,"boneTexture",Ze.boneTexture,Vt))}V.isBatchedMesh&&(_e.setOptional(I,V,"batchingTexture"),_e.setValue(I,"batchingTexture",V._matricesTexture,Vt),_e.setOptional(I,V,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",V._indirectTexture,Vt),_e.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",V._colorsTexture,Vt));const Un=X.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&it.update(V,X,pn),(mn||Dt.receiveShadow!==V.receiveShadow)&&(Dt.receiveShadow=V.receiveShadow,_e.setValue(I,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ln.envMap.value=mt,Ln.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&B.environment!==null&&(Ln.envMapIntensity.value=B.environmentIntensity),mn&&(_e.setValue(I,"toneMappingExposure",v.toneMappingExposure),Dt.needsLights&&F0(Ln,bo),nt&&j.fog===!0&&J.refreshFogUniforms(Ln,nt),J.refreshMaterialUniforms(Ln,j,k,N,p.state.transmissionRenderTarget[w.id]),El.upload(I,ff(Dt),Ln,Vt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(El.upload(I,ff(Dt),Ln,Vt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&_e.setValue(I,"center",V.center),_e.setValue(I,"modelViewMatrix",V.modelViewMatrix),_e.setValue(I,"normalMatrix",V.normalMatrix),_e.setValue(I,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Ze=j.uniformsGroups;for(let nn=0,Mc=Ze.length;nn<Mc;nn++){const bs=Ze[nn];kt.update(bs,pn),kt.bind(bs,pn)}}return pn}function F0(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function N0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,B,X){const j=_t.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),_t.get(w.texture).__webglTexture=B,_t.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:X,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){const X=_t.get(w);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const B0=I.createFramebuffer();this.setRenderTarget=function(w,B=0,X=0){P=w,T=B,A=X;let j=!0,V=null,nt=!1,dt=!1;if(w){const mt=_t.get(w);if(mt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(mt.__webglFramebuffer===void 0)Vt.setupRenderTarget(w);else if(mt.__hasExternalTextures)Vt.rebindTextures(w,_t.get(w.texture).__webglTexture,_t.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pt=w.depthTexture;if(mt.__boundDepthTexture!==Pt){if(Pt!==null&&_t.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(w)}}const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(dt=!0);const Ot=_t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ot[B])?V=Ot[B][X]:V=Ot[B],nt=!0):w.samples>0&&Vt.useMultisampledRTT(w)===!1?V=_t.get(w).__webglMultisampledFramebuffer:Array.isArray(Ot)?V=Ot[X]:V=Ot,C.copy(w.viewport),F.copy(w.scissor),z=w.scissorTest}else C.copy(tt).multiplyScalar(k).floor(),F.copy(ut).multiplyScalar(k).floor(),z=at;if(X!==0&&(V=B0),At.bindFramebuffer(I.FRAMEBUFFER,V)&&j&&At.drawBuffers(w,V),At.viewport(C),At.scissor(F),At.setScissorTest(z),nt){const mt=_t.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,mt.__webglTexture,X)}else if(dt){const mt=B;for(let It=0;It<w.textures.length;It++){const Ot=_t.get(w.textures[It]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+It,Ot.__webglTexture,X,mt)}}else if(w!==null&&X!==0){const mt=_t.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,X)}y=-1},this.readRenderTargetPixels=function(w,B,X,j,V,nt,dt,xt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt){At.bindFramebuffer(I.FRAMEBUFFER,mt);try{const It=w.textures[xt],Ot=It.format,Pt=It.type;if(!$t.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-j&&X>=0&&X<=w.height-V&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xt),I.readPixels(B,X,j,V,wt.convert(Ot),wt.convert(Pt),nt))}finally{const It=P!==null?_t.get(P).__webglFramebuffer:null;At.bindFramebuffer(I.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(w,B,X,j,V,nt,dt,xt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=_t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt)if(B>=0&&B<=w.width-j&&X>=0&&X<=w.height-V){At.bindFramebuffer(I.FRAMEBUFFER,mt);const It=w.textures[xt],Ot=It.format,Pt=It.type;if(!$t.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Gt),I.bufferData(I.PIXEL_PACK_BUFFER,nt.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xt),I.readPixels(B,X,j,V,wt.convert(Ot),wt.convert(Pt),0);const ee=P!==null?_t.get(P).__webglFramebuffer:null;At.bindFramebuffer(I.FRAMEBUFFER,ee);const ye=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Gv(I,ye,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Gt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,nt),I.deleteBuffer(Gt),I.deleteSync(ye),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,X=0){const j=Math.pow(2,-X),V=Math.floor(w.image.width*j),nt=Math.floor(w.image.height*j),dt=B!==null?B.x:0,xt=B!==null?B.y:0;Vt.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,dt,xt,V,nt),At.unbindTexture()};const k0=I.createFramebuffer(),z0=I.createFramebuffer();this.copyTextureToTexture=function(w,B,X=null,j=null,V=0,nt=null){nt===null&&(V!==0?(Xr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=V,V=0):nt=0);let dt,xt,mt,It,Ot,Pt,Gt,ee,ye;const ue=w.isCompressedTexture?w.mipmaps[nt]:w.image;if(X!==null)dt=X.max.x-X.min.x,xt=X.max.y-X.min.y,mt=X.isBox3?X.max.z-X.min.z:1,It=X.min.x,Ot=X.min.y,Pt=X.isBox3?X.min.z:0;else{const Un=Math.pow(2,-V);dt=Math.floor(ue.width*Un),xt=Math.floor(ue.height*Un),w.isDataArrayTexture?mt=ue.depth:w.isData3DTexture?mt=Math.floor(ue.depth*Un):mt=1,It=0,Ot=0,Pt=0}j!==null?(Gt=j.x,ee=j.y,ye=j.z):(Gt=0,ee=0,ye=0);const re=wt.convert(B.format),Dt=wt.convert(B.type);let ge;B.isData3DTexture?(Vt.setTexture3D(B,0),ge=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Vt.setTexture2DArray(B,0),ge=I.TEXTURE_2D_ARRAY):(Vt.setTexture2D(B,0),ge=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const qt=I.getParameter(I.UNPACK_ROW_LENGTH),pn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),mr=I.getParameter(I.UNPACK_SKIP_PIXELS),mn=I.getParameter(I.UNPACK_SKIP_ROWS),bo=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ue.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,It),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pt);const _e=w.isDataArrayTexture||w.isData3DTexture,Ln=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){const Un=_t.get(w),Ze=_t.get(B),nn=_t.get(Un.__renderTarget),Mc=_t.get(Ze.__renderTarget);At.bindFramebuffer(I.READ_FRAMEBUFFER,nn.__webglFramebuffer),At.bindFramebuffer(I.DRAW_FRAMEBUFFER,Mc.__webglFramebuffer);for(let bs=0;bs<mt;bs++)_e&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(w).__webglTexture,V,Pt+bs),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(B).__webglTexture,nt,ye+bs)),I.blitFramebuffer(It,Ot,dt,xt,Gt,ee,dt,xt,I.DEPTH_BUFFER_BIT,I.NEAREST);At.bindFramebuffer(I.READ_FRAMEBUFFER,null),At.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||_t.has(w)){const Un=_t.get(w),Ze=_t.get(B);At.bindFramebuffer(I.READ_FRAMEBUFFER,k0),At.bindFramebuffer(I.DRAW_FRAMEBUFFER,z0);for(let nn=0;nn<mt;nn++)_e?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Un.__webglTexture,V,Pt+nn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Un.__webglTexture,V),Ln?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ze.__webglTexture,nt,ye+nn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ze.__webglTexture,nt),V!==0?I.blitFramebuffer(It,Ot,dt,xt,Gt,ee,dt,xt,I.COLOR_BUFFER_BIT,I.NEAREST):Ln?I.copyTexSubImage3D(ge,nt,Gt,ee,ye+nn,It,Ot,dt,xt):I.copyTexSubImage2D(ge,nt,Gt,ee,It,Ot,dt,xt);At.bindFramebuffer(I.READ_FRAMEBUFFER,null),At.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ln?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(ge,nt,Gt,ee,ye,dt,xt,mt,re,Dt,ue.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(ge,nt,Gt,ee,ye,dt,xt,mt,re,ue.data):I.texSubImage3D(ge,nt,Gt,ee,ye,dt,xt,mt,re,Dt,ue):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,nt,Gt,ee,dt,xt,re,Dt,ue.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,nt,Gt,ee,ue.width,ue.height,re,ue.data):I.texSubImage2D(I.TEXTURE_2D,nt,Gt,ee,dt,xt,re,Dt,ue);I.pixelStorei(I.UNPACK_ROW_LENGTH,qt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,mr),I.pixelStorei(I.UNPACK_SKIP_ROWS,mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,bo),nt===0&&B.generateMipmaps&&I.generateMipmap(ge),At.unbindTexture()},this.copyTextureToTexture3D=function(w,B,X=null,j=null,V=0){return Xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,B,X,j,V)},this.initRenderTarget=function(w){_t.get(w).__webglFramebuffer===void 0&&Vt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Vt.setTextureCube(w,0):w.isData3DTexture?Vt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Vt.setTexture2DArray(w,0):Vt.setTexture2D(w,0),At.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,At.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}var Bi=Object.freeze({Linear:Object.freeze({None:function(i){return i},In:function(i){return i},Out:function(i){return i},InOut:function(i){return i}}),Quadratic:Object.freeze({In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}}),Cubic:Object.freeze({In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}}),Quartic:Object.freeze({In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}}),Quintic:Object.freeze({In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}}),Sinusoidal:Object.freeze({In:function(i){return 1-Math.sin((1-i)*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.sin(Math.PI*(.5-i)))}}),Exponential:Object.freeze({In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}}),Circular:Object.freeze({In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}}),Elastic:Object.freeze({In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(i){var t=1.70158;return i===1?1:i*i*((t+1)*i-t)},Out:function(i){var t=1.70158;return i===0?0:--i*i*((t+1)*i+t)+1},InOut:function(i){var t=2.5949095;return(i*=2)<1?.5*(i*i*((t+1)*i-t)):.5*((i-=2)*i*((t+1)*i+t)+2)}}),Bounce:Object.freeze({In:function(i){return 1-Bi.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?Bi.Bounce.In(i*2)*.5:Bi.Bounce.Out(i*2-1)*.5+.5}}),generatePow:function(i){return i===void 0&&(i=4),i=i<Number.EPSILON?Number.EPSILON:i,i=i>1e4?1e4:i,{In:function(t){return Math.pow(t,i)},Out:function(t){return 1-Math.pow(1-t,i)},InOut:function(t){return t<.5?Math.pow(t*2,i)/2:(1-Math.pow(2-t*2,i))/2+.5}}}}),No=function(){return performance.now()},Eb=(function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},i.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},i.prototype.update=function(t,e){t===void 0&&(t=No()),e===void 0&&(e=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<n.length;s++){var r=this._tweens[n[s]],o=!e;r&&r.update(t,o)===!1&&!e&&delete this._tweens[n[s]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i})(),yh={Linear:function(i,t){var e=i.length-1,n=e*t,s=Math.floor(n),r=yh.Utils.Linear;return t<0?r(i[0],i[1],n):t>1?r(i[e],i[e-1],e-n):r(i[s],i[s+1>e?e:s+1],n-s)},Utils:{Linear:function(i,t,e){return(t-i)*e+i}}},Tg=(function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i})(),Sh=new Eb,Nl=(function(){function i(t,e){e===void 0&&(e=Sh),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Bi.Linear.None,this._interpolationFunction=yh.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Tg.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.getDuration=function(){return this._duration},i.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},i.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},i.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},i.prototype.start=function(t,e){if(t===void 0&&(t=No()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},i.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},i.prototype._setupProperties=function(t,e,n,s,r){for(var o in n){var a=t[o],l=Array.isArray(a),c=l?"array":typeof a,u=!l&&Array.isArray(n[o]);if(!(c==="undefined"||c==="function")){if(u){var h=n[o];if(h.length===0)continue;for(var d=[a],f=0,_=h.length;f<_;f+=1){var g=this._handleRelativeValue(a,h[f]);if(isNaN(g)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(g)}u&&(n[o]=d)}if((c==="object"||l)&&a&&!u){e[o]=l?[]:{};var m=a;for(var p in m)e[o][p]=m[p];s[o]=l?[]:{};var h=n[o];if(!this._isDynamic){var M={};for(var p in h)M[p]=h[p];n[o]=h=M}this._setupProperties(m,e[o],h,s[o],r)}else(typeof e[o]>"u"||r)&&(e[o]=a),l||(e[o]*=1),u?s[o]=n[o].slice().reverse():s[o]=e[o]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(t){return t===void 0&&(t=No()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},i.prototype.resume=function(t){return t===void 0&&(t=No()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},i.prototype.group=function(t){return t===void 0&&(t=Sh),this._group=t,this},i.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},i.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},i.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},i.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},i.prototype.easing=function(t){return t===void 0&&(t=Bi.Linear.None),this._easingFunction=t,this},i.prototype.interpolation=function(t){return t===void 0&&(t=yh.Linear),this._interpolationFunction=t,this},i.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},i.prototype.onStart=function(t){return this._onStartCallback=t,this},i.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},i.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},i.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},i.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},i.prototype.onStop=function(t){return this._onStopCallback=t,this},i.prototype.update=function(t,e){var n=this,s;if(t===void 0&&(t=No()),e===void 0&&(e=!0),this._isPaused)return!0;var r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>o)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=t-this._startTime,l=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),c=this._duration+this._repeat*l,u=function(){if(n._duration===0||a>c)return 1;var m=Math.trunc(a/l),p=a-m*l,M=Math.min(p/n._duration,1);return M===0&&a===n._duration?1:M},h=u(),d=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||a>=this._duration)if(this._repeat>0){var f=Math.min(Math.trunc((a-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=f);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*f,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var _=0,g=this._chainedTweens.length;_<g;_++)this._chainedTweens[_].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(t,e,n,s){for(var r in n)if(e[r]!==void 0){var o=e[r]||0,a=n[r],l=Array.isArray(t[r]),c=Array.isArray(a),u=!l&&c;u?t[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(t[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(t[r]=o+(a-o)*s))}},i.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},i.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},i})();Tg.nextId;var gi=Sh;gi.getAll.bind(gi);gi.removeAll.bind(gi);gi.add.bind(gi);gi.remove.bind(gi);var bb=gi.update.bind(gi);function Ri(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Ag(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},oo={duration:.5,overwrite:!1,delay:0},Ed,Ge,me,Bn=1e8,ae=1/Bn,Mh=Math.PI*2,wb=Mh/4,Tb=0,Cg=Math.sqrt,Ab=Math.cos,Cb=Math.sin,Ne=function(t){return typeof t=="string"},Se=function(t){return typeof t=="function"},Vi=function(t){return typeof t=="number"},bd=function(t){return typeof t>"u"},_i=function(t){return typeof t=="object"},ln=function(t){return t!==!1},wd=function(){return typeof window<"u"},sl=function(t){return Se(t)||Ne(t)},Rg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$e=Array.isArray,Eh=/(?:-?\.?\d|\.)+/gi,Pg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ru=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dg=/[+-]=-?[.\d]+/,Ig=/[^,'"\[\]\s]+/gi,Rb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ve,si,bh,Td,Rn={},Bl={},Lg,Ug=function(t){return(Bl=ao(t,Rn))&&fn},Ad=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},la=function(t,e){return!e&&console.warn(t)},Og=function(t,e){return t&&(Rn[t]=e)&&Bl&&(Bl[t]=e)||Rn},ca=function(){return 0},Pb={suppressEvents:!0,isStart:!0,kill:!1},bl={suppressEvents:!0,kill:!1},Db={suppressEvents:!0},Cd={},hs=[],wh={},Fg,yn={},ou={},wp=30,wl=[],Rd="",Pd=function(t){var e=t[0],n,s;if(_i(e)||Se(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(s=wl.length;s--&&!wl[s].targetTest(e););n=wl[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new o_(t[s],n)))||t.splice(s,1);return t},Ys=function(t){return t._gsap||Pd(kn(t))[0]._gsap},Ng=function(t,e,n){return(n=t[e])&&Se(n)?t[e]():bd(n)&&t.getAttribute&&t.getAttribute(e)||n},cn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ee=function(t){return Math.round(t*1e5)/1e5||0},Ae=function(t){return Math.round(t*1e7)/1e7||0},Yr=function(t,e){var n=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+s:n==="-"?t-s:n==="*"?t*s:t/s},Ib=function(t,e){for(var n=e.length,s=0;t.indexOf(e[s])<0&&++s<n;);return s<n},kl=function(){var t=hs.length,e=hs.slice(0),n,s;for(wh={},hs.length=0,n=0;n<t;n++)s=e[n],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Dd=function(t){return!!(t._initted||t._startAt||t.add)},Bg=function(t,e,n,s){hs.length&&!Ge&&kl(),t.render(e,n,!!(Ge&&e<0&&Dd(t))),hs.length&&!Ge&&kl()},kg=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ig).length<2?e:Ne(t)?t.trim():t},zg=function(t){return t},Pn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Lb=function(t){return function(e,n){for(var s in n)s in e||s==="duration"&&t||s==="ease"||(e[s]=n[s])}},ao=function(t,e){for(var n in e)t[n]=e[n];return t},Tp=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=_i(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},zl=function(t,e){var n={},s;for(s in t)s in e||(n[s]=t[s]);return n},Go=function(t){var e=t.parent||ve,n=t.keyframes?Lb($e(t.keyframes)):Pn;if(ln(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ub=function(t,e){for(var n=t.length,s=n===e.length;s&&n--&&t[n]===e[n];);return n<0},Hg=function(t,e,n,s,r){var o=t[s],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[s]=e,e._prev=o,e.parent=e._dp=t,e},uc=function(t,e,n,s){n===void 0&&(n="_first"),s===void 0&&(s="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[s]===e&&(t[s]=r),e._next=e._prev=e.parent=null},ps=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},qs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Ob=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Th=function(t,e,n,s){return t._startAt&&(Ge?t._startAt.revert(bl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},Fb=function i(t){return!t||t._ts&&i(t.parent)},Ap=function(t){return t._repeat?lo(t._tTime,t=t.duration()+t._rDelay)*t:0},lo=function(t,e){var n=Math.floor(t=Ae(t/e));return t&&n===t?n-1:n},Hl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},hc=function(t){return t._end=Ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||ae)||0))},dc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),hc(t),n._dirty||qs(n,t)),t},Vg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Hl(t.rawTime(),e),(!e._dur||ba(0,e.totalDuration(),n)-e._tTime>ae)&&e.render(n,!0)),qs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ae}},ri=function(t,e,n,s){return e.parent&&ps(e),e._start=Ae((Vi(n)?n:n||t!==ve?Fn(t,n,e):t._time)+e._delay),e._end=Ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Hg(t,e,"_first","_last",t._sort?"_start":0),Ah(e)||(t._recent=e),s||Vg(t,e),t._ts<0&&dc(t,t._tTime),t},Gg=function(t,e){return(Rn.ScrollTrigger||Ad("scrollTrigger",e))&&Rn.ScrollTrigger.create(e,t)},Wg=function(t,e,n,s,r){if(Ld(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Ge&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Fg!==En.frame)return hs.push(t),t._lazy=[r,s],1},Nb=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Ah=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Bb=function(t,e,n,s){var r=t.ratio,o=e<0||!e&&(!t._start&&Nb(t)&&!(!t._initted&&Ah(t))||(t._ts<0||t._dp._ts<0)&&!Ah(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ba(0,t._tDur,e),u=lo(l,a),t._yoyo&&u&1&&(o=1-o),u!==lo(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Ge||s||t._zTime===ae||!e&&t._zTime){if(!t._initted&&Wg(t,e,s,n,l))return;for(h=t._zTime,t._zTime=e||(n?ae:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Th(t,e,n,!0),t._onUpdate&&!n&&bn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&bn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&ps(t,1),!n&&!Ge&&(bn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},kb=function(t,e,n){var s;if(n>e)for(s=t._first;s&&s._start<=n;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=n;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},co=function(t,e,n,s){var r=t._repeat,o=Ae(e)||0,a=t._tTime/t._tDur;return a&&!s&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ae(o*(r+1)+t._rDelay*r):o,a>0&&!s&&dc(t,t._tTime=t._tDur*a),t.parent&&hc(t),n||qs(t.parent,t),t},Cp=function(t){return t instanceof tn?qs(t):co(t,t._dur)},zb={_start:0,endTime:ca,totalDuration:ca},Fn=function i(t,e,n){var s=t.labels,r=t._recent||zb,o=t.duration()>=Bn?r.endTime(!1):t._dur,a,l,c;return Ne(e)&&(isNaN(e)||e in s)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in s||(s[e]=o),s[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*($e(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Wo=function(t,e,n){var s=Vi(e[1]),r=(s?2:1)+(t<2?0:1),o=e[r],a,l;if(s&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ln(l.vars.inherit)&&l.parent;o.immediateRender=ln(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Te(e[0],o,e[r+1])},vs=function(t,e){return t||t===0?e(t):e},ba=function(t,e,n){return n<t?t:n>e?e:n},Ke=function(t,e){return!Ne(t)||!(e=Rb.exec(t))?"":e[1]},Hb=function(t,e,n){return vs(n,function(s){return ba(t,e,s)})},Ch=[].slice,Xg=function(t,e){return t&&_i(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&_i(t[0]))&&!t.nodeType&&t!==si},Vb=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(s){var r;return Ne(s)&&!e||Xg(s,1)?(r=n).push.apply(r,kn(s)):n.push(s)})||n},kn=function(t,e,n){return me&&!e&&me.selector?me.selector(t):Ne(t)&&!n&&(bh||!uo())?Ch.call((e||Td).querySelectorAll(t),0):$e(t)?Vb(t,n):Xg(t)?Ch.call(t,0):t?[t]:[]},Rh=function(t){return t=kn(t)[0]||la("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return kn(e,n.querySelectorAll?n:n===t?la("Invalid scope")||Td.createElement("div"):t)}},jg=function(t){return t.sort(function(){return .5-Math.random()})},Yg=function(t){if(Se(t))return t;var e=_i(t)?t:{each:t},n=Ks(e.ease),s=e.from||0,r=parseFloat(e.base)||0,o={},a=s>0&&s<1,l=isNaN(s)||a,c=e.axis,u=s,h=s;return Ne(s)?u=h={center:.5,edges:.5,end:1}[s]||0:!a&&l&&(u=s[0],h=s[1]),function(d,f,_){var g=(_||e).length,m=o[g],p,M,S,v,b,T,A,P,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,Bn])[1],!y){for(A=-Bn;A<(A=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*u-.5:s%y,M=y===Bn?0:l?g*h/y-.5:s/y|0,A=0,P=Bn,T=0;T<g;T++)S=T%y-p,v=M-(T/y|0),m[T]=b=c?Math.abs(c==="y"?v:S):Cg(S*S+v*v),b>A&&(A=b),b<P&&(P=b);s==="random"&&jg(m),m.max=A-P,m.min=P,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(s==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ke(e.amount||e.each)||0,n=n&&g<0?i_(n):n}return g=(m[d]-m.min)/m.max||0,Ae(m.b+(n?n(g):g)*m.v)+m.u}},Ph=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var s=Ae(Math.round(parseFloat(n)/t)*t*e);return(s-s%1)/e+(Vi(n)?0:Ke(n))}},qg=function(t,e){var n=$e(t),s,r;return!n&&_i(t)&&(s=n=t.radius||Bn,t.values?(t=kn(t.values),(r=!Vi(t[0]))&&(s*=s)):t=Ph(t.increment)),vs(e,n?Se(t)?function(o){return r=t(o),Math.abs(r-o)<=s?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Bn,u=0,h=t.length,d,f;h--;)r?(d=t[h].x-a,f=t[h].y-l,d=d*d+f*f):d=Math.abs(t[h]-a),d<c&&(c=d,u=h);return u=!s||c<=s?t[u]:o,r||u===o||Vi(o)?u:u+Ke(o)}:Ph(t))},Kg=function(t,e,n,s){return vs($e(t)?!e:n===!0?!!(n=0):!s,function(){return $e(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(s=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*s)/s})},Gb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(s){return e.reduce(function(r,o){return o(r)},s)}},Wb=function(t,e){return function(n){return t(parseFloat(n))+(e||Ke(n))}},Xb=function(t,e,n){return Zg(t,e,0,1,n)},$g=function(t,e,n){return vs(n,function(s){return t[~~e(s)]})},jb=function i(t,e,n){var s=e-t;return $e(t)?$g(t,i(0,t.length),e):vs(n,function(r){return(s+(r-t)%s)%s+t})},Yb=function i(t,e,n){var s=e-t,r=s*2;return $e(t)?$g(t,i(0,t.length-1),e):vs(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>s?r-o:o)})},ua=function(t){for(var e=0,n="",s,r,o,a;~(s=t.indexOf("random(",e));)o=t.indexOf(")",s),a=t.charAt(s+7)==="[",r=t.substr(s+7,o-s-7).match(a?Ig:Eh),n+=t.substr(e,s-e)+Kg(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Zg=function(t,e,n,s,r){var o=e-t,a=s-n;return vs(r,function(l){return n+((l-t)/o*a||0)})},qb=function i(t,e,n,s){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=Ne(t),a={},l,c,u,h,d;if(n===!0&&(s=1)&&(n=null),o)t={p:t},e={p:e};else if($e(t)&&!$e(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(i(t[c-1],t[c]));h--,r=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=e}else s||(t=ao($e(t)?[]:{},t));if(!u){for(l in e)Id.call(a,t,l,"get",e[l]);r=function(_){return Fd(_,a)||(o?t.p:t)}}}return vs(n,r)},Rp=function(t,e,n){var s=t.labels,r=Bn,o,a,l;for(o in s)a=s[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},bn=function(t,e,n){var s=t.vars,r=s[e],o=me,a=t._ctx,l,c,u;if(r)return l=s[e+"Params"],c=s.callbackScope||t,n&&hs.length&&kl(),a&&(me=a),u=l?r.apply(c,l):r.call(c),me=o,u},Bo=function(t){return ps(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ge),t.progress()<1&&bn(t,"onInterrupt"),t},Hr,Jg=[],Qg=function(t){if(t)if(t=!t.name&&t.default||t,wd()||t.headless){var e=t.name,n=Se(t),s=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ca,render:Fd,add:Id,kill:uw,modifier:cw,rawVars:0},o={targetTest:0,get:0,getSetter:Od,aliases:{},register:0};if(uo(),t!==s){if(yn[e])return;Pn(s,Pn(zl(t,r),o)),ao(s.prototype,ao(r,zl(t,o))),yn[s.prop=e]=s,t.targetTest&&(wl.push(s),Cd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Og(e,s),t.register&&t.register(fn,s,un)}else Jg.push(t)},oe=255,ko={aqua:[0,oe,oe],lime:[0,oe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,oe],navy:[0,0,128],white:[oe,oe,oe],olive:[128,128,0],yellow:[oe,oe,0],orange:[oe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[oe,0,0],pink:[oe,192,203],cyan:[0,oe,oe],transparent:[oe,oe,oe,0]},au=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*oe+.5|0},t_=function(t,e,n){var s=t?Vi(t)?[t>>16,t>>8&oe,t&oe]:0:ko.black,r,o,a,l,c,u,h,d,f,_;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ko[t])s=ko[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&oe,s&oe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&oe,t&oe]}else if(t.substr(0,3)==="hsl"){if(s=_=t.match(Eh),!e)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,s.length>3&&(s[3]*=1),s[0]=au(l+1/3,r,o),s[1]=au(l,r,o),s[2]=au(l-1/3,r,o);else if(~t.indexOf("="))return s=t.match(Pg),n&&s.length<4&&(s[3]=1),s}else s=t.match(Eh)||ko.transparent;s=s.map(Number)}return e&&!_&&(r=s[0]/oe,o=s[1]/oe,a=s[2]/oe,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===r?(o-a)/f+(o<a?6:0):h===o?(a-r)/f+2:(r-o)/f+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),n&&s.length<4&&(s[3]=1),s},e_=function(t){var e=[],n=[],s=-1;return t.split(ds).forEach(function(r){var o=r.match(zr)||[];e.push.apply(e,o),n.push(s+=o.length+1)}),e.c=n,e},Pp=function(t,e,n){var s="",r=(t+s).match(ds),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return t;if(r=r.map(function(d){return(d=t_(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=e_(t),l=n.c,l.join(s)!==u.c.join(s)))for(c=t.replace(ds,"1").split(zr),h=c.length-1;a<h;a++)s+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(ds),h=c.length-1;a<h;a++)s+=c[a]+r[a];return s+c[h]},ds=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ko)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),Kb=/hsl[a]?\(/,n_=function(t){var e=t.join(" "),n;if(ds.lastIndex=0,ds.test(e))return n=Kb.test(e),t[1]=Pp(t[1],n),t[0]=Pp(t[0],n,e_(t[1])),!0},ha,En=(function(){var i=Date.now,t=500,e=33,n=i(),s=n,r=1e3/240,o=r,a=[],l,c,u,h,d,f,_=function g(m){var p=i()-s,M=m===!0,S,v,b,T;if((p>t||p<0)&&(n+=p-e),s+=p,b=s-n,S=b-o,(S>0||M)&&(T=++h.frame,d=b-h.time*1e3,h.time=b=b/1e3,o+=S+(S>=r?4:r-S),v=1),M||(l=c(g)),v)for(f=0;f<a.length;f++)a[f](b,d,T,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Lg&&(!bh&&wd()&&(si=bh=window,Td=si.document||{},Rn.gsap=fn,(si.gsapVersions||(si.gsapVersions=[])).push(fn.version),Ug(Bl||si.GreenSockGlobals||!si.gsap&&si||{}),Jg.forEach(Qg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},ha=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ha=0,c=ca},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,p,M){var S=p?function(v,b,T,A){m(v,b,T,A),h.remove(S)}:m;return h.remove(m),a[M?"unshift":"push"](S),uo(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h})(),uo=function(){return!ha&&En.wake()},jt={},$b=/^[\d.\-M][\d.\-,\s]/,Zb=/["']/g,Jb=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),s=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[s]=isNaN(c)?c.replace(Zb,"").trim():+c,s=l.substr(a+1).trim();return e},Qb=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<n?t.indexOf(")",n+1):n)},tw=function(t){var e=(t+"").split("("),n=jt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Jb(e[1])]:Qb(t).split(",").map(kg)):jt._CE&&$b.test(t)?jt._CE("",t):n},i_=function(t){return function(e){return 1-t(1-e)}},s_=function i(t,e){for(var n=t._first,s;n;)n instanceof tn?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(s=n._ease,n._ease=n._yEase,n._yEase=s,n._yoyo=e)),n=n._next},Ks=function(t,e){return t&&(Se(t)?t:jt[t]||tw(t))||e},dr=function(t,e,n,s){n===void 0&&(n=function(l){return 1-e(1-l)}),s===void 0&&(s=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:s},o;return cn(t,function(a){jt[a]=Rn[a]=r,jt[o=a.toLowerCase()]=n;for(var l in r)jt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=jt[a+"."+l]=r[l]}),r},r_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},lu=function i(t,e,n){var s=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Mh*(Math.asin(1/s)||0),a=function(u){return u===1?1:s*Math.pow(2,-10*u)*Cb((u-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:r_(a);return r=Mh/r,l.config=function(c,u){return i(t,c,u)},l},cu=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},s=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:r_(n);return s.config=function(r){return i(t,r)},s};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;dr(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});jt.Linear.easeNone=jt.none=jt.Linear.easeIn;dr("Elastic",lu("in"),lu("out"),lu());(function(i,t){var e=1/t,n=2*e,s=2.5*e,r=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<s?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};dr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);dr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});dr("Circ",function(i){return-(Cg(1-i*i)-1)});dr("Sine",function(i){return i===1?1:-Ab(i*wb)+1});dr("Back",cu("in"),cu("out"),cu());jt.SteppedEase=jt.steps=Rn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,s=t+(e?0:1),r=e?1:0,o=1-ae;return function(a){return((s*ba(0,o,a)|0)+r)*n}}};oo.ease=jt["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Rd+=i+","+i+"Params,"});var o_=function(t,e){this.id=Tb++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ng,this.set=e?e.getSetter:Od},da=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,co(this,+e.duration,1,1),this.data=e.data,me&&(this._ctx=me,me.data.push(this)),ha||En.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,co(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,s){if(uo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(dc(this,n),!r._dp||r.parent||Vg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===ae||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Bg(this,n,s)),this},t.time=function(n,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ap(this))%(this._dur+this._rDelay)||(n?this._dur:0),s):this._time},t.totalProgress=function(n,s){return arguments.length?this.totalTime(this.totalDuration()*n,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ap(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,s){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,s):this._repeat?lo(this._tTime,r)+1:1},t.timeScale=function(n,s){if(!arguments.length)return this._rts===-ae?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Hl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ae?0:this._rts,this.totalTime(ba(-Math.abs(this._delay),this.totalDuration(),r),s!==!1),hc(this),Ob(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(uo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ae&&(this._tTime-=ae)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ri(s,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var s=this.parent||this._dp;return s?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Hl(s.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Db);var s=Ge;return Ge=n,Dd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ge=s,this},t.globalTime=function(n){for(var s=this,r=arguments.length?n:s.rawTime();s;)r=s._start+r/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var s=this._time;return this._rDelay=n,Cp(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,s){return this.totalTime(Fn(this,n),ln(s))},t.restart=function(n,s){return this.play().totalTime(n?-this._delay:0,ln(s)),this._dur||(this._zTime=-ae),this},t.play=function(n,s){return n!=null&&this.seek(n,s),this.reversed(!1).paused(!1)},t.reverse=function(n,s){return n!=null&&this.seek(n||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(n,s){return n!=null&&this.seek(n,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ae,this},t.isActive=function(){var n=this.parent||this._dp,s=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=s&&r<this.endTime(!0)-ae)},t.eventCallback=function(n,s,r){var o=this.vars;return arguments.length>1?(s?(o[n]=s,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=s)):delete o[n],this):o[n]},t.then=function(n){var s=this;return new Promise(function(r){var o=Se(n)?n:zg,a=function(){var c=s.then;s.then=null,Se(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=c),r(o),s.then=c};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?a():s._prom=a})},t.kill=function(){Bo(this)},i})();Pn(da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ae,_prom:0,_ps:!1,_rts:1});var tn=(function(i){Ag(t,i);function t(n,s){var r;return n===void 0&&(n={}),r=i.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ln(n.sortChildren),ve&&ri(n.parent||ve,Ri(r),s),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Gg(Ri(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(s,r,o){return Wo(0,arguments,this),this},e.from=function(s,r,o){return Wo(1,arguments,this),this},e.fromTo=function(s,r,o,a){return Wo(2,arguments,this),this},e.set=function(s,r,o){return r.duration=0,r.parent=this,Go(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Te(s,r,Fn(this,o),1),this},e.call=function(s,r,o){return ri(this,Te.delayedCall(0,s,r),o)},e.staggerTo=function(s,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Te(s,o,Fn(this,l)),this},e.staggerFrom=function(s,r,o,a,l,c,u){return o.runBackwards=1,Go(o).immediateRender=ln(o.immediateRender),this.staggerTo(s,r,o,a,l,c,u)},e.staggerFromTo=function(s,r,o,a,l,c,u,h){return a.startAt=o,Go(a).immediateRender=ln(a.immediateRender),this.staggerTo(s,r,a,l,c,u,h)},e.render=function(s,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:Ae(s),h=this._zTime<0!=s<0&&(this._initted||!c),d,f,_,g,m,p,M,S,v,b,T,A;if(this!==ve&&u>l&&s>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,s+=this._time-a),d=u,v=this._start,S=this._ts,p=!S,h&&(c||(a=this._zTime),(s||!r)&&(this._zTime=s)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(m*100+s,r,o);if(d=Ae(u%m),u===l?(g=this._repeat,d=c):(b=Ae(u/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=lo(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),T&&g&1&&(d=c-d,A=1),g!==b&&!this._lock){var P=T&&b&1,y=P===(T&&g&1);if(g<b&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Ae(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&bn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;s_(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=kb(this,Ae(a),Ae(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,a=0),!a&&u&&!r&&!b&&(bn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&s>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(s,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-ae);break}}f=_}else{f=this._last;for(var x=s<0?s:d;f;){if(_=f._prev,(f._act||x<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(s,r,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,r,o||Ge&&Dd(f)),d!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=x?-ae:ae);break}}f=_}}if(M&&!r&&(this.pause(),M.render(d>=a?0:-ae)._zTime=d>=a?1:-1,this._ts))return this._start=v,hc(this),this.render(s,r,o);this._onUpdate&&!r&&bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ps(this,1),!r&&!(s<0&&!a)&&(u||a||!l)&&(bn(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,r){var o=this;if(Vi(r)||(r=Fn(this,r,s)),!(s instanceof da)){if($e(s))return s.forEach(function(a){return o.add(a,r)}),this;if(Ne(s))return this.addLabel(s,r);if(Se(s))s=Te.delayedCall(0,s);else return this}return this!==s?ri(this,s,r):this},e.getChildren=function(s,r,o,a){s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Te?r&&l.push(c):(o&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(s){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===s)return r[o]},e.remove=function(s){return Ne(s)?this.removeLabel(s):Se(s)?this.killTweensOf(s):(s.parent===this&&uc(this,s),s===this._recent&&(this._recent=this._last),qs(this))},e.totalTime=function(s,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ae(En.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),i.prototype.totalTime.call(this,s,r),this._forcing=0,this):this._tTime},e.addLabel=function(s,r){return this.labels[s]=Fn(this,r),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,r,o){var a=Te.delayedCall(0,r||ca,o);return a.data="isPause",this._hasPause=1,ri(this,a,Fn(this,s))},e.removePause=function(s){var r=this._first;for(s=Fn(this,s);r;)r._start===s&&r.data==="isPause"&&ps(r),r=r._next},e.killTweensOf=function(s,r,o){for(var a=this.getTweensOf(s,o),l=a.length;l--;)rs!==a[l]&&a[l].kill(s,r);return this},e.getTweensOf=function(s,r){for(var o=[],a=kn(s),l=this._first,c=Vi(r),u;l;)l instanceof Te?Ib(l._targets,a)&&(c?(!rs||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(s,r){r=r||{};var o=this,a=Fn(o,s),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=Te.to(o,Pn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ae,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&co(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(s,r,o){return this.tweenTo(r,Pn({startAt:{time:Fn(this,s)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),Rp(this,Fn(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),Rp(this,Fn(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+ae)},e.shiftChildren=function(s,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=s,a._end+=s),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=s);return qs(this)},e.invalidate=function(s){var r=this._first;for(this._lock=0;r;)r.invalidate(s),r=r._next;return i.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),qs(this)},e.totalDuration=function(s){var r=0,o=this,a=o._last,l=Bn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-s:s));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ri(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;co(o,o===ve&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(s){if(ve._ts&&(Bg(ve,Hl(s,ve)),Fg=En.frame),En.frame>=wp){wp+=Tn.autoSleep||120;var r=ve._first;if((!r||!r._ts)&&Tn.autoSleep&&En._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||En.sleep()}}},t})(da);Pn(tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ew=function(t,e,n,s,r,o,a){var l=new un(this._pt,t,e,0,1,d_,null,r),c=0,u=0,h,d,f,_,g,m,p,M;for(l.b=n,l.e=s,n+="",s+="",(p=~s.indexOf("random("))&&(s=ua(s)),o&&(M=[n,s],o(M,t,e),n=M[0],s=M[1]),d=n.match(ru)||[];h=ru.exec(s);)_=h[0],g=s.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Yr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=ru.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=a,(Dg.test(s)||p)&&(l.e=0),this._pt=l,l},Id=function(t,e,n,s,r,o,a,l,c,u){Se(s)&&(s=s(r||0,t,o));var h=t[e],d=n!=="get"?n:Se(h)?c?t[e.indexOf("set")||!Se(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,f=Se(h)?c?ow:u_:Ud,_;if(Ne(s)&&(~s.indexOf("random(")&&(s=ua(s)),s.charAt(1)==="="&&(_=Yr(d,s)+(Ke(d)||0),(_||_===0)&&(s=_))),!u||d!==s||Dh)return!isNaN(d*s)&&s!==""?(_=new un(this._pt,t,e,+d||0,s-(d||0),typeof h=="boolean"?lw:h_,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!h&&!(e in t)&&Ad(e,s),ew.call(this,t,e,d,s,f,l||Tn.stringFilter,c))},nw=function(t,e,n,s,r){if(Se(t)&&(t=Xo(t,r,e,n,s)),!_i(t)||t.style&&t.nodeType||$e(t)||Rg(t))return Ne(t)?Xo(t,r,e,n,s):t;var o={},a;for(a in t)o[a]=Xo(t[a],r,e,n,s);return o},a_=function(t,e,n,s,r,o){var a,l,c,u;if(yn[t]&&(a=new yn[t]).init(r,a.rawVars?e[t]:nw(e[t],s,r,o,n),n,s,o)!==!1&&(n._pt=l=new un(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Hr))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},rs,Dh,Ld=function i(t,e,n){var s=t.vars,r=s.ease,o=s.startAt,a=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,h=s.yoyoEase,d=s.keyframes,f=s.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!Ed,v=t.timeline,b,T,A,P,y,x,C,F,z,G,L,U,N;if(v&&(!d||!r)&&(r="none"),t._ease=Ks(r,oo.ease),t._yEase=h?i_(Ks(h===!0?r:h,oo.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!v&&!!s.runBackwards,!v||d&&!s.stagger){if(F=m[0]?Ys(m[0]).harness:0,U=F&&s[F.prop],b=zl(s,Cd),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?bl:Pb),g._lazy=0),o){if(ps(t._startAt=Te.set(m,Pn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&ln(l),startAt:null,delay:0,onUpdate:c&&function(){return bn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ge||!a&&!f)&&t._startAt.revert(bl),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),A=Pn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ln(l),immediateRender:a,stagger:0,parent:p},b),U&&(A[F.prop]=U),ps(t._startAt=Te.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ge?t._startAt.revert(bl):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,ae,ae);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&ln(l)||l&&!_,T=0;T<m.length;T++){if(y=m[T],C=y._gsap||Pd(m)[T]._gsap,t._ptLookup[T]=G={},wh[C.id]&&hs.length&&kl(),L=M===m?T:M.indexOf(y),F&&(z=new F).init(y,U||b,t,L,M)!==!1&&(t._pt=P=new un(t._pt,y,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(k){G[k]=P}),z.priority&&(x=1)),!F||U)for(A in b)yn[A]&&(z=a_(A,b,t,L,y,M))?z.priority&&(x=1):G[A]=P=Id.call(t,y,A,"get",b[A],L,M,0,s.stringFilter);t._op&&t._op[T]&&t.kill(y,t._op[T]),S&&t._pt&&(rs=t,ve.killTweensOf(y,G,t.globalTime(e)),N=!t.parent,rs=0),t._pt&&l&&(wh[C.id]=1)}x&&f_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!N,d&&e<=0&&v.render(Bn,!0,!0)},iw=function(t,e,n,s,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Dh=1,t.vars[e]="+=0",Ld(t,a),Dh=0,l?la(e+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(s||s===0)&&!r?s:u.s+(s||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ee(n)+Ke(h.e)),h.b&&(h.b=u.s+Ke(h.b))},sw=function(t,e){var n=t[0]?Ys(t[0]).harness:0,s=n&&n.aliases,r,o,a,l;if(!s)return e;r=ao({},e);for(o in s)if(o in r)for(l=s[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},rw=function(t,e,n,s){var r=e.ease||s||"power1.inOut",o,a;if($e(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Xo=function(t,e,n,s,r){return Se(t)?t.call(e,n,s,r):Ne(t)&&~t.indexOf("random(")?ua(t):t},l_=Rd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",c_={};cn(l_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return c_[i]=1});var Te=(function(i){Ag(t,i);function t(n,s,r,o){var a;typeof s=="number"&&(r.duration=s,s=r,r=null),a=i.call(this,o?s:Go(s))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=s.parent||ve,S=($e(n)||Rg(n)?Vi(n[0]):"length"in s)?[n]:kn(n),v,b,T,A,P,y,x,C;if(a._targets=S.length?Pd(S):la("GSAP target "+n+" not found. https://gsap.com",!Tn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||sl(c)||sl(u)){if(s=a.vars,v=a.timeline=new tn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:S}),v.kill(),v.parent=v._dp=Ri(a),v._start=0,d||sl(c)||sl(u)){if(A=S.length,x=d&&Yg(d),_i(d))for(P in d)~l_.indexOf(P)&&(C||(C={}),C[P]=d[P]);for(b=0;b<A;b++)T=zl(s,c_),T.stagger=0,p&&(T.yoyoEase=p),C&&ao(T,C),y=S[b],T.duration=+Xo(c,Ri(a),b,y,S),T.delay=(+Xo(u,Ri(a),b,y,S)||0)-a._delay,!d&&A===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),v.to(y,T,x?x(b,y,S):0),v._ease=jt.none;v.duration()?c=u=0:a.timeline=0}else if(_){Go(Pn(v.vars.defaults,{ease:"none"})),v._ease=Ks(_.ease||s.ease||"none");var F=0,z,G,L;if($e(_))_.forEach(function(U){return v.to(S,U,">")}),v.duration();else{T={};for(P in _)P==="ease"||P==="easeEach"||rw(P,_[P],T,_.easeEach);for(P in T)for(z=T[P].sort(function(U,N){return U.t-N.t}),F=0,b=0;b<z.length;b++)G=z[b],L={ease:G.e,duration:(G.t-(b?z[b-1].t:0))/100*c},L[P]=G.v,v.to(S,L,F),F+=L.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!Ed&&(rs=Ri(a),ve.killTweensOf(S),rs=0),ri(M,Ri(a),r),s.reversed&&a.reverse(),s.paused&&a.paused(!0),(h||!c&&!_&&a._start===Ae(M._time)&&ln(h)&&Fb(Ri(a))&&M.data!=="nested")&&(a._tTime=-ae,a.render(Math.max(0,-u)||0)),m&&Gg(Ri(a),m),a}var e=t.prototype;return e.render=function(s,r,o){var a=this._time,l=this._tDur,c=this._dur,u=s<0,h=s>l-ae&&!u?l:s<ae?0:s,d,f,_,g,m,p,M,S,v;if(!c)Bb(this,s,r,o);else if(h!==this._tTime||!s||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+s,r,o);if(d=Ae(h%g),h===l?(_=this._repeat,d=c):(m=Ae(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(v=this._yEase,d=c-d),m=lo(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(S&&this._yEase&&s_(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Ae(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Wg(this,u?s:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(s,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!a&&h&&!r&&!m&&(bn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;S&&S.render(s<0?s:S._dur*S._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=s),this._onUpdate&&!r&&(u&&Th(this,s,r,o),bn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&bn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Th(this,s,!0,!0),(s||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&ps(this,1),!r&&!(u&&!a)&&(h||a||p)&&(bn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),i.prototype.invalidate.call(this,s)},e.resetTo=function(s,r,o,a,l){ha||En.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Ld(this,c),u=this._ease(c/this._dur),iw(this,s,r,o,a,u,c,l)?this.resetTo(s,r,o,a,1):(dc(this,0),this.parent||Hg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,r){if(r===void 0&&(r="all"),!s&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Bo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ge),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(s,r,rs&&rs.vars.overwrite!==!0)._first||Bo(this),this.parent&&o!==this.timeline.totalDuration()&&co(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=s?kn(s):a,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!r||r==="all")&&Ub(a,l))return r==="all"&&(this._pt=0),Bo(this);for(h=this._op=this._op||[],r!=="all"&&(Ne(r)&&(g={},cn(r,function(M){return g[M]=1}),r=g),r=sw(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],r==="all"?(h[p]=r,_=d,f={}):(f=h[p]=h[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&uc(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&Bo(this),this},t.to=function(s,r){return new t(s,r,arguments[2])},t.from=function(s,r){return Wo(1,arguments)},t.delayedCall=function(s,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(s,r,o){return Wo(2,arguments)},t.set=function(s,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(s,r)},t.killTweensOf=function(s,r,o){return ve.killTweensOf(s,r,o)},t})(da);Pn(Te.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(i){Te[i]=function(){var t=new tn,e=Ch.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Ud=function(t,e,n){return t[e]=n},u_=function(t,e,n){return t[e](n)},ow=function(t,e,n,s){return t[e](s.fp,n)},aw=function(t,e,n){return t.setAttribute(e,n)},Od=function(t,e){return Se(t[e])?u_:bd(t[e])&&t.setAttribute?aw:Ud},h_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},lw=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},d_=function(t,e){var n=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;n;)s=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+s,n=n._next;s+=e.c}e.set(e.t,e.p,s,e)},Fd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},cw=function(t,e,n,s){for(var r=this._pt,o;r;)o=r._next,r.p===s&&r.modifier(t,e,n),r=o},uw=function(t){for(var e=this._pt,n,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?uc(this,e,"_pt"):e.dep||(n=1),e=s;return!n},hw=function(t,e,n,s){s.mSet(t,e,s.m.call(s.tween,n,s.mt),s)},f_=function(t){for(var e=t._pt,n,s,r,o;e;){for(n=e._next,s=r;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:o)?e._prev._next=e:r=e,(e._next=s)?s._prev=e:o=e,e=n}t._pt=r},un=(function(){function i(e,n,s,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=s,this.r=a||h_,this.d=l||this,this.set=c||Ud,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,s,r){this.mSet=this.mSet||this.set,this.set=hw,this.m=n,this.mt=r,this.tween=s},i})();cn(Rd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Cd[i]=1});Rn.TweenMax=Rn.TweenLite=Te;Rn.TimelineLite=Rn.TimelineMax=tn;ve=new tn({sortChildren:!1,defaults:oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Tn.stringFilter=n_;var $s=[],Tl={},dw=[],Dp=0,fw=0,uu=function(t){return(Tl[t]||dw).map(function(e){return e()})},Ih=function(){var t=Date.now(),e=[];t-Dp>2&&(uu("matchMediaInit"),$s.forEach(function(n){var s=n.queries,r=n.conditions,o,a,l,c;for(a in s)o=si.matchMedia(s[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),uu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(s){return n.add(null,s)})}),Dp=t,uu("matchMedia"))},p_=(function(){function i(e,n){this.selector=n&&Rh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=fw++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,s,r){Se(n)&&(r=s,s=n,n=Se);var o=this,a=function(){var c=me,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Rh(r)),me=o,h=s.apply(o,arguments),Se(h)&&o._r.push(h),me=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Se?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var s=me;me=null,n(this),me=s},t.getTweens=function(){var n=[];return this.data.forEach(function(s){return s instanceof i?n.push.apply(n,s.getTweens()):s instanceof Te&&!(s.parent&&s.parent.data==="nested")&&n.push(s)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,s){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Te)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),s)for(var o=$s.length;o--;)$s[o].id===this.id&&$s.splice(o,1)},t.revert=function(n){this.kill(n||{})},i})(),pw=(function(){function i(e){this.contexts=[],this.scope=e,me&&me.data.push(this)}var t=i.prototype;return t.add=function(n,s,r){_i(n)||(n={matches:n});var o=new p_(0,r||this.scope),a=o.conditions={},l,c,u;me&&!o.selector&&(o.selector=me.selector),this.contexts.push(o),s=o.add("onMatch",s),o.queries=n;for(c in n)c==="all"?u=1:(l=si.matchMedia(n[c]),l&&($s.indexOf(o)<0&&$s.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ih):l.addEventListener("change",Ih)));return u&&s(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(s){return s.kill(n,!0)})},i})(),Vl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(s){return Qg(s)})},timeline:function(t){return new tn(t)},getTweensOf:function(t,e){return ve.getTweensOf(t,e)},getProperty:function(t,e,n,s){Ne(t)&&(t=kn(t)[0]);var r=Ys(t||{}).get,o=n?zg:kg;return n==="native"&&(n=""),t&&(e?o((yn[e]&&yn[e].get||r)(t,e,n,s)):function(a,l,c){return o((yn[a]&&yn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=kn(t),t.length>1){var s=t.map(function(u){return fn.quickSetter(u,e,n)}),r=s.length;return function(u){for(var h=r;h--;)s[h](u)}}t=t[0]||{};var o=yn[e],a=Ys(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Hr._pt=0,h.init(t,n?u+n:u,Hr,0,[t]),h.render(1,h),Hr._pt&&Fd(1,Hr)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var s,r=fn.to(t,Pn((s={},s[e]="+=0.1",s.paused=!0,s.stagger=0,s),n||{})),o=function(l,c,u){return r.resetTo(e,l,c,u)};return o.tween=r,o},isTweening:function(t){return ve.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ks(t.ease,oo.ease)),Tp(oo,t||{})},config:function(t){return Tp(Tn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,s=t.plugins,r=t.defaults,o=t.extendTimeline;(s||"").split(",").forEach(function(a){return a&&!yn[a]&&!Rn[a]&&la(e+" effect requires "+a+" plugin.")}),ou[e]=function(a,l,c){return n(kn(a),Pn(l||{},r),c)},o&&(tn.prototype[e]=function(a,l,c){return this.add(ou[e](a,_i(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){jt[t]=Ks(e)},parseEase:function(t,e){return arguments.length?Ks(t,e):jt},getById:function(t){return ve.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new tn(t),s,r;for(n.smoothChildTiming=ln(t.smoothChildTiming),ve.remove(n),n._dp=0,n._time=n._tTime=ve._time,s=ve._first;s;)r=s._next,(e||!(!s._dur&&s instanceof Te&&s.vars.onComplete===s._targets[0]))&&ri(n,s,s._start-s._delay),s=r;return ri(ve,n,0),n},context:function(t,e){return t?new p_(t,e):me},matchMedia:function(t){return new pw(t)},matchMediaRefresh:function(){return $s.forEach(function(t){var e=t.conditions,n,s;for(s in e)e[s]&&(e[s]=!1,n=1);n&&t.revert()})||Ih()},addEventListener:function(t,e){var n=Tl[t]||(Tl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Tl[t],s=n&&n.indexOf(e);s>=0&&n.splice(s,1)},utils:{wrap:jb,wrapYoyo:Yb,distribute:Yg,random:Kg,snap:qg,normalize:Xb,getUnit:Ke,clamp:Hb,splitColor:t_,toArray:kn,selector:Rh,mapRange:Zg,pipe:Gb,unitize:Wb,interpolate:qb,shuffle:jg},install:Ug,effects:ou,ticker:En,updateRoot:tn.updateRoot,plugins:yn,globalTimeline:ve,core:{PropTween:un,globals:Og,Tween:Te,Timeline:tn,Animation:da,getCache:Ys,_removeLinkedListItem:uc,reverting:function(){return Ge},context:function(t){return t&&me&&(me.data.push(t),t._ctx=me),me},suppressOverwrites:function(t){return Ed=t}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Vl[i]=Te[i]});En.add(tn.updateRoot);Hr=Vl.to({},{duration:0});var mw=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},gw=function(t,e){var n=t._targets,s,r,o;for(s in e)for(r=n.length;r--;)o=t._ptLookup[r][s],o&&(o=o.d)&&(o._pt&&(o=mw(o,s)),o&&o.modifier&&o.modifier(e[s],t,n[r],s))},hu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(s,r,o){o._onInit=function(a){var l,c;if(Ne(r)&&(l={},cn(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}gw(a,r)}}}},fn=Vl.registerPlugin({name:"attr",init:function(t,e,n,s,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],s,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Ge?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},hu("roundProps",Ph),hu("modifiers"),hu("snap",qg))||Vl;Te.version=tn.version=fn.version="3.13.0";Lg=1;wd()&&uo();jt.Power0;jt.Power1;jt.Power2;jt.Power3;jt.Power4;jt.Linear;jt.Quad;jt.Cubic;jt.Quart;jt.Quint;jt.Strong;jt.Elastic;jt.Back;jt.SteppedEase;jt.Bounce;jt.Sine;jt.Expo;jt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ip,os,qr,Nd,Hs,Lp,Bd,_w=function(){return typeof window<"u"},Gi={},Us=180/Math.PI,Kr=Math.PI/180,Ur=Math.atan2,Up=1e8,kd=/([A-Z])/g,vw=/(left|right|width|margin|padding|x)/i,xw=/[\s,\(]\S/,ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},yw=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Sw=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Mw=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},m_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},g_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ew=function(t,e,n){return t.style[e]=n},bw=function(t,e,n){return t.style.setProperty(e,n)},ww=function(t,e,n){return t._gsap[e]=n},Tw=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Aw=function(t,e,n,s,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Cw=function(t,e,n,s,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},xe="transform",hn=xe+"Origin",Rw=function i(t,e){var n=this,s=this.target,r=s.style,o=s._gsap;if(t in Gi&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ui[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Di(s,a)}):this.tfm[t]=o.x?o[t]:Di(s,t),t===hn&&(this.tfm.zOrigin=o.zOrigin);else return ui.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(xe)>=0)return;o.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(hn,e,"")),t=xe}(r||e)&&this.props.push(t,e,r[t])},__=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Pw=function(){var t=this.props,e=this.target,n=e.style,s=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(kd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)s[o]=this.tfm[o];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Bd(),(!r||!r.isStart)&&!n[xe]&&(__(n),s.zOrigin&&n[hn]&&(n[hn]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},v_=function(t,e){var n={target:t,props:[],revert:Pw,save:Rw};return t._gsap||fn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(s){return n.save(s)}),n},x_,Uh=function(t,e){var n=os.createElementNS?os.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):os.createElement(t);return n&&n.style?n:os.createElement(t)},zn=function i(t,e,n){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(kd,"-$1").toLowerCase())||s.getPropertyValue(e)||!n&&i(t,ho(e)||e,1)||""},Op="O,Moz,ms,Ms,Webkit".split(","),ho=function(t,e,n){var s=e||Hs,r=s.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Op[o]+t in r););return o<0?null:(o===3?"ms":o>=0?Op[o]:"")+t},Oh=function(){_w()&&window.document&&(Ip=window,os=Ip.document,qr=os.documentElement,Hs=Uh("div")||{style:{}},Uh("div"),xe=ho(xe),hn=xe+"Origin",Hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",x_=!!ho("perspective"),Bd=fn.core.reverting,Nd=1)},Fp=function(t){var e=t.ownerSVGElement,n=Uh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),r;s.style.display="block",n.appendChild(s),qr.appendChild(n);try{r=s.getBBox()}catch{}return n.removeChild(s),qr.removeChild(n),r},Np=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},y_=function(t){var e,n;try{e=t.getBBox()}catch{e=Fp(t),n=1}return e&&(e.width||e.height)||n||(e=Fp(t)),e&&!e.width&&!e.x&&!e.y?{x:+Np(t,["x","cx","x1"])||0,y:+Np(t,["y","cy","y1"])||0,width:0,height:0}:e},S_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&y_(t))},rr=function(t,e){if(e){var n=t.style,s;e in Gi&&e!==hn&&(e=xe),n.removeProperty?(s=e.substr(0,2),(s==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(s==="--"?e:e.replace(kd,"-$1").toLowerCase())):n.removeAttribute(e)}},as=function(t,e,n,s,r,o){var a=new un(t._pt,e,n,0,1,o?g_:m_);return t._pt=a,a.b=s,a.e=r,t._props.push(n),a},Bp={deg:1,rad:1,turn:1},Dw={grid:1,flex:1},ms=function i(t,e,n,s){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Hs.style,l=vw.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=s==="px",f=s==="%",_,g,m,p;if(s===o||!r||Bp[s]||Bp[o])return r;if(o!=="px"&&!d&&(r=i(t,e,n,"px")),p=t.getCTM&&S_(t),(f||o==="%")&&(Gi[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[u],Ee(f?r/_*h:r/100*_);if(a[l?"width":"height"]=h+(d?o:s),g=s!=="rem"&&~e.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===os||!g.appendChild)&&(g=os.body),m=g._gsap,m&&f&&m.width&&l&&m.time===En.time&&!m.uncache)return Ee(r/m.width*h);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=h+s,_=t[u],M?t.style[e]=M:rr(t,e)}else(f||o==="%")&&!Dw[zn(g,"display")]&&(a.position=zn(t,"position")),g===t&&(a.position="static"),g.appendChild(Hs),_=Hs[u],g.removeChild(Hs),a.position="absolute";return l&&f&&(m=Ys(g),m.time=En.time,m.width=g[u]),Ee(d?_*r/h:_&&r?h/_*r:0)},Di=function(t,e,n,s){var r;return Nd||Oh(),e in ui&&e!=="transform"&&(e=ui[e],~e.indexOf(",")&&(e=e.split(",")[0])),Gi[e]&&e!=="transform"?(r=pa(t,s),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Wl(zn(t,hn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||s||~(r+"").indexOf("calc("))&&(r=Gl[e]&&Gl[e](t,e,n)||zn(t,e)||Ng(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ms(t,e,r,n)+n:r},Iw=function(t,e,n,s){if(!n||n==="none"){var r=ho(e,t,1),o=r&&zn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=zn(t,"borderTopColor"))}var a=new un(this._pt,t.style,e,0,1,d_),l=0,c=0,u,h,d,f,_,g,m,p,M,S,v,b;if(a.b=n,a.e=s,n+="",s+="",s.substring(0,6)==="var(--"&&(s=zn(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(g=t.style[e],t.style[e]=s,s=zn(t,e)||s,g?t.style[e]=g:rr(t,e)),u=[n,s],n_(u),n=u[0],s=u[1],d=n.match(zr)||[],b=s.match(zr)||[],b.length){for(;h=zr.exec(s);)m=h[0],M=s.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),m.charAt(1)==="="&&(m=Yr(f,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=zr.lastIndex-S.length,S||(S=S||Tn.units[e]||v,l===s.length&&(s+=S,a.e+=S)),v!==S&&(f=ms(t,e,g,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<s.length?s.substring(l,s.length):""}else a.r=e==="display"&&s==="none"?g_:m_;return Dg.test(s)&&(a.e=0),this._pt=a,a},kp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Lw=function(t){var e=t.split(" "),n=e[0],s=e[1]||"50%";return(n==="top"||n==="bottom"||s==="left"||s==="right")&&(t=n,n=s,s=t),e[0]=kp[n]||n,e[1]=kp[s]||s,e.join(" ")},Uw=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,s=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)s.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Gi[a]&&(l=1,a=a==="transformOrigin"?hn:xe),rr(n,a);l&&(rr(n,xe),o&&(o.svg&&n.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",pa(n,1),o.uncache=1,__(s)))}},Gl={clearProps:function(t,e,n,s,r){if(r.data!=="isFromStart"){var o=t._pt=new un(t._pt,e,n,0,0,Uw);return o.u=s,o.pr=-10,o.tween=r,t._props.push(n),1}}},fa=[1,0,0,1,0,0],M_={},E_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},zp=function(t){var e=zn(t,xe);return E_(e)?fa:e.substr(7).match(Pg).map(Ee)},zd=function(t,e){var n=t._gsap||Ys(t),s=t.style,r=zp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?fa:r):(r===fa&&!t.offsetParent&&t!==qr&&!n.svg&&(l=s.display,s.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,qr.appendChild(t)),r=zp(t),l?s.display=l:rr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):qr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Fh=function(t,e,n,s,r,o){var a=t._gsap,l=r||zd(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],S=e.split(" "),v=parseFloat(S[0])||0,b=parseFloat(S[1])||0,T,A,P,y;n?l!==fa&&(A=f*m-_*g)&&(P=v*(m/A)+b*(-g/A)+(g*M-m*p)/A,y=v*(-_/A)+b*(f/A)-(f*M-_*p)/A,v=P,b=y):(T=y_(t),v=T.x+(~S[0].indexOf("%")?v/100*T.width:v),b=T.y+(~(S[1]||S[0]).indexOf("%")?b/100*T.height:b)),s||s!==!1&&a.smooth?(p=v-c,M=b-u,a.xOffset=h+(p*f+M*g)-p,a.yOffset=d+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!s,a.origin=e,a.originIsAbsolute=!!n,t.style[hn]="0px 0px",o&&(as(o,a,"xOrigin",c,v),as(o,a,"yOrigin",u,b),as(o,a,"xOffset",h,a.xOffset),as(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},pa=function(t,e){var n=t._gsap||new o_(t);if("x"in n&&!e&&!n.uncache)return n;var s=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=zn(t,hn)||"0",u,h,d,f,_,g,m,p,M,S,v,b,T,A,P,y,x,C,F,z,G,L,U,N,k,K,$,tt,ut,at,ft,H;return u=h=d=g=m=p=M=S=v=0,f=_=1,n.svg=!!(t.getCTM&&S_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[xe]!=="none"?l[xe]:"")),s.scale=s.rotate=s.translate="none"),A=zd(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",N=""):N=!e&&t.getAttribute("data-svg-origin"),Fh(t,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,T=n.yOrigin||0,A!==fa&&(C=A[0],F=A[1],z=A[2],G=A[3],u=L=A[4],h=U=A[5],A.length===6?(f=Math.sqrt(C*C+F*F),_=Math.sqrt(G*G+z*z),g=C||F?Ur(F,C)*Us:0,M=z||G?Ur(z,G)*Us+g:0,M&&(_*=Math.abs(Math.cos(M*Kr))),n.svg&&(u-=b-(b*C+T*z),h-=T-(b*F+T*G))):(H=A[6],at=A[7],$=A[8],tt=A[9],ut=A[10],ft=A[11],u=A[12],h=A[13],d=A[14],P=Ur(H,ut),m=P*Us,P&&(y=Math.cos(-P),x=Math.sin(-P),N=L*y+$*x,k=U*y+tt*x,K=H*y+ut*x,$=L*-x+$*y,tt=U*-x+tt*y,ut=H*-x+ut*y,ft=at*-x+ft*y,L=N,U=k,H=K),P=Ur(-z,ut),p=P*Us,P&&(y=Math.cos(-P),x=Math.sin(-P),N=C*y-$*x,k=F*y-tt*x,K=z*y-ut*x,ft=G*x+ft*y,C=N,F=k,z=K),P=Ur(F,C),g=P*Us,P&&(y=Math.cos(P),x=Math.sin(P),N=C*y+F*x,k=L*y+U*x,F=F*y-C*x,U=U*y-L*x,C=N,L=k),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Ee(Math.sqrt(C*C+F*F+z*z)),_=Ee(Math.sqrt(U*U+H*H)),P=Ur(L,U),M=Math.abs(P)>2e-4?P*Us:0,v=ft?1/(ft<0?-ft:ft):0),n.svg&&(N=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!E_(zn(t,xe)),N&&t.setAttribute("transform",N))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ee(f),n.scaleY=Ee(_),n.rotation=Ee(g)+a,n.rotationX=Ee(m)+a,n.rotationY=Ee(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(s[hn]=Wl(c)),n.xOffset=n.yOffset=0,n.force3D=Tn.force3D,n.renderTransform=n.svg?Fw:x_?b_:Ow,n.uncache=0,n},Wl=function(t){return(t=t.split(" "))[0]+" "+t[1]},du=function(t,e,n){var s=Ke(e);return Ee(parseFloat(e)+parseFloat(ms(t,"x",n+"px",s)))+s},Ow=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,b_(t,e)},Ds="0deg",Lo="0px",Is=") ",b_=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,v="",b=p==="auto"&&t&&t!==1||p===!0;if(S&&(h!==Ds||u!==Ds)){var T=parseFloat(u)*Kr,A=Math.sin(T),P=Math.cos(T),y;T=parseFloat(h)*Kr,y=Math.cos(T),o=du(M,o,A*y*-S),a=du(M,a,-Math.sin(T)*-S),l=du(M,l,P*y*-S+S)}m!==Lo&&(v+="perspective("+m+Is),(s||r)&&(v+="translate("+s+"%, "+r+"%) "),(b||o!==Lo||a!==Lo||l!==Lo)&&(v+=l!==Lo||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Is),c!==Ds&&(v+="rotate("+c+Is),u!==Ds&&(v+="rotateY("+u+Is),h!==Ds&&(v+="rotateX("+h+Is),(d!==Ds||f!==Ds)&&(v+="skew("+d+", "+f+Is),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Is),M.style[xe]=v||"translate(0, 0)"},Fw=function(t,e){var n=e||this,s=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(o),v=parseFloat(a),b,T,A,P,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Kr,c*=Kr,b=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(u*=Kr,y=Math.tan(c-u),y=Math.sqrt(1+y*y),A*=y,P*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),b*=y,T*=y)),b=Ee(b),T=Ee(T),A=Ee(A),P=Ee(P)):(b=h,P=d,T=A=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=ms(f,"x",o,"px"),v=ms(f,"y",a,"px")),(_||g||m||p)&&(S=Ee(S+_-(_*b+g*A)+m),v=Ee(v+g-(_*T+g*P)+p)),(s||r)&&(y=f.getBBox(),S=Ee(S+s/100*y.width),v=Ee(v+r/100*y.height)),y="matrix("+b+","+T+","+A+","+P+","+S+","+v+")",f.setAttribute("transform",y),M&&(f.style[xe]=y)},Nw=function(t,e,n,s,r){var o=360,a=Ne(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Us:1),c=l-s,u=s+c+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Up)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Up)%o-~~(c/o)*o)),t._pt=d=new un(t._pt,e,n,s,c,yw),d.e=u,d.u="deg",t._props.push(n),d},Hp=function(t,e){for(var n in e)t[n]=e[n];return t},Bw=function(t,e,n){var s=Hp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,_;s.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[xe]=e,a=pa(n,1),rr(n,xe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[xe],o[xe]=e,a=pa(n,1),o[xe]=c);for(l in Gi)c=s[l],u=a[l],c!==u&&r.indexOf(l)<0&&(f=Ke(c),_=Ke(u),h=f!==_?ms(n,l,c,_):parseFloat(c),d=parseFloat(u),t._pt=new un(t._pt,a,l,h,d-h,Lh),t._pt.u=_||0,t._props.push(l));Hp(a,s)};cn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",s="Bottom",r="Left",o=(t<3?[e,n,s,r]:[e+r,e+n,s+n,s+r]).map(function(a){return t<2?i+a:"border"+a+i});Gl[t>1?"border"+i:i]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return Di(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,h)}});var w_={name:"css",register:Oh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,s,r){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,M,S,v,b,T,A,P;Nd||Oh(),this.styles=this.styles||v_(t),P=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(yn[g]&&a_(g,e,n,s,t,r)))){if(f=typeof u,_=Gl[g],f==="function"&&(u=u.call(n,s,t,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ua(u)),_)_(this,t,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",ds.lastIndex=0,ds.test(c)||(m=Ke(c),p=Ke(u)),p?m!==p&&(c=ms(t,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,s,r,0,0,g),o.push(g),P.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,s,t,r):l[g],Ne(c)&&~c.indexOf("random(")&&(c=ua(c)),Ke(c+"")||c==="auto"||(c+=Tn.units[g]||Ke(Di(t,g))||""),(c+"").charAt(1)==="="&&(c=Di(t,g))):c=Di(t,g),d=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in ui&&(g==="autoAlpha"&&(d===1&&Di(t,"visibility")==="hidden"&&h&&(d=0),P.push("visibility",0,a.visibility),as(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ui[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Gi,S){if(this.styles.save(g),f==="string"&&u.substring(0,6)==="var(--"&&(u=zn(t,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),v||(b=t._gsap,b.renderTransform&&!e.parseTransform||pa(t,e.parseTransform),T=e.smoothOrigin!==!1&&b.smooth,v=this._pt=new un(this._pt,a,xe,0,1,b.renderTransform,b,0,-1),v.dep=1),g==="scale")this._pt=new un(this._pt,b,"scaleY",b.scaleY,(M?Yr(b.scaleY,M+h):h)-b.scaleY||0,Lh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(hn,0,a[hn]),u=Lw(u),b.svg?Fh(t,u,0,T,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&as(this,b,"zOrigin",b.zOrigin,p),as(this,a,g,Wl(c),Wl(u)));continue}else if(g==="svgOrigin"){Fh(t,u,1,T,0,this);continue}else if(g in M_){Nw(this,b,g,d,M?Yr(d,M+u):u);continue}else if(g==="smoothOrigin"){as(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){Bw(this,u,t);continue}}else g in a||(g=ho(g)||g);if(S||(h||h===0)&&(d||d===0)&&!xw.test(u)&&g in a)m=(c+"").substr((d+"").length),h||(h=0),p=Ke(u)||(g in Tn.units?Tn.units[g]:m),m!==p&&(d=ms(t,g,c,p)),this._pt=new un(this._pt,S?b:a,g,d,(M?Yr(d,M+h):h)-d,!S&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Mw:Lh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Sw);else if(g in a)Iw.call(this,t,g,c,M?M+u:u);else if(g in t)this.add(t,g,c||t[g],M?M+u:u,s,r);else if(g!=="parseTransform"){Ad(g,u);continue}S||(g in a?P.push(g,0,a[g]):typeof t[g]=="function"?P.push(g,2,t[g]()):P.push(g,1,c||t[g])),o.push(g)}}A&&f_(this)},render:function(t,e){if(e.tween._time||!Bd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Di,aliases:ui,getSetter:function(t,e,n){var s=ui[e];return s&&s.indexOf(",")<0&&(e=s),e in Gi&&e!==hn&&(t._gsap.x||Di(t,"x"))?n&&Lp===n?e==="scale"?Tw:ww:(Lp=n||{})&&(e==="scale"?Aw:Cw):t.style&&!bd(t.style[e])?Ew:~e.indexOf("-")?bw:Od(t,e)},core:{_removeProperty:rr,_getMatrix:zd}};fn.utils.checkPrefix=ho;fn.core.getStyleSaver=v_;(function(i,t,e,n){var s=cn(i+","+t+","+e,function(r){Gi[r]=1});cn(t,function(r){Tn.units[r]="deg",M_[r]=1}),ui[s[13]]=i+","+t,cn(n,function(r){var o=r.split(":");ui[o[1]]=s[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Tn.units[i]="px"});fn.registerPlugin(w_);var T_=fn.registerPlugin(w_)||fn;T_.core.Tween;function kw(i){const t=new Mb({canvas:i,antialias:!0,logarithmicDepthBuffer:!1});return t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=qm,t.toneMapping=$m,t.toneMappingExposure=1,t}const Vp={type:"change"},Hd={type:"start"},A_={type:"end"},rl=new Ma,Gp=new Pi,zw=Math.cos(70*oa.DEG2RAD),Ce=new D,sn=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fu=1e-6;class Hw extends kx{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new ir,this._lastTargetPosition=new D,this._quat=new ir().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jf,this._sphericalDelta=new Jf,this._scale=1,this._panOffset=new D,this._rotateStart=new Ft,this._rotateEnd=new Ft,this._rotateDelta=new Ft,this._panStart=new Ft,this._panEnd=new Ft,this._panDelta=new Ft,this._dollyStart=new Ft,this._dollyEnd=new Ft,this._dollyDelta=new Ft,this._dollyDirection=new D,this._mouse=new Ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gw.bind(this),this._onPointerDown=Vw.bind(this),this._onPointerUp=Ww.bind(this),this._onContextMenu=Zw.bind(this),this._onMouseWheel=Yw.bind(this),this._onKeyDown=qw.bind(this),this._onTouchStart=Kw.bind(this),this._onTouchMove=$w.bind(this),this._onMouseDown=Xw.bind(this),this._onMouseMove=jw.bind(this),this._interceptControlDown=Jw.bind(this),this._interceptControlUp=Qw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vp),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;Ce.copy(e).sub(this.target),Ce.applyQuaternion(this._quat),this._spherical.setFromVector3(Ce),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ce.setFromSpherical(this._spherical),Ce.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ce),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ce.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ce.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(rl.origin.copy(this.object.position),rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rl.direction))<zw?this.object.lookAt(this.target):(Gp.setFromNormalAndCoplanarPoint(this.object.up,this.target),rl.intersectPlane(Gp,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fu||this._lastTargetPosition.distanceToSquared(this.target)>fu?(this.dispatchEvent(Vp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ce.setFromMatrixColumn(e,0),Ce.multiplyScalar(-t),this._panOffset.add(Ce)}_panUp(t,e){this.screenSpacePanning===!0?Ce.setFromMatrixColumn(e,1):(Ce.setFromMatrixColumn(e,0),Ce.crossVectors(this.object.up,Ce)),Ce.multiplyScalar(t),this._panOffset.add(Ce)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ce.copy(s).sub(this.target);let r=Ce.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Vw(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Gw(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ww(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(A_),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Xw(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ie.DOLLY;break;case js.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}break;case js.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Hd)}function jw(i){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Yw(i){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(i.preventDefault(),this.dispatchEvent(Hd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(A_))}function qw(i){this.enabled!==!1&&this._handleKeyDown(i)}function Kw(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ie.TOUCH_ROTATE;break;case is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ie.TOUCH_DOLLY_PAN;break;case is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Hd)}function $w(i){switch(this._trackPointer(i),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ie.NONE}}function Zw(i){this.enabled!==!1&&i.preventDefault()}function Jw(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qw(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function tT(i,t){const e=new Hw(i,t.domElement);return e.enableDamping=!0,e.dampingFactor=.1,e.rotateSpeed=.9,e.zoomSpeed=1.2,e.enablePan=!0,e.mouseButtons.RIGHT=js.PAN,e.touches={ONE:is.ROTATE,TWO:is.DOLLY_PAN},e.saveState(),e}const Ci=new fx,de=new Sn(75,window.innerWidth/window.innerHeight,.1,5e3),Nn=new Px(16777215,500);let Vs,Ye;function eT(i){de.position.z=80,de.position.y=30,de.updateProjectionMatrix(),Vs=kw(i),Ye=tT(de,Vs),Nn.castShadow=!0,Nn.distance=0,Nn.decay=1,Nn.shadow.mapSize.width=2048,Nn.shadow.mapSize.height=2048;const t=new Ix(16777215,.4);Ci.add(t)}const jo=[{id:"sun",parentId:null,name:"Sun",radius:696340,mass:1988500,density:1408,surfaceGravity:274,color:16776960,semiMajorAxis:0,orbitalPeriod:1,eccentricity:0,edu:{shortDescription:"The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/600px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Sun"}},{id:"mercury",parentId:"sun",name:"Mercury",radius:2440,mass:.33011,density:5427,surfaceGravity:3.7,inclination:7.005,color:8947848,semiMajorAxis:.387,orbitalPeriod:88,eccentricity:.206,texture:"assets/8k_mercury.jpg",edu:{shortDescription:"Mercury is the smallest planet in the Solar System and closest to the Sun. Its orbit takes 88 Earth days, the shortest of all the Sun's planets.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/600px-Mercury_in_true_color.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Mercury_(planet)"}},{id:"venus",parentId:"sun",name:"Venus",radius:6052,mass:4.8675,density:5243,surfaceGravity:8.87,inclination:3.39,color:15658666,semiMajorAxis:.723,orbitalPeriod:224.7,eccentricity:.007,texture:"assets/4k_venus_atmosphere.jpg",edu:{shortDescription:"Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/600px-Venus-real_color.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Venus"}},{id:"earth",parentId:"sun",name:"Earth",radius:6371,mass:5.97237,density:5514,surfaceGravity:9.807,inclination:0,color:5083390,semiMajorAxis:1,orbitalPeriod:365.2,eccentricity:.017,texture:"assets/earth.jpeg",orbitalElements:{aKm:149598023,e:.0167086,iDeg:5e-5,lanDeg:-11.26064,argPeriDeg:114.20783,meanAnomalyDeg:358.617,epochISO:"2000-01-01T12:00:00Z"},edu:{shortDescription:"Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land with the remaining 70.8% being covered with water.",thumbnail:"assets/earth.jpeg",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/600px-The_Blue_Marble_%28remastered%29.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Earth",sourceName:"Wikipedia",license:"CC BY-SA 3.0"}},{id:"mars",parentId:"sun",name:"Mars",radius:3390,mass:.64171,density:3933,surfaceGravity:3.721,inclination:1.85,color:16711680,semiMajorAxis:1.524,orbitalPeriod:687,eccentricity:.093,texture:"assets/8k_mars.jpg",edu:{shortDescription:"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Mars"}},{id:"jupiter",parentId:"sun",name:"Jupiter",radius:69911,mass:1898.19,density:1326,surfaceGravity:24.79,inclination:1.305,color:16767149,semiMajorAxis:5.204,orbitalPeriod:4331,axialTilt:3.08,eccentricity:.048,texture:"assets/2k_jupiter.jpg",rings:{type:"jupiter",color:10193792,bands:[{innerRadius:92e3,outerRadius:122500,type:"halo"},{innerRadius:122500,outerRadius:129e3,type:"main"},{innerRadius:129e3,outerRadius:182e3,type:"gossamer"},{innerRadius:129e3,outerRadius:226e3,type:"gossamer"}]},edu:{shortDescription:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jupiter_New_Horizons.jpg/600px-Jupiter_New_Horizons.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Jupiter"}},{id:"saturn",parentId:"sun",name:"Saturn",radius:58232,mass:568.34,density:687,surfaceGravity:10.44,inclination:2.485,color:15787464,semiMajorAxis:9.582,orbitalPeriod:10747,axialTilt:26.73,eccentricity:.054,texture:"assets/8k_saturn.jpg",rings:{type:"saturn",texture:"assets/8k_saturn_ring_alpha.jpg",color:16776938,bands:[{innerRadius:74658,outerRadius:92e3},{innerRadius:92e3,outerRadius:117580},{innerRadius:122170,outerRadius:136775}]},edu:{shortDescription:"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Saturn"}},{id:"uranus",parentId:"sun",name:"Uranus",radius:25362,mass:86.813,density:1270,surfaceGravity:8.69,inclination:.772,color:11525109,semiMajorAxis:19.229,orbitalPeriod:30589,axialTilt:97.92,eccentricity:.047,texture:"assets/2k_uranus.jpg",rings:{type:"uranus",color:3556687,bands:[{innerRadius:41836,outerRadius:41838},{innerRadius:42233,outerRadius:42236},{innerRadius:42568,outerRadius:42572},{innerRadius:44714,outerRadius:44722},{innerRadius:45657,outerRadius:45665},{innerRadius:47174,outerRadius:47176},{innerRadius:47625,outerRadius:47629},{innerRadius:48297,outerRadius:48303},{innerRadius:51120,outerRadius:51178}]},edu:{shortDescription:"Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn).",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/600px-Uranus2.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Uranus"}},{id:"neptune",parentId:"sun",name:"Neptune",radius:24622,mass:102.413,density:1638,surfaceGravity:11.15,inclination:1.769,color:4022005,semiMajorAxis:30.109,orbitalPeriod:59800,axialTilt:29.6,eccentricity:.009,texture:"assets/2k_neptune.jpg",rings:{type:"neptune",color:6323083,bands:[{innerRadius:40900,outerRadius:42900},{innerRadius:53143,outerRadius:53257},{innerRadius:53200,outerRadius:57200},{innerRadius:62914,outerRadius:62950}],arcs:[{innerRadius:62914,outerRadius:62950,thetaStart:247*Math.PI/180,thetaLength:10*Math.PI/180},{innerRadius:62914,outerRadius:62950,thetaStart:261*Math.PI/180,thetaLength:3*Math.PI/180},{innerRadius:62914,outerRadius:62950,thetaStart:265*Math.PI/180,thetaLength:1*Math.PI/180},{innerRadius:62914,outerRadius:62950,thetaStart:276*Math.PI/180,thetaLength:4*Math.PI/180},{innerRadius:62914,outerRadius:62950,thetaStart:284.5*Math.PI/180,thetaLength:1*Math.PI/180}]},edu:{shortDescription:"Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/600px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Neptune"}},{id:"moon",parentId:"earth",name:"Moon",radius:1737,mass:.07346,density:3344,surfaceGravity:1.62,inclination:5.145,color:13421772,semiMajorAxis:0,semiMajorAxisKm:384400,orbitalPeriod:27.3,eccentricity:.0549,edu:{shortDescription:"The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System, and the largest and most massive relative to its parent planet.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/600px-FullMoon2010.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Moon"}},{id:"io",parentId:"jupiter",name:"Io",radius:1821,color:15059025,semiMajorAxis:0,semiMajorAxisKm:421600,orbitalPeriod:1.77,eccentricity:.0041},{id:"europa",parentId:"jupiter",name:"Europa",radius:1560,color:9141634,semiMajorAxis:0,semiMajorAxisKm:670900,orbitalPeriod:3.55,eccentricity:.009},{id:"ganymede",parentId:"jupiter",name:"Ganymede",radius:2634,color:10393486,semiMajorAxis:0,semiMajorAxisKm:107e4,orbitalPeriod:7.15,eccentricity:.0013},{id:"callisto",parentId:"jupiter",name:"Callisto",radius:2410,color:6052956,semiMajorAxis:0,semiMajorAxisKm:1883e3,orbitalPeriod:16.69,eccentricity:.0074},{id:"mimas",parentId:"saturn",name:"Mimas",radius:198,color:13421772,semiMajorAxis:0,semiMajorAxisKm:185539,orbitalPeriod:.94,eccentricity:.0196},{id:"enceladus",parentId:"saturn",name:"Enceladus",radius:250,color:13421772,semiMajorAxis:0,semiMajorAxisKm:238042,orbitalPeriod:1.4,eccentricity:.0047},{id:"titan",parentId:"saturn",name:"Titan",radius:2575,color:13421772,semiMajorAxis:0,semiMajorAxisKm:1221865,orbitalPeriod:16,eccentricity:.0288},{id:"iapetus",parentId:"saturn",name:"Iapetus",radius:718,color:13421772,semiMajorAxis:0,semiMajorAxisKm:3560854,orbitalPeriod:79.33,eccentricity:.0283},{id:"miranda",parentId:"uranus",name:"Miranda",radius:236,color:13421772,semiMajorAxis:0,semiMajorAxisKm:129846,orbitalPeriod:1.413,eccentricity:.0013},{id:"ariel",parentId:"uranus",name:"Ariel",radius:579,color:13421772,semiMajorAxis:0,semiMajorAxisKm:190929,orbitalPeriod:2.52,eccentricity:.0012},{id:"umbriel",parentId:"uranus",name:"Umbriel",radius:585,color:13421772,semiMajorAxis:0,semiMajorAxisKm:265986,orbitalPeriod:4.144,eccentricity:.0039},{id:"titania",parentId:"uranus",name:"Titania",radius:789,color:13421772,semiMajorAxis:0,semiMajorAxisKm:436298,orbitalPeriod:8.706,eccentricity:.0011},{id:"proteus",parentId:"neptune",name:"Proteus",radius:209,color:13421772,semiMajorAxis:0,semiMajorAxisKm:117600,orbitalPeriod:1.122,eccentricity:5e-4},{id:"triton",parentId:"neptune",name:"Triton",radius:1350,color:13421772,semiMajorAxis:0,semiMajorAxisKm:354760,orbitalPeriod:-5.877,eccentricity:16e-6},{id:"nereid",parentId:"neptune",name:"Nereid",radius:170,color:13421772,semiMajorAxis:0,semiMajorAxisKm:5513400,orbitalPeriod:360.13,eccentricity:.7507}];function hi(i){return i/8e3}const Wp=1496e8;function nT(i){return typeof i!="number"||!isFinite(i)?"N/A":(i/1e3).toFixed(2)+" km/s"}function iT(i){const t=i>>16&255,e=i>>8&255,n=i&255;return .299*t+.587*e+.114*n<128?7522559:255}const Gs=1495978707e-1,sT=6371;function rT(i){return i/Gs}function oT(i){return i/sT}function Xp(i,t,e=4){return t==="km"?`${Number(i.toFixed(0)).toLocaleString()} km`:t==="au"?`${rT(i).toFixed(e)} AU`:`${oT(i).toFixed(e)} R⊕`}function aT(i,t){const e=i.rings,n=new Li;if(t.add(n),n.rotation.x=Math.PI/2,i.axialTilt){const l=i.axialTilt*(Math.PI/180);n.rotation.z=l}const s=e.bands.find(l=>l.type==="main"),r=e.bands.find(l=>l.type==="halo"),o=e.bands.filter(l=>l.type==="gossamer"),a=(l,c,u,h,d,f)=>{const _=hi(l),g=hi(c),m=[];for(let v=0;v<u;v++){const b=Math.random()*2*Math.PI,T=oa.randFloat(_,g),A=T*Math.cos(b),P=T*Math.sin(b),y=(Math.random()-.5)*.05;m.push(A,P,y)}const p=new We;p.setAttribute("position",new De(m,3));const M=new yd({color:h,size:d,transparent:!0,opacity:f,blending:Pu});return new gg(p,M)};if(s){const l=a(s.innerRadius,s.outerRadius,2e4,e.color,.02,.05);n.add(l)}if(r){const l=a(r.innerRadius,r.outerRadius,1e4,e.color,.02,.02);n.add(l)}o.forEach(l=>{const c=a(l.innerRadius,l.outerRadius,15e3,e.color,.015,.01);n.add(c)})}function lT(i,t,e){const n=i.rings,s=new Li;if(t.add(s),s.rotation.x=Math.PI/2,i.axialTilt){const c=i.axialTilt*(Math.PI/180);s.rotation.z=c}const r=hi(n.bands[0].innerRadius),o=hi(n.bands[n.bands.length-1].outerRadius),a=new ro(r,o,256),l=()=>{console.warn("Saturn's ring texture failed to load. Creating a fallback non-textured ring.");const c=new Ui({color:n.color,side:an,transparent:!0,opacity:.5,roughness:.8,metalness:.1}),u=new Pe(a,c);s.add(u)};e.load(n.texture,c=>{c.colorSpace=xn;const u=new Ui({map:c,alphaMap:c,color:n.color,side:an,transparent:!0,roughness:.4,metalness:.1}),h=new Pe(a,u);s.add(h)},void 0,()=>{l()})}function cT(i,t){const e=i.rings,n=new Li;if(t.add(n),n.rotation.x=Math.PI/2,i.axialTilt){const c=i.axialTilt*(Math.PI/180);n.rotation.z=c}const s=document.createElement("canvas"),r=s.getContext("2d");s.width=128,s.height=1;const o=r.createImageData(128,1);for(let c=0;c<o.data.length;c+=4){const u=Math.random()*100+155;o.data[c]=u,o.data[c+1]=u,o.data[c+2]=u,o.data[c+3]=255}r.putImageData(o,0,0);const a=new _g(s);a.wrapS=ta,a.repeat.x=8;const l=new Ui({color:e.color,side:an,transparent:!0,opacity:.7,roughness:.8,metalness:.2,alphaMap:a});e.bands.forEach(c=>{const u=hi(c.innerRadius),h=hi(c.outerRadius),d=new ro(u,h,128),f=new Pe(d,l);n.add(f)})}function uT(i,t){const e=i.rings,n=new Li;if(t.add(n),n.rotation.x=Math.PI/2,i.axialTilt){const u=i.axialTilt*(Math.PI/180);n.rotation.z=u}const s=document.createElement("canvas"),r=s.getContext("2d");s.width=256,s.height=1;const o=r.createImageData(256,1);for(let u=0;u<o.data.length;u+=4){const h=Math.random()>.6?Math.random()*80+20:0;o.data[u]=h,o.data[u+1]=h,o.data[u+2]=h,o.data[u+3]=255}r.putImageData(o,0,0);const a=new _g(s);a.wrapS=ta,a.repeat.x=32;const l=new Ui({color:e.color,side:an,transparent:!0,opacity:.5,roughness:.9,metalness:.1,alphaMap:a});e.bands.forEach(u=>{const h=hi(u.innerRadius),d=hi(u.outerRadius),f=new ro(h,d,256),_=new Pe(f,l);n.add(_)});const c=new Ui({color:new Wt(e.color).multiplyScalar(1.8),side:an,transparent:!0,opacity:1,roughness:.8,metalness:.2});e.arcs.forEach(u=>{const h=hi(u.innerRadius),d=hi(u.outerRadius),f=new ro(h,d,128,1,u.thetaStart,u.thetaLength),_=new Pe(f,c);n.add(_)})}function hT(i,t,e){if(i.rings)switch(i.rings.type){case"jupiter":aT(i,t);break;case"saturn":lT(i,t,e);break;case"uranus":cT(i,t);break;case"neptune":uT(i,t);break;default:console.warn(`Unknown ring type for planet ${i.name}`)}}const ol=150;function pu(i,t){if(!i||typeof i.x!="number"||typeof i.y!="number"||typeof i.z!="number")return console.warn("calculateDisplayPositionForPreset: Invalid positionAu:",i),new D(0,0,0);if(!t||!["realistic","educational","hybrid"].includes(t))return console.warn("calculateDisplayPositionForPreset: Invalid preset:",t),new D(0,0,0);try{const e=i.length();if(e===0)return new D(0,0,0);if(e<0)return console.warn("calculateDisplayPositionForPreset: Negative distanceAu:",e),new D(0,0,0);let n;switch(t){case"realistic":n=e*ol;break;case"educational":n=Math.pow(e,.6)*ol;break;case"hybrid":n=Math.log1p(Math.max(e,Number.EPSILON))*ol;break;default:console.warn("calculateDisplayPositionForPreset: Unknown preset:",t),n=e*ol}return isFinite(n)?new D().copy(i).setLength(n):(console.warn("calculateDisplayPositionForPreset: Invalid displayDistance:",n),new D(0,0,0))}catch(e){return console.warn("calculateDisplayPositionForPreset: Error during calculation:",e),new D(0,0,0)}}function Xl(i,t){if(!i||typeof i.x!="number"||typeof i.y!="number"||typeof i.z!="number")return console.warn("calculateDisplayPosition: Invalid positionAu:",i),new D(0,0,0);if(!t||typeof t.active!="boolean")return console.warn("calculateDisplayPosition: Invalid transition object:",t),new D(0,0,0);try{if(t.active){const e=pu(i,t.fromPreset),n=pu(i,t.toPreset);return!e||typeof e.x!="number"||!n||typeof n.x!="number"?(console.warn("calculateDisplayPosition: Invalid intermediate positions in transition"),new D(0,0,0)):new D().lerpVectors(e,n,t.progress)}else return pu(i,t.toPreset)}catch(e){return console.warn("calculateDisplayPosition: Error during calculation:",e),new D(0,0,0)}}const dT=5e-6,fT=2e-4,pT=1e-4;function mu(i,t){switch(t){case"realistic":return i*dT;case"educational":return i*fT;case"hybrid":return i*pT}}function mT(i,t){if(t.active){const e=mu(i,t.fromPreset),n=mu(i,t.toPreset);return e+(n-e)*t.progress}else return mu(i,t.toPreset)}const fo=document.getElementById("infoPanel"),gT=document.getElementById("info-name");document.getElementById("info-controls");const jp=document.getElementById("info-image"),_T=document.getElementById("info-link"),vT=document.getElementById("info-short-desc"),Uo=document.getElementById("info-basic-stats"),Oo=document.getElementById("info-orbital-chars");document.getElementById("info-advanced-details");document.getElementById("advanced-details-toggle");document.getElementById("advanced-details-content");document.getElementById("play-pause-btn");const C_=document.getElementById("reset-btn"),Nh=document.getElementById("shadow-toggle"),xT=document.querySelector("#bg");document.getElementById("selection-panel");const yT=document.getElementById("celestialSelector"),fc=document.getElementById("celestial-selector-menu"),Bh=document.getElementById("free-camera-btn");document.getElementById("help-button");document.getElementById("time-scale-label");document.getElementById("time-step-backward");document.getElementById("time-scale-slider");document.getElementById("time-step-forward");document.querySelectorAll(".time-preset");const ST=document.getElementById("time-controls"),R_=document.getElementById("debug-hud");document.getElementById("debug-preset");document.getElementById("debug-dpr");document.getElementById("debug-avg-ms");document.getElementById("debug-scale");const Al=document.getElementById("help-overlay"),MT=document.getElementById("help-overlay-close"),Ii=document.getElementById("quick-access-toolbar"),kh=document.getElementById("small-info-card"),Yp=document.getElementById("card-thumb"),ET=document.getElementById("card-title"),qp=document.getElementById("card-stats"),Kp=document.getElementById("btn-frame"),jl=document.getElementById("btn-follow"),al=document.getElementById("btn-orbit"),$p=document.getElementById("performance-preset"),bT=document.getElementById("mainPanel");function wT(i){const t=new Map;i.forEach(n=>{let s;n.parentId?n.parentId==="sun"?s="planet":s="moon":s="star",t.set(n.id,{id:n.id,name:n.name,spec:n,children:[],parent:null,depth:0,expanded:!1,visible:!0,element:null,type:s})});const e=[];return t.forEach(n=>{const s=n.spec.parentId;if(s&&t.has(s)){const r=t.get(s);n.parent=r,n.depth=r.depth+1,r.children.push(n)}else e.push(n)}),e}function Wi(i){return Array.isArray?Array.isArray(i):I_(i)==="[object Array]"}function TT(i){if(typeof i=="string")return i;let t=i+"";return t=="0"&&1/i==-1/0?"-0":t}function AT(i){return i==null?"":TT(i)}function di(i){return typeof i=="string"}function P_(i){return typeof i=="number"}function CT(i){return i===!0||i===!1||RT(i)&&I_(i)=="[object Boolean]"}function D_(i){return typeof i=="object"}function RT(i){return D_(i)&&i!==null}function Mn(i){return i!=null}function gu(i){return!i.trim().length}function I_(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(i)}const PT="Incorrect 'index' type",DT=i=>`Invalid value for key ${i}`,IT=i=>`Pattern length exceeds max of ${i}.`,LT=i=>`Missing ${i} property in key`,UT=i=>`Property 'weight' in key '${i}' must be a positive integer`,Zp=Object.prototype.hasOwnProperty;class OT{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach(n=>{let s=L_(n);this._keys.push(s),this._keyMap[s.id]=s,e+=s.weight}),this._keys.forEach(n=>{n.weight/=e})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function L_(i){let t=null,e=null,n=null,s=1,r=null;if(di(i)||Wi(i))n=i,t=Jp(i),e=zh(i);else{if(!Zp.call(i,"name"))throw new Error(LT("name"));const o=i.name;if(n=o,Zp.call(i,"weight")&&(s=i.weight,s<=0))throw new Error(UT(o));t=Jp(o),e=zh(o),r=i.getFn}return{path:t,id:e,weight:s,src:n,getFn:r}}function Jp(i){return Wi(i)?i:i.split(".")}function zh(i){return Wi(i)?i.join("."):i}function FT(i,t){let e=[],n=!1;const s=(r,o,a)=>{if(Mn(r))if(!o[a])e.push(r);else{let l=o[a];const c=r[l];if(!Mn(c))return;if(a===o.length-1&&(di(c)||P_(c)||CT(c)))e.push(AT(c));else if(Wi(c)){n=!0;for(let u=0,h=c.length;u<h;u+=1)s(c[u],o,a+1)}else o.length&&s(c,o,a+1)}};return s(i,di(t)?t.split("."):t,0),n?e:e[0]}const NT={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},BT={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(i,t)=>i.score===t.score?i.idx<t.idx?-1:1:i.score<t.score?-1:1},kT={location:0,threshold:.6,distance:100},zT={useExtendedSearch:!1,getFn:FT,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Ut={...BT,...NT,...kT,...zT};const HT=/[^ ]+/g;function VT(i=1,t=3){const e=new Map,n=Math.pow(10,t);return{get(s){const r=s.match(HT).length;if(e.has(r))return e.get(r);const o=1/Math.pow(r,.5*i),a=parseFloat(Math.round(o*n)/n);return e.set(r,a),a},clear(){e.clear()}}}class Vd{constructor({getFn:t=Ut.getFn,fieldNormWeight:e=Ut.fieldNormWeight}={}){this.norm=VT(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((e,n)=>{this._keysMap[e.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,di(this.docs[0])?this.docs.forEach((t,e)=>{this._addString(t,e)}):this.docs.forEach((t,e)=>{this._addObject(t,e)}),this.norm.clear())}add(t){const e=this.size();di(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!Mn(t)||gu(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let n={i:e,$:{}};this.keys.forEach((s,r)=>{let o=s.getFn?s.getFn(t):this.getFn(t,s.path);if(Mn(o)){if(Wi(o)){let a=[];const l=[{nestedArrIndex:-1,value:o}];for(;l.length;){const{nestedArrIndex:c,value:u}=l.pop();if(Mn(u))if(di(u)&&!gu(u)){let h={v:u,i:c,n:this.norm.get(u)};a.push(h)}else Wi(u)&&u.forEach((h,d)=>{l.push({nestedArrIndex:d,value:h})})}n.$[r]=a}else if(di(o)&&!gu(o)){let a={v:o,n:this.norm.get(o)};n.$[r]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function U_(i,t,{getFn:e=Ut.getFn,fieldNormWeight:n=Ut.fieldNormWeight}={}){const s=new Vd({getFn:e,fieldNormWeight:n});return s.setKeys(i.map(L_)),s.setSources(t),s.create(),s}function GT(i,{getFn:t=Ut.getFn,fieldNormWeight:e=Ut.fieldNormWeight}={}){const{keys:n,records:s}=i,r=new Vd({getFn:t,fieldNormWeight:e});return r.setKeys(n),r.setIndexRecords(s),r}function ll(i,{errors:t=0,currentLocation:e=0,expectedLocation:n=0,distance:s=Ut.distance,ignoreLocation:r=Ut.ignoreLocation}={}){const o=t/i.length;if(r)return o;const a=Math.abs(n-e);return s?o+a/s:a?1:o}function WT(i=[],t=Ut.minMatchCharLength){let e=[],n=-1,s=-1,r=0;for(let o=i.length;r<o;r+=1){let a=i[r];a&&n===-1?n=r:!a&&n!==-1&&(s=r-1,s-n+1>=t&&e.push([n,s]),n=-1)}return i[r-1]&&r-n>=t&&e.push([n,r-1]),e}const Bs=32;function XT(i,t,e,{location:n=Ut.location,distance:s=Ut.distance,threshold:r=Ut.threshold,findAllMatches:o=Ut.findAllMatches,minMatchCharLength:a=Ut.minMatchCharLength,includeMatches:l=Ut.includeMatches,ignoreLocation:c=Ut.ignoreLocation}={}){if(t.length>Bs)throw new Error(IT(Bs));const u=t.length,h=i.length,d=Math.max(0,Math.min(n,h));let f=r,_=d;const g=a>1||l,m=g?Array(h):[];let p;for(;(p=i.indexOf(t,_))>-1;){let A=ll(t,{currentLocation:p,expectedLocation:d,distance:s,ignoreLocation:c});if(f=Math.min(A,f),_=p+u,g){let P=0;for(;P<u;)m[p+P]=1,P+=1}}_=-1;let M=[],S=1,v=u+h;const b=1<<u-1;for(let A=0;A<u;A+=1){let P=0,y=v;for(;P<y;)ll(t,{errors:A,currentLocation:d+y,expectedLocation:d,distance:s,ignoreLocation:c})<=f?P=y:v=y,y=Math.floor((v-P)/2+P);v=y;let x=Math.max(1,d-y+1),C=o?h:Math.min(d+y,h)+u,F=Array(C+2);F[C+1]=(1<<A)-1;for(let G=C;G>=x;G-=1){let L=G-1,U=e[i.charAt(L)];if(g&&(m[L]=+!!U),F[G]=(F[G+1]<<1|1)&U,A&&(F[G]|=(M[G+1]|M[G])<<1|1|M[G+1]),F[G]&b&&(S=ll(t,{errors:A,currentLocation:L,expectedLocation:d,distance:s,ignoreLocation:c}),S<=f)){if(f=S,_=L,_<=d)break;x=Math.max(1,2*d-_)}}if(ll(t,{errors:A+1,currentLocation:d,expectedLocation:d,distance:s,ignoreLocation:c})>f)break;M=F}const T={isMatch:_>=0,score:Math.max(.001,S)};if(g){const A=WT(m,a);A.length?l&&(T.indices=A):T.isMatch=!1}return T}function jT(i){let t={};for(let e=0,n=i.length;e<n;e+=1){const s=i.charAt(e);t[s]=(t[s]||0)|1<<n-e-1}return t}const Yl=String.prototype.normalize?(i=>i.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(i=>i);class O_{constructor(t,{location:e=Ut.location,threshold:n=Ut.threshold,distance:s=Ut.distance,includeMatches:r=Ut.includeMatches,findAllMatches:o=Ut.findAllMatches,minMatchCharLength:a=Ut.minMatchCharLength,isCaseSensitive:l=Ut.isCaseSensitive,ignoreDiacritics:c=Ut.ignoreDiacritics,ignoreLocation:u=Ut.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:s,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreDiacritics:c,ignoreLocation:u},t=l?t:t.toLowerCase(),t=c?Yl(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const h=(f,_)=>{this.chunks.push({pattern:f,alphabet:jT(f),startIndex:_})},d=this.pattern.length;if(d>Bs){let f=0;const _=d%Bs,g=d-_;for(;f<g;)h(this.pattern.substr(f,Bs),f),f+=Bs;if(_){const m=d-Bs;h(this.pattern.substr(m),m)}}else h(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,ignoreDiacritics:n,includeMatches:s}=this.options;if(t=e?t:t.toLowerCase(),t=n?Yl(t):t,this.pattern===t){let g={isMatch:!0,score:0};return s&&(g.indices=[[0,t.length-1]]),g}const{location:r,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:c,ignoreLocation:u}=this.options;let h=[],d=0,f=!1;this.chunks.forEach(({pattern:g,alphabet:m,startIndex:p})=>{const{isMatch:M,score:S,indices:v}=XT(t,g,m,{location:r+p,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:c,includeMatches:s,ignoreLocation:u});M&&(f=!0),d+=S,M&&v&&(h=[...h,...v])});let _={isMatch:f,score:f?d/this.chunks.length:1};return f&&s&&(_.indices=h),_}}class xs{constructor(t){this.pattern=t}static isMultiMatch(t){return Qp(t,this.multiRegex)}static isSingleMatch(t){return Qp(t,this.singleRegex)}search(){}}function Qp(i,t){const e=i.match(t);return e?e[1]:null}class YT extends xs{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class qT extends xs{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class KT extends xs{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class $T extends xs{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class ZT extends xs{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class JT extends xs{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class F_ extends xs{constructor(t,{location:e=Ut.location,threshold:n=Ut.threshold,distance:s=Ut.distance,includeMatches:r=Ut.includeMatches,findAllMatches:o=Ut.findAllMatches,minMatchCharLength:a=Ut.minMatchCharLength,isCaseSensitive:l=Ut.isCaseSensitive,ignoreDiacritics:c=Ut.ignoreDiacritics,ignoreLocation:u=Ut.ignoreLocation}={}){super(t),this._bitapSearch=new O_(t,{location:e,threshold:n,distance:s,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreDiacritics:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class N_ extends xs{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e=0,n;const s=[],r=this.pattern.length;for(;(n=t.indexOf(this.pattern,e))>-1;)e=n+r,s.push([n,e-1]);const o=!!s.length;return{isMatch:o,score:o?0:1,indices:s}}}const Hh=[YT,N_,KT,$T,JT,ZT,qT,F_],tm=Hh.length,QT=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,t1="|";function e1(i,t={}){return i.split(t1).map(e=>{let n=e.trim().split(QT).filter(r=>r&&!!r.trim()),s=[];for(let r=0,o=n.length;r<o;r+=1){const a=n[r];let l=!1,c=-1;for(;!l&&++c<tm;){const u=Hh[c];let h=u.isMultiMatch(a);h&&(s.push(new u(h,t)),l=!0)}if(!l)for(c=-1;++c<tm;){const u=Hh[c];let h=u.isSingleMatch(a);if(h){s.push(new u(h,t));break}}}return s})}const n1=new Set([F_.type,N_.type]);class i1{constructor(t,{isCaseSensitive:e=Ut.isCaseSensitive,ignoreDiacritics:n=Ut.ignoreDiacritics,includeMatches:s=Ut.includeMatches,minMatchCharLength:r=Ut.minMatchCharLength,ignoreLocation:o=Ut.ignoreLocation,findAllMatches:a=Ut.findAllMatches,location:l=Ut.location,threshold:c=Ut.threshold,distance:u=Ut.distance}={}){this.query=null,this.options={isCaseSensitive:e,ignoreDiacritics:n,includeMatches:s,minMatchCharLength:r,findAllMatches:a,ignoreLocation:o,location:l,threshold:c,distance:u},t=e?t:t.toLowerCase(),t=n?Yl(t):t,this.pattern=t,this.query=e1(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:s,ignoreDiacritics:r}=this.options;t=s?t:t.toLowerCase(),t=r?Yl(t):t;let o=0,a=[],l=0;for(let c=0,u=e.length;c<u;c+=1){const h=e[c];a.length=0,o=0;for(let d=0,f=h.length;d<f;d+=1){const _=h[d],{isMatch:g,indices:m,score:p}=_.search(t);if(g){if(o+=1,l+=p,n){const M=_.constructor.type;n1.has(M)?a=[...a,...m]:a.push(m)}}else{l=0,o=0,a.length=0;break}}if(o){let d={isMatch:!0,score:l/o};return n&&(d.indices=a),d}}return{isMatch:!1,score:1}}}const Vh=[];function s1(...i){Vh.push(...i)}function Gh(i,t){for(let e=0,n=Vh.length;e<n;e+=1){let s=Vh[e];if(s.condition(i,t))return new s(i,t)}return new O_(i,t)}const ql={AND:"$and",OR:"$or"},Wh={PATH:"$path",PATTERN:"$val"},Xh=i=>!!(i[ql.AND]||i[ql.OR]),r1=i=>!!i[Wh.PATH],o1=i=>!Wi(i)&&D_(i)&&!Xh(i),em=i=>({[ql.AND]:Object.keys(i).map(t=>({[t]:i[t]}))});function B_(i,t,{auto:e=!0}={}){const n=s=>{let r=Object.keys(s);const o=r1(s);if(!o&&r.length>1&&!Xh(s))return n(em(s));if(o1(s)){const l=o?s[Wh.PATH]:r[0],c=o?s[Wh.PATTERN]:s[l];if(!di(c))throw new Error(DT(l));const u={keyId:zh(l),pattern:c};return e&&(u.searcher=Gh(c,t)),u}let a={children:[],operator:r[0]};return r.forEach(l=>{const c=s[l];Wi(c)&&c.forEach(u=>{a.children.push(n(u))})}),a};return Xh(i)||(i=em(i)),n(i)}function a1(i,{ignoreFieldNorm:t=Ut.ignoreFieldNorm}){i.forEach(e=>{let n=1;e.matches.forEach(({key:s,norm:r,score:o})=>{const a=s?s.weight:null;n*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:r))}),e.score=n})}function l1(i,t){const e=i.matches;t.matches=[],Mn(e)&&e.forEach(n=>{if(!Mn(n.indices)||!n.indices.length)return;const{indices:s,value:r}=n;let o={indices:s,value:r};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),t.matches.push(o)})}function c1(i,t){t.score=i.score}function u1(i,t,{includeMatches:e=Ut.includeMatches,includeScore:n=Ut.includeScore}={}){const s=[];return e&&s.push(l1),n&&s.push(c1),i.map(r=>{const{idx:o}=r,a={item:t[o],refIndex:o};return s.length&&s.forEach(l=>{l(r,a)}),a})}class Mo{constructor(t,e={},n){this.options={...Ut,...e},this.options.useExtendedSearch,this._keyStore=new OT(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof Vd))throw new Error(PT);this._myIndex=e||U_(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){Mn(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const e=[];for(let n=0,s=this._docs.length;n<s;n+=1){const r=this._docs[n];t(r,n)&&(this.removeAt(n),n-=1,s-=1,e.push(r))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:s,shouldSort:r,sortFn:o,ignoreFieldNorm:a}=this.options;let l=di(t)?di(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return a1(l,{ignoreFieldNorm:a}),r&&l.sort(o),P_(e)&&e>-1&&(l=l.slice(0,e)),u1(l,this._docs,{includeMatches:n,includeScore:s})}_searchStringList(t){const e=Gh(t,this.options),{records:n}=this._myIndex,s=[];return n.forEach(({v:r,i:o,n:a})=>{if(!Mn(r))return;const{isMatch:l,score:c,indices:u}=e.searchIn(r);l&&s.push({item:r,idx:o,matches:[{score:c,value:r,norm:a,indices:u}]})}),s}_searchLogical(t){const e=B_(t,this.options),n=(a,l,c)=>{if(!a.children){const{keyId:h,searcher:d}=a,f=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(l,h),searcher:d});return f&&f.length?[{idx:c,item:l,matches:f}]:[]}const u=[];for(let h=0,d=a.children.length;h<d;h+=1){const f=a.children[h],_=n(f,l,c);if(_.length)u.push(..._);else if(a.operator===ql.AND)return[]}return u},s=this._myIndex.records,r={},o=[];return s.forEach(({$:a,i:l})=>{if(Mn(a)){let c=n(e,a,l);c.length&&(r[l]||(r[l]={idx:l,item:a,matches:[]},o.push(r[l])),c.forEach(({matches:u})=>{r[l].matches.push(...u)}))}}),o}_searchObjectList(t){const e=Gh(t,this.options),{keys:n,records:s}=this._myIndex,r=[];return s.forEach(({$:o,i:a})=>{if(!Mn(o))return;let l=[];n.forEach((c,u)=>{l.push(...this._findMatches({key:c,value:o[u],searcher:e}))}),l.length&&r.push({idx:a,item:o,matches:l})}),r}_findMatches({key:t,value:e,searcher:n}){if(!Mn(e))return[];let s=[];if(Wi(e))e.forEach(({v:r,i:o,n:a})=>{if(!Mn(r))return;const{isMatch:l,score:c,indices:u}=n.searchIn(r);l&&s.push({score:c,key:t,value:r,idx:o,norm:a,indices:u})});else{const{v:r,n:o}=e,{isMatch:a,score:l,indices:c}=n.searchIn(r);a&&s.push({score:l,key:t,value:r,norm:o,indices:c})}return s}}Mo.version="7.1.0";Mo.createIndex=U_;Mo.parseIndex=GT;Mo.config=Ut;Mo.parseQuery=B_;s1(i1);const h1=i=>{let t;const e=new Set,n=(c,u)=>{const h=typeof c=="function"?c(t):c;if(!Object.is(h,t)){const d=t;t=u??(typeof h!="object"||h===null)?h:Object.assign({},t,h),e.forEach(f=>f(t,d))}},s=()=>t,a={setState:n,getState:s,getInitialState:()=>l,subscribe:c=>(e.add(c),()=>e.delete(c))},l=t=i(n,s,a);return a},d1=(i=>h1),f1=i=>(t,e,n)=>{const s=n.subscribe;return n.subscribe=((o,a,l)=>{let c=o;if(a){const u=l?.equalityFn||Object.is;let h=o(n.getState());c=d=>{const f=o(d);if(!u(h,f)){const _=h;a(h=f,_)}},l?.fireImmediately&&a(h,h)}return s(c)}),i(t,e,n)},p1=f1;var k_=Symbol.for("immer-nothing"),nm=Symbol.for("immer-draftable"),Dn=Symbol.for("immer-state");function qn(i,...t){throw new Error(`[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`)}var po=Object.getPrototypeOf;function mo(i){return!!i&&!!i[Dn]}function or(i){return i?z_(i)||Array.isArray(i)||!!i[nm]||!!i.constructor?.[nm]||wa(i)||mc(i):!1}var m1=Object.prototype.constructor.toString();function z_(i){if(!i||typeof i!="object")return!1;const t=po(i);if(t===null)return!0;const e=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return e===Object?!0:typeof e=="function"&&Function.toString.call(e)===m1}function Kl(i,t){pc(i)===0?Reflect.ownKeys(i).forEach(e=>{t(e,i[e],i)}):i.forEach((e,n)=>t(n,e,i))}function pc(i){const t=i[Dn];return t?t.type_:Array.isArray(i)?1:wa(i)?2:mc(i)?3:0}function jh(i,t){return pc(i)===2?i.has(t):Object.prototype.hasOwnProperty.call(i,t)}function H_(i,t,e){const n=pc(i);n===2?i.set(t,e):n===3?i.add(e):i[t]=e}function g1(i,t){return i===t?i!==0||1/i===1/t:i!==i&&t!==t}function wa(i){return i instanceof Map}function mc(i){return i instanceof Set}function Os(i){return i.copy_||i.base_}function Yh(i,t){if(wa(i))return new Map(i);if(mc(i))return new Set(i);if(Array.isArray(i))return Array.prototype.slice.call(i);const e=z_(i);if(t===!0||t==="class_only"&&!e){const n=Object.getOwnPropertyDescriptors(i);delete n[Dn];let s=Reflect.ownKeys(n);for(let r=0;r<s.length;r++){const o=s[r],a=n[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(n[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:i[o]})}return Object.create(po(i),n)}else{const n=po(i);if(n!==null&&e)return{...i};const s=Object.create(n);return Object.assign(s,i)}}function Gd(i,t=!1){return gc(i)||mo(i)||!or(i)||(pc(i)>1&&Object.defineProperties(i,{set:{value:cl},add:{value:cl},clear:{value:cl},delete:{value:cl}}),Object.freeze(i),t&&Object.values(i).forEach(e=>Gd(e,!0))),i}function cl(){qn(2)}function gc(i){return Object.isFrozen(i)}var _1={};function ar(i){const t=_1[i];return t||qn(0,i),t}var ma;function V_(){return ma}function v1(i,t){return{drafts_:[],parent_:i,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function im(i,t){t&&(ar("Patches"),i.patches_=[],i.inversePatches_=[],i.patchListener_=t)}function qh(i){Kh(i),i.drafts_.forEach(x1),i.drafts_=null}function Kh(i){i===ma&&(ma=i.parent_)}function sm(i){return ma=v1(ma,i)}function x1(i){const t=i[Dn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function rm(i,t){t.unfinalizedDrafts_=t.drafts_.length;const e=t.drafts_[0];return i!==void 0&&i!==e?(e[Dn].modified_&&(qh(t),qn(4)),or(i)&&(i=$l(t,i),t.parent_||Zl(t,i)),t.patches_&&ar("Patches").generateReplacementPatches_(e[Dn].base_,i,t.patches_,t.inversePatches_)):i=$l(t,e,[]),qh(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),i!==k_?i:void 0}function $l(i,t,e){if(gc(t))return t;const n=t[Dn];if(!n)return Kl(t,(s,r)=>om(i,n,t,s,r,e)),t;if(n.scope_!==i)return t;if(!n.modified_)return Zl(i,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const s=n.copy_;let r=s,o=!1;n.type_===3&&(r=new Set(s),s.clear(),o=!0),Kl(r,(a,l)=>om(i,n,s,a,l,e,o)),Zl(i,s,!1),e&&i.patches_&&ar("Patches").generatePatches_(n,e,i.patches_,i.inversePatches_)}return n.copy_}function om(i,t,e,n,s,r,o){if(mo(s)){const a=r&&t&&t.type_!==3&&!jh(t.assigned_,n)?r.concat(n):void 0,l=$l(i,s,a);if(H_(e,n,l),mo(l))i.canAutoFreeze_=!1;else return}else o&&e.add(s);if(or(s)&&!gc(s)){if(!i.immer_.autoFreeze_&&i.unfinalizedDrafts_<1)return;$l(i,s),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&(wa(e)?e.has(n):Object.prototype.propertyIsEnumerable.call(e,n))&&Zl(i,s)}}function Zl(i,t,e=!1){!i.parent_&&i.immer_.autoFreeze_&&i.canAutoFreeze_&&Gd(t,e)}function y1(i,t){const e=Array.isArray(i),n={type_:e?1:0,scope_:t?t.scope_:V_(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:i,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,r=Wd;e&&(s=[n],r=ga);const{revoke:o,proxy:a}=Proxy.revocable(s,r);return n.draft_=a,n.revoke_=o,a}var Wd={get(i,t){if(t===Dn)return i;const e=Os(i);if(!jh(e,t))return S1(i,e,t);const n=e[t];return i.finalized_||!or(n)?n:n===_u(i.base_,t)?(vu(i),i.copy_[t]=Zh(n,i)):n},has(i,t){return t in Os(i)},ownKeys(i){return Reflect.ownKeys(Os(i))},set(i,t,e){const n=G_(Os(i),t);if(n?.set)return n.set.call(i.draft_,e),!0;if(!i.modified_){const s=_u(Os(i),t),r=s?.[Dn];if(r&&r.base_===e)return i.copy_[t]=e,i.assigned_[t]=!1,!0;if(g1(e,s)&&(e!==void 0||jh(i.base_,t)))return!0;vu(i),$h(i)}return i.copy_[t]===e&&(e!==void 0||t in i.copy_)||Number.isNaN(e)&&Number.isNaN(i.copy_[t])||(i.copy_[t]=e,i.assigned_[t]=!0),!0},deleteProperty(i,t){return _u(i.base_,t)!==void 0||t in i.base_?(i.assigned_[t]=!1,vu(i),$h(i)):delete i.assigned_[t],i.copy_&&delete i.copy_[t],!0},getOwnPropertyDescriptor(i,t){const e=Os(i),n=Reflect.getOwnPropertyDescriptor(e,t);return n&&{writable:!0,configurable:i.type_!==1||t!=="length",enumerable:n.enumerable,value:e[t]}},defineProperty(){qn(11)},getPrototypeOf(i){return po(i.base_)},setPrototypeOf(){qn(12)}},ga={};Kl(Wd,(i,t)=>{ga[i]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});ga.deleteProperty=function(i,t){return ga.set.call(this,i,t,void 0)};ga.set=function(i,t,e){return Wd.set.call(this,i[0],t,e,i[0])};function _u(i,t){const e=i[Dn];return(e?Os(e):i)[t]}function S1(i,t,e){const n=G_(t,e);return n?"value"in n?n.value:n.get?.call(i.draft_):void 0}function G_(i,t){if(!(t in i))return;let e=po(i);for(;e;){const n=Object.getOwnPropertyDescriptor(e,t);if(n)return n;e=po(e)}}function $h(i){i.modified_||(i.modified_=!0,i.parent_&&$h(i.parent_))}function vu(i){i.copy_||(i.copy_=Yh(i.base_,i.scope_.immer_.useStrictShallowCopy_))}var M1=class{constructor(i){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,e,n)=>{if(typeof t=="function"&&typeof e!="function"){const r=e;e=t;const o=this;return function(l=r,...c){return o.produce(l,u=>e.call(this,u,...c))}}typeof e!="function"&&qn(6),n!==void 0&&typeof n!="function"&&qn(7);let s;if(or(t)){const r=sm(this),o=Zh(t,void 0);let a=!0;try{s=e(o),a=!1}finally{a?qh(r):Kh(r)}return im(r,n),rm(s,r)}else if(!t||typeof t!="object"){if(s=e(t),s===void 0&&(s=t),s===k_&&(s=void 0),this.autoFreeze_&&Gd(s,!0),n){const r=[],o=[];ar("Patches").generateReplacementPatches_(t,s,r,o),n(r,o)}return s}else qn(1,t)},this.produceWithPatches=(t,e)=>{if(typeof t=="function")return(o,...a)=>this.produceWithPatches(o,l=>t(l,...a));let n,s;return[this.produce(t,e,(o,a)=>{n=o,s=a}),n,s]},typeof i?.autoFreeze=="boolean"&&this.setAutoFreeze(i.autoFreeze),typeof i?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(i.useStrictShallowCopy)}createDraft(i){or(i)||qn(8),mo(i)&&(i=E1(i));const t=sm(this),e=Zh(i,void 0);return e[Dn].isManual_=!0,Kh(t),e}finishDraft(i,t){const e=i&&i[Dn];(!e||!e.isManual_)&&qn(9);const{scope_:n}=e;return im(n,t),rm(void 0,n)}setAutoFreeze(i){this.autoFreeze_=i}setUseStrictShallowCopy(i){this.useStrictShallowCopy_=i}applyPatches(i,t){let e;for(e=t.length-1;e>=0;e--){const s=t[e];if(s.path.length===0&&s.op==="replace"){i=s.value;break}}e>-1&&(t=t.slice(e+1));const n=ar("Patches").applyPatches_;return mo(i)?n(i,t):this.produce(i,s=>n(s,t))}};function Zh(i,t){const e=wa(i)?ar("MapSet").proxyMap_(i,t):mc(i)?ar("MapSet").proxySet_(i,t):y1(i,t);return(t?t.scope_:V_()).drafts_.push(e),e}function E1(i){return mo(i)||qn(10,i),W_(i)}function W_(i){if(!or(i)||gc(i))return i;const t=i[Dn];let e;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,e=Yh(i,t.scope_.immer_.useStrictShallowCopy_)}else e=Yh(i,!0);return Kl(e,(n,s)=>{H_(e,n,W_(s))}),t&&(t.finalized_=!1),e}var b1=new M1,w1=b1.produce;const T1=i=>(t,e,n)=>(n.setState=(s,r,...o)=>{const a=typeof s=="function"?w1(s):s;return t(a,r,...o)},i(n.setState,e,n)),A1=T1,vt=d1()(p1(A1(i=>({selectedBodyId:"sun",isPaused:!1,simTime:0,timeScale:1,scalePreset:"hybrid",distanceUnit:"au",trailsEnabled:!0,trailLength:365,followingId:null,perfPreset:"auto",setSelectedBodyId:t=>i({selectedBodyId:t}),setPaused:t=>i({isPaused:t}),setSimTime:t=>i({simTime:t}),setTimeScale:t=>i({timeScale:t}),setScalePreset:t=>i({scalePreset:t}),setDistanceUnit:t=>i({distanceUnit:t}),setTrailsEnabled:t=>i({trailsEnabled:t}),setTrailLength:t=>i({trailLength:t}),setFollowingId:t=>i({followingId:t}),setPerfPreset:t=>i({perfPreset:t})}))));vt.getState;vt.setState;vt.subscribe;class Vr{constructor(){this.activePanelCount=0,this.backdropElement=document.createElement("div"),this.backdropElement.className="modal-backdrop",this.backdropElement.style.display="none",document.body.appendChild(this.backdropElement)}static getInstance(){return Vr.instance||(Vr.instance=new Vr),Vr.instance}show(){this.activePanelCount++,this.backdropElement.style.display="block"}hide(){this.activePanelCount--,this.activePanelCount<=0&&(this.backdropElement.style.display="none",this.activePanelCount=0)}}const am=Vr.getInstance(),ul=32,hl=16,lm=24;function C1(i){return{id:i.id,el:i.getPanelElement(),focus:()=>i.updateFocus(),setMinimized:t=>{i.state.minimized!==t&&i.toggleMinimize()},isMinimized:()=>i.state.minimized,toggleVisibility:()=>i.toggleVisibility(),show:()=>i.show(),hide:()=>i.hide(),destroy:()=>i.destroy(),togglePin:()=>i.togglePin(),isPinned:()=>i.state.pinned,on:(t,e)=>i.on(t,e)}}const rn=class rn{constructor(t,e,n,s={}){this.id=t,this.panel=e,this.header=n,this.options=s,this.isDragging=!1,this.dragStartX=0,this.dragStartY=0,this.isModal=!1,this.events=new Map,rn.panels.set(this.id,this),this.state=this.loadState(),this.isModal=s.modal||!1,this.boundOnDragStart=this.onDragStart.bind(this),this.boundOnDragMove=this.onDragMove.bind(this),this.boundOnDragEnd=this.onDragEnd.bind(this),this.init()}static createPanel(t,e,n,s={}){if(this.controllers.has(t))return this.controllers.get(t);const r=n.querySelector(".panel-header"),o=n.querySelector(".close-btn, .close-button, #close-celestial-selector-btn, #close-presets-modal-btn"),a=n.querySelector(".minimize-btn");r||console.error(`PanelManager: Panel with id "${t}" must have a child element with class ".panel-header"`);const l=new rn(t,n,r||n,s);o&&o.addEventListener("click",()=>l.hide()),a&&a.addEventListener("click",()=>l.toggleMinimize());const c=C1(l);return this.controllers.set(t,c),c}static getController(t){return this.controllers.get(t)}init(){this.applyState(),this.options.draggable!==!1&&this.makeDraggable(),this.options.resizable!==!1&&this.makeResizable(),this.panel.addEventListener("mousedown",()=>this.updateFocus(),!0)}destroy(){rn.panels.delete(this.id),rn.controllers.delete(this.id),this.panel.remove(),this.emit("close")}on(t,e){this.events.has(t)||this.events.set(t,[]),this.events.get(t).push(e)}emit(t){this.events.get(t)?.forEach(e=>e())}getPanelElement(){return this.panel}loadState(){const t=localStorage.getItem(`solarsim.panel.${this.id}`);let e={};if(t)try{e=JSON.parse(t)}catch(r){console.error(`Failed to parse stored state for panel ${this.id}:`,r)}const n={x:this.panel.offsetLeft,y:this.panel.offsetTop,w:this.panel.offsetWidth||320,h:this.panel.offsetHeight||480,visible:!this.panel.classList.contains("hidden"),snapped:null,pinned:!1,minimized:!1,lastFocused:0},s={};return this.options.initialPosition?.x!==void 0&&(s.x=this.options.initialPosition.x),this.options.initialPosition?.y!==void 0&&(s.y=this.options.initialPosition.y),this.options.width!==void 0&&(s.w=this.options.width),this.options.height!==void 0&&(s.h=this.options.height),{...n,...s,...e}}saveState(){localStorage.setItem(`solarsim.panel.${this.id}`,JSON.stringify(this.state))}applyState(){this.state.visible?this.panel.classList.remove("hidden"):this.panel.classList.add("hidden"),this.panel.style.left=`${this.state.x}px`,this.panel.style.top=`${this.state.y}px`,this.panel.style.width=`${this.state.w}px`,this.panel.style.height=`${this.state.h}px`,this.panel.classList.toggle("pinned",this.state.pinned),this.panel.classList.toggle("minimized",this.state.minimized)}toggleMinimize(){this.state.minimized=!this.state.minimized,this.applyState(),this.saveState(),this.emit("minimize")}show(){if(this.state.visible){this.updateFocus();return}this.state.visible=!0,this.applyState(),this.updateFocus(),this.saveState(),this.isModal&&am.show(),this.emit("show")}hide(){this.state.visible&&(this.state.visible=!1,this.applyState(),this.saveState(),this.isModal&&am.hide(),this.emit("hide"))}toggleVisibility(){this.state.visible?this.hide():this.show()}updateFocus(){this.state.lastFocused=Date.now(),this.panel.style.zIndex=String(++rn.highestZIndex),this.saveState(),this.emit("focus")}static getMostRecentlyFocusedController(){const t=Array.from(rn.panels.values()).filter(n=>n.state.visible);if(t.length===0)return null;const e=t.reduce((n,s)=>n.state.lastFocused>s.state.lastFocused?n:s);return this.controllers.get(e.id)||null}togglePin(){this.state.pinned=!this.state.pinned,this.panel.classList.toggle("pinned",this.state.pinned),this.saveState()}makeDraggable(){this.header.addEventListener("mousedown",this.boundOnDragStart),this.header.style.cursor="grab"}onDragStart(t){if(!(t.button!==0||this.state.pinned)&&!t.target.closest("button, input, select, textarea")&&(t.preventDefault(),t.stopPropagation(),this.isDragging=!0,this.updateFocus(),this.dragStartX=t.clientX,this.dragStartY=t.clientY,document.addEventListener("mousemove",this.boundOnDragMove),document.addEventListener("mouseup",this.boundOnDragEnd,{once:!0}),this.header.style.cursor="grabbing",document.body.style.userSelect="none",this.state.snapped)){const e=n=>{const s=Math.abs(n.clientX-this.dragStartX),r=Math.abs(n.clientY-this.dragStartY);(s>lm||r>lm)&&(this.state.snapped=null,this.saveState(),document.removeEventListener("mousemove",e))};document.addEventListener("mousemove",e)}}onDragMove(t){if(!this.isDragging)return;const e=t.clientX-this.dragStartX,n=t.clientY-this.dragStartY;this.state.x+=e,this.state.y+=n,this.dragStartX=t.clientX,this.dragStartY=t.clientY,this.handleSnapping(),this.applyState()}onDragEnd(){this.isDragging=!1,this.header.style.cursor="grab",document.body.style.userSelect="",document.removeEventListener("mousemove",this.boundOnDragMove),rn.hideSnapPreview(),this.state.snapped&&this.flashSnapConfirmation(),this.saveState()}handleSnapping(){const t=window.innerWidth,e=window.innerHeight;let n=null;this.state.x<ul?n="left":this.state.x+this.state.w>t-ul?n="right":this.state.y<ul?n="top":this.state.y+this.state.h>e-ul&&(n="bottom"),rn.hideSnapPreview(),n?(rn.showSnapPreview(n),(n==="left"&&this.state.x<hl||n==="right"&&this.state.x+this.state.w>t-hl||n==="top"&&this.state.y<hl||n==="bottom"&&this.state.y+this.state.h>e-hl)&&(this.state.snapped=n,n==="left"&&(this.state.x=0),n==="right"&&(this.state.x=t-this.state.w),n==="top"&&(this.state.y=0),n==="bottom"&&(this.state.y=e-this.state.h))):this.state.snapped=null}static showSnapPreview(t){this.snapGlow||(this.snapGlow=document.createElement("div"),this.snapGlow.className="snap-glow",document.body.appendChild(this.snapGlow)),this.snapGlow.className=`snap-glow ${t} visible`}static hideSnapPreview(){this.snapGlow&&(this.snapGlow.className="snap-glow")}flashSnapConfirmation(){this.panel.classList.add("snap-flash"),setTimeout(()=>this.panel.classList.remove("snap-flash"),150)}makeResizable(t=250,e=150){["n","ne","e","se","s","sw","w","nw"].forEach(s=>{const r=document.createElement("div");r.className=`resizer-handle ${s}`,this.panel.appendChild(r),r.addEventListener("mousedown",o=>this.onResizeStart(o,s,t,e))})}onResizeStart(t,e,n,s){if(this.state.pinned)return;t.stopPropagation(),t.preventDefault(),this.updateFocus();const r=t.clientX,o=t.clientY,a=this.state.w,l=this.state.h,c=this.state.x,u=this.state.y,h=f=>{const _=f.clientX-r,g=f.clientY-o;if(e.includes("e")&&(this.state.w=Math.max(n,a+_)),e.includes("w")){const m=Math.max(n,a-_);this.state.x=c+(a-m),this.state.w=m}if(e.includes("s")&&(this.state.h=Math.max(s,l+g)),e.includes("n")){const m=Math.max(s,l-g);this.state.y=u+(l-m),this.state.h=m}this.state.snapped=null,this.applyState()},d=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",d),document.body.style.cursor="",document.body.style.userSelect="",this.saveState()};document.addEventListener("mousemove",h),document.addEventListener("mouseup",d),document.body.style.cursor=`${e}-resize`,document.body.style.userSelect="none"}};rn.highestZIndex=1e3,rn.panels=new Map,rn.controllers=new Map;let Jl=rn,Ql=[],ns=[],Oi=new Map,X_,vn=null,$r="hierarchy",xu,Jh="all";const zo=new Set;let tc=!1;function j_(i){const t=document.createElement("button");return t.className="favorite-btn",t.innerHTML="&#9733;",zo.has(i.id)&&t.classList.add("favorited"),t.addEventListener("click",e=>{e.stopPropagation(),zo.has(i.id)?(zo.delete(i.id),t.classList.remove("favorited")):(zo.add(i.id),t.classList.add("favorited")),tc&&Yo()}),t}function Y_(i){const t=document.createElement("span");return t.className="node-type",t.textContent=i.type.charAt(0).toUpperCase()+i.type.slice(1),t}function R1(i){const t=document.createElement("li");t.dataset.id=i.id,t.className="tree-node",t.style.paddingLeft="25px",t.setAttribute("role","listitem"),i.spec.edu?.shortDescription&&(t.title=i.spec.edu.shortDescription);const e=document.createElement("div");e.className="tree-node-content";const n=document.createElement("span");n.className="chevron",e.appendChild(n);const s=document.createElement("span");s.className="color-dot",s.style.backgroundColor=`#${i.spec.color.toString(16).padStart(6,"0")}`,e.appendChild(s);const r=document.createElement("img");r.className="icon",r.src=`assets/${i.type}.svg`,r.alt=`${i.type} icon`,e.appendChild(r);const o=document.createElement("span");o.className="node-name",o.textContent=i.name,e.appendChild(o),e.appendChild(Y_(i));const a=document.createElement("span");return a.className="node-stats",a.textContent=`${i.spec.radius.toLocaleString()} km`,e.appendChild(a),e.appendChild(j_(i)),t.appendChild(e),i.element=t,t}function q_(i){const t=document.createElement("li");t.dataset.id=i.id,t.className="tree-node",t.style.paddingLeft=`${i.depth*18}px`,t.setAttribute("role","treeitem"),t.setAttribute("aria-expanded",String(i.children.length>0?i.expanded:!1)),i.spec.edu?.shortDescription&&(t.title=i.spec.edu.shortDescription);const e=document.createElement("div");e.className="tree-node-content";const n=document.createElement("span");n.className="chevron",i.children.length>0&&(n.textContent=i.expanded?"▼":"▶"),e.appendChild(n);const s=document.createElement("span");s.className="color-dot",s.style.backgroundColor=`#${i.spec.color.toString(16).padStart(6,"0")}`,e.appendChild(s);const r=document.createElement("img");r.className="icon",r.src=`assets/${i.type}.svg`,r.alt=`${i.type} icon`,e.appendChild(r);const o=document.createElement("span");o.className="node-name",o.textContent=i.name,e.appendChild(o),e.appendChild(Y_(i));const a=document.createElement("span");if(a.className="node-stats",a.textContent=`${i.spec.radius.toLocaleString()} km`,e.appendChild(a),e.appendChild(j_(i)),t.appendChild(e),i.children.length>0){const l=document.createElement("ul");l.className="tree-level",l.setAttribute("role","group"),l.style.display=i.expanded?"block":"none",i.children.forEach(c=>{const u=q_(c);c.element=u,l.appendChild(u)}),t.appendChild(l)}return i.element=t,t}function P1(){const i=document.createElement("ul");i.className="tree-root",i.setAttribute("role","tree"),Ql.forEach(t=>i.appendChild(q_(t))),fc.appendChild(i)}function D1(){const i=new Map;ns.forEach(n=>{i.has(n.type)||i.set(n.type,[]),i.get(n.type).push(n)}),i.forEach(n=>n.sort((s,r)=>s.name.localeCompare(r.name)));const t=document.createElement("ul");t.className="list-root",fc.appendChild(t),["star","planet","moon"].forEach(n=>{if(i.has(n)){const s=i.get(n),r=document.createElement("li");r.className="list-group";const o=document.createElement("div");o.className="list-group-header";const a=n.charAt(0).toUpperCase()+n.slice(1);o.innerHTML=`<span class="chevron">▼</span> ${a}s (${s.length})`,r.appendChild(o);const l=document.createElement("ul");l.className="list-group-children",s.forEach(c=>{l.appendChild(R1(c))}),r.appendChild(l),t.appendChild(r)}})}function cm(){fc.innerHTML="",$r==="hierarchy"?P1():D1(),Yo()}function Cl(){Oi.forEach(i=>{if(i.element){const t=i.visible&&(!i.parent||i.parent.expanded&&i.parent.element?.style.display!=="none");if(i.element.style.display=t?"":"none",i.children.length>0){const e=i.element.querySelector("ul");e&&(e.style.display=i.expanded?"block":"none");const n=i.element.querySelector(".chevron");n&&(n.textContent=i.expanded?"▼":"▶",i.element.setAttribute("aria-expanded",String(i.expanded)))}}}),vt.subscribe(um),um()}function Yo(){const t=document.getElementById("selector-search-input").value,e=Jh,n=!!t,s=e!=="all",r=!n&&!s&&!tc;let o;if(r)o=new Set(ns.map(a=>a.id));else{let a;if(n||s){const l=[];n&&l.push({name:t}),s&&l.push({type:e});const c=X_.search({$and:l});a=new Set(c.map(u=>u.item.id))}else a=new Set(ns.map(l=>l.id));tc?o=new Set([...a].filter(l=>zo.has(l))):o=a}$r==="hierarchy"?(ns.forEach(a=>a.visible=!1),o.forEach(a=>{let l=Oi.get(a);for(;l;)l.visible=!0,r||(l.expanded=!0),l=l.parent||void 0}),r&&ns.forEach(a=>a.expanded=!1),Cl()):(ns.forEach(a=>{a.element&&(a.element.style.display=o.has(a.id)?"":"none")}),document.querySelectorAll(".list-group").forEach(a=>{const l=a.querySelector(".list-group-children"),c=Array.from(l?.querySelectorAll(".tree-node")||[]).some(u=>u.style.display!=="none");a.style.display=c?"":"none"}))}function I1(){if($r==="type")return[];const i=[];function t(e){for(const n of e)n.visible&&n.element&&n.element.style.display!=="none"&&(i.push(n),n.expanded&&n.children.length>0&&t(n.children))}return t(Ql),i}function yu(i){if(vn&&Oi.get(vn)?.element?.classList.remove("focused"),vn=i,vn){const t=Oi.get(vn);t?.element&&(t.element.classList.add("focused"),t.element.scrollIntoView({block:"nearest"}))}}function um(){const{selectedBodyId:i}=vt.getState();Oi.forEach(t=>{t.element&&(t.id===i?t.element.classList.add("selected"):t.element.classList.remove("selected"))})}function L1(i,t){let e;return(...n)=>{clearTimeout(e),e=window.setTimeout(()=>{i(...n)},t)}}function U1(i,t){const e=document.getElementById("celestial-selector-panel");if(!e)return;const n=Jl.createPanel("celestialSelector","Celestial Selector",e,{width:380,height:Math.min(window.innerHeight*.8,800)}),s=document.getElementById("open-celestial-selector-btn");s&&s.addEventListener("click",f=>{f.stopPropagation(),n.toggleVisibility()}),xu=f=>{t(f)},Ql=wT(i),Ql.forEach(f=>{function _(g){Oi.set(g.id,g),ns.push(g),g.children.forEach(_)}_(f)});const r=ns.map(f=>({...f.spec,type:f.type}));X_=new Mo(r,{keys:["name","type"],threshold:.4,includeScore:!0}),cm();const o=document.getElementById("category-tabs"),a=document.createElement("div");a.style.padding="5px 0 10px 5px",a.innerHTML=`
        <label style="display: flex; align-items: center; cursor: pointer; gap: 8px; font-weight: 500; color: #f0c420;">
            <input type="checkbox" id="favorites-filter-toggle">
            Show Favorites Only
        </label>
    `,o.parentNode.insertBefore(a,o);const l=document.getElementById("favorites-filter-toggle");l.addEventListener("change",()=>{tc=l.checked,Yo()}),fc.addEventListener("click",f=>{const _=f.target,g=_.closest(".list-group-header");if($r==="type"&&g){const S=g.nextElementSibling,v=g.querySelector(".chevron");if(S){const b=S.style.display!=="none";S.style.display=b?"none":"block",v&&(v.textContent=b?"▶":"▼")}return}const m=_.closest(".tree-node");if(!m||!(m instanceof HTMLLIElement))return;const p=m.dataset.id,M=Oi.get(p);$r==="hierarchy"&&_.classList.contains("chevron")?(M.expanded=!M.expanded,Cl()):xu(M.id)});const c=document.getElementById("selector-search-input");c.addEventListener("input",L1(()=>Yo(),300));const u=["all","star","planet","moon"],h=document.getElementById("category-tabs");u.forEach(f=>{const _=document.createElement("button");_.className="category-tab",_.dataset.category=f;let g=f.charAt(0).toUpperCase()+f.slice(1);f!=="all"&&(g+="s"),_.textContent=g,f===Jh&&_.classList.add("active"),_.addEventListener("click",()=>{Jh=f,h.querySelectorAll(".category-tab").forEach(m=>m.classList.remove("active")),_.classList.add("active"),Yo()}),h.appendChild(_)}),document.querySelectorAll('input[name="selector-view"]').forEach(f=>{f.addEventListener("change",()=>{$r=f.value,cm()})}),c.addEventListener("keydown",f=>{const _=I1();if(_.length===0)return;let g=vn?_.findIndex(m=>m.id===vn):-1;switch(f.key){case"ArrowDown":f.preventDefault(),g=Math.min(g+1,_.length-1),yu(_[g].id);break;case"ArrowUp":f.preventDefault(),g===-1&&(g=1),g=Math.max(g-1,0),yu(_[g].id);break;case"Enter":vn&&xu(vn);break;case"ArrowRight":{const m=vn?Oi.get(vn):null;m&&m.children.length>0&&!m.expanded&&(m.expanded=!0,Cl());break}case"ArrowLeft":{const m=vn?Oi.get(vn):null;m&&m.children.length>0&&m.expanded?(m.expanded=!1,Cl()):m?.parent&&yu(m.parent.id);break}}})}let $n,ki=null;const O1=6e3;function F1(){document.getElementById("btn-frame")?.click(),fr()}function N1(){document.getElementById("btn-follow")?.click(),fr()}function B1(){document.getElementById("btn-orbit")?.click(),fr()}function k1(){fo.classList.contains("hidden")&&fo.classList.remove("hidden"),fr()}function z1(){if($n=document.getElementById("contextual-hud"),!$n)return;const i=document.getElementById("hud-frame-btn"),t=document.getElementById("hud-follow-btn"),e=document.getElementById("hud-orbit-btn"),n=document.getElementById("hud-info-btn");i.addEventListener("click",s=>{s.stopPropagation(),F1()}),t.addEventListener("click",s=>{s.stopPropagation(),N1()}),e.addEventListener("click",s=>{s.stopPropagation(),B1()}),n.addEventListener("click",s=>{s.stopPropagation(),k1()}),window.addEventListener("click",()=>{fr()},{capture:!0}),$n.addEventListener("mouseenter",()=>{ki&&(clearTimeout(ki),ki=null)}),$n.addEventListener("mouseleave",()=>{K_()})}function H1(i,t){if(!$n)return;if(!fo.classList.contains("hidden")){fr();return}const e=new D;i.getWorldPosition(e),e.project(t);const n=(e.x*.5+.5)*window.innerWidth,s=(e.y*-.5+.5)*window.innerHeight;$n.style.left=`${n}px`,$n.style.top=`${s}px`,$n.classList.remove("hidden"),K_()}function fr(){$n&&!$n.classList.contains("hidden")&&$n.classList.add("hidden"),ki&&(clearTimeout(ki),ki=null)}function K_(){ki&&clearTimeout(ki),ki=window.setTimeout(fr,O1)}function V1(i,t,e,n,s,r,o,a){const l=new Ox,c=new Ft,u=document.getElementById("body-tooltip");let h;window.addEventListener("pointermove",f=>{clearTimeout(h),h=window.setTimeout(()=>{c.x=f.clientX/window.innerWidth*2-1,c.y=-(f.clientY/window.innerHeight)*2+1,l.setFromCamera(c,i);const _=l.intersectObjects(t);if(_.length>0){const g=_[0].object,p=g.userData?.data,M=p?.name,S=p?.radius;M&&typeof S=="number"?(u.innerHTML=`<strong>${M}</strong><br>Radius: ${S.toLocaleString()} km`,u.style.left=`${f.clientX+15}px`,u.style.top=`${f.clientY+15}px`,u.classList.remove("hidden")):(console.warn("Object missing valid userData.data:",g),u.classList.add("hidden"))}else u.classList.add("hidden")},100)}),window.addEventListener("click",f=>{if(u.classList.add("hidden"),[yT,bT,ST,fo,Al,R_].some(m=>m&&m.contains(f.target)))return;c.x=f.clientX/window.innerWidth*2-1,c.y=-(f.clientY/window.innerHeight)*2+1,l.setFromCamera(c,i);const g=l.intersectObjects(t);if(g.length>0){const m=g[0].object;s(m.userData.name),H1(m,i)}else{const m=new Pi(new D(0,1,0),0),p=new D;l.ray.intersectPlane(m,p),new Nl(r.target).to({x:p.x,y:p.y,z:p.z},500).easing(Bi.Cubic.Out).start()}}),C_.addEventListener("click",()=>{o()}),Bh.addEventListener("click",()=>{n.focusTarget=null,Bh.classList.add("hidden"),r.minDistance=0,r.maxDistance=1700}),r.addEventListener("start",()=>{n.isUserInteracting=!0}),r.addEventListener("end",()=>{n.isUserInteracting=!1}),kh.addEventListener("click",f=>{f.target.tagName!=="BUTTON"&&fo.classList.remove("hidden")});function d(f){f.classList.add("flash"),f.addEventListener("animationend",()=>{f.classList.remove("flash")},{once:!0})}Kp.addEventListener("click",()=>{n.selectedObject&&(s(n.selectedObject.userData.name),d(Kp))}),jl.addEventListener("click",()=>{if(!n.selectedObject)return;if(n.followTarget===n.selectedObject)n.followTarget=null;else{n.followTarget=n.selectedObject;const _=new D;n.followTarget.getWorldPosition(_),n.followOffset=i.position.clone().sub(_)}d(jl)}),al.addEventListener("click",()=>{if(!n.selectedObject)return;const f=n.selectedObject.userData.name,_=a.find(g=>g.userData.name===f);if(_){_.visible=!_.visible;const g=al.getAttribute("aria-pressed")==="true";al.setAttribute("aria-pressed",String(!g)),d(al)}})}function G1(i){const t=document.getElementById("infoPanelHeader");t&&(t.style.borderBottomColor=i)}function W1(i,t,e=1e-9){let n=i;for(let s=0;s<50;s++){const r=n-t*Math.sin(n)-i,o=1-t*Math.cos(n),a=r/o;if(n-=a,Math.abs(a)<e)break}return n}function X1(i,t){const e=W1(t,i.e),n=Math.cos(e),s=Math.sin(e),r=i.a_m*(n-i.e),o=i.a_m*Math.sqrt(1-i.e**2)*s,a=Math.sqrt(r*r+o*o),l=Math.cos(i.Omega_rad),c=Math.sin(i.Omega_rad),u=Math.cos(i.i_rad),h=Math.cos(i.omega_rad),d=Math.sin(i.omega_rad),f=Math.sin(i.i_rad),_=(l*h-c*d*u)*r+(-l*d-c*h*u)*o,g=(c*h+l*d*u)*r+(-c*d+l*h*u)*o,m=d*f*r+h*f*o;return{x:_,y:g,z:m,r:a}}const j1=132712440018e9;function Y1({a_m:i,r_m:t,mu:e=j1}){return Math.sqrt(e*(2/t-1/i))}class q1{constructor(t,e=512,n=128,s=11184810,r=.5){this.celestialObjects=t,this.segmentsHigh=e,this.segmentsLow=n,this.color=s,this.opacity=r,this.orbits=new Map,this.G=66743e-15}createAuPoints(t){const e=[],n=t.orbitalElements,s=n?.aKm??(t.parentId==="sun"?t.semiMajorAxis*Gs:t.semiMajorAxisKm);if(!s)return{high:[],low:[]};const r=n?.e??t.eccentricity,o=n?.iDeg??t.inclination??0,a=n?.lanDeg??0,l=n?.argPeriDeg??0;let c=19885e26;if(t.parentId&&t.parentId!=="sun"){const _=this.celestialObjects.find(g=>g.id===t.parentId);_?.mass&&(c=_.mass*1e24)}this.G*c;const u={a_m:s*1e3,e:r,i_rad:o*(Math.PI/180),Omega_rad:a*(Math.PI/180),omega_rad:l*(Math.PI/180)},h=Gs*1e3;for(let _=0;_<=this.segmentsHigh;_++){const g=_/this.segmentsHigh*2*Math.PI,m=X1(u,g);e.push(new D(m.x/h,m.y/h,m.z/h))}const d=[],f=this.segmentsHigh/this.segmentsLow;for(let _=0;_<=this.segmentsLow;_++){const g=Math.min(Math.round(_*f),e.length-1);d.push(e[g])}return{high:e,low:d}}init(t,e){const n=new mg({color:this.color,opacity:this.opacity,transparent:!0,linewidth:1});this.celestialObjects.forEach(s=>{if(s.id==="sun"||!s.parentId)return;const r=this.createAuPoints(s);if(r.high.length===0)return;const o=r.low.map(u=>Xl(u,{active:!1,progress:1,fromPreset:"realistic",toPreset:vt.getState().scalePreset})),a=new We().setFromPoints(o),l=new yx(a,n);l.userData.name=`${s.name} Orbit`;const c=e.get(s.parentId);c?c.group.add(l):t.add(l),this.orbits.set(s.id,{line:l,auPoints:r,currentLOD:"low"}),s.orbit=l})}update(t){this.orbits.forEach(e=>{const n=e.currentLOD==="high"?e.auPoints.high:e.auPoints.low,s=e.line.geometry.attributes.position;for(let r=0;r<n.length;r++){const o=Xl(n[r],t);s.setXYZ(r,o.x,o.y,o.z)}s.needsUpdate=!0,e.line.geometry.computeBoundingSphere()})}setLOD(t,e){const n=this.orbits.get(t);if(n&&n.currentLOD!==e){const s=e==="high"?n.auPoints.high:n.auPoints.low;n.line.geometry.dispose(),n.line.geometry=new We().setFromPoints(s),n.currentLOD=e}}updateLODs(t,e){this.orbits.forEach((n,s)=>{const r=this.celestialObjects.find(o=>o.id===s);if(r?.group){const a=t.position.distanceTo(r.group.position)>e?"low":"high";this.setLOD(s,a)}})}}const Qh={"toggle-pause":{code:"Space",display:"Space"},"toggle-debug-hud":{code:"Backquote",display:"`"},"reset-time":{code:"KeyR",display:"R"},"toggle-shadows":{code:"KeyS",display:"S"},"increase-speed":{code:"Equal",display:"="},"decrease-speed":{code:"Minus",display:"-"},"toggle-trails":{code:"KeyT",display:"T"},"frame-selected":{code:"KeyF",display:"F"},"toggle-help":{code:"KeyH",display:"H"},"close-modals":{code:"Escape",display:"Esc"},"frame-advance":{code:"Period",display:"."},"fine-step-forward":{code:"ArrowRight",shiftKey:!0,display:"Shift + →"},"fine-step-backward":{code:"ArrowLeft",shiftKey:!0,display:"Shift + ←"},"select-body-1":{code:"Digit1",display:"1"},"select-body-2":{code:"Digit2",display:"2"},"select-body-3":{code:"Digit3",display:"3"},"select-body-4":{code:"Digit4",display:"4"},"select-body-5":{code:"Digit5",display:"5"},"select-body-6":{code:"Digit6",display:"6"},"select-body-7":{code:"Digit7",display:"7"},"select-body-8":{code:"Digit8",display:"8"},"select-body-9":{code:"Digit9",display:"9"}},$_="solar-system-shortcuts";let ls={...Qh};function K1(){try{const i=localStorage.getItem($_);if(i){const t=JSON.parse(i);ls={...Qh,...t}}}catch(i){console.error("Failed to load shortcuts from localStorage",i),ls={...Qh}}}function $1(){try{localStorage.setItem($_,JSON.stringify(ls))}catch(i){console.error("Failed to save shortcuts to localStorage",i)}}function Z_(){return ls}function Z1(i,t){for(const e in ls){const n=ls[e];n&&n.code===t.code&&!!n.shiftKey==!!t.shiftKey&&!!n.ctrlKey==!!t.ctrlKey&&!!n.altKey==!!t.altKey&&delete ls[e]}ls[i]=t,$1()}K1();const J1={"toggle-pause":"Play/Pause Simulation","toggle-debug-hud":"Toggle Debug Info","reset-time":"Reset Simulation","toggle-shadows":"Toggle Shadows","increase-speed":"Increase Speed","decrease-speed":"Decrease Speed","toggle-trails":"Toggle Orbit Trails","frame-selected":"Frame Selected Body","toggle-help":"Toggle Help Menu","close-modals":"Close Menu/Modal","frame-advance":"Frame-by-Frame Advance","fine-step-forward":"Fine Step Forward","fine-step-backward":"Fine Step Backward","select-body-1":"Select Sun","select-body-2":"Select Mercury","select-body-3":"Select Venus","select-body-4":"Select Earth","select-body-5":"Select Mars","select-body-6":"Select Jupiter","select-body-7":"Select Saturn","select-body-8":"Select Uranus","select-body-9":"Select Neptune"},hm={"frame-selected":"Focus the camera on the currently selected planet or moon.","frame-advance":"If paused, advances the simulation by a single frame.","fine-step-forward":"Nudges the simulation time forward by a small amount.","fine-step-backward":"Nudges the simulation time backward by a small amount."};let Zr=null,dm="";function Q1(i){let t=[];i.ctrlKey&&t.push("Ctrl"),i.altKey&&t.push("Alt"),i.shiftKey&&t.push("Shift");const n={ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→",Space:"Space",Backquote:"`",Minus:"-",Equal:"=",Period:"."}[i.code]||i.code.replace("Key","").replace("Digit","");return t.push(n),t.join(" + ")}function J_(i){if(i.preventDefault(),i.stopPropagation(),!Zr)return;if(i.code==="Escape"){fm();return}const t={code:i.code,shiftKey:i.shiftKey,ctrlKey:i.ctrlKey,altKey:i.altKey,display:""};t.display=Q1(t),Z1(Zr,t),fm()}function tA(i,t){if(Zr){const e=document.querySelector(`[data-action="${Zr}"]`);e&&(e.textContent=dm)}Zr=i,dm=t.textContent||"Remap",t.textContent="Press a key...",window.addEventListener("keydown",J_,{capture:!0})}function fm(){window.removeEventListener("keydown",J_,{capture:!0}),Zr=null,ec()}function ec(i=""){const t=Z_(),e=document.getElementById("shortcuts-list");if(!e)return;e.innerHTML="";const n=i.toLowerCase(),s=Object.keys(t).sort();for(const r of s){const o=J1[r]||r;if(n&&!o.toLowerCase().includes(n))continue;const a=t[r],l=document.createElement("span");l.className="action-label",l.textContent=o,hm[r]&&(l.title=hm[r]);const c=document.createElement("kbd");c.className="key-binding",c.textContent=a?a.display:"Unbound";const u=document.createElement("button");u.className="control-btn remap-button",u.textContent="Remap",u.dataset.action=r,u.addEventListener("click",()=>{tA(r,u)}),e.appendChild(l),e.appendChild(c),e.appendChild(u)}}function eA(){const i=document.getElementById("help-search-input");i&&i.addEventListener("input",()=>{ec(i.value)});const t=document.getElementById("help-overlay");t&&new MutationObserver(n=>{for(const s of n)s.attributeName==="class"&&!t.classList.contains("hidden")&&(i.value="",ec(),i.focus())}).observe(t,{attributes:!0})}function nA(i,t,e,n,s){function r(a){if(!a)return;const l=new Cn().setFromObject(a).getBoundingSphere(new Qn),c=l.radius*2,u=n.fov*(Math.PI/180),h=c/2/Math.tan(u/2),d=new D().subVectors(n.position,s.target).normalize(),f=new D().addVectors(l.center,d.multiplyScalar(h*1.2));new Nl(n.position).to({x:f.x,y:f.y,z:f.z},600).easing(Bi.Cubic.Out).start()}const o=a=>{if(a.startsWith("select-body-")){const _=parseInt(a.split("-")[2],10)-1;jo[_]&&e(jo[_].name);return}const{timeScale:l,setTimeScale:c,isPaused:u,setPaused:h,setSimTime:d,simTime:f}=vt.getState();switch(a){case"toggle-pause":h(!u);break;case"toggle-debug-hud":R_.classList.toggle("hidden");break;case"reset-time":C_.click();break;case"toggle-shadows":Nh.click();break;case"increase-speed":{c(l*1.5);break}case"decrease-speed":{c(l/1.5);break}case"toggle-trails":const _=document.getElementById("trails-enabled-toggle");_&&_.click();break;case"frame-selected":r(i.selectedObject);break;case"toggle-help":ec(),Al.classList.toggle("hidden");break;case"close-modals":Al.classList.add("hidden");break;case"frame-advance":u||h(!0),d(f+86400);break;case"fine-step-forward":u||h(!0),d(f+3600);break;case"fine-step-backward":u||h(!0),d(f-3600);break}};MT.addEventListener("click",()=>{Al.classList.add("hidden")}),window.addEventListener("keydown",a=>{if(document.activeElement&&["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName))return;const l=Z_();let c=null;for(const u in l){const h=l[u];if(h&&a.code===h.code&&!!a.shiftKey==!!h.shiftKey&&!!a.ctrlKey==!!h.ctrlKey&&!!a.altKey==!!h.altKey){c=u;break}}c&&(a.preventDefault(),o(c))})}const Q_="solarsim.presets.v1";function Xd(){const i=localStorage.getItem(Q_);if(i)try{return JSON.parse(i)}catch(t){return console.error("Failed to load presets from localStorage:",t),[]}return[]}function t0(i){try{const t=i.filter(e=>!e.isBuiltIn);localStorage.setItem(Q_,JSON.stringify(t))}catch(t){console.error("Failed to save presets to localStorage:",t)}}const iA=[{id:"builtin-explorer",name:"Explorer",isBuiltIn:!0,panel:{side:"left",isPinned:!0,width:360},camera:{position:[0,200,800],target:[0,0,0],fov:60},time:{simTime:0,timeScale:1,isPaused:!0},render:{shadowsEnabled:!0,performancePreset:"auto"},ui:{selectedBodyId:"sun"}},{id:"builtin-presentation",name:"Presentation",isBuiltIn:!0,panel:{side:"right",isPinned:!1,width:300},camera:{position:[0,50,1e3],target:[0,0,0],fov:45},time:{simTime:0,timeScale:.2,isPaused:!1},render:{shadowsEnabled:!0,performancePreset:"high"},ui:{selectedBodyId:"earth"}}];function e0(){return[...iA,...Xd()]}function sA(i){const e=Xd().filter(n=>n.id!==i);t0(e)}function rA(i){const t=Xd(),e=t.findIndex(n=>n.id===i.id);e>-1?t[e]=i:t.push(i),t0(t)}const ze=[];for(let i=0;i<256;++i)ze.push((i+256).toString(16).slice(1));function oA(i,t=0){return(ze[i[t+0]]+ze[i[t+1]]+ze[i[t+2]]+ze[i[t+3]]+"-"+ze[i[t+4]]+ze[i[t+5]]+"-"+ze[i[t+6]]+ze[i[t+7]]+"-"+ze[i[t+8]]+ze[i[t+9]]+"-"+ze[i[t+10]]+ze[i[t+11]]+ze[i[t+12]]+ze[i[t+13]]+ze[i[t+14]]+ze[i[t+15]]).toLowerCase()}let Su;const aA=new Uint8Array(16);function lA(){if(!Su){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Su=crypto.getRandomValues.bind(crypto)}return Su(aA)}const cA=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),pm={randomUUID:cA};function uA(i,t,e){if(pm.randomUUID&&!i)return pm.randomUUID();i=i||{};const n=i.random??i.rng?.()??lA();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,oA(n)}const n0="solarsim.panel.v1";function hA(i){const t=JSON.parse(localStorage.getItem(n0)||"{}"),{simTime:e,timeScale:n,isPaused:s,selectedBodyId:r,perfPreset:o}=vt.getState(),a=document.getElementById("shadow-toggle").checked;return{id:uA(),name:i,createdAt:new Date().toISOString(),panel:{side:t.side||"left",isPinned:t.isPinned||!0,width:t.width||320},camera:{position:de.position.toArray(),target:Ye.target.toArray(),fov:de.fov},time:{simTime:e,timeScale:n,isPaused:s},render:{shadowsEnabled:a,performancePreset:o},ui:{selectedBodyId:r},thumbnailDataUrl:Vs.domElement.toDataURL("image/png")}}function dA(i){localStorage.setItem(n0,JSON.stringify(i.panel)),window.location.reload(),de.position.fromArray(i.camera.position),Ye.target.fromArray(i.camera.target),de.fov=i.camera.fov,de.updateProjectionMatrix(),Ye.update(),vt.getState().setSimTime(i.time.simTime),vt.getState().setTimeScale(i.time.timeScale),vt.getState().setPaused(i.time.isPaused),document.getElementById("shadow-toggle").checked=i.render.shadowsEnabled,vt.getState().setPerfPreset(i.render.performancePreset),i.ui.selectedBodyId&&vt.getState().setSelectedBodyId(i.ui.selectedBodyId)}function Mu(){const i=document.getElementById("presets-list");i.innerHTML="",e0().forEach(e=>{const n=document.createElement("div");n.className="preset-item",n.innerHTML=`
            <span class="preset-name">${e.name} ${e.isBuiltIn?"(Built-in)":""}</span>
            <div class="preset-actions">
                <button class="control-btn apply-preset-btn" data-id="${e.id}">Apply</button>
                ${e.isBuiltIn?"":`<button class="control-btn delete-preset-btn" data-id="${e.id}">Delete</button>`}
            </div>
        `,i.appendChild(n)})}function fA(){const i=document.getElementById("presets-modal");if(!i)return;const t=Jl.createPanel("presets","Presets",i,{width:500,height:450,modal:!0}),e=document.getElementById("manage-presets-btn"),n=document.getElementById("save-current-preset-btn"),s=document.getElementById("new-preset-name"),r=document.getElementById("presets-list");if(!e||!n||!s||!r){console.error("One or more required elements for presets panel not found");return}t.on("show",Mu),e.addEventListener("click",()=>t.show()),n.addEventListener("click",()=>{const o=s.value.trim();if(!o){alert("Please enter a name for the preset.");return}const a=hA(o);rA(a),s.value="",Mu()}),r.addEventListener("click",o=>{const a=o.target,l=a.dataset.id;if(l){if(a.classList.contains("apply-preset-btn")){const u=e0().find(h=>h.id===l);u&&(dA(u),t.hide())}a.classList.contains("delete-preset-btn")&&confirm("Are you sure you want to delete this preset?")&&(sA(l),Mu())}})}function mm(i,t){if(i<=0)return 0;const{minNonZero:e,midScale:n,maxScale:s}=t,r=.5;if(i<=r){const o=i/r;return e*Math.pow(n/e,o)}else{const o=(i-r)/(1-r);return n*Math.pow(s/n,o)}}function pA(i,t){const{minNonZero:e,midScale:n,maxScale:s}=t;return i<=0?0:i<=n?Math.log(i/e)/Math.log(n/e)*.5:.5+Math.log(i/n)/Math.log(s/n)*.5}const Eu={minNonZero:1e-6,midScale:100,maxScale:1e8};function gm(i){if(i===0)return"Paused";if(i===1)return"1x";const t=86400,e=365.25*t;return i>e*.95?`${(i/e).toFixed(1)} y/s`:i>t*.95?`${(i/t).toFixed(1)} d/s`:i<.1?`${i.toExponential(1)}x`:`${i.toFixed(1)}x`}function mA(i){return new Date(new Date(2025,0,1).getTime()+i*1e3).toUTCString().substring(5,25)}function gA(){_A(),vA(),xA()}function _A(){const i=document.getElementById("play-pause-btn"),t=document.getElementById("time-scale-slider"),e=document.getElementById("time-scale-label"),n=document.getElementById("timestamp-display"),s=document.querySelectorAll(".time-preset"),r=document.getElementById("time-step-forward"),o=document.getElementById("time-step-backward"),a=document.getElementById("time-scale-tooltip");function l(){const u=parseFloat(t.value),h=parseFloat(t.min),d=parseFloat(t.max),f=(u-h)/(d-h),_=16,g=t.offsetWidth,m=f*(g-_)+_/2;a.style.left=`${m}px`;const p=gm(mm(u,Eu));a.textContent=p}function c(){const{isPaused:u,timeScale:h,simTime:d}=vt.getState();i.textContent=u?"▶":"❚❚",t.value=pA(h,Eu).toString(),e.textContent=gm(h),n.textContent=mA(d),l()}c(),i.addEventListener("click",()=>{vt.getState().setPaused(!vt.getState().isPaused)}),t.addEventListener("input",()=>{const u=mm(parseFloat(t.value),Eu);vt.getState().setTimeScale(u),l()}),t.addEventListener("mouseenter",()=>{a.classList.add("visible"),l()}),t.addEventListener("mouseleave",()=>{a.classList.remove("visible")}),s.forEach(u=>{u.addEventListener("click",()=>{const h=parseFloat(u.dataset.speed);vt.getState().setTimeScale(h)})}),r.addEventListener("click",()=>{const{simTime:u}=vt.getState();vt.getState().setSimTime(u+86400),vt.getState().isPaused||vt.getState().setPaused(!0)}),o.addEventListener("click",()=>{const{simTime:u}=vt.getState();vt.getState().setSimTime(u-86400),vt.getState().isPaused||vt.getState().setPaused(!0)}),vt.subscribe(c)}function vA(){const i=document.getElementById("trails-enabled-toggle"),t=document.getElementById("trail-length-slider");i.checked=vt.getState().trailsEnabled,t.value=String(vt.getState().trailLength),i.addEventListener("change",()=>{vt.getState().setTrailsEnabled(i.checked)}),t.addEventListener("input",()=>{vt.getState().setTrailLength(parseFloat(t.value))}),vt.subscribe(e=>{i.checked!==e.trailsEnabled&&(i.checked=e.trailsEnabled),parseFloat(t.value)!==e.trailLength&&(t.value=String(e.trailLength))})}function xA(){const i=document.getElementById("distance-unit-select");i.value=vt.getState().distanceUnit,i.addEventListener("change",()=>{vt.getState().setDistanceUnit(i.value)}),vt.subscribe(t=>{i.value!==t.distanceUnit&&(i.value=t.distanceUnit)})}let _a,Re,i0,s0,qo,Rl,Pl,Ko,$o,Zo,Jo,Gr,r0,o0,a0,l0,c0,u0;function yA(){_a=document.getElementById("more-menu-toggle"),Re=document.getElementById("more-menu-content"),i0=document.getElementById("top-bar"),s0=document.getElementById("app"),qo=document.getElementById("scale-control-group"),Rl=document.getElementById("scale-preset-select"),Pl=document.getElementById("scale-badge"),Ko=document.getElementById("time-control-group"),$o=document.getElementById("time-preset-group"),Zo=document.getElementById("visuals-btn"),Jo=document.getElementById("settings-btn"),Gr=document.getElementById("github-link"),r0=Zo.parentNode,o0=Jo.parentNode,a0=Gr.parentNode,l0=Ko.parentNode,c0=$o.parentNode,u0=qo.parentNode}function h0(){if(window.innerWidth<=768)Re.contains(Ko)||Re.appendChild(Ko),Re.contains($o)||Re.appendChild($o),Re.contains(Zo)||Re.appendChild(Zo),Re.contains(Jo)||Re.appendChild(Jo),Re.contains(Gr)||Re.appendChild(Gr),Re.contains(qo)||Re.appendChild(qo),_a.classList.remove("hidden");else{l0.appendChild(Ko),c0.appendChild($o);const t=document.getElementById("more-menu-container");r0.insertBefore(Zo,t),o0.insertBefore(Jo,t),u0.insertBefore(qo,Gr),a0.insertBefore(Gr,t),_a.classList.add("hidden"),Re.classList.add("hidden")}SA()}function SA(){const i=i0.offsetHeight;s0.style.paddingTop=`${i}px`}function MA(){_a.addEventListener("click",i=>{i.stopPropagation();const t=!Re.classList.contains("hidden");Re.classList.toggle("hidden",t)}),Rl.addEventListener("change",i=>{const t=i.target.value;vt.getState().setScalePreset(t)}),vt.subscribe(i=>{const t=i.scalePreset;switch(Rl.value!==t&&(Rl.value=t),t){case"realistic":Pl.textContent="1:1 Scale";break;case"educational":Pl.textContent="Large Planets";break;case"hybrid":Pl.textContent="Log Distance";break}}),document.addEventListener("click",i=>{const t=i.target;!Re.classList.contains("hidden")&&!Re.contains(t)&&!_a.contains(t)&&Re.classList.add("hidden")}),window.addEventListener("resize",h0)}function EA(){yA(),MA(),h0()}const bA=["Sun","Earth","Mars","Jupiter"],wA=4e3;let td;function TA(i){const e=i.currentTarget.dataset.body;e&&vt.getState().setSelectedBodyId(e)}function AA(){const i=document.getElementById("open-celestial-selector-btn");i&&i.click()}function dl(){Ii&&(clearTimeout(td),Ii.classList.remove("hidden"),td=window.setTimeout(()=>{Ii.classList.add("hidden")},wA))}function CA(){if(!Ii)return;Ii.innerHTML="",bA.forEach(t=>{const e=document.createElement("button");e.className="quick-access-btn",e.dataset.body=t,e.textContent=t,e.addEventListener("click",TA),Ii.appendChild(e)});const i=document.createElement("button");i.id="quick-access-overflow",i.className="quick-access-btn",i.textContent="⋯",i.addEventListener("click",AA),Ii.appendChild(i),document.body.addEventListener("mousemove",dl,{passive:!0}),document.body.addEventListener("touchstart",dl,{passive:!0}),Ii.addEventListener("mouseenter",()=>clearTimeout(td)),Ii.addEventListener("mouseleave",dl),dl()}/*! shepherd.js 14.5.1 */function RA(i){return i instanceof Element}function go(i){return i instanceof HTMLElement}function gs(i){return typeof i=="function"}function va(i){return typeof i=="string"}function qe(i){return i===void 0}class jd{on(t,e,n,s=!1){var r;return qe(this.bindings)&&(this.bindings={}),qe(this.bindings[t])&&(this.bindings[t]=[]),(r=this.bindings[t])==null||r.push({handler:e,ctx:n,once:s}),this}once(t,e,n){return this.on(t,e,n,!0)}off(t,e){if(qe(this.bindings)||qe(this.bindings[t]))return this;if(qe(e))delete this.bindings[t];else{var n;(n=this.bindings[t])==null||n.forEach((s,r)=>{if(s.handler===e){var o;(o=this.bindings[t])==null||o.splice(r,1)}})}return this}trigger(t,...e){if(!qe(this.bindings)&&this.bindings[t]){var n;(n=this.bindings[t])==null||n.forEach((s,r)=>{const{ctx:o,handler:a,once:l}=s,c=o||this;if(a.apply(c,e),l){var u;(u=this.bindings[t])==null||u.splice(r,1)}})}return this}}function dn(){return dn=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)({}).hasOwnProperty.call(e,n)&&(i[n]=e[n])}return i},dn.apply(null,arguments)}function Yd(i,t){if(i==null)return{};var e={};for(var n in i)if({}.hasOwnProperty.call(i,n)){if(t.includes(n))continue;e[n]=i[n]}return e}const ys={defaultMerge:Symbol("deepmerge-ts: default merge"),skip:Symbol("deepmerge-ts: skip")};ys.defaultMerge;function PA(i,t){return t}function DA(i,t){return i.filter(e=>e!==void 0)}var _m;(function(i){i[i.NOT=0]="NOT",i[i.RECORD=1]="RECORD",i[i.ARRAY=2]="ARRAY",i[i.SET=3]="SET",i[i.MAP=4]="MAP",i[i.OTHER=5]="OTHER"})(_m||(_m={}));function vm(i){return typeof i!="object"||i===null?0:Array.isArray(i)?2:UA(i)?1:i instanceof Set?3:i instanceof Map?4:5}function IA(i){const t=new Set;for(const e of i)for(const n of[...Object.keys(e),...Object.getOwnPropertySymbols(e)])t.add(n);return t}function LA(i,t){return typeof i=="object"&&Object.prototype.propertyIsEnumerable.call(i,t)}function d0(i){return{*[Symbol.iterator](){for(const t of i)for(const e of t)yield e}}}const xm=new Set(["[object Object]","[object Module]"]);function UA(i){if(!xm.has(Object.prototype.toString.call(i)))return!1;const{constructor:t}=i;if(t===void 0)return!0;const e=t.prototype;return!(e===null||typeof e!="object"||!xm.has(Object.prototype.toString.call(e))||!e.hasOwnProperty("isPrototypeOf"))}function OA(i,t,e){const n={};for(const s of IA(i)){const r=[];for(const l of i)LA(l,s)&&r.push(l[s]);if(r.length===0)continue;const o=t.metaDataUpdater(e,{key:s,parents:i}),a=f0(r,t,o);a!==ys.skip&&(s==="__proto__"?Object.defineProperty(n,s,{value:a,configurable:!0,enumerable:!0,writable:!0}):n[s]=a)}return n}function FA(i){return i.flat()}function NA(i){return new Set(d0(i))}function BA(i){return new Map(d0(i))}function kA(i){return i.at(-1)}const fl={mergeRecords:OA,mergeArrays:FA,mergeSets:NA,mergeMaps:BA,mergeOthers:kA};function qd(...i){return zA({})(...i)}function zA(i,t){const e=HA(i,n);function n(...s){return f0(s,e,t)}return n}function HA(i,t){var e,n,s;return{defaultMergeFunctions:fl,mergeFunctions:dn({},fl,Object.fromEntries(Object.entries(i).filter(([r,o])=>Object.hasOwn(fl,r)).map(([r,o])=>o===!1?[r,fl.mergeOthers]:[r,o]))),metaDataUpdater:(e=i.metaDataUpdater)!=null?e:PA,deepmerge:t,useImplicitDefaultMerging:(n=i.enableImplicitDefaultMerging)!=null?n:!1,filterValues:i.filterValues===!1?void 0:(s=i.filterValues)!=null?s:DA,actions:ys}}function f0(i,t,e){var n;const s=(n=t.filterValues==null?void 0:t.filterValues(i,e))!=null?n:i;if(s.length===0)return;if(s.length===1)return bu(s,t,e);const r=vm(s[0]);if(r!==0&&r!==5){for(let o=1;o<s.length;o++)if(vm(s[o])!==r)return bu(s,t,e)}switch(r){case 1:return VA(s,t,e);case 2:return GA(s,t,e);case 3:return WA(s,t,e);case 4:return XA(s,t,e);default:return bu(s,t,e)}}function VA(i,t,e){const n=t.mergeFunctions.mergeRecords(i,t,e);return n===ys.defaultMerge||t.useImplicitDefaultMerging&&n===void 0&&t.mergeFunctions.mergeRecords!==t.defaultMergeFunctions.mergeRecords?t.defaultMergeFunctions.mergeRecords(i,t,e):n}function GA(i,t,e){const n=t.mergeFunctions.mergeArrays(i,t,e);return n===ys.defaultMerge||t.useImplicitDefaultMerging&&n===void 0&&t.mergeFunctions.mergeArrays!==t.defaultMergeFunctions.mergeArrays?t.defaultMergeFunctions.mergeArrays(i):n}function WA(i,t,e){const n=t.mergeFunctions.mergeSets(i,t,e);return n===ys.defaultMerge||t.useImplicitDefaultMerging&&n===void 0&&t.mergeFunctions.mergeSets!==t.defaultMergeFunctions.mergeSets?t.defaultMergeFunctions.mergeSets(i):n}function XA(i,t,e){const n=t.mergeFunctions.mergeMaps(i,t,e);return n===ys.defaultMerge||t.useImplicitDefaultMerging&&n===void 0&&t.mergeFunctions.mergeMaps!==t.defaultMergeFunctions.mergeMaps?t.defaultMergeFunctions.mergeMaps(i):n}function bu(i,t,e){const n=t.mergeFunctions.mergeOthers(i,t,e);return n===ys.defaultMerge||t.useImplicitDefaultMerging&&n===void 0&&t.mergeFunctions.mergeOthers!==t.defaultMergeFunctions.mergeOthers?t.defaultMergeFunctions.mergeOthers(i):n}function Kd(i){const t=Object.getOwnPropertyNames(i.constructor.prototype);for(let e=0;e<t.length;e++){const n=t[e],s=i[n];n!=="constructor"&&typeof s=="function"&&(i[n]=s.bind(i))}return i}function jA(i,t){return e=>{if(i.isOpen()){const n=i.el&&e.currentTarget===i.el;(!qe(t)&&e.currentTarget.matches(t)||n)&&i.tour.next()}}}function YA(i){const{event:t,selector:e}=i.options.advanceOn||{};if(t){const n=jA(i,e);let s=null;if(!qe(e)&&(s=document.querySelector(e),!s))return console.error(`No element was found for the selector supplied to advanceOn: ${e}`);s?(s.addEventListener(t,n),i.on("destroy",()=>s.removeEventListener(t,n))):(document.body.addEventListener(t,n,!0),i.on("destroy",()=>document.body.removeEventListener(t,n,!0)))}else return console.error("advanceOn was defined, but no event name was passed.")}class qA{constructor(t){}}class KA{constructor(t,e){}}function p0(i){return!va(i)||i===""?"":i.charAt(i.length-1)!=="-"?`${i}-`:i}function $A(i){const t=i.options.attachTo||{},e=Object.assign({},t);if(gs(e.element)&&(e.element=e.element.call(i)),va(e.element)){try{e.element=document.querySelector(e.element)}catch{}e.element||console.error(`The element for this Shepherd step was not found ${t.element}`)}return e}function ZA(i){return i.options.extraHighlights?i.options.extraHighlights.flatMap(t=>Array.from(document.querySelectorAll(t))):[]}function m0(i){return i==null?!0:!i.element||!i.on}function g0(){let i=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=(i+Math.random()*16)%16|0;return i=Math.floor(i/16),(t=="x"?e:e&3|8).toString(16)})}const JA=["top","right","bottom","left"],ym=["start","end"],Sm=JA.reduce((i,t)=>i.concat(t,t+"-"+ym[0],t+"-"+ym[1]),[]),_o=Math.min,Zs=Math.max,nc=Math.round,pl=Math.floor,fi=i=>({x:i,y:i}),QA={left:"right",right:"left",bottom:"top",top:"bottom"},tC={start:"end",end:"start"};function ed(i,t,e){return Zs(i,_o(t,e))}function lr(i,t){return typeof i=="function"?i(t):i}function Xi(i){return i.split("-")[0]}function zi(i){return i.split("-")[1]}function $d(i){return i==="x"?"y":"x"}function Zd(i){return i==="y"?"height":"width"}function Js(i){return["top","bottom"].includes(Xi(i))?"y":"x"}function Jd(i){return $d(Js(i))}function _0(i,t,e){e===void 0&&(e=!1);const n=zi(i),s=Jd(i),r=Zd(s);let o=s==="x"?n===(e?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=sc(o)),[o,sc(o)]}function eC(i){const t=sc(i);return[ic(i),t,ic(t)]}function ic(i){return i.replace(/start|end/g,t=>tC[t])}function nC(i,t,e){const n=["left","right"],s=["right","left"],r=["top","bottom"],o=["bottom","top"];switch(i){case"top":case"bottom":return e?t?s:n:t?n:s;case"left":case"right":return t?r:o;default:return[]}}function iC(i,t,e,n){const s=zi(i);let r=nC(Xi(i),e==="start",n);return s&&(r=r.map(o=>o+"-"+s),t&&(r=r.concat(r.map(ic)))),r}function sc(i){return i.replace(/left|right|bottom|top/g,t=>QA[t])}function sC(i){return dn({top:0,right:0,bottom:0,left:0},i)}function v0(i){return typeof i!="number"?sC(i):{top:i,right:i,bottom:i,left:i}}function rc(i){const{x:t,y:e,width:n,height:s}=i;return{width:n,height:s,top:e,left:t,right:t+n,bottom:e+s,x:t,y:e}}const rC=["crossAxis","alignment","allowedPlacements","autoAlignment"],oC=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],aC=["mainAxis","crossAxis","limiter"];function Mm(i,t,e){let{reference:n,floating:s}=i;const r=Js(t),o=Jd(t),a=Zd(o),l=Xi(t),c=r==="y",u=n.x+n.width/2-s.width/2,h=n.y+n.height/2-s.height/2,d=n[a]/2-s[a]/2;let f;switch(l){case"top":f={x:u,y:n.y-s.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:h};break;case"left":f={x:n.x-s.width,y:h};break;default:f={x:n.x,y:n.y}}switch(zi(t)){case"start":f[o]-=d*(e&&c?-1:1);break;case"end":f[o]+=d*(e&&c?-1:1);break}return f}const lC=async(i,t,e)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:o}=e,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:i,floating:t,strategy:s}),{x:u,y:h}=Mm(c,n,l),d=n,f={},_=0;for(let g=0;g<a.length;g++){const{name:m,fn:p}=a[g],{x:M,y:S,data:v,reset:b}=await p({x:u,y:h,initialPlacement:n,placement:d,strategy:s,middlewareData:f,rects:c,platform:o,elements:{reference:i,floating:t}});u=M??u,h=S??h,f=dn({},f,{[m]:dn({},f[m],v)}),b&&_<=50&&(_++,typeof b=="object"&&(b.placement&&(d=b.placement),b.rects&&(c=b.rects===!0?await o.getElementRects({reference:i,floating:t,strategy:s}):b.rects),{x:u,y:h}=Mm(c,d,l)),g=-1)}return{x:u,y:h,placement:d,strategy:s,middlewareData:f}};async function Qd(i,t){var e;t===void 0&&(t={});const{x:n,y:s,platform:r,rects:o,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:d=!1,padding:f=0}=lr(t,i),_=v0(f),m=a[d?h==="floating"?"reference":"floating":h],p=rc(await r.getClippingRect({element:(e=await(r.isElement==null?void 0:r.isElement(m)))==null||e?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),M=h==="floating"?{x:n,y:s,width:o.floating.width,height:o.floating.height}:o.reference,S=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),v=await(r.isElement==null?void 0:r.isElement(S))?await(r.getScale==null?void 0:r.getScale(S))||{x:1,y:1}:{x:1,y:1},b=rc(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:M,offsetParent:S,strategy:l}):M);return{top:(p.top-b.top+_.top)/v.y,bottom:(b.bottom-p.bottom+_.bottom)/v.y,left:(p.left-b.left+_.left)/v.x,right:(b.right-p.right+_.right)/v.x}}const cC=i=>({name:"arrow",options:i,async fn(t){const{x:e,y:n,placement:s,rects:r,platform:o,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=lr(i,t)||{};if(c==null)return{};const h=v0(u),d={x:e,y:n},f=Jd(s),_=Zd(f),g=await o.getDimensions(c),m=f==="y",p=m?"top":"left",M=m?"bottom":"right",S=m?"clientHeight":"clientWidth",v=r.reference[_]+r.reference[f]-d[f]-r.floating[_],b=d[f]-r.reference[f],T=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let A=T?T[S]:0;(!A||!await(o.isElement==null?void 0:o.isElement(T)))&&(A=a.floating[S]||r.floating[_]);const P=v/2-b/2,y=A/2-g[_]/2-1,x=_o(h[p],y),C=_o(h[M],y),F=x,z=A-g[_]-C,G=A/2-g[_]/2+P,L=ed(F,G,z),U=!l.arrow&&zi(s)!=null&&G!==L&&r.reference[_]/2-(G<F?x:C)-g[_]/2<0,N=U?G<F?G-F:G-z:0;return{[f]:d[f]+N,data:dn({[f]:L,centerOffset:G-L-N},U&&{alignmentOffset:N}),reset:U}}});function uC(i,t,e){return(i?[...e.filter(s=>zi(s)===i),...e.filter(s=>zi(s)!==i)]:e.filter(s=>Xi(s)===s)).filter(s=>i?zi(s)===i||(t?ic(s)!==s:!1):!0)}const hC=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,s,r;const{rects:o,middlewareData:a,placement:l,platform:c,elements:u}=e,h=lr(t,e),{crossAxis:d=!1,alignment:f,allowedPlacements:_=Sm,autoAlignment:g=!0}=h,m=Yd(h,rC),p=f!==void 0||_===Sm?uC(f||null,g,_):_,M=await Qd(e,m),S=((n=a.autoPlacement)==null?void 0:n.index)||0,v=p[S];if(v==null)return{};const b=_0(v,o,await(c.isRTL==null?void 0:c.isRTL(u.floating)));if(l!==v)return{reset:{placement:p[0]}};const T=[M[Xi(v)],M[b[0]],M[b[1]]],A=[...((s=a.autoPlacement)==null?void 0:s.overflows)||[],{placement:v,overflows:T}],P=p[S+1];if(P)return{data:{index:S+1,overflows:A},reset:{placement:P}};const y=A.map(F=>{const z=zi(F.placement);return[F.placement,z&&d?F.overflows.slice(0,2).reduce((G,L)=>G+L,0):F.overflows[0],F.overflows]}).sort((F,z)=>F[1]-z[1]),C=((r=y.filter(F=>F[2].slice(0,zi(F[0])?2:3).every(z=>z<=0))[0])==null?void 0:r[0])||y[0][0];return C!==l?{data:{index:S+1,overflows:A},reset:{placement:C}}:{}}}},dC=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,s;const{placement:r,middlewareData:o,rects:a,initialPlacement:l,platform:c,elements:u}=e,h=lr(t,e),{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:_,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:p=!0}=h,M=Yd(h,oC);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const S=Xi(r),v=Js(l),b=Xi(l)===l,T=await(c.isRTL==null?void 0:c.isRTL(u.floating)),A=_||(b||!p?[sc(l)]:eC(l)),P=m!=="none";!_&&P&&A.push(...iC(l,p,m,T));const y=[l,...A],x=await Qd(e,M),C=[];let F=((s=o.flip)==null?void 0:s.overflows)||[];if(d&&C.push(x[S]),f){const N=_0(r,a,T);C.push(x[N[0]],x[N[1]])}if(F=[...F,{placement:r,overflows:C}],!C.every(N=>N<=0)){var z,G;const N=(((z=o.flip)==null?void 0:z.index)||0)+1,k=y[N];if(k){var L;const $=f==="alignment"?v!==Js(k):!1,tt=((L=F[0])==null?void 0:L.overflows[0])>0;if(!$||tt)return{data:{index:N,overflows:F},reset:{placement:k}}}let K=(G=F.filter($=>$.overflows[0]<=0).sort(($,tt)=>$.overflows[1]-tt.overflows[1])[0])==null?void 0:G.placement;if(!K)switch(g){case"bestFit":{var U;const $=(U=F.filter(tt=>{if(P){const ut=Js(tt.placement);return ut===v||ut==="y"}return!0}).map(tt=>[tt.placement,tt.overflows.filter(ut=>ut>0).reduce((ut,at)=>ut+at,0)]).sort((tt,ut)=>tt[1]-ut[1])[0])==null?void 0:U[0];$&&(K=$);break}case"initialPlacement":K=l;break}if(r!==K)return{reset:{placement:K}}}return{}}}},fC=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:s,placement:r}=e,o=lr(t,e),{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:M=>{let{x:S,y:v}=M;return{x:S,y:v}}}}=o,u=Yd(o,aC),h={x:n,y:s},d=await Qd(e,u),f=Js(Xi(r)),_=$d(f);let g=h[_],m=h[f];if(a){const M=_==="y"?"top":"left",S=_==="y"?"bottom":"right",v=g+d[M],b=g-d[S];g=ed(v,g,b)}if(l){const M=f==="y"?"top":"left",S=f==="y"?"bottom":"right",v=m+d[M],b=m-d[S];m=ed(v,m,b)}const p=c.fn(dn({},e,{[_]:g,[f]:m}));return dn({},p,{data:{x:p.x-n,y:p.y-s,enabled:{[_]:a,[f]:l}}})}}},pC=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:s,placement:r,rects:o,middlewareData:a}=e,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=lr(t,e),h={x:n,y:s},d=Js(r),f=$d(d);let _=h[f],g=h[d];const m=lr(l,e),p=typeof m=="number"?{mainAxis:m,crossAxis:0}:dn({mainAxis:0,crossAxis:0},m);if(c){const v=f==="y"?"height":"width",b=o.reference[f]-o.floating[v]+p.mainAxis,T=o.reference[f]+o.reference[v]-p.mainAxis;_<b?_=b:_>T&&(_=T)}if(u){var M,S;const v=f==="y"?"width":"height",b=["top","left"].includes(Xi(r)),T=o.reference[d]-o.floating[v]+(b&&((M=a.offset)==null?void 0:M[d])||0)+(b?0:p.crossAxis),A=o.reference[d]+o.reference[v]+(b?0:((S=a.offset)==null?void 0:S[d])||0)-(b?p.crossAxis:0);g<T?g=T:g>A&&(g=A)}return{[f]:_,[d]:g}}}};function _c(){return typeof window<"u"}function Eo(i){return x0(i)?(i.nodeName||"").toLowerCase():"#document"}function An(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function yi(i){var t;return(t=(x0(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function x0(i){return _c()?i instanceof Node||i instanceof An(i).Node:!1}function Zn(i){return _c()?i instanceof Element||i instanceof An(i).Element:!1}function vi(i){return _c()?i instanceof HTMLElement||i instanceof An(i).HTMLElement:!1}function Em(i){return!_c()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof An(i).ShadowRoot}function Ta(i){const{overflow:t,overflowX:e,overflowY:n,display:s}=Jn(i);return/auto|scroll|overlay|hidden|clip/.test(t+n+e)&&!["inline","contents"].includes(s)}function mC(i){return["table","td","th"].includes(Eo(i))}function vc(i){return[":popover-open",":modal"].some(t=>{try{return i.matches(t)}catch{return!1}})}function tf(i){const t=ef(),e=Zn(i)?Jn(i):i;return["transform","translate","scale","rotate","perspective"].some(n=>e[n]?e[n]!=="none":!1)||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(e.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(e.contain||"").includes(n))}function gC(i){let t=_s(i);for(;vi(t)&&!vo(t);){if(tf(t))return t;if(vc(t))return null;t=_s(t)}return null}function ef(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function vo(i){return["html","body","#document"].includes(Eo(i))}function Jn(i){return An(i).getComputedStyle(i)}function xc(i){return Zn(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function _s(i){if(Eo(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Em(i)&&i.host||yi(i);return Em(t)?t.host:t}function y0(i){const t=_s(i);return vo(t)?i.ownerDocument?i.ownerDocument.body:i.body:vi(t)&&Ta(t)?t:y0(t)}function xa(i,t,e){var n;t===void 0&&(t=[]),e===void 0&&(e=!0);const s=y0(i),r=s===((n=i.ownerDocument)==null?void 0:n.body),o=An(s);if(r){const a=nd(o);return t.concat(o,o.visualViewport||[],Ta(s)?s:[],a&&e?xa(a):[])}return t.concat(s,xa(s,[],e))}function nd(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function S0(i){const t=Jn(i);let e=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const s=vi(i),r=s?i.offsetWidth:e,o=s?i.offsetHeight:n,a=nc(e)!==r||nc(n)!==o;return a&&(e=r,n=o),{width:e,height:n,$:a}}function nf(i){return Zn(i)?i:i.contextElement}function Jr(i){const t=nf(i);if(!vi(t))return fi(1);const e=t.getBoundingClientRect(),{width:n,height:s,$:r}=S0(t);let o=(r?nc(e.width):e.width)/n,a=(r?nc(e.height):e.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const _C=fi(0);function M0(i){const t=An(i);return!ef()||!t.visualViewport?_C:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function vC(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==An(i)?!1:t}function cr(i,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=!1);const s=i.getBoundingClientRect(),r=nf(i);let o=fi(1);t&&(n?Zn(n)&&(o=Jr(n)):o=Jr(i));const a=vC(r,e,n)?M0(r):fi(0);let l=(s.left+a.x)/o.x,c=(s.top+a.y)/o.y,u=s.width/o.x,h=s.height/o.y;if(r){const d=An(r),f=n&&Zn(n)?An(n):n;let _=d,g=nd(_);for(;g&&n&&f!==_;){const m=Jr(g),p=g.getBoundingClientRect(),M=Jn(g),S=p.left+(g.clientLeft+parseFloat(M.paddingLeft))*m.x,v=p.top+(g.clientTop+parseFloat(M.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,h*=m.y,l+=S,c+=v,_=An(g),g=nd(_)}}return rc({width:u,height:h,x:l,y:c})}function sf(i,t){const e=xc(i).scrollLeft;return t?t.left+e:cr(yi(i)).left+e}function E0(i,t,e){e===void 0&&(e=!1);const n=i.getBoundingClientRect(),s=n.left+t.scrollLeft-(e?0:sf(i,n)),r=n.top+t.scrollTop;return{x:s,y:r}}function xC(i){let{elements:t,rect:e,offsetParent:n,strategy:s}=i;const r=s==="fixed",o=yi(n),a=t?vc(t.floating):!1;if(n===o||a&&r)return e;let l={scrollLeft:0,scrollTop:0},c=fi(1);const u=fi(0),h=vi(n);if((h||!h&&!r)&&((Eo(n)!=="body"||Ta(o))&&(l=xc(n)),vi(n))){const f=cr(n);c=Jr(n),u.x=f.x+n.clientLeft,u.y=f.y+n.clientTop}const d=o&&!h&&!r?E0(o,l,!0):fi(0);return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+u.x+d.x,y:e.y*c.y-l.scrollTop*c.y+u.y+d.y}}function yC(i){return Array.from(i.getClientRects())}function SC(i){const t=yi(i),e=xc(i),n=i.ownerDocument.body,s=Zs(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=Zs(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let o=-e.scrollLeft+sf(i);const a=-e.scrollTop;return Jn(n).direction==="rtl"&&(o+=Zs(t.clientWidth,n.clientWidth)-s),{width:s,height:r,x:o,y:a}}function MC(i,t){const e=An(i),n=yi(i),s=e.visualViewport;let r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;const c=ef();(!c||c&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a,y:l}}function EC(i,t){const e=cr(i,!0,t==="fixed"),n=e.top+i.clientTop,s=e.left+i.clientLeft,r=vi(i)?Jr(i):fi(1),o=i.clientWidth*r.x,a=i.clientHeight*r.y,l=s*r.x,c=n*r.y;return{width:o,height:a,x:l,y:c}}function bm(i,t,e){let n;if(t==="viewport")n=MC(i,e);else if(t==="document")n=SC(yi(i));else if(Zn(t))n=EC(t,e);else{const s=M0(i);n={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return rc(n)}function b0(i,t){const e=_s(i);return e===t||!Zn(e)||vo(e)?!1:Jn(e).position==="fixed"||b0(e,t)}function bC(i,t){const e=t.get(i);if(e)return e;let n=xa(i,[],!1).filter(a=>Zn(a)&&Eo(a)!=="body"),s=null;const r=Jn(i).position==="fixed";let o=r?_s(i):i;for(;Zn(o)&&!vo(o);){const a=Jn(o),l=tf(o);!l&&a.position==="fixed"&&(s=null),(r?!l&&!s:!l&&a.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Ta(o)&&!l&&b0(i,o))?n=n.filter(u=>u!==o):s=a,o=_s(o)}return t.set(i,n),n}function wC(i){let{element:t,boundary:e,rootBoundary:n,strategy:s}=i;const o=[...e==="clippingAncestors"?vc(t)?[]:bC(t,this._c):[].concat(e),n],a=o[0],l=o.reduce((c,u)=>{const h=bm(t,u,s);return c.top=Zs(h.top,c.top),c.right=_o(h.right,c.right),c.bottom=_o(h.bottom,c.bottom),c.left=Zs(h.left,c.left),c},bm(t,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function TC(i){const{width:t,height:e}=S0(i);return{width:t,height:e}}function AC(i,t,e){const n=vi(t),s=yi(t),r=e==="fixed",o=cr(i,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=fi(0);function c(){l.x=sf(s)}if(n||!n&&!r)if((Eo(t)!=="body"||Ta(s))&&(a=xc(t)),n){const f=cr(t,!0,r,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else s&&c();r&&!n&&s&&c();const u=s&&!n&&!r?E0(s,a):fi(0),h=o.left+a.scrollLeft-l.x-u.x,d=o.top+a.scrollTop-l.y-u.y;return{x:h,y:d,width:o.width,height:o.height}}function wu(i){return Jn(i).position==="static"}function wm(i,t){if(!vi(i)||Jn(i).position==="fixed")return null;if(t)return t(i);let e=i.offsetParent;return yi(i)===e&&(e=e.ownerDocument.body),e}function w0(i,t){const e=An(i);if(vc(i))return e;if(!vi(i)){let s=_s(i);for(;s&&!vo(s);){if(Zn(s)&&!wu(s))return s;s=_s(s)}return e}let n=wm(i,t);for(;n&&mC(n)&&wu(n);)n=wm(n,t);return n&&vo(n)&&wu(n)&&!tf(n)?e:n||gC(i)||e}const CC=async function(t){const e=this.getOffsetParent||w0,n=this.getDimensions,s=await n(t.floating);return{reference:AC(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function RC(i){return Jn(i).direction==="rtl"}const PC={convertOffsetParentRelativeRectToViewportRelativeRect:xC,getDocumentElement:yi,getClippingRect:wC,getOffsetParent:w0,getElementRects:CC,getClientRects:yC,getDimensions:TC,getScale:Jr,isElement:Zn,isRTL:RC};function T0(i,t){return i.x===t.x&&i.y===t.y&&i.width===t.width&&i.height===t.height}function DC(i,t){let e=null,n;const s=yi(i);function r(){var a;clearTimeout(n),(a=e)==null||a.disconnect(),e=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=i.getBoundingClientRect(),{left:u,top:h,width:d,height:f}=c;if(a||t(),!d||!f)return;const _=pl(h),g=pl(s.clientWidth-(u+d)),m=pl(s.clientHeight-(h+f)),p=pl(u),S={rootMargin:-_+"px "+-g+"px "+-m+"px "+-p+"px",threshold:Zs(0,_o(1,l))||1};let v=!0;function b(T){const A=T[0].intersectionRatio;if(A!==l){if(!v)return o();A?o(!1,A):n=setTimeout(()=>{o(!1,1e-7)},1e3)}A===1&&!T0(c,i.getBoundingClientRect())&&o(),v=!1}try{e=new IntersectionObserver(b,dn({},S,{root:s.ownerDocument}))}catch{e=new IntersectionObserver(b,S)}e.observe(i)}return o(!0),r}function IC(i,t,e,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=nf(i),u=s||r?[...c?xa(c):[],...xa(t)]:[];u.forEach(p=>{s&&p.addEventListener("scroll",e,{passive:!0}),r&&p.addEventListener("resize",e)});const h=c&&a?DC(c,e):null;let d=-1,f=null;o&&(f=new ResizeObserver(p=>{let[M]=p;M&&M.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var S;(S=f)==null||S.observe(t)})),e()}),c&&!l&&f.observe(c),f.observe(t));let _,g=l?cr(i):null;l&&m();function m(){const p=cr(i);g&&!T0(g,p)&&e(),g=p,_=requestAnimationFrame(m)}return e(),()=>{var p;u.forEach(M=>{s&&M.removeEventListener("scroll",e),r&&M.removeEventListener("resize",e)}),h?.(),(p=f)==null||p.disconnect(),f=null,l&&cancelAnimationFrame(_)}}const LC=hC,UC=fC,OC=dC,FC=cC,NC=pC,BC=(i,t,e)=>{const n=new Map,s=dn({platform:PC},e),r=dn({},s.platform,{_c:n});return lC(i,t,dn({},s,{platform:r}))};function kC(i){i.cleanup&&i.cleanup();const t=i._getResolvedAttachToOptions();let e=t.element;const n=XC(t,i),s=m0(t);return s&&(e=document.body,i.shepherdElementComponent.getElement().classList.add("shepherd-centered")),i.cleanup=IC(e,i.el,()=>{if(!i.el){i.cleanup==null||i.cleanup();return}VC(e,i,n,s)}),i.target=t.element,n}function zC(i,t){return{floatingUIOptions:qd(i.floatingUIOptions||{},t.floatingUIOptions||{})}}function HC(i){i.cleanup&&i.cleanup(),i.cleanup=null}function VC(i,t,e,n){return BC(i,t.el,e).then(GC(t,n)).then(s=>new Promise(r=>{setTimeout(()=>r(s),300)})).then(s=>{s!=null&&s.el&&(s.el.tabIndex=0,s.el.focus({preventScroll:!0}))})}function GC(i,t){return({x:e,y:n,placement:s,middlewareData:r})=>(i.el&&(t?Object.assign(i.el.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}):Object.assign(i.el.style,{position:"absolute",left:`${e}px`,top:`${n}px`}),i.el.dataset.popperPlacement=s,WC(i.el,r)),i)}function WC(i,t){const e=i.querySelector(".shepherd-arrow");if(go(e)&&t.arrow){const{x:n,y:s}=t.arrow;Object.assign(e.style,{left:n!=null?`${n}px`:"",top:s!=null?`${s}px`:""})}}function XC(i,t){var e,n,s;const r={strategy:"absolute"};r.middleware=[];const o=jC(t),a=m0(i),l=(e=i.on)==null?void 0:e.includes("auto"),c=(i==null||(n=i.on)==null?void 0:n.includes("-start"))||(i==null||(s=i.on)==null?void 0:s.includes("-end"));if(!a){if(l){var u;r.middleware.push(LC({crossAxis:!0,alignment:c?i==null||(u=i.on)==null?void 0:u.split("-").pop():null}))}else r.middleware.push(OC());if(r.middleware.push(UC({limiter:NC(),crossAxis:!0})),o){const h=typeof t.options.arrow=="object"?t.options.arrow:{padding:4};r.middleware.push(FC({element:o,padding:c?h.padding:0}))}l||(r.placement=i.on)}return qd(r,t.options.floatingUIOptions||{})}function jC(i){return i.options.arrow&&i.el?i.el.querySelector(".shepherd-arrow"):!1}function In(){}function YC(i,t){for(const e in t)i[e]=t[e];return i}function A0(i){return i()}function Tm(){return Object.create(null)}function Aa(i){i.forEach(A0)}function rf(i){return typeof i=="function"}function ji(i,t){return i!=i?t==t:i!==t||i&&typeof i=="object"||typeof i=="function"}function qC(i){return Object.keys(i).length===0}function xo(i,t){i.appendChild(t)}function ti(i,t,e){i.insertBefore(t,e||null)}function Vn(i){i.parentNode&&i.parentNode.removeChild(i)}function KC(i,t){for(let e=0;e<i.length;e+=1)i[e]&&i[e].d(t)}function xi(i){return document.createElement(i)}function Am(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function C0(i){return document.createTextNode(i)}function oc(){return C0(" ")}function $C(){return C0("")}function yc(i,t,e,n){return i.addEventListener(t,e,n),()=>i.removeEventListener(t,e,n)}function le(i,t,e){e==null?i.removeAttribute(t):i.getAttribute(t)!==e&&i.setAttribute(t,e)}const ZC=["width","height"];function Cm(i,t){const e=Object.getOwnPropertyDescriptors(i.__proto__);for(const n in t)t[n]==null?i.removeAttribute(n):n==="style"?i.style.cssText=t[n]:n==="__value"?i.value=i[n]=t[n]:e[n]&&e[n].set&&ZC.indexOf(n)===-1?i[n]=t[n]:le(i,n,t[n])}function JC(i){return Array.from(i.childNodes)}function Or(i,t,e){i.classList.toggle(t,!!e)}let ya;function Qo(i){ya=i}function of(){if(!ya)throw new Error("Function called outside component initialization");return ya}function QC(i){of().$$.on_mount.push(i)}function af(i){of().$$.after_update.push(i)}function tR(i){of().$$.on_destroy.push(i)}const Nr=[],yo=[];let Qr=[];const Rm=[],eR=Promise.resolve();let id=!1;function nR(){id||(id=!0,eR.then(R0))}function sd(i){Qr.push(i)}const Tu=new Set;let Fr=0;function R0(){if(Fr!==0)return;const i=ya;do{try{for(;Fr<Nr.length;){const t=Nr[Fr];Fr++,Qo(t),iR(t.$$)}}catch(t){throw Nr.length=0,Fr=0,t}for(Qo(null),Nr.length=0,Fr=0;yo.length;)yo.pop()();for(let t=0;t<Qr.length;t+=1){const e=Qr[t];Tu.has(e)||(Tu.add(e),e())}Qr.length=0}while(Nr.length);for(;Rm.length;)Rm.pop()();id=!1,Tu.clear(),Qo(i)}function iR(i){if(i.fragment!==null){i.update(),Aa(i.before_update);const t=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,t),i.after_update.forEach(sd)}}function sR(i){const t=[],e=[];Qr.forEach(n=>i.indexOf(n)===-1?t.push(n):e.push(n)),e.forEach(n=>n()),Qr=t}const Dl=new Set;let Ws;function Qs(){Ws={r:0,c:[],p:Ws}}function tr(){Ws.r||Aa(Ws.c),Ws=Ws.p}function Qt(i,t){i&&i.i&&(Dl.delete(i),i.i(t))}function be(i,t,e,n){if(i&&i.o){if(Dl.has(i))return;Dl.add(i),Ws.c.push(()=>{Dl.delete(i),n&&(e&&i.d(1),n())}),i.o(t)}else n&&n()}function Pm(i){return i?.length!==void 0?i:Array.from(i)}function rR(i,t){const e={},n={},s={$$scope:1};let r=i.length;for(;r--;){const o=i[r],a=t[r];if(a){for(const l in o)l in a||(n[l]=1);for(const l in a)s[l]||(e[l]=a[l],s[l]=1);i[r]=a}else for(const l in o)s[l]=1}for(const o in n)o in e||(e[o]=void 0);return e}function pr(i){i&&i.c()}function Ss(i,t,e){const{fragment:n,after_update:s}=i.$$;n&&n.m(t,e),sd(()=>{const r=i.$$.on_mount.map(A0).filter(rf);i.$$.on_destroy?i.$$.on_destroy.push(...r):Aa(r),i.$$.on_mount=[]}),s.forEach(sd)}function Ms(i,t){const e=i.$$;e.fragment!==null&&(sR(e.after_update),Aa(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function oR(i,t){i.$$.dirty[0]===-1&&(Nr.push(i),nR(),i.$$.dirty.fill(0)),i.$$.dirty[t/31|0]|=1<<t%31}function Yi(i,t,e,n,s,r,o=null,a=[-1]){const l=ya;Qo(i);const c=i.$$={fragment:null,ctx:[],props:r,update:In,not_equal:s,bound:Tm(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Tm(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=e?e(i,t.props||{},(h,d,...f)=>{const _=f.length?f[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=_)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](_),u&&oR(i,h)),d}):[],c.update(),u=!0,Aa(c.before_update),c.fragment=n?n(c.ctx):!1,t.target){if(t.hydrate){const h=JC(t.target);c.fragment&&c.fragment.l(h),h.forEach(Vn)}else c.fragment&&c.fragment.c();t.intro&&Qt(i.$$.fragment),Ss(i,t.target,t.anchor),R0()}Qo(l)}class qi{constructor(){this.$$=void 0,this.$$set=void 0}$destroy(){Ms(this,1),this.$destroy=In}$on(t,e){if(!rf(e))return In;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}$set(t){this.$$set&&!qC(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const aR="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(aR);function lR(i){let t,e,n,s,r;return{c(){t=xi("button"),le(t,"aria-label",e=i[3]?i[3]:null),le(t,"class",n=`${i[1]||""} shepherd-button ${i[4]?"shepherd-button-secondary":""}`),t.disabled=i[2],le(t,"tabindex","0"),le(t,"type","button")},m(o,a){ti(o,t,a),t.innerHTML=i[5],s||(r=yc(t,"click",function(){rf(i[0])&&i[0].apply(this,arguments)}),s=!0)},p(o,[a]){i=o,a&32&&(t.innerHTML=i[5]),a&8&&e!==(e=i[3]?i[3]:null)&&le(t,"aria-label",e),a&18&&n!==(n=`${i[1]||""} shepherd-button ${i[4]?"shepherd-button-secondary":""}`)&&le(t,"class",n),a&4&&(t.disabled=i[2])},i:In,o:In,d(o){o&&Vn(t),s=!1,r()}}}function cR(i,t,e){let{config:n,step:s}=t,r,o,a,l,c,u;function h(d){return gs(d)?d=d.call(s):d}return i.$$set=d=>{"config"in d&&e(6,n=d.config),"step"in d&&e(7,s=d.step)},i.$$.update=()=>{i.$$.dirty&192&&(e(0,r=n.action?n.action.bind(s.tour):null),e(1,o=n.classes),e(2,a=n.disabled?h(n.disabled):!1),e(3,l=n.label?h(n.label):null),e(4,c=n.secondary),e(5,u=n.text?h(n.text):null))},[r,o,a,l,c,u,n,s]}class uR extends qi{constructor(t){super(),Yi(this,t,cR,lR,ji,{config:6,step:7})}}function Dm(i,t,e){const n=i.slice();return n[2]=t[e],n}function Im(i){let t,e,n=Pm(i[1]),s=[];for(let o=0;o<n.length;o+=1)s[o]=Lm(Dm(i,n,o));const r=o=>be(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();t=$C()},m(o,a){for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(o,a);ti(o,t,a),e=!0},p(o,a){if(a&3){n=Pm(o[1]);let l;for(l=0;l<n.length;l+=1){const c=Dm(o,n,l);s[l]?(s[l].p(c,a),Qt(s[l],1)):(s[l]=Lm(c),s[l].c(),Qt(s[l],1),s[l].m(t.parentNode,t))}for(Qs(),l=n.length;l<s.length;l+=1)r(l);tr()}},i(o){if(!e){for(let a=0;a<n.length;a+=1)Qt(s[a]);e=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)be(s[a]);e=!1},d(o){o&&Vn(t),KC(s,o)}}}function Lm(i){let t,e;return t=new uR({props:{config:i[2],step:i[0]}}),{c(){pr(t.$$.fragment)},m(n,s){Ss(t,n,s),e=!0},p(n,s){const r={};s&2&&(r.config=n[2]),s&1&&(r.step=n[0]),t.$set(r)},i(n){e||(Qt(t.$$.fragment,n),e=!0)},o(n){be(t.$$.fragment,n),e=!1},d(n){Ms(t,n)}}}function hR(i){let t,e,n=i[1]&&Im(i);return{c(){t=xi("footer"),n&&n.c(),le(t,"class","shepherd-footer")},m(s,r){ti(s,t,r),n&&n.m(t,null),e=!0},p(s,[r]){s[1]?n?(n.p(s,r),r&2&&Qt(n,1)):(n=Im(s),n.c(),Qt(n,1),n.m(t,null)):n&&(Qs(),be(n,1,1,()=>{n=null}),tr())},i(s){e||(Qt(n),e=!0)},o(s){be(n),e=!1},d(s){s&&Vn(t),n&&n.d()}}}function dR(i,t,e){let n,{step:s}=t;return i.$$set=r=>{"step"in r&&e(0,s=r.step)},i.$$.update=()=>{i.$$.dirty&1&&e(1,n=s.options.buttons)},[s,n]}class fR extends qi{constructor(t){super(),Yi(this,t,dR,hR,ji,{step:0})}}function pR(i){let t,e,n,s,r;return{c(){t=xi("button"),e=xi("span"),e.textContent="×",le(e,"aria-hidden","true"),le(t,"aria-label",n=i[0].label?i[0].label:"Close Tour"),le(t,"class","shepherd-cancel-icon"),le(t,"type","button")},m(o,a){ti(o,t,a),xo(t,e),s||(r=yc(t,"click",i[1]),s=!0)},p(o,[a]){a&1&&n!==(n=o[0].label?o[0].label:"Close Tour")&&le(t,"aria-label",n)},i:In,o:In,d(o){o&&Vn(t),s=!1,r()}}}function mR(i,t,e){let{cancelIcon:n,step:s}=t;const r=o=>{o.preventDefault(),s.cancel()};return i.$$set=o=>{"cancelIcon"in o&&e(0,n=o.cancelIcon),"step"in o&&e(2,s=o.step)},[n,r,s]}class gR extends qi{constructor(t){super(),Yi(this,t,mR,pR,ji,{cancelIcon:0,step:2})}}function _R(i){let t;return{c(){t=xi("h3"),le(t,"id",i[1]),le(t,"class","shepherd-title")},m(e,n){ti(e,t,n),i[3](t)},p(e,[n]){n&2&&le(t,"id",e[1])},i:In,o:In,d(e){e&&Vn(t),i[3](null)}}}function vR(i,t,e){let{labelId:n,element:s,title:r}=t;af(()=>{gs(r)&&e(2,r=r()),e(0,s.innerHTML=r,s)});function o(a){yo[a?"unshift":"push"](()=>{s=a,e(0,s)})}return i.$$set=a=>{"labelId"in a&&e(1,n=a.labelId),"element"in a&&e(0,s=a.element),"title"in a&&e(2,r=a.title)},[s,n,r,o]}class xR extends qi{constructor(t){super(),Yi(this,t,vR,_R,ji,{labelId:1,element:0,title:2})}}function Um(i){let t,e;return t=new xR({props:{labelId:i[0],title:i[2]}}),{c(){pr(t.$$.fragment)},m(n,s){Ss(t,n,s),e=!0},p(n,s){const r={};s&1&&(r.labelId=n[0]),s&4&&(r.title=n[2]),t.$set(r)},i(n){e||(Qt(t.$$.fragment,n),e=!0)},o(n){be(t.$$.fragment,n),e=!1},d(n){Ms(t,n)}}}function Om(i){let t,e;return t=new gR({props:{cancelIcon:i[3],step:i[1]}}),{c(){pr(t.$$.fragment)},m(n,s){Ss(t,n,s),e=!0},p(n,s){const r={};s&8&&(r.cancelIcon=n[3]),s&2&&(r.step=n[1]),t.$set(r)},i(n){e||(Qt(t.$$.fragment,n),e=!0)},o(n){be(t.$$.fragment,n),e=!1},d(n){Ms(t,n)}}}function yR(i){let t,e,n,s=i[2]&&Um(i),r=i[3]&&i[3].enabled&&Om(i);return{c(){t=xi("header"),s&&s.c(),e=oc(),r&&r.c(),le(t,"class","shepherd-header")},m(o,a){ti(o,t,a),s&&s.m(t,null),xo(t,e),r&&r.m(t,null),n=!0},p(o,[a]){o[2]?s?(s.p(o,a),a&4&&Qt(s,1)):(s=Um(o),s.c(),Qt(s,1),s.m(t,e)):s&&(Qs(),be(s,1,1,()=>{s=null}),tr()),o[3]&&o[3].enabled?r?(r.p(o,a),a&8&&Qt(r,1)):(r=Om(o),r.c(),Qt(r,1),r.m(t,null)):r&&(Qs(),be(r,1,1,()=>{r=null}),tr())},i(o){n||(Qt(s),Qt(r),n=!0)},o(o){be(s),be(r),n=!1},d(o){o&&Vn(t),s&&s.d(),r&&r.d()}}}function SR(i,t,e){let{labelId:n,step:s}=t,r,o;return i.$$set=a=>{"labelId"in a&&e(0,n=a.labelId),"step"in a&&e(1,s=a.step)},i.$$.update=()=>{i.$$.dirty&2&&(e(2,r=s.options.title),e(3,o=s.options.cancelIcon))},[n,s,r,o]}class MR extends qi{constructor(t){super(),Yi(this,t,SR,yR,ji,{labelId:0,step:1})}}function ER(i){let t;return{c(){t=xi("div"),le(t,"class","shepherd-text"),le(t,"id",i[1])},m(e,n){ti(e,t,n),i[3](t)},p(e,[n]){n&2&&le(t,"id",e[1])},i:In,o:In,d(e){e&&Vn(t),i[3](null)}}}function bR(i,t,e){let{descriptionId:n,element:s,step:r}=t;af(()=>{let{text:a}=r.options;gs(a)&&(a=a.call(r)),go(a)?s.appendChild(a):e(0,s.innerHTML=a,s)});function o(a){yo[a?"unshift":"push"](()=>{s=a,e(0,s)})}return i.$$set=a=>{"descriptionId"in a&&e(1,n=a.descriptionId),"element"in a&&e(0,s=a.element),"step"in a&&e(2,r=a.step)},[s,n,r,o]}class wR extends qi{constructor(t){super(),Yi(this,t,bR,ER,ji,{descriptionId:1,element:0,step:2})}}function Fm(i){let t,e;return t=new MR({props:{labelId:i[1],step:i[2]}}),{c(){pr(t.$$.fragment)},m(n,s){Ss(t,n,s),e=!0},p(n,s){const r={};s&2&&(r.labelId=n[1]),s&4&&(r.step=n[2]),t.$set(r)},i(n){e||(Qt(t.$$.fragment,n),e=!0)},o(n){be(t.$$.fragment,n),e=!1},d(n){Ms(t,n)}}}function Nm(i){let t,e;return t=new wR({props:{descriptionId:i[0],step:i[2]}}),{c(){pr(t.$$.fragment)},m(n,s){Ss(t,n,s),e=!0},p(n,s){const r={};s&1&&(r.descriptionId=n[0]),s&4&&(r.step=n[2]),t.$set(r)},i(n){e||(Qt(t.$$.fragment,n),e=!0)},o(n){be(t.$$.fragment,n),e=!1},d(n){Ms(t,n)}}}function Bm(i){let t,e;return t=new fR({props:{step:i[2]}}),{c(){pr(t.$$.fragment)},m(n,s){Ss(t,n,s),e=!0},p(n,s){const r={};s&4&&(r.step=n[2]),t.$set(r)},i(n){e||(Qt(t.$$.fragment,n),e=!0)},o(n){be(t.$$.fragment,n),e=!1},d(n){Ms(t,n)}}}function TR(i){let t,e=!qe(i[2].options.title)||i[2].options.cancelIcon&&i[2].options.cancelIcon.enabled,n,s=!qe(i[2].options.text),r,o=Array.isArray(i[2].options.buttons)&&i[2].options.buttons.length,a,l=e&&Fm(i),c=s&&Nm(i),u=o&&Bm(i);return{c(){t=xi("div"),l&&l.c(),n=oc(),c&&c.c(),r=oc(),u&&u.c(),le(t,"class","shepherd-content")},m(h,d){ti(h,t,d),l&&l.m(t,null),xo(t,n),c&&c.m(t,null),xo(t,r),u&&u.m(t,null),a=!0},p(h,[d]){d&4&&(e=!qe(h[2].options.title)||h[2].options.cancelIcon&&h[2].options.cancelIcon.enabled),e?l?(l.p(h,d),d&4&&Qt(l,1)):(l=Fm(h),l.c(),Qt(l,1),l.m(t,n)):l&&(Qs(),be(l,1,1,()=>{l=null}),tr()),d&4&&(s=!qe(h[2].options.text)),s?c?(c.p(h,d),d&4&&Qt(c,1)):(c=Nm(h),c.c(),Qt(c,1),c.m(t,r)):c&&(Qs(),be(c,1,1,()=>{c=null}),tr()),d&4&&(o=Array.isArray(h[2].options.buttons)&&h[2].options.buttons.length),o?u?(u.p(h,d),d&4&&Qt(u,1)):(u=Bm(h),u.c(),Qt(u,1),u.m(t,null)):u&&(Qs(),be(u,1,1,()=>{u=null}),tr())},i(h){a||(Qt(l),Qt(c),Qt(u),a=!0)},o(h){be(l),be(c),be(u),a=!1},d(h){h&&Vn(t),l&&l.d(),c&&c.d(),u&&u.d()}}}function AR(i,t,e){let{descriptionId:n,labelId:s,step:r}=t;return i.$$set=o=>{"descriptionId"in o&&e(0,n=o.descriptionId),"labelId"in o&&e(1,s=o.labelId),"step"in o&&e(2,r=o.step)},[n,s,r]}class CR extends qi{constructor(t){super(),Yi(this,t,AR,TR,ji,{descriptionId:0,labelId:1,step:2})}}function km(i){let t;return{c(){t=xi("div"),le(t,"class","shepherd-arrow"),le(t,"data-popper-arrow","")},m(e,n){ti(e,t,n)},d(e){e&&Vn(t)}}}function RR(i){let t,e,n,s,r,o,a,l,c=i[4].options.arrow&&i[4].options.attachTo&&i[4].options.attachTo.element&&i[4].options.attachTo.on&&km();n=new CR({props:{descriptionId:i[2],labelId:i[3],step:i[4]}});let u=[{"aria-describedby":s=qe(i[4].options.text)?null:i[2]},{"aria-labelledby":r=i[4].options.title?i[3]:null},i[1],{open:"true"}],h={};for(let d=0;d<u.length;d+=1)h=YC(h,u[d]);return{c(){t=xi("dialog"),c&&c.c(),e=oc(),pr(n.$$.fragment),Cm(t,h),Or(t,"shepherd-has-cancel-icon",i[5]),Or(t,"shepherd-has-title",i[6]),Or(t,"shepherd-element",!0)},m(d,f){ti(d,t,f),c&&c.m(t,null),xo(t,e),Ss(n,t,null),i[18](t),o=!0,a||(l=yc(t,"keydown",i[7]),a=!0)},p(d,[f]){d[4].options.arrow&&d[4].options.attachTo&&d[4].options.attachTo.element&&d[4].options.attachTo.on?c||(c=km(),c.c(),c.m(t,e)):c&&(c.d(1),c=null);const _={};f&4&&(_.descriptionId=d[2]),f&8&&(_.labelId=d[3]),f&16&&(_.step=d[4]),n.$set(_),Cm(t,h=rR(u,[(!o||f&20&&s!==(s=qe(d[4].options.text)?null:d[2]))&&{"aria-describedby":s},(!o||f&24&&r!==(r=d[4].options.title?d[3]:null))&&{"aria-labelledby":r},f&2&&d[1],{open:"true"}])),Or(t,"shepherd-has-cancel-icon",d[5]),Or(t,"shepherd-has-title",d[6]),Or(t,"shepherd-element",!0)},i(d){o||(Qt(n.$$.fragment,d),o=!0)},o(d){be(n.$$.fragment,d),o=!1},d(d){d&&Vn(t),c&&c.d(),Ms(n),i[18](null),a=!1,l()}}}const PR=9,DR=27,IR=37,LR=39;function zm(i){return i.split(" ").filter(t=>!!t.length)}function UR(i,t,e){let{attachToElement:n,attachTofocusableDialogElements:s,classPrefix:r,element:o,descriptionId:a,focusableAttachToElements:l,firstFocusableAttachToElement:c,lastFocusableAttachToElement:u,firstFocusableDialogElement:h,focusableDialogElements:d,lastFocusableDialogElement:f,labelId:_,step:g,dataStepId:m}=t,p,M,S;const v=()=>o;QC(()=>{e(1,m={[`data-${r}shepherd-step-id`]:g.id}),e(13,d=[...o.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')]),e(12,h=d[0]),e(14,f=d[d.length-1]);const x=g._getResolvedAttachToOptions();x!=null&&x.element&&(e(8,n=x.element),e(8,n.tabIndex=0,n),e(9,l=[n,...n.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')]),e(10,c=l[0]),e(11,u=l[l.length-1]),n.addEventListener("keydown",P))}),tR(()=>{var x;(x=n)==null||x.removeEventListener("keydown",P)}),af(()=>{S!==g.options.classes&&b()});function b(){T(S),S=g.options.classes,A(S)}function T(x){if(va(x)){const C=zm(x);C.length&&o.classList.remove(...C)}}function A(x){if(va(x)){const C=zm(x);C.length&&o.classList.add(...C)}}const P=x=>{const{tour:C}=g;switch(x.keyCode){case PR:if((!l||l.length===0)&&d.length===0){x.preventDefault();break}if(x.shiftKey)if(document.activeElement===h||document.activeElement.classList.contains("shepherd-element")){var F;x.preventDefault(),((F=u)!=null?F:f).focus()}else document.activeElement===c&&(x.preventDefault(),f.focus());else if(document.activeElement===f){var z;x.preventDefault(),((z=c)!=null?z:h).focus()}else document.activeElement===u&&(x.preventDefault(),h.focus());break;case DR:C.options.exitOnEsc&&(x.preventDefault(),x.stopPropagation(),g.cancel());break;case IR:C.options.keyboardNavigation&&(x.preventDefault(),x.stopPropagation(),C.back());break;case LR:C.options.keyboardNavigation&&(x.preventDefault(),x.stopPropagation(),C.next());break}};function y(x){yo[x?"unshift":"push"](()=>{o=x,e(0,o)})}return i.$$set=x=>{"attachToElement"in x&&e(8,n=x.attachToElement),"attachTofocusableDialogElements"in x&&e(15,s=x.attachTofocusableDialogElements),"classPrefix"in x&&e(16,r=x.classPrefix),"element"in x&&e(0,o=x.element),"descriptionId"in x&&e(2,a=x.descriptionId),"focusableAttachToElements"in x&&e(9,l=x.focusableAttachToElements),"firstFocusableAttachToElement"in x&&e(10,c=x.firstFocusableAttachToElement),"lastFocusableAttachToElement"in x&&e(11,u=x.lastFocusableAttachToElement),"firstFocusableDialogElement"in x&&e(12,h=x.firstFocusableDialogElement),"focusableDialogElements"in x&&e(13,d=x.focusableDialogElements),"lastFocusableDialogElement"in x&&e(14,f=x.lastFocusableDialogElement),"labelId"in x&&e(3,_=x.labelId),"step"in x&&e(4,g=x.step),"dataStepId"in x&&e(1,m=x.dataStepId)},i.$$.update=()=>{i.$$.dirty&16&&(e(5,p=g.options&&g.options.cancelIcon&&g.options.cancelIcon.enabled),e(6,M=g.options&&g.options.title))},[o,m,a,_,g,p,M,P,n,l,c,u,h,d,f,s,r,v,y]}class OR extends qi{constructor(t){super(),Yi(this,t,UR,RR,ji,{attachToElement:8,attachTofocusableDialogElements:15,classPrefix:16,element:0,descriptionId:2,focusableAttachToElements:9,firstFocusableAttachToElement:10,lastFocusableAttachToElement:11,firstFocusableDialogElement:12,focusableDialogElements:13,lastFocusableDialogElement:14,labelId:3,step:4,dataStepId:1,getElement:17})}get getElement(){return this.$$.ctx[17]}}class rd extends jd{constructor(t,e={}){return super(),this._resolvedAttachTo=void 0,this._resolvedExtraHighlightElements=void 0,this.classPrefix=void 0,this.el=void 0,this.target=void 0,this.tour=void 0,this.tour=t,this.classPrefix=this.tour.options?p0(this.tour.options.classPrefix):"",this.styles=t.styles,this._resolvedAttachTo=null,Kd(this),this._setOptions(e),this}cancel(){this.tour.cancel(),this.trigger("cancel")}complete(){this.tour.complete(),this.trigger("complete")}destroy(){HC(this),go(this.el)&&(this.el.remove(),this.el=null),this._updateStepTargetOnHide(),this.trigger("destroy")}getTour(){return this.tour}hide(){var t;(t=this.tour.modal)==null||t.hide(),this.trigger("before-hide"),this.el&&(this.el.hidden=!0),this._updateStepTargetOnHide(),this.trigger("hide")}_resolveExtraHiglightElements(){return this._resolvedExtraHighlightElements=ZA(this),this._resolvedExtraHighlightElements}_resolveAttachToOptions(){return this._resolvedAttachTo=$A(this),this._resolvedAttachTo}_getResolvedAttachToOptions(){return this._resolvedAttachTo===null?this._resolveAttachToOptions():this._resolvedAttachTo}isOpen(){return!!(this.el&&!this.el.hidden)}show(){return gs(this.options.beforeShowPromise)?Promise.resolve(this.options.beforeShowPromise()).then(()=>this._show()):Promise.resolve(this._show())}updateStepOptions(t){Object.assign(this.options,t),this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){const t=`${this.id}-description`,e=`${this.id}-label`;return this.shepherdElementComponent=new OR({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:t,labelId:e,step:this,styles:this.styles}}),this.shepherdElementComponent.getElement()}_scrollTo(t){const{element:e}=this._getResolvedAttachToOptions();gs(this.options.scrollToHandler)?this.options.scrollToHandler(e):RA(e)&&typeof e.scrollIntoView=="function"&&e.scrollIntoView(t)}_getClassOptions(t){const e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions,n=t.classes?t.classes:"",s=e&&e.classes?e.classes:"",r=[...n.split(" "),...s.split(" ")],o=new Set(r);return Array.from(o).join(" ").trim()}_setOptions(t={}){let e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;e=qd({},e||{}),this.options=Object.assign({arrow:!0},e,t,zC(e,t));const{when:n}=this.options;this.options.classes=this._getClassOptions(t),this.destroy(),this.id=this.options.id||`step-${g0()}`,n&&Object.keys(n).forEach(s=>{this.on(s,n[s],this)})}_setupElements(){qe(this.el)||this.destroy(),this.el=this._createTooltipContent(),this.options.advanceOn&&YA(this),kC(this)}_show(){var t;this.trigger("before-show"),this._resolveAttachToOptions(),this._resolveExtraHiglightElements(),this._setupElements(),this.tour.modal||this.tour.setupModal(),(t=this.tour.modal)==null||t.setupForStep(this),this._styleTargetElementForStep(this),this.el&&(this.el.hidden=!1),this.options.scrollTo&&setTimeout(()=>{this._scrollTo(this.options.scrollTo)}),this.el&&(this.el.hidden=!1);const e=this.shepherdElementComponent.getElement(),n=this.target||document.body,s=this._resolvedExtraHighlightElements;n.classList.add(`${this.classPrefix}shepherd-enabled`),n.classList.add(`${this.classPrefix}shepherd-target`),e.classList.add("shepherd-enabled"),s?.forEach(r=>{r.classList.add(`${this.classPrefix}shepherd-enabled`),r.classList.add(`${this.classPrefix}shepherd-target`)}),this.trigger("show")}_styleTargetElementForStep(t){const e=t.target,n=t._resolvedExtraHighlightElements;if(!e)return;const s=t.options.highlightClass;s&&(e.classList.add(s),n?.forEach(r=>r.classList.add(s))),e.classList.remove("shepherd-target-click-disabled"),n?.forEach(r=>r.classList.remove("shepherd-target-click-disabled")),t.options.canClickTarget===!1&&(e.classList.add("shepherd-target-click-disabled"),n?.forEach(r=>r.classList.add("shepherd-target-click-disabled")))}_updateStepTargetOnHide(){const t=this.target||document.body,e=this._resolvedExtraHighlightElements,n=this.options.highlightClass;n&&(t.classList.remove(n),e?.forEach(s=>s.classList.remove(n))),t.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`),e?.forEach(s=>{s.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)})}}function FR(i){if(i){const{steps:t}=i;t.forEach(e=>{e.options&&e.options.canClickTarget===!1&&e.options.attachTo&&(go(e.target)&&e.target.classList.remove("shepherd-target-click-disabled"),e._resolvedExtraHighlightElements&&e._resolvedExtraHighlightElements.forEach(n=>{go(n)&&n.classList.remove("shepherd-target-click-disabled")}))})}}function NR(i){let t="";const{innerWidth:e,innerHeight:n}=window;return i.forEach(s=>{const{width:r,height:o,x:a=0,y:l=0,r:c=0}=s,{topLeft:u=0,topRight:h=0,bottomRight:d=0,bottomLeft:f=0}=typeof c=="number"?{topLeft:c,topRight:c,bottomRight:c,bottomLeft:c}:c;t+=`M${a+u},${l}      a${u},${u},0,0,0-${u},${u}      V${o+l-f}      a${f},${f},0,0,0,${f},${f}      H${r+a-d}      a${d},${d},0,0,0,${d}-${d}      V${l+h}      a${h},${h},0,0,0-${h}-${h}      Z`}),`M${e},${n}          H0          V0          H${e}          V${n}          Z          ${t}`.replace(/\s/g,"")}function BR(i){let t,e,n,s,r;return{c(){t=Am("svg"),e=Am("path"),le(e,"d",i[2]),le(t,"class",n=`${i[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(o,a){ti(o,t,a),xo(t,e),i[11](t),s||(r=yc(t,"touchmove",i[3]),s=!0)},p(o,[a]){a&4&&le(e,"d",o[2]),a&2&&n!==(n=`${o[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&le(t,"class",n)},i:In,o:In,d(o){o&&Vn(t),i[11](null),s=!1,r()}}}function P0(i){if(!i)return null;const e=i instanceof HTMLElement&&window.getComputedStyle(i).overflowY;return e!=="hidden"&&e!=="visible"&&i.scrollHeight>=i.clientHeight?i:P0(i.parentElement)}function kR(i){let t={top:0,left:0};if(!i)return t;let e=i.ownerDocument.defaultView;for(;e!==window.top;){var n;const o=(n=e)==null?void 0:n.frameElement;if(o){var s,r;const a=o.getBoundingClientRect();t.top+=a.top+((s=a.scrollTop)!=null?s:0),t.left+=a.left+((r=a.scrollLeft)!=null?r:0)}e=e.parent}return t}function zR(i,t){const e=i.getBoundingClientRect();let n=e.y||e.top,s=e.bottom||n+e.height;if(t){const o=t.getBoundingClientRect(),a=o.y||o.top,l=o.bottom||a+o.height;n=Math.max(n,a),s=Math.min(s,l)}const r=Math.max(s-n,0);return{y:n,height:r}}function HR(i,t,e){let{element:n,openingProperties:s}=t,r=!1,o,a;c();const l=()=>n;function c(){e(4,s=[{width:0,height:0,x:0,y:0,r:0}])}function u(){e(1,r=!1),p()}function h(v=0,b=0,T=0,A=0,P,y,x){if(y){const C=[y,...x||[]];e(4,s=[]);for(const F of C){if(!F||C.indexOf(F)!==C.lastIndexOf(F))continue;const{y:z,height:G}=zR(F,P),{x:L,width:U,left:N}=F.getBoundingClientRect();C.some(K=>{if(K===F)return!1;const $=K.getBoundingClientRect();return L>=$.left&&L+U<=$.right&&z>=$.top&&z+G<=$.bottom})||s.push({width:U+v*2,height:G+v*2,x:(L||N)+T-v,y:z+A-v,r:b})}}else c()}function d(v){p(),v.tour.options.useModalOverlay?(M(v),f()):u()}function f(){e(1,r=!0)}const _=v=>{v.preventDefault()},g=v=>{v.stopPropagation()};function m(){window.addEventListener("touchmove",_,{passive:!1})}function p(){o&&(cancelAnimationFrame(o),o=void 0),window.removeEventListener("touchmove",_,{passive:!1})}function M(v){const{modalOverlayOpeningPadding:b,modalOverlayOpeningRadius:T,modalOverlayOpeningXOffset:A=0,modalOverlayOpeningYOffset:P=0}=v.options,y=kR(v.target),x=P0(v.target),C=()=>{o=void 0,h(b,T,A+y.left,P+y.top,x,v.target,v._resolvedExtraHighlightElements),o=requestAnimationFrame(C)};C(),m()}function S(v){yo[v?"unshift":"push"](()=>{n=v,e(0,n)})}return i.$$set=v=>{"element"in v&&e(0,n=v.element),"openingProperties"in v&&e(4,s=v.openingProperties)},i.$$.update=()=>{i.$$.dirty&16&&e(2,a=NR(s))},[n,r,a,g,s,l,c,u,h,d,f,S]}class VR extends qi{constructor(t){super(),Yi(this,t,HR,BR,ji,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}class GR extends jd{constructor(){super(),this.activeTour=void 0,Kd(this)}}class WR extends jd{constructor(t={}){super(),this.trackedEvents=["active","cancel","complete","show"],this.classPrefix=void 0,this.currentStep=void 0,this.focusedElBeforeOpen=void 0,this.id=void 0,this.modal=void 0,this.options=void 0,this.steps=void 0,Kd(this);const e={exitOnEsc:!0,keyboardNavigation:!0};return this.options=Object.assign({},e,t),this.classPrefix=p0(this.options.classPrefix),this.steps=[],this.addSteps(this.options.steps),["active","cancel","complete","inactive","show","start"].map(s=>{(r=>{this.on(r,o=>{o=o||{},o.tour=this,Xs.trigger(r,o)})})(s)}),this._setTourID(t.id),this}addStep(t,e){let n=t;return n instanceof rd?n.tour=this:n=new rd(this,n),qe(e)?this.steps.push(n):this.steps.splice(e,0,n),n}addSteps(t){return Array.isArray(t)&&t.forEach(e=>{this.addStep(e)}),this}back(){const t=this.steps.indexOf(this.currentStep);this.show(t-1,!1)}async cancel(){if(this.options.confirmCancel){const t=this.options.confirmCancelMessage||"Are you sure you want to stop the tour?";let e;gs(this.options.confirmCancel)?e=await this.options.confirmCancel():e=window.confirm(t),e&&this._done("cancel")}else this._done("cancel")}complete(){this._done("complete")}getById(t){return this.steps.find(e=>e.id===t)}getCurrentStep(){return this.currentStep}hide(){const t=this.getCurrentStep();if(t)return t.hide()}isActive(){return Xs.activeTour===this}next(){const t=this.steps.indexOf(this.currentStep);t===this.steps.length-1?this.complete():this.show(t+1,!0)}removeStep(t){const e=this.getCurrentStep();this.steps.some((n,s)=>{if(n.id===t)return n.isOpen()&&n.hide(),n.destroy(),this.steps.splice(s,1),!0}),e&&e.id===t&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(t=0,e=!0){const n=va(t)?this.getById(t):this.steps[t];n&&(this._updateStateBeforeShow(),gs(n.options.showOn)&&!n.options.showOn()?this._skipStep(n,e):(this.currentStep=n,this.trigger("show",{step:n,previous:this.currentStep}),n.show()))}async start(){this.trigger("start"),this.focusedElBeforeOpen=document.activeElement,this.currentStep=null,this.setupModal(),this._setupActiveTour(),this.next()}_done(t){const e=this.steps.indexOf(this.currentStep);if(Array.isArray(this.steps)&&this.steps.forEach(n=>n.destroy()),FR(this),this.trigger(t,{index:e}),Xs.activeTour=null,this.trigger("inactive",{tour:this}),this.modal&&this.modal.hide(),(t==="cancel"||t==="complete")&&this.modal){const n=document.querySelector(".shepherd-modal-overlay-container");n&&(n.remove(),this.modal=null)}go(this.focusedElBeforeOpen)&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this}),Xs.activeTour=this}setupModal(){this.modal=new VR({target:this.options.modalContainer||document.body,props:{styles:this.styles}})}_skipStep(t,e){const n=this.steps.indexOf(t);if(n===this.steps.length-1)this.complete();else{const s=e?n+1:n-1;this.show(s,e)}}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide(),this.isActive()||this._setupActiveTour()}_setTourID(t){const e=this.options.tourName||"tour",n=t||g0();this.id=`${e}--${n}`}}const Xs=new GR,D0=typeof window>"u";Xs.Step=D0?qA:rd;Xs.Tour=D0?KA:WR;const I0="solarsim.tour.v1.completed";let he;function XR(){try{return localStorage.getItem(I0)==="true"}catch(i){return console.error("Could not access localStorage for tour status:",i),!0}}function Hm(){try{localStorage.setItem(I0,"true")}catch(i){console.error("Could not save tour status to localStorage:",i)}}function jR(){he=new Xs.Tour({useModalOverlay:!0,defaultStepOptions:{classes:"shepherd-theme-arrows",scrollTo:{behavior:"smooth",block:"center"}}}),he.addStep({id:"step-1-quick-access",text:"This is the new Quick Access Toolbar. Click on a planet to instantly focus on it.",attachTo:{element:"#quick-access-toolbar",on:"bottom"},buttons:[{text:"Next",action:he.next}]}),he.addStep({id:"step-2-detailed-selector",text:"For more options, click here to open the detailed selector panel.",attachTo:{element:"#open-celestial-selector-btn",on:"right"},buttons:[{text:"Back",action:he.back},{text:"Next",action:()=>{document.getElementById("open-celestial-selector-btn")?.click(),he.next()}}]}),he.addStep({id:"step-3-favorites",text:"You can search, filter by type, and now filter by your favorite bodies! Click the star to favorite an item.",attachTo:{element:"#celestial-selector-panel",on:"left"},buttons:[{text:"Back",action:()=>{document.getElementById("close-celestial-selector-btn")?.click(),he.back()}},{text:"Next",action:()=>{document.getElementById("close-celestial-selector-btn")?.click(),he.next()}}]}),he.addStep({id:"step-4-contextual-hud",text:"When you click a body in the 3D view, a small control hub will appear, giving you quick access to common actions.",attachTo:{element:"#bg",on:"top"},buttons:[{text:"Back",action:he.back},{text:"Next",action:he.next}]}),he.addStep({id:"step-5-time-controls",text:"Control the flow of time here. Play, pause, and adjust the simulation speed.",attachTo:{element:"#time-controls",on:"bottom"},buttons:[{text:"Back",action:he.back},{text:"Next",action:he.next}]}),he.addStep({id:"step-6-visuals-panel",text:"Open the Visuals panel to adjust settings like trail length and the visual scale of planets.",attachTo:{element:"#visuals-toggle-btn",on:"bottom"},buttons:[{text:"Back",action:he.back},{text:"Next",action:he.next}]}),he.addStep({id:"step-7-help",text:"Click here anytime to see keyboard shortcuts or to restart this tour.",attachTo:{element:"#help-button",on:"top"},buttons:[{text:"Back",action:he.back},{text:"Finish",action:he.complete}]}),he.on("complete",Hm),he.on("cancel",Hm)}function YR(){jR(),XR()||setTimeout(()=>he.start(),1e3);const i=document.getElementById("help-overlay");if(i){const t=document.createElement("button");t.textContent="Relaunch Tour",t.className="btn",t.style.marginTop="15px",t.addEventListener("click",()=>{document.getElementById("help-overlay-close")?.click(),he.start()});const e=i.querySelector("#help-overlay-close");e?.parentNode?.insertBefore(t,e)}}const Vm=new Cn,ml=new D;class L0 extends Lx{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new De(t,3)),this.setAttribute("uv",new De(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new _h(e,6,1);return this.setAttribute("instanceStart",new ss(n,3,0)),this.setAttribute("instanceEnd",new ss(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new _h(e,6,1);return this.setAttribute("instanceColorStart",new ss(n,3,0)),this.setAttribute("instanceColorEnd",new ss(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Sx(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Vm.setFromBufferAttribute(e),this.boundingBox.union(Vm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ml.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ml)),ml.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ml));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}ct.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ft(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};on.line={uniforms:vd.merge([ct.common,ct.fog,ct.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class lf extends Hi{constructor(t){super({type:"LineMaterial",uniforms:vd.clone(on.line.uniforms),vertexShader:on.line.vertexShader,fragmentShader:on.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Au=new Yt,Gm=new D,Wm=new D,Be=new Yt,ke=new Yt,ni=new Yt,Cu=new D,Ru=new te,He=new Bx,Xm=new D,gl=new Cn,_l=new Qn,ii=new Yt;let oi,er;function jm(i,t,e){return ii.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ii.multiplyScalar(1/ii.w),ii.x=er/e.width,ii.y=er/e.height,ii.applyMatrix4(i.projectionMatrixInverse),ii.multiplyScalar(1/ii.w),Math.abs(Math.max(ii.x,ii.y))}function qR(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,l=o;a<l;a++){He.start.fromBufferAttribute(s,a),He.end.fromBufferAttribute(r,a),He.applyMatrix4(e);const c=new D,u=new D;oi.distanceSqToSegment(He.start,He.end,u,c),u.distanceTo(c)<er*.5&&t.push({point:u,pointOnLine:c,distance:oi.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function KR(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-t.near;oi.at(1,ni),ni.w=1,ni.applyMatrix4(t.matrixWorldInverse),ni.applyMatrix4(n),ni.multiplyScalar(1/ni.w),ni.x*=r.x/2,ni.y*=r.y/2,ni.z=0,Cu.copy(ni),Ru.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,f=u;d<f;d++){if(Be.fromBufferAttribute(l,d),ke.fromBufferAttribute(c,d),Be.w=1,ke.w=1,Be.applyMatrix4(Ru),ke.applyMatrix4(Ru),Be.z>h&&ke.z>h)continue;if(Be.z>h){const S=Be.z-ke.z,v=(Be.z-h)/S;Be.lerp(ke,v)}else if(ke.z>h){const S=ke.z-Be.z,v=(ke.z-h)/S;ke.lerp(Be,v)}Be.applyMatrix4(n),ke.applyMatrix4(n),Be.multiplyScalar(1/Be.w),ke.multiplyScalar(1/ke.w),Be.x*=r.x/2,Be.y*=r.y/2,ke.x*=r.x/2,ke.y*=r.y/2,He.start.copy(Be),He.start.z=0,He.end.copy(ke),He.end.z=0;const g=He.closestPointToPointParameter(Cu,!0);He.at(g,Xm);const m=oa.lerp(Be.z,ke.z,g),p=m>=-1&&m<=1,M=Cu.distanceTo(Xm)<er*.5;if(p&&M){He.start.fromBufferAttribute(l,d),He.end.fromBufferAttribute(c,d),He.start.applyMatrix4(o),He.end.applyMatrix4(o);const S=new D,v=new D;oi.distanceSqToSegment(He.start,He.end,v,S),e.push({point:v,pointOnLine:S,distance:oi.origin.distanceTo(v),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class $R extends Pe{constructor(t=new L0,e=new lf({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)Gm.fromBufferAttribute(e,o),Wm.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Gm.distanceTo(Wm);const r=new _h(s,2,1);return t.setAttribute("instanceDistanceStart",new ss(r,1,0)),t.setAttribute("instanceDistanceEnd",new ss(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;oi=t.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;er=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),_l.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=er*.5;else{const h=Math.max(s.near,_l.distanceToPoint(oi.origin));c=jm(s,h,l.resolution)}if(_l.radius+=c,oi.intersectsSphere(_l)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),gl.copy(a.boundingBox).applyMatrix4(o);let u;if(n)u=er*.5;else{const h=Math.max(s.near,gl.distanceToPoint(oi.origin));u=jm(s,h,l.resolution)}gl.expandByScalar(u),oi.intersectsBox(gl)!==!1&&(n?qR(this,e):KR(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Au),this.material.uniforms.resolution.value.set(Au.z,Au.w))}}class U0 extends L0{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class ZR extends $R{constructor(t=new U0,e=new lf({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}class JR{constructor(t,e=new Wt(16777215)){this.maxPoints=t,this.baseColor=e,this.geometry=new U0,this.material=new lf({color:16777215,linewidth:1,vertexColors:!0,transparent:!0,opacity:.4,resolution:new Ft(window.innerWidth,window.innerHeight)}),this.line=new ZR(this.geometry,this.material),this.line.frustumCulled=!1}updateFromSampledPoints(t){if(!t||!Array.isArray(t)){console.warn("updateFromSampledPoints: Invalid sampledPositions - not an array or undefined"),this.geometry.setPositions([]);return}if(t.length<0){console.warn("updateFromSampledPoints: sampledPositions.length is negative:",t.length),this.geometry.setPositions([]);return}const e=Math.min(this.maxPoints,t.length);if(e<2){this.geometry.setPositions([]);return}if(e<=0||!isFinite(e)){console.warn("updateFromSampledPoints: Invalid numPoints:",e),this.geometry.setPositions([]);return}if(e<0){console.error(`updateFromSampledPoints: numPoints is negative (${e}), which would cause a crash. Aborting trail update.`),this.geometry.setPositions([]);return}const n=e*3;if(n<0||n>1e6){console.warn("updateFromSampledPoints: Invalid positionsArrayLength:",n),this.geometry.setPositions([]);return}const s=new Float32Array(n),r=new Float32Array(n),o=Math.ceil(e*.05);for(let a=0;a<e;a++){const l=t[a];if(!l||typeof l.x!="number"||typeof l.y!="number"||typeof l.z!="number"){console.warn(`updateFromSampledPoints: Invalid point at index ${a}:`,l),s[a*3]=0,s[a*3+1]=0,s[a*3+2]=0;continue}s[a*3]=l.x,s[a*3+1]=l.y,s[a*3+2]=l.z;let c=1;a<o&&(c=a/o),r[a*3]=this.baseColor.r*c,r[a*3+1]=this.baseColor.g*c,r[a*3+2]=this.baseColor.b*c}this.geometry.setPositions(s),this.geometry.setColors(r)}updateResolution(t,e){this.material.resolution.set(t,e)}setVisible(t){this.line.visible=t}}class QR{constructor(t,e){this.bodies=t,this.scene=e,this.trails=new Map,this.trailHistories=new Map,this.bodyMap=new Map,this.bodies.forEach(n=>this.bodyMap.set(n.id,n))}init(){this.bodies.forEach(t=>{if(t.id!=="sun"){const e=new JR(8e3,new Wt(t.color));this.trails.set(t.id,e),this.trailHistories.set(t.id,[]),this.scene.add(e.line)}})}update(t){const{trailsEnabled:e,simTime:n}=vt.getState();this.trails.forEach((s,r)=>{if(s.setVisible(e),!e)return;const o=this.bodyMap.get(r);if(!o?.group)return;const a=this.trailHistories.get(r);a.push({time:n,position:o.physicsPosition.clone()});const l=o.parentId!=="sun"&&o.parentId!==null,c=o.orbitalPeriod*(l?.5:2),u=n-c,h=a.findIndex(f=>f.time>=u);h>0&&a.splice(0,h);const d=a.filter(f=>f&&f.position&&typeof f.position.x=="number"&&typeof f.position.y=="number"&&typeof f.position.z=="number").map(f=>{try{return Xl(f.position,t)}catch(_){return console.warn("TrailManager.update: Error calculating display position:",_,f),new D(0,0,0)}});if(d.length>0&&d.some(f=>!f||typeof f.x!="number"||typeof f.y!="number"||typeof f.z!="number")){console.warn("TrailManager.update: Invalid scaled points detected, filtering them out");const f=d.filter(_=>_&&typeof _.x=="number"&&typeof _.y=="number"&&typeof _.z=="number");s.updateFromSampledPoints(f)}else s.updateFromSampledPoints(d)})}updateResolutions(t,e){this.trails.forEach(n=>n.updateResolution(t,e))}}async function tP(){eT(xT);const t=new Ax,e=[],n=[],s=new Map;let r;const o={selectedObject:null,focusTarget:null,followTarget:null,followOffset:new D,followSmoothing:.05,isUserInteracting:!1,isTweening:!1,asteroidMaterialUniforms:null,selectedGlow:null},a={active:!1,progress:0,fromPreset:vt.getState().scalePreset,toPreset:vt.getState().scalePreset},l={MAX_DPR:1.75,MIN_SCALE:.5,dynamicScale:1,frameTimes:[],evalInterval:1e3,lastEval:performance.now(),evalWindow:60,upperMs:22,lowerMs:13,step:.1},c={low:{MAX_DPR:1,dynamicScale:.75,shadowMapSize:512},medium:{MAX_DPR:1.5,dynamicScale:.9,shadowMapSize:1024},high:{MAX_DPR:2,dynamicScale:1,shadowMapSize:4096}};function u(L){if(vt.getState().setPerfPreset(L),L==="auto")l.MAX_DPR=1.75;else{const U=c[L];if(!U)return;l.MAX_DPR=U.MAX_DPR,l.dynamicScale=U.dynamicScale,Nn.shadow.mapSize.width!==U.shadowMapSize&&(Nn.shadow.mapSize.width=U.shadowMapSize,Nn.shadow.mapSize.height=U.shadowMapSize,Nn.shadow.map&&(Nn.shadow.map.dispose(),Nn.shadow.map=null))}h()}function h(){const L=Math.min(window.devicePixelRatio||1,l.MAX_DPR)*l.dynamicScale;Vs.setPixelRatio(L)}window.addEventListener("resize",()=>{de.aspect=window.innerWidth/window.innerHeight,de.updateProjectionMatrix(),Vs.setSize(window.innerWidth,window.innerHeight),h(),f.updateResolutions(window.innerWidth,window.innerHeight)}),jo.forEach(L=>{const U=new Li;let N;if(L.name==="Sun"){if(N=new Ui({emissive:16776960,emissiveIntensity:1.5,color:16776960}),L.texture){const H=t.load(L.texture);N.map=H,N.emissiveMap=H}}else N=new Ui({color:L.color||16777215}),L.texture&&(N.map=t.load(L.texture));const k=new jc,K=[{segments:64,distance:0},{segments:32,distance:20},{segments:16,distance:100}];for(const H of K){const rt=new Br(1,H.segments,H.segments),Q=new Pe(rt,N);Q.castShadow=L.name!=="Sun",Q.receiveShadow=L.name!=="Sun",k.addLevel(Q,H.distance)}const $=k;L.name==="Sun"&&(r=$,r.add(Nn));const tt=L.name==="Sun"?16766720:iT(L.color),ut=new _d({color:tt,transparent:!0,opacity:.7,side:en}),at=new Pe(new Br(1.2,32,32),ut);at.visible=!1,$.add(at),$.userData={id:L.id,name:L.name,type:L.parentId==="sun"||L.parentId===null?"planet":"moon",data:L,glowMesh:at},U.add($);const ft={...L,group:U,mesh:$,physicsPosition:new D};e.push(ft),n.push($),s.set(L.id,{data:L,group:U,mesh:$,physicsPosition:ft.physicsPosition}),hT(L,U,t)}),e.forEach(L=>{if(L.parentId&&L.parentId!=="sun"&&L.parentId!==null){const U=s.get(L.parentId);U&&U.group.add(L.group)}else Ci.add(L.group)});const d=new q1(e);d.init(Ci,s);const f=new QR(e,Ci);f.init();const _=new Worker(new URL("/solarsystemsim25/assets/physics.worker-Bq4Eq0Fs.js",import.meta.url),{type:"module"}),g=e.map(L=>({name:L.name,semiMajorAxis:L.semiMajorAxis,eccentricity:L.eccentricity,orbitalPeriod:L.orbitalPeriod}));_.postMessage({command:"init",payload:{bodies:g}}),_.onmessage=L=>{if(L.data.type==="update"){const U=new Float32Array(L.data.positions);e.forEach((N,k)=>{const K=s.get(N.id);K&&K.physicsPosition.set(U[k*3],U[k*3+1],U[k*3+2])})}};let m=vt.getState().scalePreset;vt.subscribe(L=>{L.scalePreset!==m&&(a.fromPreset=m,a.toPreset=L.scalePreset,a.progress=0,a.active=!0,T_.to(a,{progress:1,duration:.2,ease:"power2.out",onComplete:()=>{a.active=!1}}),m=L.scalePreset)});function p(){const L=[];for(let K=0;K<1e4;K++){const $=(Math.random()-.5)*4e3,tt=(Math.random()-.5)*4e3,ut=(Math.random()-.5)*4e3;L.push($,tt,ut)}const U=new We;U.setAttribute("position",new De(L,3));const N=new yd({color:16777215,size:.1}),k=new gg(U,N);Ci.add(k)}function M(){const U=new Br(.05,6,6),N=new Ui({color:8947848,roughness:.8}),k={u_time:{value:0}};N.onBeforeCompile=H=>{H.uniforms.u_time=k.u_time,H.vertexShader=`
                uniform float u_time;
                attribute vec4 instanceParams;
                attribute float instanceYOffset;
            `+H.vertexShader,H.vertexShader=H.vertexShader.replace("#include <begin_vertex>",`
                #include <begin_vertex>
                float angle = u_time * instanceParams.y + instanceParams.z;
                transformed.x += cos(angle) * instanceParams.x;
                transformed.z += sin(angle) * instanceParams.x;
                transformed.y += instanceYOffset;
                transformed *= instanceParams.w;
                `)};const K=new Hf(U,N,5e3);K.instanceMatrix.setUsage(bc);const $=150,tt=2.2*$,ut=3.2*$,at=new Float32Array(5e3*4),ft=new Float32Array(5e3);for(let H=0;H<5e3;H++){const rt=oa.randFloat(tt,ut),Q=(Math.random()*.2+.05)*(Math.random()>.5?1:-1),St=Math.random()*Math.PI*2,Et=Math.random()*.5+.5,Ct=oa.randFloat(-.5,.5);at[H*4+0]=rt,at[H*4+1]=Q,at[H*4+2]=St,at[H*4+3]=Et,ft[H]=Ct}U.setAttribute("instanceParams",new Ul(at,4).setUsage(bc)),U.setAttribute("instanceYOffset",new Ul(ft,1).setUsage(bc)),K.instanceMatrix.needsUpdate=!1,Ci.add(K),o.asteroidMaterialUniforms=k}function S(){const N=new Br(.5,6,6),k=new Ui({color:4482696,transparent:!0,opacity:.5}),K=new Hf(N,k,1e3),$=new Fe;for(let tt=0;tt<1e3;tt++){const ut=Math.random(),at=Math.random(),ft=2*Math.PI*ut,H=Math.acos(2*at-1),rt=1500*Math.sin(H)*Math.cos(ft),Q=1500*Math.sin(H)*Math.sin(ft),St=1500*Math.cos(H);$.position.set(rt,Q,St),$.updateMatrix(),K.setMatrixAt(tt,$.matrix)}K.instanceMatrix.needsUpdate=!0,Ci.add(K)}p(),M(),S();function v(L){const N=new Cn().setFromObject(L).getBoundingSphere(new Qn),k=Math.max(N.radius*1.2,1),K=Math.max(N.radius*100,1e6);Ye.minDistance=k,Ye.maxDistance=K,de.near=Math.max(N.radius*.001,.01),de.far=Math.max(N.radius*2e3,1e7),de.updateProjectionMatrix()}function b(){window._activeCameraTween&&(window._activeCameraTween.stop?.(),window._activeCameraTween=null)}function T(L,U={}){const N=window.matchMedia("(prefers-reduced-motion: reduce)").matches,k={duration:700,fitOffset:1.2},{duration:K,fitOffset:$}={...k,...U},tt=N?Math.min(K,150):K;o.isTweening=!0;const ut=new Cn().setFromObject(L),at=ut.getCenter(new D),ft=ut.getSize(new D).length()||1,H=de.fov*(Math.PI/180),rt=Math.abs(ft/Math.sin(H/2))*$,Q=new D().subVectors(de.position,Ye.target).normalize(),St=at.clone().add(Q.multiplyScalar(rt));b();const Et=new Nl(Ye.target).to(at,tt).easing(Bi.Quintic.InOut).onUpdate(()=>Ye.update()).onComplete(()=>o.isTweening=!1).start(),Ct=new Nl(de.position).to(St,tt).easing(Bi.Quintic.InOut).onUpdate(()=>de.lookAt(Ye.target)).start();window._activeCameraTween={stop:()=>{Et.stop(),Ct.stop()}}}function A(L){const U=n.find(k=>k.userData.id===L);if(!U)return;o.selectedGlow&&(o.selectedGlow.visible=!1);const{glowMesh:N}=U.userData;N?(N.visible=!0,o.selectedGlow=N):o.selectedGlow=null,vt.getState().setSelectedBodyId(L),o.focusTarget=U,T(U),v(U)}U1(jo,A);function P(){vt.getState().setSimTime(0),r&&(o.focusTarget=r),vt.getState().setSelectedBodyId("Sun"),de.position.set(0,150,400),Ye.target.set(0,0,0),vt.getState().setPaused(!1),A("Sun"),kh.classList.add("hidden")}if(!r)throw new Error("Sun object was not initialized, cannot set up interactions.");const y=e.map(L=>L.orbit).filter(L=>L);V1(de,n,r,o,A,Ye,P,y),nA(o,[],A,de,Ye),Nh.addEventListener("change",()=>{const L=Nh.checked;Vs.shadowMap.enabled=L,Ci.traverse(U=>{U.material&&(U.material.needsUpdate=!0)})}),$p.addEventListener("change",L=>{u(L.target.value)}),u($p.value);let x=!1;document.addEventListener("visibilitychange",()=>{document.hidden?vt.getState().isPaused||(x=!0,vt.getState().setPaused(!0)):x&&(vt.getState().setPaused(!1),x=!1)}),window.addEventListener("blur",()=>{vt.getState().isPaused||(x=!0,vt.getState().setPaused(!0))}),window.addEventListener("focus",()=>{x&&(vt.getState().setPaused(!1),x=!1)});function C(L,U,N,k="",K=null){if(N==null)return;const $=`stat-${U.toLowerCase().replace(/[^a-z0-9]/g,"-")}`,tt=document.createElement("div");tt.setAttribute("data-e2e",$);const ut=document.createElement("strong");ut.textContent=`${U}:`;const at=document.createElement("span");if(at.textContent=`${N} ${k}`,at.dataset.testid="stat-value",K){const ft=document.createElement("span");ft.className="tooltip",ft.textContent="(?)";const H=document.createElement("span");H.className="tooltip-text",H.textContent=K,ft.appendChild(H),at.appendChild(ft)}tt.appendChild(ut),tt.appendChild(at),L.appendChild(tt)}vt.subscribe(L=>{const U=e.find(N=>N.id===L.selectedBodyId);if(U){o.focusTarget=U.mesh,o.selectedObject=U.mesh;const{data:N,type:k}=U.mesh.userData;kh.classList.remove("hidden"),ET.textContent=N.name,Yp.src=N.edu?.image||N.texture||"",Yp.alt=`${N.name} thumbnail`,gT.textContent=N.name;let K;U.mesh instanceof jc?K=U.mesh.levels[0].object.material:K=U.mesh.material;const $=`#${K.color.getHexString()}`;G1($),jp.src=N.edu?.image||"",jp.alt=`Image of ${N.name}`,_T.href=N.edu?.readMoreUrl||"#",vT.textContent=N.edu?.shortDescription||"",Uo.innerHTML="",Oo.innerHTML="",C(Uo,"Radius",N.radius.toLocaleString(),"km"),C(Uo,"Mass",N.mass,"x 10^24 kg"),C(Uo,"Density",N.density,"kg/m³"),C(Uo,"Gravity",N.surfaceGravity,"m/s²");const tt=k==="moon"?N.semiMajorAxisKm||0:N.semiMajorAxis*Gs,ut=vt.getState().distanceUnit;C(Oo,"Orbital Period",N.orbitalPeriod,"days"),C(Oo,"Semi-Major Axis",Xp(tt,ut),"","The average distance from its parent body."),C(Oo,"Eccentricity",N.eccentricity.toFixed(4)),C(Oo,"Inclination",N.inclination,"°");const at=document.getElementById("info-exact-mode"),ft=document.getElementById("exact-mode-toggle"),H=document.getElementById("exact-mode-content");if(N.orbitalElements){at.classList.remove("hidden"),H.innerHTML="";const rt={"Semi-Major Axis":`${(N.orbitalElements.aKm/Gs).toFixed(4)} AU`,Eccentricity:N.orbitalElements.e.toFixed(6),Inclination:`${N.orbitalElements.iDeg.toFixed(4)}°`,"Lon. of Asc. Node (Ω)":`${N.orbitalElements.lanDeg.toFixed(4)}°`,"Arg. of Periapsis (ω)":`${N.orbitalElements.argPeriDeg.toFixed(4)}°`,"Mean Anomaly at Epoch":`${N.orbitalElements.meanAnomalyDeg.toFixed(4)}°`,Epoch:N.orbitalElements.epochISO.split("T")[0]};for(const[Q,St]of Object.entries(rt)){const Et=document.createElement("strong");Et.textContent=`${Q}:`;const Ct=document.createElement("span");Ct.textContent=St,H.appendChild(Et),H.appendChild(Ct)}ft.onclick=()=>H.classList.toggle("hidden")}else at.classList.add("hidden");fo.classList.remove("hidden"),Bh.classList.remove("hidden"),window.__E2E__&&(window.__E2E__.lastSelected=U.id,window.dispatchEvent(new CustomEvent("e2e:body-rendered",{detail:{id:U.id}})))}});const F=new D,z=L=>{requestAnimationFrame(z);const U=L||performance.now(),N=U-(z._lastTime||U);z._lastTime=U;const k=l.frameTimes;if(k.push(N),k.length>l.evalWindow&&k.shift(),U-l.lastEval>=l.evalInterval&&k.length>3){l.lastEval=U;const at=k.reduce((ft,H)=>ft+H,0)/k.length;at>l.upperMs&&l.dynamicScale>l.MIN_SCALE?(l.dynamicScale=Math.max(l.MIN_SCALE,+(l.dynamicScale-l.step).toFixed(2)),h()):at<l.lowerMs&&l.dynamicScale<1&&(l.dynamicScale=Math.min(1,+(l.dynamicScale+l.step).toFixed(2)),h())}const{timeScale:K,isPaused:$,simTime:tt}=vt.getState(),ut=$?tt:tt+N/1e3*K;if($||vt.getState().setSimTime(ut),_.postMessage({command:"update",payload:{simTimeInDays:ut}}),o.asteroidMaterialUniforms&&(o.asteroidMaterialUniforms.u_time.value=ut),e.forEach(at=>{const ft=Xl(at.physicsPosition,a);at.group.position.copy(ft);const H=mT(at.radius,a);at.mesh.scale.set(H,H,H)}),o.focusTarget&&(o.focusTarget===r?F.set(0,0,0):o.focusTarget.getWorldPosition(F),o.isTweening||Ye.target.lerp(F,.05)),o.followTarget){const at=new D;o.followTarget.getWorldPosition(at);const ft=at.clone().add(o.followOffset);de.position.lerp(ft,o.followSmoothing),Ye.target.lerp(at,o.followSmoothing),jl.setAttribute("aria-pressed","true")}else jl.setAttribute("aria-pressed","false");if(vt.getState().selectedBodyId){const at=e.find(ft=>ft.id===vt.getState().selectedBodyId);if(at&&at.name!=="Sun"){const ft=s.get(at.parentId),H=ft?ft.physicsPosition:new D(0,0,0),rt=at.physicsPosition.distanceTo(H),Q=rt*Gs,St=rt*Wp,Ct=(at.parentId==="sun"?at.semiMajorAxis:(at.semiMajorAxisKm||0)/Gs)*Wp;let fe=0;if(Ct>0){const Rt=66743e-15*(ft?.data.mass||jo[0].mass)*1e24;fe=Y1({a_m:Ct,r_m:St,mu:Rt})}const Xt=vt.getState().distanceUnit;qp.textContent=`Dist: ${Xp(Q,Xt)} • Speed: ${nT(fe)}`}else at&&(qp.textContent="At the center of the solar system")}if(d.update(a),d.updateLODs(de,800),f.update(a),e.forEach(at=>{at.mesh instanceof jc&&at.mesh.update(de)}),o.selectedGlow){const at=L*.001*(2*Math.PI)/1.2,ft=1.3+Math.sin(at)*.1,H=.7+Math.sin(at)*.2;o.selectedGlow.scale.set(ft,ft,ft),o.selectedGlow.material.opacity=H}bb(L),Ye.update(),Vs.render(Ci,de)};z(0),eA(),fA(),gA(),EA(),CA(),z1(),YR();const G={store:vt,renderer:{trails:f}};window.__e2eNotifyReady?window.__e2eNotifyReady(G):window.__APP_READY=!0}tP();
