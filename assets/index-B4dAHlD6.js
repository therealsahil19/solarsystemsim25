(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zc="179",ts={ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kp=0,Vu=1,$p=2,rf=1,of=2,Yn=3,wi=0,ze=1,Xe=2,Ei=0,Gs=1,Ll=2,Gu=3,Wu=4,Zp=5,Vi=100,Jp=101,Qp=102,tm=103,em=104,nm=200,im=201,sm=202,rm=203,Ul=204,Ol=205,om=206,am=207,lm=208,cm=209,um=210,hm=211,dm=212,fm=213,pm=214,Fl=0,Nl=1,Bl=2,Zs=3,kl=4,zl=5,Hl=6,Vl=7,af=0,mm=1,gm=2,bi=0,_m=1,vm=2,xm=3,lf=4,ym=5,Sm=6,Mm=7,cf=300,Js=301,Qs=302,Gl=303,Wl=304,Ma=306,Cr=1e3,Xi=1001,Xl=1002,en=1003,Em=1004,to=1005,Rn=1006,Oa=1007,ji=1008,On=1009,uf=1010,hf=1011,Pr=1012,Jc=1013,os=1014,Cn=1015,jr=1016,Qc=1017,tu=1018,Dr=1020,df=35902,ff=1021,pf=1022,vn=1023,Ir=1026,Lr=1027,eu=1028,nu=1029,mf=1030,iu=1031,su=1033,Vo=33776,Go=33777,Wo=33778,Xo=33779,jl=35840,Yl=35841,ql=35842,Kl=35843,$l=36196,Zl=37492,Jl=37496,Ql=37808,tc=37809,ec=37810,nc=37811,ic=37812,sc=37813,rc=37814,oc=37815,ac=37816,lc=37817,cc=37818,uc=37819,hc=37820,dc=37821,jo=36492,fc=36494,pc=36495,gf=36283,mc=36284,gc=36285,_c=36286,bm=3200,wm=3201,_f=0,Tm=1,_i="",Je="srgb",tr="srgb-linear",ta="linear",Qt="srgb",vs=7680,Xu=519,Am=512,Rm=513,Cm=514,vf=515,Pm=516,Dm=517,Im=518,Lm=519,vc=35044,Fa=35048,ju="300 es",Pn=2e3,ea=2001;class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yu=1234567;const wr=Math.PI/180,Ur=180/Math.PI;function ti(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Ut(n,t,e){return Math.max(t,Math.min(e,n))}function ru(n,t){return(n%t+t)%t}function Um(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Om(n,t,e){return n!==t?(e-n)/(t-n):0}function Tr(n,t,e){return(1-e)*n+e*t}function Fm(n,t,e,i){return Tr(n,t,1-Math.exp(-e*i))}function Nm(n,t=1){return t-Math.abs(ru(n,t*2)-t)}function Bm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function km(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function zm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Hm(n,t){return n+Math.random()*(t-n)}function Vm(n){return n*(.5-Math.random())}function Gm(n){n!==void 0&&(Yu=n);let t=Yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wm(n){return n*wr}function Xm(n){return n*Ur}function jm(n){return(n&n-1)===0&&n!==0}function Ym(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Km(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*f,a*c);break;case"YXY":n.set(l*f,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Or={DEG2RAD:wr,RAD2DEG:Ur,generateUUID:ti,clamp:Ut,euclideanModulo:ru,mapLinear:Um,inverseLerp:Om,lerp:Tr,damp:Fm,pingpong:Nm,smoothstep:Bm,smootherstep:km,randInt:zm,randFloat:Hm,randFloatSpread:Vm,seededRandom:Gm,degToRad:Wm,radToDeg:Xm,isPowerOfTwo:jm,ceilPowerOfTwo:Ym,floorPowerOfTwo:qm,setQuaternionFromProperEuler:Km,normalize:Kt,denormalize:mn};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ut(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ut(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class as{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==m){let g=1-a;const p=l*d+c*f+u*m+h*_,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),R=Math.atan2(T,p*b);g=Math.sin(g*R)/T,a=Math.sin(a*R)/T}const v=a*b;if(l=l*g+d*v,c=c*g+f*v,u=u*g+m*v,h=h*g+_*v,g===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+u*h+l*f-c*d,t[e+1]=l*m+u*d+c*h-a*f,t[e+2]=c*m+u*f+a*d-l*h,t[e+3]=u*m-a*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ut(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ut(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ut(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new C,qu=new as;class Bt{constructor(t,e,i,s,r,o,a,l,c){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],m=i[8],_=s[0],g=s[3],p=s[6],b=s[1],M=s[4],v=s[7],T=s[2],R=s[5],P=s[8];return r[0]=o*_+a*b+l*T,r[3]=o*g+a*M+l*R,r[6]=o*p+a*v+l*P,r[1]=c*_+u*b+h*T,r[4]=c*g+u*M+h*R,r[7]=c*p+u*v+h*P,r[2]=d*_+f*b+m*T,r[5]=d*g+f*M+m*R,r[8]=d*p+f*v+m*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,m=e*h+i*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Bt;function xf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Fr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $m(){const n=Fr("canvas");return n.style.display="block",n}const Ku={};function Ws(n){n in Ku||(Ku[n]=!0,console.warn(n))}function Zm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const $u=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jm(){const n={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qt&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qt&&(s.r=Xs(s.r),s.g=Xs(s.g),s.b=Xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?ta:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[tr]:{primaries:t,whitePoint:i,transfer:ta,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:i,transfer:Qt,toXYZ:$u,fromXYZ:Zu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),n}const jt=Jm();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xs;class Qm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xs===void 0&&(xs=Fr("canvas")),xs.width=t.width,xs.height=t.height;const s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=xs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ei(e[i]/255)*255):e[i]=ei(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tg=0;class ou{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ka(s[o].image)):r.push(ka(s[o]))}else r=ka(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ka(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eg=0;const za=new C;class De extends fs{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,i=Xi,s=Xi,r=Rn,o=ji,a=vn,l=On,c=De.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=ti(),this.name="",this.source=new ou(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(za).x}get height(){return this.source.getSize(za).y}get depth(){return this.source.getSize(za).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cr:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cr:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=cf;De.DEFAULT_ANISOTROPY=1;class Wt{constructor(t=0,e=0,i=0,s=1){Wt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(f+1)/2,T=(p+1)/2,R=(u+d)/4,P=(h+_)/4,L=(m+g)/4;return M>v&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=P/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=R/s,r=L/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=P/r,s=L/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this.w=Ut(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this.w=Ut(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ut(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ng extends fs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Wt(0,0,t,e),this.scissorTest=!1,this.viewport=new Wt(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new De(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ou(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends ng{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class yf extends De{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ig extends De{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),eo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eo.copy(i.boundingBox)),eo.applyMatrix4(t.matrixWorld),this.union(eo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pr),no.subVectors(this.max,pr),ys.subVectors(t.a,pr),Ss.subVectors(t.b,pr),Ms.subVectors(t.c,pr),hi.subVectors(Ss,ys),di.subVectors(Ms,Ss),Ui.subVectors(ys,Ms);let e=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Ui.z,Ui.y,hi.z,0,-hi.x,di.z,0,-di.x,Ui.z,0,-Ui.x,-hi.y,hi.x,0,-di.y,di.x,0,-Ui.y,Ui.x,0];return!Ha(e,ys,Ss,Ms,no)||(e=[1,0,0,0,1,0,0,0,1],!Ha(e,ys,Ss,Ms,no))?!1:(io.crossVectors(hi,di),e=[io.x,io.y,io.z],Ha(e,ys,Ss,Ms,no))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new C,new C,new C,new C,new C,new C,new C,new C],dn=new C,eo=new sn,ys=new C,Ss=new C,Ms=new C,hi=new C,di=new C,Ui=new C,pr=new C,no=new C,io=new C,Oi=new C;function Ha(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Oi.fromArray(n,r);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=t.dot(Oi),c=e.dot(Oi),u=i.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sg=new sn,mr=new C,Va=new C;class Mn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):sg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mr.subVectors(t,this.center);const e=mr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(mr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mr.copy(t.center).add(Va)),this.expandByPoint(mr.copy(t.center).sub(Va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Gn=new C,Ga=new C,so=new C,fi=new C,Wa=new C,ro=new C,Xa=new C;class Yr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ga.copy(t).add(e).multiplyScalar(.5),so.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(Ga);const r=t.distanceTo(e)*.5,o=-this.direction.dot(so),a=fi.dot(this.direction),l=-fi.dot(so),c=fi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,m;if(u>0)if(h=o*l-a,d=o*a-l,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ga).addScaledVector(so,d),f}intersectSphere(t,e){Gn.subVectors(t.center,this.origin);const i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,i,s,r){Wa.subVectors(e,t),ro.subVectors(i,t),Xa.crossVectors(Wa,ro);let o=this.direction.dot(Xa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,t);const l=a*this.direction.dot(ro.crossVectors(fi,ro));if(l<0)return null;const c=a*this.direction.dot(Wa.cross(fi));if(c<0||l+c>o)return null;const u=-a*fi.dot(Xa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,i,s,r,o,a,l,c,u,h,d,f,m,_,g){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,d,f,m,_,g)}set(t,e,i,s,r,o,a,l,c,u,h,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),o=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,m=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,f=o*h,m=a*u,_=a*h;e[0]=l*u,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=m*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+m,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rg,t,og)}lookAt(t,e,i){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),pi.crossVectors(i,Ke),pi.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),pi.crossVectors(i,Ke)),pi.normalize(),oo.crossVectors(Ke,pi),s[0]=pi.x,s[4]=oo.x,s[8]=Ke.x,s[1]=pi.y,s[5]=oo.y,s[9]=Ke.y,s[2]=pi.z,s[6]=oo.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],m=i[2],_=i[6],g=i[10],p=i[14],b=i[3],M=i[7],v=i[11],T=i[15],R=s[0],P=s[4],L=s[8],E=s[12],y=s[1],A=s[5],N=s[9],z=s[13],B=s[2],Y=s[6],G=s[10],K=s[14],V=s[3],et=s[7],it=s[11],dt=s[15];return r[0]=o*R+a*y+l*B+c*V,r[4]=o*P+a*A+l*Y+c*et,r[8]=o*L+a*N+l*G+c*it,r[12]=o*E+a*z+l*K+c*dt,r[1]=u*R+h*y+d*B+f*V,r[5]=u*P+h*A+d*Y+f*et,r[9]=u*L+h*N+d*G+f*it,r[13]=u*E+h*z+d*K+f*dt,r[2]=m*R+_*y+g*B+p*V,r[6]=m*P+_*A+g*Y+p*et,r[10]=m*L+_*N+g*G+p*it,r[14]=m*E+_*z+g*K+p*dt,r[3]=b*R+M*y+v*B+T*V,r[7]=b*P+M*A+v*Y+T*et,r[11]=b*L+M*N+v*G+T*it,r[15]=b*E+M*z+v*K+T*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+g*(+e*c*h-e*a*f-r*o*h+i*o*f+r*a*u-i*c*u)+p*(-s*a*u-e*l*h+e*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],b=h*g*c-_*d*c+_*l*f-a*g*f-h*l*p+a*d*p,M=m*d*c-u*g*c-m*l*f+o*g*f+u*l*p-o*d*p,v=u*_*c-m*h*c+m*a*f-o*_*f-u*a*p+o*h*p,T=m*h*l-u*_*l-m*a*d+o*_*d+u*a*g-o*h*g,R=e*b+i*M+s*v+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=b*P,t[1]=(_*d*r-h*g*r-_*s*f+i*g*f+h*s*p-i*d*p)*P,t[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*p+i*l*p)*P,t[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*P,t[4]=M*P,t[5]=(u*g*r-m*d*r+m*s*f-e*g*f-u*s*p+e*d*p)*P,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*P,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*f+e*l*f)*P,t[8]=v*P,t[9]=(m*h*r-u*_*r-m*i*f+e*_*f+u*i*p-e*h*p)*P,t[10]=(o*_*r-m*a*r+m*i*c-e*_*c-o*i*p+e*a*p)*P,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*f-e*a*f)*P,t[12]=T*P,t[13]=(u*_*s-m*h*s+m*i*d-e*_*d-u*i*g+e*h*g)*P,t[14]=(m*a*s-o*_*s-m*i*l+e*_*l+o*i*g-e*a*g)*P,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,m=r*h,_=o*u,g=o*h,p=a*h,b=l*c,M=l*u,v=l*h,T=i.x,R=i.y,P=i.z;return s[0]=(1-(_+p))*T,s[1]=(f+v)*T,s[2]=(m-M)*T,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(g+b)*R,s[7]=0,s[8]=(m+M)*P,s[9]=(g-b)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Es.set(s[0],s[1],s[2]).length();const o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const c=1/r,u=1/o,h=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,e.setFromRotationMatrix(fn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Pn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===Pn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ea)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Pn,l=!1){const c=this.elements,u=2/(e-t),h=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s);let m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===Pn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===ea)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Es=new C,fn=new Zt,rg=new C(0,0,0),og=new C(1,1,1),pi=new C,oo=new C,Ke=new C,Ju=new Zt,Qu=new as;class Fn{constructor(t=0,e=0,i=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ju,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class au{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ag=0;const th=new C,bs=new as,Wn=new Zt,ao=new C,gr=new C,lg=new C,cg=new as,eh=new C(1,0,0),nh=new C(0,1,0),ih=new C(0,0,1),sh={type:"added"},ug={type:"removed"},ws={type:"childadded",child:null},ja={type:"childremoved",child:null};class Te extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new C,e=new Fn,i=new as,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Bt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ao.copy(t):ao.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(gr,ao,this.up):Wn.lookAt(ao,gr,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(Wn),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sh),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ug),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sh),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,t,lg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,cg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Te.DEFAULT_UP=new C(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new C,Xn=new C,Ya=new C,jn=new C,Ts=new C,As=new C,rh=new C,qa=new C,Ka=new C,$a=new C,Za=new Wt,Ja=new Wt,Qa=new Wt;class gn{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),Xn.subVectors(i,e),Ya.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Xn),l=pn.dot(Ya),c=Xn.dot(Xn),u=Xn.dot(Ya),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,m=(o*u-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Za.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),Za.fromBufferAttribute(t,e),Ja.fromBufferAttribute(t,i),Qa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Za,r.x),o.addScaledVector(Ja,r.y),o.addScaledVector(Qa,r.z),o}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),Xn.subVectors(t,e),pn.cross(Xn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),pn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ts.subVectors(s,i),As.subVectors(r,i),qa.subVectors(t,i);const l=Ts.dot(qa),c=As.dot(qa);if(l<=0&&c<=0)return e.copy(i);Ka.subVectors(t,s);const u=Ts.dot(Ka),h=As.dot(Ka);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ts,o);$a.subVectors(t,r);const f=Ts.dot($a),m=As.dot($a);if(m>=0&&f<=m)return e.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(As,a);const g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return rh.subVectors(r,s),a=(h-u)/(h-u+(f-m)),e.copy(s).addScaledVector(rh,a);const p=1/(g+_+d);return o=_*p,a=d*p,e.copy(i).addScaledVector(Ts,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},lo={h:0,s:0,l:0};function tl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Vt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=ru(t,1),e=Ut(e,0,1),i=Ut(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=tl(o,r,t+1/3),this.g=tl(o,r,t),this.b=tl(o,r,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const i=Sf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return jt.workingToColorSpace(Ue.copy(this),t),Math.round(Ut(Ue.r*255,0,255))*65536+Math.round(Ut(Ue.g*255,0,255))*256+Math.round(Ut(Ue.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(Ue.copy(this),e);const i=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Je){jt.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,i=Ue.g,s=Ue.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(lo);const i=Tr(mi.h,lo.h,e),s=Tr(mi.s,lo.s,e),r=Tr(mi.l,lo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Vt;Vt.NAMES=Sf;let hg=0;class ps extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Gs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Ol,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ul&&(i.blendSrc=this.blendSrc),this.blendDst!==Ol&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class lu extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new C,co=new Lt;let dg=0;class un{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=vc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Kt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vc&&(t.usage=this.usage),t}}class Mf extends un{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ef extends un{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Se extends un{constructor(t,e,i){super(new Float32Array(t),e,i)}}let fg=0;const cn=new Zt,el=new Te,Rs=new C,$e=new sn,_r=new sn,we=new C;class Ie extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xf(t)?Ef:Mf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,i){return cn.makeTranslation(t,e,i),this.applyMatrix4(cn),this}scale(t,e,i){return cn.makeScale(t,e,i),this.applyMatrix4(cn),this}lookAt(t){return el.lookAt(t),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Se(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];_r.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors($e.min,_r.min),$e.expandByPoint(we),we.addVectors($e.max,_r.max),$e.expandByPoint(we)):($e.expandByPoint(_r.min),$e.expandByPoint(_r.max))}$e.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)we.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(t,c),we.add(Rs)),s=Math.max(s,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new C,l[L]=new C;const c=new C,u=new C,h=new C,d=new Lt,f=new Lt,m=new Lt,_=new C,g=new C;function p(L,E,y){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const A=1/(f.x*m.y-m.x*f.y);isFinite(A)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(A),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(A),a[L].add(_),a[E].add(_),a[y].add(_),l[L].add(g),l[E].add(g),l[y].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,E=b.length;L<E;++L){const y=b[L],A=y.start,N=y.count;for(let z=A,B=A+N;z<B;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new C,v=new C,T=new C,R=new C;function P(L){T.fromBufferAttribute(s,L),R.copy(T);const E=a[L];M.copy(E),M.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(R,E);const A=v.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,A)}for(let L=0,E=b.length;L<E;++L){const y=b[L],A=y.start,N=y.count;for(let z=A,B=A+N;z<B;z+=3)P(t.getX(z+0)),P(t.getX(z+1)),P(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,u=new C,h=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new un(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oh=new Zt,Fi=new Yr,uo=new Mn,ah=new C,ho=new C,fo=new C,po=new C,nl=new C,mo=new C,lh=new C,go=new C;class ye extends Te{constructor(t=new Ie,e=new lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(nl.fromBufferAttribute(h,t),o?mo.addScaledVector(nl,u):mo.addScaledVector(nl.sub(e),u))}e.add(mo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(uo.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(uo,ah)===null||Fi.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(oh.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(oh),!(i.boundingBox!==null&&Fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,T=M;v<T;v+=3){const R=a.getX(v),P=a.getX(v+1),L=a.getX(v+2);s=_o(this,p,t,i,c,u,h,R,P,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const b=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=_o(this,o,t,i,c,u,h,b,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],b=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=b,T=M;v<T;v+=3){const R=v,P=v+1,L=v+2;s=_o(this,p,t,i,c,u,h,R,P,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const b=g,M=g+1,v=g+2;s=_o(this,o,t,i,c,u,h,b,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function pg(n,t,e,i,s,r,o,a){let l;if(t.side===ze?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===wi,a),l===null)return null;go.copy(a),go.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(go);return c<e.near||c>e.far?null:{distance:c,point:go.clone(),object:n}}function _o(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ho),n.getVertexPosition(l,fo),n.getVertexPosition(c,po);const u=pg(n,t,e,i,ho,fo,po,lh);if(u){const h=new C;gn.getBarycoord(lh,ho,fo,po,h),s&&(u.uv=gn.getInterpolatedAttribute(s,a,l,c,h,new Lt)),r&&(u.uv1=gn.getInterpolatedAttribute(r,a,l,c,h,new Lt)),o&&(u.normal=gn.getInterpolatedAttribute(o,a,l,c,h,new C),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new C,materialIndex:0};gn.getNormal(ho,fo,po,d.normal),u.face=d,u.barycoord=h}return u}class qr extends Ie{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(h,2));function m(_,g,p,b,M,v,T,R,P,L,E){const y=v/P,A=T/L,N=v/2,z=T/2,B=R/2,Y=P+1,G=L+1;let K=0,V=0;const et=new C;for(let it=0;it<G;it++){const dt=it*A-z;for(let Ct=0;Ct<Y;Ct++){const se=Ct*y-N;et[_]=se*b,et[g]=dt*M,et[p]=B,c.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[p]=R>0?1:-1,u.push(et.x,et.y,et.z),h.push(Ct/P),h.push(1-it/L),K+=1}}for(let it=0;it<L;it++)for(let dt=0;dt<P;dt++){const Ct=d+dt+Y*it,se=d+dt+Y*(it+1),ee=d+(dt+1)+Y*(it+1),j=d+(dt+1)+Y*it;l.push(Ct,se,j),l.push(se,ee,j),V+=6}a.addGroup(f,V,E),f+=V,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ke(n){const t={};for(let e=0;e<n.length;e++){const i=er(n[e]);for(const s in i)t[s]=i[s]}return t}function mg(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function bf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const cu={clone:er,merge:ke};var gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=mg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class wf extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new C,ch=new Lt,uh=new Lt;class Qe extends wf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ur*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,ch,uh),e.subVectors(uh,ch)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cs=-90,Ps=1;class vg extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Cs,Ps,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Cs,Ps,t,e);r.layers=this.layers,this.add(r);const o=new Qe(Cs,Ps,t,e);o.layers=this.layers,this.add(o);const a=new Qe(Cs,Ps,t,e);a.layers=this.layers,this.add(a);const l=new Qe(Cs,Ps,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Cs,Ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Tf extends De{constructor(t=[],e=Js,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xg extends ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Tf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qr(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ze,blending:Ei});r.uniforms.tEquirect.value=e;const o=new ye(s,r),a=e.minFilter;return e.minFilter===ji&&(e.minFilter=Rn),new vg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}let Zn=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}};const yg={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Zn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Sg extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Mg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vc,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Be=new C;class yi{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=mn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Kt(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),s=Kt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),i=Kt(i,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new yi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vo=new C,hh=new C;class Af extends Te{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let i=0,s=e.length;i<s;i++){const r=e[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,i=0){e=Math.abs(e);const s=this.levels;let r;for(r=0;r<s.length&&!(e<s[r].distance);r++);return s.splice(r,0,{distance:e,hysteresis:i,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let i=0;i<e.length;i++)if(e[i].distance===t){const s=e.splice(i,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let i,s;for(i=1,s=e.length;i<s;i++){let r=e[i].distance;if(e[i].object.visible&&(r-=r*e[i].hysteresis),t<r)break}return e[i-1].object}return null}raycast(t,e){if(this.levels.length>0){vo.setFromMatrixPosition(this.matrixWorld);const s=t.ray.origin.distanceTo(vo);this.getObjectForDistance(s).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){vo.setFromMatrixPosition(t.matrixWorld),hh.setFromMatrixPosition(this.matrixWorld);const i=vo.distanceTo(hh)/t.zoom;e[0].object.visible=!0;let s,r;for(s=1,r=e.length;s<r;s++){let o=e[s].distance;if(e[s].object.visible&&(o-=o*e[s].hysteresis),i>=o)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)e[s].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const i=this.levels;for(let s=0,r=i.length;s<r;s++){const o=i[s];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}class Eg extends De{constructor(t=null,e=1,i=1,s,r,o,a,l,c=en,u=en,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class na extends un{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ds=new Zt,dh=new Zt,xo=[],fh=new sn,bg=new Zt,vr=new ye,xr=new Mn;class ph extends ye{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new na(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),fh.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(fh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ds),xr.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(i),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ds),dh.multiplyMatrices(i,Ds),vr.matrixWorld=dh,vr.raycast(t,xo);for(let o=0,a=xo.length;o<a;o++){const l=xo[o];l.instanceId=r,l.object=this,e.push(l)}xo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Eg(new Float32Array(s*this.count),s,this.count,eu,Cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sl=new C,wg=new C,Tg=new Bt;class qn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=sl.subVectors(i,e).cross(wg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(sl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Tg.getNormalMatrix(t),s=this.coplanarPoint(sl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Mn,Ag=new Lt(.5,.5),yo=new C;class uu{constructor(t=new qn,e=new qn,i=new qn,s=new qn,r=new qn,o=new qn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Pn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],b=r[12],M=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-o,f-u,p-m,T-b).normalize(),s[1].setComponents(c+o,f+u,p+m,T+b).normalize(),s[2].setComponents(c+a,f+h,p+_,T+M).normalize(),s[3].setComponents(c-a,f-h,p-_,T-M).normalize(),i)s[4].setComponents(l,d,g,v).normalize(),s[5].setComponents(c-l,f-d,p-g,T-v).normalize();else if(s[4].setComponents(c-l,f-d,p-g,T-v).normalize(),e===Pn)s[5].setComponents(c+l,f+d,p+g,T+v).normalize();else if(e===ea)s[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);const e=Ag.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(yo.x=s.normal.x>0?t.max.x:t.min.x,yo.y=s.normal.y>0?t.max.y:t.min.y,yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rf extends ps{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ia=new C,sa=new C,mh=new Zt,yr=new Yr,So=new Mn,rl=new C,gh=new C;class Rg extends Te{constructor(t=new Ie,e=new Rf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ia.fromBufferAttribute(e,s-1),sa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ia.distanceTo(sa);t.setAttribute("lineDistance",new Se(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(s),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;mh.copy(s).invert(),yr.copy(t.ray).applyMatrix4(mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=u.getX(_),b=u.getX(_+1),M=Mo(this,t,yr,l,p,b,_);M&&e.push(M)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(f),p=Mo(this,t,yr,l,_,g,m-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){const p=Mo(this,t,yr,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=Mo(this,t,yr,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mo(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(ia.fromBufferAttribute(a,s),sa.fromBufferAttribute(a,r),e.distanceSqToSegment(ia,sa,rl,gh)>i)return;rl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(rl);if(!(c<t.near||c>t.far))return{distance:c,point:gh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}class hu extends ps{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _h=new Zt,xc=new Yr,Eo=new Mn,bo=new C;class Cf extends Te{constructor(t=new Ie,e=new hu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;_h.copy(s).invert(),xc.copy(t.ray).applyMatrix4(_h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);bo.fromBufferAttribute(h,g),vh(bo,g,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,_=f;m<_;m++)bo.fromBufferAttribute(h,m),vh(bo,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vh(n,t,e,i,s,r,o){const a=xc.distanceSqToPoint(n);if(a<e){const l=new C;xc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class du extends De{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pf extends De{constructor(t,e,i=os,s,r,o,a=en,l=en,c,u=Ir,h=1){if(u!==Ir&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ou(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ea extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const b=p*d-o;for(let M=0;M<c;M++){const v=M*h-r;m.push(v,-b,0),_.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+c*p,v=b+c*(p+1),T=b+1+c*(p+1),R=b+1+c*p;f.push(M,v,R),f.push(v,T,R)}this.setIndex(f),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.width,t.height,t.widthSegments,t.heightSegments)}}class nr extends Ie{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,f=new C,m=new Lt;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){const p=r+g/i*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<s;_++){const g=_*(i+1);for(let p=0;p<i;p++){const b=p+g,M=b,v=b+i+1,T=b+i+2,R=b+1;a.push(M,v,R),a.push(v,T,R)}}this.setIndex(a),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zs extends Ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new C,d=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){const b=[],M=p/i;let v=0;p===0&&o===0?v=.5/e:p===i&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const R=T/e;h.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(R+v,1-M),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){const M=u[p][b+1],v=u[p][b],T=u[p+1][b],R=u[p+1][b+1];(p!==0||o>0)&&f.push(M,v,R),(p!==i-1||l<Math.PI)&&f.push(v,T,R)}this.setIndex(f),this.setAttribute("position",new Se(m,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cg extends Ie{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],i=new Set,s=new C,r=new C;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let m=d,_=d+f;m<_;m+=3)for(let g=0;g<3;g++){const p=a.getX(m+g),b=a.getX(m+(g+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,b),xh(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,u),r.fromBufferAttribute(o,h),xh(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Se(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function xh(n,t,e){const i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}class Jn extends ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pg extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dg extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ol={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ig{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Lg=new Ig;class fu{constructor(t){this.manager=t!==void 0?t:Lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}fu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Is=new WeakMap;class Ug extends fu{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ol.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=Is.get(o);h===void 0&&(h=[],Is.set(o,h)),h.push({onLoad:e,onError:s})}return o}const a=Fr("img");function l(){u(),e&&e(this);const h=Is.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Is.delete(this),r.manager.itemEnd(t)}function c(h){u(),s&&s(h),ol.remove(`image:${t}`);const d=Is.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(h)}Is.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ol.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Df extends fu{constructor(t){super(t)}load(t,e,i,s){const r=new De,o=new Ug(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class If extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const al=new Zt,yh=new C,Sh=new C;class Og{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uu,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(yh),Sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sh),e.updateMatrixWorld(),al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Mh=new Zt,Sr=new C,ll=new C;class Fg extends Og{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Sr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Sr),ll.copy(i.position),ll.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(ll),i.updateMatrixWorld(),s.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Mh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh,i.coordinateSystem,i.reversedDepth)}}class Ng extends If{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Fg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Bg extends wf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class kg extends If{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class zg extends Ie{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Hg extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class yc extends Mg{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Eh=new Zt;class Vg{constructor(t,e,i=0,s=1/0){this.ray=new Yr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new au,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Eh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eh),this}intersectObject(t,e=!0,i=[]){return Sc(t,this,i,e),i.sort(bh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Sc(t[s],this,i,e);return i.sort(bh),i}}function bh(n,t){return n.distance-t.distance}function Sc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Sc(r[o],t,e,!0)}}class wh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ut(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Th=new C,wo=new C,Ls=new C,Us=new C,cl=new C,Gg=new C,Wg=new C;class Xg{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Th.subVectors(t,this.start),wo.subVectors(this.end,this.start);const i=wo.dot(wo);let r=wo.dot(Th)/i;return e&&(r=Ut(r,0,1)),r}closestPointToPoint(t,e,i){const s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Gg,i=Wg){const s=10000000000000001e-32;let r,o;const a=this.start,l=t.start,c=this.end,u=t.end;Ls.subVectors(c,a),Us.subVectors(u,l),cl.subVectors(a,l);const h=Ls.dot(Ls),d=Us.dot(Us),f=Us.dot(cl);if(h<=s&&d<=s)return e.copy(a),i.copy(l),e.sub(i),e.dot(e);if(h<=s)r=0,o=f/d,o=Ut(o,0,1);else{const m=Ls.dot(cl);if(d<=s)o=0,r=Ut(-m/h,0,1);else{const _=Ls.dot(Us),g=h*d-_*_;g!==0?r=Ut((_*f-m*d)/g,0,1):r=0,o=(_*r+f)/d,o<0?(o=0,r=Ut(-m/h,0,1)):o>1&&(o=1,r=Ut((_-m)/h,0,1))}}return e.copy(a).add(Ls.multiplyScalar(r)),i.copy(l).add(Us.multiplyScalar(o)),e.sub(i),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class jg extends fs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ah(n,t,e,i){const s=Yg(i);switch(e){case ff:return n*t;case eu:return n*t/s.components*s.byteLength;case nu:return n*t/s.components*s.byteLength;case mf:return n*t*2/s.components*s.byteLength;case iu:return n*t*2/s.components*s.byteLength;case pf:return n*t*3/s.components*s.byteLength;case vn:return n*t*4/s.components*s.byteLength;case su:return n*t*4/s.components*s.byteLength;case Vo:case Go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wo:case Xo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yl:case Kl:return Math.max(n,16)*Math.max(t,8)/4;case jl:case ql:return Math.max(n,8)*Math.max(t,8)/2;case $l:case Zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Jl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ec:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case nc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ic:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case sc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case rc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case oc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ac:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case uc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case hc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case dc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jo:case fc:case pc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case gf:case mc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case gc:case _c:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yg(n){switch(n){case On:case uf:return{byteLength:1,components:1};case Pr:case hf:case jr:return{byteLength:2,components:1};case Qc:case tu:return{byteLength:2,components:4};case os:case Jc:case Cn:return{byteLength:4,components:1};case df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function qg(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$g=`#ifdef USE_ALPHAHASH
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
#endif`,Zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e_=`#ifdef USE_AOMAP
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
#endif`,n_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`#ifdef USE_BATCHING
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
#endif`,s_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l_=`#ifdef USE_IRIDESCENCE
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
#endif`,c_=`#ifdef USE_BUMPMAP
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
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
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
#endif`,v_=`#define PI 3.141592653589793
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
} // validated`,x_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y_=`vec3 transformedNormal = objectNormal;
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
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w_="gl_FragColor = linearToOutputTexel( gl_FragColor );",T_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A_=`#ifdef USE_ENVMAP
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
#endif`,R_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
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
#endif`,I_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
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
}`,N_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z_=`uniform bool receiveShadow;
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
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,V_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j_=`PhysicalMaterial material;
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
#endif`,Y_=`struct PhysicalMaterial {
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
}`,q_=`
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
#endif`,K_=`#if defined( RE_IndirectDiffuse )
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
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s0=`#if defined( USE_POINTS_UV )
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
#endif`,r0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
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
#endif`,h0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
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
#endif`,v0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L0=`float getShadowMask() {
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
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`#include <common>
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
}`,ev=`#if DEPTH_PACKING == 3200
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
}`,nv=`#define DISTANCE
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
}`,iv=`#define DISTANCE
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`uniform float scale;
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
}`,av=`uniform vec3 diffuse;
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
}`,lv=`#include <common>
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
}`,cv=`uniform vec3 diffuse;
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
}`,uv=`#define LAMBERT
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
}`,hv=`#define LAMBERT
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
}`,dv=`#define MATCAP
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
}`,fv=`#define MATCAP
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
}`,pv=`#define NORMAL
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
}`,mv=`#define NORMAL
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
}`,gv=`#define PHONG
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
}`,_v=`#define PHONG
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
}`,vv=`#define STANDARD
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
}`,xv=`#define STANDARD
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
}`,yv=`#define TOON
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
}`,Sv=`#define TOON
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
}`,Mv=`uniform float size;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,bv=`#include <common>
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
}`,wv=`uniform vec3 color;
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
}`,Tv=`uniform float rotation;
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
}`,Av=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Kg,alphahash_pars_fragment:$g,alphamap_fragment:Zg,alphamap_pars_fragment:Jg,alphatest_fragment:Qg,alphatest_pars_fragment:t_,aomap_fragment:e_,aomap_pars_fragment:n_,batching_pars_vertex:i_,batching_vertex:s_,begin_vertex:r_,beginnormal_vertex:o_,bsdfs:a_,iridescence_fragment:l_,bumpmap_pars_fragment:c_,clipping_planes_fragment:u_,clipping_planes_pars_fragment:h_,clipping_planes_pars_vertex:d_,clipping_planes_vertex:f_,color_fragment:p_,color_pars_fragment:m_,color_pars_vertex:g_,color_vertex:__,common:v_,cube_uv_reflection_fragment:x_,defaultnormal_vertex:y_,displacementmap_pars_vertex:S_,displacementmap_vertex:M_,emissivemap_fragment:E_,emissivemap_pars_fragment:b_,colorspace_fragment:w_,colorspace_pars_fragment:T_,envmap_fragment:A_,envmap_common_pars_fragment:R_,envmap_pars_fragment:C_,envmap_pars_vertex:P_,envmap_physical_pars_fragment:H_,envmap_vertex:D_,fog_vertex:I_,fog_pars_vertex:L_,fog_fragment:U_,fog_pars_fragment:O_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:N_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:k_,lights_pars_begin:z_,lights_toon_fragment:V_,lights_toon_pars_fragment:G_,lights_phong_fragment:W_,lights_phong_pars_fragment:X_,lights_physical_fragment:j_,lights_physical_pars_fragment:Y_,lights_fragment_begin:q_,lights_fragment_maps:K_,lights_fragment_end:$_,logdepthbuf_fragment:Z_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:Q_,logdepthbuf_vertex:t0,map_fragment:e0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:s0,metalnessmap_fragment:r0,metalnessmap_pars_fragment:o0,morphinstance_vertex:a0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:u0,morphtarget_vertex:h0,normal_fragment_begin:d0,normal_fragment_maps:f0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:v0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:S0,opaque_fragment:M0,packing:E0,premultiplied_alpha_fragment:b0,project_vertex:w0,dithering_fragment:T0,dithering_pars_fragment:A0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:D0,shadowmap_vertex:I0,shadowmask_pars_fragment:L0,skinbase_vertex:U0,skinning_pars_vertex:O0,skinning_vertex:F0,skinnormal_vertex:N0,specularmap_fragment:B0,specularmap_pars_fragment:k0,tonemapping_fragment:z0,tonemapping_pars_fragment:H0,transmission_fragment:V0,transmission_pars_fragment:G0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:j0,worldpos_vertex:Y0,background_vert:q0,background_frag:K0,backgroundCube_vert:$0,backgroundCube_frag:Z0,cube_vert:J0,cube_frag:Q0,depth_vert:tv,depth_frag:ev,distanceRGBA_vert:nv,distanceRGBA_frag:iv,equirect_vert:sv,equirect_frag:rv,linedashed_vert:ov,linedashed_frag:av,meshbasic_vert:lv,meshbasic_frag:cv,meshlambert_vert:uv,meshlambert_frag:hv,meshmatcap_vert:dv,meshmatcap_frag:fv,meshnormal_vert:pv,meshnormal_frag:mv,meshphong_vert:gv,meshphong_frag:_v,meshphysical_vert:vv,meshphysical_frag:xv,meshtoon_vert:yv,meshtoon_frag:Sv,points_vert:Mv,points_frag:Ev,shadow_vert:bv,shadow_frag:wv,sprite_vert:Tv,sprite_frag:Av},ot={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},We={basic:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:ke([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:ke([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:ke([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:ke([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:ke([ot.points,ot.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:ke([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:ke([ot.common,ot.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:ke([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:ke([ot.sprite,ot.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:ke([ot.common,ot.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:ke([ot.lights,ot.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};We.physical={uniforms:ke([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const To={r:0,b:0,g:0},Bi=new Fn,Rv=new Zt;function Cv(n,t,e,i,s,r,o){const a=new Vt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const T=m(M);T===null?p(a,l):T&&T.isColor&&(p(T,1),v=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,v){const T=m(v);T&&(T.isCubeTexture||T.mapping===Ma)?(u===void 0&&(u=new ye(new qr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:er(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bi.copy(v.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(Bi)),u.material.toneMapped=jt.getTransfer(T.colorSpace)!==Qt,(h!==T||d!==T.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new ye(new Ea(2,2),new ri({name:"BackgroundMaterial",uniforms:er(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=jt.getTransfer(T.colorSpace)!==Qt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(To,bf(n)),i.buffers.color.setClear(To.r,To.g,To.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:g,dispose:b}}function Pv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(y,A,N,z,B){let Y=!1;const G=h(z,N,A);r!==G&&(r=G,c(r.object)),Y=f(y,z,N,B),Y&&m(y,z,N,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(y,A,N,z),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,A,N){const z=N.wireframe===!0;let B=i[y.id];B===void 0&&(B={},i[y.id]=B);let Y=B[A.id];Y===void 0&&(Y={},B[A.id]=Y);let G=Y[z];return G===void 0&&(G=d(l()),Y[z]=G),G}function d(y){const A=[],N=[],z=[];for(let B=0;B<e;B++)A[B]=0,N[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:z,object:y,attributes:{},index:null}}function f(y,A,N,z){const B=r.attributes,Y=A.attributes;let G=0;const K=N.getAttributes();for(const V in K)if(K[V].location>=0){const it=B[V];let dt=Y[V];if(dt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor)),it===void 0||it.attribute!==dt||dt&&it.data!==dt.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function m(y,A,N,z){const B={},Y=A.attributes;let G=0;const K=N.getAttributes();for(const V in K)if(K[V].location>=0){let it=Y[V];it===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));const dt={};dt.attribute=it,it&&it.data&&(dt.data=it.data),B[V]=dt,G++}r.attributes=B,r.attributesNum=G,r.index=z}function _(){const y=r.newAttributes;for(let A=0,N=y.length;A<N;A++)y[A]=0}function g(y){p(y,0)}function p(y,A){const N=r.newAttributes,z=r.enabledAttributes,B=r.attributeDivisors;N[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),B[y]!==A&&(n.vertexAttribDivisor(y,A),B[y]=A)}function b(){const y=r.newAttributes,A=r.enabledAttributes;for(let N=0,z=A.length;N<z;N++)A[N]!==y[N]&&(n.disableVertexAttribArray(N),A[N]=0)}function M(y,A,N,z,B,Y,G){G===!0?n.vertexAttribIPointer(y,A,N,B,Y):n.vertexAttribPointer(y,A,N,z,B,Y)}function v(y,A,N,z){_();const B=z.attributes,Y=N.getAttributes(),G=A.defaultAttributeValues;for(const K in Y){const V=Y[K];if(V.location>=0){let et=B[K];if(et===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(et=y.instanceColor)),et!==void 0){const it=et.normalized,dt=et.itemSize,Ct=t.get(et);if(Ct===void 0)continue;const se=Ct.buffer,ee=Ct.type,j=Ct.bytesPerElement,at=ee===n.INT||ee===n.UNSIGNED_INT||et.gpuType===Jc;if(et.isInterleavedBufferAttribute){const st=et.data,Tt=st.stride,At=et.offset;if(st.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)p(V.location+Ot,st.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)g(V.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,se);for(let Ot=0;Ot<V.locationSize;Ot++)M(V.location+Ot,dt/V.locationSize,ee,it,Tt*j,(At+dt/V.locationSize*Ot)*j,at)}else{if(et.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)p(V.location+st,et.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let st=0;st<V.locationSize;st++)g(V.location+st);n.bindBuffer(n.ARRAY_BUFFER,se);for(let st=0;st<V.locationSize;st++)M(V.location+st,dt/V.locationSize,ee,it,dt*j,dt/V.locationSize*st*j,at)}}else if(G!==void 0){const it=G[K];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(V.location,it);break;case 3:n.vertexAttrib3fv(V.location,it);break;case 4:n.vertexAttrib4fv(V.location,it);break;default:n.vertexAttrib1fv(V.location,it)}}}}b()}function T(){L();for(const y in i){const A=i[y];for(const N in A){const z=A[N];for(const B in z)u(z[B].object),delete z[B];delete A[N]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const A=i[y.id];for(const N in A){const z=A[N];for(const B in z)u(z[B].object),delete z[B];delete A[N]}delete i[y.id]}function P(y){for(const A in i){const N=i[A];if(N[y.id]===void 0)continue;const z=N[y.id];for(const B in z)u(z[B].object),delete z[B];delete N[y.id]}}function L(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:b}}function Dv(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];e.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Iv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const L=P===jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==On&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Cn&&!L)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:T,maxSamples:R}}function Lv(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new qn,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const b=r?0:i,M=b*4;let v=p.clippingState||null;l.value=v,v=u(m,d,M,f);for(let T=0;T!==M;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(h[M]).applyMatrix4(b,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Uv(n){let t=new WeakMap;function e(o,a){return a===Gl?o.mapping=Js:a===Wl&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gl||a===Wl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new xg(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Hs=4,Rh=[.125,.215,.35,.446,.526,.582],Gi=20,ul=new Bg,Ch=new Vt;let hl=null,dl=0,fl=0,pl=!1;const zi=(1+Math.sqrt(5))/2,Os=1/zi,Ph=[new C(-zi,Os,0),new C(zi,Os,0),new C(-Os,0,zi),new C(Os,0,zi),new C(0,zi,-Os),new C(0,zi,Os),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Ov=new C;class Dh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=Ov}=r;hl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hl,dl,fl),this._renderer.xr.enabled=pl,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Js||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:jr,format:vn,colorSpace:tr,depthBuffer:!1},s=Ih(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fv(r)),this._blurMaterial=Nv(r,t,e)}return s}_compileMaterial(t){const e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,ul)}_sceneToCubeUV(t,e,i,s,r){const l=new Qe(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ch),h.toneMapping=bi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new lu({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new ye(new qr,_);let p=!1;const b=t.background;b?b.isColor&&(_.color.copy(b),t.background=null,p=!0):(_.color.copy(Ch),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const T=this._cubeSize;Ao(s,v*T,M>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(g,l),h.render(t,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Js||t.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ao(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ul)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ph[(s-r-1)%Ph.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ye(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Gi;g>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gi}`);const p=[];let b=0;for(let P=0;P<Gi;++P){const L=P/_,E=Math.exp(-L*L/2);p.push(E),P===0?b+=E:P<g&&(b+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-i;const v=this._sizeLods[s],T=3*v*(s>M-Hs?s-M+Hs:0),R=4*(this._cubeSize-v);Ao(e,T,R,3*v,2*v),l.setRenderTarget(e),l.render(h,ul)}}function Fv(n){const t=[],e=[],i=[];let s=n;const r=n-Hs+1+Rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Hs?l=Rh[o-n+Hs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,g=2,p=1,b=new Float32Array(_*m*f),M=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let R=0;R<f;R++){const P=R%3*2/3-1,L=R>2?0:-1,E=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];b.set(E,_*m*R),M.set(d,g*m*R);const y=[R,R,R,R,R,R];v.set(y,p*m*R)}const T=new Ie;T.setAttribute("position",new un(b,_)),T.setAttribute("uv",new un(M,g)),T.setAttribute("faceIndex",new un(v,p)),t.push(T),s>Hs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Ih(n,t,e){const i=new ls(n,t,e);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Nv(n,t,e){const i=new Float32Array(Gi),s=new C(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Lh(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Uh(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function Bv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gl||l===Wl,u=l===Js||l===Qs;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Dh(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Dh(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function kv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ws("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function zv(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let M=0,v=b.length;M<v;M+=3){const T=b[M+0],R=b[M+1],P=b[M+2];d.push(T,R,R,P,P,T)}}else if(m!==void 0){const b=m.array;_=m.version;for(let M=0,v=b.length/3-1;M<v;M+=3){const T=M+0,R=M+1,P=M+2;d.push(T,R,R,P,P,T)}}else return;const g=new(xf(d)?Ef:Mf)(d,1);g.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Hv(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function c(d,f,m){m!==0&&(n.drawElementsInstanced(i,f,r,d*o,m),e.update(f,i,m))}function u(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,i,1)}function h(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*_[b];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Vv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Gv(n,t,e){const i=new WeakMap,s=new Wt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;f===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const R=new Float32Array(v*T*4*h),P=new yf(R,v,T,h);P.type=Cn,P.needsUpdate=!0;const L=M*4;for(let y=0;y<h;y++){const A=g[y],N=p[y],z=b[y],B=v*T*4*y;for(let Y=0;Y<A.count;Y++){const G=Y*L;f===!0&&(s.fromBufferAttribute(A,Y),R[B+G+0]=s.x,R[B+G+1]=s.y,R[B+G+2]=s.z,R[B+G+3]=0),m===!0&&(s.fromBufferAttribute(N,Y),R[B+G+4]=s.x,R[B+G+5]=s.y,R[B+G+6]=s.z,R[B+G+7]=0),_===!0&&(s.fromBufferAttribute(z,Y),R[B+G+8]=s.x,R[B+G+9]=s.y,R[B+G+10]=s.z,R[B+G+11]=z.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new Lt(v,T)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Wv(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Uf=new De,Oh=new Pf(1,1),Of=new yf,Ff=new ig,Nf=new Tf,Fh=[],Nh=[],Bh=new Float32Array(16),kh=new Float32Array(9),zh=new Float32Array(4);function ur(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Fh[s];if(r===void 0&&(r=new Float32Array(s),Fh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Me(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ba(n,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function Yv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function Kv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,i))return;zh.set(i),n.uniformMatrix2fv(this.addr,!1,zh),Ee(e,i)}}function $v(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,i))return;kh.set(i),n.uniformMatrix3fv(this.addr,!1,kh),Ee(e,i)}}function Zv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Me(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,i))return;Bh.set(i),n.uniformMatrix4fv(this.addr,!1,Bh),Ee(e,i)}}function Jv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function ex(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function nx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ix(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function rx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function ox(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Oh.compareFunction=vf,r=Oh):r=Uf,e.setTexture2D(t||r,s)}function ax(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ff,s)}function lx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Nf,s)}function cx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Of,s)}function ux(n){switch(n){case 5126:return Xv;case 35664:return jv;case 35665:return Yv;case 35666:return qv;case 35674:return Kv;case 35675:return $v;case 35676:return Zv;case 5124:case 35670:return Jv;case 35667:case 35671:return Qv;case 35668:case 35672:return tx;case 35669:case 35673:return ex;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}function hx(n,t){n.uniform1fv(this.addr,t)}function dx(n,t){const e=ur(t,this.size,2);n.uniform2fv(this.addr,e)}function fx(n,t){const e=ur(t,this.size,3);n.uniform3fv(this.addr,e)}function px(n,t){const e=ur(t,this.size,4);n.uniform4fv(this.addr,e)}function mx(n,t){const e=ur(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function gx(n,t){const e=ur(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _x(n,t){const e=ur(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function vx(n,t){n.uniform1iv(this.addr,t)}function xx(n,t){n.uniform2iv(this.addr,t)}function yx(n,t){n.uniform3iv(this.addr,t)}function Sx(n,t){n.uniform4iv(this.addr,t)}function Mx(n,t){n.uniform1uiv(this.addr,t)}function Ex(n,t){n.uniform2uiv(this.addr,t)}function bx(n,t){n.uniform3uiv(this.addr,t)}function wx(n,t){n.uniform4uiv(this.addr,t)}function Tx(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Uf,r[o])}function Ax(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ff,r[o])}function Rx(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Nf,r[o])}function Cx(n,t,e){const i=this.cache,s=t.length,r=ba(e,s);Me(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Of,r[o])}function Px(n){switch(n){case 5126:return hx;case 35664:return dx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return _x;case 5124:case 35670:return vx;case 35667:case 35671:return xx;case 35668:case 35672:return yx;case 35669:case 35673:return Sx;case 5125:return Mx;case 36294:return Ex;case 36295:return bx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}class Dx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ux(e.type)}}class Ix{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Px(e.type)}}class Lx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function Hh(n,t){n.seq.push(t),n.map[t.id]=t}function Ux(n,t,e){const i=n.name,s=i.length;for(ml.lastIndex=0;;){const r=ml.exec(i),o=ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hh(e,c===void 0?new Dx(a,n,t):new Ix(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Lx(a),Hh(e,h)),e=h}}}class Yo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ux(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Vh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Ox=37297;let Fx=0;function Nx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Gh=new Bt;function Bx(n){jt._getMatrix(Gh,jt.workingColorSpace,n);const t=`mat3( ${Gh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case ta:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Wh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Nx(n.getShaderSource(t),a)}else return r}function kx(n,t){const e=Bx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zx(n,t){let e;switch(t){case _m:e="Linear";break;case vm:e="Reinhard";break;case xm:e="Cineon";break;case lf:e="ACESFilmic";break;case Sm:e="AgX";break;case Mm:e="Neutral";break;case ym:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ro=new C;function Hx(){jt.getLuminanceCoefficients(Ro);const n=Ro.x.toFixed(4),t=Ro.y.toFixed(4),e=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function Gx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Wx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Mr(n){return n!==""}function Xh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(n){return n.replace(Xx,Yx)}const jx=new Map;function Yx(n,t){let e=kt[t];if(e===void 0){const i=jx.get(t);if(i!==void 0)e=kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Mc(e)}const qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(n){return n.replace(qx,Kx)}function Kx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $x(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===of?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Zx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Js:case Qs:t="ENVMAP_TYPE_CUBE";break;case Ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qs:t="ENVMAP_MODE_REFRACTION";break}return t}function Qx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case af:t="ENVMAP_BLENDING_MULTIPLY";break;case mm:t="ENVMAP_BLENDING_MIX";break;case gm:t="ENVMAP_BLENDING_ADD";break}return t}function ty(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ey(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=$x(e),c=Zx(e),u=Jx(e),h=Qx(e),d=ty(e),f=Vx(e),m=Gx(r),_=s.createProgram();let g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Mr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(g=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?kt.tonemapping_pars_fragment:"",e.toneMapping!==bi?zx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,kx("linearToOutputTexel",e.outputColorSpace),Hx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),o=Mc(o),o=Xh(o,e),o=jh(o,e),a=Mc(a),a=Xh(a,e),a=jh(a,e),o=Yh(o),a=Yh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+g+o,v=b+p+a,T=Vh(s,s.VERTEX_SHADER,M),R=Vh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(A){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(T)||"",B=s.getShaderInfoLog(R)||"",Y=N.trim(),G=z.trim(),K=B.trim();let V=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,R);else{const it=Wh(s,T,"vertex"),dt=Wh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+Y+`
`+it+`
`+dt)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(G===""||K==="")&&(et=!1);et&&(A.diagnostics={runnable:V,programLog:Y,vertexShader:{log:G,prefix:g},fragmentShader:{log:K,prefix:p}})}s.deleteShader(T),s.deleteShader(R),L=new Yo(s,_),E=Wx(s,_)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Ox)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=R,this}let ny=0;class iy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new sy(t),e.set(t,i)),i}}class sy{constructor(t){this.id=ny++,this.code=t,this.usedTimes=0}}function ry(n,t,e,i,s,r,o){const a=new au,l=new iy,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,y,A,N,z){const B=N.fog,Y=z.geometry,G=E.isMeshStandardMaterial?N.environment:null,K=(E.isMeshStandardMaterial?e:t).get(E.envMap||G),V=K&&K.mapping===Ma?K.image.height:null,et=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const it=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,dt=it!==void 0?it.length:0;let Ct=0;Y.morphAttributes.position!==void 0&&(Ct=1),Y.morphAttributes.normal!==void 0&&(Ct=2),Y.morphAttributes.color!==void 0&&(Ct=3);let se,ee,j,at;if(et){const qt=We[et];se=qt.vertexShader,ee=qt.fragmentShader}else se=E.vertexShader,ee=E.fragmentShader,l.update(E),j=l.getVertexShaderID(E),at=l.getFragmentShaderID(E);const st=n.getRenderTarget(),Tt=n.state.buffers.depth.getReversed(),At=z.isInstancedMesh===!0,Ot=z.isBatchedMesh===!0,pe=!!E.map,Gt=!!E.matcap,D=!!K,re=!!E.aoMap,Et=!!E.lightMap,Yt=!!E.bumpMap,St=!!E.normalMap,ce=!!E.displacementMap,pt=!!E.emissiveMap,zt=!!E.metalnessMap,be=!!E.roughnessMap,me=E.anisotropy>0,w=E.clearcoat>0,x=E.dispersion>0,F=E.iridescence>0,X=E.sheen>0,$=E.transmission>0,W=me&&!!E.anisotropyMap,yt=w&&!!E.clearcoatMap,nt=w&&!!E.clearcoatNormalMap,_t=w&&!!E.clearcoatRoughnessMap,vt=F&&!!E.iridescenceMap,Q=F&&!!E.iridescenceThicknessMap,ut=X&&!!E.sheenColorMap,Pt=X&&!!E.sheenRoughnessMap,xt=!!E.specularMap,lt=!!E.specularColorMap,Nt=!!E.specularIntensityMap,I=$&&!!E.transmissionMap,tt=$&&!!E.thicknessMap,rt=!!E.gradientMap,ft=!!E.alphaMap,Z=E.alphaTest>0,q=!!E.alphaHash,gt=!!E.extensions;let Ft=bi;E.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ft=n.toneMapping);const oe={shaderID:et,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:ee,defines:E.defines,customVertexShaderID:j,customFragmentShaderID:at,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&z._colorsTexture!==null,instancing:At,instancingColor:At&&z.instanceColor!==null,instancingMorph:At&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:tr,alphaToCoverage:!!E.alphaToCoverage,map:pe,matcap:Gt,envMap:D,envMapMode:D&&K.mapping,envMapCubeUVHeight:V,aoMap:re,lightMap:Et,bumpMap:Yt,normalMap:St,displacementMap:d&&ce,emissiveMap:pt,normalMapObjectSpace:St&&E.normalMapType===Tm,normalMapTangentSpace:St&&E.normalMapType===_f,metalnessMap:zt,roughnessMap:be,anisotropy:me,anisotropyMap:W,clearcoat:w,clearcoatMap:yt,clearcoatNormalMap:nt,clearcoatRoughnessMap:_t,dispersion:x,iridescence:F,iridescenceMap:vt,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:ut,sheenRoughnessMap:Pt,specularMap:xt,specularColorMap:lt,specularIntensityMap:Nt,transmission:$,transmissionMap:I,thicknessMap:tt,gradientMap:rt,opaque:E.transparent===!1&&E.blending===Gs&&E.alphaToCoverage===!1,alphaMap:ft,alphaTest:Z,alphaHash:q,combine:E.combine,mapUv:pe&&_(E.map.channel),aoMapUv:re&&_(E.aoMap.channel),lightMapUv:Et&&_(E.lightMap.channel),bumpMapUv:Yt&&_(E.bumpMap.channel),normalMapUv:St&&_(E.normalMap.channel),displacementMapUv:ce&&_(E.displacementMap.channel),emissiveMapUv:pt&&_(E.emissiveMap.channel),metalnessMapUv:zt&&_(E.metalnessMap.channel),roughnessMapUv:be&&_(E.roughnessMap.channel),anisotropyMapUv:W&&_(E.anisotropyMap.channel),clearcoatMapUv:yt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:nt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(E.sheenRoughnessMap.channel),specularMapUv:xt&&_(E.specularMap.channel),specularColorMapUv:lt&&_(E.specularColorMap.channel),specularIntensityMapUv:Nt&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:tt&&_(E.thicknessMap.channel),alphaMapUv:ft&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(St||me),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(pe||ft),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Tt,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ct,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===Qt,decodeVideoTextureEmissive:pt&&E.emissiveMap.isVideoTexture===!0&&jt.getTransfer(E.emissiveMap.colorSpace)===Qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xe,flipSided:E.side===ze,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:gt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&E.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return oe.vertexUv1s=c.has(1),oe.vertexUv2s=c.has(2),oe.vertexUv3s=c.has(3),c.clear(),oe}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const A in E.defines)y.push(A),y.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(b(y,E),M(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function b(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function M(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const y=m[E.type];let A;if(y){const N=We[y];A=cu.clone(N.uniforms)}else A=E.uniforms;return A}function T(E,y){let A;for(let N=0,z=u.length;N<z;N++){const B=u[N];if(B.cacheKey===y){A=B,++A.usedTimes;break}}return A===void 0&&(A=new ey(n,y,E,r),u.push(A)),A}function R(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:R,releaseShaderCache:P,programs:u,dispose:L}}function oy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ay(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Kh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $h(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,f,m,_,g){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},n[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),t++,p}function a(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(h,d,f,m,_,g){const p=o(h,d,f,m,_,g);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||ay),i.length>1&&i.sort(d||Kh),s.length>1&&s.sort(d||Kh)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function ly(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new $h,n.set(i,[o])):s>=r.length?(o=new $h,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function cy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Vt};break;case"SpotLight":e={position:new C,direction:new C,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function uy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let hy=0;function dy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function fy(n){const t=new cy,e=uy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const s=new C,r=new Zt,o=new Zt;function a(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,b=0,M=0,v=0,T=0,R=0,P=0;c.sort(dy);for(let E=0,y=c.length;E<y;E++){const A=c[E],N=A.color,z=A.intensity,B=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=N.r*z,h+=N.g*z,d+=N.b*z;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],z);P++}else if(A.isDirectionalLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const K=A.shadow,V=e.get(A);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=A.shadow.matrix,b++}i.directional[f]=G,f++}else if(A.isSpotLight){const G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(N).multiplyScalar(z),G.distance=B,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[_]=G;const K=A.shadow;if(A.map&&(i.spotLightMap[T]=A.map,T++,K.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[_]=K.matrix,A.castShadow){const V=e.get(A);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=Y,v++}_++}else if(A.isRectAreaLight){const G=t.get(A);G.color.copy(N).multiplyScalar(z),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=G,g++}else if(A.isPointLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const K=A.shadow,V=e.get(A);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,i.pointShadow[m]=V,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=A.shadow.matrix,M++}i.point[m]=G,m++}else if(A.isHemisphereLight){const G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(z),G.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[p]=G,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==M||L.numSpotShadows!==v||L.numSpotMaps!==T||L.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=P,L.directionalLength=f,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=M,L.numSpotShadows=v,L.numSpotMaps=T,L.numLightProbes=P,i.version=hy++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(M.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Zh(n){const t=new fy(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function py(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Zh(n),t.set(s,[a])):r>=o.length?(a=new Zh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const my=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gy=`uniform sampler2D shadow_pass;
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
}`;function _y(n,t,e){let i=new uu;const s=new Lt,r=new Lt,o=new Wt,a=new Pg({depthPacking:wm}),l=new Dg,c={},u=e.maxTextureSize,h={[wi]:ze,[ze]:wi,[Xe]:Xe},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:my,fragmentShader:gy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ie;m.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ye(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let p=this.type;this.render=function(R,P,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Ei),N.buffers.depth.getReversed()?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==Yn&&this.type===Yn,B=p===Yn&&this.type!==Yn;for(let Y=0,G=R.length;Y<G;Y++){const K=R[Y],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const et=V.getFrameExtents();if(s.multiply(et),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,V.mapSize.y=r.y)),V.map===null||z===!0||B===!0){const dt=this.type!==Yn?{minFilter:en,magFilter:en}:{};V.map!==null&&V.map.dispose(),V.map=new ls(s.x,s.y,dt),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const it=V.getViewportCount();for(let dt=0;dt<it;dt++){const Ct=V.getViewport(dt);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),N.viewport(o),V.updateMatrices(K,dt),i=V.getFrustum(),v(P,L,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Yn&&b(V,L),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,y,A)};function b(R,P){const L=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ls(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(P,null,L,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(P,null,L,f,_,null)}function M(R,P,L,E){let y=null;const A=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)y=A;else if(y=L.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const N=y.uuid,z=P.uuid;let B=c[N];B===void 0&&(B={},c[N]=B);let Y=B[z];Y===void 0&&(Y=y.clone(),B[z]=Y,P.addEventListener("dispose",T)),y=Y}if(y.visible=P.visible,y.wireframe=P.wireframe,E===Yn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=n.properties.get(y);N.light=L}return y}function v(R,P,L,E,y){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Yn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const z=t.update(R),B=R.material;if(Array.isArray(B)){const Y=z.groups;for(let G=0,K=Y.length;G<K;G++){const V=Y[G],et=B[V.materialIndex];if(et&&et.visible){const it=M(R,et,E,y);R.onBeforeShadow(n,R,P,L,z,it,V),n.renderBufferDirect(L,null,z,it,R,V),R.onAfterShadow(n,R,P,L,z,it,V)}}}else if(B.visible){const Y=M(R,B,E,y);R.onBeforeShadow(n,R,P,L,z,Y,null),n.renderBufferDirect(L,null,z,Y,R,null),R.onAfterShadow(n,R,P,L,z,Y,null)}}const N=R.children;for(let z=0,B=N.length;z<B;z++)v(N[z],P,L,E,y)}function T(R){R.target.removeEventListener("dispose",T);for(const L in c){const E=c[L],y=R.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const vy={[Fl]:Nl,[Bl]:Hl,[kl]:Vl,[Zs]:zl,[Nl]:Fl,[Hl]:Bl,[Vl]:kl,[zl]:Zs};function xy(n,t){function e(){let I=!1;const tt=new Wt;let rt=null;const ft=new Wt(0,0,0,0);return{setMask:function(Z){rt!==Z&&!I&&(n.colorMask(Z,Z,Z,Z),rt=Z)},setLocked:function(Z){I=Z},setClear:function(Z,q,gt,Ft,oe){oe===!0&&(Z*=Ft,q*=Ft,gt*=Ft),tt.set(Z,q,gt,Ft),ft.equals(tt)===!1&&(n.clearColor(Z,q,gt,Ft),ft.copy(tt))},reset:function(){I=!1,rt=null,ft.set(-1,0,0,0)}}}function i(){let I=!1,tt=!1,rt=null,ft=null,Z=null;return{setReversed:function(q){if(tt!==q){const gt=t.get("EXT_clip_control");q?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),tt=q;const Ft=Z;Z=null,this.setClear(Ft)}},getReversed:function(){return tt},setTest:function(q){q?st(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(q){rt!==q&&!I&&(n.depthMask(q),rt=q)},setFunc:function(q){if(tt&&(q=vy[q]),ft!==q){switch(q){case Fl:n.depthFunc(n.NEVER);break;case Nl:n.depthFunc(n.ALWAYS);break;case Bl:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case kl:n.depthFunc(n.EQUAL);break;case zl:n.depthFunc(n.GEQUAL);break;case Hl:n.depthFunc(n.GREATER);break;case Vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=q}},setLocked:function(q){I=q},setClear:function(q){Z!==q&&(tt&&(q=1-q),n.clearDepth(q),Z=q)},reset:function(){I=!1,rt=null,ft=null,Z=null,tt=!1}}}function s(){let I=!1,tt=null,rt=null,ft=null,Z=null,q=null,gt=null,Ft=null,oe=null;return{setTest:function(qt){I||(qt?st(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(qt){tt!==qt&&!I&&(n.stencilMask(qt),tt=qt)},setFunc:function(qt,Hn,bn){(rt!==qt||ft!==Hn||Z!==bn)&&(n.stencilFunc(qt,Hn,bn),rt=qt,ft=Hn,Z=bn)},setOp:function(qt,Hn,bn){(q!==qt||gt!==Hn||Ft!==bn)&&(n.stencilOp(qt,Hn,bn),q=qt,gt=Hn,Ft=bn)},setLocked:function(qt){I=qt},setClear:function(qt){oe!==qt&&(n.clearStencil(qt),oe=qt)},reset:function(){I=!1,tt=null,rt=null,ft=null,Z=null,q=null,gt=null,Ft=null,oe=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,b=null,M=null,v=null,T=null,R=null,P=new Vt(0,0,0),L=0,E=!1,y=null,A=null,N=null,z=null,B=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=K>=2);let et=null,it={};const dt=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),se=new Wt().fromArray(dt),ee=new Wt().fromArray(Ct);function j(I,tt,rt,ft){const Z=new Uint8Array(4),q=n.createTexture();n.bindTexture(I,q),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<rt;gt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(tt,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,Z):n.texImage2D(tt+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Z);return q}const at={};at[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(n.DEPTH_TEST),o.setFunc(Zs),Yt(!1),St(Vu),st(n.CULL_FACE),re(Ei);function st(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Tt(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function At(I,tt){return h[I]!==tt?(n.bindFramebuffer(I,tt),h[I]=tt,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=tt),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=tt),!0):!1}function Ot(I,tt){let rt=f,ft=!1;if(I){rt=d.get(tt),rt===void 0&&(rt=[],d.set(tt,rt));const Z=I.textures;if(rt.length!==Z.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let q=0,gt=Z.length;q<gt;q++)rt[q]=n.COLOR_ATTACHMENT0+q;rt.length=Z.length,ft=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,ft=!0);ft&&n.drawBuffers(rt)}function pe(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const Gt={[Vi]:n.FUNC_ADD,[Jp]:n.FUNC_SUBTRACT,[Qp]:n.FUNC_REVERSE_SUBTRACT};Gt[tm]=n.MIN,Gt[em]=n.MAX;const D={[nm]:n.ZERO,[im]:n.ONE,[sm]:n.SRC_COLOR,[Ul]:n.SRC_ALPHA,[um]:n.SRC_ALPHA_SATURATE,[lm]:n.DST_COLOR,[om]:n.DST_ALPHA,[rm]:n.ONE_MINUS_SRC_COLOR,[Ol]:n.ONE_MINUS_SRC_ALPHA,[cm]:n.ONE_MINUS_DST_COLOR,[am]:n.ONE_MINUS_DST_ALPHA,[hm]:n.CONSTANT_COLOR,[dm]:n.ONE_MINUS_CONSTANT_COLOR,[fm]:n.CONSTANT_ALPHA,[pm]:n.ONE_MINUS_CONSTANT_ALPHA};function re(I,tt,rt,ft,Z,q,gt,Ft,oe,qt){if(I===Ei){_===!0&&(Tt(n.BLEND),_=!1);return}if(_===!1&&(st(n.BLEND),_=!0),I!==Zp){if(I!==g||qt!==E){if((p!==Vi||v!==Vi)&&(n.blendEquation(n.FUNC_ADD),p=Vi,v=Vi),qt)switch(I){case Gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFunc(n.ONE,n.ONE);break;case Gu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Gu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,M=null,T=null,R=null,P.set(0,0,0),L=0,g=I,E=qt}return}Z=Z||tt,q=q||rt,gt=gt||ft,(tt!==p||Z!==v)&&(n.blendEquationSeparate(Gt[tt],Gt[Z]),p=tt,v=Z),(rt!==b||ft!==M||q!==T||gt!==R)&&(n.blendFuncSeparate(D[rt],D[ft],D[q],D[gt]),b=rt,M=ft,T=q,R=gt),(Ft.equals(P)===!1||oe!==L)&&(n.blendColor(Ft.r,Ft.g,Ft.b,oe),P.copy(Ft),L=oe),g=I,E=!1}function Et(I,tt){I.side===Xe?Tt(n.CULL_FACE):st(n.CULL_FACE);let rt=I.side===ze;tt&&(rt=!rt),Yt(rt),I.blending===Gs&&I.transparent===!1?re(Ei):re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const ft=I.stencilWrite;a.setTest(ft),ft&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function St(I){I!==Kp?(st(n.CULL_FACE),I!==A&&(I===Vu?n.cullFace(n.BACK):I===$p?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),A=I}function ce(I){I!==N&&(G&&n.lineWidth(I),N=I)}function pt(I,tt,rt){I?(st(n.POLYGON_OFFSET_FILL),(z!==tt||B!==rt)&&(n.polygonOffset(tt,rt),z=tt,B=rt)):Tt(n.POLYGON_OFFSET_FILL)}function zt(I){I?st(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function be(I){I===void 0&&(I=n.TEXTURE0+Y-1),et!==I&&(n.activeTexture(I),et=I)}function me(I,tt,rt){rt===void 0&&(et===null?rt=n.TEXTURE0+Y-1:rt=et);let ft=it[rt];ft===void 0&&(ft={type:void 0,texture:void 0},it[rt]=ft),(ft.type!==I||ft.texture!==tt)&&(et!==rt&&(n.activeTexture(rt),et=rt),n.bindTexture(I,tt||at[I]),ft.type=I,ft.texture=tt)}function w(){const I=it[et];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(I){se.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),se.copy(I))}function Pt(I){ee.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ee.copy(I))}function xt(I,tt){let rt=c.get(tt);rt===void 0&&(rt=new WeakMap,c.set(tt,rt));let ft=rt.get(I);ft===void 0&&(ft=n.getUniformBlockIndex(tt,I.name),rt.set(I,ft))}function lt(I,tt){const ft=c.get(tt).get(I);l.get(tt)!==ft&&(n.uniformBlockBinding(tt,ft,I.__bindingPointIndex),l.set(tt,ft))}function Nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},et=null,it={},h={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,b=null,M=null,v=null,T=null,R=null,P=new Vt(0,0,0),L=0,E=!1,y=null,A=null,N=null,z=null,B=null,se.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:Tt,bindFramebuffer:At,drawBuffers:Ot,useProgram:pe,setBlending:re,setMaterial:Et,setFlipSided:Yt,setCullFace:St,setLineWidth:ce,setPolygonOffset:pt,setScissorTest:zt,activeTexture:be,bindTexture:me,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:vt,texImage3D:Q,updateUBOMapping:xt,uniformBlockBinding:lt,texStorage2D:nt,texStorage3D:_t,texSubImage2D:X,texSubImage3D:$,compressedTexSubImage2D:W,compressedTexSubImage3D:yt,scissor:ut,viewport:Pt,reset:Nt}}function yy(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,x){return f?new OffscreenCanvas(w,x):Fr("canvas")}function _(w,x,F){let X=1;const $=me(w);if(($.width>F||$.height>F)&&(X=F/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor(X*$.width),yt=Math.floor(X*$.height);h===void 0&&(h=m(W,yt));const nt=x?m(W,yt):h;return nt.width=W,nt.height=yt,nt.getContext("2d").drawImage(w,0,0,W,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+yt+")."),nt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,x,F,X,$=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=x;if(x===n.RED&&(F===n.FLOAT&&(W=n.R32F),F===n.HALF_FLOAT&&(W=n.R16F),F===n.UNSIGNED_BYTE&&(W=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.R8UI),F===n.UNSIGNED_SHORT&&(W=n.R16UI),F===n.UNSIGNED_INT&&(W=n.R32UI),F===n.BYTE&&(W=n.R8I),F===n.SHORT&&(W=n.R16I),F===n.INT&&(W=n.R32I)),x===n.RG&&(F===n.FLOAT&&(W=n.RG32F),F===n.HALF_FLOAT&&(W=n.RG16F),F===n.UNSIGNED_BYTE&&(W=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RG8UI),F===n.UNSIGNED_SHORT&&(W=n.RG16UI),F===n.UNSIGNED_INT&&(W=n.RG32UI),F===n.BYTE&&(W=n.RG8I),F===n.SHORT&&(W=n.RG16I),F===n.INT&&(W=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGB8UI),F===n.UNSIGNED_SHORT&&(W=n.RGB16UI),F===n.UNSIGNED_INT&&(W=n.RGB32UI),F===n.BYTE&&(W=n.RGB8I),F===n.SHORT&&(W=n.RGB16I),F===n.INT&&(W=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),F===n.UNSIGNED_INT&&(W=n.RGBA32UI),F===n.BYTE&&(W=n.RGBA8I),F===n.SHORT&&(W=n.RGBA16I),F===n.INT&&(W=n.RGBA32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),x===n.RGBA){const yt=$?ta:jt.getTransfer(X);F===n.FLOAT&&(W=n.RGBA32F),F===n.HALF_FLOAT&&(W=n.RGBA16F),F===n.UNSIGNED_BYTE&&(W=yt===Qt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(w,x){let F;return w?x===null||x===os||x===Dr?F=n.DEPTH24_STENCIL8:x===Cn?F=n.DEPTH32F_STENCIL8:x===Pr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===os||x===Dr?F=n.DEPTH_COMPONENT24:x===Cn?F=n.DEPTH_COMPONENT32F:x===Pr&&(F=n.DEPTH_COMPONENT16),F}function T(w,x){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==en&&w.minFilter!==Rn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function R(w){const x=w.target;x.removeEventListener("dispose",R),L(x),x.isVideoTexture&&u.delete(x)}function P(w){const x=w.target;x.removeEventListener("dispose",P),y(x)}function L(w){const x=i.get(w);if(x.__webglInit===void 0)return;const F=w.source,X=d.get(F);if(X){const $=X[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(w),Object.keys(X).length===0&&d.delete(F)}i.remove(w)}function E(w){const x=i.get(w);n.deleteTexture(x.__webglTexture);const F=w.source,X=d.get(F);delete X[x.__cacheKey],o.memory.textures--}function y(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let $=0;$<x.__webglFramebuffer[X].length;$++)n.deleteFramebuffer(x.__webglFramebuffer[X][$]);else n.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)n.deleteFramebuffer(x.__webglFramebuffer[X]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=w.textures;for(let X=0,$=F.length;X<$;X++){const W=i.get(F[X]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(F[X])}i.remove(w)}let A=0;function N(){A=0}function z(){const w=A;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),A+=1,w}function B(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function Y(w,x){const F=i.get(w);if(w.isVideoTexture&&zt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(F,w,x);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function G(w,x){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){at(F,w,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function K(w,x){const F=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){at(F,w,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function V(w,x){const F=i.get(w);if(w.version>0&&F.__version!==w.version){st(F,w,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const et={[Cr]:n.REPEAT,[Xi]:n.CLAMP_TO_EDGE,[Xl]:n.MIRRORED_REPEAT},it={[en]:n.NEAREST,[Em]:n.NEAREST_MIPMAP_NEAREST,[to]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[Oa]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},dt={[Am]:n.NEVER,[Lm]:n.ALWAYS,[Rm]:n.LESS,[vf]:n.LEQUAL,[Cm]:n.EQUAL,[Im]:n.GEQUAL,[Pm]:n.GREATER,[Dm]:n.NOTEQUAL};function Ct(w,x){if(x.type===Cn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Rn||x.magFilter===Oa||x.magFilter===to||x.magFilter===ji||x.minFilter===Rn||x.minFilter===Oa||x.minFilter===to||x.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,et[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,et[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,et[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,it[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,it[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,dt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==to&&x.minFilter!==ji||x.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function se(w,x){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",R));const X=x.source;let $=d.get(X);$===void 0&&($={},d.set(X,$));const W=B(x);if(W!==w.__cacheKey){$[W]===void 0&&($[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[W].usedTimes++;const yt=$[w.__cacheKey];yt!==void 0&&($[w.__cacheKey].usedTimes--,yt.usedTimes===0&&E(x)),w.__cacheKey=W,w.__webglTexture=$[W].texture}return F}function ee(w,x,F){return Math.floor(Math.floor(w/F)/x)}function j(w,x,F,X){const W=w.updateRanges;if(W.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,X,x.data);else{W.sort((Q,ut)=>Q.start-ut.start);let yt=0;for(let Q=1;Q<W.length;Q++){const ut=W[yt],Pt=W[Q],xt=ut.start+ut.count,lt=ee(Pt.start,x.width,4),Nt=ee(ut.start,x.width,4);Pt.start<=xt+1&&lt===Nt&&ee(Pt.start+Pt.count-1,x.width,4)===lt?ut.count=Math.max(ut.count,Pt.start+Pt.count-ut.start):(++yt,W[yt]=Pt)}W.length=yt+1;const nt=n.getParameter(n.UNPACK_ROW_LENGTH),_t=n.getParameter(n.UNPACK_SKIP_PIXELS),vt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Q=0,ut=W.length;Q<ut;Q++){const Pt=W[Q],xt=Math.floor(Pt.start/4),lt=Math.ceil(Pt.count/4),Nt=xt%x.width,I=Math.floor(xt/x.width),tt=lt,rt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Nt),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),e.texSubImage2D(n.TEXTURE_2D,0,Nt,I,tt,rt,F,X,x.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,nt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,_t),n.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function at(w,x,F){let X=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=n.TEXTURE_3D);const $=se(w,x),W=x.source;e.bindTexture(X,w.__webglTexture,n.TEXTURE0+F);const yt=i.get(W);if(W.version!==yt.__version||$===!0){e.activeTexture(n.TEXTURE0+F);const nt=jt.getPrimaries(jt.workingColorSpace),_t=x.colorSpace===_i?null:jt.getPrimaries(x.colorSpace),vt=x.colorSpace===_i||nt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Q=_(x.image,!1,s.maxTextureSize);Q=be(x,Q);const ut=r.convert(x.format,x.colorSpace),Pt=r.convert(x.type);let xt=M(x.internalFormat,ut,Pt,x.colorSpace,x.isVideoTexture);Ct(X,x);let lt;const Nt=x.mipmaps,I=x.isVideoTexture!==!0,tt=yt.__version===void 0||$===!0,rt=W.dataReady,ft=T(x,Q);if(x.isDepthTexture)xt=v(x.format===Lr,x.type),tt&&(I?e.texStorage2D(n.TEXTURE_2D,1,xt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,xt,Q.width,Q.height,0,ut,Pt,null));else if(x.isDataTexture)if(Nt.length>0){I&&tt&&e.texStorage2D(n.TEXTURE_2D,ft,xt,Nt[0].width,Nt[0].height);for(let Z=0,q=Nt.length;Z<q;Z++)lt=Nt[Z],I?rt&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,lt.width,lt.height,ut,Pt,lt.data):e.texImage2D(n.TEXTURE_2D,Z,xt,lt.width,lt.height,0,ut,Pt,lt.data);x.generateMipmaps=!1}else I?(tt&&e.texStorage2D(n.TEXTURE_2D,ft,xt,Q.width,Q.height),rt&&j(x,Q,ut,Pt)):e.texImage2D(n.TEXTURE_2D,0,xt,Q.width,Q.height,0,ut,Pt,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,xt,Nt[0].width,Nt[0].height,Q.depth);for(let Z=0,q=Nt.length;Z<q;Z++)if(lt=Nt[Z],x.format!==vn)if(ut!==null)if(I){if(rt)if(x.layerUpdates.size>0){const gt=Ah(lt.width,lt.height,x.format,x.type);for(const Ft of x.layerUpdates){const oe=lt.data.subarray(Ft*gt/lt.data.BYTES_PER_ELEMENT,(Ft+1)*gt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Ft,lt.width,lt.height,1,ut,oe)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,lt.width,lt.height,Q.depth,ut,lt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,xt,lt.width,lt.height,Q.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,lt.width,lt.height,Q.depth,ut,Pt,lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,xt,lt.width,lt.height,Q.depth,0,ut,Pt,lt.data)}else{I&&tt&&e.texStorage2D(n.TEXTURE_2D,ft,xt,Nt[0].width,Nt[0].height);for(let Z=0,q=Nt.length;Z<q;Z++)lt=Nt[Z],x.format!==vn?ut!==null?I?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,lt.width,lt.height,ut,lt.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,xt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,lt.width,lt.height,ut,Pt,lt.data):e.texImage2D(n.TEXTURE_2D,Z,xt,lt.width,lt.height,0,ut,Pt,lt.data)}else if(x.isDataArrayTexture)if(I){if(tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,xt,Q.width,Q.height,Q.depth),rt)if(x.layerUpdates.size>0){const Z=Ah(Q.width,Q.height,x.format,x.type);for(const q of x.layerUpdates){const gt=Q.data.subarray(q*Z/Q.data.BYTES_PER_ELEMENT,(q+1)*Z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,ut,Pt,gt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,Pt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,Q.width,Q.height,Q.depth,0,ut,Pt,Q.data);else if(x.isData3DTexture)I?(tt&&e.texStorage3D(n.TEXTURE_3D,ft,xt,Q.width,Q.height,Q.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,Pt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,xt,Q.width,Q.height,Q.depth,0,ut,Pt,Q.data);else if(x.isFramebufferTexture){if(tt)if(I)e.texStorage2D(n.TEXTURE_2D,ft,xt,Q.width,Q.height);else{let Z=Q.width,q=Q.height;for(let gt=0;gt<ft;gt++)e.texImage2D(n.TEXTURE_2D,gt,xt,Z,q,0,ut,Pt,null),Z>>=1,q>>=1}}else if(Nt.length>0){if(I&&tt){const Z=me(Nt[0]);e.texStorage2D(n.TEXTURE_2D,ft,xt,Z.width,Z.height)}for(let Z=0,q=Nt.length;Z<q;Z++)lt=Nt[Z],I?rt&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,ut,Pt,lt):e.texImage2D(n.TEXTURE_2D,Z,xt,ut,Pt,lt);x.generateMipmaps=!1}else if(I){if(tt){const Z=me(Q);e.texStorage2D(n.TEXTURE_2D,ft,xt,Z.width,Z.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ut,Pt,Q)}else e.texImage2D(n.TEXTURE_2D,0,xt,ut,Pt,Q);g(x)&&p(X),yt.__version=W.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function st(w,x,F){if(x.image.length!==6)return;const X=se(w,x),$=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const W=i.get($);if($.version!==W.__version||X===!0){e.activeTexture(n.TEXTURE0+F);const yt=jt.getPrimaries(jt.workingColorSpace),nt=x.colorSpace===_i?null:jt.getPrimaries(x.colorSpace),_t=x.colorSpace===_i||yt===nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const vt=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let q=0;q<6;q++)!vt&&!Q?ut[q]=_(x.image[q],!0,s.maxCubemapSize):ut[q]=Q?x.image[q].image:x.image[q],ut[q]=be(x,ut[q]);const Pt=ut[0],xt=r.convert(x.format,x.colorSpace),lt=r.convert(x.type),Nt=M(x.internalFormat,xt,lt,x.colorSpace),I=x.isVideoTexture!==!0,tt=W.__version===void 0||X===!0,rt=$.dataReady;let ft=T(x,Pt);Ct(n.TEXTURE_CUBE_MAP,x);let Z;if(vt){I&&tt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Nt,Pt.width,Pt.height);for(let q=0;q<6;q++){Z=ut[q].mipmaps;for(let gt=0;gt<Z.length;gt++){const Ft=Z[gt];x.format!==vn?xt!==null?I?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,gt,0,0,Ft.width,Ft.height,xt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,gt,Nt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,gt,0,0,Ft.width,Ft.height,xt,lt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,gt,Nt,Ft.width,Ft.height,0,xt,lt,Ft.data)}}}else{if(Z=x.mipmaps,I&&tt){Z.length>0&&ft++;const q=me(ut[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Nt,q.width,q.height)}for(let q=0;q<6;q++)if(Q){I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ut[q].width,ut[q].height,xt,lt,ut[q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Nt,ut[q].width,ut[q].height,0,xt,lt,ut[q].data);for(let gt=0;gt<Z.length;gt++){const oe=Z[gt].image[q].image;I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,gt+1,0,0,oe.width,oe.height,xt,lt,oe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,gt+1,Nt,oe.width,oe.height,0,xt,lt,oe.data)}}else{I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,xt,lt,ut[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Nt,xt,lt,ut[q]);for(let gt=0;gt<Z.length;gt++){const Ft=Z[gt];I?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,gt+1,0,0,xt,lt,Ft.image[q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+q,gt+1,Nt,xt,lt,Ft.image[q])}}}g(x)&&p(n.TEXTURE_CUBE_MAP),W.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Tt(w,x,F,X,$,W){const yt=r.convert(F.format,F.colorSpace),nt=r.convert(F.type),_t=M(F.internalFormat,yt,nt,F.colorSpace),vt=i.get(x),Q=i.get(F);if(Q.__renderTarget=x,!vt.__hasExternalTextures){const ut=Math.max(1,x.width>>W),Pt=Math.max(1,x.height>>W);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,W,_t,ut,Pt,x.depth,0,yt,nt,null):e.texImage2D($,W,_t,ut,Pt,0,yt,nt,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),pt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,$,Q.__webglTexture,0,ce(x)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,$,Q.__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function At(w,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){const X=x.depthTexture,$=X&&X.isDepthTexture?X.type:null,W=v(x.stencilBuffer,$),yt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=ce(x);pt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,W,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,W,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,w)}else{const X=x.textures;for(let $=0;$<X.length;$++){const W=X[$],yt=r.convert(W.format,W.colorSpace),nt=r.convert(W.type),_t=M(W.internalFormat,yt,nt,W.colorSpace),vt=ce(x);F&&pt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,_t,x.width,x.height):pt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,vt,_t,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,_t,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ot(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const $=X.__webglTexture,W=ce(x);if(x.depthTexture.format===Ir)pt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(x.depthTexture.format===Lr)pt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function pe(w){const x=i.get(w),F=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const X=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=X}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const X=w.texture.mipmaps;X&&X.length>0?Ot(x.__webglFramebuffer[0],w):Ot(x.__webglFramebuffer,w)}else if(F){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=n.createRenderbuffer(),At(x.__webglDepthbuffer[X],w,!1);else{const $=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,W)}}else{const X=w.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),At(x.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,W)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(w,x,F){const X=i.get(w);x!==void 0&&Tt(X.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&pe(w)}function D(w){const x=w.texture,F=i.get(w),X=i.get(x);w.addEventListener("dispose",P);const $=w.textures,W=w.isWebGLCubeRenderTarget===!0,yt=$.length>1;if(yt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[nt]=[];for(let _t=0;_t<x.mipmaps.length;_t++)F.__webglFramebuffer[nt][_t]=n.createFramebuffer()}else F.__webglFramebuffer[nt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)F.__webglFramebuffer[nt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(yt)for(let nt=0,_t=$.length;nt<_t;nt++){const vt=i.get($[nt]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),o.memory.textures++)}if(w.samples>0&&pt(w)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let nt=0;nt<$.length;nt++){const _t=$[nt];F.__webglColorRenderbuffer[nt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[nt]);const vt=r.convert(_t.format,_t.colorSpace),Q=r.convert(_t.type),ut=M(_t.internalFormat,vt,Q,_t.colorSpace,w.isXRRenderTarget===!0),Pt=ce(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,ut,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+nt,n.RENDERBUFFER,F.__webglColorRenderbuffer[nt])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),At(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Ct(n.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)Tt(F.__webglFramebuffer[nt][_t],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t);else Tt(F.__webglFramebuffer[nt],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);g(x)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let nt=0,_t=$.length;nt<_t;nt++){const vt=$[nt],Q=i.get(vt);let ut=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ut=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),Ct(ut,vt),Tt(F.__webglFramebuffer,w,vt,n.COLOR_ATTACHMENT0+nt,ut,0),g(vt)&&p(ut)}e.unbindTexture()}else{let nt=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(nt=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,X.__webglTexture),Ct(nt,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)Tt(F.__webglFramebuffer[_t],w,x,n.COLOR_ATTACHMENT0,nt,_t);else Tt(F.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,nt,0);g(x)&&p(nt),e.unbindTexture()}w.depthBuffer&&pe(w)}function re(w){const x=w.textures;for(let F=0,X=x.length;F<X;F++){const $=x[F];if(g($)){const W=b(w),yt=i.get($).__webglTexture;e.bindTexture(W,yt),p(W),e.unbindTexture()}}}const Et=[],Yt=[];function St(w){if(w.samples>0){if(pt(w)===!1){const x=w.textures,F=w.width,X=w.height;let $=n.COLOR_BUFFER_BIT;const W=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(w),nt=x.length>1;if(nt)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const _t=w.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),nt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);const Q=i.get(x[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,F,X,0,0,F,X,$,n.NEAREST),l===!0&&(Et.length=0,Yt.length=0,Et.push(n.COLOR_ATTACHMENT0+vt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Et.push(W),Yt.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Yt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),nt)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);const Q=i.get(x[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Q,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ce(w){return Math.min(s.maxSamples,w.samples)}function pt(w){const x=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function zt(w){const x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function be(w,x){const F=w.colorSpace,X=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==tr&&F!==_i&&(jt.getTransfer(F)===Qt?(X!==vn||$!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function me(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=Gt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=pt}function Sy(n,t){function e(i,s=_i){let r;const o=jt.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===Qc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===tu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===df)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uf)return n.BYTE;if(i===hf)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===Jc)return n.INT;if(i===os)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===jr)return n.HALF_FLOAT;if(i===ff)return n.ALPHA;if(i===pf)return n.RGB;if(i===vn)return n.RGBA;if(i===Ir)return n.DEPTH_COMPONENT;if(i===Lr)return n.DEPTH_STENCIL;if(i===eu)return n.RED;if(i===nu)return n.RED_INTEGER;if(i===mf)return n.RG;if(i===iu)return n.RG_INTEGER;if(i===su)return n.RGBA_INTEGER;if(i===Vo||i===Go||i===Wo||i===Xo)if(o===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===Yl||i===ql||i===Kl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$l||i===Zl||i===Jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$l||i===Zl)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jl)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ql||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ql)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tc)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ec)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nc)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ic)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sc)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rc)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oc)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ac)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lc)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cc)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uc)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hc)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dc)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===fc||i===pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===jo)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gf||i===mc||i===gc||i===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===mc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Dr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Bf extends De{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const My=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ey=`
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

}`;class by{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Bf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ri({vertexShader:My,fragmentShader:Ey,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new Ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wy extends fs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const _=new by,g={},p=e.getContextAttributes();let b=null,M=null;const v=[],T=[],R=new Lt;let P=null;const L=new Qe;L.viewport=new Wt;const E=new Qe;E.viewport=new Wt;const y=[L,E],A=new Hg;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let at=v[j];return at===void 0&&(at=new il,v[j]=at),at.getTargetRaySpace()},this.getControllerGrip=function(j){let at=v[j];return at===void 0&&(at=new il,v[j]=at),at.getGripSpace()},this.getHand=function(j){let at=v[j];return at===void 0&&(at=new il,v[j]=at),at.getHandSpace()};function B(j){const at=T.indexOf(j.inputSource);if(at===-1)return;const st=v[at];st!==void 0&&(st.update(j.inputSource,j.frame,c||o),st.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",G);for(let j=0;j<v.length;j++){const at=T[j];at!==null&&(T[j]=null,v[j].disconnect(at))}N=null,z=null,_.reset();for(const j in g)delete g[j];t.setRenderTarget(b),f=null,d=null,h=null,s=null,M=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&(h=new XRWebGLBinding(s,e)),h!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,Tt=null,At=null;p.depth&&(At=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=p.stencil?Lr:Ir,Tt=p.stencil?Dr:os);const Ot={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};d=h.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ls(d.textureWidth,d.textureHeight,{format:vn,type:On,depthTexture:new Pf(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const st={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ls(f.framebufferWidth,f.framebufferHeight,{format:vn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(j){for(let at=0;at<j.removed.length;at++){const st=j.removed[at],Tt=T.indexOf(st);Tt>=0&&(T[Tt]=null,v[Tt].disconnect(st))}for(let at=0;at<j.added.length;at++){const st=j.added[at];let Tt=T.indexOf(st);if(Tt===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=T.length){T.push(st),Tt=Ot;break}else if(T[Ot]===null){T[Ot]=st,Tt=Ot;break}if(Tt===-1)break}const At=v[Tt];At&&At.connect(st)}}const K=new C,V=new C;function et(j,at,st){K.setFromMatrixPosition(at.matrixWorld),V.setFromMatrixPosition(st.matrixWorld);const Tt=K.distanceTo(V),At=at.projectionMatrix.elements,Ot=st.projectionMatrix.elements,pe=At[14]/(At[10]-1),Gt=At[14]/(At[10]+1),D=(At[9]+1)/At[5],re=(At[9]-1)/At[5],Et=(At[8]-1)/At[0],Yt=(Ot[8]+1)/Ot[0],St=pe*Et,ce=pe*Yt,pt=Tt/(-Et+Yt),zt=pt*-Et;if(at.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(zt),j.translateZ(pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const be=pe+pt,me=Gt+pt,w=St-zt,x=ce+(Tt-zt),F=D*Gt/me*be,X=re*Gt/me*be;j.projectionMatrix.makePerspective(w,x,F,X,be,me),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function it(j,at){at===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(at.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let at=j.near,st=j.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(st=_.depthFar)),A.near=E.near=L.near=at,A.far=E.far=L.far=st,(N!==A.near||z!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),N=A.near,z=A.far),A.layers.mask=j.layers.mask|6,L.layers.mask=A.layers.mask&3,E.layers.mask=A.layers.mask&5;const Tt=j.parent,At=A.cameras;it(A,Tt);for(let Ot=0;Ot<At.length;Ot++)it(At[Ot],Tt);At.length===2?et(A,L,E):A.projectionMatrix.copy(L.projectionMatrix),dt(j,A,Tt)};function dt(j,at,st){st===null?j.matrix.copy(at.matrixWorld):(j.matrix.copy(st.matrixWorld),j.matrix.invert(),j.matrix.multiply(at.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ur*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(j){return g[j]};let Ct=null;function se(j,at){if(u=at.getViewerPose(c||o),m=at,u!==null){const st=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Tt=!1;st.length!==A.cameras.length&&(A.cameras.length=0,Tt=!0);for(let Gt=0;Gt<st.length;Gt++){const D=st[Gt];let re=null;if(f!==null)re=f.getViewport(D);else{const Yt=h.getViewSubImage(d,D);re=Yt.viewport,Gt===0&&(t.setRenderTargetTextures(M,Yt.colorTexture,Yt.depthStencilTexture),t.setRenderTarget(M))}let Et=y[Gt];Et===void 0&&(Et=new Qe,Et.layers.enable(Gt),Et.viewport=new Wt,y[Gt]=Et),Et.matrix.fromArray(D.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(D.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(re.x,re.y,re.width,re.height),Gt===0&&(A.matrix.copy(Et.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Tt===!0&&A.cameras.push(Et)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Gt=h.getDepthInformation(st[0]);Gt&&Gt.isValid&&Gt.texture&&_.init(Gt,s.renderState)}if(At&&At.includes("camera-access")&&(t.state.unbindTexture(),h))for(let Gt=0;Gt<st.length;Gt++){const D=st[Gt].camera;if(D){let re=g[D];re||(re=new Bf,g[D]=re);const Et=h.getCameraImage(D);re.sourceTexture=Et}}}for(let st=0;st<v.length;st++){const Tt=T[st],At=v[st];Tt!==null&&At!==void 0&&At.update(Tt,at,c||o)}Ct&&Ct(j,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),m=null}const ee=new Lf;ee.setAnimationLoop(se),this.setAnimationLoop=function(j){Ct=j},this.dispose=function(){}}}const ki=new Fn,Ty=new Zt;function Ay(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,bf(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ze&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ze&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=t.get(p),M=b.envMap,v=b.envMapRotation;M&&(g.envMap.value=M,ki.copy(v),ki.x*=-1,ki.y*=-1,ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),g.envMapRotation.value.setFromMatrix4(Ty.makeRotationFromEuler(ki)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ry(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const v=M.program;i.uniformBlockBinding(b,v)}function c(b,M){let v=s[b.id];v===void 0&&(m(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",g));const T=M.program;i.updateUBOMapping(b,T);const R=t.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function u(b){const M=h();b.__bindingPointIndex=M;const v=n.createBuffer(),T=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,T,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=s[b.id],v=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,P=v.length;R<P;R++){const L=Array.isArray(v[R])?v[R]:[v[R]];for(let E=0,y=L.length;E<y;E++){const A=L[E];if(f(A,R,E,T)===!0){const N=A.__offset,z=Array.isArray(A.value)?A.value:[A.value];let B=0;for(let Y=0;Y<z.length;Y++){const G=z[Y],K=_(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,N+B,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,M,v,T){const R=b.value,P=M+"_"+v;if(T[P]===void 0)return typeof R=="number"||typeof R=="boolean"?T[P]=R:T[P]=R.clone(),!0;{const L=T[P];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return T[P]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function m(b){const M=b.uniforms;let v=0;const T=16;for(let P=0,L=M.length;P<L;P++){const E=Array.isArray(M[P])?M[P]:[M[P]];for(let y=0,A=E.length;y<A;y++){const N=E[y],z=Array.isArray(N.value)?N.value:[N.value];for(let B=0,Y=z.length;B<Y;B++){const G=z[B],K=_(G),V=v%T,et=V%K.boundary,it=V+et;v+=et,it!==0&&T-it<K.storage&&(v+=T-it),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=K.storage}}}const R=v%T;return R>0&&(v+=T-R),b.__size=v,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function g(b){const M=b.target;M.removeEventListener("dispose",g);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Cy{constructor(t={}){const{canvas:e=$m(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=Je;let R=0,P=0,L=null,E=-1,y=null;const A=new Wt,N=new Wt;let z=null;const B=new Vt(0);let Y=0,G=e.width,K=e.height,V=1,et=null,it=null;const dt=new Wt(0,0,G,K),Ct=new Wt(0,0,G,K);let se=!1;const ee=new uu;let j=!1,at=!1;const st=new Zt,Tt=new C,At=new Wt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Gt(){return L===null?V:1}let D=i;function re(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zc}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",Z,!1),D===null){const U="webgl2";if(D=re(U,S),D===null)throw re(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Et,Yt,St,ce,pt,zt,be,me,w,x,F,X,$,W,yt,nt,_t,vt,Q,ut,Pt,xt,lt,Nt;function I(){Et=new kv(D),Et.init(),xt=new Sy(D,Et),Yt=new Iv(D,Et,t,xt),St=new xy(D,Et),Yt.reversedDepthBuffer&&d&&St.buffers.depth.setReversed(!0),ce=new Vv(D),pt=new oy,zt=new yy(D,Et,St,pt,Yt,xt,ce),be=new Uv(v),me=new Bv(v),w=new qg(D),lt=new Pv(D,w),x=new zv(D,w,ce,lt),F=new Wv(D,x,w,ce),Q=new Gv(D,Yt,zt),nt=new Lv(pt),X=new ry(v,be,me,Et,Yt,lt,nt),$=new Ay(v,pt),W=new ly,yt=new py(Et),vt=new Cv(v,be,me,St,F,f,l),_t=new _y(v,F,Yt),Nt=new Ry(D,ce,Yt,St),ut=new Dv(D,Et,ce),Pt=new Hv(D,Et,ce),ce.programs=X.programs,v.capabilities=Yt,v.extensions=Et,v.properties=pt,v.renderLists=W,v.shadowMap=_t,v.state=St,v.info=ce}I();const tt=new wy(v,D);this.xr=tt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(G,K,!1))},this.getSize=function(S){return S.set(G,K)},this.setSize=function(S,U,k=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,K=U,e.width=Math.floor(S*V),e.height=Math.floor(U*V),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(G*V,K*V).floor()},this.setDrawingBufferSize=function(S,U,k){G=S,K=U,V=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(A)},this.getViewport=function(S){return S.copy(dt)},this.setViewport=function(S,U,k,H){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,U,k,H),St.viewport(A.copy(dt).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Ct)},this.setScissor=function(S,U,k,H){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,U,k,H),St.scissor(N.copy(Ct).multiplyScalar(V).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(S){St.setScissorTest(se=S)},this.setOpaqueSort=function(S){et=S},this.setTransparentSort=function(S){it=S},this.getClearColor=function(S){return S.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,k=!0){let H=0;if(S){let O=!1;if(L!==null){const J=L.texture.format;O=J===su||J===iu||J===nu}if(O){const J=L.texture.type,ct=J===On||J===os||J===Pr||J===Dr||J===Qc||J===tu,mt=vt.getClearColor(),ht=vt.getClearAlpha(),Rt=mt.r,It=mt.g,Mt=mt.b;ct?(m[0]=Rt,m[1]=It,m[2]=Mt,m[3]=ht,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Rt,_[1]=It,_[2]=Mt,_[3]=ht,D.clearBufferiv(D.COLOR,0,_))}else H|=D.COLOR_BUFFER_BIT}U&&(H|=D.DEPTH_BUFFER_BIT),k&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),vt.dispose(),W.dispose(),yt.dispose(),pt.dispose(),be.dispose(),me.dispose(),F.dispose(),lt.dispose(),Nt.dispose(),X.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",bn),tt.removeEventListener("sessionend",Fu),Ii.stop()};function rt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=ce.autoReset,U=_t.enabled,k=_t.autoUpdate,H=_t.needsUpdate,O=_t.type;I(),ce.autoReset=S,_t.enabled=U,_t.autoUpdate=k,_t.needsUpdate=H,_t.type=O}function Z(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function q(S){const U=S.target;U.removeEventListener("dispose",q),gt(U)}function gt(S){Ft(S),pt.remove(S)}function Ft(S){const U=pt.get(S).programs;U!==void 0&&(U.forEach(function(k){X.releaseProgram(k)}),S.isShaderMaterial&&X.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,H,O,J){U===null&&(U=Ot);const ct=O.isMesh&&O.matrixWorld.determinant()<0,mt=Gp(S,U,k,H,O);St.setMaterial(H,ct);let ht=k.index,Rt=1;if(H.wireframe===!0){if(ht=x.getWireframeAttribute(k),ht===void 0)return;Rt=2}const It=k.drawRange,Mt=k.attributes.position;let Ht=It.start*Rt,Jt=(It.start+It.count)*Rt;J!==null&&(Ht=Math.max(Ht,J.start*Rt),Jt=Math.min(Jt,(J.start+J.count)*Rt)),ht!==null?(Ht=Math.max(Ht,0),Jt=Math.min(Jt,ht.count)):Mt!=null&&(Ht=Math.max(Ht,0),Jt=Math.min(Jt,Mt.count));const fe=Jt-Ht;if(fe<0||fe===1/0)return;lt.setup(O,H,mt,k,ht);let ae,ne=ut;if(ht!==null&&(ae=w.get(ht),ne=Pt,ne.setIndex(ae)),O.isMesh)H.wireframe===!0?(St.setLineWidth(H.wireframeLinewidth*Gt()),ne.setMode(D.LINES)):ne.setMode(D.TRIANGLES);else if(O.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),St.setLineWidth(bt*Gt()),O.isLineSegments?ne.setMode(D.LINES):O.isLineLoop?ne.setMode(D.LINE_LOOP):ne.setMode(D.LINE_STRIP)}else O.isPoints?ne.setMode(D.POINTS):O.isSprite&&ne.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))ne.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const bt=O._multiDrawStarts,ue=O._multiDrawCounts,Xt=O._multiDrawCount,Ye=ht?w.get(ht).bytesPerElement:1,_s=pt.get(H).currentProgram.getUniforms();for(let qe=0;qe<Xt;qe++)_s.setValue(D,"_gl_DrawID",qe),ne.render(bt[qe]/Ye,ue[qe])}else if(O.isInstancedMesh)ne.renderInstances(Ht,fe,O.count);else if(k.isInstancedBufferGeometry){const bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ue=Math.min(k.instanceCount,bt);ne.renderInstances(Ht,fe,ue)}else ne.render(Ht,fe)};function oe(S,U,k){S.transparent===!0&&S.side===Xe&&S.forceSinglePass===!1?(S.side=ze,S.needsUpdate=!0,Qr(S,U,k),S.side=wi,S.needsUpdate=!0,Qr(S,U,k),S.side=Xe):Qr(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),p=yt.get(k),p.init(U),M.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==k&&S.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const H=new Set;return S.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const J=O.material;if(J)if(Array.isArray(J))for(let ct=0;ct<J.length;ct++){const mt=J[ct];oe(mt,k,O),H.add(mt)}else oe(J,k,O),H.add(J)}),p=M.pop(),H},this.compileAsync=function(S,U,k=null){const H=this.compile(S,U,k);return new Promise(O=>{function J(){if(H.forEach(function(ct){pt.get(ct).currentProgram.isReady()&&H.delete(ct)}),H.size===0){O(S);return}setTimeout(J,10)}Et.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let qt=null;function Hn(S){qt&&qt(S)}function bn(){Ii.stop()}function Fu(){Ii.start()}const Ii=new Lf;Ii.setAnimationLoop(Hn),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(S){qt=S,tt.setAnimationLoop(S),S===null?Ii.stop():Ii.start()},tt.addEventListener("sessionstart",bn),tt.addEventListener("sessionend",Fu),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(U),U=tt.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,L),p=yt.get(S,M.length),p.init(U),M.push(p),st.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ee.setFromProjectionMatrix(st,Pn,U.reversedDepth),at=this.localClippingEnabled,j=nt.init(this.clippingPlanes,at),g=W.get(S,b.length),g.init(),b.push(g),tt.enabled===!0&&tt.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&La(J,U,-1/0,v.sortObjects)}La(S,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(et,it),pe=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,pe&&vt.addToRenderList(g,S),this.info.render.frame++,j===!0&&nt.beginShadows();const k=p.state.shadowsArray;_t.render(k,S,U),j===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,O=g.transmissive;if(p.setupLights(),U.isArrayCamera){const J=U.cameras;if(O.length>0)for(let ct=0,mt=J.length;ct<mt;ct++){const ht=J[ct];Bu(H,O,S,ht)}pe&&vt.render(S);for(let ct=0,mt=J.length;ct<mt;ct++){const ht=J[ct];Nu(g,S,ht,ht.viewport)}}else O.length>0&&Bu(H,O,S,U),pe&&vt.render(S),Nu(g,S,U);L!==null&&P===0&&(zt.updateMultisampleRenderTarget(L),zt.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(v,S,U),lt.resetDefaultState(),E=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],j===!0&&nt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function La(S,U,k,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ee.intersectsSprite(S)){H&&At.setFromMatrixPosition(S.matrixWorld).applyMatrix4(st);const ct=F.update(S),mt=S.material;mt.visible&&g.push(S,ct,mt,k,At.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ee.intersectsObject(S))){const ct=F.update(S),mt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),At.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),At.copy(ct.boundingSphere.center)),At.applyMatrix4(S.matrixWorld).applyMatrix4(st)),Array.isArray(mt)){const ht=ct.groups;for(let Rt=0,It=ht.length;Rt<It;Rt++){const Mt=ht[Rt],Ht=mt[Mt.materialIndex];Ht&&Ht.visible&&g.push(S,ct,Ht,k,At.z,Mt)}}else mt.visible&&g.push(S,ct,mt,k,At.z,null)}}const J=S.children;for(let ct=0,mt=J.length;ct<mt;ct++)La(J[ct],U,k,H)}function Nu(S,U,k,H){const O=S.opaque,J=S.transmissive,ct=S.transparent;p.setupLightsView(k),j===!0&&nt.setGlobalState(v.clippingPlanes,k),H&&St.viewport(A.copy(H)),O.length>0&&Jr(O,U,k),J.length>0&&Jr(J,U,k),ct.length>0&&Jr(ct,U,k),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Bu(S,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ls(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?jr:On,minFilter:ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const J=p.state.transmissionRenderTarget[H.id],ct=H.viewport||A;J.setSize(ct.z*v.transmissionResolutionScale,ct.w*v.transmissionResolutionScale);const mt=v.getRenderTarget(),ht=v.getActiveCubeFace(),Rt=v.getActiveMipmapLevel();v.setRenderTarget(J),v.getClearColor(B),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),pe&&vt.render(k);const It=v.toneMapping;v.toneMapping=bi;const Mt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),j===!0&&nt.setGlobalState(v.clippingPlanes,H),Jr(S,k,H),zt.updateMultisampleRenderTarget(J),zt.updateRenderTargetMipmap(J),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Jt=0,fe=U.length;Jt<fe;Jt++){const ae=U[Jt],ne=ae.object,bt=ae.geometry,ue=ae.material,Xt=ae.group;if(ue.side===Xe&&ne.layers.test(H.layers)){const Ye=ue.side;ue.side=ze,ue.needsUpdate=!0,ku(ne,k,H,bt,ue,Xt),ue.side=Ye,ue.needsUpdate=!0,Ht=!0}}Ht===!0&&(zt.updateMultisampleRenderTarget(J),zt.updateRenderTargetMipmap(J))}v.setRenderTarget(mt,ht,Rt),v.setClearColor(B,Y),Mt!==void 0&&(H.viewport=Mt),v.toneMapping=It}function Jr(S,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,J=S.length;O<J;O++){const ct=S[O],mt=ct.object,ht=ct.geometry,Rt=ct.group;let It=ct.material;It.allowOverride===!0&&H!==null&&(It=H),mt.layers.test(k.layers)&&ku(mt,U,k,ht,It,Rt)}}function ku(S,U,k,H,O,J){S.onBeforeRender(v,U,k,H,O,J),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(v,U,k,H,S,J),O.transparent===!0&&O.side===Xe&&O.forceSinglePass===!1?(O.side=ze,O.needsUpdate=!0,v.renderBufferDirect(k,U,H,O,S,J),O.side=wi,O.needsUpdate=!0,v.renderBufferDirect(k,U,H,O,S,J),O.side=Xe):v.renderBufferDirect(k,U,H,O,S,J),S.onAfterRender(v,U,k,H,O,J)}function Qr(S,U,k){U.isScene!==!0&&(U=Ot);const H=pt.get(S),O=p.state.lights,J=p.state.shadowsArray,ct=O.state.version,mt=X.getParameters(S,O.state,J,U,k),ht=X.getProgramCacheKey(mt);let Rt=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?me:be).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Rt===void 0&&(S.addEventListener("dispose",q),Rt=new Map,H.programs=Rt);let It=Rt.get(ht);if(It!==void 0){if(H.currentProgram===It&&H.lightsStateVersion===ct)return Hu(S,mt),It}else mt.uniforms=X.getUniforms(S),S.onBeforeCompile(mt,v),It=X.acquireProgram(mt,ht),Rt.set(ht,It),H.uniforms=mt.uniforms;const Mt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),Hu(S,mt),H.needsLights=Xp(S),H.lightsStateVersion=ct,H.needsLights&&(Mt.ambientLightColor.value=O.state.ambient,Mt.lightProbe.value=O.state.probe,Mt.directionalLights.value=O.state.directional,Mt.directionalLightShadows.value=O.state.directionalShadow,Mt.spotLights.value=O.state.spot,Mt.spotLightShadows.value=O.state.spotShadow,Mt.rectAreaLights.value=O.state.rectArea,Mt.ltc_1.value=O.state.rectAreaLTC1,Mt.ltc_2.value=O.state.rectAreaLTC2,Mt.pointLights.value=O.state.point,Mt.pointLightShadows.value=O.state.pointShadow,Mt.hemisphereLights.value=O.state.hemi,Mt.directionalShadowMap.value=O.state.directionalShadowMap,Mt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Mt.spotShadowMap.value=O.state.spotShadowMap,Mt.spotLightMatrix.value=O.state.spotLightMatrix,Mt.spotLightMap.value=O.state.spotLightMap,Mt.pointShadowMap.value=O.state.pointShadowMap,Mt.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=It,H.uniformsList=null,It}function zu(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Yo.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Hu(S,U){const k=pt.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Gp(S,U,k,H,O){U.isScene!==!0&&(U=Ot),zt.resetTextureUnits();const J=U.fog,ct=H.isMeshStandardMaterial?U.environment:null,mt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:tr,ht=(H.isMeshStandardMaterial?me:be).get(H.envMap||ct),Rt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,It=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Mt=!!k.morphAttributes.position,Ht=!!k.morphAttributes.normal,Jt=!!k.morphAttributes.color;let fe=bi;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(fe=v.toneMapping);const ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=ae!==void 0?ae.length:0,bt=pt.get(H),ue=p.state.lights;if(j===!0&&(at===!0||S!==y)){const Ne=S===y&&H.id===E;nt.setState(H,S,Ne)}let Xt=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ue.state.version||bt.outputColorSpace!==mt||O.isBatchedMesh&&bt.batching===!1||!O.isBatchedMesh&&bt.batching===!0||O.isBatchedMesh&&bt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&bt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&bt.instancing===!1||!O.isInstancedMesh&&bt.instancing===!0||O.isSkinnedMesh&&bt.skinning===!1||!O.isSkinnedMesh&&bt.skinning===!0||O.isInstancedMesh&&bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&bt.instancingMorph===!1&&O.morphTexture!==null||bt.envMap!==ht||H.fog===!0&&bt.fog!==J||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==Rt||bt.vertexTangents!==It||bt.morphTargets!==Mt||bt.morphNormals!==Ht||bt.morphColors!==Jt||bt.toneMapping!==fe||bt.morphTargetsCount!==ne)&&(Xt=!0):(Xt=!0,bt.__version=H.version);let Ye=bt.currentProgram;Xt===!0&&(Ye=Qr(H,U,O));let _s=!1,qe=!1,fr=!1;const he=Ye.getUniforms(),an=bt.uniforms;if(St.useProgram(Ye.program)&&(_s=!0,qe=!0,fr=!0),H.id!==E&&(E=H.id,qe=!0),_s||y!==S){St.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),he.setValue(D,"projectionMatrix",S.projectionMatrix),he.setValue(D,"viewMatrix",S.matrixWorldInverse);const He=he.map.cameraPosition;He!==void 0&&He.setValue(D,Tt.setFromMatrixPosition(S.matrixWorld)),Yt.logarithmicDepthBuffer&&he.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,qe=!0,fr=!0)}if(O.isSkinnedMesh){he.setOptional(D,O,"bindMatrix"),he.setOptional(D,O,"bindMatrixInverse");const Ne=O.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),he.setValue(D,"boneTexture",Ne.boneTexture,zt))}O.isBatchedMesh&&(he.setOptional(D,O,"batchingTexture"),he.setValue(D,"batchingTexture",O._matricesTexture,zt),he.setOptional(D,O,"batchingIdTexture"),he.setValue(D,"batchingIdTexture",O._indirectTexture,zt),he.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&he.setValue(D,"batchingColorTexture",O._colorsTexture,zt));const ln=k.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Q.update(O,k,Ye),(qe||bt.receiveShadow!==O.receiveShadow)&&(bt.receiveShadow=O.receiveShadow,he.setValue(D,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(an.envMap.value=ht,an.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(an.envMapIntensity.value=U.environmentIntensity),qe&&(he.setValue(D,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&Wp(an,fr),J&&H.fog===!0&&$.refreshFogUniforms(an,J),$.refreshMaterialUniforms(an,H,V,K,p.state.transmissionRenderTarget[S.id]),Yo.upload(D,zu(bt),an,zt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Yo.upload(D,zu(bt),an,zt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(D,"center",O.center),he.setValue(D,"modelViewMatrix",O.modelViewMatrix),he.setValue(D,"normalMatrix",O.normalMatrix),he.setValue(D,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ne=H.uniformsGroups;for(let He=0,Ua=Ne.length;He<Ua;He++){const Li=Ne[He];Nt.update(Li,Ye),Nt.bind(Li,Ye)}}return Ye}function Wp(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Xp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,U,k){const H=pt.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),pt.get(S.texture).__webglTexture=U,pt.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const k=pt.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const jp=D.createFramebuffer();this.setRenderTarget=function(S,U=0,k=0){L=S,R=U,P=k;let H=!0,O=null,J=!1,ct=!1;if(S){const ht=pt.get(S);if(ht.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(ht.__webglFramebuffer===void 0)zt.setupRenderTarget(S);else if(ht.__hasExternalTextures)zt.rebindTextures(S,pt.get(S.texture).__webglTexture,pt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Mt=S.depthTexture;if(ht.__boundDepthTexture!==Mt){if(Mt!==null&&pt.has(Mt)&&(S.width!==Mt.image.width||S.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(S)}}const Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ct=!0);const It=pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[U])?O=It[U][k]:O=It[U],J=!0):S.samples>0&&zt.useMultisampledRTT(S)===!1?O=pt.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?O=It[k]:O=It,A.copy(S.viewport),N.copy(S.scissor),z=S.scissorTest}else A.copy(dt).multiplyScalar(V).floor(),N.copy(Ct).multiplyScalar(V).floor(),z=se;if(k!==0&&(O=jp),St.bindFramebuffer(D.FRAMEBUFFER,O)&&H&&St.drawBuffers(S,O),St.viewport(A),St.scissor(N),St.setScissorTest(z),J){const ht=pt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ht.__webglTexture,k)}else if(ct){const ht=U;for(let Rt=0;Rt<S.textures.length;Rt++){const It=pt.get(S.textures[Rt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Rt,It.__webglTexture,k,ht)}}else if(S!==null&&k!==0){const ht=pt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(S,U,k,H,O,J,ct,mt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(ht=ht[ct]),ht){St.bindFramebuffer(D.FRAMEBUFFER,ht);try{const Rt=S.textures[mt],It=Rt.format,Mt=Rt.type;if(!Yt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&k>=0&&k<=S.height-O&&(S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),D.readPixels(U,k,H,O,xt.convert(It),xt.convert(Mt),J))}finally{const Rt=L!==null?pt.get(L).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,H,O,J,ct,mt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(ht=ht[ct]),ht)if(U>=0&&U<=S.width-H&&k>=0&&k<=S.height-O){St.bindFramebuffer(D.FRAMEBUFFER,ht);const Rt=S.textures[mt],It=Rt.format,Mt=Rt.type;if(!Yt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ht),D.bufferData(D.PIXEL_PACK_BUFFER,J.byteLength,D.STREAM_READ),S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+mt),D.readPixels(U,k,H,O,xt.convert(It),xt.convert(Mt),0);const Jt=L!==null?pt.get(L).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,Jt);const fe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zm(D,fe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ht),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,J),D.deleteBuffer(Ht),D.deleteSync(fe),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,k=0){const H=Math.pow(2,-k),O=Math.floor(S.image.width*H),J=Math.floor(S.image.height*H),ct=U!==null?U.x:0,mt=U!==null?U.y:0;zt.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ct,mt,O,J),St.unbindTexture()};const Yp=D.createFramebuffer(),qp=D.createFramebuffer();this.copyTextureToTexture=function(S,U,k=null,H=null,O=0,J=null){J===null&&(O!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=O,O=0):J=0);let ct,mt,ht,Rt,It,Mt,Ht,Jt,fe;const ae=S.isCompressedTexture?S.mipmaps[J]:S.image;if(k!==null)ct=k.max.x-k.min.x,mt=k.max.y-k.min.y,ht=k.isBox3?k.max.z-k.min.z:1,Rt=k.min.x,It=k.min.y,Mt=k.isBox3?k.min.z:0;else{const ln=Math.pow(2,-O);ct=Math.floor(ae.width*ln),mt=Math.floor(ae.height*ln),S.isDataArrayTexture?ht=ae.depth:S.isData3DTexture?ht=Math.floor(ae.depth*ln):ht=1,Rt=0,It=0,Mt=0}H!==null?(Ht=H.x,Jt=H.y,fe=H.z):(Ht=0,Jt=0,fe=0);const ne=xt.convert(U.format),bt=xt.convert(U.type);let ue;U.isData3DTexture?(zt.setTexture3D(U,0),ue=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(zt.setTexture2DArray(U,0),ue=D.TEXTURE_2D_ARRAY):(zt.setTexture2D(U,0),ue=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Xt=D.getParameter(D.UNPACK_ROW_LENGTH),Ye=D.getParameter(D.UNPACK_IMAGE_HEIGHT),_s=D.getParameter(D.UNPACK_SKIP_PIXELS),qe=D.getParameter(D.UNPACK_SKIP_ROWS),fr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ae.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,It),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Mt);const he=S.isDataArrayTexture||S.isData3DTexture,an=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const ln=pt.get(S),Ne=pt.get(U),He=pt.get(ln.__renderTarget),Ua=pt.get(Ne.__renderTarget);St.bindFramebuffer(D.READ_FRAMEBUFFER,He.__webglFramebuffer),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ua.__webglFramebuffer);for(let Li=0;Li<ht;Li++)he&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.get(S).__webglTexture,O,Mt+Li),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.get(U).__webglTexture,J,fe+Li)),D.blitFramebuffer(Rt,It,ct,mt,Ht,Jt,ct,mt,D.DEPTH_BUFFER_BIT,D.NEAREST);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||S.isRenderTargetTexture||pt.has(S)){const ln=pt.get(S),Ne=pt.get(U);St.bindFramebuffer(D.READ_FRAMEBUFFER,Yp),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,qp);for(let He=0;He<ht;He++)he?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ln.__webglTexture,O,Mt+He):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ln.__webglTexture,O),an?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.__webglTexture,J,fe+He):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,J),O!==0?D.blitFramebuffer(Rt,It,ct,mt,Ht,Jt,ct,mt,D.COLOR_BUFFER_BIT,D.NEAREST):an?D.copyTexSubImage3D(ue,J,Ht,Jt,fe+He,Rt,It,ct,mt):D.copyTexSubImage2D(ue,J,Ht,Jt,Rt,It,ct,mt);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else an?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(ue,J,Ht,Jt,fe,ct,mt,ht,ne,bt,ae.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(ue,J,Ht,Jt,fe,ct,mt,ht,ne,ae.data):D.texSubImage3D(ue,J,Ht,Jt,fe,ct,mt,ht,ne,bt,ae):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,Ht,Jt,ct,mt,ne,bt,ae.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,Ht,Jt,ae.width,ae.height,ne,ae.data):D.texSubImage2D(D.TEXTURE_2D,J,Ht,Jt,ct,mt,ne,bt,ae);D.pixelStorei(D.UNPACK_ROW_LENGTH,Xt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ye),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_s),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fr),J===0&&U.generateMipmaps&&D.generateMipmap(ue),St.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,H=null,O=0){return Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,k,H,O)},this.initRenderTarget=function(S){pt.get(S).__webglFramebuffer===void 0&&zt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?zt.setTextureCube(S,0):S.isData3DTexture?zt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?zt.setTexture2DArray(S,0):zt.setTexture2D(S,0),St.unbindTexture()},this.resetState=function(){R=0,P=0,L=null,St.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}function Py(n){const t=new Cy({canvas:n,antialias:!0,logarithmicDepthBuffer:!1});return t.setSize(window.innerWidth,window.innerHeight),t.shadowMap.enabled=!0,t.shadowMap.type=of,t.toneMapping=lf,t.toneMappingExposure=1,t}const Jh={type:"change"},mu={type:"start"},kf={type:"end"},Co=new Yr,Qh=new qn,Dy=Math.cos(70*Or.DEG2RAD),xe=new C,Ve=2*Math.PI,te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gl=1e-6;class Iy extends jg{constructor(t,e=null){super(t,e),this.state=te.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new as,this._lastTargetPosition=new C,this._quat=new as().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wh,this._sphericalDelta=new wh,this._scale=1,this._panOffset=new C,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new C,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Uy.bind(this),this._onPointerDown=Ly.bind(this),this._onPointerUp=Oy.bind(this),this._onContextMenu=Vy.bind(this),this._onMouseWheel=By.bind(this),this._onKeyDown=ky.bind(this),this._onTouchStart=zy.bind(this),this._onTouchMove=Hy.bind(this),this._onMouseDown=Fy.bind(this),this._onMouseMove=Ny.bind(this),this._interceptControlDown=Gy.bind(this),this._interceptControlUp=Wy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Jh),this.update(),this.state=te.NONE}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ve:i>Math.PI&&(i-=Ve),s<-Math.PI?s+=Ve:s>Math.PI&&(s-=Ve),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Co.origin.copy(this.object.position),Co.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Co.direction))<Dy?this.object.lookAt(this.target):(Qh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Co.intersectPlane(Qh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gl||this._lastTargetPosition.distanceToSquared(this.target)>gl?(this.dispatchEvent(Jh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xe.copy(s).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ly(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Uy(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Oy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kf),this.state=te.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Fy(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=te.DOLLY;break;case ts.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=te.ROTATE}break;case ts.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=te.PAN}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(mu)}function Ny(n){switch(this.state){case te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function By(n){this.enabled===!1||this.enableZoom===!1||this.state!==te.NONE||(n.preventDefault(),this.dispatchEvent(mu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(kf))}function ky(n){this.enabled!==!1&&this._handleKeyDown(n)}function zy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=te.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=te.TOUCH_PAN;break;default:this.state=te.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=te.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=te.TOUCH_DOLLY_ROTATE;break;default:this.state=te.NONE}break;default:this.state=te.NONE}this.state!==te.NONE&&this.dispatchEvent(mu)}function Hy(n){switch(this._trackPointer(n),this.state){case te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=te.NONE}}function Vy(n){this.enabled!==!1&&n.preventDefault()}function Gy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xy(n,t){const e=new Iy(n,t.domElement);return e.enableDamping=!0,e.dampingFactor=.1,e.rotateSpeed=.9,e.zoomSpeed=1.2,e.enablePan=!0,e.mouseButtons.RIGHT=ts.PAN,e.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},e.saveState(),e}const Si=new Sg,de=new Qe(75,window.innerWidth/window.innerHeight,.1,5e3),Bs=new Ng(16777215,500);let Nr,Oe;function jy(n){if(!n)throw new Error("FATAL: Canvas element not provided to initScene. App cannot start.");de.position.z=80,de.position.y=30,de.updateProjectionMatrix(),Nr=Py(n),Oe=Xy(de,Nr),Bs.castShadow=!0,Bs.distance=0,Bs.decay=1,Bs.shadow.mapSize.width=2048,Bs.shadow.mapSize.height=2048;const t=new kg(16777215,.4);Si.add(t)}const Br=[{id:"sun",parentId:null,name:"Sun",radius:696340,mass:1988500,density:1408,surfaceGravity:274,color:16776960,semiMajorAxis:0,orbitalPeriod:1,eccentricity:0,texture:null,edu:{shortDescription:"The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/600px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Sun"}},{id:"mercury",parentId:"sun",name:"Mercury",radius:2440,mass:.33011,density:5427,surfaceGravity:3.7,inclination:7.005,color:8947848,semiMajorAxis:.387,orbitalPeriod:88,eccentricity:.206,texture:"/assets/8k_mercury.jpg",edu:{shortDescription:"Mercury is the smallest planet in the Solar System and closest to the Sun. Its orbit takes 88 Earth days, the shortest of all the Sun's planets.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/600px-Mercury_in_true_color.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Mercury_(planet)"}},{id:"venus",parentId:"sun",name:"Venus",radius:6052,mass:4.8675,density:5243,surfaceGravity:8.87,inclination:3.39,color:15658666,semiMajorAxis:.723,orbitalPeriod:224.7,eccentricity:.007,texture:"/assets/4k_venus_atmosphere.jpg",edu:{shortDescription:"Venus is the second planet from the Sun. It is a rocky planet with the densest atmosphere of all the rocky bodies in the Solar System, and the only one with a mass and size that is close to that of its orbital neighbour Earth.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/600px-Venus-real_color.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Venus"}},{id:"earth",parentId:"sun",name:"Earth",radius:6371,mass:5.97237,density:5514,surfaceGravity:9.807,inclination:0,color:5083390,semiMajorAxis:1,orbitalPeriod:365.2,eccentricity:.017,texture:"/assets/earth.jpeg",orbitalElements:{aKm:149598023,e:.0167086,iDeg:5e-5,lanDeg:-11.26064,argPeriDeg:114.20783,meanAnomalyDeg:358.617,epochISO:"2000-01-01T12:00:00Z"},edu:{shortDescription:"Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land with the remaining 70.8% being covered with water.",thumbnail:"assets/earth.jpeg",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/600px-The_Blue_Marble_%28remastered%29.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Earth",sourceName:"Wikipedia",license:"CC BY-SA 3.0"}},{id:"mars",parentId:"sun",name:"Mars",radius:3390,mass:.64171,density:3933,surfaceGravity:3.721,inclination:1.85,color:16711680,semiMajorAxis:1.524,orbitalPeriod:687,eccentricity:.093,texture:"/assets/8k_mars.jpg",edu:{shortDescription:"Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Mars"}},{id:"jupiter",parentId:"sun",name:"Jupiter",radius:69911,mass:1898.19,density:1326,surfaceGravity:24.79,inclination:1.305,color:16767149,semiMajorAxis:5.204,orbitalPeriod:4331,axialTilt:3.08,eccentricity:.048,texture:"/assets/2k_jupiter.jpg",rings:{type:"jupiter",color:10193792,bands:[{innerRadius:92e3,outerRadius:122500,type:"halo"},{innerRadius:122500,outerRadius:129e3,type:"main"},{innerRadius:129e3,outerRadius:182e3,type:"gossamer"},{innerRadius:129e3,outerRadius:226e3,type:"gossamer"}]},edu:{shortDescription:"Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Jupiter_New_Horizons.jpg/600px-Jupiter_New_Horizons.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Jupiter"}},{id:"saturn",parentId:"sun",name:"Saturn",radius:58232,mass:568.34,density:687,surfaceGravity:10.44,inclination:2.485,color:15787464,semiMajorAxis:9.582,orbitalPeriod:10747,axialTilt:26.73,eccentricity:.054,texture:"/assets/8k_saturn.jpg",rings:{type:"saturn",texture:"/assets/8k_saturn_ring_alpha.jpg",color:16776938,bands:[{innerRadius:74658,outerRadius:92e3},{innerRadius:92e3,outerRadius:117580},{innerRadius:122170,outerRadius:136775}]},edu:{shortDescription:"Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Saturn"}},{id:"uranus",parentId:"sun",name:"Uranus",radius:25362,mass:86.813,density:1270,surfaceGravity:8.69,inclination:.772,color:11525109,semiMajorAxis:19.229,orbitalPeriod:30589,axialTilt:97.92,eccentricity:.047,texture:"/assets/2k_uranus.jpg",rings:{type:"uranus",color:3556687,bands:[{innerRadius:41836,outerRadius:41838},{innerRadius:42233,outerRadius:42236},{innerRadius:42568,outerRadius:42572},{innerRadius:44714,outerRadius:44722},{innerRadius:45657,outerRadius:45665},{innerRadius:47174,outerRadius:47176},{innerRadius:47625,outerRadius:47629},{innerRadius:48297,outerRadius:48303},{innerRadius:51120,outerRadius:51178}]},edu:{shortDescription:"Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares (Mars), grandfather of Zeus (Jupiter) and father of Cronus (Saturn).",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/600px-Uranus2.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Uranus"}},{id:"neptune",parentId:"sun",name:"Neptune",radius:24622,mass:102.413,density:1638,surfaceGravity:11.15,inclination:1.769,color:4022005,semiMajorAxis:30.109,orbitalPeriod:59800,axialTilt:29.6,eccentricity:.009,texture:"/assets/2k_neptune.jpg",rings:{type:"neptune",color:6323083,bands:[{innerRadius:40900,outerRadius:42900},{innerRadius:53143,outerRadius:53257},{innerRadius:53200,outerRadius:57200},{innerRadius:62914,outerRadius:62950}],arcs:[{innerRadius:62914,outerRadius:62950,thetaStart:247*Math.PI/180,thetaLength:10*Math.PI/180},{innerRadius:62914,outerRadius:62950,thetaStart:261*Math.PI/180,thetaLength:3*Math.PI/180},{innerRadius:62914,outerRadius:62950,thetaStart:265*Math.PI/180,thetaLength:1*Math.PI/180},{innerRadius:62914,outerRadius:62950,thetaStart:276*Math.PI/180,thetaLength:4*Math.PI/180},{innerRadius:62914,outerRadius:62950,thetaStart:284.5*Math.PI/180,thetaLength:1*Math.PI/180}]},edu:{shortDescription:"Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/600px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Neptune"}},{id:"moon",parentId:"earth",name:"Moon",radius:1737,mass:.07346,density:3344,surfaceGravity:1.62,inclination:5.145,color:13421772,semiMajorAxis:0,semiMajorAxisKm:384400,orbitalPeriod:27.3,eccentricity:.0549,texture:null,edu:{shortDescription:"The Moon is Earth's only natural satellite. It is the fifth largest satellite in the Solar System, and the largest and most massive relative to its parent planet.",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/600px-FullMoon2010.jpg",readMoreUrl:"https://en.wikipedia.org/wiki/Moon"}},{id:"io",parentId:"jupiter",name:"Io",radius:1821,color:15059025,semiMajorAxis:0,semiMajorAxisKm:421600,orbitalPeriod:1.77,eccentricity:.0041,texture:null},{id:"europa",parentId:"jupiter",name:"Europa",radius:1560,color:9141634,semiMajorAxis:0,semiMajorAxisKm:670900,orbitalPeriod:3.55,eccentricity:.009,texture:null},{id:"ganymede",parentId:"jupiter",name:"Ganymede",radius:2634,color:10393486,semiMajorAxis:0,semiMajorAxisKm:107e4,orbitalPeriod:7.15,eccentricity:.0013,texture:null},{id:"callisto",parentId:"jupiter",name:"Callisto",radius:2410,color:6052956,semiMajorAxis:0,semiMajorAxisKm:1883e3,orbitalPeriod:16.69,eccentricity:.0074,texture:null},{id:"mimas",parentId:"saturn",name:"Mimas",radius:198,color:13421772,semiMajorAxis:0,semiMajorAxisKm:185539,orbitalPeriod:.94,eccentricity:.0196,texture:null},{id:"enceladus",parentId:"saturn",name:"Enceladus",radius:250,color:13421772,semiMajorAxis:0,semiMajorAxisKm:238042,orbitalPeriod:1.4,eccentricity:.0047,texture:null},{id:"titan",parentId:"saturn",name:"Titan",radius:2575,color:13421772,semiMajorAxis:0,semiMajorAxisKm:1221865,orbitalPeriod:16,eccentricity:.0288,texture:null},{id:"iapetus",parentId:"saturn",name:"Iapetus",radius:718,color:13421772,semiMajorAxis:0,semiMajorAxisKm:3560854,orbitalPeriod:79.33,eccentricity:.0283,texture:null},{id:"miranda",parentId:"uranus",name:"Miranda",radius:236,color:13421772,semiMajorAxis:0,semiMajorAxisKm:129846,orbitalPeriod:1.413,eccentricity:.0013,texture:null},{id:"ariel",parentId:"uranus",name:"Ariel",radius:579,color:13421772,semiMajorAxis:0,semiMajorAxisKm:190929,orbitalPeriod:2.52,eccentricity:.0012,texture:null},{id:"umbriel",parentId:"uranus",name:"Umbriel",radius:585,color:13421772,semiMajorAxis:0,semiMajorAxisKm:265986,orbitalPeriod:4.144,eccentricity:.0039,texture:null},{id:"titania",parentId:"uranus",name:"Titania",radius:789,color:13421772,semiMajorAxis:0,semiMajorAxisKm:436298,orbitalPeriod:8.706,eccentricity:.0011,texture:null},{id:"proteus",parentId:"neptune",name:"Proteus",radius:209,color:13421772,semiMajorAxis:0,semiMajorAxisKm:117600,orbitalPeriod:1.122,eccentricity:5e-4,texture:null},{id:"triton",parentId:"neptune",name:"Triton",radius:1350,color:13421772,semiMajorAxis:0,semiMajorAxisKm:354760,orbitalPeriod:-5.877,eccentricity:16e-6,texture:null},{id:"nereid",parentId:"neptune",name:"Nereid",radius:170,color:13421772,semiMajorAxis:0,semiMajorAxisKm:5513400,orbitalPeriod:360.13,eccentricity:.7507,texture:null}];function Dn(n){return n/8e3}const td=1496e8;function Yy(n){return typeof n!="number"||!isFinite(n)?"N/A":(n/1e3).toFixed(2)+" km/s"}function qy(n){const t=n>>16&255,e=n>>8&255,i=n&255;return .299*t+.587*e+.114*i<128?7522559:255}const Ky="/solarsystemsim25/assets/8k_saturn_ring_alpha-DR6bZgJr.jpg",ed=new Set;function qo(n,...t){ed.has(n)||(ed.add(n),console.warn(...t))}function nd(n,t,e){if(!n||typeof n.setPositions!="function")return;const i=!!e?.isSegments,s=e?.nameForWarnings??"geometry";if(!t){n.visible=!1;return}const r=t.length??0;if(r===0){n.visible=!1;return}if(r%3!==0){qo(`invalid_len_${s}`,`[safeSetPositions] skipping invalid positions length=${r} for ${s} (expected multiple of 3).`),n.visible=!1;return}if(i&&r%6!==0){qo(`invalid_segments_len_${s}`,`[safeSetPositions] skipping invalid segments length=${r} for ${s} (expected multiple of 6).`),n.visible=!1;return}try{n.setPositions(t),n.visible=!0}catch(o){qo(`setPositions_throw_${s}`,`[safeSetPositions] setPositions failed for ${s}:`,o),n.visible=!1}}function Ln(n,t={}){n&&(n.userData=n.userData||{},n.userData.data||(n.userData.data=t))}function $y(n,t){const e=n.rings,i=new Zn;if(t.add(i),i.rotation.x=Math.PI/2,n.axialTilt){const l=n.axialTilt*(Math.PI/180);i.rotation.z=l}const s=e.bands.find(l=>l.type==="main"),r=e.bands.find(l=>l.type==="halo"),o=e.bands.filter(l=>l.type==="gossamer"),a=(l,c,u,h,d,f)=>{const m=Dn(l),_=Dn(c),g=[];for(let v=0;v<u;v++){const T=Math.random()*2*Math.PI,R=Or.randFloat(m,_),P=R*Math.cos(T),L=R*Math.sin(T),E=(Math.random()-.5)*.05;g.push(P,L,E)}const p=new Ie;p.setAttribute("position",new Se(g,3));const b=new hu({color:h,size:d,transparent:!0,opacity:f,blending:Ll});return new Cf(p,b)};if(s){const l=a(s.innerRadius,s.outerRadius,2e4,e.color,.02,.05);Ln(l,{name:`${n.name} Main Ring`}),i.add(l)}if(r){const l=a(r.innerRadius,r.outerRadius,1e4,e.color,.02,.02);Ln(l,{name:`${n.name} Halo Ring`}),i.add(l)}o.forEach(l=>{const c=a(l.innerRadius,l.outerRadius,15e3,e.color,.015,.01);Ln(c,{name:`${n.name} Gossamer Ring`}),i.add(c)})}function Zy(n,t,e){const i=n.rings,s=new Zn;if(t.add(s),s.rotation.x=Math.PI/2,n.axialTilt){const c=n.axialTilt*(Math.PI/180);s.rotation.z=c}const r=Dn(i.bands[0].innerRadius),o=Dn(i.bands[i.bands.length-1].outerRadius),a=new nr(r,o,256),l=()=>{console.warn("Saturn's ring texture failed to load. Creating a fallback non-textured ring.");const c=new Jn({color:i.color,side:Xe,transparent:!0,opacity:.5,roughness:.8,metalness:.1}),u=new ye(a,c);Ln(u,{name:`${n.name} Rings (Fallback)`}),s.add(u)};e.load(Ky,c=>{c.colorSpace=Je;const u=new Jn({map:c,alphaMap:c,color:i.color,side:Xe,transparent:!0,roughness:.4,metalness:.1}),h=new ye(a,u);Ln(h,{name:`${n.name} Rings`}),s.add(h)},void 0,()=>{l()})}function Jy(n,t){const e=n.rings,i=new Zn;if(t.add(i),i.rotation.x=Math.PI/2,n.axialTilt){const c=n.axialTilt*(Math.PI/180);i.rotation.z=c}const s=document.createElement("canvas"),r=s.getContext("2d");s.width=128,s.height=1;const o=r.createImageData(128,1);for(let c=0;c<o.data.length;c+=4){const u=Math.random()*100+155;o.data[c]=u,o.data[c+1]=u,o.data[c+2]=u,o.data[c+3]=255}r.putImageData(o,0,0);const a=new du(s);a.wrapS=Cr,a.repeat.x=8;const l=new Jn({color:e.color,side:Xe,transparent:!0,opacity:.7,roughness:.8,metalness:.2,alphaMap:a});e.bands.forEach(c=>{const u=Dn(c.innerRadius),h=Dn(c.outerRadius),d=new nr(u,h,128),f=new ye(d,l);Ln(f,{name:`${n.name} Ring (${c.type})`}),i.add(f)})}function Qy(n,t){const e=n.rings,i=new Zn;if(t.add(i),i.rotation.x=Math.PI/2,n.axialTilt){const u=n.axialTilt*(Math.PI/180);i.rotation.z=u}const s=document.createElement("canvas"),r=s.getContext("2d");s.width=256,s.height=1;const o=r.createImageData(256,1);for(let u=0;u<o.data.length;u+=4){const h=Math.random()>.6?Math.random()*80+20:0;o.data[u]=h,o.data[u+1]=h,o.data[u+2]=h,o.data[u+3]=255}r.putImageData(o,0,0);const a=new du(s);a.wrapS=Cr,a.repeat.x=32;const l=new Jn({color:e.color,side:Xe,transparent:!0,opacity:.5,roughness:.9,metalness:.1,alphaMap:a});e.bands.forEach(u=>{const h=Dn(u.innerRadius),d=Dn(u.outerRadius),f=new nr(h,d,256),m=new ye(f,l);Ln(m,{name:`${n.name} Ring (${u.type})`}),i.add(m)});const c=new Jn({color:new Vt(e.color).multiplyScalar(1.8),side:Xe,transparent:!0,opacity:1,roughness:.8,metalness:.2});e.arcs.forEach((u,h)=>{const d=Dn(u.innerRadius),f=Dn(u.outerRadius),m=new nr(d,f,128,1,u.thetaStart,u.thetaLength),_=new ye(m,c);Ln(_,{name:`${n.name} Ring Arc ${h+1}`}),i.add(_)})}function tS(n,t,e){if(n.rings)switch(n.rings.type){case"jupiter":$y(n,t);break;case"saturn":Zy(n,t,e);break;case"uranus":Jy(n,t);break;case"neptune":Qy(n,t);break;default:console.warn(`Unknown ring type for planet ${n.name}`)}}const eS=16;function id(){const n=eS,t=document.createElement("canvas");t.width=t.height=n;const e=t.getContext("2d");return e.fillStyle="#111",e.fillRect(0,0,n,n),e.fillStyle="#444",e.fillRect(2,2,n-4,n-4),new du(t)}async function sd(n){if(!n)return console.warn("[safeLoadTexture] called with empty name — returning placeholder texture."),id();const e=`/solarsystemsim25/assets/${encodeURIComponent(n)}`;return new Promise(i=>{new Df().load(e,r=>i(r),void 0,r=>{console.error(`[safeLoadTexture] failed to load "${e}". Using placeholder.`,r),i(id())})})}async function nS(){const n=new Df,t=[],e=[],i=new Map;let s;for(const c of Br){const u=new Zn;let h;if(c.name==="Sun"){const M=await sd(c.texture);h=new Jn({emissive:16776960,emissiveIntensity:1.5,color:16776960,map:M,emissiveMap:M})}else{const M=await sd(c.texture);h=new Jn({color:c.color||16777215,map:M})}const d=new Af,f=[{segments:64,distance:0},{segments:32,distance:20},{segments:16,distance:100}];for(const M of f){const v=new zs(1,M.segments,M.segments),T=new ye(v,h);T.castShadow=c.name!=="Sun",T.receiveShadow=c.name!=="Sun",d.addLevel(T,M.distance)}const m=d;c.name==="Sun"&&(s=m,s.add(Bs));const _=c.name==="Sun"?16766720:qy(c.color),g=new lu({color:_,transparent:!0,opacity:.7,side:ze}),p=new ye(new zs(1.2,32,32),g);p.visible=!1,m.add(p),m.userData={id:c.id,name:c.name,type:c.parentId==="sun"||c.parentId===null?"planet":"moon",data:c,glowMesh:p},u.add(m);const b={...c,group:u,mesh:m,physicsPosition:new C};t.push(b),e.push(m),i.set(c.id,{data:c,group:u,mesh:m,physicsPosition:b.physicsPosition}),tS(c,u,n)}t.forEach(c=>{if(c.parentId&&c.parentId!=="sun"&&c.parentId!==null){const u=i.get(c.parentId);u&&u.group.add(c.group)}else Si.add(c.group)});function r(){const c=[];for(let f=0;f<1e4;f++){const m=(Math.random()-.5)*4e3,_=(Math.random()-.5)*4e3,g=(Math.random()-.5)*4e3;c.push(m,_,g)}const u=new Ie;u.setAttribute("position",new Se(c,3));const h=new hu({color:16777215,size:.1}),d=new Cf(u,h);Si.add(d)}function o(){const u=new zs(.05,6,6),h=new Jn({color:8947848,roughness:.8}),d={u_time:{value:0}};h.onBeforeCompile=M=>{M.uniforms.u_time=d.u_time,M.vertexShader=`
                uniform float u_time;
                attribute vec4 instanceParams;
                attribute float instanceYOffset;
            `+M.vertexShader,M.vertexShader=M.vertexShader.replace("#include <begin_vertex>",`
                #include <begin_vertex>
                float angle = u_time * instanceParams.y + instanceParams.z;
                transformed.x += cos(angle) * instanceParams.x;
                transformed.z += sin(angle) * instanceParams.x;
                transformed.y += instanceYOffset;
                transformed *= instanceParams.w;
                `)};const f=new ph(u,h,5e3);Ln(f,{name:"Asteroid Belt"}),f.instanceMatrix.setUsage(Fa);const m=150,_=2.2*m,g=3.2*m,p=new Float32Array(5e3*4),b=new Float32Array(5e3);for(let M=0;M<5e3;M++){const v=Or.randFloat(_,g),T=(Math.random()*.2+.05)*(Math.random()>.5?1:-1),R=Math.random()*Math.PI*2,P=Math.random()*.5+.5,L=Or.randFloat(-.5,.5);p[M*4+0]=v,p[M*4+1]=T,p[M*4+2]=R,p[M*4+3]=P,b[M]=L}return u.setAttribute("instanceParams",new na(p,4).setUsage(Fa)),u.setAttribute("instanceYOffset",new na(b,1).setUsage(Fa)),f.instanceMatrix.needsUpdate=!1,Si.add(f),d}function a(){const h=new zs(.5,6,6),d=new Jn({color:4482696,transparent:!0,opacity:.5}),f=new ph(h,d,1e3);Ln(f,{name:"Oort Cloud"});const m=new Te;for(let _=0;_<1e3;_++){const g=Math.random(),p=Math.random(),b=2*Math.PI*g,M=Math.acos(2*p-1),v=1500*Math.sin(M)*Math.cos(b),T=1500*Math.sin(M)*Math.sin(b),R=1500*Math.cos(M);m.position.set(v,T,R),m.updateMatrix(),f.setMatrixAt(_,m.matrix)}f.instanceMatrix.needsUpdate=!0,Si.add(f)}r();const l=o();return a(),{celestialObjects:t,selectableObjects:e,bodyMap:i,sun:s,asteroidUniforms:l}}const kr=document.getElementById("infoPanel");document.getElementById("info-name");document.getElementById("info-controls");document.getElementById("info-image");document.getElementById("info-link");document.getElementById("info-short-desc");document.getElementById("info-basic-stats");document.getElementById("info-orbital-chars");document.getElementById("info-advanced-details");document.getElementById("advanced-details-toggle");document.getElementById("advanced-details-content");document.getElementById("play-pause-btn");const zf=document.getElementById("reset-btn"),iS=document.getElementById("shadow-toggle"),sS=document.querySelector("#bg");document.getElementById("selection-panel");const rS=document.getElementById("celestialSelector"),wa=document.getElementById("celestial-selector-menu"),rd=document.getElementById("free-camera-btn");document.getElementById("help-button");const Ko=document.getElementById("help-overlay"),oS=document.getElementById("help-overlay-close"),aS=document.getElementById("time-controls");document.getElementById("time-scale-label");document.getElementById("time-step-backward");document.getElementById("time-scale-slider");document.getElementById("time-step-forward");document.querySelectorAll(".time-preset");const Hf=document.getElementById("debug-hud");document.getElementById("debug-preset");document.getElementById("debug-dpr");document.getElementById("debug-avg-ms");document.getElementById("debug-scale");const Kn=document.getElementById("quick-access-toolbar"),Vf=document.getElementById("small-info-card");document.getElementById("card-thumb");document.getElementById("card-title");const od=document.getElementById("card-stats"),ad=document.getElementById("btn-frame"),ra=document.getElementById("btn-follow"),Po=document.getElementById("btn-orbit");document.getElementById("performance-preset");const lS=document.getElementById("mainPanel");var ni=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return n},Out:function(n){return n},InOut:function(n){return n}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var t=1.70158;return n===1?1:n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return n===0?0:--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}}),Bounce:Object.freeze({In:function(n){return 1-ni.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?ni.Bounce.In(n*2)*.5:ni.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(t){return Math.pow(t,n)},Out:function(t){return 1-Math.pow(1-t,n)},InOut:function(t){return t<.5?Math.pow(t*2,n)/2:(1-Math.pow(2-t*2,n))/2+.5}}}}),Er=function(){return performance.now()},cS=(function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},n.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},n.prototype.update=function(t,e){t===void 0&&(t=Er()),e===void 0&&(e=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var s=0;s<i.length;s++){var r=this._tweens[i[s]],o=!e;r&&r.update(t,o)===!1&&!e&&delete this._tweens[i[s]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n})(),Ec={Linear:function(n,t){var e=n.length-1,i=e*t,s=Math.floor(i),r=Ec.Utils.Linear;return t<0?r(n[0],n[1],i):t>1?r(n[e],n[e-1],e-i):r(n[s],n[s+1>e?e:s+1],i-s)},Utils:{Linear:function(n,t,e){return(t-n)*e+n}}},Gf=(function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n})(),bc=new cS,oa=(function(){function n(t,e){e===void 0&&(e=bc),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=ni.Linear.None,this._interpolationFunction=Ec.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Gf.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},n.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},n.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},n.prototype.start=function(t,e){if(t===void 0&&(t=Er()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var s={};for(var r in this._valuesEnd)s[r]=this._valuesEnd[r];this._valuesEnd=s}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},n.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},n.prototype._setupProperties=function(t,e,i,s,r){for(var o in i){var a=t[o],l=Array.isArray(a),c=l?"array":typeof a,u=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(u){var h=i[o];if(h.length===0)continue;for(var d=[a],f=0,m=h.length;f<m;f+=1){var _=this._handleRelativeValue(a,h[f]);if(isNaN(_)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(_)}u&&(i[o]=d)}if((c==="object"||l)&&a&&!u){e[o]=l?[]:{};var g=a;for(var p in g)e[o][p]=g[p];s[o]=l?[]:{};var h=i[o];if(!this._isDynamic){var b={};for(var p in h)b[p]=h[p];i[o]=h=b}this._setupProperties(g,e[o],h,s[o],r)}else(typeof e[o]>"u"||r)&&(e[o]=a),l||(e[o]*=1),u?s[o]=i[o].slice().reverse():s[o]=e[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(t){return t===void 0&&(t=Er()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},n.prototype.resume=function(t){return t===void 0&&(t=Er()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},n.prototype.group=function(t){return t===void 0&&(t=bc),this._group=t,this},n.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},n.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},n.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},n.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},n.prototype.easing=function(t){return t===void 0&&(t=ni.Linear.None),this._easingFunction=t,this},n.prototype.interpolation=function(t){return t===void 0&&(t=Ec.Linear),this._interpolationFunction=t,this},n.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},n.prototype.onStart=function(t){return this._onStartCallback=t,this},n.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},n.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},n.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},n.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},n.prototype.onStop=function(t){return this._onStopCallback=t,this},n.prototype.update=function(t,e){var i=this,s;if(t===void 0&&(t=Er()),e===void 0&&(e=!0),this._isPaused)return!0;var r,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>o)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=t-this._startTime,l=this._duration+((s=this._repeatDelayTime)!==null&&s!==void 0?s:this._delayTime),c=this._duration+this._repeat*l,u=function(){if(i._duration===0||a>c)return 1;var g=Math.trunc(a/l),p=a-g*l,b=Math.min(p/i._duration,1);return b===0&&a===i._duration?1:b},h=u(),d=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||a>=this._duration)if(this._repeat>0){var f=Math.min(Math.trunc((a-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=f);for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*f,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var m=0,_=this._chainedTweens.length;m<_;m++)this._chainedTweens[m].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(t,e,i,s){for(var r in i)if(e[r]!==void 0){var o=e[r]||0,a=i[r],l=Array.isArray(t[r]),c=Array.isArray(a),u=!l&&c;u?t[r]=this._interpolationFunction(a,s):typeof a=="object"&&a?this._updateProperties(t[r],o,a,s):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(t[r]=o+(a-o)*s))}},n.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},n.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],i=this._valuesEnd[t];typeof i=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(i):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},n})();Gf.nextId;var Nn=bc;Nn.getAll.bind(Nn);Nn.removeAll.bind(Nn);Nn.add.bind(Nn);Nn.remove.bind(Nn);var uS=Nn.update.bind(Nn);const Do=150;function _l(n,t){if(!n||typeof n.x!="number"||typeof n.y!="number"||typeof n.z!="number")return console.warn("calculateDisplayPositionForPreset: Invalid positionAu:",n),new C(0,0,0);if(!t||!["realistic","educational","hybrid"].includes(t))return console.warn("calculateDisplayPositionForPreset: Invalid preset:",t),new C(0,0,0);try{const e=n.length();if(e===0)return new C(0,0,0);if(e<0)return console.warn("calculateDisplayPositionForPreset: Negative distanceAu:",e),new C(0,0,0);let i;switch(t){case"realistic":i=e*Do;break;case"educational":i=Math.pow(e,.6)*Do;break;case"hybrid":i=Math.log1p(Math.max(e,Number.EPSILON))*Do;break;default:console.warn("calculateDisplayPositionForPreset: Unknown preset:",t),i=e*Do}return isFinite(i)?new C().copy(n).setLength(i):(console.warn("calculateDisplayPositionForPreset: Invalid displayDistance:",i),new C(0,0,0))}catch(e){return console.warn("calculateDisplayPositionForPreset: Error during calculation:",e),new C(0,0,0)}}function aa(n,t){if(!n||typeof n.x!="number"||typeof n.y!="number"||typeof n.z!="number")return console.warn("calculateDisplayPosition: Invalid positionAu:",n),new C(0,0,0);if(!t||typeof t.active!="boolean")return console.warn("calculateDisplayPosition: Invalid transition object:",t),new C(0,0,0);try{if(t.active){const e=_l(n,t.fromPreset),i=_l(n,t.toPreset);return!e||typeof e.x!="number"||!i||typeof i.x!="number"?(console.warn("calculateDisplayPosition: Invalid intermediate positions in transition"),new C(0,0,0)):new C().lerpVectors(e,i,t.progress)}else return _l(n,t.toPreset)}catch(e){return console.warn("calculateDisplayPosition: Error during calculation:",e),new C(0,0,0)}}const hS=5e-6,dS=2e-4,fS=1e-4;function vl(n,t){switch(t){case"realistic":return n*hS;case"educational":return n*dS;case"hybrid":return n*fS}}function pS(n,t){if(t.active){const e=vl(n,t.fromPreset),i=vl(n,t.toPreset);return e+(i-e)*t.progress}else return vl(n,t.toPreset)}const mS=n=>{let t;const e=new Set,i=(c,u)=>{const h=typeof c=="function"?c(t):c;if(!Object.is(h,t)){const d=t;t=u??(typeof h!="object"||h===null)?h:Object.assign({},t,h),e.forEach(f=>f(t,d))}},s=()=>t,a={setState:i,getState:s,getInitialState:()=>l,subscribe:c=>(e.add(c),()=>e.delete(c))},l=t=n(i,s,a);return a},gS=(n=>mS),_S=n=>(t,e,i)=>{const s=i.subscribe;return i.subscribe=((o,a,l)=>{let c=o;if(a){const u=l?.equalityFn||Object.is;let h=o(i.getState());c=d=>{const f=o(d);if(!u(h,f)){const m=h;a(h=f,m)}},l?.fireImmediately&&a(h,h)}return s(c)}),n(t,e,i)},vS=_S;var Wf=Symbol.for("immer-nothing"),ld=Symbol.for("immer-draftable"),rn=Symbol.for("immer-state");function _n(n,...t){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var ir=Object.getPrototypeOf;function sr(n){return!!n&&!!n[rn]}function cs(n){return n?Xf(n)||Array.isArray(n)||!!n[ld]||!!n.constructor?.[ld]||Kr(n)||Aa(n):!1}var xS=Object.prototype.constructor.toString();function Xf(n){if(!n||typeof n!="object")return!1;const t=ir(n);if(t===null)return!0;const e=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return e===Object?!0:typeof e=="function"&&Function.toString.call(e)===xS}function la(n,t){Ta(n)===0?Reflect.ownKeys(n).forEach(e=>{t(e,n[e],n)}):n.forEach((e,i)=>t(i,e,n))}function Ta(n){const t=n[rn];return t?t.type_:Array.isArray(n)?1:Kr(n)?2:Aa(n)?3:0}function wc(n,t){return Ta(n)===2?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function jf(n,t,e){const i=Ta(n);i===2?n.set(t,e):i===3?n.add(e):n[t]=e}function yS(n,t){return n===t?n!==0||1/n===1/t:n!==n&&t!==t}function Kr(n){return n instanceof Map}function Aa(n){return n instanceof Set}function Hi(n){return n.copy_||n.base_}function Tc(n,t){if(Kr(n))return new Map(n);if(Aa(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const e=Xf(n);if(t===!0||t==="class_only"&&!e){const i=Object.getOwnPropertyDescriptors(n);delete i[rn];let s=Reflect.ownKeys(i);for(let r=0;r<s.length;r++){const o=s[r],a=i[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(i[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:n[o]})}return Object.create(ir(n),i)}else{const i=ir(n);if(i!==null&&e)return{...n};const s=Object.create(i);return Object.assign(s,n)}}function gu(n,t=!1){return Ra(n)||sr(n)||!cs(n)||(Ta(n)>1&&Object.defineProperties(n,{set:{value:Io},add:{value:Io},clear:{value:Io},delete:{value:Io}}),Object.freeze(n),t&&Object.values(n).forEach(e=>gu(e,!0))),n}function Io(){_n(2)}function Ra(n){return Object.isFrozen(n)}var SS={};function us(n){const t=SS[n];return t||_n(0,n),t}var zr;function Yf(){return zr}function MS(n,t){return{drafts_:[],parent_:n,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function cd(n,t){t&&(us("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=t)}function Ac(n){Rc(n),n.drafts_.forEach(ES),n.drafts_=null}function Rc(n){n===zr&&(zr=n.parent_)}function ud(n){return zr=MS(zr,n)}function ES(n){const t=n[rn];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function hd(n,t){t.unfinalizedDrafts_=t.drafts_.length;const e=t.drafts_[0];return n!==void 0&&n!==e?(e[rn].modified_&&(Ac(t),_n(4)),cs(n)&&(n=ca(t,n),t.parent_||ua(t,n)),t.patches_&&us("Patches").generateReplacementPatches_(e[rn].base_,n,t.patches_,t.inversePatches_)):n=ca(t,e,[]),Ac(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),n!==Wf?n:void 0}function ca(n,t,e){if(Ra(t))return t;const i=t[rn];if(!i)return la(t,(s,r)=>dd(n,i,t,s,r,e)),t;if(i.scope_!==n)return t;if(!i.modified_)return ua(n,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const s=i.copy_;let r=s,o=!1;i.type_===3&&(r=new Set(s),s.clear(),o=!0),la(r,(a,l)=>dd(n,i,s,a,l,e,o)),ua(n,s,!1),e&&n.patches_&&us("Patches").generatePatches_(i,e,n.patches_,n.inversePatches_)}return i.copy_}function dd(n,t,e,i,s,r,o){if(sr(s)){const a=r&&t&&t.type_!==3&&!wc(t.assigned_,i)?r.concat(i):void 0,l=ca(n,s,a);if(jf(e,i,l),sr(l))n.canAutoFreeze_=!1;else return}else o&&e.add(s);if(cs(s)&&!Ra(s)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;ca(n,s),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&(Kr(e)?e.has(i):Object.prototype.propertyIsEnumerable.call(e,i))&&ua(n,s)}}function ua(n,t,e=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&gu(t,e)}function bS(n,t){const e=Array.isArray(n),i={type_:e?1:0,scope_:t?t.scope_:Yf(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=i,r=_u;e&&(s=[i],r=Hr);const{revoke:o,proxy:a}=Proxy.revocable(s,r);return i.draft_=a,i.revoke_=o,a}var _u={get(n,t){if(t===rn)return n;const e=Hi(n);if(!wc(e,t))return wS(n,e,t);const i=e[t];return n.finalized_||!cs(i)?i:i===xl(n.base_,t)?(yl(n),n.copy_[t]=Pc(i,n)):i},has(n,t){return t in Hi(n)},ownKeys(n){return Reflect.ownKeys(Hi(n))},set(n,t,e){const i=qf(Hi(n),t);if(i?.set)return i.set.call(n.draft_,e),!0;if(!n.modified_){const s=xl(Hi(n),t),r=s?.[rn];if(r&&r.base_===e)return n.copy_[t]=e,n.assigned_[t]=!1,!0;if(yS(e,s)&&(e!==void 0||wc(n.base_,t)))return!0;yl(n),Cc(n)}return n.copy_[t]===e&&(e!==void 0||t in n.copy_)||Number.isNaN(e)&&Number.isNaN(n.copy_[t])||(n.copy_[t]=e,n.assigned_[t]=!0),!0},deleteProperty(n,t){return xl(n.base_,t)!==void 0||t in n.base_?(n.assigned_[t]=!1,yl(n),Cc(n)):delete n.assigned_[t],n.copy_&&delete n.copy_[t],!0},getOwnPropertyDescriptor(n,t){const e=Hi(n),i=Reflect.getOwnPropertyDescriptor(e,t);return i&&{writable:!0,configurable:n.type_!==1||t!=="length",enumerable:i.enumerable,value:e[t]}},defineProperty(){_n(11)},getPrototypeOf(n){return ir(n.base_)},setPrototypeOf(){_n(12)}},Hr={};la(_u,(n,t)=>{Hr[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});Hr.deleteProperty=function(n,t){return Hr.set.call(this,n,t,void 0)};Hr.set=function(n,t,e){return _u.set.call(this,n[0],t,e,n[0])};function xl(n,t){const e=n[rn];return(e?Hi(e):n)[t]}function wS(n,t,e){const i=qf(t,e);return i?"value"in i?i.value:i.get?.call(n.draft_):void 0}function qf(n,t){if(!(t in n))return;let e=ir(n);for(;e;){const i=Object.getOwnPropertyDescriptor(e,t);if(i)return i;e=ir(e)}}function Cc(n){n.modified_||(n.modified_=!0,n.parent_&&Cc(n.parent_))}function yl(n){n.copy_||(n.copy_=Tc(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var TS=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,e,i)=>{if(typeof t=="function"&&typeof e!="function"){const r=e;e=t;const o=this;return function(l=r,...c){return o.produce(l,u=>e.call(this,u,...c))}}typeof e!="function"&&_n(6),i!==void 0&&typeof i!="function"&&_n(7);let s;if(cs(t)){const r=ud(this),o=Pc(t,void 0);let a=!0;try{s=e(o),a=!1}finally{a?Ac(r):Rc(r)}return cd(r,i),hd(s,r)}else if(!t||typeof t!="object"){if(s=e(t),s===void 0&&(s=t),s===Wf&&(s=void 0),this.autoFreeze_&&gu(s,!0),i){const r=[],o=[];us("Patches").generateReplacementPatches_(t,s,r,o),i(r,o)}return s}else _n(1,t)},this.produceWithPatches=(t,e)=>{if(typeof t=="function")return(o,...a)=>this.produceWithPatches(o,l=>t(l,...a));let i,s;return[this.produce(t,e,(o,a)=>{i=o,s=a}),i,s]},typeof n?.autoFreeze=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof n?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){cs(n)||_n(8),sr(n)&&(n=AS(n));const t=ud(this),e=Pc(n,void 0);return e[rn].isManual_=!0,Rc(t),e}finishDraft(n,t){const e=n&&n[rn];(!e||!e.isManual_)&&_n(9);const{scope_:i}=e;return cd(i,t),hd(void 0,i)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,t){let e;for(e=t.length-1;e>=0;e--){const s=t[e];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}e>-1&&(t=t.slice(e+1));const i=us("Patches").applyPatches_;return sr(n)?i(n,t):this.produce(n,s=>i(s,t))}};function Pc(n,t){const e=Kr(n)?us("MapSet").proxyMap_(n,t):Aa(n)?us("MapSet").proxySet_(n,t):bS(n,t);return(t?t.scope_:Yf()).drafts_.push(e),e}function AS(n){return sr(n)||_n(10,n),Kf(n)}function Kf(n){if(!cs(n)||Ra(n))return n;const t=n[rn];let e;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,e=Tc(n,t.scope_.immer_.useStrictShallowCopy_)}else e=Tc(n,!0);return la(e,(i,s)=>{jf(e,i,Kf(s))}),t&&(t.finalized_=!1),e}var RS=new TS,CS=RS.produce;const PS=n=>(t,e,i)=>(i.setState=(s,r,...o)=>{const a=typeof s=="function"?CS(s):s;return t(a,r,...o)},n(i.setState,e,i)),DS=PS,wt=gS()(vS(DS(n=>({selectedBodyId:"sun",isPaused:!1,simTime:0,timeScale:1,scalePreset:"hybrid",distanceUnit:"au",trailsEnabled:!0,trailLength:365,followingId:null,perfPreset:"auto",setSelectedBodyId:t=>n({selectedBodyId:t}),setPaused:t=>n({isPaused:t}),setSimTime:t=>n({simTime:t}),setTimeScale:t=>n({timeScale:t}),setScalePreset:t=>n({scalePreset:t}),setDistanceUnit:t=>n({distanceUnit:t}),setTrailsEnabled:t=>n({trailsEnabled:t}),setTrailLength:t=>n({trailLength:t}),setFollowingId:t=>n({followingId:t}),setPerfPreset:t=>n({perfPreset:t})}))));wt.getState;wt.setState;wt.subscribe;const IS=132712440018e9;function LS(n,t,e=1e-9){let i=n;for(let s=0;s<50;s++){const r=i-t*Math.sin(i)-n,o=1-t*Math.cos(i),a=r/o;if(i-=a,Math.abs(a)<e)break}return i}function US(n,t){const e=LS(t,n.e),i=Math.cos(e),s=Math.sin(e),r=n.a_m*(i-n.e),o=n.a_m*Math.sqrt(1-n.e**2)*s,a=Math.sqrt(r*r+o*o),l=Math.cos(n.Omega_rad),c=Math.sin(n.Omega_rad),u=Math.cos(n.i_rad),h=Math.cos(n.omega_rad),d=Math.sin(n.omega_rad),f=Math.sin(n.i_rad),m=(l*h-c*d*u)*r+(-l*d-c*h*u)*o,_=(c*h+l*d*u)*r+(-c*d+l*h*u)*o,g=d*f*r+h*f*o;return{x:m,y:_,z:g,r:a}}function OS({a_m:n,r_m:t,mu:e=IS}){return Math.sqrt(e*(2/t-1/n))}const Vr=1495978707e-1,FS=6371;function NS(n){return n/Vr}function BS(n){return n/FS}function kS(n,t,e=4){return t==="km"?`${Number(n.toFixed(0)).toLocaleString()} km`:t==="au"?`${NS(n).toFixed(e)} AU`:`${BS(n).toFixed(e)} R⊕`}class zS{constructor(t,e=512,i=128,s=11184810,r=.5){this.celestialObjects=t,this.segmentsHigh=e,this.segmentsLow=i,this.color=s,this.opacity=r,this.orbits=new Map,this.G=66743e-15}createAuPoints(t){const e=[],i=t.orbitalElements,s=i?.aKm??(t.parentId==="sun"?t.semiMajorAxis*Vr:t.semiMajorAxisKm);if(!s)return{high:[],low:[]};const r=i?.e??t.eccentricity,o=i?.iDeg??t.inclination??0,a=i?.lanDeg??0,l=i?.argPeriDeg??0;let c=19885e26;if(t.parentId&&t.parentId!=="sun"){const m=this.celestialObjects.find(_=>_.id===t.parentId);m?.mass&&(c=m.mass*1e24)}this.G*c;const u={a_m:s*1e3,e:r,i_rad:o*(Math.PI/180),Omega_rad:a*(Math.PI/180),omega_rad:l*(Math.PI/180)},h=Vr*1e3;for(let m=0;m<=this.segmentsHigh;m++){const _=m/this.segmentsHigh*2*Math.PI,g=US(u,_);e.push(new C(g.x/h,g.y/h,g.z/h))}const d=[],f=this.segmentsHigh/this.segmentsLow;for(let m=0;m<=this.segmentsLow;m++){const _=Math.min(Math.round(m*f),e.length-1);d.push(e[_])}return{high:e,low:d}}init(t,e){const i=new Rf({color:this.color,opacity:this.opacity,transparent:!0,linewidth:1});this.celestialObjects.forEach(s=>{if(s.id==="sun"||!s.parentId)return;const r=this.createAuPoints(s);if(r.high.length===0)return;const o=r.low.map(u=>aa(u,{active:!1,progress:1,fromPreset:"realistic",toPreset:wt.getState().scalePreset})),a=new Ie().setFromPoints(o),l=new Rg(a,i);l.userData.name=`${s.name} Orbit`;const c=e.get(s.parentId);c?c.group.add(l):t.add(l),this.orbits.set(s.id,{line:l,auPoints:r,currentLOD:"low"}),s.orbit=l})}update(t){this.orbits.forEach(e=>{const i=e.currentLOD==="high"?e.auPoints.high:e.auPoints.low,s=e.line.geometry.attributes.position;for(let r=0;r<i.length;r++){const o=aa(i[r],t);s.setXYZ(r,o.x,o.y,o.z)}s.needsUpdate=!0,e.line.geometry.computeBoundingSphere()})}setLOD(t,e){const i=this.orbits.get(t);if(i&&i.currentLOD!==e){const s=e==="high"?i.auPoints.high:i.auPoints.low;i.line.geometry.dispose(),i.line.geometry=new Ie().setFromPoints(s),i.currentLOD=e}}updateLODs(t,e){this.orbits.forEach((i,s)=>{const r=this.celestialObjects.find(o=>o.id===s);if(r?.group){const a=t.position.distanceTo(r.group.position)>e?"low":"high";this.setLOD(s,a)}})}}const fd=new sn,Lo=new C;class $f extends zg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Se(t,3)),this.setAttribute("uv",new Se(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new yc(e,6,1);return this.setAttribute("instanceStart",new yi(i,3,0)),this.setAttribute("instanceEnd",new yi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new yc(e,6,1);return this.setAttribute("instanceColorStart",new yi(i,3,0)),this.setAttribute("instanceColorEnd",new yi(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Cg(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),fd.setFromBufferAttribute(e),this.boundingBox.union(fd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Lo.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Lo)),Lo.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lo));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}ot.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Lt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};We.line={uniforms:cu.merge([ot.common,ot.fog,ot.line]),vertexShader:`
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
		`};class vu extends ri{constructor(t){super({type:"LineMaterial",uniforms:cu.clone(We.line.uniforms),vertexShader:We.line.vertexShader,fragmentShader:We.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Sl=new Wt,pd=new C,md=new C,Ae=new Wt,Re=new Wt,wn=new Wt,Ml=new C,El=new Zt,Pe=new Xg,gd=new C,Uo=new sn,Oo=new Mn,Tn=new Wt;let An,es;function _d(n,t,e){return Tn.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),Tn.multiplyScalar(1/Tn.w),Tn.x=es/e.width,Tn.y=es/e.height,Tn.applyMatrix4(n.projectionMatrixInverse),Tn.multiplyScalar(1/Tn.w),Math.abs(Math.max(Tn.x,Tn.y))}function HS(n,t){const e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Pe.start.fromBufferAttribute(s,a),Pe.end.fromBufferAttribute(r,a),Pe.applyMatrix4(e);const c=new C,u=new C;An.distanceSqToSegment(Pe.start,Pe.end,u,c),u.distanceTo(c)<es*.5&&t.push({point:u,pointOnLine:c,distance:An.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function VS(n,t,e){const i=t.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-t.near;An.at(1,wn),wn.w=1,wn.applyMatrix4(t.matrixWorldInverse),wn.applyMatrix4(i),wn.multiplyScalar(1/wn.w),wn.x*=r.x/2,wn.y*=r.y/2,wn.z=0,Ml.copy(wn),El.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,f=u;d<f;d++){if(Ae.fromBufferAttribute(l,d),Re.fromBufferAttribute(c,d),Ae.w=1,Re.w=1,Ae.applyMatrix4(El),Re.applyMatrix4(El),Ae.z>h&&Re.z>h)continue;if(Ae.z>h){const M=Ae.z-Re.z,v=(Ae.z-h)/M;Ae.lerp(Re,v)}else if(Re.z>h){const M=Re.z-Ae.z,v=(Re.z-h)/M;Re.lerp(Ae,v)}Ae.applyMatrix4(i),Re.applyMatrix4(i),Ae.multiplyScalar(1/Ae.w),Re.multiplyScalar(1/Re.w),Ae.x*=r.x/2,Ae.y*=r.y/2,Re.x*=r.x/2,Re.y*=r.y/2,Pe.start.copy(Ae),Pe.start.z=0,Pe.end.copy(Re),Pe.end.z=0;const _=Pe.closestPointToPointParameter(Ml,!0);Pe.at(_,gd);const g=Or.lerp(Ae.z,Re.z,_),p=g>=-1&&g<=1,b=Ml.distanceTo(gd)<es*.5;if(p&&b){Pe.start.fromBufferAttribute(l,d),Pe.end.fromBufferAttribute(c,d),Pe.start.applyMatrix4(o),Pe.end.applyMatrix4(o);const M=new C,v=new C;An.distanceSqToSegment(Pe.start,Pe.end,v,M),e.push({point:v,pointOnLine:M,distance:An.origin.distanceTo(v),object:n,face:null,faceIndex:d,uv:null,uv1:null})}}}class GS extends ye{constructor(t=new $f,e=new vu({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)pd.fromBufferAttribute(e,o),md.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+pd.distanceTo(md);const r=new yc(s,2,1);return t.setAttribute("instanceDistanceStart",new yi(r,1,0)),t.setAttribute("instanceDistanceEnd",new yi(r,1,1)),this}raycast(t,e){const i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;An=t.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;es=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Oo.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=es*.5;else{const h=Math.max(s.near,Oo.distanceToPoint(An.origin));c=_d(s,h,l.resolution)}if(Oo.radius+=c,An.intersectsSphere(Oo)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Uo.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=es*.5;else{const h=Math.max(s.near,Uo.distanceToPoint(An.origin));u=_d(s,h,l.resolution)}Uo.expandByScalar(u),An.intersectsBox(Uo)!==!1&&(i?HS(this,e):VS(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Sl),this.material.uniforms.resolution.value.set(Sl.z,Sl.w))}}class Zf extends $f{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}setFromPoints(t){const e=t.length-1,i=new Float32Array(6*e);for(let s=0;s<e;s++)i[6*s]=t[s].x,i[6*s+1]=t[s].y,i[6*s+2]=t[s].z||0,i[6*s+3]=t[s+1].x,i[6*s+4]=t[s+1].y,i[6*s+5]=t[s+1].z||0;return super.setPositions(i),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class WS extends GS{constructor(t=new Zf,e=new vu({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}class XS{constructor(t,e=new Vt(16777215)){this.maxPoints=t,this.baseColor=e,this.geometry=new Zf,this.material=new vu({color:16777215,linewidth:1,vertexColors:!0,transparent:!0,opacity:.4,resolution:new Lt(window.innerWidth,window.innerHeight)}),this.line=new WS(this.geometry,this.material),this.line.frustumCulled=!1}updateFromSampledPoints(t){if(!t||t.length<2){nd(this.geometry,[]);return}const e=Math.min(this.maxPoints,t.length),i=new Float32Array(e*3),s=new Float32Array(e*3),r=Math.ceil(e*.05);for(let o=0;o<e;o++){const a=t[o];!a||typeof a.x!="number"||typeof a.y!="number"||typeof a.z!="number"?(console.warn(`updateFromSampledPoints: Invalid point at index ${o}:`,a),i[o*3]=0,i[o*3+1]=0,i[o*3+2]=0):(i[o*3]=a.x,i[o*3+1]=a.y,i[o*3+2]=a.z);let l=1;o<r&&(l=o/r),s[o*3]=this.baseColor.r*l,s[o*3+1]=this.baseColor.g*l,s[o*3+2]=this.baseColor.b*l}this.geometry.setColors(s),nd(this.geometry,i,{nameForWarnings:"trail-line"})}updateResolution(t,e){this.material.resolution.set(t,e)}setVisible(t){this.line.visible=t}}class jS{constructor(t,e){this.bodies=t,this.scene=e,this.trails=new Map,this.trailHistories=new Map,this.bodyMap=new Map,this.bodies.forEach(i=>this.bodyMap.set(i.id,i))}init(){this.bodies.forEach(t=>{if(t.id!=="sun"){const e=new XS(8e3,new Vt(t.color));this.trails.set(t.id,e),this.trailHistories.set(t.id,[]),this.scene.add(e.line)}})}update(t){const{trailsEnabled:e,simTime:i}=wt.getState();this.trails.forEach((s,r)=>{if(s.setVisible(e),!e)return;const o=this.bodyMap.get(r);if(!o?.group)return;const a=this.trailHistories.get(r);a.push({time:i,position:o.physicsPosition.clone()});const l=o.parentId!=="sun"&&o.parentId!==null,c=o.orbitalPeriod*(l?.5:2),u=i-c,h=a.findIndex(f=>f.time>=u);h>0&&a.splice(0,h);const d=a.filter(f=>f&&f.position&&typeof f.position.x=="number"&&typeof f.position.y=="number"&&typeof f.position.z=="number").map(f=>{try{return aa(f.position,t)}catch(m){return console.warn("TrailManager.update: Error calculating display position:",m,f),new C(0,0,0)}});if(d.length>0&&d.some(f=>!f||typeof f.x!="number"||typeof f.y!="number"||typeof f.z!="number")){console.warn("TrailManager.update: Invalid scaled points detected, filtering them out");const f=d.filter(m=>m&&typeof m.x=="number"&&typeof m.y=="number"&&typeof m.z=="number");s.updateFromSampledPoints(f)}else s.updateFromSampledPoints(d)})}updateResolutions(t,e){this.trails.forEach(i=>i.updateResolution(t,e))}}class YS{constructor(t,e,i,s){this.simulation={selectedObject:null,focusTarget:null,followTarget:null,followOffset:new C,followSmoothing:.05,isUserInteracting:!1,isTweening:!1,asteroidMaterialUniforms:null,selectedGlow:null},this.scaleTransition={active:!1,progress:0,fromPreset:wt.getState().scalePreset,toPreset:wt.getState().scalePreset},this.perfState={MAX_DPR:1.75,MIN_SCALE:.5,dynamicScale:1,frameTimes:[],evalInterval:1e3,lastEval:performance.now(),evalWindow:60,upperMs:22,lowerMs:13,step:.1},this.animate=r=>{requestAnimationFrame(this.animate);const o=r||performance.now(),a=o-(this.animate._lastTime||o);this.animate._lastTime=o;const l=this.perfState.frameTimes;if(l.push(a),l.length>this.perfState.evalWindow&&l.shift(),o-this.perfState.lastEval>=this.perfState.evalInterval&&l.length>3){this.perfState.lastEval=o;const m=l.reduce((_,g)=>_+g,0)/l.length;m>this.perfState.upperMs&&this.perfState.dynamicScale>this.perfState.MIN_SCALE?(this.perfState.dynamicScale=Math.max(this.perfState.MIN_SCALE,+(this.perfState.dynamicScale-this.perfState.step).toFixed(2)),this.applyDPR()):m<this.perfState.lowerMs&&this.perfState.dynamicScale<1&&(this.perfState.dynamicScale=Math.min(1,+(this.perfState.dynamicScale+this.perfState.step).toFixed(2)),this.applyDPR())}const{timeScale:c,isPaused:u,simTime:h}=wt.getState(),d=u?h:h+a/1e3*c;u||wt.getState().setSimTime(d),this.physicsWorker.postMessage({command:"update",payload:{simTimeInDays:d}}),this.simulation.asteroidMaterialUniforms&&(this.simulation.asteroidMaterialUniforms.u_time.value=d),this.celestialObjects.forEach(m=>{const _=aa(m.physicsPosition,this.scaleTransition);m.group.position.copy(_);const g=pS(m.radius,this.scaleTransition);m.mesh.scale.set(g,g,g)});const f=new C;if(this.simulation.focusTarget&&(this.simulation.focusTarget===this.sun?f.set(0,0,0):this.simulation.focusTarget.getWorldPosition(f),this.simulation.isTweening||Oe.target.lerp(f,.05)),this.simulation.followTarget){const m=new C;this.simulation.followTarget.getWorldPosition(m);const _=m.clone().add(this.simulation.followOffset);de.position.lerp(_,this.simulation.followSmoothing),Oe.target.lerp(m,this.simulation.followSmoothing),ra.setAttribute("aria-pressed","true")}else ra.setAttribute("aria-pressed","false");if(wt.getState().selectedBodyId){const m=this.celestialObjects.find(_=>_.id===wt.getState().selectedBodyId);if(m&&m.name!=="Sun"){const _=this.bodyMap.get(m.parentId),g=_?_.physicsPosition:new C(0,0,0),p=m.physicsPosition.distanceTo(g),b=p*Vr,M=p*td,T=(m.parentId==="sun"?m.semiMajorAxis:(m.semiMajorAxisKm||0)/Vr)*td;let R=0;if(T>0){const y=66743e-15*(_?.data.mass||Br[0].mass)*1e24;R=OS({a_m:T,r_m:M,mu:y})}const P=wt.getState().distanceUnit;od.textContent=`Dist: ${kS(b,P)} • Speed: ${Yy(R)}`}else m&&(od.textContent="At the center of the solar system")}if(this.orbitManager.update(this.scaleTransition),this.orbitManager.updateLODs(de,800),this.trailManager.update(this.scaleTransition),this.celestialObjects.forEach(m=>{m.mesh instanceof Af&&m.mesh.update(de)}),this.simulation.selectedGlow){const m=r*.001*(2*Math.PI)/1.2,_=1.3+Math.sin(m)*.1,g=.7+Math.sin(m)*.2;this.simulation.selectedGlow.scale.set(_,_,_),this.simulation.selectedGlow.material.opacity=g}uS(r),Oe.update(),Nr.render(Si,de)},this.celestialObjects=t,this.bodyMap=e,this.sun=i,this.simulation.asteroidMaterialUniforms=s,this.orbitManager=new zS(this.celestialObjects),this.trailManager=new jS(this.celestialObjects,Si),this.physicsWorker=new Worker(new URL("/solarsystemsim25/assets/physics.worker-BYt9RQFS.js",import.meta.url),{type:"module"})}start(){this.orbitManager.init(Si,this.bodyMap),this.trailManager.init(),this.setupPhysicsWorker(),this.animate(0)}setupPhysicsWorker(){const t=this.celestialObjects.map(e=>({name:e.name,semiMajorAxis:e.semiMajorAxis,eccentricity:e.eccentricity,orbitalPeriod:e.orbitalPeriod}));this.physicsWorker.postMessage({command:"init",payload:{bodies:t}}),this.physicsWorker.onmessage=e=>{if(e.data.type==="update"){const i=new Float32Array(e.data.positions);this.celestialObjects.forEach((s,r)=>{const o=this.bodyMap.get(s.id);o&&o.physicsPosition.set(i[r*3],i[r*3+1],i[r*3+2])})}}}applyDPR(){const t=Math.min(window.devicePixelRatio||1,this.perfState.MAX_DPR)*this.perfState.dynamicScale;Nr.setPixelRatio(t)}onBodySelected(t,e){const i=e.find(r=>r.userData.id===t);if(!i)return;this.simulation.selectedGlow&&(this.simulation.selectedGlow.visible=!1);const{glowMesh:s}=i.userData;s?(s.visible=!0,this.simulation.selectedGlow=s):this.simulation.selectedGlow=null,wt.getState().setSelectedBodyId(t),this.simulation.focusTarget=i,this.frameObject(i),this.clampZoomForBody(i)}clampZoomForBody(t){const i=new sn().setFromObject(t).getBoundingSphere(new Mn),s=Math.max(i.radius*1.2,1),r=Math.max(i.radius*100,1e6);Oe.minDistance=s,Oe.maxDistance=r,de.near=Math.max(i.radius*.001,.01),de.far=Math.max(i.radius*2e3,1e7),de.updateProjectionMatrix()}cancelActiveCameraTween(){window._activeCameraTween&&(window._activeCameraTween.stop?.(),window._activeCameraTween=null)}frameObject(t,e={}){const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r={duration:700,fitOffset:1.2},{duration:o,fitOffset:a}={...r,...e},l=s?Math.min(o,150):o;this.simulation.isTweening=!0;const c=new sn().setFromObject(t),u=c.getCenter(new C),h=c.getSize(new C).length()||1,d=de.fov*(Math.PI/180),f=Math.abs(h/Math.sin(d/2))*a,m=new C().subVectors(de.position,Oe.target).normalize(),_=u.clone().add(m.multiplyScalar(f));this.cancelActiveCameraTween();const g=new oa(Oe.target).to(u,l).easing(ni.Quintic.InOut).onUpdate(()=>Oe.update()).onComplete(()=>this.simulation.isTweening=!1).start(),p=new oa(de.position).to(_,l).easing(ni.Quintic.InOut).onUpdate(()=>de.lookAt(Oe.target)).start();window._activeCameraTween={stop:()=>{g.stop(),p.stop()}}}}const Dc={"toggle-pause":{code:"Space",display:"Space"},"toggle-debug-hud":{code:"Backquote",display:"`"},"reset-time":{code:"KeyR",display:"R"},"toggle-shadows":{code:"KeyS",display:"S"},"increase-speed":{code:"Equal",display:"="},"decrease-speed":{code:"Minus",display:"-"},"toggle-trails":{code:"KeyT",display:"T"},"frame-selected":{code:"KeyF",display:"F"},"toggle-help":{code:"KeyH",display:"H"},"close-modals":{code:"Escape",display:"Esc"},"frame-advance":{code:"Period",display:"."},"fine-step-forward":{code:"ArrowRight",shiftKey:!0,display:"Shift + →"},"fine-step-backward":{code:"ArrowLeft",shiftKey:!0,display:"Shift + ←"},"select-body-1":{code:"Digit1",display:"1"},"select-body-2":{code:"Digit2",display:"2"},"select-body-3":{code:"Digit3",display:"3"},"select-body-4":{code:"Digit4",display:"4"},"select-body-5":{code:"Digit5",display:"5"},"select-body-6":{code:"Digit6",display:"6"},"select-body-7":{code:"Digit7",display:"7"},"select-body-8":{code:"Digit8",display:"8"},"select-body-9":{code:"Digit9",display:"9"}},Jf="solar-system-shortcuts";let Mi={...Dc};function qS(){try{const n=localStorage.getItem(Jf);if(n){const t=JSON.parse(n);Mi={...Dc,...t}}}catch(n){console.error("Failed to load shortcuts from localStorage",n),Mi={...Dc}}}function KS(){try{localStorage.setItem(Jf,JSON.stringify(Mi))}catch(n){console.error("Failed to save shortcuts to localStorage",n)}}function Qf(){return Mi}function $S(n,t){for(const e in Mi){const i=Mi[e];i&&i.code===t.code&&!!i.shiftKey==!!t.shiftKey&&!!i.ctrlKey==!!t.ctrlKey&&!!i.altKey==!!t.altKey&&delete Mi[e]}Mi[n]=t,KS()}qS();const ZS={"toggle-pause":"Play/Pause Simulation","toggle-debug-hud":"Toggle Debug Info","reset-time":"Reset Simulation","toggle-shadows":"Toggle Shadows","increase-speed":"Increase Speed","decrease-speed":"Decrease Speed","toggle-trails":"Toggle Orbit Trails","frame-selected":"Frame Selected Body","toggle-help":"Toggle Help Menu","close-modals":"Close Menu/Modal","frame-advance":"Frame-by-Frame Advance","fine-step-forward":"Fine Step Forward","fine-step-backward":"Fine Step Backward","select-body-1":"Select Sun","select-body-2":"Select Mercury","select-body-3":"Select Venus","select-body-4":"Select Earth","select-body-5":"Select Mars","select-body-6":"Select Jupiter","select-body-7":"Select Saturn","select-body-8":"Select Uranus","select-body-9":"Select Neptune"},vd={"frame-selected":"Focus the camera on the currently selected planet or moon.","frame-advance":"If paused, advances the simulation by a single frame.","fine-step-forward":"Nudges the simulation time forward by a small amount.","fine-step-backward":"Nudges the simulation time backward by a small amount."};let js=null,xd="";function JS(n){const t=[];n.ctrlKey&&t.push("Ctrl"),n.altKey&&t.push("Alt"),n.shiftKey&&t.push("Shift");const i={ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→",Space:"Space",Backquote:"`",Minus:"-",Equal:"=",Period:"."}[n.code]||n.code.replace("Key","").replace("Digit","");return t.push(i),t.join(" + ")}function tp(n){if(n.preventDefault(),n.stopPropagation(),!js)return;if(n.code==="Escape"){yd();return}const t={code:n.code,shiftKey:n.shiftKey,ctrlKey:n.ctrlKey,altKey:n.altKey,display:""};t.display=JS(t),$S(js,t),yd()}function QS(n,t){if(js){const e=document.querySelector(`[data-action="${js}"]`);e&&(e.textContent=xd)}js=n,xd=t.textContent||"Remap",t.textContent="Press a key...",window.addEventListener("keydown",tp,{capture:!0})}function yd(){window.removeEventListener("keydown",tp,{capture:!0}),js=null,ha()}function ha(n=""){const t=Qf(),e=document.getElementById("shortcuts-list");if(!e)return;e.innerHTML="";const i=n.toLowerCase(),s=Object.keys(t).sort();for(const r of s){const o=ZS[r]||r;if(i&&!o.toLowerCase().includes(i))continue;const a=t[r],l=document.createElement("span");l.className="action-label",l.textContent=o,vd[r]&&(l.title=vd[r]);const c=document.createElement("kbd");c.className="key-binding",c.textContent=a?a.display:"Unbound";const u=document.createElement("button");u.className="control-btn remap-button",u.textContent="Remap",u.dataset.action=r,u.addEventListener("click",()=>{QS(r,u)}),e.appendChild(l),e.appendChild(c),e.appendChild(u)}}function tM(){const n=document.getElementById("help-search-input");n&&n.addEventListener("input",()=>{ha(n.value)});const t=document.getElementById("help-overlay");t&&new MutationObserver(i=>{for(const s of i)s.attributeName==="class"&&!t.classList.contains("hidden")&&(n.value="",ha(),n.focus())}).observe(t,{attributes:!0})}const ep="solarsim.presets.v1";function xu(){const n=localStorage.getItem(ep);if(n)try{return JSON.parse(n)}catch(t){return console.error("Failed to load presets from localStorage:",t),[]}return[]}function np(n){try{const t=n.filter(e=>!e.isBuiltIn);localStorage.setItem(ep,JSON.stringify(t))}catch(t){console.error("Failed to save presets to localStorage:",t)}}const eM=[{id:"builtin-explorer",name:"Explorer",isBuiltIn:!0,panel:{side:"left",isPinned:!0,width:360},camera:{position:[0,200,800],target:[0,0,0],fov:60},time:{simTime:0,timeScale:1,isPaused:!0},render:{shadowsEnabled:!0,performancePreset:"auto"},ui:{selectedBodyId:"sun"}},{id:"builtin-presentation",name:"Presentation",isBuiltIn:!0,panel:{side:"right",isPinned:!1,width:300},camera:{position:[0,50,1e3],target:[0,0,0],fov:45},time:{simTime:0,timeScale:.2,isPaused:!1},render:{shadowsEnabled:!0,performancePreset:"high"},ui:{selectedBodyId:"earth"}}];function ip(){return[...eM,...xu()]}function nM(n){const e=xu().filter(i=>i.id!==n);np(e)}function iM(n){const t=xu(),e=t.findIndex(i=>i.id===n.id);e>-1?t[e]=n:t.push(n),np(t)}const Ce=[];for(let n=0;n<256;++n)Ce.push((n+256).toString(16).slice(1));function sM(n,t=0){return(Ce[n[t+0]]+Ce[n[t+1]]+Ce[n[t+2]]+Ce[n[t+3]]+"-"+Ce[n[t+4]]+Ce[n[t+5]]+"-"+Ce[n[t+6]]+Ce[n[t+7]]+"-"+Ce[n[t+8]]+Ce[n[t+9]]+"-"+Ce[n[t+10]]+Ce[n[t+11]]+Ce[n[t+12]]+Ce[n[t+13]]+Ce[n[t+14]]+Ce[n[t+15]]).toLowerCase()}let bl;const rM=new Uint8Array(16);function oM(){if(!bl){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");bl=crypto.getRandomValues.bind(crypto)}return bl(rM)}const aM=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Sd={randomUUID:aM};function lM(n,t,e){if(Sd.randomUUID&&!n)return Sd.randomUUID();n=n||{};const i=n.random??n.rng?.()??oM();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,sM(i)}class Vs{constructor(){this.activePanelCount=0,this.backdropElement=document.createElement("div"),this.backdropElement.className="modal-backdrop",this.backdropElement.style.display="none",document.body.appendChild(this.backdropElement)}static getInstance(){return Vs.instance||(Vs.instance=new Vs),Vs.instance}show(){this.activePanelCount++,this.backdropElement.style.display="block"}hide(){this.activePanelCount--,this.activePanelCount<=0&&(this.backdropElement.style.display="none",this.activePanelCount=0)}}const Md=Vs.getInstance(),Fo=32,No=16,Ed=24;function cM(n){return{id:n.id,el:n.getPanelElement(),focus:()=>n.updateFocus(),setMinimized:t=>{n.state.minimized!==t&&n.toggleMinimize()},isMinimized:()=>n.state.minimized,toggleVisibility:()=>n.toggleVisibility(),show:()=>n.show(),hide:()=>n.hide(),destroy:()=>n.destroy(),togglePin:()=>n.togglePin(),isPinned:()=>n.state.pinned,on:(t,e)=>n.on(t,e),getState:()=>n.state,setPosition:(t,e)=>n.setPosition(t,e)}}const Ge=class Ge{constructor(t,e,i,s={}){this.id=t,this.panel=e,this.header=i,this.options=s,this.isDragging=!1,this.dragStartX=0,this.dragStartY=0,this.isModal=!1,this.events=new Map,Ge.panels.set(this.id,this),this.state=this.loadState(),this.isModal=s.modal||!1,this.boundOnDragStart=this.onDragStart.bind(this),this.boundOnDragMove=this.onDragMove.bind(this),this.boundOnDragEnd=this.onDragEnd.bind(this),this.init()}static createPanel(t,e,i,s={}){if(this.controllers.has(t))return this.controllers.get(t);const r=i.querySelector(".panel-header"),o=i.querySelector(".close-btn, .close-button, #close-celestial-selector-btn, #close-presets-modal-btn"),a=i.querySelector(".minimize-btn");r||console.error(`PanelManager: Panel with id "${t}" must have a child element with class ".panel-header"`);const l=new Ge(t,i,r||i,s);o&&o.addEventListener("click",()=>l.hide()),a&&a.addEventListener("click",()=>l.toggleMinimize());const c=cM(l);return this.controllers.set(t,c),c}static getController(t){return this.controllers.get(t)}init(){this.applyState(),this.options.draggable!==!1&&this.makeDraggable(),this.options.resizable!==!1&&this.makeResizable(),this.panel.addEventListener("mousedown",()=>this.updateFocus(),!0)}destroy(){Ge.panels.delete(this.id),Ge.controllers.delete(this.id),this.panel.remove(),this.emit("close")}on(t,e){this.events.has(t)||this.events.set(t,[]),this.events.get(t).push(e)}emit(t){this.events.get(t)?.forEach(e=>e())}getPanelElement(){return this.panel}loadState(){const t=localStorage.getItem(`solarsim.panel.${this.id}`);let e={};if(t)try{e=JSON.parse(t)}catch(r){console.error(`Failed to parse stored state for panel ${this.id}:`,r)}const i={x:this.panel.offsetLeft,y:this.panel.offsetTop,w:this.panel.offsetWidth||320,h:this.panel.offsetHeight||480,visible:!this.panel.classList.contains("hidden"),snapped:null,pinned:!1,minimized:!1,lastFocused:0},s={};return this.options.initialPosition?.x!==void 0&&(s.x=this.options.initialPosition.x),this.options.initialPosition?.y!==void 0&&(s.y=this.options.initialPosition.y),this.options.width!==void 0&&(s.w=this.options.width),this.options.height!==void 0&&(s.h=this.options.height),{...i,...s,...e}}saveState(){localStorage.setItem(`solarsim.panel.${this.id}`,JSON.stringify(this.state))}applyState(){this.state.visible?this.panel.classList.remove("hidden"):this.panel.classList.add("hidden"),this.panel.style.left=`${this.state.x}px`,this.panel.style.top=`${this.state.y}px`,this.panel.style.width=`${this.state.w}px`,this.panel.style.height=`${this.state.h}px`,this.panel.classList.toggle("pinned",this.state.pinned),this.panel.classList.toggle("minimized",this.state.minimized)}toggleMinimize(){this.state.minimized=!this.state.minimized,this.applyState(),this.saveState(),this.emit("minimize")}show(){if(this.state.visible){this.updateFocus();return}this.state.visible=!0,this.applyState(),this.updateFocus(),this.saveState(),this.isModal&&Md.show(),this.emit("show")}hide(){this.state.visible&&(this.state.visible=!1,this.applyState(),this.saveState(),this.isModal&&Md.hide(),this.emit("hide"))}toggleVisibility(){this.state.visible?this.hide():this.show()}setPosition(t,e){this.state.x=t,this.state.y=e,this.applyState(),this.saveState()}updateFocus(){this.state.lastFocused=Date.now(),this.panel.style.zIndex=String(++Ge.highestZIndex),this.saveState(),this.emit("focus")}static getMostRecentlyFocusedController(){const t=Array.from(Ge.panels.values()).filter(i=>i.state.visible);if(t.length===0)return null;const e=t.reduce((i,s)=>i.state.lastFocused>s.state.lastFocused?i:s);return this.controllers.get(e.id)||null}togglePin(){this.state.pinned=!this.state.pinned,this.panel.classList.toggle("pinned",this.state.pinned),this.saveState()}makeDraggable(){this.header.addEventListener("mousedown",this.boundOnDragStart),this.header.style.cursor="grab"}onDragStart(t){if(!(t.button!==0||this.state.pinned)&&!t.target.closest("button, input, select, textarea")&&(t.preventDefault(),t.stopPropagation(),this.isDragging=!0,this.updateFocus(),this.dragStartX=t.clientX,this.dragStartY=t.clientY,document.addEventListener("mousemove",this.boundOnDragMove),document.addEventListener("mouseup",this.boundOnDragEnd,{once:!0}),this.header.style.cursor="grabbing",document.body.style.userSelect="none",this.state.snapped)){const e=i=>{const s=Math.abs(i.clientX-this.dragStartX),r=Math.abs(i.clientY-this.dragStartY);(s>Ed||r>Ed)&&(this.state.snapped=null,this.saveState(),document.removeEventListener("mousemove",e))};document.addEventListener("mousemove",e)}}onDragMove(t){if(!this.isDragging)return;const e=t.clientX-this.dragStartX,i=t.clientY-this.dragStartY;this.state.x+=e,this.state.y+=i,this.dragStartX=t.clientX,this.dragStartY=t.clientY,this.handleSnapping(),this.applyState()}onDragEnd(){this.isDragging=!1,this.header.style.cursor="grab",document.body.style.userSelect="",document.removeEventListener("mousemove",this.boundOnDragMove),Ge.hideSnapPreview(),this.state.snapped&&this.flashSnapConfirmation(),this.saveState()}handleSnapping(){const t=window.innerWidth,e=window.innerHeight;let i=null;this.state.x<Fo?i="left":this.state.x+this.state.w>t-Fo?i="right":this.state.y<Fo?i="top":this.state.y+this.state.h>e-Fo&&(i="bottom"),Ge.hideSnapPreview(),i?(Ge.showSnapPreview(i),(i==="left"&&this.state.x<No||i==="right"&&this.state.x+this.state.w>t-No||i==="top"&&this.state.y<No||i==="bottom"&&this.state.y+this.state.h>e-No)&&(this.state.snapped=i,i==="left"&&(this.state.x=0),i==="right"&&(this.state.x=t-this.state.w),i==="top"&&(this.state.y=0),i==="bottom"&&(this.state.y=e-this.state.h))):this.state.snapped=null}static showSnapPreview(t){this.snapGlow||(this.snapGlow=document.createElement("div"),this.snapGlow.className="snap-glow",document.body.appendChild(this.snapGlow)),this.snapGlow.className=`snap-glow ${t} visible`}static hideSnapPreview(){this.snapGlow&&(this.snapGlow.className="snap-glow")}flashSnapConfirmation(){this.panel.classList.add("snap-flash"),setTimeout(()=>this.panel.classList.remove("snap-flash"),150)}makeResizable(t=250,e=150){["n","ne","e","se","s","sw","w","nw"].forEach(s=>{const r=document.createElement("div");r.className=`resizer-handle ${s}`,this.panel.appendChild(r),r.addEventListener("mousedown",o=>this.onResizeStart(o,s,t,e))})}onResizeStart(t,e,i,s){if(this.state.pinned)return;t.stopPropagation(),t.preventDefault(),this.updateFocus();const r=t.clientX,o=t.clientY,a=this.state.w,l=this.state.h,c=this.state.x,u=this.state.y,h=f=>{const m=f.clientX-r,_=f.clientY-o;if(e.includes("e")&&(this.state.w=Math.max(i,a+m)),e.includes("w")){const g=Math.max(i,a-m);this.state.x=c+(a-g),this.state.w=g}if(e.includes("s")&&(this.state.h=Math.max(s,l+_)),e.includes("n")){const g=Math.max(s,l-_);this.state.y=u+(l-g),this.state.h=g}this.state.snapped=null,this.applyState()},d=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",d),document.body.style.cursor="",document.body.style.userSelect="",this.saveState()};document.addEventListener("mousemove",h),document.addEventListener("mouseup",d),document.body.style.cursor=`${e}-resize`,document.body.style.userSelect="none"}};Ge.highestZIndex=1e3,Ge.panels=new Map,Ge.controllers=new Map;let da=Ge;const sp="solarsim.panel.v1";function uM(n){const t=JSON.parse(localStorage.getItem(sp)||"{}"),{simTime:e,timeScale:i,isPaused:s,selectedBodyId:r,perfPreset:o}=wt.getState(),a=document.getElementById("shadow-toggle").checked;return{id:lM(),name:n,createdAt:new Date().toISOString(),panel:{side:t.side||"left",isPinned:t.isPinned||!0,width:t.width||320},camera:{position:de.position.toArray(),target:Oe.target.toArray(),fov:de.fov},time:{simTime:e,timeScale:i,isPaused:s},render:{shadowsEnabled:a,performancePreset:o},ui:{selectedBodyId:r},thumbnailDataUrl:Nr.domElement.toDataURL("image/png")}}function hM(n){localStorage.setItem(sp,JSON.stringify(n.panel)),window.location.reload(),de.position.fromArray(n.camera.position),Oe.target.fromArray(n.camera.target),de.fov=n.camera.fov,de.updateProjectionMatrix(),Oe.update(),wt.getState().setSimTime(n.time.simTime),wt.getState().setTimeScale(n.time.timeScale),wt.getState().setPaused(n.time.isPaused),document.getElementById("shadow-toggle").checked=n.render.shadowsEnabled,wt.getState().setPerfPreset(n.render.performancePreset),n.ui.selectedBodyId&&wt.getState().setSelectedBodyId(n.ui.selectedBodyId)}function wl(){const n=document.getElementById("presets-list");n.innerHTML="",ip().forEach(e=>{const i=document.createElement("div");i.className="preset-item",i.innerHTML=`
            <span class="preset-name">${e.name} ${e.isBuiltIn?"(Built-in)":""}</span>
            <div class="preset-actions">
                <button class="control-btn apply-preset-btn" data-id="${e.id}">Apply</button>
                ${e.isBuiltIn?"":`<button class="control-btn delete-preset-btn" data-id="${e.id}">Delete</button>`}
            </div>
        `,n.appendChild(i)})}function dM(){const n=document.getElementById("presets-modal");if(!n)return;const t=da.createPanel("presets","Presets",n,{width:500,height:450,modal:!0}),e=document.getElementById("manage-presets-btn"),i=document.getElementById("save-current-preset-btn"),s=document.getElementById("new-preset-name"),r=document.getElementById("presets-list");if(!e||!i||!s||!r){console.error("One or more required elements for presets panel not found");return}t.on("show",wl),e.addEventListener("click",()=>t.show()),i.addEventListener("click",()=>{const o=s.value.trim();if(!o){alert("Please enter a name for the preset.");return}const a=uM(o);iM(a),s.value="",wl()}),r.addEventListener("click",o=>{const a=o.target,l=a.dataset.id;if(l){if(a.classList.contains("apply-preset-btn")){const u=ip().find(h=>h.id===l);u&&(hM(u),t.hide())}a.classList.contains("delete-preset-btn")&&confirm("Are you sure you want to delete this preset?")&&(nM(l),wl())}})}function bd(n,t){if(n<=0)return 0;const{minNonZero:e,midScale:i,maxScale:s}=t,r=.5;if(n<=r){const o=n/r;return e*Math.pow(i/e,o)}else{const o=(n-r)/(1-r);return i*Math.pow(s/i,o)}}function fM(n,t){const{minNonZero:e,midScale:i,maxScale:s}=t;return n<=0?0:n<=i?Math.log(n/e)/Math.log(i/e)*.5:.5+Math.log(n/i)/Math.log(s/i)*.5}const Tl={minNonZero:1e-6,midScale:100,maxScale:1e8};function wd(n){if(n===0)return"Paused";if(n===1)return"1x";const t=86400,e=365.25*t;return n>e*.95?`${(n/e).toFixed(1)} y/s`:n>t*.95?`${(n/t).toFixed(1)} d/s`:n<.1?`${n.toExponential(1)}x`:`${n.toFixed(1)}x`}function pM(n){return new Date(new Date(2025,0,1).getTime()+n*1e3).toUTCString().substring(5,25)}function mM(){gM(),_M(),vM()}function gM(){const n=document.getElementById("play-pause-btn"),t=document.getElementById("time-scale-slider"),e=document.getElementById("time-scale-label"),i=document.getElementById("timestamp-display"),s=document.querySelectorAll(".time-preset"),r=document.getElementById("time-step-forward"),o=document.getElementById("time-step-backward"),a=document.getElementById("time-scale-tooltip");function l(){const u=parseFloat(t.value),h=parseFloat(t.min),d=parseFloat(t.max),f=(u-h)/(d-h),m=16,_=t.offsetWidth,g=f*(_-m)+m/2;a.style.left=`${g}px`;const p=wd(bd(u,Tl));a.textContent=p}function c(){const{isPaused:u,timeScale:h,simTime:d}=wt.getState();n.textContent=u?"▶":"❚❚",t.value=fM(h,Tl).toString(),e.textContent=wd(h),i.textContent=pM(d),l()}c(),n.addEventListener("click",()=>{wt.getState().setPaused(!wt.getState().isPaused)}),t.addEventListener("input",()=>{const u=bd(parseFloat(t.value),Tl);wt.getState().setTimeScale(u),l()}),t.addEventListener("mouseenter",()=>{a.classList.add("visible"),l()}),t.addEventListener("mouseleave",()=>{a.classList.remove("visible")}),s.forEach(u=>{u.addEventListener("click",()=>{const h=parseFloat(u.dataset.speed);wt.getState().setTimeScale(h)})}),r.addEventListener("click",()=>{const{simTime:u}=wt.getState();wt.getState().setSimTime(u+86400),wt.getState().isPaused||wt.getState().setPaused(!0)}),o.addEventListener("click",()=>{const{simTime:u}=wt.getState();wt.getState().setSimTime(u-86400),wt.getState().isPaused||wt.getState().setPaused(!0)}),wt.subscribe(c)}function _M(){const n=document.getElementById("trails-enabled-toggle"),t=document.getElementById("trail-length-slider");n.checked=wt.getState().trailsEnabled,t.value=String(wt.getState().trailLength),n.addEventListener("change",()=>{wt.getState().setTrailsEnabled(n.checked)}),t.addEventListener("input",()=>{wt.getState().setTrailLength(parseFloat(t.value))}),wt.subscribe(e=>{n.checked!==e.trailsEnabled&&(n.checked=e.trailsEnabled),parseFloat(t.value)!==e.trailLength&&(t.value=String(e.trailLength))})}function vM(){const n=document.getElementById("distance-unit-select");n.value=wt.getState().distanceUnit,n.addEventListener("change",()=>{wt.getState().setDistanceUnit(n.value)}),wt.subscribe(t=>{n.value!==t.distanceUnit&&(n.value=t.distanceUnit)})}let Ys,ve,rp,op,Yi,$o,Zo,qi,Ki,$i,Zi,$n,Ic,Lc,Uc,Oc,Fc,Nc;function xM(){Ys=document.getElementById("more-menu-toggle"),ve=document.getElementById("more-menu-content"),rp=document.getElementById("top-bar"),op=document.getElementById("app"),Yi=document.getElementById("scale-control-group"),$o=document.getElementById("scale-preset-select"),Zo=document.getElementById("scale-badge"),qi=document.getElementById("time-control-group"),Ki=document.getElementById("time-preset-group"),$i=document.getElementById("visuals-btn"),Zi=document.getElementById("settings-btn"),$n=document.getElementById("github-link"),$i&&(Ic=$i.parentNode),Zi&&(Lc=Zi.parentNode),$n&&(Uc=$n.parentNode),qi&&(Oc=qi.parentNode),Ki&&(Fc=Ki.parentNode),Yi&&(Nc=Yi.parentNode)}function ap(){if(window.innerWidth<=768)ve.contains(qi)||ve.appendChild(qi),ve.contains(Ki)||ve.appendChild(Ki),ve.contains($i)||ve.appendChild($i),ve.contains(Zi)||ve.appendChild(Zi),ve.contains($n)||ve.appendChild($n),ve.contains(Yi)||ve.appendChild(Yi),Ys.classList.remove("hidden");else{Oc&&qi&&Oc.appendChild(qi),Fc&&Ki&&Fc.appendChild(Ki);const t=document.getElementById("more-menu-container");Ic&&$i&&t&&Ic.insertBefore($i,t),Lc&&Zi&&t&&Lc.insertBefore(Zi,t),Nc&&Yi&&$n&&Nc.insertBefore(Yi,$n),Uc&&$n&&t&&Uc.insertBefore($n,t),Ys&&Ys.classList.add("hidden"),ve&&ve.classList.add("hidden")}yM()}function yM(){const n=rp.offsetHeight;op.style.paddingTop=`${n}px`}function SM(){Ys.addEventListener("click",n=>{n.stopPropagation();const t=!ve.classList.contains("hidden");ve.classList.toggle("hidden",t)}),$o.addEventListener("change",n=>{const t=n.target.value;wt.getState().setScalePreset(t)}),wt.subscribe(n=>{const t=n.scalePreset;switch($o.value!==t&&($o.value=t),t){case"realistic":Zo.textContent="1:1 Scale";break;case"educational":Zo.textContent="Large Planets";break;case"hybrid":Zo.textContent="Log Distance";break}}),document.addEventListener("click",n=>{const t=n.target;!ve.classList.contains("hidden")&&!ve.contains(t)&&!Ys.contains(t)&&ve.classList.add("hidden")}),window.addEventListener("resize",ap)}function MM(){xM(),SM(),ap()}const EM=["Sun","Earth","Mars","Jupiter"],bM=4e3;let Bc;function wM(n){const e=n.currentTarget.dataset.body;e&&wt.getState().setSelectedBodyId(e)}function TM(){const n=document.getElementById("open-celestial-selector-btn");n&&n.click()}function Bo(){Kn&&(clearTimeout(Bc),Kn.classList.remove("hidden"),Bc=window.setTimeout(()=>{Kn.classList.add("hidden")},bM))}function AM(){if(!Kn)return;Kn.innerHTML="",EM.forEach(t=>{const e=document.createElement("button");e.className="quick-access-btn",e.dataset.body=t,e.textContent=t,e.addEventListener("click",wM),Kn.appendChild(e)});const n=document.createElement("button");n.id="quick-access-overflow",n.className="quick-access-btn",n.textContent="⋯",n.addEventListener("click",TM),Kn.appendChild(n),document.body.addEventListener("mousemove",Bo,{passive:!0}),document.body.addEventListener("touchstart",Bo,{passive:!0}),Kn.addEventListener("mouseenter",()=>clearTimeout(Bc)),Kn.addEventListener("mouseleave",Bo),Bo()}let xn,ii=null;const RM=6e3;function CM(){document.getElementById("btn-frame")?.click(),ms()}function PM(){document.getElementById("btn-follow")?.click(),ms()}function DM(){document.getElementById("btn-orbit")?.click(),ms()}function IM(){kr.classList.contains("hidden")&&kr.classList.remove("hidden"),ms()}function LM(){if(xn=document.getElementById("contextual-hud"),!xn)return;const n=document.getElementById("hud-frame-btn"),t=document.getElementById("hud-follow-btn"),e=document.getElementById("hud-orbit-btn"),i=document.getElementById("hud-info-btn");n.addEventListener("click",s=>{s.stopPropagation(),CM()}),t.addEventListener("click",s=>{s.stopPropagation(),PM()}),e.addEventListener("click",s=>{s.stopPropagation(),DM()}),i.addEventListener("click",s=>{s.stopPropagation(),IM()}),window.addEventListener("click",()=>{ms()},{capture:!0}),xn.addEventListener("mouseenter",()=>{ii&&(clearTimeout(ii),ii=null)}),xn.addEventListener("mouseleave",()=>{lp()})}function UM(n,t){if(!xn)return;if(!kr.classList.contains("hidden")){ms();return}const e=new C;n.getWorldPosition(e),e.project(t);const i=(e.x*.5+.5)*window.innerWidth,s=(e.y*-.5+.5)*window.innerHeight;xn.style.left=`${i}px`,xn.style.top=`${s}px`,xn.classList.remove("hidden"),lp()}function ms(){xn&&!xn.classList.contains("hidden")&&xn.classList.add("hidden"),ii&&(clearTimeout(ii),ii=null)}function lp(){ii&&clearTimeout(ii),ii=window.setTimeout(ms,RM)}/*! shepherd.js 14.5.1 */function OM(n){return n instanceof Element}function rr(n){return n instanceof HTMLElement}function Ti(n){return typeof n=="function"}function Gr(n){return typeof n=="string"}function Fe(n){return n===void 0}class yu{on(t,e,i,s=!1){var r;return Fe(this.bindings)&&(this.bindings={}),Fe(this.bindings[t])&&(this.bindings[t]=[]),(r=this.bindings[t])==null||r.push({handler:e,ctx:i,once:s}),this}once(t,e,i){return this.on(t,e,i,!0)}off(t,e){if(Fe(this.bindings)||Fe(this.bindings[t]))return this;if(Fe(e))delete this.bindings[t];else{var i;(i=this.bindings[t])==null||i.forEach((s,r)=>{if(s.handler===e){var o;(o=this.bindings[t])==null||o.splice(r,1)}})}return this}trigger(t,...e){if(!Fe(this.bindings)&&this.bindings[t]){var i;(i=this.bindings[t])==null||i.forEach((s,r)=>{const{ctx:o,handler:a,once:l}=s,c=o||this;if(a.apply(c,e),l){var u;(u=this.bindings[t])==null||u.splice(r,1)}})}return this}}function je(){return je=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)({}).hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},je.apply(null,arguments)}function Su(n,t){if(n==null)return{};var e={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(t.includes(i))continue;e[i]=n[i]}return e}const Ri={defaultMerge:Symbol("deepmerge-ts: default merge"),skip:Symbol("deepmerge-ts: skip")};Ri.defaultMerge;function FM(n,t){return t}function NM(n,t){return n.filter(e=>e!==void 0)}var Td;(function(n){n[n.NOT=0]="NOT",n[n.RECORD=1]="RECORD",n[n.ARRAY=2]="ARRAY",n[n.SET=3]="SET",n[n.MAP=4]="MAP",n[n.OTHER=5]="OTHER"})(Td||(Td={}));function Ad(n){return typeof n!="object"||n===null?0:Array.isArray(n)?2:zM(n)?1:n instanceof Set?3:n instanceof Map?4:5}function BM(n){const t=new Set;for(const e of n)for(const i of[...Object.keys(e),...Object.getOwnPropertySymbols(e)])t.add(i);return t}function kM(n,t){return typeof n=="object"&&Object.prototype.propertyIsEnumerable.call(n,t)}function cp(n){return{*[Symbol.iterator](){for(const t of n)for(const e of t)yield e}}}const Rd=new Set(["[object Object]","[object Module]"]);function zM(n){if(!Rd.has(Object.prototype.toString.call(n)))return!1;const{constructor:t}=n;if(t===void 0)return!0;const e=t.prototype;return!(e===null||typeof e!="object"||!Rd.has(Object.prototype.toString.call(e))||!e.hasOwnProperty("isPrototypeOf"))}function HM(n,t,e){const i={};for(const s of BM(n)){const r=[];for(const l of n)kM(l,s)&&r.push(l[s]);if(r.length===0)continue;const o=t.metaDataUpdater(e,{key:s,parents:n}),a=up(r,t,o);a!==Ri.skip&&(s==="__proto__"?Object.defineProperty(i,s,{value:a,configurable:!0,enumerable:!0,writable:!0}):i[s]=a)}return i}function VM(n){return n.flat()}function GM(n){return new Set(cp(n))}function WM(n){return new Map(cp(n))}function XM(n){return n.at(-1)}const ko={mergeRecords:HM,mergeArrays:VM,mergeSets:GM,mergeMaps:WM,mergeOthers:XM};function Mu(...n){return jM({})(...n)}function jM(n,t){const e=YM(n,i);function i(...s){return up(s,e,t)}return i}function YM(n,t){var e,i,s;return{defaultMergeFunctions:ko,mergeFunctions:je({},ko,Object.fromEntries(Object.entries(n).filter(([r,o])=>Object.hasOwn(ko,r)).map(([r,o])=>o===!1?[r,ko.mergeOthers]:[r,o]))),metaDataUpdater:(e=n.metaDataUpdater)!=null?e:FM,deepmerge:t,useImplicitDefaultMerging:(i=n.enableImplicitDefaultMerging)!=null?i:!1,filterValues:n.filterValues===!1?void 0:(s=n.filterValues)!=null?s:NM,actions:Ri}}function up(n,t,e){var i;const s=(i=t.filterValues==null?void 0:t.filterValues(n,e))!=null?i:n;if(s.length===0)return;if(s.length===1)return Al(s,t,e);const r=Ad(s[0]);if(r!==0&&r!==5){for(let o=1;o<s.length;o++)if(Ad(s[o])!==r)return Al(s,t,e)}switch(r){case 1:return qM(s,t,e);case 2:return KM(s,t,e);case 3:return $M(s,t,e);case 4:return ZM(s,t,e);default:return Al(s,t,e)}}function qM(n,t,e){const i=t.mergeFunctions.mergeRecords(n,t,e);return i===Ri.defaultMerge||t.useImplicitDefaultMerging&&i===void 0&&t.mergeFunctions.mergeRecords!==t.defaultMergeFunctions.mergeRecords?t.defaultMergeFunctions.mergeRecords(n,t,e):i}function KM(n,t,e){const i=t.mergeFunctions.mergeArrays(n,t,e);return i===Ri.defaultMerge||t.useImplicitDefaultMerging&&i===void 0&&t.mergeFunctions.mergeArrays!==t.defaultMergeFunctions.mergeArrays?t.defaultMergeFunctions.mergeArrays(n):i}function $M(n,t,e){const i=t.mergeFunctions.mergeSets(n,t,e);return i===Ri.defaultMerge||t.useImplicitDefaultMerging&&i===void 0&&t.mergeFunctions.mergeSets!==t.defaultMergeFunctions.mergeSets?t.defaultMergeFunctions.mergeSets(n):i}function ZM(n,t,e){const i=t.mergeFunctions.mergeMaps(n,t,e);return i===Ri.defaultMerge||t.useImplicitDefaultMerging&&i===void 0&&t.mergeFunctions.mergeMaps!==t.defaultMergeFunctions.mergeMaps?t.defaultMergeFunctions.mergeMaps(n):i}function Al(n,t,e){const i=t.mergeFunctions.mergeOthers(n,t,e);return i===Ri.defaultMerge||t.useImplicitDefaultMerging&&i===void 0&&t.mergeFunctions.mergeOthers!==t.defaultMergeFunctions.mergeOthers?t.defaultMergeFunctions.mergeOthers(n):i}function Eu(n){const t=Object.getOwnPropertyNames(n.constructor.prototype);for(let e=0;e<t.length;e++){const i=t[e],s=n[i];i!=="constructor"&&typeof s=="function"&&(n[i]=s.bind(n))}return n}function JM(n,t){return e=>{if(n.isOpen()){const i=n.el&&e.currentTarget===n.el;(!Fe(t)&&e.currentTarget.matches(t)||i)&&n.tour.next()}}}function QM(n){const{event:t,selector:e}=n.options.advanceOn||{};if(t){const i=JM(n,e);let s=null;if(!Fe(e)&&(s=document.querySelector(e),!s))return console.error(`No element was found for the selector supplied to advanceOn: ${e}`);s?(s.addEventListener(t,i),n.on("destroy",()=>s.removeEventListener(t,i))):(document.body.addEventListener(t,i,!0),n.on("destroy",()=>document.body.removeEventListener(t,i,!0)))}else return console.error("advanceOn was defined, but no event name was passed.")}class tE{constructor(t){}}class eE{constructor(t,e){}}function hp(n){return!Gr(n)||n===""?"":n.charAt(n.length-1)!=="-"?`${n}-`:n}function nE(n){const t=n.options.attachTo||{},e=Object.assign({},t);if(Ti(e.element)&&(e.element=e.element.call(n)),Gr(e.element)){try{e.element=document.querySelector(e.element)}catch{}e.element||console.error(`The element for this Shepherd step was not found ${t.element}`)}return e}function iE(n){return n.options.extraHighlights?n.options.extraHighlights.flatMap(t=>Array.from(document.querySelectorAll(t))):[]}function dp(n){return n==null?!0:!n.element||!n.on}function fp(){let n=Date.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=(n+Math.random()*16)%16|0;return n=Math.floor(n/16),(t=="x"?e:e&3|8).toString(16)})}const sE=["top","right","bottom","left"],Cd=["start","end"],Pd=sE.reduce((n,t)=>n.concat(t,t+"-"+Cd[0],t+"-"+Cd[1]),[]),or=Math.min,ns=Math.max,fa=Math.round,zo=Math.floor,Un=n=>({x:n,y:n}),rE={left:"right",right:"left",bottom:"top",top:"bottom"},oE={start:"end",end:"start"};function kc(n,t,e){return ns(n,or(t,e))}function hs(n,t){return typeof n=="function"?n(t):n}function oi(n){return n.split("-")[0]}function si(n){return n.split("-")[1]}function bu(n){return n==="x"?"y":"x"}function wu(n){return n==="y"?"height":"width"}function is(n){return["top","bottom"].includes(oi(n))?"y":"x"}function Tu(n){return bu(is(n))}function pp(n,t,e){e===void 0&&(e=!1);const i=si(n),s=Tu(n),r=wu(s);let o=s==="x"?i===(e?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=ma(o)),[o,ma(o)]}function aE(n){const t=ma(n);return[pa(n),t,pa(t)]}function pa(n){return n.replace(/start|end/g,t=>oE[t])}function lE(n,t,e){const i=["left","right"],s=["right","left"],r=["top","bottom"],o=["bottom","top"];switch(n){case"top":case"bottom":return e?t?s:i:t?i:s;case"left":case"right":return t?r:o;default:return[]}}function cE(n,t,e,i){const s=si(n);let r=lE(oi(n),e==="start",i);return s&&(r=r.map(o=>o+"-"+s),t&&(r=r.concat(r.map(pa)))),r}function ma(n){return n.replace(/left|right|bottom|top/g,t=>rE[t])}function uE(n){return je({top:0,right:0,bottom:0,left:0},n)}function mp(n){return typeof n!="number"?uE(n):{top:n,right:n,bottom:n,left:n}}function ga(n){const{x:t,y:e,width:i,height:s}=n;return{width:i,height:s,top:e,left:t,right:t+i,bottom:e+s,x:t,y:e}}const hE=["crossAxis","alignment","allowedPlacements","autoAlignment"],dE=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"],fE=["mainAxis","crossAxis","limiter"];function Dd(n,t,e){let{reference:i,floating:s}=n;const r=is(t),o=Tu(t),a=wu(o),l=oi(t),c=r==="y",u=i.x+i.width/2-s.width/2,h=i.y+i.height/2-s.height/2,d=i[a]/2-s[a]/2;let f;switch(l){case"top":f={x:u,y:i.y-s.height};break;case"bottom":f={x:u,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:h};break;case"left":f={x:i.x-s.width,y:h};break;default:f={x:i.x,y:i.y}}switch(si(t)){case"start":f[o]-=d*(e&&c?-1:1);break;case"end":f[o]+=d*(e&&c?-1:1);break}return f}const pE=async(n,t,e)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:o}=e,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:n,floating:t,strategy:s}),{x:u,y:h}=Dd(c,i,l),d=i,f={},m=0;for(let _=0;_<a.length;_++){const{name:g,fn:p}=a[_],{x:b,y:M,data:v,reset:T}=await p({x:u,y:h,initialPlacement:i,placement:d,strategy:s,middlewareData:f,rects:c,platform:o,elements:{reference:n,floating:t}});u=b??u,h=M??h,f=je({},f,{[g]:je({},f[g],v)}),T&&m<=50&&(m++,typeof T=="object"&&(T.placement&&(d=T.placement),T.rects&&(c=T.rects===!0?await o.getElementRects({reference:n,floating:t,strategy:s}):T.rects),{x:u,y:h}=Dd(c,d,l)),_=-1)}return{x:u,y:h,placement:d,strategy:s,middlewareData:f}};async function Au(n,t){var e;t===void 0&&(t={});const{x:i,y:s,platform:r,rects:o,elements:a,strategy:l}=n,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:d=!1,padding:f=0}=hs(t,n),m=mp(f),g=a[d?h==="floating"?"reference":"floating":h],p=ga(await r.getClippingRect({element:(e=await(r.isElement==null?void 0:r.isElement(g)))==null||e?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),b=h==="floating"?{x:i,y:s,width:o.floating.width,height:o.floating.height}:o.reference,M=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),v=await(r.isElement==null?void 0:r.isElement(M))?await(r.getScale==null?void 0:r.getScale(M))||{x:1,y:1}:{x:1,y:1},T=ga(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:M,strategy:l}):b);return{top:(p.top-T.top+m.top)/v.y,bottom:(T.bottom-p.bottom+m.bottom)/v.y,left:(p.left-T.left+m.left)/v.x,right:(T.right-p.right+m.right)/v.x}}const mE=n=>({name:"arrow",options:n,async fn(t){const{x:e,y:i,placement:s,rects:r,platform:o,elements:a,middlewareData:l}=t,{element:c,padding:u=0}=hs(n,t)||{};if(c==null)return{};const h=mp(u),d={x:e,y:i},f=Tu(s),m=wu(f),_=await o.getDimensions(c),g=f==="y",p=g?"top":"left",b=g?"bottom":"right",M=g?"clientHeight":"clientWidth",v=r.reference[m]+r.reference[f]-d[f]-r.floating[m],T=d[f]-r.reference[f],R=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let P=R?R[M]:0;(!P||!await(o.isElement==null?void 0:o.isElement(R)))&&(P=a.floating[M]||r.floating[m]);const L=v/2-T/2,E=P/2-_[m]/2-1,y=or(h[p],E),A=or(h[b],E),N=y,z=P-_[m]-A,B=P/2-_[m]/2+L,Y=kc(N,B,z),G=!l.arrow&&si(s)!=null&&B!==Y&&r.reference[m]/2-(B<N?y:A)-_[m]/2<0,K=G?B<N?B-N:B-z:0;return{[f]:d[f]+K,data:je({[f]:Y,centerOffset:B-Y-K},G&&{alignmentOffset:K}),reset:G}}});function gE(n,t,e){return(n?[...e.filter(s=>si(s)===n),...e.filter(s=>si(s)!==n)]:e.filter(s=>oi(s)===s)).filter(s=>n?si(s)===n||(t?pa(s)!==s:!1):!0)}const _E=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var i,s,r;const{rects:o,middlewareData:a,placement:l,platform:c,elements:u}=e,h=hs(t,e),{crossAxis:d=!1,alignment:f,allowedPlacements:m=Pd,autoAlignment:_=!0}=h,g=Su(h,hE),p=f!==void 0||m===Pd?gE(f||null,_,m):m,b=await Au(e,g),M=((i=a.autoPlacement)==null?void 0:i.index)||0,v=p[M];if(v==null)return{};const T=pp(v,o,await(c.isRTL==null?void 0:c.isRTL(u.floating)));if(l!==v)return{reset:{placement:p[0]}};const R=[b[oi(v)],b[T[0]],b[T[1]]],P=[...((s=a.autoPlacement)==null?void 0:s.overflows)||[],{placement:v,overflows:R}],L=p[M+1];if(L)return{data:{index:M+1,overflows:P},reset:{placement:L}};const E=P.map(N=>{const z=si(N.placement);return[N.placement,z&&d?N.overflows.slice(0,2).reduce((B,Y)=>B+Y,0):N.overflows[0],N.overflows]}).sort((N,z)=>N[1]-z[1]),A=((r=E.filter(N=>N[2].slice(0,si(N[0])?2:3).every(z=>z<=0))[0])==null?void 0:r[0])||E[0][0];return A!==l?{data:{index:M+1,overflows:P},reset:{placement:A}}:{}}}},vE=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:r,middlewareData:o,rects:a,initialPlacement:l,platform:c,elements:u}=e,h=hs(t,e),{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:m,fallbackStrategy:_="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0}=h,b=Su(h,dE);if((i=o.arrow)!=null&&i.alignmentOffset)return{};const M=oi(r),v=is(l),T=oi(l)===l,R=await(c.isRTL==null?void 0:c.isRTL(u.floating)),P=m||(T||!p?[ma(l)]:aE(l)),L=g!=="none";!m&&L&&P.push(...cE(l,p,g,R));const E=[l,...P],y=await Au(e,b),A=[];let N=((s=o.flip)==null?void 0:s.overflows)||[];if(d&&A.push(y[M]),f){const K=pp(r,a,R);A.push(y[K[0]],y[K[1]])}if(N=[...N,{placement:r,overflows:A}],!A.every(K=>K<=0)){var z,B;const K=(((z=o.flip)==null?void 0:z.index)||0)+1,V=E[K];if(V){var Y;const it=f==="alignment"?v!==is(V):!1,dt=((Y=N[0])==null?void 0:Y.overflows[0])>0;if(!it||dt)return{data:{index:K,overflows:N},reset:{placement:V}}}let et=(B=N.filter(it=>it.overflows[0]<=0).sort((it,dt)=>it.overflows[1]-dt.overflows[1])[0])==null?void 0:B.placement;if(!et)switch(_){case"bestFit":{var G;const it=(G=N.filter(dt=>{if(L){const Ct=is(dt.placement);return Ct===v||Ct==="y"}return!0}).map(dt=>[dt.placement,dt.overflows.filter(Ct=>Ct>0).reduce((Ct,se)=>Ct+se,0)]).sort((dt,Ct)=>dt[1]-Ct[1])[0])==null?void 0:G[0];it&&(et=it);break}case"initialPlacement":et=l;break}if(r!==et)return{reset:{placement:et}}}return{}}}},xE=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:r}=e,o=hs(t,e),{mainAxis:a=!0,crossAxis:l=!1,limiter:c={fn:b=>{let{x:M,y:v}=b;return{x:M,y:v}}}}=o,u=Su(o,fE),h={x:i,y:s},d=await Au(e,u),f=is(oi(r)),m=bu(f);let _=h[m],g=h[f];if(a){const b=m==="y"?"top":"left",M=m==="y"?"bottom":"right",v=_+d[b],T=_-d[M];_=kc(v,_,T)}if(l){const b=f==="y"?"top":"left",M=f==="y"?"bottom":"right",v=g+d[b],T=g-d[M];g=kc(v,g,T)}const p=c.fn(je({},e,{[m]:_,[f]:g}));return je({},p,{data:{x:p.x-i,y:p.y-s,enabled:{[m]:a,[f]:l}}})}}},yE=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:i,y:s,placement:r,rects:o,middlewareData:a}=e,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=hs(t,e),h={x:i,y:s},d=is(r),f=bu(d);let m=h[f],_=h[d];const g=hs(l,e),p=typeof g=="number"?{mainAxis:g,crossAxis:0}:je({mainAxis:0,crossAxis:0},g);if(c){const v=f==="y"?"height":"width",T=o.reference[f]-o.floating[v]+p.mainAxis,R=o.reference[f]+o.reference[v]-p.mainAxis;m<T?m=T:m>R&&(m=R)}if(u){var b,M;const v=f==="y"?"width":"height",T=["top","left"].includes(oi(r)),R=o.reference[d]-o.floating[v]+(T&&((b=a.offset)==null?void 0:b[d])||0)+(T?0:p.crossAxis),P=o.reference[d]+o.reference[v]+(T?0:((M=a.offset)==null?void 0:M[d])||0)-(T?p.crossAxis:0);_<R?_=R:_>P&&(_=P)}return{[f]:m,[d]:_}}}};function Ca(){return typeof window<"u"}function hr(n){return gp(n)?(n.nodeName||"").toLowerCase():"#document"}function nn(n){var t;return(n==null||(t=n.ownerDocument)==null?void 0:t.defaultView)||window}function zn(n){var t;return(t=(gp(n)?n.ownerDocument:n.document)||window.document)==null?void 0:t.documentElement}function gp(n){return Ca()?n instanceof Node||n instanceof nn(n).Node:!1}function yn(n){return Ca()?n instanceof Element||n instanceof nn(n).Element:!1}function Bn(n){return Ca()?n instanceof HTMLElement||n instanceof nn(n).HTMLElement:!1}function Id(n){return!Ca()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof nn(n).ShadowRoot}function $r(n){const{overflow:t,overflowX:e,overflowY:i,display:s}=Sn(n);return/auto|scroll|overlay|hidden|clip/.test(t+i+e)&&!["inline","contents"].includes(s)}function SE(n){return["table","td","th"].includes(hr(n))}function Pa(n){return[":popover-open",":modal"].some(t=>{try{return n.matches(t)}catch{return!1}})}function Ru(n){const t=Cu(),e=yn(n)?Sn(n):n;return["transform","translate","scale","rotate","perspective"].some(i=>e[i]?e[i]!=="none":!1)||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(e.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(e.contain||"").includes(i))}function ME(n){let t=Ai(n);for(;Bn(t)&&!ar(t);){if(Ru(t))return t;if(Pa(t))return null;t=Ai(t)}return null}function Cu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ar(n){return["html","body","#document"].includes(hr(n))}function Sn(n){return nn(n).getComputedStyle(n)}function Da(n){return yn(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function Ai(n){if(hr(n)==="html")return n;const t=n.assignedSlot||n.parentNode||Id(n)&&n.host||zn(n);return Id(t)?t.host:t}function _p(n){const t=Ai(n);return ar(t)?n.ownerDocument?n.ownerDocument.body:n.body:Bn(t)&&$r(t)?t:_p(t)}function Wr(n,t,e){var i;t===void 0&&(t=[]),e===void 0&&(e=!0);const s=_p(n),r=s===((i=n.ownerDocument)==null?void 0:i.body),o=nn(s);if(r){const a=zc(o);return t.concat(o,o.visualViewport||[],$r(s)?s:[],a&&e?Wr(a):[])}return t.concat(s,Wr(s,[],e))}function zc(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function vp(n){const t=Sn(n);let e=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=Bn(n),r=s?n.offsetWidth:e,o=s?n.offsetHeight:i,a=fa(e)!==r||fa(i)!==o;return a&&(e=r,i=o),{width:e,height:i,$:a}}function Pu(n){return yn(n)?n:n.contextElement}function qs(n){const t=Pu(n);if(!Bn(t))return Un(1);const e=t.getBoundingClientRect(),{width:i,height:s,$:r}=vp(t);let o=(r?fa(e.width):e.width)/i,a=(r?fa(e.height):e.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const EE=Un(0);function xp(n){const t=nn(n);return!Cu()||!t.visualViewport?EE:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function bE(n,t,e){return t===void 0&&(t=!1),!e||t&&e!==nn(n)?!1:t}function ds(n,t,e,i){t===void 0&&(t=!1),e===void 0&&(e=!1);const s=n.getBoundingClientRect(),r=Pu(n);let o=Un(1);t&&(i?yn(i)&&(o=qs(i)):o=qs(n));const a=bE(r,e,i)?xp(r):Un(0);let l=(s.left+a.x)/o.x,c=(s.top+a.y)/o.y,u=s.width/o.x,h=s.height/o.y;if(r){const d=nn(r),f=i&&yn(i)?nn(i):i;let m=d,_=zc(m);for(;_&&i&&f!==m;){const g=qs(_),p=_.getBoundingClientRect(),b=Sn(_),M=p.left+(_.clientLeft+parseFloat(b.paddingLeft))*g.x,v=p.top+(_.clientTop+parseFloat(b.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,h*=g.y,l+=M,c+=v,m=nn(_),_=zc(m)}}return ga({width:u,height:h,x:l,y:c})}function Du(n,t){const e=Da(n).scrollLeft;return t?t.left+e:ds(zn(n)).left+e}function yp(n,t,e){e===void 0&&(e=!1);const i=n.getBoundingClientRect(),s=i.left+t.scrollLeft-(e?0:Du(n,i)),r=i.top+t.scrollTop;return{x:s,y:r}}function wE(n){let{elements:t,rect:e,offsetParent:i,strategy:s}=n;const r=s==="fixed",o=zn(i),a=t?Pa(t.floating):!1;if(i===o||a&&r)return e;let l={scrollLeft:0,scrollTop:0},c=Un(1);const u=Un(0),h=Bn(i);if((h||!h&&!r)&&((hr(i)!=="body"||$r(o))&&(l=Da(i)),Bn(i))){const f=ds(i);c=qs(i),u.x=f.x+i.clientLeft,u.y=f.y+i.clientTop}const d=o&&!h&&!r?yp(o,l,!0):Un(0);return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+u.x+d.x,y:e.y*c.y-l.scrollTop*c.y+u.y+d.y}}function TE(n){return Array.from(n.getClientRects())}function AE(n){const t=zn(n),e=Da(n),i=n.ownerDocument.body,s=ns(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=ns(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let o=-e.scrollLeft+Du(n);const a=-e.scrollTop;return Sn(i).direction==="rtl"&&(o+=ns(t.clientWidth,i.clientWidth)-s),{width:s,height:r,x:o,y:a}}function RE(n,t){const e=nn(n),i=zn(n),s=e.visualViewport;let r=i.clientWidth,o=i.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;const c=Cu();(!c||c&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:o,x:a,y:l}}function CE(n,t){const e=ds(n,!0,t==="fixed"),i=e.top+n.clientTop,s=e.left+n.clientLeft,r=Bn(n)?qs(n):Un(1),o=n.clientWidth*r.x,a=n.clientHeight*r.y,l=s*r.x,c=i*r.y;return{width:o,height:a,x:l,y:c}}function Ld(n,t,e){let i;if(t==="viewport")i=RE(n,e);else if(t==="document")i=AE(zn(n));else if(yn(t))i=CE(t,e);else{const s=xp(n);i={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return ga(i)}function Sp(n,t){const e=Ai(n);return e===t||!yn(e)||ar(e)?!1:Sn(e).position==="fixed"||Sp(e,t)}function PE(n,t){const e=t.get(n);if(e)return e;let i=Wr(n,[],!1).filter(a=>yn(a)&&hr(a)!=="body"),s=null;const r=Sn(n).position==="fixed";let o=r?Ai(n):n;for(;yn(o)&&!ar(o);){const a=Sn(o),l=Ru(o);!l&&a.position==="fixed"&&(s=null),(r?!l&&!s:!l&&a.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||$r(o)&&!l&&Sp(n,o))?i=i.filter(u=>u!==o):s=a,o=Ai(o)}return t.set(n,i),i}function DE(n){let{element:t,boundary:e,rootBoundary:i,strategy:s}=n;const o=[...e==="clippingAncestors"?Pa(t)?[]:PE(t,this._c):[].concat(e),i],a=o[0],l=o.reduce((c,u)=>{const h=Ld(t,u,s);return c.top=ns(h.top,c.top),c.right=or(h.right,c.right),c.bottom=or(h.bottom,c.bottom),c.left=ns(h.left,c.left),c},Ld(t,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function IE(n){const{width:t,height:e}=vp(n);return{width:t,height:e}}function LE(n,t,e){const i=Bn(t),s=zn(t),r=e==="fixed",o=ds(n,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=Un(0);function c(){l.x=Du(s)}if(i||!i&&!r)if((hr(t)!=="body"||$r(s))&&(a=Da(t)),i){const f=ds(t,!0,r,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else s&&c();r&&!i&&s&&c();const u=s&&!i&&!r?yp(s,a):Un(0),h=o.left+a.scrollLeft-l.x-u.x,d=o.top+a.scrollTop-l.y-u.y;return{x:h,y:d,width:o.width,height:o.height}}function Rl(n){return Sn(n).position==="static"}function Ud(n,t){if(!Bn(n)||Sn(n).position==="fixed")return null;if(t)return t(n);let e=n.offsetParent;return zn(n)===e&&(e=e.ownerDocument.body),e}function Mp(n,t){const e=nn(n);if(Pa(n))return e;if(!Bn(n)){let s=Ai(n);for(;s&&!ar(s);){if(yn(s)&&!Rl(s))return s;s=Ai(s)}return e}let i=Ud(n,t);for(;i&&SE(i)&&Rl(i);)i=Ud(i,t);return i&&ar(i)&&Rl(i)&&!Ru(i)?e:i||ME(n)||e}const UE=async function(t){const e=this.getOffsetParent||Mp,i=this.getDimensions,s=await i(t.floating);return{reference:LE(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function OE(n){return Sn(n).direction==="rtl"}const FE={convertOffsetParentRelativeRectToViewportRelativeRect:wE,getDocumentElement:zn,getClippingRect:DE,getOffsetParent:Mp,getElementRects:UE,getClientRects:TE,getDimensions:IE,getScale:qs,isElement:yn,isRTL:OE};function Ep(n,t){return n.x===t.x&&n.y===t.y&&n.width===t.width&&n.height===t.height}function NE(n,t){let e=null,i;const s=zn(n);function r(){var a;clearTimeout(i),(a=e)==null||a.disconnect(),e=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=n.getBoundingClientRect(),{left:u,top:h,width:d,height:f}=c;if(a||t(),!d||!f)return;const m=zo(h),_=zo(s.clientWidth-(u+d)),g=zo(s.clientHeight-(h+f)),p=zo(u),M={rootMargin:-m+"px "+-_+"px "+-g+"px "+-p+"px",threshold:ns(0,or(1,l))||1};let v=!0;function T(R){const P=R[0].intersectionRatio;if(P!==l){if(!v)return o();P?o(!1,P):i=setTimeout(()=>{o(!1,1e-7)},1e3)}P===1&&!Ep(c,n.getBoundingClientRect())&&o(),v=!1}try{e=new IntersectionObserver(T,je({},M,{root:s.ownerDocument}))}catch{e=new IntersectionObserver(T,M)}e.observe(n)}return o(!0),r}function BE(n,t,e,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=Pu(n),u=s||r?[...c?Wr(c):[],...Wr(t)]:[];u.forEach(p=>{s&&p.addEventListener("scroll",e,{passive:!0}),r&&p.addEventListener("resize",e)});const h=c&&a?NE(c,e):null;let d=-1,f=null;o&&(f=new ResizeObserver(p=>{let[b]=p;b&&b.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var M;(M=f)==null||M.observe(t)})),e()}),c&&!l&&f.observe(c),f.observe(t));let m,_=l?ds(n):null;l&&g();function g(){const p=ds(n);_&&!Ep(_,p)&&e(),_=p,m=requestAnimationFrame(g)}return e(),()=>{var p;u.forEach(b=>{s&&b.removeEventListener("scroll",e),r&&b.removeEventListener("resize",e)}),h?.(),(p=f)==null||p.disconnect(),f=null,l&&cancelAnimationFrame(m)}}const kE=_E,zE=xE,HE=vE,VE=mE,GE=yE,WE=(n,t,e)=>{const i=new Map,s=je({platform:FE},e),r=je({},s.platform,{_c:i});return pE(n,t,je({},s,{platform:r}))};function XE(n){n.cleanup&&n.cleanup();const t=n._getResolvedAttachToOptions();let e=t.element;const i=ZE(t,n),s=dp(t);return s&&(e=document.body,n.shepherdElementComponent.getElement().classList.add("shepherd-centered")),n.cleanup=BE(e,n.el,()=>{if(!n.el){n.cleanup==null||n.cleanup();return}qE(e,n,i,s)}),n.target=t.element,i}function jE(n,t){return{floatingUIOptions:Mu(n.floatingUIOptions||{},t.floatingUIOptions||{})}}function YE(n){n.cleanup&&n.cleanup(),n.cleanup=null}function qE(n,t,e,i){return WE(n,t.el,e).then(KE(t,i)).then(s=>new Promise(r=>{setTimeout(()=>r(s),300)})).then(s=>{s!=null&&s.el&&(s.el.tabIndex=0,s.el.focus({preventScroll:!0}))})}function KE(n,t){return({x:e,y:i,placement:s,middlewareData:r})=>(n.el&&(t?Object.assign(n.el.style,{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}):Object.assign(n.el.style,{position:"absolute",left:`${e}px`,top:`${i}px`}),n.el.dataset.popperPlacement=s,$E(n.el,r)),n)}function $E(n,t){const e=n.querySelector(".shepherd-arrow");if(rr(e)&&t.arrow){const{x:i,y:s}=t.arrow;Object.assign(e.style,{left:i!=null?`${i}px`:"",top:s!=null?`${s}px`:""})}}function ZE(n,t){var e,i,s;const r={strategy:"absolute"};r.middleware=[];const o=JE(t),a=dp(n),l=(e=n.on)==null?void 0:e.includes("auto"),c=(n==null||(i=n.on)==null?void 0:i.includes("-start"))||(n==null||(s=n.on)==null?void 0:s.includes("-end"));if(!a){if(l){var u;r.middleware.push(kE({crossAxis:!0,alignment:c?n==null||(u=n.on)==null?void 0:u.split("-").pop():null}))}else r.middleware.push(HE());if(r.middleware.push(zE({limiter:GE(),crossAxis:!0})),o){const h=typeof t.options.arrow=="object"?t.options.arrow:{padding:4};r.middleware.push(VE({element:o,padding:c?h.padding:0}))}l||(r.placement=n.on)}return Mu(r,t.options.floatingUIOptions||{})}function JE(n){return n.options.arrow&&n.el?n.el.querySelector(".shepherd-arrow"):!1}function on(){}function QE(n,t){for(const e in t)n[e]=t[e];return n}function bp(n){return n()}function Od(){return Object.create(null)}function Zr(n){n.forEach(bp)}function Iu(n){return typeof n=="function"}function li(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function tb(n){return Object.keys(n).length===0}function lr(n,t){n.appendChild(t)}function En(n,t,e){n.insertBefore(t,e||null)}function hn(n){n.parentNode&&n.parentNode.removeChild(n)}function eb(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function kn(n){return document.createElement(n)}function Fd(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function wp(n){return document.createTextNode(n)}function _a(){return wp(" ")}function nb(){return wp("")}function Ia(n,t,e,i){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e,i)}function ie(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}const ib=["width","height"];function Nd(n,t){const e=Object.getOwnPropertyDescriptors(n.__proto__);for(const i in t)t[i]==null?n.removeAttribute(i):i==="style"?n.style.cssText=t[i]:i==="__value"?n.value=n[i]=t[i]:e[i]&&e[i].set&&ib.indexOf(i)===-1?n[i]=t[i]:ie(n,i,t[i])}function sb(n){return Array.from(n.childNodes)}function Fs(n,t,e){n.classList.toggle(t,!!e)}let Xr;function Ar(n){Xr=n}function Lu(){if(!Xr)throw new Error("Function called outside component initialization");return Xr}function rb(n){Lu().$$.on_mount.push(n)}function Uu(n){Lu().$$.after_update.push(n)}function ob(n){Lu().$$.on_destroy.push(n)}const ks=[],cr=[];let Ks=[];const Bd=[],ab=Promise.resolve();let Hc=!1;function lb(){Hc||(Hc=!0,ab.then(Tp))}function Vc(n){Ks.push(n)}const Cl=new Set;let Ns=0;function Tp(){if(Ns!==0)return;const n=Xr;do{try{for(;Ns<ks.length;){const t=ks[Ns];Ns++,Ar(t),cb(t.$$)}}catch(t){throw ks.length=0,Ns=0,t}for(Ar(null),ks.length=0,Ns=0;cr.length;)cr.pop()();for(let t=0;t<Ks.length;t+=1){const e=Ks[t];Cl.has(e)||(Cl.add(e),e())}Ks.length=0}while(ks.length);for(;Bd.length;)Bd.pop()();Hc=!1,Cl.clear(),Ar(n)}function cb(n){if(n.fragment!==null){n.update(),Zr(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(Vc)}}function ub(n){const t=[],e=[];Ks.forEach(i=>n.indexOf(i)===-1?t.push(i):e.push(i)),e.forEach(i=>i()),Ks=t}const Jo=new Set;let Ji;function ss(){Ji={r:0,c:[],p:Ji}}function rs(){Ji.r||Zr(Ji.c),Ji=Ji.p}function $t(n,t){n&&n.i&&(Jo.delete(n),n.i(t))}function ge(n,t,e,i){if(n&&n.o){if(Jo.has(n))return;Jo.add(n),Ji.c.push(()=>{Jo.delete(n),i&&(e&&n.d(1),i())}),n.o(t)}else i&&i()}function kd(n){return n?.length!==void 0?n:Array.from(n)}function hb(n,t){const e={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=t[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(e[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in e||(e[o]=void 0);return e}function gs(n){n&&n.c()}function Ci(n,t,e){const{fragment:i,after_update:s}=n.$$;i&&i.m(t,e),Vc(()=>{const r=n.$$.on_mount.map(bp).filter(Iu);n.$$.on_destroy?n.$$.on_destroy.push(...r):Zr(r),n.$$.on_mount=[]}),s.forEach(Vc)}function Pi(n,t){const e=n.$$;e.fragment!==null&&(ub(e.after_update),Zr(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function db(n,t){n.$$.dirty[0]===-1&&(ks.push(n),lb(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function ci(n,t,e,i,s,r,o=null,a=[-1]){const l=Xr;Ar(n);const c=n.$$={fragment:null,ctx:[],props:r,update:on,not_equal:s,bound:Od(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Od(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=e?e(n,t.props||{},(h,d,...f)=>{const m=f.length?f[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=m)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](m),u&&db(n,h)),d}):[],c.update(),u=!0,Zr(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const h=sb(t.target);c.fragment&&c.fragment.l(h),h.forEach(hn)}else c.fragment&&c.fragment.c();t.intro&&$t(n.$$.fragment),Ci(n,t.target,t.anchor),Tp()}Ar(l)}class ui{constructor(){this.$$=void 0,this.$$set=void 0}$destroy(){Pi(this,1),this.$destroy=on}$on(t,e){if(!Iu(e))return on;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(e),()=>{const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!tb(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fb="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fb);function pb(n){let t,e,i,s,r;return{c(){t=kn("button"),ie(t,"aria-label",e=n[3]?n[3]:null),ie(t,"class",i=`${n[1]||""} shepherd-button ${n[4]?"shepherd-button-secondary":""}`),t.disabled=n[2],ie(t,"tabindex","0"),ie(t,"type","button")},m(o,a){En(o,t,a),t.innerHTML=n[5],s||(r=Ia(t,"click",function(){Iu(n[0])&&n[0].apply(this,arguments)}),s=!0)},p(o,[a]){n=o,a&32&&(t.innerHTML=n[5]),a&8&&e!==(e=n[3]?n[3]:null)&&ie(t,"aria-label",e),a&18&&i!==(i=`${n[1]||""} shepherd-button ${n[4]?"shepherd-button-secondary":""}`)&&ie(t,"class",i),a&4&&(t.disabled=n[2])},i:on,o:on,d(o){o&&hn(t),s=!1,r()}}}function mb(n,t,e){let{config:i,step:s}=t,r,o,a,l,c,u;function h(d){return Ti(d)?d=d.call(s):d}return n.$$set=d=>{"config"in d&&e(6,i=d.config),"step"in d&&e(7,s=d.step)},n.$$.update=()=>{n.$$.dirty&192&&(e(0,r=i.action?i.action.bind(s.tour):null),e(1,o=i.classes),e(2,a=i.disabled?h(i.disabled):!1),e(3,l=i.label?h(i.label):null),e(4,c=i.secondary),e(5,u=i.text?h(i.text):null))},[r,o,a,l,c,u,i,s]}class gb extends ui{constructor(t){super(),ci(this,t,mb,pb,li,{config:6,step:7})}}function zd(n,t,e){const i=n.slice();return i[2]=t[e],i}function Hd(n){let t,e,i=kd(n[1]),s=[];for(let o=0;o<i.length;o+=1)s[o]=Vd(zd(n,i,o));const r=o=>ge(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();t=nb()},m(o,a){for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(o,a);En(o,t,a),e=!0},p(o,a){if(a&3){i=kd(o[1]);let l;for(l=0;l<i.length;l+=1){const c=zd(o,i,l);s[l]?(s[l].p(c,a),$t(s[l],1)):(s[l]=Vd(c),s[l].c(),$t(s[l],1),s[l].m(t.parentNode,t))}for(ss(),l=i.length;l<s.length;l+=1)r(l);rs()}},i(o){if(!e){for(let a=0;a<i.length;a+=1)$t(s[a]);e=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)ge(s[a]);e=!1},d(o){o&&hn(t),eb(s,o)}}}function Vd(n){let t,e;return t=new gb({props:{config:n[2],step:n[0]}}),{c(){gs(t.$$.fragment)},m(i,s){Ci(t,i,s),e=!0},p(i,s){const r={};s&2&&(r.config=i[2]),s&1&&(r.step=i[0]),t.$set(r)},i(i){e||($t(t.$$.fragment,i),e=!0)},o(i){ge(t.$$.fragment,i),e=!1},d(i){Pi(t,i)}}}function _b(n){let t,e,i=n[1]&&Hd(n);return{c(){t=kn("footer"),i&&i.c(),ie(t,"class","shepherd-footer")},m(s,r){En(s,t,r),i&&i.m(t,null),e=!0},p(s,[r]){s[1]?i?(i.p(s,r),r&2&&$t(i,1)):(i=Hd(s),i.c(),$t(i,1),i.m(t,null)):i&&(ss(),ge(i,1,1,()=>{i=null}),rs())},i(s){e||($t(i),e=!0)},o(s){ge(i),e=!1},d(s){s&&hn(t),i&&i.d()}}}function vb(n,t,e){let i,{step:s}=t;return n.$$set=r=>{"step"in r&&e(0,s=r.step)},n.$$.update=()=>{n.$$.dirty&1&&e(1,i=s.options.buttons)},[s,i]}class xb extends ui{constructor(t){super(),ci(this,t,vb,_b,li,{step:0})}}function yb(n){let t,e,i,s,r;return{c(){t=kn("button"),e=kn("span"),e.textContent="×",ie(e,"aria-hidden","true"),ie(t,"aria-label",i=n[0].label?n[0].label:"Close Tour"),ie(t,"class","shepherd-cancel-icon"),ie(t,"type","button")},m(o,a){En(o,t,a),lr(t,e),s||(r=Ia(t,"click",n[1]),s=!0)},p(o,[a]){a&1&&i!==(i=o[0].label?o[0].label:"Close Tour")&&ie(t,"aria-label",i)},i:on,o:on,d(o){o&&hn(t),s=!1,r()}}}function Sb(n,t,e){let{cancelIcon:i,step:s}=t;const r=o=>{o.preventDefault(),s.cancel()};return n.$$set=o=>{"cancelIcon"in o&&e(0,i=o.cancelIcon),"step"in o&&e(2,s=o.step)},[i,r,s]}class Mb extends ui{constructor(t){super(),ci(this,t,Sb,yb,li,{cancelIcon:0,step:2})}}function Eb(n){let t;return{c(){t=kn("h3"),ie(t,"id",n[1]),ie(t,"class","shepherd-title")},m(e,i){En(e,t,i),n[3](t)},p(e,[i]){i&2&&ie(t,"id",e[1])},i:on,o:on,d(e){e&&hn(t),n[3](null)}}}function bb(n,t,e){let{labelId:i,element:s,title:r}=t;Uu(()=>{Ti(r)&&e(2,r=r()),e(0,s.innerHTML=r,s)});function o(a){cr[a?"unshift":"push"](()=>{s=a,e(0,s)})}return n.$$set=a=>{"labelId"in a&&e(1,i=a.labelId),"element"in a&&e(0,s=a.element),"title"in a&&e(2,r=a.title)},[s,i,r,o]}class wb extends ui{constructor(t){super(),ci(this,t,bb,Eb,li,{labelId:1,element:0,title:2})}}function Gd(n){let t,e;return t=new wb({props:{labelId:n[0],title:n[2]}}),{c(){gs(t.$$.fragment)},m(i,s){Ci(t,i,s),e=!0},p(i,s){const r={};s&1&&(r.labelId=i[0]),s&4&&(r.title=i[2]),t.$set(r)},i(i){e||($t(t.$$.fragment,i),e=!0)},o(i){ge(t.$$.fragment,i),e=!1},d(i){Pi(t,i)}}}function Wd(n){let t,e;return t=new Mb({props:{cancelIcon:n[3],step:n[1]}}),{c(){gs(t.$$.fragment)},m(i,s){Ci(t,i,s),e=!0},p(i,s){const r={};s&8&&(r.cancelIcon=i[3]),s&2&&(r.step=i[1]),t.$set(r)},i(i){e||($t(t.$$.fragment,i),e=!0)},o(i){ge(t.$$.fragment,i),e=!1},d(i){Pi(t,i)}}}function Tb(n){let t,e,i,s=n[2]&&Gd(n),r=n[3]&&n[3].enabled&&Wd(n);return{c(){t=kn("header"),s&&s.c(),e=_a(),r&&r.c(),ie(t,"class","shepherd-header")},m(o,a){En(o,t,a),s&&s.m(t,null),lr(t,e),r&&r.m(t,null),i=!0},p(o,[a]){o[2]?s?(s.p(o,a),a&4&&$t(s,1)):(s=Gd(o),s.c(),$t(s,1),s.m(t,e)):s&&(ss(),ge(s,1,1,()=>{s=null}),rs()),o[3]&&o[3].enabled?r?(r.p(o,a),a&8&&$t(r,1)):(r=Wd(o),r.c(),$t(r,1),r.m(t,null)):r&&(ss(),ge(r,1,1,()=>{r=null}),rs())},i(o){i||($t(s),$t(r),i=!0)},o(o){ge(s),ge(r),i=!1},d(o){o&&hn(t),s&&s.d(),r&&r.d()}}}function Ab(n,t,e){let{labelId:i,step:s}=t,r,o;return n.$$set=a=>{"labelId"in a&&e(0,i=a.labelId),"step"in a&&e(1,s=a.step)},n.$$.update=()=>{n.$$.dirty&2&&(e(2,r=s.options.title),e(3,o=s.options.cancelIcon))},[i,s,r,o]}class Rb extends ui{constructor(t){super(),ci(this,t,Ab,Tb,li,{labelId:0,step:1})}}function Cb(n){let t;return{c(){t=kn("div"),ie(t,"class","shepherd-text"),ie(t,"id",n[1])},m(e,i){En(e,t,i),n[3](t)},p(e,[i]){i&2&&ie(t,"id",e[1])},i:on,o:on,d(e){e&&hn(t),n[3](null)}}}function Pb(n,t,e){let{descriptionId:i,element:s,step:r}=t;Uu(()=>{let{text:a}=r.options;Ti(a)&&(a=a.call(r)),rr(a)?s.appendChild(a):e(0,s.innerHTML=a,s)});function o(a){cr[a?"unshift":"push"](()=>{s=a,e(0,s)})}return n.$$set=a=>{"descriptionId"in a&&e(1,i=a.descriptionId),"element"in a&&e(0,s=a.element),"step"in a&&e(2,r=a.step)},[s,i,r,o]}class Db extends ui{constructor(t){super(),ci(this,t,Pb,Cb,li,{descriptionId:1,element:0,step:2})}}function Xd(n){let t,e;return t=new Rb({props:{labelId:n[1],step:n[2]}}),{c(){gs(t.$$.fragment)},m(i,s){Ci(t,i,s),e=!0},p(i,s){const r={};s&2&&(r.labelId=i[1]),s&4&&(r.step=i[2]),t.$set(r)},i(i){e||($t(t.$$.fragment,i),e=!0)},o(i){ge(t.$$.fragment,i),e=!1},d(i){Pi(t,i)}}}function jd(n){let t,e;return t=new Db({props:{descriptionId:n[0],step:n[2]}}),{c(){gs(t.$$.fragment)},m(i,s){Ci(t,i,s),e=!0},p(i,s){const r={};s&1&&(r.descriptionId=i[0]),s&4&&(r.step=i[2]),t.$set(r)},i(i){e||($t(t.$$.fragment,i),e=!0)},o(i){ge(t.$$.fragment,i),e=!1},d(i){Pi(t,i)}}}function Yd(n){let t,e;return t=new xb({props:{step:n[2]}}),{c(){gs(t.$$.fragment)},m(i,s){Ci(t,i,s),e=!0},p(i,s){const r={};s&4&&(r.step=i[2]),t.$set(r)},i(i){e||($t(t.$$.fragment,i),e=!0)},o(i){ge(t.$$.fragment,i),e=!1},d(i){Pi(t,i)}}}function Ib(n){let t,e=!Fe(n[2].options.title)||n[2].options.cancelIcon&&n[2].options.cancelIcon.enabled,i,s=!Fe(n[2].options.text),r,o=Array.isArray(n[2].options.buttons)&&n[2].options.buttons.length,a,l=e&&Xd(n),c=s&&jd(n),u=o&&Yd(n);return{c(){t=kn("div"),l&&l.c(),i=_a(),c&&c.c(),r=_a(),u&&u.c(),ie(t,"class","shepherd-content")},m(h,d){En(h,t,d),l&&l.m(t,null),lr(t,i),c&&c.m(t,null),lr(t,r),u&&u.m(t,null),a=!0},p(h,[d]){d&4&&(e=!Fe(h[2].options.title)||h[2].options.cancelIcon&&h[2].options.cancelIcon.enabled),e?l?(l.p(h,d),d&4&&$t(l,1)):(l=Xd(h),l.c(),$t(l,1),l.m(t,i)):l&&(ss(),ge(l,1,1,()=>{l=null}),rs()),d&4&&(s=!Fe(h[2].options.text)),s?c?(c.p(h,d),d&4&&$t(c,1)):(c=jd(h),c.c(),$t(c,1),c.m(t,r)):c&&(ss(),ge(c,1,1,()=>{c=null}),rs()),d&4&&(o=Array.isArray(h[2].options.buttons)&&h[2].options.buttons.length),o?u?(u.p(h,d),d&4&&$t(u,1)):(u=Yd(h),u.c(),$t(u,1),u.m(t,null)):u&&(ss(),ge(u,1,1,()=>{u=null}),rs())},i(h){a||($t(l),$t(c),$t(u),a=!0)},o(h){ge(l),ge(c),ge(u),a=!1},d(h){h&&hn(t),l&&l.d(),c&&c.d(),u&&u.d()}}}function Lb(n,t,e){let{descriptionId:i,labelId:s,step:r}=t;return n.$$set=o=>{"descriptionId"in o&&e(0,i=o.descriptionId),"labelId"in o&&e(1,s=o.labelId),"step"in o&&e(2,r=o.step)},[i,s,r]}class Ub extends ui{constructor(t){super(),ci(this,t,Lb,Ib,li,{descriptionId:0,labelId:1,step:2})}}function qd(n){let t;return{c(){t=kn("div"),ie(t,"class","shepherd-arrow"),ie(t,"data-popper-arrow","")},m(e,i){En(e,t,i)},d(e){e&&hn(t)}}}function Ob(n){let t,e,i,s,r,o,a,l,c=n[4].options.arrow&&n[4].options.attachTo&&n[4].options.attachTo.element&&n[4].options.attachTo.on&&qd();i=new Ub({props:{descriptionId:n[2],labelId:n[3],step:n[4]}});let u=[{"aria-describedby":s=Fe(n[4].options.text)?null:n[2]},{"aria-labelledby":r=n[4].options.title?n[3]:null},n[1],{open:"true"}],h={};for(let d=0;d<u.length;d+=1)h=QE(h,u[d]);return{c(){t=kn("dialog"),c&&c.c(),e=_a(),gs(i.$$.fragment),Nd(t,h),Fs(t,"shepherd-has-cancel-icon",n[5]),Fs(t,"shepherd-has-title",n[6]),Fs(t,"shepherd-element",!0)},m(d,f){En(d,t,f),c&&c.m(t,null),lr(t,e),Ci(i,t,null),n[18](t),o=!0,a||(l=Ia(t,"keydown",n[7]),a=!0)},p(d,[f]){d[4].options.arrow&&d[4].options.attachTo&&d[4].options.attachTo.element&&d[4].options.attachTo.on?c||(c=qd(),c.c(),c.m(t,e)):c&&(c.d(1),c=null);const m={};f&4&&(m.descriptionId=d[2]),f&8&&(m.labelId=d[3]),f&16&&(m.step=d[4]),i.$set(m),Nd(t,h=hb(u,[(!o||f&20&&s!==(s=Fe(d[4].options.text)?null:d[2]))&&{"aria-describedby":s},(!o||f&24&&r!==(r=d[4].options.title?d[3]:null))&&{"aria-labelledby":r},f&2&&d[1],{open:"true"}])),Fs(t,"shepherd-has-cancel-icon",d[5]),Fs(t,"shepherd-has-title",d[6]),Fs(t,"shepherd-element",!0)},i(d){o||($t(i.$$.fragment,d),o=!0)},o(d){ge(i.$$.fragment,d),o=!1},d(d){d&&hn(t),c&&c.d(),Pi(i),n[18](null),a=!1,l()}}}const Fb=9,Nb=27,Bb=37,kb=39;function Kd(n){return n.split(" ").filter(t=>!!t.length)}function zb(n,t,e){let{attachToElement:i,attachTofocusableDialogElements:s,classPrefix:r,element:o,descriptionId:a,focusableAttachToElements:l,firstFocusableAttachToElement:c,lastFocusableAttachToElement:u,firstFocusableDialogElement:h,focusableDialogElements:d,lastFocusableDialogElement:f,labelId:m,step:_,dataStepId:g}=t,p,b,M;const v=()=>o;rb(()=>{e(1,g={[`data-${r}shepherd-step-id`]:_.id}),e(13,d=[...o.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')]),e(12,h=d[0]),e(14,f=d[d.length-1]);const y=_._getResolvedAttachToOptions();y!=null&&y.element&&(e(8,i=y.element),e(8,i.tabIndex=0,i),e(9,l=[i,...i.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')]),e(10,c=l[0]),e(11,u=l[l.length-1]),i.addEventListener("keydown",L))}),ob(()=>{var y;(y=i)==null||y.removeEventListener("keydown",L)}),Uu(()=>{M!==_.options.classes&&T()});function T(){R(M),M=_.options.classes,P(M)}function R(y){if(Gr(y)){const A=Kd(y);A.length&&o.classList.remove(...A)}}function P(y){if(Gr(y)){const A=Kd(y);A.length&&o.classList.add(...A)}}const L=y=>{const{tour:A}=_;switch(y.keyCode){case Fb:if((!l||l.length===0)&&d.length===0){y.preventDefault();break}if(y.shiftKey)if(document.activeElement===h||document.activeElement.classList.contains("shepherd-element")){var N;y.preventDefault(),((N=u)!=null?N:f).focus()}else document.activeElement===c&&(y.preventDefault(),f.focus());else if(document.activeElement===f){var z;y.preventDefault(),((z=c)!=null?z:h).focus()}else document.activeElement===u&&(y.preventDefault(),h.focus());break;case Nb:A.options.exitOnEsc&&(y.preventDefault(),y.stopPropagation(),_.cancel());break;case Bb:A.options.keyboardNavigation&&(y.preventDefault(),y.stopPropagation(),A.back());break;case kb:A.options.keyboardNavigation&&(y.preventDefault(),y.stopPropagation(),A.next());break}};function E(y){cr[y?"unshift":"push"](()=>{o=y,e(0,o)})}return n.$$set=y=>{"attachToElement"in y&&e(8,i=y.attachToElement),"attachTofocusableDialogElements"in y&&e(15,s=y.attachTofocusableDialogElements),"classPrefix"in y&&e(16,r=y.classPrefix),"element"in y&&e(0,o=y.element),"descriptionId"in y&&e(2,a=y.descriptionId),"focusableAttachToElements"in y&&e(9,l=y.focusableAttachToElements),"firstFocusableAttachToElement"in y&&e(10,c=y.firstFocusableAttachToElement),"lastFocusableAttachToElement"in y&&e(11,u=y.lastFocusableAttachToElement),"firstFocusableDialogElement"in y&&e(12,h=y.firstFocusableDialogElement),"focusableDialogElements"in y&&e(13,d=y.focusableDialogElements),"lastFocusableDialogElement"in y&&e(14,f=y.lastFocusableDialogElement),"labelId"in y&&e(3,m=y.labelId),"step"in y&&e(4,_=y.step),"dataStepId"in y&&e(1,g=y.dataStepId)},n.$$.update=()=>{n.$$.dirty&16&&(e(5,p=_.options&&_.options.cancelIcon&&_.options.cancelIcon.enabled),e(6,b=_.options&&_.options.title))},[o,g,a,m,_,p,b,L,i,l,c,u,h,d,f,s,r,v,E]}class Hb extends ui{constructor(t){super(),ci(this,t,zb,Ob,li,{attachToElement:8,attachTofocusableDialogElements:15,classPrefix:16,element:0,descriptionId:2,focusableAttachToElements:9,firstFocusableAttachToElement:10,lastFocusableAttachToElement:11,firstFocusableDialogElement:12,focusableDialogElements:13,lastFocusableDialogElement:14,labelId:3,step:4,dataStepId:1,getElement:17})}get getElement(){return this.$$.ctx[17]}}class Gc extends yu{constructor(t,e={}){return super(),this._resolvedAttachTo=void 0,this._resolvedExtraHighlightElements=void 0,this.classPrefix=void 0,this.el=void 0,this.target=void 0,this.tour=void 0,this.tour=t,this.classPrefix=this.tour.options?hp(this.tour.options.classPrefix):"",this.styles=t.styles,this._resolvedAttachTo=null,Eu(this),this._setOptions(e),this}cancel(){this.tour.cancel(),this.trigger("cancel")}complete(){this.tour.complete(),this.trigger("complete")}destroy(){YE(this),rr(this.el)&&(this.el.remove(),this.el=null),this._updateStepTargetOnHide(),this.trigger("destroy")}getTour(){return this.tour}hide(){var t;(t=this.tour.modal)==null||t.hide(),this.trigger("before-hide"),this.el&&(this.el.hidden=!0),this._updateStepTargetOnHide(),this.trigger("hide")}_resolveExtraHiglightElements(){return this._resolvedExtraHighlightElements=iE(this),this._resolvedExtraHighlightElements}_resolveAttachToOptions(){return this._resolvedAttachTo=nE(this),this._resolvedAttachTo}_getResolvedAttachToOptions(){return this._resolvedAttachTo===null?this._resolveAttachToOptions():this._resolvedAttachTo}isOpen(){return!!(this.el&&!this.el.hidden)}show(){return Ti(this.options.beforeShowPromise)?Promise.resolve(this.options.beforeShowPromise()).then(()=>this._show()):Promise.resolve(this._show())}updateStepOptions(t){Object.assign(this.options,t),this.shepherdElementComponent&&this.shepherdElementComponent.$set({step:this})}getElement(){return this.el}getTarget(){return this.target}_createTooltipContent(){const t=`${this.id}-description`,e=`${this.id}-label`;return this.shepherdElementComponent=new Hb({target:this.tour.options.stepsContainer||document.body,props:{classPrefix:this.classPrefix,descriptionId:t,labelId:e,step:this,styles:this.styles}}),this.shepherdElementComponent.getElement()}_scrollTo(t){const{element:e}=this._getResolvedAttachToOptions();Ti(this.options.scrollToHandler)?this.options.scrollToHandler(e):OM(e)&&typeof e.scrollIntoView=="function"&&e.scrollIntoView(t)}_getClassOptions(t){const e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions,i=t.classes?t.classes:"",s=e&&e.classes?e.classes:"",r=[...i.split(" "),...s.split(" ")],o=new Set(r);return Array.from(o).join(" ").trim()}_setOptions(t={}){let e=this.tour&&this.tour.options&&this.tour.options.defaultStepOptions;e=Mu({},e||{}),this.options=Object.assign({arrow:!0},e,t,jE(e,t));const{when:i}=this.options;this.options.classes=this._getClassOptions(t),this.destroy(),this.id=this.options.id||`step-${fp()}`,i&&Object.keys(i).forEach(s=>{this.on(s,i[s],this)})}_setupElements(){Fe(this.el)||this.destroy(),this.el=this._createTooltipContent(),this.options.advanceOn&&QM(this),XE(this)}_show(){var t;this.trigger("before-show"),this._resolveAttachToOptions(),this._resolveExtraHiglightElements(),this._setupElements(),this.tour.modal||this.tour.setupModal(),(t=this.tour.modal)==null||t.setupForStep(this),this._styleTargetElementForStep(this),this.el&&(this.el.hidden=!1),this.options.scrollTo&&setTimeout(()=>{this._scrollTo(this.options.scrollTo)}),this.el&&(this.el.hidden=!1);const e=this.shepherdElementComponent.getElement(),i=this.target||document.body,s=this._resolvedExtraHighlightElements;i.classList.add(`${this.classPrefix}shepherd-enabled`),i.classList.add(`${this.classPrefix}shepherd-target`),e.classList.add("shepherd-enabled"),s?.forEach(r=>{r.classList.add(`${this.classPrefix}shepherd-enabled`),r.classList.add(`${this.classPrefix}shepherd-target`)}),this.trigger("show")}_styleTargetElementForStep(t){const e=t.target,i=t._resolvedExtraHighlightElements;if(!e)return;const s=t.options.highlightClass;s&&(e.classList.add(s),i?.forEach(r=>r.classList.add(s))),e.classList.remove("shepherd-target-click-disabled"),i?.forEach(r=>r.classList.remove("shepherd-target-click-disabled")),t.options.canClickTarget===!1&&(e.classList.add("shepherd-target-click-disabled"),i?.forEach(r=>r.classList.add("shepherd-target-click-disabled")))}_updateStepTargetOnHide(){const t=this.target||document.body,e=this._resolvedExtraHighlightElements,i=this.options.highlightClass;i&&(t.classList.remove(i),e?.forEach(s=>s.classList.remove(i))),t.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`),e?.forEach(s=>{s.classList.remove("shepherd-target-click-disabled",`${this.classPrefix}shepherd-enabled`,`${this.classPrefix}shepherd-target`)})}}function Vb(n){if(n){const{steps:t}=n;t.forEach(e=>{e.options&&e.options.canClickTarget===!1&&e.options.attachTo&&(rr(e.target)&&e.target.classList.remove("shepherd-target-click-disabled"),e._resolvedExtraHighlightElements&&e._resolvedExtraHighlightElements.forEach(i=>{rr(i)&&i.classList.remove("shepherd-target-click-disabled")}))})}}function Gb(n){let t="";const{innerWidth:e,innerHeight:i}=window;return n.forEach(s=>{const{width:r,height:o,x:a=0,y:l=0,r:c=0}=s,{topLeft:u=0,topRight:h=0,bottomRight:d=0,bottomLeft:f=0}=typeof c=="number"?{topLeft:c,topRight:c,bottomRight:c,bottomLeft:c}:c;t+=`M${a+u},${l}      a${u},${u},0,0,0-${u},${u}      V${o+l-f}      a${f},${f},0,0,0,${f},${f}      H${r+a-d}      a${d},${d},0,0,0,${d}-${d}      V${l+h}      a${h},${h},0,0,0-${h}-${h}      Z`}),`M${e},${i}          H0          V0          H${e}          V${i}          Z          ${t}`.replace(/\s/g,"")}function Wb(n){let t,e,i,s,r;return{c(){t=Fd("svg"),e=Fd("path"),ie(e,"d",n[2]),ie(t,"class",i=`${n[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)},m(o,a){En(o,t,a),lr(t,e),n[11](t),s||(r=Ia(t,"touchmove",n[3]),s=!0)},p(o,[a]){a&4&&ie(e,"d",o[2]),a&2&&i!==(i=`${o[1]?"shepherd-modal-is-visible":""} shepherd-modal-overlay-container`)&&ie(t,"class",i)},i:on,o:on,d(o){o&&hn(t),n[11](null),s=!1,r()}}}function Ap(n){if(!n)return null;const e=n instanceof HTMLElement&&window.getComputedStyle(n).overflowY;return e!=="hidden"&&e!=="visible"&&n.scrollHeight>=n.clientHeight?n:Ap(n.parentElement)}function Xb(n){let t={top:0,left:0};if(!n)return t;let e=n.ownerDocument.defaultView;for(;e!==window.top;){var i;const o=(i=e)==null?void 0:i.frameElement;if(o){var s,r;const a=o.getBoundingClientRect();t.top+=a.top+((s=a.scrollTop)!=null?s:0),t.left+=a.left+((r=a.scrollLeft)!=null?r:0)}e=e.parent}return t}function jb(n,t){const e=n.getBoundingClientRect();let i=e.y||e.top,s=e.bottom||i+e.height;if(t){const o=t.getBoundingClientRect(),a=o.y||o.top,l=o.bottom||a+o.height;i=Math.max(i,a),s=Math.min(s,l)}const r=Math.max(s-i,0);return{y:i,height:r}}function Yb(n,t,e){let{element:i,openingProperties:s}=t,r=!1,o,a;c();const l=()=>i;function c(){e(4,s=[{width:0,height:0,x:0,y:0,r:0}])}function u(){e(1,r=!1),p()}function h(v=0,T=0,R=0,P=0,L,E,y){if(E){const A=[E,...y||[]];e(4,s=[]);for(const N of A){if(!N||A.indexOf(N)!==A.lastIndexOf(N))continue;const{y:z,height:B}=jb(N,L),{x:Y,width:G,left:K}=N.getBoundingClientRect();A.some(et=>{if(et===N)return!1;const it=et.getBoundingClientRect();return Y>=it.left&&Y+G<=it.right&&z>=it.top&&z+B<=it.bottom})||s.push({width:G+v*2,height:B+v*2,x:(Y||K)+R-v,y:z+P-v,r:T})}}else c()}function d(v){p(),v.tour.options.useModalOverlay?(b(v),f()):u()}function f(){e(1,r=!0)}const m=v=>{v.preventDefault()},_=v=>{v.stopPropagation()};function g(){window.addEventListener("touchmove",m,{passive:!1})}function p(){o&&(cancelAnimationFrame(o),o=void 0),window.removeEventListener("touchmove",m,{passive:!1})}function b(v){const{modalOverlayOpeningPadding:T,modalOverlayOpeningRadius:R,modalOverlayOpeningXOffset:P=0,modalOverlayOpeningYOffset:L=0}=v.options,E=Xb(v.target),y=Ap(v.target),A=()=>{o=void 0,h(T,R,P+E.left,L+E.top,y,v.target,v._resolvedExtraHighlightElements),o=requestAnimationFrame(A)};A(),g()}function M(v){cr[v?"unshift":"push"](()=>{i=v,e(0,i)})}return n.$$set=v=>{"element"in v&&e(0,i=v.element),"openingProperties"in v&&e(4,s=v.openingProperties)},n.$$.update=()=>{n.$$.dirty&16&&e(2,a=Gb(s))},[i,r,a,_,s,l,c,u,h,d,f,M]}class qb extends ui{constructor(t){super(),ci(this,t,Yb,Wb,li,{element:0,openingProperties:4,getElement:5,closeModalOpening:6,hide:7,positionModal:8,setupForStep:9,show:10})}get getElement(){return this.$$.ctx[5]}get closeModalOpening(){return this.$$.ctx[6]}get hide(){return this.$$.ctx[7]}get positionModal(){return this.$$.ctx[8]}get setupForStep(){return this.$$.ctx[9]}get show(){return this.$$.ctx[10]}}class Kb extends yu{constructor(){super(),this.activeTour=void 0,Eu(this)}}class $b extends yu{constructor(t={}){super(),this.trackedEvents=["active","cancel","complete","show"],this.classPrefix=void 0,this.currentStep=void 0,this.focusedElBeforeOpen=void 0,this.id=void 0,this.modal=void 0,this.options=void 0,this.steps=void 0,Eu(this);const e={exitOnEsc:!0,keyboardNavigation:!0};return this.options=Object.assign({},e,t),this.classPrefix=hp(this.options.classPrefix),this.steps=[],this.addSteps(this.options.steps),["active","cancel","complete","inactive","show","start"].map(s=>{(r=>{this.on(r,o=>{o=o||{},o.tour=this,Qi.trigger(r,o)})})(s)}),this._setTourID(t.id),this}addStep(t,e){let i=t;return i instanceof Gc?i.tour=this:i=new Gc(this,i),Fe(e)?this.steps.push(i):this.steps.splice(e,0,i),i}addSteps(t){return Array.isArray(t)&&t.forEach(e=>{this.addStep(e)}),this}back(){const t=this.steps.indexOf(this.currentStep);this.show(t-1,!1)}async cancel(){if(this.options.confirmCancel){const t=this.options.confirmCancelMessage||"Are you sure you want to stop the tour?";let e;Ti(this.options.confirmCancel)?e=await this.options.confirmCancel():e=window.confirm(t),e&&this._done("cancel")}else this._done("cancel")}complete(){this._done("complete")}getById(t){return this.steps.find(e=>e.id===t)}getCurrentStep(){return this.currentStep}hide(){const t=this.getCurrentStep();if(t)return t.hide()}isActive(){return Qi.activeTour===this}next(){const t=this.steps.indexOf(this.currentStep);t===this.steps.length-1?this.complete():this.show(t+1,!0)}removeStep(t){const e=this.getCurrentStep();this.steps.some((i,s)=>{if(i.id===t)return i.isOpen()&&i.hide(),i.destroy(),this.steps.splice(s,1),!0}),e&&e.id===t&&(this.currentStep=void 0,this.steps.length?this.show(0):this.cancel())}show(t=0,e=!0){const i=Gr(t)?this.getById(t):this.steps[t];i&&(this._updateStateBeforeShow(),Ti(i.options.showOn)&&!i.options.showOn()?this._skipStep(i,e):(this.currentStep=i,this.trigger("show",{step:i,previous:this.currentStep}),i.show()))}async start(){this.trigger("start"),this.focusedElBeforeOpen=document.activeElement,this.currentStep=null,this.setupModal(),this._setupActiveTour(),this.next()}_done(t){const e=this.steps.indexOf(this.currentStep);if(Array.isArray(this.steps)&&this.steps.forEach(i=>i.destroy()),Vb(this),this.trigger(t,{index:e}),Qi.activeTour=null,this.trigger("inactive",{tour:this}),this.modal&&this.modal.hide(),(t==="cancel"||t==="complete")&&this.modal){const i=document.querySelector(".shepherd-modal-overlay-container");i&&(i.remove(),this.modal=null)}rr(this.focusedElBeforeOpen)&&this.focusedElBeforeOpen.focus()}_setupActiveTour(){this.trigger("active",{tour:this}),Qi.activeTour=this}setupModal(){this.modal=new qb({target:this.options.modalContainer||document.body,props:{styles:this.styles}})}_skipStep(t,e){const i=this.steps.indexOf(t);if(i===this.steps.length-1)this.complete();else{const s=e?i+1:i-1;this.show(s,e)}}_updateStateBeforeShow(){this.currentStep&&this.currentStep.hide(),this.isActive()||this._setupActiveTour()}_setTourID(t){const e=this.options.tourName||"tour",i=t||fp();this.id=`${e}--${i}`}}const Qi=new Kb,Rp=typeof window>"u";Qi.Step=Rp?tE:Gc;Qi.Tour=Rp?eE:$b;const Cp="solarsim.tour.v1.completed";let le;function Zb(){try{return localStorage.getItem(Cp)==="true"}catch(n){return console.error("Could not access localStorage for tour status:",n),!0}}function $d(){try{localStorage.setItem(Cp,"true")}catch(n){console.error("Could not save tour status to localStorage:",n)}}function Jb(){le=new Qi.Tour({useModalOverlay:!0,defaultStepOptions:{classes:"shepherd-theme-arrows",scrollTo:{behavior:"smooth",block:"center"}}}),le.addStep({id:"step-1-quick-access",text:"This is the new Quick Access Toolbar. Click on a planet to instantly focus on it.",attachTo:{element:"#quick-access-toolbar",on:"bottom"},buttons:[{text:"Next",action:le.next}]}),le.addStep({id:"step-2-detailed-selector",text:"For more options, click here to open the detailed selector panel.",attachTo:{element:"#open-celestial-selector-btn",on:"right"},buttons:[{text:"Back",action:le.back},{text:"Next",action:()=>{document.getElementById("open-celestial-selector-btn")?.click(),le.next()}}]}),le.addStep({id:"step-3-favorites",text:"You can search, filter by type, and now filter by your favorite bodies! Click the star to favorite an item.",attachTo:{element:"#celestial-selector-panel",on:"left"},buttons:[{text:"Back",action:()=>{document.getElementById("close-celestial-selector-btn")?.click(),le.back()}},{text:"Next",action:()=>{document.getElementById("close-celestial-selector-btn")?.click(),le.next()}}]}),le.addStep({id:"step-4-contextual-hud",text:"When you click a body in the 3D view, a small control hub will appear, giving you quick access to common actions.",attachTo:{element:"#bg",on:"top"},buttons:[{text:"Back",action:le.back},{text:"Next",action:le.next}]}),le.addStep({id:"step-5-time-controls",text:"Control the flow of time here. Play, pause, and adjust the simulation speed.",attachTo:{element:"#time-controls",on:"bottom"},buttons:[{text:"Back",action:le.back},{text:"Next",action:le.next}]}),le.addStep({id:"step-6-visuals-panel",text:"Open the Visuals panel to adjust settings like trail length and the visual scale of planets.",attachTo:{element:"#visuals-toggle-btn",on:"bottom"},buttons:[{text:"Back",action:le.back},{text:"Next",action:le.next}]}),le.addStep({id:"step-7-help",text:"Click here anytime to see keyboard shortcuts or to restart this tour.",attachTo:{element:"#help-button",on:"top"},buttons:[{text:"Back",action:le.back},{text:"Finish",action:le.complete}]}),le.on("complete",$d),le.on("cancel",$d)}function Qb(){Jb(),Zb()||setTimeout(()=>le.start(),1e3);const n=document.getElementById("help-overlay");if(n){const t=document.createElement("button");t.textContent="Relaunch Tour",t.className="btn",t.style.marginTop="15px",t.addEventListener("click",()=>{document.getElementById("help-overlay-close")?.click(),le.start()});const e=n.querySelector("#help-overlay-close");e?.parentNode?.insertBefore(t,e)}}class tw{constructor(){this.toggleButton=null}init(){this.createToggleButton()}createToggleButton(){this.toggleButton=document.createElement("button"),this.toggleButton.className="sidebar-toggle",this.toggleButton.innerHTML="☰",this.toggleButton.setAttribute("aria-label","Toggle sidebar"),this.toggleButton.setAttribute("aria-controls","sidebar"),this.toggleButton.setAttribute("aria-expanded","false"),this.toggleButton.addEventListener("click",()=>this.toggleSidebar()),document.body.appendChild(this.toggleButton)}toggleSidebar(){const t=document.querySelector(".sidebar");if(t&&this.toggleButton){const e=t.classList.toggle("open");this.toggleButton.setAttribute("aria-expanded",String(e))}else console.error("LayoutManager: .sidebar element not found. Cannot toggle.")}}function ew(n){const t=new Map;n.forEach(i=>{let s;i.parentId?i.parentId==="sun"?s="planet":s="moon":s="star",t.set(i.id,{id:i.id,name:i.name,spec:i,children:[],parent:null,depth:0,expanded:!1,visible:!0,element:null,type:s})});const e=[];return t.forEach(i=>{const s=i.spec.parentId;if(s&&t.has(s)){const r=t.get(s);i.parent=r,i.depth=r.depth+1,r.children.push(i)}else e.push(i)}),e}function ai(n){return Array.isArray?Array.isArray(n):Ip(n)==="[object Array]"}function nw(n){if(typeof n=="string")return n;let t=n+"";return t=="0"&&1/n==-1/0?"-0":t}function iw(n){return n==null?"":nw(n)}function In(n){return typeof n=="string"}function Pp(n){return typeof n=="number"}function sw(n){return n===!0||n===!1||rw(n)&&Ip(n)=="[object Boolean]"}function Dp(n){return typeof n=="object"}function rw(n){return Dp(n)&&n!==null}function tn(n){return n!=null}function Pl(n){return!n.trim().length}function Ip(n){return n==null?n===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(n)}const ow="Incorrect 'index' type",aw=n=>`Invalid value for key ${n}`,lw=n=>`Pattern length exceeds max of ${n}.`,cw=n=>`Missing ${n} property in key`,uw=n=>`Property 'weight' in key '${n}' must be a positive integer`,Zd=Object.prototype.hasOwnProperty;class hw{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach(i=>{let s=Lp(i);this._keys.push(s),this._keyMap[s.id]=s,e+=s.weight}),this._keys.forEach(i=>{i.weight/=e})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Lp(n){let t=null,e=null,i=null,s=1,r=null;if(In(n)||ai(n))i=n,t=Jd(n),e=Wc(n);else{if(!Zd.call(n,"name"))throw new Error(cw("name"));const o=n.name;if(i=o,Zd.call(n,"weight")&&(s=n.weight,s<=0))throw new Error(uw(o));t=Jd(o),e=Wc(o),r=n.getFn}return{path:t,id:e,weight:s,src:i,getFn:r}}function Jd(n){return ai(n)?n:n.split(".")}function Wc(n){return ai(n)?n.join("."):n}function dw(n,t){let e=[],i=!1;const s=(r,o,a)=>{if(tn(r))if(!o[a])e.push(r);else{let l=o[a];const c=r[l];if(!tn(c))return;if(a===o.length-1&&(In(c)||Pp(c)||sw(c)))e.push(iw(c));else if(ai(c)){i=!0;for(let u=0,h=c.length;u<h;u+=1)s(c[u],o,a+1)}else o.length&&s(c,o,a+1)}};return s(n,In(t)?t.split("."):t,0),i?e:e[0]}const fw={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},pw={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(n,t)=>n.score===t.score?n.idx<t.idx?-1:1:n.score<t.score?-1:1},mw={location:0,threshold:.6,distance:100},gw={useExtendedSearch:!1,getFn:dw,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var Dt={...pw,...fw,...mw,...gw};const _w=/[^ ]+/g;function vw(n=1,t=3){const e=new Map,i=Math.pow(10,t);return{get(s){const r=s.match(_w).length;if(e.has(r))return e.get(r);const o=1/Math.pow(r,.5*n),a=parseFloat(Math.round(o*i)/i);return e.set(r,a),a},clear(){e.clear()}}}class Ou{constructor({getFn:t=Dt.getFn,fieldNormWeight:e=Dt.fieldNormWeight}={}){this.norm=vw(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((e,i)=>{this._keysMap[e.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,In(this.docs[0])?this.docs.forEach((t,e)=>{this._addString(t,e)}):this.docs.forEach((t,e)=>{this._addObject(t,e)}),this.norm.clear())}add(t){const e=this.size();In(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,i=this.size();e<i;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!tn(t)||Pl(t))return;let i={v:t,i:e,n:this.norm.get(t)};this.records.push(i)}_addObject(t,e){let i={i:e,$:{}};this.keys.forEach((s,r)=>{let o=s.getFn?s.getFn(t):this.getFn(t,s.path);if(tn(o)){if(ai(o)){let a=[];const l=[{nestedArrIndex:-1,value:o}];for(;l.length;){const{nestedArrIndex:c,value:u}=l.pop();if(tn(u))if(In(u)&&!Pl(u)){let h={v:u,i:c,n:this.norm.get(u)};a.push(h)}else ai(u)&&u.forEach((h,d)=>{l.push({nestedArrIndex:d,value:h})})}i.$[r]=a}else if(In(o)&&!Pl(o)){let a={v:o,n:this.norm.get(o)};i.$[r]=a}}}),this.records.push(i)}toJSON(){return{keys:this.keys,records:this.records}}}function Up(n,t,{getFn:e=Dt.getFn,fieldNormWeight:i=Dt.fieldNormWeight}={}){const s=new Ou({getFn:e,fieldNormWeight:i});return s.setKeys(n.map(Lp)),s.setSources(t),s.create(),s}function xw(n,{getFn:t=Dt.getFn,fieldNormWeight:e=Dt.fieldNormWeight}={}){const{keys:i,records:s}=n,r=new Ou({getFn:t,fieldNormWeight:e});return r.setKeys(i),r.setIndexRecords(s),r}function Ho(n,{errors:t=0,currentLocation:e=0,expectedLocation:i=0,distance:s=Dt.distance,ignoreLocation:r=Dt.ignoreLocation}={}){const o=t/n.length;if(r)return o;const a=Math.abs(i-e);return s?o+a/s:a?1:o}function yw(n=[],t=Dt.minMatchCharLength){let e=[],i=-1,s=-1,r=0;for(let o=n.length;r<o;r+=1){let a=n[r];a&&i===-1?i=r:!a&&i!==-1&&(s=r-1,s-i+1>=t&&e.push([i,s]),i=-1)}return n[r-1]&&r-i>=t&&e.push([i,r-1]),e}const Wi=32;function Sw(n,t,e,{location:i=Dt.location,distance:s=Dt.distance,threshold:r=Dt.threshold,findAllMatches:o=Dt.findAllMatches,minMatchCharLength:a=Dt.minMatchCharLength,includeMatches:l=Dt.includeMatches,ignoreLocation:c=Dt.ignoreLocation}={}){if(t.length>Wi)throw new Error(lw(Wi));const u=t.length,h=n.length,d=Math.max(0,Math.min(i,h));let f=r,m=d;const _=a>1||l,g=_?Array(h):[];let p;for(;(p=n.indexOf(t,m))>-1;){let P=Ho(t,{currentLocation:p,expectedLocation:d,distance:s,ignoreLocation:c});if(f=Math.min(P,f),m=p+u,_){let L=0;for(;L<u;)g[p+L]=1,L+=1}}m=-1;let b=[],M=1,v=u+h;const T=1<<u-1;for(let P=0;P<u;P+=1){let L=0,E=v;for(;L<E;)Ho(t,{errors:P,currentLocation:d+E,expectedLocation:d,distance:s,ignoreLocation:c})<=f?L=E:v=E,E=Math.floor((v-L)/2+L);v=E;let y=Math.max(1,d-E+1),A=o?h:Math.min(d+E,h)+u,N=Array(A+2);N[A+1]=(1<<P)-1;for(let B=A;B>=y;B-=1){let Y=B-1,G=e[n.charAt(Y)];if(_&&(g[Y]=+!!G),N[B]=(N[B+1]<<1|1)&G,P&&(N[B]|=(b[B+1]|b[B])<<1|1|b[B+1]),N[B]&T&&(M=Ho(t,{errors:P,currentLocation:Y,expectedLocation:d,distance:s,ignoreLocation:c}),M<=f)){if(f=M,m=Y,m<=d)break;y=Math.max(1,2*d-m)}}if(Ho(t,{errors:P+1,currentLocation:d,expectedLocation:d,distance:s,ignoreLocation:c})>f)break;b=N}const R={isMatch:m>=0,score:Math.max(.001,M)};if(_){const P=yw(g,a);P.length?l&&(R.indices=P):R.isMatch=!1}return R}function Mw(n){let t={};for(let e=0,i=n.length;e<i;e+=1){const s=n.charAt(e);t[s]=(t[s]||0)|1<<i-e-1}return t}const va=String.prototype.normalize?(n=>n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"")):(n=>n);class Op{constructor(t,{location:e=Dt.location,threshold:i=Dt.threshold,distance:s=Dt.distance,includeMatches:r=Dt.includeMatches,findAllMatches:o=Dt.findAllMatches,minMatchCharLength:a=Dt.minMatchCharLength,isCaseSensitive:l=Dt.isCaseSensitive,ignoreDiacritics:c=Dt.ignoreDiacritics,ignoreLocation:u=Dt.ignoreLocation}={}){if(this.options={location:e,threshold:i,distance:s,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreDiacritics:c,ignoreLocation:u},t=l?t:t.toLowerCase(),t=c?va(t):t,this.pattern=t,this.chunks=[],!this.pattern.length)return;const h=(f,m)=>{this.chunks.push({pattern:f,alphabet:Mw(f),startIndex:m})},d=this.pattern.length;if(d>Wi){let f=0;const m=d%Wi,_=d-m;for(;f<_;)h(this.pattern.substr(f,Wi),f),f+=Wi;if(m){const g=d-Wi;h(this.pattern.substr(g),g)}}else h(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,ignoreDiacritics:i,includeMatches:s}=this.options;if(t=e?t:t.toLowerCase(),t=i?va(t):t,this.pattern===t){let _={isMatch:!0,score:0};return s&&(_.indices=[[0,t.length-1]]),_}const{location:r,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:c,ignoreLocation:u}=this.options;let h=[],d=0,f=!1;this.chunks.forEach(({pattern:_,alphabet:g,startIndex:p})=>{const{isMatch:b,score:M,indices:v}=Sw(t,_,g,{location:r+p,distance:o,threshold:a,findAllMatches:l,minMatchCharLength:c,includeMatches:s,ignoreLocation:u});b&&(f=!0),d+=M,b&&v&&(h=[...h,...v])});let m={isMatch:f,score:f?d/this.chunks.length:1};return f&&s&&(m.indices=h),m}}class Di{constructor(t){this.pattern=t}static isMultiMatch(t){return Qd(t,this.multiRegex)}static isSingleMatch(t){return Qd(t,this.singleRegex)}search(){}}function Qd(n,t){const e=n.match(t);return e?e[1]:null}class Ew extends Di{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class bw extends Di{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const i=t.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,t.length-1]}}}class ww extends Di{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class Tw extends Di{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class Aw extends Di{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Rw extends Di{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class Fp extends Di{constructor(t,{location:e=Dt.location,threshold:i=Dt.threshold,distance:s=Dt.distance,includeMatches:r=Dt.includeMatches,findAllMatches:o=Dt.findAllMatches,minMatchCharLength:a=Dt.minMatchCharLength,isCaseSensitive:l=Dt.isCaseSensitive,ignoreDiacritics:c=Dt.ignoreDiacritics,ignoreLocation:u=Dt.ignoreLocation}={}){super(t),this._bitapSearch=new Op(t,{location:e,threshold:i,distance:s,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:l,ignoreDiacritics:c,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Np extends Di{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e=0,i;const s=[],r=this.pattern.length;for(;(i=t.indexOf(this.pattern,e))>-1;)e=i+r,s.push([i,e-1]);const o=!!s.length;return{isMatch:o,score:o?0:1,indices:s}}}const Xc=[Ew,Np,ww,Tw,Rw,Aw,bw,Fp],tf=Xc.length,Cw=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Pw="|";function Dw(n,t={}){return n.split(Pw).map(e=>{let i=e.trim().split(Cw).filter(r=>r&&!!r.trim()),s=[];for(let r=0,o=i.length;r<o;r+=1){const a=i[r];let l=!1,c=-1;for(;!l&&++c<tf;){const u=Xc[c];let h=u.isMultiMatch(a);h&&(s.push(new u(h,t)),l=!0)}if(!l)for(c=-1;++c<tf;){const u=Xc[c];let h=u.isSingleMatch(a);if(h){s.push(new u(h,t));break}}}return s})}const Iw=new Set([Fp.type,Np.type]);class Lw{constructor(t,{isCaseSensitive:e=Dt.isCaseSensitive,ignoreDiacritics:i=Dt.ignoreDiacritics,includeMatches:s=Dt.includeMatches,minMatchCharLength:r=Dt.minMatchCharLength,ignoreLocation:o=Dt.ignoreLocation,findAllMatches:a=Dt.findAllMatches,location:l=Dt.location,threshold:c=Dt.threshold,distance:u=Dt.distance}={}){this.query=null,this.options={isCaseSensitive:e,ignoreDiacritics:i,includeMatches:s,minMatchCharLength:r,findAllMatches:a,ignoreLocation:o,location:l,threshold:c,distance:u},t=e?t:t.toLowerCase(),t=i?va(t):t,this.pattern=t,this.query=Dw(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:s,ignoreDiacritics:r}=this.options;t=s?t:t.toLowerCase(),t=r?va(t):t;let o=0,a=[],l=0;for(let c=0,u=e.length;c<u;c+=1){const h=e[c];a.length=0,o=0;for(let d=0,f=h.length;d<f;d+=1){const m=h[d],{isMatch:_,indices:g,score:p}=m.search(t);if(_){if(o+=1,l+=p,i){const b=m.constructor.type;Iw.has(b)?a=[...a,...g]:a.push(g)}}else{l=0,o=0,a.length=0;break}}if(o){let d={isMatch:!0,score:l/o};return i&&(d.indices=a),d}}return{isMatch:!1,score:1}}}const jc=[];function Uw(...n){jc.push(...n)}function Yc(n,t){for(let e=0,i=jc.length;e<i;e+=1){let s=jc[e];if(s.condition(n,t))return new s(n,t)}return new Op(n,t)}const xa={AND:"$and",OR:"$or"},qc={PATH:"$path",PATTERN:"$val"},Kc=n=>!!(n[xa.AND]||n[xa.OR]),Ow=n=>!!n[qc.PATH],Fw=n=>!ai(n)&&Dp(n)&&!Kc(n),ef=n=>({[xa.AND]:Object.keys(n).map(t=>({[t]:n[t]}))});function Bp(n,t,{auto:e=!0}={}){const i=s=>{let r=Object.keys(s);const o=Ow(s);if(!o&&r.length>1&&!Kc(s))return i(ef(s));if(Fw(s)){const l=o?s[qc.PATH]:r[0],c=o?s[qc.PATTERN]:s[l];if(!In(c))throw new Error(aw(l));const u={keyId:Wc(l),pattern:c};return e&&(u.searcher=Yc(c,t)),u}let a={children:[],operator:r[0]};return r.forEach(l=>{const c=s[l];ai(c)&&c.forEach(u=>{a.children.push(i(u))})}),a};return Kc(n)||(n=ef(n)),i(n)}function Nw(n,{ignoreFieldNorm:t=Dt.ignoreFieldNorm}){n.forEach(e=>{let i=1;e.matches.forEach(({key:s,norm:r,score:o})=>{const a=s?s.weight:null;i*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:r))}),e.score=i})}function Bw(n,t){const e=n.matches;t.matches=[],tn(e)&&e.forEach(i=>{if(!tn(i.indices)||!i.indices.length)return;const{indices:s,value:r}=i;let o={indices:s,value:r};i.key&&(o.key=i.key.src),i.idx>-1&&(o.refIndex=i.idx),t.matches.push(o)})}function kw(n,t){t.score=n.score}function zw(n,t,{includeMatches:e=Dt.includeMatches,includeScore:i=Dt.includeScore}={}){const s=[];return e&&s.push(Bw),i&&s.push(kw),n.map(r=>{const{idx:o}=r,a={item:t[o],refIndex:o};return s.length&&s.forEach(l=>{l(r,a)}),a})}class dr{constructor(t,e={},i){this.options={...Dt,...e},this.options.useExtendedSearch,this._keyStore=new hw(this.options.keys),this.setCollection(t,i)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof Ou))throw new Error(ow);this._myIndex=e||Up(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){tn(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const e=[];for(let i=0,s=this._docs.length;i<s;i+=1){const r=this._docs[i];t(r,i)&&(this.removeAt(i),i-=1,s-=1,e.push(r))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:i,includeScore:s,shouldSort:r,sortFn:o,ignoreFieldNorm:a}=this.options;let l=In(t)?In(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Nw(l,{ignoreFieldNorm:a}),r&&l.sort(o),Pp(e)&&e>-1&&(l=l.slice(0,e)),zw(l,this._docs,{includeMatches:i,includeScore:s})}_searchStringList(t){const e=Yc(t,this.options),{records:i}=this._myIndex,s=[];return i.forEach(({v:r,i:o,n:a})=>{if(!tn(r))return;const{isMatch:l,score:c,indices:u}=e.searchIn(r);l&&s.push({item:r,idx:o,matches:[{score:c,value:r,norm:a,indices:u}]})}),s}_searchLogical(t){const e=Bp(t,this.options),i=(a,l,c)=>{if(!a.children){const{keyId:h,searcher:d}=a,f=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(l,h),searcher:d});return f&&f.length?[{idx:c,item:l,matches:f}]:[]}const u=[];for(let h=0,d=a.children.length;h<d;h+=1){const f=a.children[h],m=i(f,l,c);if(m.length)u.push(...m);else if(a.operator===xa.AND)return[]}return u},s=this._myIndex.records,r={},o=[];return s.forEach(({$:a,i:l})=>{if(tn(a)){let c=i(e,a,l);c.length&&(r[l]||(r[l]={idx:l,item:a,matches:[]},o.push(r[l])),c.forEach(({matches:u})=>{r[l].matches.push(...u)}))}}),o}_searchObjectList(t){const e=Yc(t,this.options),{keys:i,records:s}=this._myIndex,r=[];return s.forEach(({$:o,i:a})=>{if(!tn(o))return;let l=[];i.forEach((c,u)=>{l.push(...this._findMatches({key:c,value:o[u],searcher:e}))}),l.length&&r.push({idx:a,item:o,matches:l})}),r}_findMatches({key:t,value:e,searcher:i}){if(!tn(e))return[];let s=[];if(ai(e))e.forEach(({v:r,i:o,n:a})=>{if(!tn(r))return;const{isMatch:l,score:c,indices:u}=i.searchIn(r);l&&s.push({score:c,key:t,value:r,idx:o,norm:a,indices:u})});else{const{v:r,n:o}=e,{isMatch:a,score:l,indices:c}=i.searchIn(r);a&&s.push({score:l,key:t,value:r,norm:o,indices:c})}return s}}dr.version="7.1.0";dr.createIndex=Up;dr.parseIndex=xw;dr.config=Dt;dr.parseQuery=Bp;Uw(Lw);let ya=[];const vi=[],Qn=new Map;let kp,Ze=null,$s="hierarchy",Dl,$c="all";const br=new Set;let Sa=!1;function zp(n){const t=document.createElement("button");return t.className="favorite-btn",t.innerHTML="&#9733;",br.has(n.id)&&t.classList.add("favorited"),t.addEventListener("click",e=>{e.stopPropagation(),br.has(n.id)?(br.delete(n.id),t.classList.remove("favorited")):(br.add(n.id),t.classList.add("favorited")),Sa&&Rr()}),t}function Hp(n){const t=document.createElement("span");return t.className="node-type",t.textContent=n.type.charAt(0).toUpperCase()+n.type.slice(1),t}function Hw(n){const t=document.createElement("li");t.dataset.id=n.id,t.className="tree-node",t.style.paddingLeft="25px",t.setAttribute("role","listitem"),n.spec.edu?.shortDescription&&(t.title=n.spec.edu.shortDescription);const e=document.createElement("div");e.className="tree-node-content";const i=document.createElement("span");i.className="chevron",e.appendChild(i);const s=document.createElement("span");s.className="color-dot",s.style.backgroundColor=`#${n.spec.color.toString(16).padStart(6,"0")}`,e.appendChild(s);const r=document.createElement("img");r.className="icon",r.src=`assets/${n.type}.svg`,r.alt=`${n.type} icon`,e.appendChild(r);const o=document.createElement("span");o.className="node-name",o.textContent=n.name,e.appendChild(o),e.appendChild(Hp(n));const a=document.createElement("span");return a.className="node-stats",a.textContent=`${n.spec.radius.toLocaleString()} km`,e.appendChild(a),e.appendChild(zp(n)),t.appendChild(e),n.element=t,t}function Vp(n){const t=document.createElement("li");t.dataset.id=n.id,t.className="tree-node",t.style.paddingLeft=`${n.depth*18}px`,t.setAttribute("role","treeitem"),t.setAttribute("aria-expanded",String(n.children.length>0?n.expanded:!1)),n.spec.edu?.shortDescription&&(t.title=n.spec.edu.shortDescription);const e=document.createElement("div");e.className="tree-node-content";const i=document.createElement("span");i.className="chevron",n.children.length>0&&(i.textContent=n.expanded?"▼":"▶"),e.appendChild(i);const s=document.createElement("span");s.className="color-dot",s.style.backgroundColor=`#${n.spec.color.toString(16).padStart(6,"0")}`,e.appendChild(s);const r=document.createElement("img");r.className="icon",r.src=`assets/${n.type}.svg`,r.alt=`${n.type} icon`,e.appendChild(r);const o=document.createElement("span");o.className="node-name",o.textContent=n.name,e.appendChild(o),e.appendChild(Hp(n));const a=document.createElement("span");if(a.className="node-stats",a.textContent=`${n.spec.radius.toLocaleString()} km`,e.appendChild(a),e.appendChild(zp(n)),t.appendChild(e),n.children.length>0){const l=document.createElement("ul");l.className="tree-level",l.setAttribute("role","group"),l.style.display=n.expanded?"block":"none",n.children.forEach(c=>{const u=Vp(c);c.element=u,l.appendChild(u)}),t.appendChild(l)}return n.element=t,t}function Vw(){const n=document.createElement("ul");n.className="tree-root",n.setAttribute("role","tree"),ya.forEach(t=>n.appendChild(Vp(t))),wa.appendChild(n)}function Gw(){const n=new Map;vi.forEach(i=>{n.has(i.type)||n.set(i.type,[]),n.get(i.type).push(i)}),n.forEach(i=>i.sort((s,r)=>s.name.localeCompare(r.name)));const t=document.createElement("ul");t.className="list-root",wa.appendChild(t),["star","planet","moon"].forEach(i=>{if(n.has(i)){const s=n.get(i),r=document.createElement("li");r.className="list-group";const o=document.createElement("div");o.className="list-group-header";const a=i.charAt(0).toUpperCase()+i.slice(1);o.innerHTML=`<span class="chevron">▼</span> ${a}s (${s.length})`,r.appendChild(o);const l=document.createElement("ul");l.className="list-group-children",s.forEach(c=>{l.appendChild(Hw(c))}),r.appendChild(l),t.appendChild(r)}})}function nf(){wa.innerHTML="",$s==="hierarchy"?Vw():Gw(),Rr()}function Qo(){Qn.forEach(n=>{if(n.element){const t=n.visible&&(!n.parent||n.parent.expanded&&n.parent.element?.style.display!=="none");if(n.element.style.display=t?"":"none",n.children.length>0){const e=n.element.querySelector("ul");e&&(e.style.display=n.expanded?"block":"none");const i=n.element.querySelector(".chevron");i&&(i.textContent=n.expanded?"▼":"▶",n.element.setAttribute("aria-expanded",String(n.expanded)))}}}),wt.subscribe(sf),sf()}function Rr(){const t=document.getElementById("selector-search-input").value,e=$c,i=!!t,s=e!=="all",r=!i&&!s&&!Sa;let o;if(r)o=new Set(vi.map(a=>a.id));else{let a;if(i||s){const l=[];i&&l.push({name:t}),s&&l.push({type:e});const c=kp.search({$and:l});a=new Set(c.map(u=>u.item.id))}else a=new Set(vi.map(l=>l.id));Sa?o=new Set([...a].filter(l=>br.has(l))):o=a}$s==="hierarchy"?(vi.forEach(a=>a.visible=!1),o.forEach(a=>{let l=Qn.get(a);for(;l;)l.visible=!0,r||(l.expanded=!0),l=l.parent||void 0}),r&&vi.forEach(a=>a.expanded=!1),Qo()):(vi.forEach(a=>{a.element&&(a.element.style.display=o.has(a.id)?"":"none")}),document.querySelectorAll(".list-group").forEach(a=>{const l=a.querySelector(".list-group-children"),c=Array.from(l?.querySelectorAll(".tree-node")||[]).some(u=>u.style.display!=="none");a.style.display=c?"":"none"}))}function Ww(){if($s==="type")return[];const n=[];function t(e){for(const i of e)i.visible&&i.element&&i.element.style.display!=="none"&&(n.push(i),i.expanded&&i.children.length>0&&t(i.children))}return t(ya),n}function Il(n){if(Ze&&Qn.get(Ze)?.element?.classList.remove("focused"),Ze=n,Ze){const t=Qn.get(Ze);t?.element&&(t.element.classList.add("focused"),t.element.scrollIntoView({block:"nearest"}))}}function sf(){const{selectedBodyId:n}=wt.getState();Qn.forEach(t=>{t.element&&(t.id===n?t.element.classList.add("selected"):t.element.classList.remove("selected"))})}function Xw(n,t){let e;return(...i)=>{clearTimeout(e),e=window.setTimeout(()=>{n(...i)},t)}}function jw(n,t){const e=document.getElementById("celestial-selector-panel");if(!e)return;const i=da.createPanel("celestialSelector","Celestial Selector",e,{width:380,height:Math.min(window.innerHeight*.8,800)}),s=document.getElementById("open-celestial-selector-btn");s&&s.addEventListener("click",h=>{h.stopPropagation(),i.toggleVisibility()}),Dl=h=>{t(h)},ya=ew(n),ya.forEach(h=>{function d(f){Qn.set(f.id,f),vi.push(f),f.children.forEach(d)}d(h)});const r=vi.map(h=>({...h.spec,type:h.type}));kp=new dr(r,{keys:["name","type"],threshold:.4,includeScore:!0}),nf();const o=document.getElementById("category-tabs");if(o&&o.parentNode){const h=document.createElement("div");h.style.padding="5px 0 10px 5px",h.innerHTML=`
            <label style="display: flex; align-items: center; cursor: pointer; gap: 8px; font-weight: 500; color: #f0c420;">
                <input type="checkbox" id="favorites-filter-toggle">
                Show Favorites Only
            </label>
        `,o.parentNode.insertBefore(h,o);const d=document.getElementById("favorites-filter-toggle");d&&d.addEventListener("change",()=>{Sa=d.checked,Rr()})}wa.addEventListener("click",h=>{const d=h.target,f=d.closest(".list-group-header");if($s==="type"&&f){const p=f.nextElementSibling,b=f.querySelector(".chevron");if(p){const M=p.style.display!=="none";p.style.display=M?"none":"block",b&&(b.textContent=M?"▶":"▼")}return}const m=d.closest(".tree-node");if(!m||!(m instanceof HTMLLIElement))return;const _=m.dataset.id,g=Qn.get(_);$s==="hierarchy"&&d.classList.contains("chevron")?(g.expanded=!g.expanded,Qo()):Dl(g.id)});const a=document.getElementById("selector-search-input");a.addEventListener("input",Xw(()=>Rr(),300));const l=["all","star","planet","moon"],c=document.getElementById("category-tabs");l.forEach(h=>{const d=document.createElement("button");d.className="category-tab",d.dataset.category=h;let f=h.charAt(0).toUpperCase()+h.slice(1);h!=="all"&&(f+="s"),d.textContent=f,h===$c&&d.classList.add("active"),d.addEventListener("click",()=>{$c=h,c.querySelectorAll(".category-tab").forEach(m=>m.classList.remove("active")),d.classList.add("active"),Rr()}),c.appendChild(d)}),document.querySelectorAll('input[name="selector-view"]').forEach(h=>{h.addEventListener("change",()=>{$s=h.value,nf()})}),a.addEventListener("keydown",h=>{const d=Ww();if(d.length===0)return;let f=Ze?d.findIndex(m=>m.id===Ze):-1;switch(h.key){case"ArrowDown":h.preventDefault(),f=Math.min(f+1,d.length-1),Il(d[f].id);break;case"ArrowUp":h.preventDefault(),f===-1&&(f=1),f=Math.max(f-1,0),Il(d[f].id);break;case"Enter":Ze&&Dl(Ze);break;case"ArrowRight":{const m=Ze?Qn.get(Ze):null;m&&m.children.length>0&&!m.expanded&&(m.expanded=!0,Qo());break}case"ArrowLeft":{const m=Ze?Qn.get(Ze):null;m&&m.children.length>0&&m.expanded?(m.expanded=!1,Qo()):m?.parent&&Il(m.parent.id);break}}})}function Yw(n,t,e,i,s){function r(a){if(!a)return;const l=new sn().setFromObject(a).getBoundingSphere(new Mn),c=l.radius*2,u=i.fov*(Math.PI/180),h=c/2/Math.tan(u/2),d=new C().subVectors(i.position,s.target).normalize(),f=new C().addVectors(l.center,d.multiplyScalar(h*1.2));new oa(i.position).to({x:f.x,y:f.y,z:f.z},600).easing(ni.Cubic.Out).start()}const o=a=>{if(a.startsWith("select-body-")){const m=parseInt(a.split("-")[2],10)-1;Br[m]&&e(Br[m].name);return}const{timeScale:l,setTimeScale:c,isPaused:u,setPaused:h,setSimTime:d,simTime:f}=wt.getState();switch(a){case"toggle-pause":h(!u);break;case"toggle-debug-hud":Hf.classList.toggle("hidden");break;case"reset-time":zf.click();break;case"toggle-shadows":iS.click();break;case"increase-speed":c(l*1.5);break;case"decrease-speed":c(l/1.5);break;case"toggle-trails":{const m=document.getElementById("trails-enabled-toggle");m&&m.click();break}case"frame-selected":r(n.selectedObject);break;case"toggle-help":ha(),Ko.classList.toggle("hidden");break;case"close-modals":Ko.classList.add("hidden");break;case"frame-advance":u||h(!0),d(f+86400);break;case"fine-step-forward":u||h(!0),d(f+3600);break;case"fine-step-backward":u||h(!0),d(f-3600);break}};oS.addEventListener("click",()=>{Ko.classList.add("hidden")}),window.addEventListener("keydown",a=>{if(document.activeElement&&["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName))return;const l=Qf();let c=null;for(const u in l){const h=l[u];if(h&&a.code===h.code&&!!a.shiftKey==!!h.shiftKey&&!!a.ctrlKey==!!h.ctrlKey&&!!a.altKey==!!h.altKey){c=u;break}}c&&(a.preventDefault(),o(c))})}function qw(n,t,e,i,s,r,o,a){const l=new Vg,c=new Lt,u=document.getElementById("body-tooltip");let h;window.addEventListener("pointermove",f=>{clearTimeout(h),h=window.setTimeout(()=>{c.x=f.clientX/window.innerWidth*2-1,c.y=-(f.clientY/window.innerHeight)*2+1,l.setFromCamera(c,n);const m=l.intersectObjects(t);if(m.length>0){const _=m[0].object,g=_.userData?.data,p=g?.name,b=g?.radius;p&&typeof b=="number"?(u.innerHTML=`<strong>${p}</strong><br>Radius: ${b.toLocaleString()} km`,u.style.left=`${f.clientX+15}px`,u.style.top=`${f.clientY+15}px`,u.classList.remove("hidden")):(qo(_.uuid,"Object missing valid userData.data:",_),u.classList.add("hidden"))}else u.classList.add("hidden")},100)}),window.addEventListener("click",f=>{if(u.classList.add("hidden"),[rS,lS,aS,kr,Ko,Hf].some(g=>g&&g.contains(f.target)))return;c.x=f.clientX/window.innerWidth*2-1,c.y=-(f.clientY/window.innerHeight)*2+1,l.setFromCamera(c,n);const _=l.intersectObjects(t);if(_.length>0){const g=_[0].object,p=g.userData?.data?.name;p&&(s(p),UM(g,n))}else{const g=new qn(new C(0,1,0),0),p=new C;l.ray.intersectPlane(g,p),new oa(r.target).to({x:p.x,y:p.y,z:p.z},500).easing(ni.Cubic.Out).start()}}),zf.addEventListener("click",()=>{o()}),rd.addEventListener("click",()=>{i.focusTarget=null,rd.classList.add("hidden"),r.minDistance=0,r.maxDistance=1700}),r.addEventListener("start",()=>{i.isUserInteracting=!0}),r.addEventListener("end",()=>{i.isUserInteracting=!1}),Vf.addEventListener("click",f=>{f.target.tagName!=="BUTTON"&&kr.classList.remove("hidden")});function d(f){f.classList.add("flash"),f.addEventListener("animationend",()=>{f.classList.remove("flash")},{once:!0})}ad.addEventListener("click",()=>{const f=i.selectedObject?.userData?.data?.name;f&&(s(f),d(ad))}),ra.addEventListener("click",()=>{if(!i.selectedObject)return;if(i.followTarget===i.selectedObject)i.followTarget=null;else{i.followTarget=i.selectedObject;const m=new C;i.followTarget.getWorldPosition(m),i.followOffset=n.position.clone().sub(m)}d(ra)}),Po.addEventListener("click",()=>{const f=i.selectedObject?.userData?.data?.name;if(!f)return;const m=a.find(_=>_.userData.name===f);if(m){m.visible=!m.visible;const _=Po.getAttribute("aria-pressed")==="true";Po.setAttribute("aria-pressed",String(!_)),d(Po)}})}async function Kw(){jy(sS);const{celestialObjects:n,selectableObjects:t,bodyMap:e,sun:i,asteroidUniforms:s}=await nS(),r=new YS(n,e,i,s);function o(u){r.onBodySelected(u,t)}jw(Br,o);function a(){wt.getState().setSimTime(0),i&&(r.simulation.focusTarget=i),wt.getState().setSelectedBodyId("Sun"),de.position.set(0,150,400),Oe.target.set(0,0,0),wt.getState().setPaused(!1),o("Sun"),Vf.classList.add("hidden")}if(!i)throw new Error("Sun object was not initialized, cannot set up interactions.");const l=n.map(u=>u.orbit).filter(u=>u);qw(de,t,i,r.simulation,o,Oe,a,l),Yw(r.simulation,[],o,de,Oe),tM(),dM(),mM(),MM(),AM(),LM(),Qb(),new tw().init(),r.start();const c={store:wt};window.__e2eNotifyReady?window.__e2eNotifyReady(c):window.__APP_READY=!0}window.addEventListener("DOMContentLoaded",Kw);
