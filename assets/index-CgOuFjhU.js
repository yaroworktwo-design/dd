var nf=r=>{throw TypeError(r)};var bs=(r,e,t)=>e.has(r)?nf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t);function sf(r,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in r)){const s=Object.getOwnPropertyDescriptor(n,i);s&&Object.defineProperty(r,i,s.get?s:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cc="169",rf=0,fl=1,of=2,iu=1,su=2,Wn=3,Yn=0,$t=1,Ut=2,kt=0,ts=1,xa=2,pl=3,ml=4,ru=5,Mn=100,af=101,cf=102,lf=103,hf=104,Os=200,uf=201,df=202,ff=203,ya=204,Ma=205,ba=206,pf=207,Sa=208,mf=209,gf=210,_f=211,vf=212,xf=213,yf=214,Ta=0,wa=1,Ea=2,as=3,Aa=4,Ca=5,Ra=6,Pa=7,ou=0,Mf=1,bf=2,ci=0,au=1,cu=2,lu=3,Rc=4,Sf=5,hu=6,uu=7,gl="attached",Tf="detached",du=300,cs=301,ls=302,Ia=303,La=304,fo=306,An=1e3,oi=1001,Qr=1002,Ft=1003,fu=1004,Fs=1005,on=1006,Br=1007,jn=1008,Dn=1009,pu=1010,mu=1011,Ys=1012,Pc=1013,Ti=1014,Tn=1015,dn=1016,Ic=1017,Lc=1018,wi=1020,gu=35902,_u=1021,vu=1022,an=1023,xu=1024,yu=1025,ns=1026,Ei=1027,Dc=1028,kc=1029,Mu=1030,Uc=1031,Nc=1033,zr=33776,Hr=33777,Vr=33778,Gr=33779,Da=35840,ka=35841,Ua=35842,Na=35843,Oa=36196,Fa=37492,Ba=37496,za=37808,Ha=37809,Va=37810,Ga=37811,Wa=37812,Xa=37813,ja=37814,$a=37815,qa=37816,Ya=37817,Ka=37818,Za=37819,Ja=37820,Qa=37821,Wr=36492,ec=36494,tc=36495,bu=36283,nc=36284,ic=36285,sc=36286,Su=2200,wf=2201,Ef=2202,Ks=2300,Zs=2301,wo=2302,Zi=2400,Ji=2401,eo=2402,Oc=2500,Af=2501,Cf=0,Tu=1,rc=2,Rf=3200,Pf=3201,Fc=0,If=1,ri="",Mt="srgb",Bt="srgb-linear",Bc="display-p3",po="display-p3-linear",to="linear",lt="srgb",no="rec709",io="p3",Di=7680,_l=519,Lf=512,Df=513,kf=514,wu=515,Uf=516,Nf=517,Of=518,Ff=519,oc=35044,vl="300 es",$n=2e3,so=2001;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const Gs=Math.PI/180,hs=180/Math.PI;function wn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Gt(r,e,t){return Math.max(e,Math.min(t,r))}function zc(r,e){return(r%e+e)%e}function Bf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function zf(r,e,t){return r!==e?(t-r)/(e-r):0}function Ws(r,e,t){return(1-t)*r+t*e}function Hf(r,e,t,n){return Ws(r,e,1-Math.exp(-t*n))}function Vf(r,e=1){return e-Math.abs(zc(r,e*2)-e)}function Gf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Wf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Xf(r,e){return r+Math.floor(Math.random()*(e-r+1))}function jf(r,e){return r+Math.random()*(e-r)}function $f(r){return r*(.5-Math.random())}function qf(r){r!==void 0&&(xl=r);let e=xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yf(r){return r*Gs}function Kf(r){return r*hs}function Zf(r){return(r&r-1)===0&&r!==0}function Jf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Qf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ep(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*p,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*p,a*l);break;case"ZYZ":r.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function at(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qi={DEG2RAD:Gs,RAD2DEG:hs,generateUUID:wn,clamp:Gt,euclideanModulo:zc,mapLinear:Bf,inverseLerp:zf,lerp:Ws,damp:Hf,pingpong:Vf,smoothstep:Gf,smootherstep:Wf,randInt:Xf,randFloat:jf,randFloatSpread:$f,seededRandom:qf,degToRad:Yf,radToDeg:Kf,isPowerOfTwo:Zf,ceilPowerOfTwo:Jf,floorPowerOfTwo:Qf,setQuaternionFromProperEuler:ep,normalize:at,denormalize:bn};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,i,s,o,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l)}set(e,t,n,i,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],y=i[1],M=i[4],x=i[7],C=i[2],A=i[5],w=i[8];return s[0]=o*_+a*y+c*C,s[3]=o*m+a*M+c*A,s[6]=o*g+a*x+c*w,s[1]=l*_+h*y+u*C,s[4]=l*m+h*M+u*A,s[7]=l*g+h*x+u*w,s[2]=d*_+f*y+p*C,s[5]=d*m+f*M+p*A,s[8]=d*g+f*x+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Eo=new He;function Eu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Js(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tp(){const r=Js("canvas");return r.style.display="block",r}const yl={};function Xr(r){r in yl||(yl[r]=!0,console.warn(r))}function np(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function ip(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sp(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ml=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bl=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[Bt]:{transfer:to,primaries:no,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Mt]:{transfer:lt,primaries:no,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[po]:{transfer:to,primaries:io,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(bl),fromReference:r=>r.applyMatrix3(Ml)},[Bc]:{transfer:lt,primaries:io,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(bl),fromReference:r=>r.applyMatrix3(Ml).convertLinearToSRGB()}},rp=new Set([Bt,po]),Ke={enabled:!0,_workingColorSpace:Bt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!rp.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ss[e].toReference,i=Ss[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ss[r].primaries},getTransfer:function(r){return r===ri?to:Ss[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Ss[e].luminanceCoefficients)}};function is(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ki;class op{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=Js("canvas")),ki.width=e.width,ki.height=e.height;const n=ki.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Js("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=is(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(is(t[n]/255)*255):t[n]=is(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ap=0;class Au{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Co(i[o].image)):s.push(Co(i[o]))}else s=Co(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Co(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?op.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cp=0;class wt extends Ai{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=oi,i=oi,s=on,o=jn,a=an,c=Dn,l=wt.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=wn(),this.name="",this.source=new Au(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==du)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=du;wt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(f+1)/2,C=(g+1)/2,A=(h+d)/4,w=(u+_)/4,P=(p+m)/4;return M>x&&M>C?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=w/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=P/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=w/s,i=P/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lp extends Ai{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Au(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qt extends lp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Cu extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hp extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],p=s[o+2],_=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==p){let m=1-a;const g=c*d+l*f+h*p+u*_,y=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const C=Math.sqrt(M),A=Math.atan2(C,g*y);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const x=a*y;if(c=c*m+d*x,l=l*m+f*x,h=h*m+p*x,u=u*m+_*x,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],p=s[o+3];return e[t]=a*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-a*f,e[t+2]=l*p+h*f+a*d-c*u,e[t+3]=h*p-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),p=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(e=0,t=0,n=0){b.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new b,Sl=new fn;class it{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(e.matrixWorld),this.union(ar)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),cr.subVectors(this.max,Ts),Ui.subVectors(e.a,Ts),Ni.subVectors(e.b,Ts),Oi.subVectors(e.c,Ts),Zn.subVectors(Ni,Ui),Jn.subVectors(Oi,Ni),hi.subVectors(Ui,Oi);let t=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-hi.z,hi.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,hi.z,0,-hi.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-hi.y,hi.x,0];return!Po(t,Ui,Ni,Oi,cr)||(t=[1,0,0,0,1,0,0,0,1],!Po(t,Ui,Ni,Oi,cr))?!1:(lr.crossVectors(Zn,Jn),t=[lr.x,lr.y,lr.z],Po(t,Ui,Ni,Oi,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fn=[new b,new b,new b,new b,new b,new b,new b,new b],gn=new b,ar=new it,Ui=new b,Ni=new b,Oi=new b,Zn=new b,Jn=new b,hi=new b,Ts=new b,cr=new b,lr=new b,ui=new b;function Po(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ui.fromArray(r,s);const a=i.x*Math.abs(ui.x)+i.y*Math.abs(ui.y)+i.z*Math.abs(ui.z),c=e.dot(ui),l=t.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const up=new it,ws=new b,Io=new b;class Un{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):up.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ws,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Io)),this.expandByPoint(ws.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new b,Lo=new b,hr=new b,Qn=new b,Do=new b,ur=new b,ko=new b;class ir{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lo.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Lo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hr),a=Qn.dot(this.direction),c=-Qn.dot(hr),l=Qn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=s*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Lo).addScaledVector(hr,d),f}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,i,s){Do.subVectors(t,e),ur.subVectors(n,e),ko.crossVectors(Do,ur);let o=this.direction.dot(ko),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const c=a*this.direction.dot(ur.crossVectors(Qn,ur));if(c<0)return null;const l=a*this.direction.dot(Do.cross(Qn));if(l<0||c+l>o)return null;const h=-a*Qn.dot(ko);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,s,o,a,c,l,h,u,d,f,p,_,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,c,l,h,u,d,f,p,_,m)}set(e,t,n,i,s,o,a,c,l,h,u,d,f,p,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Fi.setFromMatrixColumn(e,0).length(),s=1/Fi.setFromMatrixColumn(e,1).length(),o=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,p=l*h,_=l*u;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,p=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,_=a*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,p=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dp,e,fp)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ei.crossVectors(n,nn),ei.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ei.crossVectors(n,nn)),ei.normalize(),dr.crossVectors(nn,ei),i[0]=ei.x,i[4]=dr.x,i[8]=nn.x,i[1]=ei.y,i[5]=dr.y,i[9]=nn.y,i[2]=ei.z,i[6]=dr.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],y=n[3],M=n[7],x=n[11],C=n[15],A=i[0],w=i[4],P=i[8],k=i[12],v=i[1],S=i[5],D=i[9],O=i[13],V=i[2],j=i[6],z=i[10],K=i[14],W=i[3],te=i[7],ie=i[11],se=i[15];return s[0]=o*A+a*v+c*V+l*W,s[4]=o*w+a*S+c*j+l*te,s[8]=o*P+a*D+c*z+l*ie,s[12]=o*k+a*O+c*K+l*se,s[1]=h*A+u*v+d*V+f*W,s[5]=h*w+u*S+d*j+f*te,s[9]=h*P+u*D+d*z+f*ie,s[13]=h*k+u*O+d*K+f*se,s[2]=p*A+_*v+m*V+g*W,s[6]=p*w+_*S+m*j+g*te,s[10]=p*P+_*D+m*z+g*ie,s[14]=p*k+_*O+m*K+g*se,s[3]=y*A+M*v+x*V+C*W,s[7]=y*w+M*S+x*j+C*te,s[11]=y*P+M*D+x*z+C*ie,s[15]=y*k+M*O+x*K+C*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15];return p*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+_*(+t*c*f-t*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+m*(+t*l*u-t*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+g*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=u*m*l-_*d*l+_*c*f-a*m*f-u*c*g+a*d*g,M=p*d*l-h*m*l-p*c*f+o*m*f+h*c*g-o*d*g,x=h*_*l-p*u*l+p*a*f-o*_*f-h*a*g+o*u*g,C=p*u*c-h*_*c-p*a*d+o*_*d+h*a*m-o*u*m,A=t*y+n*M+i*x+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*g-n*d*g)*w,e[2]=(a*m*s-_*c*s+_*i*l-n*m*l-a*i*g+n*c*g)*w,e[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*w,e[4]=M*w,e[5]=(h*m*s-p*d*s+p*i*f-t*m*f-h*i*g+t*d*g)*w,e[6]=(p*c*s-o*m*s-p*i*l+t*m*l+o*i*g-t*c*g)*w,e[7]=(o*d*s-h*c*s+h*i*l-t*d*l-o*i*f+t*c*f)*w,e[8]=x*w,e[9]=(p*u*s-h*_*s-p*n*f+t*_*f+h*n*g-t*u*g)*w,e[10]=(o*_*s-p*a*s+p*n*l-t*_*l-o*n*g+t*a*g)*w,e[11]=(h*a*s-o*u*s-h*n*l+t*u*l+o*n*f-t*a*f)*w,e[12]=C*w,e[13]=(h*_*i-p*u*i+p*n*d-t*_*d-h*n*m+t*u*m)*w,e[14]=(p*a*i-o*_*i-p*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,p=s*u,_=o*h,m=o*u,g=a*u,y=c*l,M=c*h,x=c*u,C=n.x,A=n.y,w=n.z;return i[0]=(1-(_+g))*C,i[1]=(f+x)*C,i[2]=(p-M)*C,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+g))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(p+M)*w,i[9]=(m-y)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Fi.set(i[0],i[1],i[2]).length();const o=Fi.set(i[4],i[5],i[6]).length(),a=Fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_n.copy(this);const l=1/s,h=1/o,u=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,t.setFromRotationMatrix(_n),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=$n){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,p;if(a===$n)f=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===so)f=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=$n){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*l,f=(n+i)*h;let p,_;if(a===$n)p=(o+s)*u,_=-2*u;else if(a===so)p=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fi=new b,_n=new Ue,dp=new b(0,0,0),fp=new b(1,1,1),ei=new b,dr=new b,nn=new b,Tl=new Ue,wl=new fn;class kn{constructor(e=0,t=0,n=0,i=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pp=0;const El=new b,Bi=new fn,zn=new Ue,fr=new b,Es=new b,mp=new b,gp=new fn,Al=new b(1,0,0),Cl=new b(0,1,0),Rl=new b(0,0,1),Pl={type:"added"},_p={type:"removed"},zi={type:"childadded",child:null},Uo={type:"childremoved",child:null};class dt extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new b,t=new kn,n=new fn,i=new b(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new He}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Al,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return El.copy(e).applyQuaternion(this.quaternion),this.position.add(El.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Al,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Es,fr,this.up):zn.lookAt(fr,Es,this.up),this.quaternion.setFromRotationMatrix(zn),i&&(zn.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(zn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pl),zi.child=e,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_p),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pl),zi.child=e,this.dispatchEvent(zi),zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new b(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new b,Hn=new b,No=new b,Vn=new b,Hi=new b,Vi=new b,Il=new b,Oo=new b,Fo=new b,Bo=new b,zo=new et,Ho=new et,Vo=new et;class Sn{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),vn.subVectors(e,t),i.cross(vn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){vn.subVectors(i,t),Hn.subVectors(n,t),No.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Hn),c=vn.dot(No),l=Hn.dot(Hn),h=Hn.dot(No),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vn.x),c.addScaledVector(o,Vn.y),c.addScaledVector(a,Vn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,o){return zo.setScalar(0),Ho.setScalar(0),Vo.setScalar(0),zo.fromBufferAttribute(e,t),Ho.fromBufferAttribute(e,n),Vo.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(zo,s.x),o.addScaledVector(Ho,s.y),o.addScaledVector(Vo,s.z),o}static isFrontFacing(e,t,n,i){return vn.subVectors(n,t),Hn.subVectors(e,t),vn.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),vn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Hi.subVectors(i,n),Vi.subVectors(s,n),Oo.subVectors(e,n);const c=Hi.dot(Oo),l=Vi.dot(Oo);if(c<=0&&l<=0)return t.copy(n);Fo.subVectors(e,i);const h=Hi.dot(Fo),u=Vi.dot(Fo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Hi,o);Bo.subVectors(e,s);const f=Hi.dot(Bo),p=Vi.dot(Bo);if(p>=0&&f<=p)return t.copy(s);const _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Vi,a);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Il.subVectors(s,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(Il,a);const g=1/(m+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(Hi,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Go(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=zc(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Go(o,s,e+1/3),this.g=Go(o,s,e),this.b=Go(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Ke.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Gt(Ht.r*255,0,255))*65536+Math.round(Gt(Ht.g*255,0,255))*256+Math.round(Gt(Ht.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,s=Ht.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Mt){Ke.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(pr);const n=Ws(ti.h,pr.h,t),i=Ws(ti.s,pr.s,t),s=Ws(ti.l,pr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Se;Se.NAMES=Pu;let vp=0;class En extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=ts,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ya,this.blendDst=Ma,this.blendEquation=Mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ya&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==Mn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pt extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new b,mr=new Ae;class It{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),e}}class Iu extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Lu extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ct extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xp=0;const ln=new Ue,Wo=new dt,Gi=new b,sn=new it,As=new it,Ct=new b;class mt extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eu(e)?Lu:Iu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return Wo.lookAt(e),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new it);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(sn.min,As.min),sn.expandByPoint(Ct),Ct.addVectors(sn.max,As.max),sn.expandByPoint(Ct)):(sn.expandByPoint(As.min),sn.expandByPoint(As.max))}sn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ct.fromBufferAttribute(a,l),c&&(Gi.fromBufferAttribute(e,l),Ct.add(Gi)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new b,c[P]=new b;const l=new b,h=new b,u=new b,d=new Ae,f=new Ae,p=new Ae,_=new b,m=new b;function g(P,k,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,k),p.fromBufferAttribute(s,v),h.sub(l),u.sub(l),f.sub(d),p.sub(d);const S=1/(f.x*p.y-p.x*f.y);isFinite(S)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(S),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(S),a[P].add(_),a[k].add(_),a[v].add(_),c[P].add(m),c[k].add(m),c[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let P=0,k=y.length;P<k;++P){const v=y[P],S=v.start,D=v.count;for(let O=S,V=S+D;O<V;O+=3)g(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new b,x=new b,C=new b,A=new b;function w(P){C.fromBufferAttribute(i,P),A.copy(C);const k=a[P];M.copy(k),M.sub(C.multiplyScalar(C.dot(k))).normalize(),x.crossVectors(A,k);const S=x.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,S)}for(let P=0,k=y.length;P<k;++P){const v=y[P],S=v.start,D=v.count;for(let O=S,V=S+D;O<V;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,s=new b,o=new b,a=new b,c=new b,l=new b,h=new b,u=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new It(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new Ue,di=new ir,gr=new Un,Dl=new b,_r=new b,vr=new b,xr=new b,Xo=new b,yr=new b,kl=new b,Mr=new b;class Z extends dt{constructor(e=new mt,t=new pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){yr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],u=s[c];h!==0&&(Xo.fromBufferAttribute(u,e),o?yr.addScaledVector(Xo,h):yr.addScaledVector(Xo.sub(t),h))}t.add(yr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(gr.containsPoint(di.origin)===!1&&(di.intersectSphere(gr,Dl)===null||di.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Ll.copy(s).invert(),di.copy(e.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,C=M;x<C;x+=3){const A=a.getX(x),w=a.getX(x+1),P=a.getX(x+2);i=br(this,g,e,n,l,h,u,A,w,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const y=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);i=br(this,o,e,n,l,h,u,y,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,C=M;x<C;x+=3){const A=x,w=x+1,P=x+2;i=br(this,g,e,n,l,h,u,A,w,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const y=m,M=m+1,x=m+2;i=br(this,o,e,n,l,h,u,y,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function yp(r,e,t,n,i,s,o,a){let c;if(e.side===$t?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side===Yn,a),c===null)return null;Mr.copy(a),Mr.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Mr);return l<t.near||l>t.far?null:{distance:l,point:Mr.clone(),object:r}}function br(r,e,t,n,i,s,o,a,c,l){r.getVertexPosition(a,_r),r.getVertexPosition(c,vr),r.getVertexPosition(l,xr);const h=yp(r,e,t,n,_r,vr,xr,kl);if(h){const u=new b;Sn.getBarycoord(kl,_r,vr,xr,u),i&&(h.uv=Sn.getInterpolatedAttribute(i,a,c,l,u,new Ae)),s&&(h.uv1=Sn.getInterpolatedAttribute(s,a,c,l,u,new Ae)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,c,l,u,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new b,materialIndex:0};Sn.getNormal(_r,vr,xr,d.normal),h.face=d,h.barycoord=u}return h}class ze extends mt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,s,0),p("z","y","x",1,-1,n,t,-e,o,s,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function p(_,m,g,y,M,x,C,A,w,P,k){const v=x/w,S=C/P,D=x/2,O=C/2,V=A/2,j=w+1,z=P+1;let K=0,W=0;const te=new b;for(let ie=0;ie<z;ie++){const se=ie*S-O;for(let Oe=0;Oe<j;Oe++){const We=Oe*v-D;te[_]=We*y,te[m]=se*M,te[g]=V,l.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[g]=A>0?1:-1,h.push(te.x,te.y,te.z),u.push(Oe/w),u.push(1-ie/P),K+=1}}for(let ie=0;ie<P;ie++)for(let se=0;se<w;se++){const Oe=d+se+j*ie,We=d+se+j*(ie+1),X=d+(se+1)+j*(ie+1),Q=d+(se+1)+j*ie;c.push(Oe,We,Q),c.push(We,X,Q),W+=6}a.addGroup(f,W,k),f+=W,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ze(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=us(r[t]);for(const i in n)e[i]=n[i]}return e}function Mp(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Du(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const Pn={clone:us,merge:jt};var bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ku extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new b,Ul=new Ae,Nl=new Ae;class Nt extends ku{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Ul,Nl),t.subVectors(Nl,Ul)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Wi=-90,Xi=1;class Tp extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nt(Wi,Xi,e,t);i.layers=this.layers,this.add(i);const s=new Nt(Wi,Xi,e,t);s.layers=this.layers,this.add(s);const o=new Nt(Wi,Xi,e,t);o.layers=this.layers,this.add(o);const a=new Nt(Wi,Xi,e,t);a.layers=this.layers,this.add(a);const c=new Nt(Wi,Xi,e,t);c.layers=this.layers,this.add(c);const l=new Nt(Wi,Xi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Uu extends wt{constructor(e,t,n,i,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:cs,super(e,t,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wp extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Uu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ze(5,5,5),s=new bt({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:kt});s.uniforms.tEquirect.value=t;const o=new Z(i,s),a=t.minFilter;return t.minFilter===jn&&(t.minFilter=on),new Tp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const jo=new b,Ep=new b,Ap=new He;class vi{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=jo.subVectors(n,t).cross(Ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ap.getNormalMatrix(e),i=this.coplanarPoint(jo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new Un,Sr=new b;class Hc{constructor(e=new vi,t=new vi,n=new vi,i=new vi,s=new vi,o=new vi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],_=i[10],m=i[11],g=i[12],y=i[13],M=i[14],x=i[15];if(n[0].setComponents(c-s,d-l,m-f,x-g).normalize(),n[1].setComponents(c+s,d+l,m+f,x+g).normalize(),n[2].setComponents(c+o,d+h,m+p,x+y).normalize(),n[3].setComponents(c-o,d-h,m-p,x-y).normalize(),n[4].setComponents(c-a,d-u,m-_,x-M).normalize(),t===$n)n[5].setComponents(c+a,d+u,m+_,x+M).normalize();else if(t===so)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sr.x=i.normal.x>0?e.max.x:e.min.x,Sr.y=i.normal.y>0?e.max.y:e.min.y,Sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nu(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Cp(r){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(r.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}class ft extends mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const y=g*d-o;for(let M=0;M<l;M++){const x=M*u-s;p.push(x,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){const M=y+l*g,x=y+l*(g+1),C=y+1+l*(g+1),A=y+1+l*g;f.push(M,x,A),f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Op=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,em=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
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
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
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
#endif`,Am=`struct PhysicalMaterial {
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
}`,Cm=`
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,v0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`#include <common>
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
}`,U0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N0=`#define DISTANCE
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
}`,O0=`#define DISTANCE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,H0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,j0=`#define MATCAP
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
}`,$0=`#define MATCAP
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
}`,q0=`#define NORMAL
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
}`,Y0=`#define NORMAL
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
}`,K0=`#define PHONG
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
}`,Z0=`#define PHONG
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
}`,J0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,eg=`#define TOON
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
}`,tg=`#define TOON
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
}`,ng=`uniform float size;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,og=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Rp,alphahash_pars_fragment:Pp,alphamap_fragment:Ip,alphamap_pars_fragment:Lp,alphatest_fragment:Dp,alphatest_pars_fragment:kp,aomap_fragment:Up,aomap_pars_fragment:Np,batching_pars_vertex:Op,batching_vertex:Fp,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:Hp,iridescence_fragment:Vp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:$p,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:Kp,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:om,envmap_fragment:am,envmap_common_pars_fragment:cm,envmap_pars_fragment:lm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:um,fog_vertex:dm,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:_m,lights_lambert_fragment:vm,lights_lambert_pars_fragment:xm,lights_pars_begin:ym,lights_toon_fragment:bm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Tm,lights_phong_pars_fragment:wm,lights_physical_fragment:Em,lights_physical_pars_fragment:Am,lights_fragment_begin:Cm,lights_fragment_maps:Rm,lights_fragment_end:Pm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:km,map_fragment:Um,map_pars_fragment:Nm,map_particle_fragment:Om,map_particle_pars_fragment:Fm,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:Hm,morphcolor_vertex:Vm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:jm,normal_fragment_maps:$m,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:Km,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:e0,iridescence_pars_fragment:t0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:o0,dithering_pars_fragment:a0,roughnessmap_fragment:c0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:u0,shadowmap_vertex:d0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:_0,specularmap_fragment:v0,specularmap_pars_fragment:x0,tonemapping_fragment:y0,tonemapping_pars_fragment:M0,transmission_fragment:b0,transmission_pars_fragment:S0,uv_pars_fragment:T0,uv_pars_vertex:w0,uv_vertex:E0,worldpos_vertex:A0,background_vert:C0,background_frag:R0,backgroundCube_vert:P0,backgroundCube_frag:I0,cube_vert:L0,cube_frag:D0,depth_vert:k0,depth_frag:U0,distanceRGBA_vert:N0,distanceRGBA_frag:O0,equirect_vert:F0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:H0,meshbasic_vert:V0,meshbasic_frag:G0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:j0,meshmatcap_frag:$0,meshnormal_vert:q0,meshnormal_frag:Y0,meshphong_vert:K0,meshphong_frag:Z0,meshphysical_vert:J0,meshphysical_frag:Q0,meshtoon_vert:eg,meshtoon_frag:tg,points_vert:ng,points_frag:ig,shadow_vert:sg,shadow_frag:rg,sprite_vert:og,sprite_frag:ag},ae={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Rn={basic:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Se(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:jt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:jt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:jt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Se(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:jt([ae.points,ae.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:jt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:jt([ae.common,ae.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:jt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:jt([ae.sprite,ae.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:jt([ae.common,ae.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:jt([ae.lights,ae.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Rn.physical={uniforms:jt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Tr={r:0,b:0,g:0},pi=new kn,cg=new Ue;function lg(r,e,t,n,i,s,o){const a=new Se(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function p(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function _(y){let M=!1;const x=p(y);x===null?g(a,c):x&&x.isColor&&(g(x,1),M=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,M){const x=p(M);x&&(x.isCubeTexture||x.mapping===fo)?(h===void 0&&(h=new Z(new ze(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:us(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),pi.copy(M.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cg.makeRotationFromEuler(pi)),h.material.toneMapped=Ke.getTransfer(x.colorSpace)!==lt,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Z(new ft(2,2),new bt({name:"BackgroundMaterial",uniforms:us(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(x.colorSpace)!==lt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,M){y.getRGB(Tr,Du(r)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),c=M,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,g(a,c)},render:_,addToRenderList:m}}function hg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(v,S,D,O,V){let j=!1;const z=u(O,D,S);s!==z&&(s=z,l(s.object)),j=f(v,O,D,V),j&&p(v,O,D,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(v,S,D,O),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return r.createVertexArray()}function l(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,S,D){const O=D.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let j=V[S.id];j===void 0&&(j={},V[S.id]=j);let z=j[O];return z===void 0&&(z=d(c()),j[O]=z),z}function d(v){const S=[],D=[],O=[];for(let V=0;V<t;V++)S[V]=0,D[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:D,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,S,D,O){const V=s.attributes,j=S.attributes;let z=0;const K=D.getAttributes();for(const W in K)if(K[W].location>=0){const ie=V[W];let se=j[W];if(se===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),ie===void 0||ie.attribute!==se||se&&ie.data!==se.data)return!0;z++}return s.attributesNum!==z||s.index!==O}function p(v,S,D,O){const V={},j=S.attributes;let z=0;const K=D.getAttributes();for(const W in K)if(K[W].location>=0){let ie=j[W];ie===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor));const se={};se.attribute=ie,ie&&ie.data&&(se.data=ie.data),V[W]=se,z++}s.attributes=V,s.attributesNum=z,s.index=O}function _(){const v=s.newAttributes;for(let S=0,D=v.length;S<D;S++)v[S]=0}function m(v){g(v,0)}function g(v,S){const D=s.newAttributes,O=s.enabledAttributes,V=s.attributeDivisors;D[v]=1,O[v]===0&&(r.enableVertexAttribArray(v),O[v]=1),V[v]!==S&&(r.vertexAttribDivisor(v,S),V[v]=S)}function y(){const v=s.newAttributes,S=s.enabledAttributes;for(let D=0,O=S.length;D<O;D++)S[D]!==v[D]&&(r.disableVertexAttribArray(D),S[D]=0)}function M(v,S,D,O,V,j,z){z===!0?r.vertexAttribIPointer(v,S,D,V,j):r.vertexAttribPointer(v,S,D,O,V,j)}function x(v,S,D,O){_();const V=O.attributes,j=D.getAttributes(),z=S.defaultAttributeValues;for(const K in j){const W=j[K];if(W.location>=0){let te=V[K];if(te===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){const ie=te.normalized,se=te.itemSize,Oe=e.get(te);if(Oe===void 0)continue;const We=Oe.buffer,X=Oe.type,Q=Oe.bytesPerElement,me=X===r.INT||X===r.UNSIGNED_INT||te.gpuType===Pc;if(te.isInterleavedBufferAttribute){const ce=te.data,Ce=ce.stride,Te=te.offset;if(ce.isInstancedInterleavedBuffer){for(let Fe=0;Fe<W.locationSize;Fe++)g(W.location+Fe,ce.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)m(W.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,We);for(let Fe=0;Fe<W.locationSize;Fe++)M(W.location+Fe,se/W.locationSize,X,ie,Ce*Q,(Te+se/W.locationSize*Fe)*Q,me)}else{if(te.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)g(W.location+ce,te.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ce=0;ce<W.locationSize;ce++)m(W.location+ce);r.bindBuffer(r.ARRAY_BUFFER,We);for(let ce=0;ce<W.locationSize;ce++)M(W.location+ce,se/W.locationSize,X,ie,se*Q,se/W.locationSize*ce*Q,me)}}else if(z!==void 0){const ie=z[K];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(W.location,ie);break;case 3:r.vertexAttrib3fv(W.location,ie);break;case 4:r.vertexAttrib4fv(W.location,ie);break;default:r.vertexAttrib1fv(W.location,ie)}}}}y()}function C(){P();for(const v in n){const S=n[v];for(const D in S){const O=S[D];for(const V in O)h(O[V].object),delete O[V];delete S[D]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const S=n[v.id];for(const D in S){const O=S[D];for(const V in O)h(O[V].object),delete O[V];delete S[D]}delete n[v.id]}function w(v){for(const S in n){const D=n[S];if(D[v.id]===void 0)continue;const O=D[v.id];for(const V in O)h(O[V].object),delete O[V];delete D[v.id]}}function P(){k(),o=!0,s!==i&&(s=i,l(s.object))}function k(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function ug(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];for(let _=0;_<d.length;_++)t.update(p,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function dg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==an&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Dn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Tn&&!P)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function fg(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new vi,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!i||p===null||p.length===0||s&&!m)s?h(null):l();else{const y=s?0:n,M=y*4;let x=g.clippingState||null;c.value=x,x=h(p,d,M,f);for(let C=0;C!==M;++C)x[C]=t[C];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,p!==!0||m===null){const g=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,x=f;M!==_;++M,x+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function pg(r){let e=new WeakMap;function t(o,a){return a===Ia?o.mapping=cs:a===La&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ia||a===La)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new wp(c.height);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class mo extends ku{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const es=4,Ol=[.125,.215,.35,.446,.526,.582],yi=20,$o=new mo,Fl=new Se;let qo=null,Yo=0,Ko=0,Zo=!1;const xi=(1+Math.sqrt(5))/2,ji=1/xi,Bl=[new b(-xi,ji,0),new b(xi,ji,0),new b(-ji,0,xi),new b(ji,0,xi),new b(0,xi,-ji),new b(0,xi,ji),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class ac{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qo,Yo,Ko),this._renderer.xr.enabled=Zo,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:dn,format:an,colorSpace:Bt,depthBuffer:!1},i=zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mg(s)),this._blurMaterial=gg(s,e,t)}return i}_compileMaterial(e){const t=new Z(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,i){const a=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fl),h.toneMapping=ci,h.autoClear=!1;const f=new pt({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),p=new Z(new ze,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Fl),_=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):y===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));const M=this._cubeSize;wr(i,y*M,g>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===cs||e.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Z(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;wr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,$o)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bl[(i-s-1)%Bl.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Z(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*yi-1),_=s/p,m=isFinite(s)?1+Math.floor(h*_):yi;m>yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yi}`);const g=[];let y=0;for(let w=0;w<yi;++w){const P=w/_,k=Math.exp(-P*P/2);g.push(k),w===0?y+=k:w<m&&(y+=2*k)}for(let w=0;w<g.length;w++)g[w]=g[w]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-n;const x=this._sizeLods[i],C=3*x*(i>M-es?i-M+es:0),A=4*(this._cubeSize-x);wr(t,C,A,3*x,2*x),c.setRenderTarget(t),c.render(u,$o)}}function mg(r){const e=[],t=[],n=[];let i=r;const s=r-es+1+Ol.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-es?c=Ol[o-r+es-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,m=2,g=1,y=new Float32Array(_*p*f),M=new Float32Array(m*p*f),x=new Float32Array(g*p*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,P=A>2?0:-1,k=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];y.set(k,_*p*A),M.set(d,m*p*A);const v=[A,A,A,A,A,A];x.set(v,g*p*A)}const C=new mt;C.setAttribute("position",new It(y,_)),C.setAttribute("uv",new It(M,m)),C.setAttribute("faceIndex",new It(x,g)),e.push(C),i>es&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zl(r,e,t){const n=new qt(r,e,t);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function gg(r,e,t){const n=new Float32Array(yi),i=new b(0,1,0);return new bt({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Hl(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Vl(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function _g(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ia||c===La,h=c===cs||c===ls;if(l||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ac(r)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new ac(r)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Xr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xg(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let m=0,g=_.length;m<g;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)e.update(d[p],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const _=f[p];for(let m=0,g=_.length;m<g;m++)e.update(_[m],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let M=0,x=y.length;M<x;M+=3){const C=y[M+0],A=y[M+1],w=y[M+2];d.push(C,A,A,w,w,C)}}else if(p!==void 0){const y=p.array;_=p.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const C=M+0,A=M+1,w=M+2;d.push(C,A,A,w,w,C)}}else return;const m=new(Eu(d)?Lu:Iu)(d,1);m.version=_;const g=s.get(u);g&&e.remove(g),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function yg(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function l(d,f,p){p!==0&&(r.drawElementsInstanced(n,f,s,d*o,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function u(d,f,p,_){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)l(d[g]/o,f[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y];for(let y=0;y<_.length;y++)t.update(g,n,_[y])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function bg(r,e,t){const n=new WeakMap,i=new et;function s(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let C=a.attributes.position.count*x,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*A*4*u),P=new Cu(w,C,A,u);P.type=Tn,P.needsUpdate=!0;const k=x*4;for(let S=0;S<u;S++){const D=g[S],O=y[S],V=M[S],j=C*A*4*S;for(let z=0;z<D.count;z++){const K=z*k;p===!0&&(i.fromBufferAttribute(D,z),w[j+K+0]=i.x,w[j+K+1]=i.y,w[j+K+2]=i.z,w[j+K+3]=0),_===!0&&(i.fromBufferAttribute(O,z),w[j+K+4]=i.x,w[j+K+5]=i.y,w[j+K+6]=i.z,w[j+K+7]=0),m===!0&&(i.fromBufferAttribute(V,z),w[j+K+8]=i.x,w[j+K+9]=i.y,w[j+K+10]=i.z,w[j+K+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new Ae(C,A)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<l.length;m++)p+=l[m];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Sg(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}class Gc extends wt{constructor(e,t,n,i,s,o,a,c,l,h=ns){if(h!==ns&&h!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ti),n===void 0&&h===Ei&&(n=wi),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=c!==void 0?c:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ou=new wt,Gl=new Gc(1,1),Fu=new Cu,Bu=new hp,zu=new Uu,Wl=[],Xl=[],jl=new Float32Array(16),$l=new Float32Array(9),ql=new Float32Array(4);function _s(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Wl[i];if(s===void 0&&(s=new Float32Array(i),Wl[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Et(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function At(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function go(r,e){let t=Xl[e];t===void 0&&(t=new Int32Array(e),Xl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Tg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function wg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2fv(this.addr,e),At(t,e)}}function Eg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;r.uniform3fv(this.addr,e),At(t,e)}}function Ag(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4fv(this.addr,e),At(t,e)}}function Cg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;ql.set(n),r.uniformMatrix2fv(this.addr,!1,ql),At(t,n)}}function Rg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;$l.set(n),r.uniformMatrix3fv(this.addr,!1,$l),At(t,n)}}function Pg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;jl.set(n),r.uniformMatrix4fv(this.addr,!1,jl),At(t,n)}}function Ig(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2iv(this.addr,e),At(t,e)}}function Dg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3iv(this.addr,e),At(t,e)}}function kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4iv(this.addr,e),At(t,e)}}function Ug(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Ng(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;r.uniform2uiv(this.addr,e),At(t,e)}}function Og(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;r.uniform3uiv(this.addr,e),At(t,e)}}function Fg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;r.uniform4uiv(this.addr,e),At(t,e)}}function Bg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gl.compareFunction=wu,s=Gl):s=Ou,t.setTexture2D(e||s,i)}function zg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Bu,i)}function Hg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||zu,i)}function Vg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fu,i)}function Gg(r){switch(r){case 5126:return Tg;case 35664:return wg;case 35665:return Eg;case 35666:return Ag;case 35674:return Cg;case 35675:return Rg;case 35676:return Pg;case 5124:case 35670:return Ig;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return kg;case 5125:return Ug;case 36294:return Ng;case 36295:return Og;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}function Wg(r,e){r.uniform1fv(this.addr,e)}function Xg(r,e){const t=_s(e,this.size,2);r.uniform2fv(this.addr,t)}function jg(r,e){const t=_s(e,this.size,3);r.uniform3fv(this.addr,t)}function $g(r,e){const t=_s(e,this.size,4);r.uniform4fv(this.addr,t)}function qg(r,e){const t=_s(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Yg(r,e){const t=_s(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Kg(r,e){const t=_s(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Zg(r,e){r.uniform1iv(this.addr,e)}function Jg(r,e){r.uniform2iv(this.addr,e)}function Qg(r,e){r.uniform3iv(this.addr,e)}function e_(r,e){r.uniform4iv(this.addr,e)}function t_(r,e){r.uniform1uiv(this.addr,e)}function n_(r,e){r.uniform2uiv(this.addr,e)}function i_(r,e){r.uniform3uiv(this.addr,e)}function s_(r,e){r.uniform4uiv(this.addr,e)}function r_(r,e,t){const n=this.cache,i=e.length,s=go(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ou,s[o])}function o_(r,e,t){const n=this.cache,i=e.length,s=go(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Bu,s[o])}function a_(r,e,t){const n=this.cache,i=e.length,s=go(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||zu,s[o])}function c_(r,e,t){const n=this.cache,i=e.length,s=go(t,i);Et(n,s)||(r.uniform1iv(this.addr,s),At(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Fu,s[o])}function l_(r){switch(r){case 5126:return Wg;case 35664:return Xg;case 35665:return jg;case 35666:return $g;case 35674:return qg;case 35675:return Yg;case 35676:return Kg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return e_;case 5125:return t_;case 36294:return n_;case 36295:return i_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return o_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return c_}}class h_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}}class u_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=l_(t.type)}}class d_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function Yl(r,e){r.seq.push(e),r.map[e.id]=e}function f_(r,e,t){const n=r.name,i=n.length;for(Jo.lastIndex=0;;){const s=Jo.exec(n),o=Jo.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yl(t,l===void 0?new h_(a,r,e):new u_(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new d_(a),Yl(t,u)),t=u}}}class jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);f_(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Kl(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const p_=37297;let m_=0;function g_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function __(r){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(r);let n;switch(e===t?n="":e===io&&t===no?n="LinearDisplayP3ToLinearSRGB":e===no&&t===io&&(n="LinearSRGBToLinearDisplayP3"),r){case Bt:case po:return[n,"LinearTransferOETF"];case Mt:case Bc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Zl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+g_(r.getShaderSource(e),o)}else return i}function v_(r,e){const t=__(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function x_(r,e){let t;switch(e){case au:t="Linear";break;case cu:t="Reinhard";break;case lu:t="Cineon";break;case Rc:t="ACESFilmic";break;case hu:t="AgX";break;case uu:t="Neutral";break;case Sf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Er=new b;function y_(){Ke.getLuminanceCoefficients(Er);const r=Er.x.toFixed(4),e=Er.y.toFixed(4),t=Er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function b_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Bs(r){return r!==""}function Jl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ql(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function cc(r){return r.replace(T_,E_)}const w_=new Map;function E_(r,e){let t=Be[e];if(t===void 0){const n=w_.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cc(t)}const A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(r){return r.replace(A_,C_)}function C_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function th(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function R_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===su?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function P_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case cs:case ls:e="ENVMAP_TYPE_CUBE";break;case fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function L_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ou:e="ENVMAP_BLENDING_MULTIPLY";break;case Mf:e="ENVMAP_BLENDING_MIX";break;case bf:e="ENVMAP_BLENDING_ADD";break}return e}function D_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function k_(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=R_(t),l=P_(t),h=I_(t),u=L_(t),d=D_(t),f=M_(t),p=b_(s),_=i.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Bs).join(`
`),g.length>0&&(g+=`
`)):(m=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),g=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Be.tonemapping_pars_fragment:"",t.toneMapping!==ci?x_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,v_("linearToOutputTexel",t.outputColorSpace),y_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),o=cc(o),o=Jl(o,t),o=Ql(o,t),a=cc(a),a=Jl(a,t),a=Ql(a,t),o=eh(o),a=eh(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=y+m+o,x=y+g+a,C=Kl(i,i.VERTEX_SHADER,M),A=Kl(i,i.FRAGMENT_SHADER,x);i.attachShader(_,C),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(S){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(C).trim(),V=i.getShaderInfoLog(A).trim();let j=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,C,A);else{const K=Zl(i,C,"vertex"),W=Zl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+D+`
`+K+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||V==="")&&(z=!1);z&&(S.diagnostics={runnable:j,programLog:D,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:g}})}i.deleteShader(C),i.deleteShader(A),P=new jr(i,_),k=S_(i,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let k;this.getAttributes=function(){return k===void 0&&w(this),k};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,p_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let U_=0;class N_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new O_(e),t.set(e,n)),n}}class O_{constructor(e){this.id=U_++,this.code=e,this.usedTimes=0}}function F_(r,e,t,n,i,s,o){const a=new Ru,c=new N_,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,S,D,O,V){const j=O.fog,z=V.geometry,K=v.isMeshStandardMaterial?O.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||K),te=W&&W.mapping===fo?W.image.height:null,ie=_[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Oe=se!==void 0?se.length:0;let We=0;z.morphAttributes.position!==void 0&&(We=1),z.morphAttributes.normal!==void 0&&(We=2),z.morphAttributes.color!==void 0&&(We=3);let X,Q,me,ce;if(ie){const Zt=Rn[ie];X=Zt.vertexShader,Q=Zt.fragmentShader}else X=v.vertexShader,Q=v.fragmentShader,c.update(v),me=c.getVertexShaderID(v),ce=c.getFragmentShaderID(v);const Ce=r.getRenderTarget(),Te=V.isInstancedMesh===!0,Fe=V.isBatchedMesh===!0,Je=!!v.map,Xe=!!v.matcap,I=!!W,Lt=!!v.aoMap,Ve=!!v.lightMap,$e=!!v.bumpMap,Re=!!v.normalMap,rt=!!v.displacementMap,Pe=!!v.emissiveMap,R=!!v.metalnessMap,T=!!v.roughnessMap,F=v.anisotropy>0,q=v.clearcoat>0,J=v.dispersion>0,$=v.iridescence>0,xe=v.sheen>0,re=v.transmission>0,he=F&&!!v.anisotropyMap,Ge=q&&!!v.clearcoatMap,ee=q&&!!v.clearcoatNormalMap,ue=q&&!!v.clearcoatRoughnessMap,Ie=$&&!!v.iridescenceMap,Le=$&&!!v.iridescenceThicknessMap,ge=xe&&!!v.sheenColorMap,qe=xe&&!!v.sheenRoughnessMap,Ne=!!v.specularMap,Ze=!!v.specularColorMap,L=!!v.specularIntensityMap,le=re&&!!v.transmissionMap,G=re&&!!v.thicknessMap,Y=!!v.gradientMap,de=!!v.alphaMap,pe=v.alphaTest>0,Ye=!!v.alphaHash,St=!!v.extensions;let Kt=ci;v.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Kt=r.toneMapping);const Qe={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:Q,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&V._colorsTexture!==null,instancing:Te,instancingColor:Te&&V.instanceColor!==null,instancingMorph:Te&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?r.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Bt,alphaToCoverage:!!v.alphaToCoverage,map:Je,matcap:Xe,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:te,aoMap:Lt,lightMap:Ve,bumpMap:$e,normalMap:Re,displacementMap:f&&rt,emissiveMap:Pe,normalMapObjectSpace:Re&&v.normalMapType===If,normalMapTangentSpace:Re&&v.normalMapType===Fc,metalnessMap:R,roughnessMap:T,anisotropy:F,anisotropyMap:he,clearcoat:q,clearcoatMap:Ge,clearcoatNormalMap:ee,clearcoatRoughnessMap:ue,dispersion:J,iridescence:$,iridescenceMap:Ie,iridescenceThicknessMap:Le,sheen:xe,sheenColorMap:ge,sheenRoughnessMap:qe,specularMap:Ne,specularColorMap:Ze,specularIntensityMap:L,transmission:re,transmissionMap:le,thicknessMap:G,gradientMap:Y,opaque:v.transparent===!1&&v.blending===ts&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:pe,alphaHash:Ye,combine:v.combine,mapUv:Je&&m(v.map.channel),aoMapUv:Lt&&m(v.aoMap.channel),lightMapUv:Ve&&m(v.lightMap.channel),bumpMapUv:$e&&m(v.bumpMap.channel),normalMapUv:Re&&m(v.normalMap.channel),displacementMapUv:rt&&m(v.displacementMap.channel),emissiveMapUv:Pe&&m(v.emissiveMap.channel),metalnessMapUv:R&&m(v.metalnessMap.channel),roughnessMapUv:T&&m(v.roughnessMap.channel),anisotropyMapUv:he&&m(v.anisotropyMap.channel),clearcoatMapUv:Ge&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ee&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:qe&&m(v.sheenRoughnessMap.channel),specularMapUv:Ne&&m(v.specularMap.channel),specularColorMapUv:Ze&&m(v.specularColorMap.channel),specularIntensityMapUv:L&&m(v.specularIntensityMap.channel),transmissionMapUv:le&&m(v.transmissionMap.channel),thicknessMapUv:G&&m(v.thicknessMap.channel),alphaMapUv:de&&m(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Re||F),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!z.attributes.uv&&(Je||de),fog:!!j,useFog:v.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:We,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Je&&v.map.isVideoTexture===!0&&Ke.getTransfer(v.map.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ut,flipSided:v.side===$t,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:St&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&v.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function y(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(M(S,v),x(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function M(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function x(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){const S=_[v.type];let D;if(S){const O=Rn[S];D=Pn.clone(O.uniforms)}else D=v.uniforms;return D}function A(v,S){let D;for(let O=0,V=h.length;O<V;O++){const j=h[O];if(j.cacheKey===S){D=j,++D.usedTimes;break}}return D===void 0&&(D=new k_(r,S,v,s),h.push(D)),D}function w(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function P(v){c.remove(v)}function k(){c.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:C,acquireProgram:A,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:k}}function B_(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function z_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ih(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,p,_,m){let g=r[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:m},r[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=_,g.group=m),e++,g}function a(u,d,f,p,_,m){const g=o(u,d,f,p,_,m);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function c(u,d,f,p,_,m){const g=o(u,d,f,p,_,m);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function l(u,d){t.length>1&&t.sort(u||z_),n.length>1&&n.sort(d||nh),i.length>1&&i.sort(d||nh)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function H_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new ih,r.set(n,[o])):i>=s.length?(o=new ih,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function V_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new Se};break;case"SpotLight":t={position:new b,direction:new b,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new b,halfWidth:new b,halfHeight:new b};break}return r[e.id]=t,t}}}function G_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let W_=0;function X_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function j_(r){const e=new V_,t=G_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const i=new b,s=new Ue,o=new Ue;function a(l){let h=0,u=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,y=0,M=0,x=0,C=0,A=0,w=0;l.sort(X_);for(let k=0,v=l.length;k<v;k++){const S=l[k],D=S.color,O=S.intensity,V=S.distance,j=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=D.r*O,u+=D.g*O,d+=D.b*O;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],O);w++}else if(S.isDirectionalLight){const z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const K=S.shadow,W=t.get(S);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=S.shadow.matrix,y++}n.directional[f]=z,f++}else if(S.isSpotLight){const z=e.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(D).multiplyScalar(O),z.distance=V,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[_]=z;const K=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,K.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[_]=K.matrix,S.castShadow){const W=t.get(S);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=j,x++}_++}else if(S.isRectAreaLight){const z=e.get(S);z.color.copy(D).multiplyScalar(O),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=z,m++}else if(S.isPointLight){const z=e.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){const K=S.shadow,W=t.get(S);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[p]=W,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=S.shadow.matrix,M++}n.point[p]=z,p++}else if(S.isHemisphereLight){const z=e.get(S);z.skyColor.copy(S.color).multiplyScalar(O),z.groundColor.copy(S.groundColor).multiplyScalar(O),n.hemi[g]=z,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==g||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==C||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,P.directionalLength=f,P.pointLength=p,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=g,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=C,P.numLightProbes=w,n.version=W_++)}function c(l,h){let u=0,d=0,f=0,p=0,_=0;const m=h.matrixWorldInverse;for(let g=0,y=l.length;g<y;g++){const M=l[g];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function sh(r){const e=new j_(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function $_(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new sh(r),e.set(i,[a])):s>=o.length?(a=new sh(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class q_ extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y_ extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const K_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`;function J_(r,e,t){let n=new Hc;const i=new Ae,s=new Ae,o=new et,a=new q_({depthPacking:Pf}),c=new Y_,l={},h=t.maxTextureSize,u={[Yn]:$t,[$t]:Yn,[Ut]:Ut},d=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:K_,fragmentShader:Z_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new mt;p.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Z(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let g=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const k=r.getRenderTarget(),v=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),D=r.state;D.setBlending(kt),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=g!==Wn&&this.type===Wn,V=g===Wn&&this.type!==Wn;for(let j=0,z=A.length;j<z;j++){const K=A[j],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const te=W.getFrameExtents();if(i.multiply(te),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/te.x),i.x=s.x*te.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/te.y),i.y=s.y*te.y,W.mapSize.y=s.y)),W.map===null||O===!0||V===!0){const se=this.type!==Wn?{minFilter:Ft,magFilter:Ft}:{};W.map!==null&&W.map.dispose(),W.map=new qt(i.x,i.y,se),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ie=W.getViewportCount();for(let se=0;se<ie;se++){const Oe=W.getViewport(se);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),D.viewport(o),W.updateMatrices(K,se),n=W.getFrustum(),x(w,P,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Wn&&y(W,P),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(k,v,S)};function y(A,w){const P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new qt(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,P,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,P,f,_,null)}function M(A,w,P,k){let v=null;const S=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)v=S;else if(v=P.isPointLight===!0?c:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const D=v.uuid,O=w.uuid;let V=l[D];V===void 0&&(V={},l[D]=V);let j=V[O];j===void 0&&(j=v.clone(),V[O]=j,w.addEventListener("dispose",C)),v=j}if(v.visible=w.visible,v.wireframe=w.wireframe,k===Wn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=r.properties.get(v);D.light=P}return v}function x(A,w,P,k,v){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=e.update(A),V=A.material;if(Array.isArray(V)){const j=O.groups;for(let z=0,K=j.length;z<K;z++){const W=j[z],te=V[W.materialIndex];if(te&&te.visible){const ie=M(A,te,k,v);A.onBeforeShadow(r,A,w,P,O,ie,W),r.renderBufferDirect(P,null,O,ie,A,W),A.onAfterShadow(r,A,w,P,O,ie,W)}}}else if(V.visible){const j=M(A,V,k,v);A.onBeforeShadow(r,A,w,P,O,j,null),r.renderBufferDirect(P,null,O,j,A,null),A.onAfterShadow(r,A,w,P,O,j,null)}}const D=A.children;for(let O=0,V=D.length;O<V;O++)x(D[O],w,P,k,v)}function C(A){A.target.removeEventListener("dispose",C);for(const P in l){const k=l[P],v=A.target.uuid;v in k&&(k[v].dispose(),delete k[v])}}}const Q_={[Ta]:wa,[Ea]:Ra,[Aa]:Pa,[as]:Ca,[wa]:Ta,[Ra]:Ea,[Pa]:Aa,[Ca]:as};function ev(r){function e(){let L=!1;const le=new et;let G=null;const Y=new et(0,0,0,0);return{setMask:function(de){G!==de&&!L&&(r.colorMask(de,de,de,de),G=de)},setLocked:function(de){L=de},setClear:function(de,pe,Ye,St,Kt){Kt===!0&&(de*=St,pe*=St,Ye*=St),le.set(de,pe,Ye,St),Y.equals(le)===!1&&(r.clearColor(de,pe,Ye,St),Y.copy(le))},reset:function(){L=!1,G=null,Y.set(-1,0,0,0)}}}function t(){let L=!1,le=!1,G=null,Y=null,de=null;return{setReversed:function(pe){le=pe},setTest:function(pe){pe?me(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(pe){G!==pe&&!L&&(r.depthMask(pe),G=pe)},setFunc:function(pe){if(le&&(pe=Q_[pe]),Y!==pe){switch(pe){case Ta:r.depthFunc(r.NEVER);break;case wa:r.depthFunc(r.ALWAYS);break;case Ea:r.depthFunc(r.LESS);break;case as:r.depthFunc(r.LEQUAL);break;case Aa:r.depthFunc(r.EQUAL);break;case Ca:r.depthFunc(r.GEQUAL);break;case Ra:r.depthFunc(r.GREATER);break;case Pa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Y=pe}},setLocked:function(pe){L=pe},setClear:function(pe){de!==pe&&(r.clearDepth(pe),de=pe)},reset:function(){L=!1,G=null,Y=null,de=null}}}function n(){let L=!1,le=null,G=null,Y=null,de=null,pe=null,Ye=null,St=null,Kt=null;return{setTest:function(Qe){L||(Qe?me(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(Qe){le!==Qe&&!L&&(r.stencilMask(Qe),le=Qe)},setFunc:function(Qe,Zt,On){(G!==Qe||Y!==Zt||de!==On)&&(r.stencilFunc(Qe,Zt,On),G=Qe,Y=Zt,de=On)},setOp:function(Qe,Zt,On){(pe!==Qe||Ye!==Zt||St!==On)&&(r.stencilOp(Qe,Zt,On),pe=Qe,Ye=Zt,St=On)},setLocked:function(Qe){L=Qe},setClear:function(Qe){Kt!==Qe&&(r.clearStencil(Qe),Kt=Qe)},reset:function(){L=!1,le=null,G=null,Y=null,de=null,pe=null,Ye=null,St=null,Kt=null}}}const i=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,m=null,g=null,y=null,M=null,x=null,C=null,A=new Se(0,0,0),w=0,P=!1,k=null,v=null,S=null,D=null,O=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,z=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),j=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),j=z>=2);let W=null,te={};const ie=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),Oe=new et().fromArray(ie),We=new et().fromArray(se);function X(L,le,G,Y){const de=new Uint8Array(4),pe=r.createTexture();r.bindTexture(L,pe),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<G;Ye++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,Y,0,r.RGBA,r.UNSIGNED_BYTE,de):r.texImage2D(le+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,de);return pe}const Q={};Q[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(r.DEPTH_TEST),s.setFunc(as),Ve(!1),$e(fl),me(r.CULL_FACE),I(kt);function me(L){l[L]!==!0&&(r.enable(L),l[L]=!0)}function ce(L){l[L]!==!1&&(r.disable(L),l[L]=!1)}function Ce(L,le){return h[L]!==le?(r.bindFramebuffer(L,le),h[L]=le,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=le),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=le),!0):!1}function Te(L,le){let G=d,Y=!1;if(L){G=u.get(le),G===void 0&&(G=[],u.set(le,G));const de=L.textures;if(G.length!==de.length||G[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,Ye=de.length;pe<Ye;pe++)G[pe]=r.COLOR_ATTACHMENT0+pe;G.length=de.length,Y=!0}}else G[0]!==r.BACK&&(G[0]=r.BACK,Y=!0);Y&&r.drawBuffers(G)}function Fe(L){return f!==L?(r.useProgram(L),f=L,!0):!1}const Je={[Mn]:r.FUNC_ADD,[af]:r.FUNC_SUBTRACT,[cf]:r.FUNC_REVERSE_SUBTRACT};Je[lf]=r.MIN,Je[hf]=r.MAX;const Xe={[Os]:r.ZERO,[uf]:r.ONE,[df]:r.SRC_COLOR,[ya]:r.SRC_ALPHA,[gf]:r.SRC_ALPHA_SATURATE,[Sa]:r.DST_COLOR,[ba]:r.DST_ALPHA,[ff]:r.ONE_MINUS_SRC_COLOR,[Ma]:r.ONE_MINUS_SRC_ALPHA,[mf]:r.ONE_MINUS_DST_COLOR,[pf]:r.ONE_MINUS_DST_ALPHA,[_f]:r.CONSTANT_COLOR,[vf]:r.ONE_MINUS_CONSTANT_COLOR,[xf]:r.CONSTANT_ALPHA,[yf]:r.ONE_MINUS_CONSTANT_ALPHA};function I(L,le,G,Y,de,pe,Ye,St,Kt,Qe){if(L===kt){p===!0&&(ce(r.BLEND),p=!1);return}if(p===!1&&(me(r.BLEND),p=!0),L!==ru){if(L!==_||Qe!==P){if((m!==Mn||M!==Mn)&&(r.blendEquation(r.FUNC_ADD),m=Mn,M=Mn),Qe)switch(L){case ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xa:r.blendFunc(r.ONE,r.ONE);break;case pl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ml:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case xa:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case pl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ml:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,y=null,x=null,C=null,A.set(0,0,0),w=0,_=L,P=Qe}return}de=de||le,pe=pe||G,Ye=Ye||Y,(le!==m||de!==M)&&(r.blendEquationSeparate(Je[le],Je[de]),m=le,M=de),(G!==g||Y!==y||pe!==x||Ye!==C)&&(r.blendFuncSeparate(Xe[G],Xe[Y],Xe[pe],Xe[Ye]),g=G,y=Y,x=pe,C=Ye),(St.equals(A)===!1||Kt!==w)&&(r.blendColor(St.r,St.g,St.b,Kt),A.copy(St),w=Kt),_=L,P=!1}function Lt(L,le){L.side===Ut?ce(r.CULL_FACE):me(r.CULL_FACE);let G=L.side===$t;le&&(G=!G),Ve(G),L.blending===ts&&L.transparent===!1?I(kt):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),i.setMask(L.colorWrite);const Y=L.stencilWrite;o.setTest(Y),Y&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),rt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(L){k!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),k=L)}function $e(L){L!==rf?(me(r.CULL_FACE),L!==v&&(L===fl?r.cullFace(r.BACK):L===of?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),v=L}function Re(L){L!==S&&(j&&r.lineWidth(L),S=L)}function rt(L,le,G){L?(me(r.POLYGON_OFFSET_FILL),(D!==le||O!==G)&&(r.polygonOffset(le,G),D=le,O=G)):ce(r.POLYGON_OFFSET_FILL)}function Pe(L){L?me(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)}function R(L){L===void 0&&(L=r.TEXTURE0+V-1),W!==L&&(r.activeTexture(L),W=L)}function T(L,le,G){G===void 0&&(W===null?G=r.TEXTURE0+V-1:G=W);let Y=te[G];Y===void 0&&(Y={type:void 0,texture:void 0},te[G]=Y),(Y.type!==L||Y.texture!==le)&&(W!==G&&(r.activeTexture(G),W=G),r.bindTexture(L,le||Q[L]),Y.type=L,Y.texture=le)}function F(){const L=te[W];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(L){Oe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Oe.copy(L))}function ge(L){We.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),We.copy(L))}function qe(L,le){let G=c.get(le);G===void 0&&(G=new WeakMap,c.set(le,G));let Y=G.get(L);Y===void 0&&(Y=r.getUniformBlockIndex(le,L.name),G.set(L,Y))}function Ne(L,le){const Y=c.get(le).get(L);a.get(le)!==Y&&(r.uniformBlockBinding(le,Y,L.__bindingPointIndex),a.set(le,Y))}function Ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},W=null,te={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,m=null,g=null,y=null,M=null,x=null,C=null,A=new Se(0,0,0),w=0,P=!1,k=null,v=null,S=null,D=null,O=null,Oe.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:me,disable:ce,bindFramebuffer:Ce,drawBuffers:Te,useProgram:Fe,setBlending:I,setMaterial:Lt,setFlipSided:Ve,setCullFace:$e,setLineWidth:Re,setPolygonOffset:rt,setScissorTest:Pe,activeTexture:R,bindTexture:T,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:ue,texImage3D:Ie,updateUBOMapping:qe,uniformBlockBinding:Ne,texStorage2D:Ge,texStorage3D:ee,texSubImage2D:$,texSubImage3D:xe,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Le,viewport:ge,reset:Ze}}function rh(r,e,t,n){const i=tv(n);switch(t){case _u:return r*e;case xu:return r*e;case yu:return r*e*2;case Dc:return r*e/i.components*i.byteLength;case kc:return r*e/i.components*i.byteLength;case Mu:return r*e*2/i.components*i.byteLength;case Uc:return r*e*2/i.components*i.byteLength;case vu:return r*e*3/i.components*i.byteLength;case an:return r*e*4/i.components*i.byteLength;case Nc:return r*e*4/i.components*i.byteLength;case zr:case Hr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vr:case Gr:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ka:case Na:return Math.max(r,16)*Math.max(e,8)/4;case Da:case Ua:return Math.max(r,8)*Math.max(e,8)/2;case Oa:case Fa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ba:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Va:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ja:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case qa:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Za:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wr:case ec:case tc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case bu:case nc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case ic:case sc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tv(r){switch(r){case Dn:case pu:return{byteLength:1,components:1};case Ys:case mu:case dn:return{byteLength:2,components:1};case Ic:case Lc:return{byteLength:2,components:4};case Ti:case Pc:case Tn:return{byteLength:4,components:1};case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function nv(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ae,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,T){return f?new OffscreenCanvas(R,T):Js("canvas")}function _(R,T,F){let q=1;const J=Pe(R);if((J.width>F||J.height>F)&&(q=F/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(q*J.width),xe=Math.floor(q*J.height);u===void 0&&(u=p($,xe));const re=T?p($,xe):u;return re.width=$,re.height=xe,re.getContext("2d").drawImage(R,0,0,$,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+xe+")."),re}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Ft&&R.minFilter!==on}function g(R){r.generateMipmap(R)}function y(R,T,F,q,J=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=T;if(T===r.RED&&(F===r.FLOAT&&($=r.R32F),F===r.HALF_FLOAT&&($=r.R16F),F===r.UNSIGNED_BYTE&&($=r.R8)),T===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.R8UI),F===r.UNSIGNED_SHORT&&($=r.R16UI),F===r.UNSIGNED_INT&&($=r.R32UI),F===r.BYTE&&($=r.R8I),F===r.SHORT&&($=r.R16I),F===r.INT&&($=r.R32I)),T===r.RG&&(F===r.FLOAT&&($=r.RG32F),F===r.HALF_FLOAT&&($=r.RG16F),F===r.UNSIGNED_BYTE&&($=r.RG8)),T===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RG8UI),F===r.UNSIGNED_SHORT&&($=r.RG16UI),F===r.UNSIGNED_INT&&($=r.RG32UI),F===r.BYTE&&($=r.RG8I),F===r.SHORT&&($=r.RG16I),F===r.INT&&($=r.RG32I)),T===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RGB8UI),F===r.UNSIGNED_SHORT&&($=r.RGB16UI),F===r.UNSIGNED_INT&&($=r.RGB32UI),F===r.BYTE&&($=r.RGB8I),F===r.SHORT&&($=r.RGB16I),F===r.INT&&($=r.RGB32I)),T===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&($=r.RGBA8UI),F===r.UNSIGNED_SHORT&&($=r.RGBA16UI),F===r.UNSIGNED_INT&&($=r.RGBA32UI),F===r.BYTE&&($=r.RGBA8I),F===r.SHORT&&($=r.RGBA16I),F===r.INT&&($=r.RGBA32I)),T===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),T===r.RGBA){const xe=J?to:Ke.getTransfer(q);F===r.FLOAT&&($=r.RGBA32F),F===r.HALF_FLOAT&&($=r.RGBA16F),F===r.UNSIGNED_BYTE&&($=xe===lt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(R,T){let F;return R?T===null||T===Ti||T===wi?F=r.DEPTH24_STENCIL8:T===Tn?F=r.DEPTH32F_STENCIL8:T===Ys&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ti||T===wi?F=r.DEPTH_COMPONENT24:T===Tn?F=r.DEPTH_COMPONENT32F:T===Ys&&(F=r.DEPTH_COMPONENT16),F}function x(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ft&&R.minFilter!==on?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function C(R){const T=R.target;T.removeEventListener("dispose",C),w(T),T.isVideoTexture&&h.delete(T)}function A(R){const T=R.target;T.removeEventListener("dispose",A),k(T)}function w(R){const T=n.get(R);if(T.__webglInit===void 0)return;const F=R.source,q=d.get(F);if(q){const J=q[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(R),Object.keys(q).length===0&&d.delete(F)}n.remove(R)}function P(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const F=R.source,q=d.get(F);delete q[T.__cacheKey],o.memory.textures--}function k(R){const T=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(T.__webglFramebuffer[q]))for(let J=0;J<T.__webglFramebuffer[q].length;J++)r.deleteFramebuffer(T.__webglFramebuffer[q][J]);else r.deleteFramebuffer(T.__webglFramebuffer[q]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[q])}else{if(Array.isArray(T.__webglFramebuffer))for(let q=0;q<T.__webglFramebuffer.length;q++)r.deleteFramebuffer(T.__webglFramebuffer[q]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let q=0;q<T.__webglColorRenderbuffer.length;q++)T.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[q]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const F=R.textures;for(let q=0,J=F.length;q<J;q++){const $=n.get(F[q]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(F[q])}n.remove(R)}let v=0;function S(){v=0}function D(){const R=v;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),v+=1,R}function O(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function V(R,T){const F=n.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(F,R,T);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+T)}function j(R,T){const F=n.get(R);if(R.version>0&&F.__version!==R.version){We(F,R,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+T)}function z(R,T){const F=n.get(R);if(R.version>0&&F.__version!==R.version){We(F,R,T);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+T)}function K(R,T){const F=n.get(R);if(R.version>0&&F.__version!==R.version){X(F,R,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+T)}const W={[An]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[Qr]:r.MIRRORED_REPEAT},te={[Ft]:r.NEAREST,[fu]:r.NEAREST_MIPMAP_NEAREST,[Fs]:r.NEAREST_MIPMAP_LINEAR,[on]:r.LINEAR,[Br]:r.LINEAR_MIPMAP_NEAREST,[jn]:r.LINEAR_MIPMAP_LINEAR},ie={[Lf]:r.NEVER,[Ff]:r.ALWAYS,[Df]:r.LESS,[wu]:r.LEQUAL,[kf]:r.EQUAL,[Of]:r.GEQUAL,[Uf]:r.GREATER,[Nf]:r.NOTEQUAL};function se(R,T){if(T.type===Tn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===on||T.magFilter===Br||T.magFilter===Fs||T.magFilter===jn||T.minFilter===on||T.minFilter===Br||T.minFilter===Fs||T.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,W[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,W[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,W[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,te[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,te[T.minFilter]),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ie[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ft||T.minFilter!==Fs&&T.minFilter!==jn||T.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Oe(R,T){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",C));const q=T.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const $=O(T);if($!==R.__cacheKey){J[$]===void 0&&(J[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[$].usedTimes++;const xe=J[R.__cacheKey];xe!==void 0&&(J[R.__cacheKey].usedTimes--,xe.usedTimes===0&&P(T)),R.__cacheKey=$,R.__webglTexture=J[$].texture}return F}function We(R,T,F){let q=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(q=r.TEXTURE_3D);const J=Oe(R,T),$=T.source;t.bindTexture(q,R.__webglTexture,r.TEXTURE0+F);const xe=n.get($);if($.version!==xe.__version||J===!0){t.activeTexture(r.TEXTURE0+F);const re=Ke.getPrimaries(Ke.workingColorSpace),he=T.colorSpace===ri?null:Ke.getPrimaries(T.colorSpace),Ge=T.colorSpace===ri||re===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ee=_(T.image,!1,i.maxTextureSize);ee=rt(T,ee);const ue=s.convert(T.format,T.colorSpace),Ie=s.convert(T.type);let Le=y(T.internalFormat,ue,Ie,T.colorSpace,T.isVideoTexture);se(q,T);let ge;const qe=T.mipmaps,Ne=T.isVideoTexture!==!0,Ze=xe.__version===void 0||J===!0,L=$.dataReady,le=x(T,ee);if(T.isDepthTexture)Le=M(T.format===Ei,T.type),Ze&&(Ne?t.texStorage2D(r.TEXTURE_2D,1,Le,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Le,ee.width,ee.height,0,ue,Ie,null));else if(T.isDataTexture)if(qe.length>0){Ne&&Ze&&t.texStorage2D(r.TEXTURE_2D,le,Le,qe[0].width,qe[0].height);for(let G=0,Y=qe.length;G<Y;G++)ge=qe[G],Ne?L&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,ge.width,ge.height,ue,Ie,ge.data):t.texImage2D(r.TEXTURE_2D,G,Le,ge.width,ge.height,0,ue,Ie,ge.data);T.generateMipmaps=!1}else Ne?(Ze&&t.texStorage2D(r.TEXTURE_2D,le,Le,ee.width,ee.height),L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,ue,Ie,ee.data)):t.texImage2D(r.TEXTURE_2D,0,Le,ee.width,ee.height,0,ue,Ie,ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ne&&Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Le,qe[0].width,qe[0].height,ee.depth);for(let G=0,Y=qe.length;G<Y;G++)if(ge=qe[G],T.format!==an)if(ue!==null)if(Ne){if(L)if(T.layerUpdates.size>0){const de=rh(ge.width,ge.height,T.format,T.type);for(const pe of T.layerUpdates){const Ye=ge.data.subarray(pe*de/ge.data.BYTES_PER_ELEMENT,(pe+1)*de/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,pe,ge.width,ge.height,1,ue,Ye,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,ee.depth,ue,ge.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,G,Le,ge.width,ge.height,ee.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,G,0,0,0,ge.width,ge.height,ee.depth,ue,Ie,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,G,Le,ge.width,ge.height,ee.depth,0,ue,Ie,ge.data)}else{Ne&&Ze&&t.texStorage2D(r.TEXTURE_2D,le,Le,qe[0].width,qe[0].height);for(let G=0,Y=qe.length;G<Y;G++)ge=qe[G],T.format!==an?ue!==null?Ne?L&&t.compressedTexSubImage2D(r.TEXTURE_2D,G,0,0,ge.width,ge.height,ue,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,G,Le,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,ge.width,ge.height,ue,Ie,ge.data):t.texImage2D(r.TEXTURE_2D,G,Le,ge.width,ge.height,0,ue,Ie,ge.data)}else if(T.isDataArrayTexture)if(Ne){if(Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,le,Le,ee.width,ee.height,ee.depth),L)if(T.layerUpdates.size>0){const G=rh(ee.width,ee.height,T.format,T.type);for(const Y of T.layerUpdates){const de=ee.data.subarray(Y*G/ee.data.BYTES_PER_ELEMENT,(Y+1)*G/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Y,ee.width,ee.height,1,ue,Ie,de)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ie,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,ee.width,ee.height,ee.depth,0,ue,Ie,ee.data);else if(T.isData3DTexture)Ne?(Ze&&t.texStorage3D(r.TEXTURE_3D,le,Le,ee.width,ee.height,ee.depth),L&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Ie,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Le,ee.width,ee.height,ee.depth,0,ue,Ie,ee.data);else if(T.isFramebufferTexture){if(Ze)if(Ne)t.texStorage2D(r.TEXTURE_2D,le,Le,ee.width,ee.height);else{let G=ee.width,Y=ee.height;for(let de=0;de<le;de++)t.texImage2D(r.TEXTURE_2D,de,Le,G,Y,0,ue,Ie,null),G>>=1,Y>>=1}}else if(qe.length>0){if(Ne&&Ze){const G=Pe(qe[0]);t.texStorage2D(r.TEXTURE_2D,le,Le,G.width,G.height)}for(let G=0,Y=qe.length;G<Y;G++)ge=qe[G],Ne?L&&t.texSubImage2D(r.TEXTURE_2D,G,0,0,ue,Ie,ge):t.texImage2D(r.TEXTURE_2D,G,Le,ue,Ie,ge);T.generateMipmaps=!1}else if(Ne){if(Ze){const G=Pe(ee);t.texStorage2D(r.TEXTURE_2D,le,Le,G.width,G.height)}L&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Ie,ee)}else t.texImage2D(r.TEXTURE_2D,0,Le,ue,Ie,ee);m(T)&&g(q),xe.__version=$.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function X(R,T,F){if(T.image.length!==6)return;const q=Oe(R,T),J=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+F);const $=n.get(J);if(J.version!==$.__version||q===!0){t.activeTexture(r.TEXTURE0+F);const xe=Ke.getPrimaries(Ke.workingColorSpace),re=T.colorSpace===ri?null:Ke.getPrimaries(T.colorSpace),he=T.colorSpace===ri||xe===re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ge=T.isCompressedTexture||T.image[0].isCompressedTexture,ee=T.image[0]&&T.image[0].isDataTexture,ue=[];for(let Y=0;Y<6;Y++)!Ge&&!ee?ue[Y]=_(T.image[Y],!0,i.maxCubemapSize):ue[Y]=ee?T.image[Y].image:T.image[Y],ue[Y]=rt(T,ue[Y]);const Ie=ue[0],Le=s.convert(T.format,T.colorSpace),ge=s.convert(T.type),qe=y(T.internalFormat,Le,ge,T.colorSpace),Ne=T.isVideoTexture!==!0,Ze=$.__version===void 0||q===!0,L=J.dataReady;let le=x(T,Ie);se(r.TEXTURE_CUBE_MAP,T);let G;if(Ge){Ne&&Ze&&t.texStorage2D(r.TEXTURE_CUBE_MAP,le,qe,Ie.width,Ie.height);for(let Y=0;Y<6;Y++){G=ue[Y].mipmaps;for(let de=0;de<G.length;de++){const pe=G[de];T.format!==an?Le!==null?Ne?L&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,pe.width,pe.height,Le,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,qe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,0,0,pe.width,pe.height,Le,ge,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de,qe,pe.width,pe.height,0,Le,ge,pe.data)}}}else{if(G=T.mipmaps,Ne&&Ze){G.length>0&&le++;const Y=Pe(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,le,qe,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ee){Ne?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ue[Y].width,ue[Y].height,Le,ge,ue[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,qe,ue[Y].width,ue[Y].height,0,Le,ge,ue[Y].data);for(let de=0;de<G.length;de++){const Ye=G[de].image[Y].image;Ne?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,Ye.width,Ye.height,Le,ge,Ye.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,qe,Ye.width,Ye.height,0,Le,ge,Ye.data)}}else{Ne?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Le,ge,ue[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,qe,Le,ge,ue[Y]);for(let de=0;de<G.length;de++){const pe=G[de];Ne?L&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,0,0,Le,ge,pe.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,de+1,qe,Le,ge,pe.image[Y])}}}m(T)&&g(r.TEXTURE_CUBE_MAP),$.__version=J.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function Q(R,T,F,q,J,$){const xe=s.convert(F.format,F.colorSpace),re=s.convert(F.type),he=y(F.internalFormat,xe,re,F.colorSpace);if(!n.get(T).__hasExternalTextures){const ee=Math.max(1,T.width>>$),ue=Math.max(1,T.height>>$);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,$,he,ee,ue,T.depth,0,xe,re,null):t.texImage2D(J,$,he,ee,ue,0,xe,re,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),$e(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,J,n.get(F).__webglTexture,0,Ve(T)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,J,n.get(F).__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(R,T,F){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer){const q=T.depthTexture,J=q&&q.isDepthTexture?q.type:null,$=M(T.stencilBuffer,J),xe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=Ve(T);$e(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,$,T.width,T.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,$,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,$,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,R)}else{const q=T.textures;for(let J=0;J<q.length;J++){const $=q[J],xe=s.convert($.format,$.colorSpace),re=s.convert($.type),he=y($.internalFormat,xe,re,$.colorSpace),Ge=Ve(T);F&&$e(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,he,T.width,T.height):$e(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,he,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,he,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);const q=n.get(T.depthTexture).__webglTexture,J=Ve(T);if(T.depthTexture.format===ns)$e(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,q,0);else if(T.depthTexture.format===Ei)$e(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const T=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),q){const J=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),T.__depthDisposeCallback=J}T.__boundDepthTexture=q}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ce(T.__webglFramebuffer,R)}else if(F){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]===void 0)T.__webglDepthbuffer[q]=r.createRenderbuffer(),me(T.__webglDepthbuffer[q],R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,$)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),me(T.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,q,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(R,T,F){const q=n.get(R);T!==void 0&&Q(q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Ce(R)}function Fe(R){const T=R.texture,F=n.get(R),q=n.get(T);R.addEventListener("dispose",A);const J=R.textures,$=R.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=T.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let he=0;he<T.mipmaps.length;he++)F.__webglFramebuffer[re][he]=r.createFramebuffer()}else F.__webglFramebuffer[re]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<T.mipmaps.length;re++)F.__webglFramebuffer[re]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(xe)for(let re=0,he=J.length;re<he;re++){const Ge=n.get(J[re]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&$e(R)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<J.length;re++){const he=J[re];F.__webglColorRenderbuffer[re]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const Ge=s.convert(he.format,he.colorSpace),ee=s.convert(he.type),ue=y(he.internalFormat,Ge,ee,he.colorSpace,R.isXRRenderTarget===!0),Ie=Ve(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,ue,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,F.__webglColorRenderbuffer[re])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),me(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),se(r.TEXTURE_CUBE_MAP,T);for(let re=0;re<6;re++)if(T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)Q(F.__webglFramebuffer[re][he],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else Q(F.__webglFramebuffer[re],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(T)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let re=0,he=J.length;re<he;re++){const Ge=J[re],ee=n.get(Ge);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),se(r.TEXTURE_2D,Ge),Q(F.__webglFramebuffer,R,Ge,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,0),m(Ge)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let re=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),se(re,T),T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)Q(F.__webglFramebuffer[he],R,T,r.COLOR_ATTACHMENT0,re,he);else Q(F.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,re,0);m(T)&&g(re),t.unbindTexture()}R.depthBuffer&&Ce(R)}function Je(R){const T=R.textures;for(let F=0,q=T.length;F<q;F++){const J=T[F];if(m(J)){const $=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,xe=n.get(J).__webglTexture;t.bindTexture($,xe),g($),t.unbindTexture()}}}const Xe=[],I=[];function Lt(R){if(R.samples>0){if($e(R)===!1){const T=R.textures,F=R.width,q=R.height;let J=r.COLOR_BUFFER_BIT;const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(R),re=T.length>1;if(re)for(let he=0;he<T.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let he=0;he<T.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),re){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[he]);const Ge=n.get(T[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,F,q,0,0,F,q,J,r.NEAREST),c===!0&&(Xe.length=0,I.length=0,Xe.push(r.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Xe.push($),I.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),re)for(let he=0;he<T.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,xe.__webglColorRenderbuffer[he]);const Ge=n.get(T[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const T=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ve(R){return Math.min(i.maxSamples,R.samples)}function $e(R){const T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Re(R){const T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function rt(R,T){const F=R.colorSpace,q=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==Bt&&F!==ri&&(Ke.getTransfer(F)===lt?(q!==an||J!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=S,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=Te,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=$e}function iv(r,e){function t(n,i=ri){let s;const o=Ke.getTransfer(i);if(n===Dn)return r.UNSIGNED_BYTE;if(n===Ic)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===pu)return r.BYTE;if(n===mu)return r.SHORT;if(n===Ys)return r.UNSIGNED_SHORT;if(n===Pc)return r.INT;if(n===Ti)return r.UNSIGNED_INT;if(n===Tn)return r.FLOAT;if(n===dn)return r.HALF_FLOAT;if(n===_u)return r.ALPHA;if(n===vu)return r.RGB;if(n===an)return r.RGBA;if(n===xu)return r.LUMINANCE;if(n===yu)return r.LUMINANCE_ALPHA;if(n===ns)return r.DEPTH_COMPONENT;if(n===Ei)return r.DEPTH_STENCIL;if(n===Dc)return r.RED;if(n===kc)return r.RED_INTEGER;if(n===Mu)return r.RG;if(n===Uc)return r.RG_INTEGER;if(n===Nc)return r.RGBA_INTEGER;if(n===zr||n===Hr||n===Vr||n===Gr)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===ka||n===Ua||n===Na)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Fa||n===Ba)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Oa||n===Fa)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===ja||n===$a||n===qa||n===Ya||n===Ka||n===Za||n===Ja||n===Qa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===za)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ja)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wr||n===ec||n===tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wr)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bu||n===nc||n===ic||n===sc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Wr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class sv extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class yt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rv={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,av=`
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

}`;class cv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new wt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bt({vertexShader:ov,fragmentShader:av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lv extends Ai{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null;const _=new cv,m=t.getContextAttributes();let g=null,y=null;const M=[],x=[],C=new Ae;let A=null;const w=new Nt;w.layers.enable(1),w.viewport=new et;const P=new Nt;P.layers.enable(2),P.viewport=new et;const k=[w,P],v=new sv;v.layers.enable(1),v.layers.enable(2);let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=M[X];return Q===void 0&&(Q=new Qo,M[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=M[X];return Q===void 0&&(Q=new Qo,M[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=M[X];return Q===void 0&&(Q=new Qo,M[X]=Q),Q.getHandSpace()};function O(X){const Q=x.indexOf(X.inputSource);if(Q===-1)return;const me=M[Q];me!==void 0&&(me.update(X.inputSource,X.frame,l||o),me.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",j);for(let X=0;X<M.length;X++){const Q=x[X];Q!==null&&(x[X]=null,M[X].disconnect(Q))}S=null,D=null,_.reset(),e.setRenderTarget(g),f=null,d=null,u=null,i=null,y=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new qt(f.framebufferWidth,f.framebufferHeight,{format:an,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,me=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Ei:ns,me=m.stencil?wi:Ti);const Ce={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ce),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new qt(d.textureWidth,d.textureHeight,{format:an,type:Dn,depthTexture:new Gc(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(X){for(let Q=0;Q<X.removed.length;Q++){const me=X.removed[Q],ce=x.indexOf(me);ce>=0&&(x[ce]=null,M[ce].disconnect(me))}for(let Q=0;Q<X.added.length;Q++){const me=X.added[Q];let ce=x.indexOf(me);if(ce===-1){for(let Te=0;Te<M.length;Te++)if(Te>=x.length){x.push(me),ce=Te;break}else if(x[Te]===null){x[Te]=me,ce=Te;break}if(ce===-1)break}const Ce=M[ce];Ce&&Ce.connect(me)}}const z=new b,K=new b;function W(X,Q,me){z.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(me.matrixWorld);const ce=z.distanceTo(K),Ce=Q.projectionMatrix.elements,Te=me.projectionMatrix.elements,Fe=Ce[14]/(Ce[10]-1),Je=Ce[14]/(Ce[10]+1),Xe=(Ce[9]+1)/Ce[5],I=(Ce[9]-1)/Ce[5],Lt=(Ce[8]-1)/Ce[0],Ve=(Te[8]+1)/Te[0],$e=Fe*Lt,Re=Fe*Ve,rt=ce/(-Lt+Ve),Pe=rt*-Lt;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Pe),X.translateZ(rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ce[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const R=Fe+rt,T=Je+rt,F=$e-Pe,q=Re+(ce-Pe),J=Xe*Je/T*R,$=I*Je/T*R;X.projectionMatrix.makePerspective(F,q,J,$,R,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function te(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let Q=X.near,me=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(me=_.depthFar)),v.near=P.near=w.near=Q,v.far=P.far=w.far=me,(S!==v.near||D!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,D=v.far);const ce=X.parent,Ce=v.cameras;te(v,ce);for(let Te=0;Te<Ce.length;Te++)te(Ce[Te],ce);Ce.length===2?W(v,w,P):v.projectionMatrix.copy(w.projectionMatrix),ie(X,v,ce)};function ie(X,Q,me){me===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=hs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let se=null;function Oe(X,Q){if(h=Q.getViewerPose(l||o),p=Q,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ce=!1;me.length!==v.cameras.length&&(v.cameras.length=0,ce=!0);for(let Te=0;Te<me.length;Te++){const Fe=me[Te];let Je=null;if(f!==null)Je=f.getViewport(Fe);else{const I=u.getViewSubImage(d,Fe);Je=I.viewport,Te===0&&(e.setRenderTargetTextures(y,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(y))}let Xe=k[Te];Xe===void 0&&(Xe=new Nt,Xe.layers.enable(Te),Xe.viewport=new et,k[Te]=Xe),Xe.matrix.fromArray(Fe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Fe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Je.x,Je.y,Je.width,Je.height),Te===0&&(v.matrix.copy(Xe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ce===!0&&v.cameras.push(Xe)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Te=u.getDepthInformation(me[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,i.renderState)}}for(let me=0;me<M.length;me++){const ce=x[me],Ce=M[me];ce!==null&&Ce!==void 0&&Ce.update(ce,Q,l||o)}se&&se(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}const We=new Nu;We.setAnimationLoop(Oe),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}}const mi=new kn,hv=new Ue;function uv(r,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Du(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,y,M,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g)):g.isMeshStandardMaterial?(s(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,x)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,y,M):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$t&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$t&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=e.get(g),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,mi.copy(x),mi.x*=-1,mi.y*=-1,mi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(hv.makeRotationFromEuler(mi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,y,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$t&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dv(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function l(y,M){let x=i[y.id];x===void 0&&(p(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(y,C);const A=e.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function h(y){const M=u();y.__bindingPointIndex=M;const x=r.createBuffer(),C=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=i[y.id],x=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,w=x.length;A<w;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let k=0,v=P.length;k<v;k++){const S=P[k];if(f(S,A,k,C)===!0){const D=S.__offset,O=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let j=0;j<O.length;j++){const z=O[j],K=_(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,D+V,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,S.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,x,C){const A=y.value,w=M+"_"+x;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const P=C[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function p(y){const M=y.uniforms;let x=0;const C=16;for(let w=0,P=M.length;w<P;w++){const k=Array.isArray(M[w])?M[w]:[M[w]];for(let v=0,S=k.length;v<S;v++){const D=k[v],O=Array.isArray(D.value)?D.value:[D.value];for(let V=0,j=O.length;V<j;V++){const z=O[V],K=_(z),W=x%C,te=W%K.boundary,ie=W+te;x+=te,ie!==0&&C-ie<K.storage&&(x+=C-ie),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=K.storage}}}const A=x%C;return A>0&&(x+=C-A),y.__size=x,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function g(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}class fv{constructor(e={}){const{canvas:t=tp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),p=new Int32Array(4);let _=null,m=null;const g=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this.toneMapping=ci,this.toneMappingExposure=1;const M=this;let x=!1,C=0,A=0,w=null,P=-1,k=null;const v=new et,S=new et;let D=null;const O=new Se(0);let V=0,j=t.width,z=t.height,K=1,W=null,te=null;const ie=new et(0,0,j,z),se=new et(0,0,j,z);let Oe=!1;const We=new Hc;let X=!1,Q=!1;const me=new Ue,ce=new Ue,Ce=new b,Te=new et,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Xe(){return w===null?K:1}let I=n;function Lt(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cc}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",pe,!1),I===null){const U="webgl2";if(I=Lt(U,E),I===null)throw Lt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,$e,Re,rt,Pe,R,T,F,q,J,$,xe,re,he,Ge,ee,ue,Ie,Le,ge,qe,Ne,Ze,L;function le(){Ve=new vg(I),Ve.init(),Ne=new iv(I,Ve),$e=new dg(I,Ve,e,Ne),Re=new ev(I),$e.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),rt=new Mg(I),Pe=new B_,R=new nv(I,Ve,Re,Pe,$e,Ne,rt),T=new pg(M),F=new _g(M),q=new Cp(I),Ze=new hg(I,q),J=new xg(I,q,rt,Ze),$=new Sg(I,J,q,rt),Le=new bg(I,$e,R),ee=new fg(Pe),xe=new F_(M,T,F,Ve,$e,Ze,ee),re=new uv(M,Pe),he=new H_,Ge=new $_(Ve),Ie=new lg(M,T,F,Re,$,d,c),ue=new J_(M,$,$e),L=new dv(I,rt,$e,Re),ge=new ug(I,Ve,rt),qe=new yg(I,Ve,rt),rt.programs=xe.programs,M.capabilities=$e,M.extensions=Ve,M.properties=Pe,M.renderLists=he,M.shadowMap=ue,M.state=Re,M.info=rt}le();const G=new lv(M,I);this.xr=G,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(j,z,!1))},this.getSize=function(E){return E.set(j,z)},this.setSize=function(E,U,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,z=U,t.width=Math.floor(E*K),t.height=Math.floor(U*K),B===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(j*K,z*K).floor()},this.setDrawingBufferSize=function(E,U,B){j=E,z=U,K=B,t.width=Math.floor(E*B),t.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,U,B,H){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,U,B,H),Re.viewport(v.copy(ie).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,U,B,H){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,U,B,H),Re.scissor(S.copy(se).multiplyScalar(K).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){Re.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){te=E},this.getClearColor=function(E){return E.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(E=!0,U=!0,B=!0){let H=0;if(E){let N=!1;if(w!==null){const ne=w.texture.format;N=ne===Nc||ne===Uc||ne===kc}if(N){const ne=w.texture.type,fe=ne===Dn||ne===Ti||ne===Ys||ne===wi||ne===Ic||ne===Lc,ve=Ie.getClearColor(),ye=Ie.getClearAlpha(),De=ve.r,ke=ve.g,be=ve.b;fe?(f[0]=De,f[1]=ke,f[2]=be,f[3]=ye,I.clearBufferuiv(I.COLOR,0,f)):(p[0]=De,p[1]=ke,p[2]=be,p[3]=ye,I.clearBufferiv(I.COLOR,0,p))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),he.dispose(),Ge.dispose(),Pe.dispose(),T.dispose(),F.dispose(),$.dispose(),Ze.dispose(),L.dispose(),xe.dispose(),G.dispose(),G.removeEventListener("sessionstart",rl),G.removeEventListener("sessionend",ol),li.stop()};function Y(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=rt.autoReset,U=ue.enabled,B=ue.autoUpdate,H=ue.needsUpdate,N=ue.type;le(),rt.autoReset=E,ue.enabled=U,ue.autoUpdate=B,ue.needsUpdate=H,ue.type=N}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ye(E){const U=E.target;U.removeEventListener("dispose",Ye),St(U)}function St(E){Kt(E),Pe.remove(E)}function Kt(E){const U=Pe.get(E).programs;U!==void 0&&(U.forEach(function(B){xe.releaseProgram(B)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,H,N,ne){U===null&&(U=Fe);const fe=N.isMesh&&N.matrixWorld.determinant()<0,ve=Jd(E,U,B,H,N);Re.setMaterial(H,fe);let ye=B.index,De=1;if(H.wireframe===!0){if(ye=J.getWireframeAttribute(B),ye===void 0)return;De=2}const ke=B.drawRange,be=B.attributes.position;let ot=ke.start*De,ht=(ke.start+ke.count)*De;ne!==null&&(ot=Math.max(ot,ne.start*De),ht=Math.min(ht,(ne.start+ne.count)*De)),ye!==null?(ot=Math.max(ot,0),ht=Math.min(ht,ye.count)):be!=null&&(ot=Math.max(ot,0),ht=Math.min(ht,be.count));const gt=ht-ot;if(gt<0||gt===1/0)return;Ze.setup(N,H,ve,B,ye);let en,tt=ge;if(ye!==null&&(en=q.get(ye),tt=qe,tt.setIndex(en)),N.isMesh)H.wireframe===!0?(Re.setLineWidth(H.wireframeLinewidth*Xe()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(N.isLine){let we=H.linewidth;we===void 0&&(we=1),Re.setLineWidth(we*Xe()),N.isLineSegments?tt.setMode(I.LINES):N.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else N.isPoints?tt.setMode(I.POINTS):N.isSprite&&tt.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const we=N._multiDrawStarts,Dt=N._multiDrawCounts,nt=N._multiDrawCount,mn=ye?q.get(ye).bytesPerElement:1,Li=Pe.get(H).currentProgram.getUniforms();for(let tn=0;tn<nt;tn++)Li.setValue(I,"_gl_DrawID",tn),tt.render(we[tn]/mn,Dt[tn])}else if(N.isInstancedMesh)tt.renderInstances(ot,gt,N.count);else if(B.isInstancedBufferGeometry){const we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Dt=Math.min(B.instanceCount,we);tt.renderInstances(ot,gt,Dt)}else tt.render(ot,gt)};function Qe(E,U,B){E.transparent===!0&&E.side===Ut&&E.forceSinglePass===!1?(E.side=$t,E.needsUpdate=!0,or(E,U,B),E.side=Yn,E.needsUpdate=!0,or(E,U,B),E.side=Ut):or(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),m=Ge.get(B),m.init(U),y.push(m),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==B&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const H=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const ve=ne[fe];Qe(ve,B,N),H.add(ve)}else Qe(ne,B,N),H.add(ne)}),y.pop(),m=null,H},this.compileAsync=function(E,U,B=null){const H=this.compile(E,U,B);return new Promise(N=>{function ne(){if(H.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){N(E);return}setTimeout(ne,10)}Ve.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Zt=null;function On(E){Zt&&Zt(E)}function rl(){li.stop()}function ol(){li.start()}const li=new Nu;li.setAnimationLoop(On),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(E){Zt=E,G.setAnimationLoop(E),E===null?li.stop():li.start()},G.addEventListener("sessionstart",rl),G.addEventListener("sessionend",ol),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,U,w),m=Ge.get(E,y.length),m.init(U),y.push(m),ce.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),We.setFromProjectionMatrix(ce),Q=this.localClippingEnabled,X=ee.init(this.clippingPlanes,Q),_=he.get(E,g.length),_.init(),g.push(_),G.enabled===!0&&G.isPresenting===!0){const ne=M.xr.getDepthSensingMesh();ne!==null&&Mo(ne,U,-1/0,M.sortObjects)}Mo(E,U,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(W,te),Je=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Je&&Ie.addToRenderList(_,E),this.info.render.frame++,X===!0&&ee.beginShadows();const B=m.state.shadowsArray;ue.render(B,E,U),X===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,N=_.transmissive;if(m.setupLights(),U.isArrayCamera){const ne=U.cameras;if(N.length>0)for(let fe=0,ve=ne.length;fe<ve;fe++){const ye=ne[fe];cl(H,N,E,ye)}Je&&Ie.render(E);for(let fe=0,ve=ne.length;fe<ve;fe++){const ye=ne[fe];al(_,E,ye,ye.viewport)}}else N.length>0&&cl(H,N,E,U),Je&&Ie.render(E),al(_,E,U);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(M,E,U),Ze.resetDefaultState(),P=-1,k=null,y.pop(),y.length>0?(m=y[y.length-1],X===!0&&ee.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Mo(E,U,B,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||We.intersectsSprite(E)){H&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ce);const fe=$.update(E),ve=E.material;ve.visible&&_.push(E,fe,ve,B,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||We.intersectsObject(E))){const fe=$.update(E),ve=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Te.copy(fe.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(ce)),Array.isArray(ve)){const ye=fe.groups;for(let De=0,ke=ye.length;De<ke;De++){const be=ye[De],ot=ve[be.materialIndex];ot&&ot.visible&&_.push(E,fe,ot,B,Te.z,be)}}else ve.visible&&_.push(E,fe,ve,B,Te.z,null)}}const ne=E.children;for(let fe=0,ve=ne.length;fe<ve;fe++)Mo(ne[fe],U,B,H)}function al(E,U,B,H){const N=E.opaque,ne=E.transmissive,fe=E.transparent;m.setupLightsView(B),X===!0&&ee.setGlobalState(M.clippingPlanes,B),H&&Re.viewport(v.copy(H)),N.length>0&&rr(N,U,B),ne.length>0&&rr(ne,U,B),fe.length>0&&rr(fe,U,B),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function cl(E,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new qt(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?dn:Dn,minFilter:jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ne=m.state.transmissionRenderTarget[H.id],fe=H.viewport||v;ne.setSize(fe.z,fe.w);const ve=M.getRenderTarget();M.setRenderTarget(ne),M.getClearColor(O),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),Je&&Ie.render(B);const ye=M.toneMapping;M.toneMapping=ci;const De=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),X===!0&&ee.setGlobalState(M.clippingPlanes,H),rr(E,B,H),R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let be=0,ot=U.length;be<ot;be++){const ht=U[be],gt=ht.object,en=ht.geometry,tt=ht.material,we=ht.group;if(tt.side===Ut&&gt.layers.test(H.layers)){const Dt=tt.side;tt.side=$t,tt.needsUpdate=!0,ll(gt,B,H,en,tt,we),tt.side=Dt,tt.needsUpdate=!0,ke=!0}}ke===!0&&(R.updateMultisampleRenderTarget(ne),R.updateRenderTargetMipmap(ne))}M.setRenderTarget(ve),M.setClearColor(O,V),De!==void 0&&(H.viewport=De),M.toneMapping=ye}function rr(E,U,B){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ne=E.length;N<ne;N++){const fe=E[N],ve=fe.object,ye=fe.geometry,De=H===null?fe.material:H,ke=fe.group;ve.layers.test(B.layers)&&ll(ve,U,B,ye,De,ke)}}function ll(E,U,B,H,N,ne){E.onBeforeRender(M,U,B,H,N,ne),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(M,U,B,H,E,ne),N.transparent===!0&&N.side===Ut&&N.forceSinglePass===!1?(N.side=$t,N.needsUpdate=!0,M.renderBufferDirect(B,U,H,N,E,ne),N.side=Yn,N.needsUpdate=!0,M.renderBufferDirect(B,U,H,N,E,ne),N.side=Ut):M.renderBufferDirect(B,U,H,N,E,ne),E.onAfterRender(M,U,B,H,N,ne)}function or(E,U,B){U.isScene!==!0&&(U=Fe);const H=Pe.get(E),N=m.state.lights,ne=m.state.shadowsArray,fe=N.state.version,ve=xe.getParameters(E,N.state,ne,U,B),ye=xe.getProgramCacheKey(ve);let De=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?F:T).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",Ye),De=new Map,H.programs=De);let ke=De.get(ye);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===fe)return ul(E,ve),ke}else ve.uniforms=xe.getUniforms(E),E.onBeforeCompile(ve,M),ke=xe.acquireProgram(ve,ye),De.set(ye,ke),H.uniforms=ve.uniforms;const be=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(be.clippingPlanes=ee.uniform),ul(E,ve),H.needsLights=ef(E),H.lightsStateVersion=fe,H.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function hl(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=jr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ul(E,U){const B=Pe.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Jd(E,U,B,H,N){U.isScene!==!0&&(U=Fe),R.resetTextureUnits();const ne=U.fog,fe=H.isMeshStandardMaterial?U.environment:null,ve=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Bt,ye=(H.isMeshStandardMaterial?F:T).get(H.envMap||fe),De=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ke=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),be=!!B.morphAttributes.position,ot=!!B.morphAttributes.normal,ht=!!B.morphAttributes.color;let gt=ci;H.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(gt=M.toneMapping);const en=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,tt=en!==void 0?en.length:0,we=Pe.get(H),Dt=m.state.lights;if(X===!0&&(Q===!0||E!==k)){const cn=E===k&&H.id===P;ee.setState(H,E,cn)}let nt=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Dt.state.version||we.outputColorSpace!==ve||N.isBatchedMesh&&we.batching===!1||!N.isBatchedMesh&&we.batching===!0||N.isBatchedMesh&&we.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&we.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&we.instancing===!1||!N.isInstancedMesh&&we.instancing===!0||N.isSkinnedMesh&&we.skinning===!1||!N.isSkinnedMesh&&we.skinning===!0||N.isInstancedMesh&&we.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&we.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&we.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&we.instancingMorph===!1&&N.morphTexture!==null||we.envMap!==ye||H.fog===!0&&we.fog!==ne||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ee.numPlanes||we.numIntersection!==ee.numIntersection)||we.vertexAlphas!==De||we.vertexTangents!==ke||we.morphTargets!==be||we.morphNormals!==ot||we.morphColors!==ht||we.toneMapping!==gt||we.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,we.__version=H.version);let mn=we.currentProgram;nt===!0&&(mn=or(H,U,N));let Li=!1,tn=!1,bo=!1;const vt=mn.getUniforms(),Kn=we.uniforms;if(Re.useProgram(mn.program)&&(Li=!0,tn=!0,bo=!0),H.id!==P&&(P=H.id,tn=!0),Li||k!==E){$e.reverseDepthBuffer?(me.copy(E.projectionMatrix),ip(me),sp(me),vt.setValue(I,"projectionMatrix",me)):vt.setValue(I,"projectionMatrix",E.projectionMatrix),vt.setValue(I,"viewMatrix",E.matrixWorldInverse);const cn=vt.map.cameraPosition;cn!==void 0&&cn.setValue(I,Ce.setFromMatrixPosition(E.matrixWorld)),$e.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&vt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,tn=!0,bo=!0)}if(N.isSkinnedMesh){vt.setOptional(I,N,"bindMatrix"),vt.setOptional(I,N,"bindMatrixInverse");const cn=N.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),vt.setValue(I,"boneTexture",cn.boneTexture,R))}N.isBatchedMesh&&(vt.setOptional(I,N,"batchingTexture"),vt.setValue(I,"batchingTexture",N._matricesTexture,R),vt.setOptional(I,N,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",N._indirectTexture,R),vt.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",N._colorsTexture,R));const So=B.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0)&&Le.update(N,B,mn),(tn||we.receiveShadow!==N.receiveShadow)&&(we.receiveShadow=N.receiveShadow,vt.setValue(I,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Kn.envMap.value=ye,Kn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Kn.envMapIntensity.value=U.environmentIntensity),tn&&(vt.setValue(I,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&Qd(Kn,bo),ne&&H.fog===!0&&re.refreshFogUniforms(Kn,ne),re.refreshMaterialUniforms(Kn,H,K,z,m.state.transmissionRenderTarget[E.id]),jr.upload(I,hl(we),Kn,R)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(jr.upload(I,hl(we),Kn,R),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&vt.setValue(I,"center",N.center),vt.setValue(I,"modelViewMatrix",N.modelViewMatrix),vt.setValue(I,"normalMatrix",N.normalMatrix),vt.setValue(I,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const cn=H.uniformsGroups;for(let To=0,tf=cn.length;To<tf;To++){const dl=cn[To];L.update(dl,mn),L.bind(dl,mn)}}return mn}function Qd(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function ef(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,B){Pe.get(E.texture).__webglTexture=U,Pe.get(E.depthTexture).__webglTexture=B;const H=Pe.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const B=Pe.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,B=0){w=E,C=U,A=B;let H=!0,N=null,ne=!1,fe=!1;if(E){const ye=Pe.get(E);if(ye.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(ye.__hasExternalTextures)R.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const be=E.depthTexture;if(ye.__boundDepthTexture!==be){if(be!==null&&Pe.has(be)&&(E.width!==be.image.width||E.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(fe=!0);const ke=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?N=ke[U][B]:N=ke[U],ne=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?N=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[B]:N=ke,v.copy(E.viewport),S.copy(E.scissor),D=E.scissorTest}else v.copy(ie).multiplyScalar(K).floor(),S.copy(se).multiplyScalar(K).floor(),D=Oe;if(Re.bindFramebuffer(I.FRAMEBUFFER,N)&&H&&Re.drawBuffers(E,N),Re.viewport(v),Re.scissor(S),Re.setScissorTest(D),ne){const ye=Pe.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,B)}else if(fe){const ye=Pe.get(E.texture),De=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,De)}P=-1},this.readRenderTargetPixels=function(E,U,B,H,N,ne,fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Re.bindFramebuffer(I.FRAMEBUFFER,ve);try{const ye=E.texture,De=ye.format,ke=ye.type;if(!$e.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&B>=0&&B<=E.height-N&&I.readPixels(U,B,H,N,Ne.convert(De),Ne.convert(ke),ne)}finally{const ye=w!==null?Pe.get(w).__webglFramebuffer:null;Re.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,U,B,H,N,ne,fe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){const ye=E.texture,De=ye.format,ke=ye.type;if(!$e.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-H&&B>=0&&B<=E.height-N){Re.bindFramebuffer(I.FRAMEBUFFER,ve);const be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.bufferData(I.PIXEL_PACK_BUFFER,ne.byteLength,I.STREAM_READ),I.readPixels(U,B,H,N,Ne.convert(De),Ne.convert(ke),0);const ot=w!==null?Pe.get(w).__webglFramebuffer:null;Re.bindFramebuffer(I.FRAMEBUFFER,ot);const ht=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await np(I,ht,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ne),I.deleteBuffer(be),I.deleteSync(ht),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,B=0){E.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-B),N=Math.floor(E.image.width*H),ne=Math.floor(E.image.height*H),fe=U!==null?U.x:0,ve=U!==null?U.y:0;R.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,fe,ve,N,ne),Re.unbindTexture()},this.copyTextureToTexture=function(E,U,B=null,H=null,N=0){E.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let ne,fe,ve,ye,De,ke;B!==null?(ne=B.max.x-B.min.x,fe=B.max.y-B.min.y,ve=B.min.x,ye=B.min.y):(ne=E.image.width,fe=E.image.height,ve=0,ye=0),H!==null?(De=H.x,ke=H.y):(De=0,ke=0);const be=Ne.convert(U.format),ot=Ne.convert(U.type);R.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const ht=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),en=I.getParameter(I.UNPACK_SKIP_PIXELS),tt=I.getParameter(I.UNPACK_SKIP_ROWS),we=I.getParameter(I.UNPACK_SKIP_IMAGES),Dt=E.isCompressedTexture?E.mipmaps[N]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,ye),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,De,ke,ne,fe,be,ot,Dt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,De,ke,Dt.width,Dt.height,be,Dt.data):I.texSubImage2D(I.TEXTURE_2D,N,De,ke,ne,fe,be,ot,Dt),I.pixelStorei(I.UNPACK_ROW_LENGTH,ht),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,en),I.pixelStorei(I.UNPACK_SKIP_ROWS,tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,we),N===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(E,U,B=null,H=null,N=0){E.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0);let ne,fe,ve,ye,De,ke,be,ot,ht;const gt=E.isCompressedTexture?E.mipmaps[N]:E.image;B!==null?(ne=B.max.x-B.min.x,fe=B.max.y-B.min.y,ve=B.max.z-B.min.z,ye=B.min.x,De=B.min.y,ke=B.min.z):(ne=gt.width,fe=gt.height,ve=gt.depth,ye=0,De=0,ke=0),H!==null?(be=H.x,ot=H.y,ht=H.z):(be=0,ot=0,ht=0);const en=Ne.convert(U.format),tt=Ne.convert(U.type);let we;if(U.isData3DTexture)R.setTexture3D(U,0),we=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),we=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Dt=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),mn=I.getParameter(I.UNPACK_SKIP_PIXELS),Li=I.getParameter(I.UNPACK_SKIP_ROWS),tn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ye),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(we,N,be,ot,ht,ne,fe,ve,en,tt,gt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(we,N,be,ot,ht,ne,fe,ve,en,gt.data):I.texSubImage3D(we,N,be,ot,ht,ne,fe,ve,en,tt,gt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,mn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Li),I.pixelStorei(I.UNPACK_SKIP_IMAGES,tn),N===0&&U.generateMipmaps&&I.generateMipmap(we),Re.unbindTexture()},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Re.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,Re.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bc?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===po?"display-p3":"srgb"}}class Wc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new Wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ea extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oc,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new b;class Xc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const oh=new b,ah=new et,ch=new et,mv=new b,lh=new Ue,Ar=new b,ta=new Un,hh=new Ue,na=new ir;class Hu extends Z{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gl,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new it),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ar),this.boundingBox.expandByPoint(Ar)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ar),this.boundingSphere.expandByPoint(Ar)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(i),e.ray.intersectsSphere(ta)!==!1&&(hh.copy(i).invert(),na.copy(e.ray).applyMatrix4(hh),!(this.boundingBox!==null&&na.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,na)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Tf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ah.fromBufferAttribute(i.attributes.skinIndex,e),ch.fromBufferAttribute(i.attributes.skinWeight,e),oh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=ch.getComponent(s);if(o!==0){const a=ah.getComponent(s);lh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(mv.copy(oh).applyMatrix4(lh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Vu extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _o extends wt{constructor(e=null,t=1,n=1,i,s,o,a,c,l=Ft,h=Ft,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uh=new Ue,gv=new Ue;class jc{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:gv;uh.multiplyMatrices(a,t[s]),uh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _o(t,e,e,an,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Vu),this.bones.push(o),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class lc extends It{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $i=new Ue,dh=new Ue,Cr=[],fh=new it,_v=new Ue,Cs=new Z,Rs=new Un;class zs extends Z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_v)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new it),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),fh.copy(e.boundingBox).applyMatrix4($i),this.boundingBox.union(fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),Rs.copy(e.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),e.ray.intersectsSphere(Rs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,$i),dh.multiplyMatrices(n,$i),Cs.matrixWorld=dh,Cs.raycast(e,Cr);for(let o=0,a=Cr.length;o<a;o++){const c=Cr[o];c.instanceId=s,c.object=this,t.push(c)}Cr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _o(new Float32Array(i*this.count),i,this.count,Dc,Tn));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class bi extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ro=new b,oo=new b,ph=new Ue,Ps=new ir,Rr=new Un,ia=new b,mh=new b;class Si extends dt{constructor(e=new mt,t=new bi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ro.fromBufferAttribute(t,i-1),oo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ro.distanceTo(oo);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(i),Rr.radius+=s,e.ray.intersectsSphere(Rr)===!1)return;ph.copy(i).invert(),Ps.copy(e.ray).applyMatrix4(ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=l){const g=h.getX(_),y=h.getX(_+1),M=Pr(this,e,Ps,c,g,y);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(f),g=Pr(this,e,Ps,c,_,m);g&&t.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=l){const g=Pr(this,e,Ps,c,_,_+1);g&&t.push(g)}if(this.isLineLoop){const _=Pr(this,e,Ps,c,p-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Pr(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(ro.fromBufferAttribute(o,i),oo.fromBufferAttribute(o,s),t.distanceSqToSegment(ro,oo,ia,mh)>n)return;ia.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(ia);if(!(c<e.near||c>e.far))return{distance:c,point:mh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const gh=new b,_h=new b;class Gu extends Si{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)gh.fromBufferAttribute(t,i),_h.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gh.distanceTo(_h);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vv extends Si{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Wu extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vh=new Ue,hc=new ir,Ir=new Un,Lr=new b;class xv extends dt{constructor(e=new mt,t=new Wu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=s,e.ray.intersectsSphere(Ir)===!1)return;vh.copy(i).invert(),hc.copy(e.ray).applyMatrix4(vh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,_=f;p<_;p++){const m=l.getX(p);Lr.fromBufferAttribute(u,m),xh(Lr,m,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,_=f;p<_;p++)Lr.fromBufferAttribute(u,p),xh(Lr,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xh(r,e,t,n,i,s,o){const a=hc.distanceSqToPoint(r);if(a<t){const c=new b;hc.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Qs extends wt{constructor(e,t,n,i,s,o,a,c,l){super(e,t,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ao extends mt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],c=[],l=new b,h=new Ae;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class xt extends mt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let p=0;const _=[],m=n/2;let g=0;y(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function y(){const x=new b,C=new b;let A=0;const w=(t-e)/n;for(let P=0;P<=s;P++){const k=[],v=P/s,S=v*(t-e)+e;for(let D=0;D<=i;D++){const O=D/i,V=O*c+a,j=Math.sin(V),z=Math.cos(V);C.x=S*j,C.y=-v*n+m,C.z=S*z,u.push(C.x,C.y,C.z),x.set(j,w,z).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-v),k.push(p++)}_.push(k)}for(let P=0;P<i;P++)for(let k=0;k<s;k++){const v=_[k][P],S=_[k+1][P],D=_[k+1][P+1],O=_[k][P+1];e>0&&(h.push(v,S,O),A+=3),t>0&&(h.push(S,D,O),A+=3)}l.addGroup(g,A,0),g+=A}function M(x){const C=p,A=new Ae,w=new b;let P=0;const k=x===!0?e:t,v=x===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),p++;const S=p;for(let D=0;D<=i;D++){const V=D/i*c+a,j=Math.cos(V),z=Math.sin(V);w.x=k*z,w.y=m*v,w.z=k*j,u.push(w.x,w.y,w.z),d.push(0,v,0),A.x=j*.5+.5,A.y=z*.5*v+.5,f.push(A.x,A.y),p++}for(let D=0;D<i;D++){const O=C+D,V=S+D;x===!0?h.push(V,V+1,O):h.push(V+1,V,O),P+=3}l.addGroup(g,P,x===!0?1:2),g+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ss extends xt{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ss(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vo extends mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(s.slice(),3)),this.setAttribute("uv",new ct(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new b,x=new b,C=new b;for(let A=0;A<t.length;A+=3)f(t[A+0],M),f(t[A+1],x),f(t[A+2],C),c(M,x,C,y)}function c(y,M,x,C){const A=C+1,w=[];for(let P=0;P<=A;P++){w[P]=[];const k=y.clone().lerp(x,P/A),v=M.clone().lerp(x,P/A),S=A-P;for(let D=0;D<=S;D++)D===0&&P===A?w[P][D]=k:w[P][D]=k.clone().lerp(v,D/S)}for(let P=0;P<A;P++)for(let k=0;k<2*(A-P)-1;k++){const v=Math.floor(k/2);k%2===0?(d(w[P][v+1]),d(w[P+1][v]),d(w[P][v])):(d(w[P][v+1]),d(w[P+1][v+1]),d(w[P+1][v]))}}function l(y){const M=new b;for(let x=0;x<s.length;x+=3)M.x=s[x+0],M.y=s[x+1],M.z=s[x+2],M.normalize().multiplyScalar(y),s[x+0]=M.x,s[x+1]=M.y,s[x+2]=M.z}function h(){const y=new b;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];const x=m(y)/2/Math.PI+.5,C=g(y)/Math.PI+.5;o.push(x,1-C)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){const M=o[y+0],x=o[y+2],C=o[y+4],A=Math.max(M,x,C),w=Math.min(M,x,C);A>.9&&w<.1&&(M<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,M){const x=y*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function p(){const y=new b,M=new b,x=new b,C=new b,A=new Ae,w=new Ae,P=new Ae;for(let k=0,v=0;k<s.length;k+=9,v+=6){y.set(s[k+0],s[k+1],s[k+2]),M.set(s[k+3],s[k+4],s[k+5]),x.set(s[k+6],s[k+7],s[k+8]),A.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),C.copy(y).add(M).add(x).divideScalar(3);const S=m(C);_(A,v+0,y,S),_(w,v+2,M,S),_(P,v+4,x,S)}}function _(y,M,x,C){C<0&&y.x===1&&(o[M]=y.x-1),x.x===0&&x.z===0&&(o[M]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.vertices,e.indices,e.radius,e.details)}}class co extends vo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new co(e.radius,e.detail)}}class $c extends vo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $c(e.radius,e.detail)}}class qc extends mt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new b,p=new Ae;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=s+m/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const y=g+m,M=y,x=y+n+1,C=y+n+2,A=y+1;a.push(M,x,A),a.push(x,C,A)}}this.setIndex(a),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xn extends mt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new b,d=new b,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const y=[],M=g/n;let x=0;g===0&&o===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){const A=C/t;u.x=-e*Math.cos(i+A*s)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+A*s)*Math.sin(o+M*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-M),y.push(l++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){const M=h[g][y+1],x=h[g][y],C=h[g+1][y],A=h[g+1][y+1];(g!==0||o>0)&&f.push(M,x,A),(g!==n-1||c<Math.PI)&&f.push(x,C,A)}this.setIndex(f),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(_,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qn extends mt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new b,u=new b,d=new b;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const _=p/i*s,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const _=(i+1)*f+p-1,m=(i+1)*(f-1)+p-1,g=(i+1)*(f-1)+p,y=(i+1)*f+p;o.push(_,m,y),o.push(m,g,y)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class yv extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oe extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ot extends oe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mv extends En{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function Dr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function bv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Sv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function yh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)i[o++]=r[a+c]}return i}function Xu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class sr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Tv extends sr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zi,endingEnd:Zi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ji:s=e,a=2*t-n;break;case eo:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ji:o=e,c=2*n-t;break;case eo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,M=(-1-f)*m+(1.5+f)*_+.5*p,x=f*m-f*_;for(let C=0;C!==a;++C)s[C]=g*o[h+C]+y*o[l+C]+M*o[c+C]+x*o[u+C];return s}}class ju extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}}class wv extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dr(t,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Dr(e.times,Array),values:Dr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ju(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ks:t=this.InterpolantFactoryMethodDiscrete;break;case Zs:t=this.InterpolantFactoryMethodLinear;break;case wo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Zs;case this.InterpolantFactoryMethodSmooth:return wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&bv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[d+p]||_!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=Zs;class vs extends Nn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Ks;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class $u extends Nn{}$u.prototype.ValueTypeName="color";class ds extends Nn{}ds.prototype.ValueTypeName="number";class Ev extends sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)fn.slerpFlat(s,0,o,l-a,o,l,c);return s}}class fs extends Nn{InterpolantFactoryMethodLinear(e){return new Ev(this.times,this.values,this.getValueSize(),e)}}fs.prototype.ValueTypeName="quaternion";fs.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Nn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="string";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Ks;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends Nn{}ps.prototype.ValueTypeName="vector";class uc{constructor(e="",t=-1,n=[],i=Oc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Cv(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Nn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const h=Sv(c);c=yh(c,1,h),l=yh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new ds(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const m=[],g=[];Xu(f,m,g,p),m.length!==0&&_.push(new u(d,m,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const m=[],g=[];for(let y=0;y!==d[p].morphTargets.length;++y){const M=d[p];m.push(M.time),g.push(M.morphTarget===_?1:0)}i.push(new ds(".morphTargetInfluence["+_+"]",m,g))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(ps,f+".position",d,"pos",i),n(fs,f+".quaternion",d,"rot",i),n(ps,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Av(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return ps;case"color":return $u;case"quaternion":return fs;case"bool":case"boolean":return vs;case"string":return xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Cv(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Av(r.type);if(r.times===void 0){const t=[],n=[];Xu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ai={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Rv{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const Pv=new Rv;class ys{constructor(e){this.manager=e!==void 0?e:Pv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gn={};class Iv extends Error{constructor(e,t){super(e),this.response=t}}class qu extends ys{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ai.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Gn[e]!==void 0){Gn[e].push({onLoad:t,onProgress:n,onError:i});return}Gn[e]=[],Gn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Gn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const m=new ReadableStream({start(g){y();function y(){u.read().then(({done:M,value:x})=>{if(M)g.close();else{_+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let A=0,w=h.length;A<w;A++){const P=h[A];P.onProgress&&P.onProgress(C)}g.enqueue(x),y()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Iv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{ai.add(e,l);const h=Gn[e];delete Gn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Gn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Gn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Lv extends ys{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ai.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Js("img");function c(){h(),ai.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Dv extends ys{constructor(e){super(e)}load(e,t,n,i){const s=new wt,o=new Lv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class xo extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Mh extends xo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sa=new Ue,bh=new b,Sh=new b;class Yc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hc,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),Sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sh),t.updateMatrixWorld(),sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kv extends Yc{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Uv extends xo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new kv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Th=new Ue,Is=new b,ra=new b;class Nv extends Yc{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),n.position.copy(Is),ra.copy(n.position),ra.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ra),n.updateMatrixWorld(),i.makeTranslation(-Is.x,-Is.y,-Is.z),Th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th)}}class Ki extends xo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ov extends Yc{constructor(){super(new mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dc extends xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Ov}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Fv extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ai.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return ai.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ai.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});ai.add(e,c),s.manager.itemStart(e)}}class Yu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wh(){return performance.now()}class Bv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){fn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;fn.multiplyQuaternionsFlat(e,o,e,t,e,n),fn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Kc="\\[\\]\\.:\\/",zv=new RegExp("["+Kc+"]","g"),Zc="[^"+Kc+"]",Hv="[^"+Kc.replace("\\.","")+"]",Vv=/((?:WC+[\/:])*)/.source.replace("WC",Zc),Gv=/(WCOD+)?/.source.replace("WCOD",Hv),Wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zc),Xv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zc),jv=new RegExp("^"+Vv+Gv+Wv+Xv+"$"),$v=["material","materials","bones","map"];class qv{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zv,"")}static parseTrackName(e){const t=jv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);$v.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=qv;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Yv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),c={endingStart:Zi,endingEnd:Zi};for(let l=0;l!==o;++l){const h=s[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=wf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Af:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Oc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Ef;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===Su){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ji,i.endingEnd=Ji):(e?i.endingStart=this.zeroSlopeAtStart?Ji:Zi:i.endingStart=eo,t?i.endingEnd=this.zeroSlopeAtEnd?Ji:Zi:i.endingEnd=eo)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=s,c[0]=t,a[1]=s+e,c[1]=n,this}}const Kv=new Float32Array(1);class Zv extends Ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new Bv(st.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new ju(new Float32Array(2),new Float32Array(2),1,Kv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?uc.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Oc),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Yv(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?uc.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);function Jv(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,c=new mt;let l=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=r[d].attributes.position.count}c.setIndex(u)}for(const h in s){const u=Eh(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);const p=Eh(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function Eh(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){const h=r[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}const o=new e(s),a=new It(o,t,n);let c=0;for(let l=0;l<r.length;++l){const h=r[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){const _=h.getComponent(d,p);a.setComponent(d+u,p,_)}}else o.set(h.array,c);c+=h.count*t}return i!==void 0&&(a.gpuType=i),a}function Qv(r,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=r.getIndex(),i=r.getAttribute("position"),s=n?n.count:i.count;let o=0;const a=Object.keys(r.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,M=a.length;y<M;y++){const x=a[y],C=r.attributes[x];c[x]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);const A=r.morphAttributes[x];A&&(l[x]||(l[x]=[]),A.forEach((w,P)=>{const k=new w.array.constructor(w.count*w.itemSize);l[x][P]=new w.constructor(k,w.itemSize,w.normalized)}))}const f=e*.5,p=Math.log10(1/e),_=Math.pow(10,p),m=f*_;for(let y=0;y<s;y++){const M=n?n.getX(y):y;let x="";for(let C=0,A=a.length;C<A;C++){const w=a[C],P=r.getAttribute(w),k=P.itemSize;for(let v=0;v<k;v++)x+=`${~~(P[u[v]](M)*_+m)},`}if(x in t)h.push(t[x]);else{for(let C=0,A=a.length;C<A;C++){const w=a[C],P=r.getAttribute(w),k=r.morphAttributes[w],v=P.itemSize,S=c[w],D=l[w];for(let O=0;O<v;O++){const V=u[O],j=d[O];if(S[j](o,P[V](M)),k)for(let z=0,K=k.length;z<K;z++)D[z][j](o,k[z][V](M))}}t[x]=o,h.push(o),o++}}const g=r.clone();for(const y in r.attributes){const M=c[y];if(g.setAttribute(y,new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)),y in l)for(let x=0;x<l[y].length;x++){const C=l[y][x];g.morphAttributes[y][x]=new C.constructor(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return g.setIndex(h),g}function Ah(r,e){if(e===Cf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===rc||e===Tu){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===rc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Ku extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new vx(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Xs.extractUrlBase(e);o=Xs.resolveURL(l,this.path)}else o=Xs.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new qu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Zu){try{o[je.KHR_BINARY_GLTF]=new xx(e)}catch(u){i&&i(u);return}s=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Lx(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:o[u]=new nx;break;case je.KHR_DRACO_MESH_COMPRESSION:o[u]=new yx(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[u]=new Mx;break;case je.KHR_MESH_QUANTIZATION:o[u]=new bx;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function ex(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tx{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Se(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Bt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new dc(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ki(h),l.distance=u;break;case"spot":l=new Uv(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Xn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class nx{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return pt}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Bt),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Mt))}return Promise.all(i)}}class ix{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class sx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(a,a)}return Promise.all(s)}}class rx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class ox{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class ax{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Bt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Mt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class cx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class lx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(a[0],a[1],a[2],Bt),Promise.all(s)}}class hx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class ux{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(a[0],a[1],a[2],Bt),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Mt)),Promise.all(s)}}class dx{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class fx{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ot}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class px{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class mx{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gx{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _x{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class vx{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==un.TRIANGLES&&l.mode!==un.TRIANGLE_STRIP&&l.mode!==un.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const p of u){const _=new Ue,m=new b,g=new fn,y=new b(1,1,1),M=new zs(p.geometry,p.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,x),c.SCALE&&y.fromBufferAttribute(c.SCALE,x),M.setMatrixAt(x,_.compose(m,g,y));for(const x in c)if(x==="_COLOR_0"){const C=c[x];M.instanceColor=new lc(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&p.geometry.setAttribute(x,c[x]);dt.prototype.copy.call(M,p),this.parser.assignFinalMaterial(M),f.push(M)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Zu="glTF",Ls=12,Ch={JSON:1313821514,BIN:5130562};class xx{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ls),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ls,s=new DataView(e,Ls);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===Ch.JSON){const l=new Uint8Array(e,Ls+o,a);this.content=n.decode(l)}else if(c===Ch.BIN){const l=Ls+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=fc[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=fc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=rs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const p in f.attributes){const _=f.attributes[p],m=c[p];m!==void 0&&(_.normalized=m)}u(f)},a,l,Bt,d)})})}}class Mx{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class bx{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Ju extends sr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*l,_=p-l,m=-2*f+3*d,g=f-d,y=1-m,M=g-d+u;for(let x=0;x!==a;x++){const C=o[_+x+a],A=o[_+x+c]*h,w=o[p+x+a],P=o[p+x]*h;s[x]=y*C+M*A+m*w+g*P}return s}}const Sx=new fn;class Tx extends Ju{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Sx.fromArray(s).normalize().toArray(s),s}}const un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rh={9728:Ft,9729:on,9984:fu,9985:Br,9986:Fs,9987:jn},Ph={33071:oi,33648:Qr,10497:An},oa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wx={CUBICSPLINE:void 0,LINEAR:Zs,STEP:Ks},aa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ex(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new oe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),r.DefaultMaterial}function gi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ax(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Cx(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rx(r){let e;const t=r.extensions&&r.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ca(t.attributes):e=r.indices+":"+ca(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ca(r.targets[n]);return e}function ca(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function pc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Px(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Ix=new Ue;class Lx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ex,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new Dv(this.options.manager):this.textureLoader=new Fv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return gi(s,a,i),Xn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())s(h,a.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Xs.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=oa[i.type],a=rs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new It(l,o,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=oa[i.type],l=rs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let _,m;if(f&&f!==u){const g=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let M=t.cache.get(y);M||(_=new l(a,g*f,i.count*f/h),M=new pv(_,f/h),t.cache.add(y,M)),m=new Xc(M,c,d%f/h,p)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new It(_,c,p);if(i.sparse!==void 0){const g=oa.SCALAR,y=rs[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,C=new y(o[1],M,i.sparse.count*g),A=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,P=C.length;w<P;w++){const k=C[w];if(m.setX(k,A[w*c]),c>=2&&m.setY(k,A[w*c+1]),c>=3&&m.setZ(k,A[w*c+2]),c>=4&&m.setW(k,A[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=Rh[d.magFilter]||on,h.minFilter=Rh[d.minFilter]||jn,h.wrapS=Ph[d.wrapS]||An,h.wrapT=Ph[d.wrapT]||An,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(_){const m=new wt(_);m.needsUpdate=!0,d(m)}),t.load(Xs.resolveURL(u,s.path),p,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Xn(u,o),u.userData.mimeType=o.mimeType||Px(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Wu,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new bi,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return oe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){const u=i[je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Bt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Mt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ut);const h=s.alphaMode||aa.OPAQUE;if(h===aa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===aa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==pt&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ae(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==pt&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==pt){const u=s.emissiveFactor;a.emissive=new Se().setRGB(u[0],u[1],u[2],Bt)}return s.emissiveTexture!==void 0&&o!==pt&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Mt)),Promise.all(l).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Xn(u,s),t.associations.set(u,{materials:e}),s.extensions&&gi(i,u,s),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Ih(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=Rx(l),u=i[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Ih(new mt,l,t),i[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?Ex(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const _=h[f],m=o[f];let g;const y=l[f];if(m.mode===un.TRIANGLES||m.mode===un.TRIANGLE_STRIP||m.mode===un.TRIANGLE_FAN||m.mode===void 0)g=s.isSkinnedMesh===!0?new Hu(_,y):new Z(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===un.TRIANGLE_STRIP?g.geometry=Ah(g.geometry,Tu):m.mode===un.TRIANGLE_FAN&&(g.geometry=Ah(g.geometry,rc));else if(m.mode===un.LINES)g=new Gu(_,y);else if(m.mode===un.LINE_STRIP)g=new Si(_,y);else if(m.mode===un.LINE_LOOP)g=new vv(_,y);else if(m.mode===un.POINTS)g=new xv(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&Cx(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Xn(g,s),m.extensions&&gi(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&gi(i,u[0],s),u[0];const d=new yt;s.extensions&&gi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(Qi.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new mo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ue;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new jc(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],p=i.samplers[f.sampler],_=f.target,m=_.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,y=i.parameters!==void 0?i.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",y)),l.push(p),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],p=u[2],_=u[3],m=u[4],g=[];for(let y=0,M=d.length;y<M;y++){const x=d[y],C=f[y],A=p[y],w=_[y],P=m[y];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const k=n._createAnimationTracks(x,C,A,w,P);if(k)for(let v=0;v<k.length;v++)g.push(k[v])}return new uc(s,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ix)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(s.isBone===!0?h=new Vu:l.length>1?h=new yt:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Xn(h,s),s.extensions&&gi(n,h,s),s.matrix!==void 0){const u=new Ue;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new yt;n.name&&(s.name=i.createUniqueName(n.name)),Xn(s,n),n.extensions&&gi(t,s,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof En||d instanceof wt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,c=[];ii[s.path]===ii.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ii[s.path]){case ii.weights:l=ds;break;case ii.rotation:l=fs;break;case ii.position:case ii.scale:l=ps;break;default:switch(n.itemSize){case 1:l=ds;break;case 2:case 3:default:l=ps;break}break}const h=i.interpolation!==void 0?wx[i.interpolation]:Zs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const p=new l(c[d]+"."+ii[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),o.push(p)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=pc(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof fs?Tx:Ju;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Dx(r,e,t){const n=e.attributes,i=new it;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new b(c[0],c[1],c[2]),new b(l[0],l[1],l[2])),a.normalized){const h=pc(rs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new b,c=new b;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const _=pc(rs[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Ih(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){r.setAttribute(a,c)})}for(const o in n){const a=fc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ke.workingColorSpace!==Bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Xn(r,e),Dx(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ax(r,e.targets,t):r})}function kx(r){const e=new Map,t=new Map,n=r.clone();return Qu(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Qu(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Qu(r.children[n],e.children[n],t)}const Ux=`
float furH(vec3 p){ p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float furNoise(vec3 p){
  vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(furH(i), furH(i + vec3(1,0,0)), f.x), mix(furH(i + vec3(0,1,0)), furH(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(furH(i + vec3(0,0,1)), furH(i + vec3(1,0,1)), f.x), mix(furH(i + vec3(0,1,1)), furH(i + vec3(1,1,1)), f.x), f.y), f.z);
}
`,ed={value:0};function td(r,e,t){const n=new oe({map:r.map,color:16777215,roughness:e>0?1:.92,metalness:0});return n.name=e>0?"furShell":"fur",e>0&&(n.alphaToCoverage=!0),n.onBeforeCompile=i=>{i.uniforms.uShell={value:e},i.uniforms.uFurLen={value:t.length},i.uniforms.uDensity={value:t.density},i.uniforms.uComb={value:t.comb},i.uniforms.uTip={value:t.tipLighten},i.uniforms.uRim={value:t.rim},i.uniforms.uWind=ed;const s=(t.masks??[]).slice(0,4);for(;s.length<4;)s.push({p:new b(1e3,1e3,1e3),r:.001});i.uniforms.uMask={value:s.map(o=>o.p)},i.uniforms.uMaskR={value:s.map(o=>o.r)},i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uShell; uniform float uFurLen; uniform float uComb; uniform float uWind; uniform vec3 uMask[4]; uniform float uMaskR[4]; varying vec3 vFurPos; varying float vFurLen;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vFurPos = position;
        {
          // lean: backwards along the body, downwards on the legs (bind pose: +Y up, +Z forward)
          vec3 lean = mix(vec3(0.0, -1.0, -0.2), normalize(vec3(0.0, -0.45, -1.0)), smoothstep(0.07, 0.16, position.y));
          vec3 comb = lean - normal * dot(lean, normal);
          float h = uShell;
          float k = 1.0;
          for (int i = 0; i < 4; i++) k = min(k, smoothstep(uMaskR[i] * 1.05, uMaskR[i] * 2.1, distance(position, uMask[i])));
          vFurLen = k;
          h *= k;
          transformed += normal * uFurLen * h + comb * uFurLen * uComb * h * h;
          transformed.x += sin(uWind + position.z * 60.0 + position.y * 40.0) * uFurLen * 0.12 * h * h;
        }`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uShell; uniform float uDensity; uniform float uTip; uniform float uRim; varying vec3 vFurPos; varying float vFurLen;${Ux}`).replace("#include <color_fragment>",`#include <color_fragment>
        {
          vec3 q = vFurPos * uDensity;
          float n = furNoise(q) * 0.72 + furNoise(q * 2.37 + 11.0) * 0.28;
          float h = uShell;
          if (h > 0.0) {
            if (vFurLen < 0.2) discard; // bare skin around eyes/nose: shells would z-fight
            float th = mix(0.22, 0.97, h);
            float fw = fwidth(n) * 1.3 + 1e-3;
            float a = smoothstep(th - fw, th + fw, n);
            // strands under a pixel: resolve to their average coverage instead of shimmering
            float cellsPerPx = length(fwidth(q));
            a = mix(a, clamp((0.97 - th) * 1.3, 0.0, 1.0), smoothstep(0.4, 1.2, cellsPerPx));
            diffuseColor.a = a;
            if (a < 0.01) discard;
          }
          float v = furH(floor(q));
          diffuseColor.rgb *= mix(0.58, 1.0, sqrt(h)) * (0.92 + 0.16 * v);
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.35 + 0.025, uTip * h * h);
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        {
          // soft sheen on the silhouette so dark coats still read against dark backgrounds
          float rimF = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 3.0);
          totalEmissiveRadiance += (diffuseColor.rgb * 0.7 + 0.05) * uRim * rimF * (0.3 + 0.7 * uShell);
        }`)},n.customProgramCacheKey=()=>e>0?"fur-shell":"fur-base",n}function Nx(r,e){const t=[];r.traverse(n=>{const i=n;i.isSkinnedMesh&&i.material.name==="fur"&&t.push({body:i,base:i.material,opts:e,shells:[]})});for(const n of t)n.body.material=td(n.base,0,e),n.body.castShadow=!0,n.body.receiveShadow=!0,n.body.frustumCulled=!1,nd(n);r.userData.fur=t}function nd(r){var t;for(const n of r.shells)(t=n.parent)==null||t.remove(n),n.material.dispose();r.shells=[];const e=r.opts.shells;for(let n=1;n<=e;n++){const i=new Hu(r.body.geometry,td(r.base,n/e,r.opts));i.bind(r.body.skeleton,r.body.bindMatrix),i.position.copy(r.body.position),i.quaternion.copy(r.body.quaternion),i.scale.copy(r.body.scale),i.frustumCulled=!1,i.castShadow=!1,i.receiveShadow=!0,i.renderOrder=n,i.userData.furShell=!0,r.body.parent.add(i),r.shells.push(i)}}function Ox(r,e){const t=r.userData.fur;if(t)for(const n of t)n.opts.shells!==e&&(n.opts={...n.opts,shells:e},nd(n))}class Fx{constructor(){this.colliders=[]}add(e,t={}){const n={box:e,enabled:!0,...t};return this.colliders.push(n),n}addFromObject(e,t={}){return e.updateWorldMatrix(!0,!0),this.add(new it().setFromObject(e),t)}raycast(e,t,n,i){const s=new ir(e,t),o=new b;let a=n;for(const c of this.colliders)if(!(!c.enabled||c.oneWay||i&&c.tag===i)&&!c.box.containsPoint(e)&&s.intersectBox(c.box,o)){const l=o.distanceTo(e);l<a&&(a=l)}return a}overlaps(e){return this.colliders.some(t=>t.enabled&&!t.oneWay&&id(t.box,e))}}const Vt=new it,yn=.001;function id(r,e){return r.max.x>e.min.x+yn&&r.min.x<e.max.x-yn&&r.max.y>e.min.y+yn&&r.min.y<e.max.y-yn&&r.max.z>e.min.z+yn&&r.min.z<e.max.z-yn}function qi(r,e,t=r.pos){return e.min.set(t.x-r.half,t.y,t.z-r.half),e.max.set(t.x+r.half,t.y+r.height,t.z+r.half),e}function Lh(r,e,t,n,i={}){var a;const s=Math.max(1,Math.ceil(t/.008333333333333333)),o=t/s;for(let c=0;c<s;c++){e.grounded&&((a=e.ground)!=null&&a.velocity)&&e.pos.addScaledVector(e.ground.velocity,o),e.vel.y-=n*o;const l=e.grounded,h=e.vel.y;e.grounded=!1,e.ground=void 0;for(const u of["x","z"]){const d=e.vel[u]*o;if(d!==0){e.pos[u]+=d,qi(e,Vt);for(const f of r.colliders){if(!f.enabled||f.oneWay||!id(f.box,Vt))continue;const p=f.box.max.y-e.pos.y;if(p>0&&p<=e.stepHeight&&l){const _=e.pos.clone();if(_.y=f.box.max.y+.001,!r.overlaps(qi(e,new it,_))){e.pos.y=_.y,qi(e,Vt);continue}}if(f.pushable&&Bx(r,f,e,u,d)){i.pushed=f;continue}f.pushable&&f.pushable.heavy&&(i.blockedHeavy=f),d>0?e.pos[u]=f.box.min[u]-e.half-1e-4:e.pos[u]=f.box.max[u]+e.half+1e-4,e.vel[u]=0,qi(e,Vt)}}}e.pos.y+=e.vel.y*o,qi(e,Vt);for(const u of r.colliders){if(!u.enabled)continue;const d=u.box;if(Vt.max.x>d.min.x+yn&&Vt.min.x<d.max.x-yn&&Vt.max.z>d.min.z+yn&&Vt.min.z<d.max.z-yn&&Vt.min.y<d.max.y&&Vt.max.y>d.min.y+yn&&!(u.oneWay&&(e.vel.y>0||e.pos.y-e.vel.y*o<u.box.max.y-.05))){if(e.vel.y<=0&&e.pos.y-e.vel.y*o>=u.box.max.y-.08)e.pos.y=u.box.max.y+1e-4,!l&&h<-3&&(i.landedSpeed=-h),e.vel.y=0,e.grounded=!0,e.ground=u;else if(e.vel.y>0)e.pos.y=u.box.min.y-e.height-1e-4,e.vel.y=0;else{const f=Vt.max.x-u.box.min.x,p=u.box.max.x-Vt.min.x,_=Vt.max.z-u.box.min.z,m=u.box.max.z-Vt.min.z,g=Math.min(f,p,_,m),y=d.max.y-e.pos.y;g>.3&&y<.5?(e.pos.y=d.max.y+1e-4,e.vel.y=Math.max(0,e.vel.y),e.grounded=!0,e.ground=u):g===f?e.pos.x-=f:g===p?e.pos.x+=p:g===_?e.pos.z-=_:e.pos.z+=m}qi(e,Vt)}}}return i}function Bx(r,e,t,n,i){const s=e.pushable;if(t.strength<(s.heavy?2:1)||!t.grounded&&Math.abs(t.vel.y)>.1)return!1;const o=e.box.clone(),a=i*.6;if(o.min[n]+=a,o.max[n]+=a,s.limit&&!s.limit.containsBox(o))return!1;e.enabled=!1;const c=r.overlaps(o);return e.enabled=!0,c?!1:(e.box.copy(o),s.mesh.position[n]+=a,t.pos[n]-=i-a,!0)}const kr=[0,2,4,5,7,9,11],zx=[0,2,3,5,7,8,10],Dh=[0,2,3,5,7,9,10],Hx=[0,1,3,5,7,8,10],Vx={menu:{name:"Мурлыкающий джаз",bpm:92,swing:.18,root:50,scale:Dh,chords:[[0,2,4,6],[3,5,0,2],[6,1,3,5],[4,6,1,3]],kick:"x.......x.......",snare:"....x.......x...",hat:"x.xxx.xxx.xxx.xx",bass:"walk",lead:"vibes",pad:!0,leadDensity:.45,leadOct:2,gain:.8},yard:{name:"Бруклинский фанк",bpm:104,swing:.12,root:52,scale:Dh,chords:[[0,2,4,6],[0,2,4,6],[3,5,0,2],[4,6,1,3]],kick:"x..x..x...x..x..",snare:"....x.......x..x",hat:"xxxxxxxxxxxxxxxx",bass:"funk",lead:"clav",leadDensity:.55,leadOct:1,gain:.8},basement:{name:"Сырой подвал",bpm:72,swing:0,root:45,scale:zx,chords:[[0,2,4],[5,0,2],[3,5,0],[4,6,1]],kick:"x...............",snare:"..........x.....",hat:"......x.......x.",bass:"drone",lead:"bell",pad:!0,leadDensity:.18,leadOct:2,gain:.9},roofs:{name:"Над крышами Бруклина",bpm:124,swing:0,root:55,scale:kr,chords:[[0,2,4],[4,6,1],[5,0,2],[3,5,0]],kick:"x...x...x...x...",snare:"....x.......x...",hat:"..x...x...x...xx",bass:"root8",lead:"pluck",pad:!0,leadDensity:.6,leadOct:2,gain:.75},boss:{name:"Карниз атакует!",bpm:152,swing:0,root:40,scale:Hx,chords:[[0,2,4],[1,3,5],[0,2,4],[6,1,3]],kick:"x.x.x.x.x.x.x.xx",snare:"....x.......x.x.",hat:"xxxxxxxxxxxxxxxx",bass:"pulse",lead:"saw",leadDensity:.7,leadOct:2,gain:.7},shop:{name:"Лавка Пломбира (босса-нова)",bpm:118,swing:.05,root:53,scale:kr,chords:[[0,2,4,6],[1,3,5,0],[4,6,1,3],[0,2,4,6]],kick:"x..x....x..x....",snare:"..x..x....x..x..",hat:"x.x.x.x.x.x.x.x.",bass:"walk",lead:"vibes",pad:!0,leadDensity:.4,leadOct:2,gain:.75},comedy:{name:"Кошачий казус",bpm:116,swing:.1,root:48,scale:kr,chords:[[0,2,4],[4,6,1],[0,2,4],[3,5,0]],kick:"x.......x.......",snare:"....x.......x...",hat:"",bass:"oompah",lead:"pizz",leadDensity:.6,leadOct:2,gain:.8},tender:{name:"Двое в большом городе",bpm:80,swing:0,root:53,scale:kr,chords:[[0,2,4],[5,0,2],[3,5,0],[4,6,1]],kick:"",snare:"",hat:"",bass:"drone",lead:"bell",pad:!0,leadDensity:.3,leadOct:2,gain:.9}};function rn(r){return 440*Math.pow(2,(r-69)/12)}function Gx(r){let e=r;return()=>(e=e*16807%2147483647)/2147483647}class Wx{constructor(){this.ctx=null,this.current=null,this.timer=0,this.trackName="",this.musicVolume=.55}unlock(){if(this.ctx){this.ctx.resume();return}const e=new AudioContext;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.9;const t=e.createDynamicsCompressor();this.master.connect(t).connect(e.destination),this.musicBus=e.createGain(),this.musicBus.gain.value=this.musicVolume,this.sfxBus=e.createGain(),this.sfxBus.gain.value=.9,this.musicBus.connect(this.master),this.sfxBus.connect(this.master),this.reverb=e.createConvolver();const n=e.sampleRate*2.2,i=e.createBuffer(2,n,e.sampleRate);for(let a=0;a<2;a++){const c=i.getChannelData(a);for(let l=0;l<n;l++)c[l]=(Math.random()*2-1)*Math.pow(1-l/n,3)}this.reverb.buffer=i;const s=e.createGain();s.gain.value=.35,this.reverb.connect(s).connect(this.master),this.noiseBuf=e.createBuffer(1,e.sampleRate,e.sampleRate);const o=this.noiseBuf.getChannelData(0);for(let a=0;a<o.length;a++)o[a]=Math.random()*2-1;this.timer=window.setInterval(()=>this.schedule(),25)}play(e){var s;const t=Vx[e];if(!this.ctx||!t||((s=this.current)==null?void 0:s.track)===t)return;const n=this.ctx;if(this.current){const o=this.current.gain;o.gain.setTargetAtTime(0,n.currentTime,.4),setTimeout(()=>o.disconnect(),3e3)}const i=n.createGain();i.gain.value=0,i.gain.setTargetAtTime(t.gain,n.currentTime+.05,.5),i.connect(this.musicBus),i.connect(this.reverb),this.current={track:t,gain:i,step:0,next:n.currentTime+.1,rand:Gx(e.length*977+t.bpm),melody:3},this.trackName=t.name}schedule(){const e=this.current;if(!e||!this.ctx)return;const t=e.track,n=60/t.bpm/4;for(;e.next<this.ctx.currentTime+.12;){const i=e.step%16,s=Math.floor(e.step/16)%t.chords.length,o=e.next+(i%2?t.swing*n:0);this.playStep(e,t,i,s,o,n),e.step++,e.next+=n}}deg(e,t,n=0){const i=Math.floor(t/7);return e.root+e.scale[(t%7+7)%7]+12*(i+n)}playStep(e,t,n,i,s,o){const a=e.gain,c=t.chords[i];t.kick[n]==="x"&&this.kick(s,a),t.snare[n]==="x"&&this.snare(s,a,t.bpm>140?.5:.35),t.hat[n]==="x"&&this.hat(s,a,n%4===2?.12:.06);const l=this.deg(t,c[0],-1);switch(t.bass){case"walk":n%4===0&&this.tone(s,rn(this.deg(t,c[n/4%c.length],-1)),o*3.5,"triangle",.32,a,900);break;case"root8":n%2===0&&this.tone(s,rn(l),o*1.6,"sawtooth",.16,a,500);break;case"funk":[0,3,6,10,11,14].includes(n)&&this.tone(s,rn(n===11?l+12:l),o*1.2,"sawtooth",.22,a,700);break;case"pulse":this.tone(s,rn(l),o*.8,"sawtooth",.14,a,400+n%4*200);break;case"drone":n===0&&this.tone(s,rn(l),o*16,"sine",.3,a,300);break;case"oompah":n%8===0&&this.tone(s,rn(l),o*1.5,"sine",.45,a,600),n%8===4&&this.tone(s,rn(this.deg(t,c[2],-1)),o*1.5,"sine",.35,a,600);break}if(t.pad&&n===0)for(const d of c)this.tone(s,rn(this.deg(t,d,0)),o*16,"sawtooth",.035,a,1200,.6);if(t.bass==="oompah"&&(n%8===2||n%8===6))for(const d of c)this.pluckInst("pizz",s,rn(this.deg(t,d,1)),.05,a);const h=e.rand,u=n%4===0;if(h()<t.leadDensity*(u?1.2:.6)){const d=Math.floor(h()*5)-2;e.melody=Math.max(-2,Math.min(9,e.melody+d));let f=e.melody;u&&(f=c.reduce((p,_)=>Math.abs(_-f)<Math.abs(p-f)?_:p,c[0])+(f>6?7:0)),this.pluckInst(t.lead,s,rn(this.deg(t,f,t.leadOct-1)),.11,a,o*(u?3:1.5))}}env(e,t,n,i,s){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(n,t+i),e.gain.exponentialRampToValueAtTime(1e-4,t+i+s)}tone(e,t,n,i,s,o,a=2e3,c=.01){const l=this.ctx,h=l.createOscillator();h.type=i,h.frequency.value=t;const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=a;const d=l.createGain();this.env(d,e,s,c,n),h.connect(u).connect(d).connect(o),h.start(e),h.stop(e+c+n+.05)}pluckInst(e,t,n,i,s,o=.3){switch(e){case"vibes":this.tone(t,n,o*2+.5,"sine",i*1.2,s,4e3),this.tone(t,n*4,.15,"sine",i*.2,s,6e3);break;case"bell":this.tone(t,n,1.6,"sine",i,s,5e3),this.tone(t,n*2.76,.6,"sine",i*.3,s,8e3);break;case"pluck":this.tone(t,n,.25,"triangle",i*1.2,s,3e3),this.tone(t,n*2,.08,"square",i*.15,s,2500);break;case"clav":this.tone(t,n,.12,"square",i*.5,s,1800);break;case"saw":this.tone(t,n,o,"sawtooth",i*.55,s,2200),this.tone(t,n*1.01,o,"sawtooth",i*.4,s,2200);break;case"square":this.tone(t,n,o,"square",i*.4,s,2500);break;case"pizz":this.tone(t,n,.12,"triangle",i*1.4,s,2e3,.003);break;case"organ":this.tone(t,n,o,"sine",i,s),this.tone(t,n*2,o,"sine",i*.5,s);break}}noise(e,t,n,i,s,o,a=1){const c=this.ctx,l=c.createBufferSource();l.buffer=this.noiseBuf;const h=c.createBiquadFilter();h.type=s,h.frequency.value=o,h.Q.value=a;const u=c.createGain();return this.env(u,e,n,.004,t),l.connect(h).connect(u).connect(i),l.start(e,Math.random()*.5),l.stop(e+t+.05),h}kick(e,t){const n=this.ctx,i=n.createOscillator();i.frequency.setValueAtTime(140,e),i.frequency.exponentialRampToValueAtTime(40,e+.15);const s=n.createGain();this.env(s,e,.7,.003,.25),i.connect(s).connect(t),i.start(e),i.stop(e+.3)}snare(e,t,n){this.noise(e,.16,n,t,"bandpass",1800,.8),this.tone(e,190,.08,"triangle",n*.5,t)}hat(e,t,n){this.noise(e,.04,n,t,"highpass",8e3)}get now(){return this.ctx.currentTime}meow(e=1,t=1){if(!this.ctx)return;const n=this.ctx,i=this.now,s=.45*t,o=n.createOscillator();o.type="sawtooth";const a=480*e;o.frequency.setValueAtTime(a*.8,i),o.frequency.linearRampToValueAtTime(a*1.25,i+s*.35),o.frequency.linearRampToValueAtTime(a*.7,i+s);const c=n.createGain();this.env(c,i,.35,.05,s);const l=n.createGain();for(const[h,u,d]of[[700,1300,6],[1500,2400,8],[3e3,3400,10]]){const f=n.createBiquadFilter();f.type="bandpass",f.Q.value=d,f.frequency.setValueAtTime(h*e,i),f.frequency.linearRampToValueAtTime(u*e,i+s*.4),f.frequency.linearRampToValueAtTime(h*.7*e,i+s),o.connect(f).connect(l)}l.connect(c).connect(this.sfxBus),c.connect(this.reverb),o.start(i),o.stop(i+s+.1)}hiss(){this.ctx&&this.noise(this.now,.6,.35,this.sfxBus,"highpass",3500)}coo(){if(!this.ctx)return;const e=this.now;for(let t=0;t<3;t++)this.tone(e+t*.13,380-t*30,.12,"sine",.18,this.sfxBus,1200,.03)}fish(){if(!this.ctx)return;const e=this.now;[0,4,7,12].forEach((t,n)=>this.tone(e+n*.05,rn(84+t),.18,"triangle",.18,this.sfxBus,6e3))}jump(){if(!this.ctx)return;this.noise(this.now,.18,.12,this.sfxBus,"bandpass",600,2).frequency.exponentialRampToValueAtTime(2400,this.now+.18)}land(e){this.ctx&&(this.tone(this.now,70,.15,"sine",Math.min(.6,.15*e),this.sfxBus),this.noise(this.now,.08,.1,this.sfxBus,"lowpass",500))}hit(){this.ctx&&(this.noise(this.now,.12,.45,this.sfxBus,"lowpass",1400),this.tone(this.now,110,.1,"square",.2,this.sfxBus,800))}swipe(){if(!this.ctx)return;this.noise(this.now,.14,.2,this.sfxBus,"bandpass",3e3,1.5).frequency.exponentialRampToValueAtTime(900,this.now+.14)}thwip(){if(!this.ctx)return;this.noise(this.now,.22,.3,this.sfxBus,"bandpass",5e3,4).frequency.exponentialRampToValueAtTime(700,this.now+.22)}slam(){this.ctx&&(this.noise(this.now,.35,.8,this.sfxBus,"lowpass",900),this.tone(this.now,55,.3,"sine",.6,this.sfxBus))}clank(){this.ctx&&(this.tone(this.now,520,.4,"square",.08,this.sfxBus,3e3),this.tone(this.now,780,.3,"triangle",.1,this.sfxBus,3e3),this.noise(this.now,.1,.3,this.sfxBus,"bandpass",2500,3))}alert(){if(!this.ctx)return;const e=this.now;this.tone(e,988,.25,"square",.12,this.sfxBus,5e3),this.tone(e+.02,1318,.25,"square",.1,this.sfxBus,5e3)}fanfare(){if(!this.ctx)return;const e=this.now;[0,4,7,12,7,12,16].forEach((t,n)=>this.tone(e+n*.11,rn(67+t),.3,"square",.08,this.sfxBus,4e3))}swapChime(){if(!this.ctx)return;const e=this.now;[0,7,12,19].forEach((n,i)=>this.tone(e+i*.06,rn(76+n),.5,"sine",.1,this.sfxBus,6e3)),this.noise(e,.4,.12,this.sfxBus,"bandpass",1200,3).frequency.exponentialRampToValueAtTime(6e3,e+.4)}boing(){if(!this.ctx)return;const e=this.ctx,t=this.now,n=e.createOscillator();n.frequency.setValueAtTime(180,t),n.frequency.exponentialRampToValueAtTime(520,t+.25);const i=e.createGain();this.env(i,t,.25,.01,.3),n.connect(i).connect(this.sfxBus),n.start(t),n.stop(t+.35)}setMusicVolume(e){this.musicVolume=e,this.musicBus&&(this.musicBus.gain.value=e)}stop(){clearInterval(this.timer)}}const Me=new Wx,kh=new Map;function Ms(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function Qt(r,e,t,n=1,i=!0){const s=`${r}:${n}`,o=kh.get(s);if(o)return o;const a=document.createElement("canvas");a.width=a.height=e;const c=a.getContext("2d");t(c,e);const l=new Qs(a);return l.wrapS=l.wrapT=An,l.repeat.set(n,n),l.anisotropy=8,i&&(l.colorSpace=Mt),kh.set(s,l),l}function pn(r,e,t,n,i,s=!0){const o=Ms(i);for(let a=0;a<t;a++){const c=Math.floor(o()*255);r.fillStyle=s?`rgba(0,0,0,${o()*n})`:`rgba(${c},${c},${c},${o()*n})`;const l=1+o()*3;r.fillRect(o()*e,o()*e,l,l)}}function la(r="#8a3b2a",e=1){return Qt(`brick${r}${e}`,512,(t,n)=>{const i=Ms(e);t.fillStyle="#b8ab98",t.fillRect(0,0,n,n);const s=n/16,o=n/6;for(let c=0;c<16;c++){const l=c%2?o/2:0;for(let h=-1;h<7;h++){const u=new Se(r).offsetHSL((i()-.5)*.03,(i()-.5)*.15,(i()-.5)*.12);t.fillStyle=`#${u.getHexString()}`,t.fillRect(h*o+l+2,c*s+2,o-4,s-4),i()<.2&&(t.fillStyle="rgba(20,15,10,0.25)",t.fillRect(h*o+l+2,c*s+2,o-4,(s-4)*i()))}}pn(t,n,6e3,.25,e+7);const a=t.createLinearGradient(0,0,0,n);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(30,25,20,0.18)"),t.fillStyle=a,t.fillRect(0,0,n,n)})}function ha(){return Qt("brickbump",512,(r,e)=>{r.fillStyle="#000",r.fillRect(0,0,e,e);const t=e/16,n=e/6;r.fillStyle="#fff";for(let i=0;i<16;i++){const s=i%2?n/2:0;for(let o=-1;o<7;o++)r.fillRect(o*n+s+3,i*t+3,n-6,t-6)}pn(r,e,4e3,.5,3)},1,!1)}function Uh(r=2,e=128){return Qt(`concrete${r}${e}`,512,(t,n)=>{t.fillStyle=`rgb(${e-4},${e},${e+6})`,t.fillRect(0,0,n,n),pn(t,n,2e4,.18,r,!1),pn(t,n,8e3,.2,r+1);const i=Ms(r+5);t.strokeStyle="rgba(0,0,0,0.25)";for(let s=0;s<6;s++){t.beginPath();let o=i()*n,a=i()*n;t.moveTo(o,a);for(let c=0;c<8;c++)o+=(i()-.5)*60,a+=(i()-.5)*60,t.lineTo(o,a);t.stroke()}t.fillStyle="rgba(0,0,0,0.12)";for(let s=0;s<8;s++)t.beginPath(),t.ellipse(i()*n,i()*n,20+i()*60,10+i()*40,i()*3,0,7),t.fill()})}function Xx(){return Qt("asphalt",512,(r,e)=>{r.fillStyle="#3a3a3d",r.fillRect(0,0,e,e),pn(r,e,4e4,.35,11,!1),pn(r,e,2e4,.4,12)})}function Ds(r=4,e="#6b4a2e"){return Qt(`wood${r}${e}`,256,(t,n)=>{t.fillStyle=e,t.fillRect(0,0,n,n);const i=Ms(r);for(let s=0;s<90;s++){t.strokeStyle=`rgba(${i()<.5?"0,0,0":"255,220,180"},${.05+i()*.1})`,t.lineWidth=1+i()*2,t.beginPath();const o=i()*n;t.moveTo(0,o),t.bezierCurveTo(n*.3,o+(i()-.5)*10,n*.6,o+(i()-.5)*10,n,o),t.stroke()}t.fillStyle="rgba(0,0,0,0.35)";for(let s=0;s<4;s++)t.fillRect(0,s*n/4,n,2)})}function Nh(r=5,e="#4a4f55"){return Qt(`metal${r}${e}`,256,(t,n)=>{t.fillStyle=e,t.fillRect(0,0,n,n),pn(t,n,5e3,.2,r,!1);const i=Ms(r);for(let s=0;s<40;s++)t.fillStyle=`rgba(120,60,20,${i()*.25})`,t.beginPath(),t.ellipse(i()*n,i()*n,i()*18,i()*10,0,0,7),t.fill()})}function jx(){return Qt("tar",512,(r,e)=>{r.fillStyle="#2f2d2b",r.fillRect(0,0,e,e),pn(r,e,3e4,.3,21,!1),r.strokeStyle="rgba(0,0,0,0.5)",r.lineWidth=3;for(let t=0;t<=4;t++)r.beginPath(),r.moveTo(0,t*e/4),r.lineTo(e,t*e/4),r.stroke()})}function Oh(r,e=9){return Qt(`win${r}${e}`,256,(t,n)=>{const i=Ms(e);t.fillStyle=r?"#000":"#3c3430",t.fillRect(0,0,n,n);const s=8;for(let o=0;o<s;o++)for(let a=0;a<s;a++){const c=i()<.38;r?t.fillStyle=c?["#ffcf7a","#ffe2a8","#bfe0ff","#ffb347"][Math.floor(i()*4)]:"#000":t.fillStyle=c?"#6b5a45":"#1b2230",t.fillRect(a*(n/s)+6,o*(n/s)+5,n/s-12,n/s-10)}})}function $x(){return Qt("tiles",256,(r,e)=>{for(let t=0;t<8;t++)for(let n=0;n<8;n++)r.fillStyle=(n+t)%2?"#d9d4c7":"#2f3a44",r.fillRect(n*e/8,t*e/8,e/8,e/8);pn(r,e,3e3,.15,31)})}function si(r,e,t,n=512,i=128){const s=document.createElement("canvas");s.width=n,s.height=i;const o=s.getContext("2d");o.fillStyle=e,o.fillRect(0,0,n,i),o.fillStyle=t,o.font=`bold ${Math.floor(i*.55)}px 'Trebuchet MS', sans-serif`,o.textAlign="center",o.textBaseline="middle",o.shadowColor=t,o.shadowBlur=18,o.fillText(r,n/2,i/2);const a=new Qs(s);return a.colorSpace=Mt,a}function lo(r,e,t){return Qt(`fab${r}${e}${t}`,128,(n,i)=>{n.fillStyle=e,n.fillRect(0,0,i,i),n.fillStyle=t;for(let s=0;s<i;s+=16)n.fillRect(s,0,6,i),n.fillRect(0,s,i,4)})}function Fh(r){return Qt(`pane${r}`,128,(e,t)=>{if(r){const n=e.createRadialGradient(t/2,t*.6,4,t/2,t*.6,t*.8);n.addColorStop(0,"#ffe2a8"),n.addColorStop(1,"#b0662a"),e.fillStyle=n}else{const n=e.createLinearGradient(0,0,t,t);n.addColorStop(0,"#39465a"),n.addColorStop(.5,"#141b26"),n.addColorStop(1,"#253041"),e.fillStyle=n}e.fillRect(0,0,t,t),e.fillStyle=r?"rgba(150,40,40,0.75)":"rgba(60,50,45,0.6)",e.fillRect(0,0,t*.22,t),e.fillRect(t*.78,0,t*.22,t),r&&(e.fillStyle="rgba(60,30,10,0.5)",e.beginPath(),e.ellipse(t*.62,t*.9,12,16,0,0,7),e.fill()),e.fillStyle="#e8e0d0",e.fillRect(t/2-3,0,6,t),e.fillRect(0,t*.45,t,6)})}function qx(){return Qt("planks",512,(r,e)=>{let t=77;const n=()=>(t=t*16807%2147483647)/2147483647,i=8;for(let s=0;s<i;s++){let o=-n()*e*.5;for(;o<e;){const a=e*(.35+n()*.5),c=new Se("#7a5534").offsetHSL((n()-.5)*.02,(n()-.5)*.1,(n()-.5)*.1);r.fillStyle=`#${c.getHexString()}`,r.fillRect(o,s*e/i,a,e/i);for(let l=0;l<14;l++){r.strokeStyle=`rgba(40,22,10,${.08+n()*.12})`,r.lineWidth=1;const h=s*e/i+n()*(e/i);r.beginPath(),r.moveTo(o,h),r.bezierCurveTo(o+a*.3,h+(n()-.5)*6,o+a*.7,h+(n()-.5)*6,o+a,h),r.stroke()}r.fillStyle="rgba(20,10,4,0.7)",r.fillRect(o,s*e/i,2,e/i),o+=a}r.fillStyle="rgba(20,10,4,0.75)",r.fillRect(0,s*e/i,e,2)}pn(r,e,6e3,.12,5,!1)})}function mc(r=12,e="#cfc6b4"){return Qt(`stone${r}${e}`,256,(t,n)=>{t.fillStyle=e,t.fillRect(0,0,n,n),pn(t,n,9e3,.14,r,!1),pn(t,n,3e3,.12,r+1);const i=t.createLinearGradient(0,0,0,n);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(40,30,20,0.15)"),t.fillStyle=i,t.fillRect(0,0,n,n)})}function sd(r){return Qt(`room${r}`,128,(e,t)=>{let n=r*97+3;const i=()=>(n=n*16807%2147483647)/2147483647,s=["#e9c89a","#d9b48a","#c9d4c0","#e7d2b0","#b9a28a"][Math.floor(i()*5)];e.fillStyle=s,e.fillRect(0,0,t,t);const o=t*.22;e.fillStyle="rgba(0,0,0,0.28)",e.beginPath(),e.moveTo(0,0),e.lineTo(o,o),e.lineTo(o,t-o),e.lineTo(0,t),e.fill(),e.beginPath(),e.moveTo(t,0),e.lineTo(t-o,o),e.lineTo(t-o,t-o),e.lineTo(t,t),e.fill(),e.fillStyle="#6b4a30",e.beginPath(),e.moveTo(0,t),e.lineTo(o,t-o),e.lineTo(t-o,t-o),e.lineTo(t,t),e.fill(),e.fillStyle="rgba(0,0,0,0.12)",e.beginPath(),e.moveTo(0,0),e.lineTo(o,o),e.lineTo(t-o,o),e.lineTo(t,0),e.fill(),e.fillStyle="rgba(60,35,20,0.8)",i()<.6&&e.fillRect(o+i()*t*.3,t*.35,t*.18,t*.28),e.fillStyle="rgba(40,60,90,0.7)",i()<.6&&e.fillRect(t*.55,t*.3,t*.12,t*.09);const a=e.createRadialGradient(t*.5,t*.25,2,t*.5,t*.25,t*.55);a.addColorStop(0,"rgba(255,240,200,0.9)"),a.addColorStop(1,"rgba(255,200,120,0)"),e.fillStyle=a,e.fillRect(0,0,t,t),e.fillStyle=["rgba(150,40,40,0.8)","rgba(230,230,220,0.7)","rgba(60,90,70,0.8)"][Math.floor(i()*3)],e.fillRect(0,0,t*.18,t),e.fillRect(t*.82,0,t*.18,t)})}const Yx={dymok:{id:"dymok",name:"Дымок",walk:.35,trot:1.05,run:3,sneak:.32,jump:5.3,half:.16,height:.36,strength:2,ability:"dash",fur:{length:.009,density:950,comb:1.1,tip:.55,rim:.5},pitch:.72,color:"#5b5d66"},milena:{id:"milena",name:"Милена",walk:.35,trot:1.15,run:3.6,sneak:.36,jump:6.1,half:.1,height:.32,strength:0,ability:"hiss",fur:{length:.007,density:1050,comb:1.1,tip:.2,rim:.3},pitch:1.25,color:"#c9ccd3"},pixel:{id:"pixel",name:"Пиксель",walk:.35,trot:1.15,run:3.6,sneak:.36,jump:5.8,half:.11,height:.32,strength:1,ability:"doublejump",fur:{length:.005,density:1150,comb:1,tip:.1,rim:.7},pitch:1.05,color:"#222"},karniz:{id:"karniz",name:"Карниз",walk:.35,trot:1.2,run:4,sneak:.4,jump:6,half:.18,height:.4,strength:2,ability:"none",fur:{length:.008,density:950,comb:1.1,tip:.25,rim:.3},pitch:.6,color:"#d66a1c"},plombir:{id:"plombir",name:"Пломбир",walk:.3,trot:.6,run:1.5,sneak:.3,jump:3,half:.16,height:.36,strength:0,ability:"none",fur:{length:.016,density:800,comb:1.5,tip:.15,rim:.2},pitch:.9,color:"#f3f1ea"}},Kx={Walk:.242,Trot:.667,Run:2.03,Sneak:.185},Zx=new Ku,ua=new Map,rd={shells:16};function od(r){return ua.has(r)||ua.set(r,Zx.loadAsync(`./models/${r}.glb`)),ua.get(r)}const da=14,Hs=[{id:"brooklyn",cat:"dymok",name:"«Бруклин»",desc:"Красная бандана и кепка задом наперёд. +10% к уверенности, −0% к весу.",price:40},{id:"nighthero",cat:"dymok",name:"«Ночной герой»",desc:"Маска супергероя. Голуби больше не узнают Дымка (он так думает).",price:60},{id:"seeker",cat:"milena",name:"«Искательница»",desc:"Зелёный шарф и шляпа исследователя. Идеально для подвалов.",price:40},{id:"star",cat:"milena",name:"«Звёздная»",desc:"Розовые очки-звёздочки. Мир сразу выглядит лучше.",price:55}];class Jc{constructor(e){this.root=new yt,this.actions={},this.current="",this.yaw=0,this.health=5,this.maxHealth=5,this.invuln=0,this.state="normal",this.anchor=null,this.ropeLen=0,this.jumpBuffer=0,this.coyote=0,this.airJumps=0,this.actionLock=0,this.abilityCd=0,this.squash=0,this.sneaking=!1,this.moving=0,this.costume=null,this.costumeParts=[],this.lastEvents={},this.ai="none",this.scriptedTarget=null,this.scriptedSpeed=1.3,this.onGroundTime=0,this.remote=[],this.def=Yx[e],this.body={pos:this.root.position,vel:new b,half:this.def.half,height:this.def.height,grounded:!1,strength:this.def.strength,stepHeight:.22};const t=new mt().setFromPoints([new b,new b]);this.rope=new Si(t,new bi({color:15922943,transparent:!0,opacity:.9})),this.rope.visible=!1,this.rope.frustumCulled=!1}async load(){const e=await od(this.def.id);this.model=kx(e.scene);const t=[];this.model.traverse(n=>{const i=n;if(!i.isMesh)return;i.castShadow=!0;const s=i.material;if(s.name==="eye_iris"||s.name==="nose"){const o=i.geometry.attributes.position;for(const a of s.name==="nose"?[0]:[-1,1]){const c=new it,l=new b;for(let u=0;u<o.count;u++)l.fromBufferAttribute(o,u),(a===0||Math.sign(l.x)===a)&&c.expandByPoint(l);const h=c.getSize(new b);t.push({p:c.getCenter(new b),r:Math.max(h.x,h.y,h.z)*.5})}}s.name==="eye_iris"?(i.material=new Ot({map:s.map,roughness:.35,clearcoat:1,clearcoatRoughness:.02,emissiveMap:s.map,emissive:16777215,emissiveIntensity:.12,envMapIntensity:1.4}),i.castShadow=!1):s.name==="whisker"&&(i.castShadow=!1)}),Nx(this.model,{shells:rd.shells,length:this.def.fur.length,density:this.def.fur.density,comb:this.def.fur.comb,tipLighten:this.def.fur.tip,rim:this.def.fur.rim,masks:t}),this.root.add(this.model),this.mixer=new Zv(this.model);for(const n of e.animations){const i=this.mixer.clipAction(n);["Jump","Attack","Hiss"].includes(n.name)&&(i.setLoop(Su,1),i.clampWhenFinished=!0),this.actions[n.name]=i}return this.headBone=this.model.getObjectByName("head"),this.neckBone=this.model.getObjectByName("neck"),this.play("Idle"),this}play(e,t=.18,n=1){const i=this.actions[e];if(!i||(i.timeScale=n,this.current===e))return;const s=this.actions[this.current];i.reset().play(),s&&i.crossFadeFrom(s,t,!1),this.current=e}get headPos(){const e=new b;return(this.headBone??this.root).getWorldPosition(e),e}get forward(){return new b(Math.sin(this.yaw),0,Math.cos(this.yaw))}damage(e,t){if(this.invuln>0||this.state==="scripted")return!1;if(this.damageProxy)return this.invuln=1.1,this.damageProxy(e,t),!0;if(this.health=Math.max(0,this.health-e),this.invuln=1.1,Me.hit(),Me.meow(this.def.pitch*1.3,.5),t){const n=this.root.position.clone().sub(t).setY(0).normalize();this.body.vel.set(n.x*6,4,n.z*6)}return this.state==="swing"&&this.releaseSwing(),!0}releaseSwing(){this.state="normal",this.anchor=null,this.rope.visible=!1}update(e,t,n,i,s,o){var M,x;const a=this.body;this.invuln=Math.max(0,this.invuln-e),this.actionLock=Math.max(0,this.actionLock-e),this.abilityCd=Math.max(0,this.abilityCd-e),this.jumpBuffer=Math.max(0,this.jumpBuffer-e);const c={};let l=0,h=0,u=!1;if(t&&this.state!=="stunned"&&(l=t.moveX,h=t.moveY,u=t.run,this.sneaking=t.sneak),this.state==="scripted"&&this.scriptedTarget){const C=this.scriptedTarget.clone().sub(a.pos).setY(0);if(C.length()>.08){C.normalize();const A=Math.sin(n),w=Math.cos(n);h=-(C.x*A+C.z*w),l=C.x*Math.cos(n)-C.z*Math.sin(n),u=this.scriptedSpeed>2}}const d=new it(new b(a.pos.x-a.half,a.pos.y+.02,a.pos.z-a.half),new b(a.pos.x+a.half,a.pos.y+this.def.height,a.pos.z+a.half));i.overlaps(d)&&(this.sneaking=!0),a.height=this.sneaking?this.def.height*.66:this.def.height;const f=new b(-Math.sin(n),0,-Math.cos(n)),p=new b(Math.cos(n),0,-Math.sin(n)),_=f.multiplyScalar(h).add(p.multiplyScalar(l)),m=Math.min(1,_.length());let g=this.sneaking?this.def.sneak:u?this.def.run:Qi.lerp(this.def.walk,this.def.trot,Qi.smoothstep(m,.35,.8));if(this.actionLock>0&&a.grounded&&(g*=.3),this.state==="swing"&&this.anchor){a.vel.y-=da*e,a.vel.addScaledVector(_,6*e),t!=null&&t.jumpHeld&&(this.ropeLen=Math.max(1.5,this.ropeLen-3*e));const C=a.pos.clone().sub(this.anchor),A=C.length();if(C.divideScalar(A||1),A>=this.ropeLen){const k=a.vel.dot(C);k>0&&a.vel.addScaledVector(C,-k)}this.lastEvents=Lh(i,a,e,0);const w=a.pos.clone().sub(this.anchor);w.length()>this.ropeLen&&a.pos.copy(this.anchor).addScaledVector(w.normalize(),this.ropeLen);const P=a.vel.clone().setY(0);P.lengthSq()>.3&&(this.yaw=Math.atan2(P.x,P.z)),this.rope.geometry.setFromPoints([this.root.position.clone().add(new b(0,.25,0)),this.anchor]),this.rope.visible=!0,this.play("Jump",.1),(a.grounded||t&&!t.swingHeld)&&(this.releaseSwing(),a.grounded||(a.vel.y+=1.5))}else{const C=_.clone().multiplyScalar(g*m),A=a.grounded?22:5,w=new b(a.vel.x,0,a.vel.z),P=w.length()>this.def.run+.5;w.lerp(C,1-Math.exp(-(P?2:A)*e)),a.vel.x=w.x,a.vel.z=w.z,t!=null&&t.pressed.has("jump")&&(this.jumpBuffer=.14),a.grounded?(this.coyote=.12,this.airJumps=this.def.ability==="doublejump"?1:0):this.coyote-=e,this.jumpBuffer>0&&this.state==="normal"&&(this.coyote>0?(a.vel.y=this.def.jump*(this.sneaking?.8:1),this.coyote=0,this.jumpBuffer=0,this.play("Jump",.05,1.6),Me.jump()):this.airJumps>0&&(this.airJumps--,a.vel.y=this.def.jump*.85,this.jumpBuffer=0,(M=this.actions.Jump)==null||M.reset(),Me.boing())),t!=null&&t.pressed.has("swing")&&o&&this.trySwing(s,n);const k=a.vel.y<0&&(t!=null&&t.jumpHeld)?da*.85:da,v=!a.grounded;if(this.lastEvents=Lh(i,a,e,k),this.lastEvents.landedSpeed&&v&&(c.landed=this.lastEvents.landedSpeed,this.squash=Math.min(1,this.lastEvents.landedSpeed/9)*(this.def.id==="dymok"?1.6:.7),Me.land(this.lastEvents.landedSpeed/3)),w.lengthSq()>.02){let D=Math.atan2(w.x,w.z)-this.yaw;D=Math.atan2(Math.sin(D),Math.cos(D)),this.yaw+=D*(1-Math.exp(-12*e))}this.moving=w.length(),t!=null&&t.pressed.has("attack")&&this.actionLock<=0&&(this.actionLock=.45,(x=this.actions.Attack)==null||x.reset(),this.play("Attack",.05,1.3),Me.swipe(),c.attacked=!0),t!=null&&t.pressed.has("ability")&&this.abilityCd<=0&&(c.ability=this.useAbility()),a.pos.y<-10&&a.vel.set(0,0,0),(this.actionLock<=0||this.current!=="Attack")&&this.pickAnim()}this.squash=Math.max(0,this.squash-e*3);const y=this.squash;return this.model.scale.set(1+y*.25*Math.sin(y*9),1-y*.35*Math.abs(Math.sin(y*9)),1+y*.2),this.root.rotation.y=this.yaw,this.model.visible=!(this.invuln>0&&Math.floor(this.invuln*12)%2===0&&this.state!=="scripted"),this.mixer.update(e),a.grounded?this.onGroundTime+=e:this.onGroundTime=0,c}pickAnim(){const e=this.body;if(!(this.current==="Hiss"&&this.actionLock>0)){if(!e.grounded){this.current!=="Jump"&&this.play("Jump",.12,1);return}this.play(Jc.gaitFor(this.moving,this.sneaking),.22),this.syncGait()}}static gaitFor(e,t){return e<.08?t?"Sneak":"Idle":t?"Sneak":e<.6?"Walk":e<2.1?"Trot":"Run"}syncGait(){const e=Kx[this.current],t=this.actions[this.current];e&&t&&(t.timeScale=this.moving<.05?0:Qi.clamp(this.moving/e,.3,2.4))}setFurQuality(e){Ox(this.model,e)}useAbility(){var e;if(this.abilityCd=1.2,this.def.ability==="dash"){const t=this.forward;return this.body.vel.x=t.x*9,this.body.vel.z=t.z*9,this.body.grounded&&(this.body.vel.y=1.5),this.actionLock=.3,Me.meow(this.def.pitch*.9,.6),"dash"}if(this.def.ability==="hiss"||this.def.ability==="doublejump")return this.actionLock=.8,(e=this.actions.Hiss)==null||e.reset(),this.play("Hiss",.1),Me.hiss(),"hiss"}trySwing(e,t){const n=this.body.pos,i=new b(-Math.sin(t),0,-Math.cos(t));let s=null,o=1/0;for(const a of e){const c=a.clone().sub(n),l=c.length();if(l>16||l<1.5||c.y<1)continue;const h=c.clone().setY(0).normalize().dot(i);if(h<-.2)continue;const u=l-h*6-c.clone().setY(0).dot(i)*.5;u<o&&(o=u,s=a)}return s?(this.anchor=s,this.ropeLen=s.distanceTo(n)*.86,this.state="swing",this.body.grounded&&(this.body.vel.y=3),this.body.grounded=!1,this.body.vel.y<0&&(this.body.vel.y*=.5),Me.thwip(),!0):!1}setCostume(e){var f;for(const p of this.costumeParts)(f=p.parent)==null||f.remove(p);if(this.costumeParts=[],this.costume=e,!e||!this.headBone||!this.neckBone)return;const t=this.root.rotation.y,n=this.root.position.clone(),i=this.model.scale.clone();this.root.rotation.y=0,this.root.position.set(0,0,0),this.model.scale.set(1,1,1),this.mixer.stopAllAction();const s=this.model.getObjectByProperty("isSkinnedMesh",!0);s==null||s.skeleton.pose(),this.model.updateMatrixWorld(!0);const o=new b,a=new b;this.headBone.getWorldPosition(o),this.neckBone.getWorldPosition(a);const c=this.def.id==="dymok"?1.12:1,l=new yt,h=(p,_)=>new oe({color:p,roughness:.8,..._?{map:_}:{}}),u=o.clone().lerp(a,.35),d=new b(0,0,1);if(e==="brooklyn"||e==="seeker"){const p=e==="brooklyn"?lo(1,"#b3121b","#e8d7c0"):lo(2,"#2e6b3a","#9cc28a"),_=new Z(new qn(.058*c*(this.def.id==="dymok"?1.25:1),.016,8,20),h(16777215,p));_.position.copy(u).add(new b(0,-.035,-.01)),_.rotation.x=Math.PI/2-.5;const m=new Z(new ss(.04,.07,3),h(16777215,p));if(m.position.copy(_.position).add(new b(0,-.05,.05)),m.rotation.x=Math.PI,l.add(_,m),e==="brooklyn"){const g=new Z(new xn(.05*c,16,8,0,Math.PI*2,0,Math.PI/2),h(1916810));g.position.copy(o).add(new b(0,.09*c,-.035));const y=new Z(new xt(.045,.045,.006,16,1,!1,0,Math.PI),h(1916810));y.position.copy(g.position).add(new b(0,0,-.04)),y.rotation.y=Math.PI/2,l.add(g,y)}else{const g=new Z(new xt(.035,.045,.045,16),h(12163947));g.position.copy(o).add(new b(0,.1,-.03));const y=new Z(new xt(.075,.075,.006,20),h(12163947));y.position.copy(g.position).add(new b(0,-.02,0));const M=new Z(new xt(.0455,.0455,.012,16),h(5913372));M.position.copy(g.position).add(new b(0,-.012,0)),l.add(g,y,M)}}else if(e==="nighthero"){const p=new Z(new qn(.075*c,.012,8,24,Math.PI*1.2),h(1118481));p.position.copy(o).add(new b(0,.045,.02)),p.rotation.set(0,0,-Math.PI*.1),p.rotation.x=.2,p.lookAt(p.position.clone().add(d)),p.rotateZ(-Math.PI*.1);const _=new Z(new ft(.2,.28),new oe({color:7999261,side:Ut,roughness:.7}));_.position.copy(a).add(new b(0,.02,-.14)),_.rotation.x=-Math.PI/2+.25,l.add(p,_)}else if(e==="star"){for(const _ of[-1,1]){const m=new Z(new qn(.018,.004,6,5),h(16736168));m.position.copy(o).add(new b(_*.03,.04,.085)),l.add(m)}const p=new Z(new ze(.03,.004,.004),h(16736168));p.position.copy(o).add(new b(0,.04,.086)),l.add(p)}this.model.add(l);for(const p of[...l.children])(p.position.y<u.y-.01?this.neckBone:this.headBone).attach(p),this.costumeParts.push(p);this.model.remove(l),this.root.rotation.y=t,this.root.position.copy(n),this.model.scale.copy(i),this.current="",this.play("Idle",0)}pushRemote(e,t,n,i,s){this.remote.push({t:performance.now(),p:new b(...e),yaw:t,v:i}),this.remote.length>20&&this.remote.shift(),this.sneaking=s,n&&n!==this.current&&this.actions[n]&&(["Jump","Attack","Hiss"].includes(n)&&this.actions[n].reset(),this.play(n,.15))}updateRemote(e){const t=this.remote;if(t.length){const n=performance.now()-100;let i=t[0],s=t[t.length-1];for(let c=0;c<t.length-1;c++)if(t[c].t<=n&&t[c+1].t>=n){i=t[c],s=t[c+1];break}const o=s.t>i.t?Qi.clamp((n-i.t)/(s.t-i.t),0,1):1;this.root.position.lerpVectors(i.p,s.p,o);let a=s.yaw-i.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),this.yaw=i.yaw+a*o,this.moving=i.v+(s.v-i.v)*o}this.root.rotation.y=this.yaw,this.syncGait(),this.mixer.update(e)}}const Rt=.2,fa=new Map,Yi=(r,e)=>fa.get(r)??(fa.set(r,e()),fa.get(r));function Ur(r,e,t){let n=t.seed??1;const i=()=>(n=n*16807%2147483647)/2147483647,s=t.width??1.1,o=t.bottom??0,a=Yi("stone",()=>new oe({map:mc(12),roughness:.85})),c=Yi(`frame${t.frameColor??15262420}`,()=>new oe({color:t.frameColor??15262420,roughness:.6})),l=Yi("dglass",()=>new Ot({color:856344,roughness:.05,metalness:0,clearcoat:1,envMapIntensity:1.6})),h=Yi("acmetal",()=>new oe({color:12567494,roughness:.45,metalness:.6})),u=Yi("pipe",()=>new oe({color:3816768,roughness:.5,metalness:.7})),d=[0,1,2,3,4,5].map(x=>Yi(`room${x}`,()=>{const C=sd(x+1);return new oe({map:C,emissiveMap:C,emissive:16777215,emissiveIntensity:1.1,roughness:.3})})),f=(x,C,A,w,P,k)=>{const v=t.plane+t.dir*P,S=t.plane+t.dir*k,[D,O]=[Math.min(v,S),Math.max(v,S)];return t.axis==="z"?new it(new b(x,A,D),new b(C,w,O)):new it(new b(D,A,x),new b(O,w,C))},p=(x,C,A,w,P,k,v,S=!1,D=!0)=>{if(C-x<.001||w-A<.001)return;const O=f(x,C,A,w,P,k),V=O.getSize(new b),j=new ze(V.x,V.y,V.z),z=j.attributes.uv,K=j.attributes.position,W=j.attributes.normal,te=O.getCenter(new b);for(let se=0;se<z.count;se++){const Oe=K.getX(se)+te.x,We=K.getY(se)+te.y,X=K.getZ(se)+te.z,Q=Math.abs(W.getX(se));Math.abs(W.getY(se))>.5?z.setXY(se,Oe/2,X/2):Q>.5?z.setXY(se,X/2,We/2):z.setXY(se,Oe/2,We/2)}const ie=new Z(j,v);ie.position.copy(te),ie.castShadow=D,ie.receiveShadow=!0,ie.userData.batch=!0,r.add(ie),S&&e.add(O)},_=(x,C,A,w,P,k)=>{const v=new Z(new ft(w,P),k),S=t.plane+t.dir*A;t.axis==="z"?(v.position.set(x,C,S),v.rotation.y=t.dir>0?0:Math.PI):(v.position.set(S,C,x),v.rotation.y=t.dir>0?Math.PI/2:-Math.PI/2),v.userData.batch=!0,v.receiveShadow=!0,r.add(v)},m=[...t.rows].sort((x,C)=>x.sill-C.sill),g=[...t.centers].sort((x,C)=>x-C),y=(x,C)=>{var A;return!(((A=t.blank)==null?void 0:A.call(t,x,C))??!1)};let M=o;if(m.forEach((x,C)=>{const A=x.sill,w=x.sill+x.height;p(t.from,t.to,M,A,0,Rt,t.wall);let P=t.from;g.forEach((k,v)=>{var j;const S=k-s/2,D=k+s/2;if(!y(v,C))return;p(P,S,A,w,0,Rt,t.wall),P=D;const O=`${v}:${C}`;if(p(S-.1,D+.1,A-.09,A,0,Rt+.12,a,t.sillColliders??!1),p(S-.08,D+.08,w,w+.22,0,Rt+.04,a),p(k-.1,k+.1,w-.04,w+.26,0,Rt+.07,a),(j=t.custom)!=null&&j.has(O))return;p(S,D,A,A+.06,.02,.1,c,!1,!1),p(S,D,w-.06,w,.02,.1,c,!1,!1),p(S,S+.06,A,w,.02,.1,c,!1,!1),p(D-.06,D,A,w,.02,.1,c,!1,!1),p(S,D,A+x.height*.52,A+x.height*.52+.05,.03,.09,c,!1,!1);const V=i()<(t.lit??.4);_(k,(A+w)/2,.05,s-.1,x.height-.1,V?d[Math.floor(i()*d.length)]:l),i()<(t.ac??.12)&&x.height>1.3&&(p(k-.34,k+.34,A+.02,A+.42,.1,Rt+.42,h,!0),p(k-.3,k+.3,A+.06,A+.38,Rt+.42,Rt+.43,u,!1,!1))}),p(P,t.to,A,w,0,Rt,t.wall),g.forEach((k,v)=>{y(v,C)||p(k-s/2,k+s/2,A,w,0,Rt,t.wall)}),M=w,C<m.length-1&&p(t.from,t.to,w+.34,w+.44,0,Rt+.06,a)}),p(t.from,t.to,M,t.top,0,Rt,t.wall),e.add(f(t.from,t.to,o,t.top,0,Rt)),t.cornice!==!1){p(t.from-.1,t.to+.1,t.top-.75,t.top-.5,0,Rt+.1,a),p(t.from-.25,t.to+.25,t.top-.22,t.top,0,Rt+.5,a,!0),p(t.from-.2,t.to+.2,t.top-.3,t.top-.22,0,Rt+.4,a);for(let x=t.from+.3;x<t.to-.2;x+=.9)p(x-.07,x+.07,t.top-.5,t.top-.22,0,Rt+.36,a)}for(const x of[t.from+.2,t.to-.2]){const C=new Z(new xt(.05,.05,t.top-o,8),u),A=t.plane+t.dir*(Rt+.07);t.axis==="z"?C.position.set(x,(t.top+o)/2,A):C.position.set(A,(t.top+o)/2,x),C.castShadow=!0,C.userData.batch=!0,r.add(C)}}function ks(r,e,t,n,i=.9){const s=[],o=Math.ceil((r+i-n)/t),a=Math.floor((e-i-n)/t);for(let c=o;c<=a;c++)s.push(n+c*t);return s}function Jx(r){var t;const e=new Map;r.updateMatrixWorld(!0),r.traverse(n=>{const i=n;if(!i.isMesh||!i.userData.batch||Array.isArray(i.material))return;const s=`${i.material.uuid}|${i.castShadow}|${i.geometry.index?1:0}`;(e.get(s)??e.set(s,[]).get(s)).push(i)});for(const n of e.values()){if(n.length<2)continue;const i=n.map(a=>{const c=a.geometry.clone();c.applyMatrix4(a.matrixWorld);for(const l of Object.keys(c.attributes))["position","normal","uv"].includes(l)||c.deleteAttribute(l);return c}),s=Jv(i,!1);if(!s)continue;const o=new Z(s,n[0].material);o.castShadow=n[0].castShadow,o.receiveShadow=!0,r.add(o);for(const a of n)(t=a.parent)==null||t.remove(a),a.geometry.dispose();i.forEach(a=>a.dispose())}}const Us=new b;function hn(r,e,t,n,i,s){const o=2*Math.PI*i/4,a=Math.max(s-2*i,0),c=Math.PI/4;Us.copy(e),Us[n]=0,Us.normalize();const l=.5*o/(o+a),h=1-Us.angleTo(r)/c;return Math.sign(Us[t])===1?h*l:a/(o+a)+l+l*(1-h)}class _i extends ze{constructor(e=1,t=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(e/2,t/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new b,c=new b,l=new b(e,t,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,p=new b,_=.5/i;for(let m=0,g=0;m<h.length;m+=3,g+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*s,h[m+1]=l.y*Math.sign(a.y)+c.y*s,h[m+2]=l.z*Math.sign(a.z)+c.z*s,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:p.set(1,0,0),d[g+0]=hn(p,c,"z","y",s,n),d[g+1]=1-hn(p,c,"y","z",s,t);break;case 1:p.set(-1,0,0),d[g+0]=1-hn(p,c,"z","y",s,n),d[g+1]=1-hn(p,c,"y","z",s,t);break;case 2:p.set(0,1,0),d[g+0]=1-hn(p,c,"x","z",s,e),d[g+1]=hn(p,c,"z","x",s,n);break;case 3:p.set(0,-1,0),d[g+0]=1-hn(p,c,"x","z",s,e),d[g+1]=1-hn(p,c,"z","x",s,n);break;case 4:p.set(0,0,1),d[g+0]=1-hn(p,c,"x","y",s,e),d[g+1]=1-hn(p,c,"y","x",s,t);break;case 5:p.set(0,0,-1),d[g+0]=hn(p,c,"x","y",s,e),d[g+1]=1-hn(p,c,"y","x",s,t);break}}}const pa=new Map;function Ee(r,e){return pa.has(r)||pa.set(r,e()),pa.get(r)}function Qx(r,e,t,n,i){const s=r.attributes.uv,o=[[n,t],[n,t],[e,n],[e,n],[e,t],[e,t]];for(let a=0;a<6;a++)for(let c=0;c<4;c++){const l=a*4+c;s.setXY(l,s.getX(l)*o[a][0]/i,s.getY(l)*o[a][1]/i)}s.needsUpdate=!0}class ey{constructor(e){this.physics=new Fx,this.anchors=[],this.interactables=[],this.pickups=[],this.checkpoints=[],this.regions=[],this.pigeons=[],this.cars=[],this.animated=[],this.spawn={},this.windowOpenY=5.15,this.windowClosedY=4.34,this.bossArena=new it(new b(21.3,12,-19.7),new b(30.7,20,5.7)),this.hideSpots=[],this.karnizSpawn=new b(26,12.5,-6),this.plombirPos=new b(-19.6,1.05,0),this.lights=[],this.M={brickRed:()=>Ee("brickRed",()=>new oe({map:la("#8a3b2a",1),bumpMap:ha(),bumpScale:2,roughness:.9})),brickBrown:()=>Ee("brickBrown",()=>new oe({map:la("#6e4630",2),bumpMap:ha(),bumpScale:2,roughness:.9})),brickYellow:()=>Ee("brickYellow",()=>new oe({map:la("#a0784a",3),bumpMap:ha(),bumpScale:2,roughness:.9})),concrete:()=>Ee("concrete",()=>new oe({map:Uh(2,130),roughness:.95})),darkConcrete:()=>Ee("dconcrete",()=>new oe({map:Uh(3,85),roughness:.95})),asphalt:()=>Ee("asphalt",()=>new oe({map:Xx(),roughness:.85})),wood:()=>Ee("wood",()=>new oe({map:Ds(4),roughness:.8})),crate:()=>Ee("crate",()=>new oe({map:Ds(7,"#8b6a3e"),roughness:.8})),metal:()=>Ee("metal",()=>new oe({map:Nh(5),roughness:.55,metalness:.6})),ironBlack:()=>Ee("iron",()=>new oe({color:1842464,roughness:.5,metalness:.8})),dumpster:()=>Ee("dumpster",()=>new oe({map:Nh(6,"#2f5a3a"),roughness:.6,metalness:.4})),tar:()=>Ee("tar",()=>new oe({map:jx(),roughness:.95})),tiles:()=>Ee("tiles",()=>new oe({map:$x(),roughness:.4})),glassLit:()=>Ee("glassLit",()=>{const t=Fh(!0);return new oe({map:t,emissiveMap:t,emissive:16777215,emissiveIntensity:.9,roughness:.2})}),glassDark:()=>Ee("glassDark",()=>new oe({map:Fh(!1),roughness:.12,metalness:.3,envMapIntensity:.6})),trim:()=>Ee("trim",()=>new oe({color:14208960,roughness:.8}))},this.scene=e}box(e,t,n,i,s,o,a,c=!0,l={},h=2){const u=i-e,d=s-t,f=o-n;let p=null;if(a){const m=new ze(u,d,f);Qx(m,u,d,f,h),p=new Z(m,a),p.position.set((e+i)/2,(t+s)/2,(n+o)/2),p.castShadow=d>.05&&Math.max(u,f)<40,p.receiveShadow=!0,p.userData.batch=!0,this.scene.add(p)}let _;return c&&(_=this.physics.add(new it(new b(e,t,n),new b(i,s,o)),l)),{mesh:p,collider:_}}build(){this.buildGround(),this.buildNorthBuilding(),this.buildWestBuildingAndShop(),this.buildEastBuilding(),this.buildYardProps(),this.buildFireEscape(),this.buildBasement(),this.buildRoofA(),this.buildRoofB(),this.buildStreet(),this.buildBrownstones(),this.buildSkyline(),this.buildRain(),this.regions.push({name:"Лавка Пломбира",music:"shop",box:new it(new b(-21,0,-4),new b(-15.2,3,4))},{name:"Подвал",music:"basement",box:new it(new b(-13,-3.6,-20),new b(7,-.4,-9.4))},{name:"Крыша Карниза",music:"roofs",box:new it(new b(20.5,11.5,-21),new b(32,30,7))},{name:"Крыши Бруклина",music:"roofs",box:new it(new b(-16,8.5,-21),new b(21,30,-9))},{name:"Двор",music:"yard",box:new it(new b(-60,-2,-60),new b(60,30,60))}),this.spawn.dymok=new b(8.8,3.62,-11.4),this.spawn.milenaStreet=new b(-4,.02,16.3),this.spawn.milenaBasement=new b(3.5,-2.98,-17.5),this.spawn.pixel=new b(2,.02,10.5),Jx(this.scene)}buildGround(){const e=this.M.concrete();this.box(-60,-.6,-9.5,60,0,12,e),this.box(-60,-.6,-40,-13.5,0,-9.5,e),this.box(7.5,-.6,-40,60,0,-9.5,e),this.box(-13.5,-.6,-40,7.5,0,-20.5,e),this.box(-13.5,-.6,-12.3,-2,0,-9.5,e),this.box(2,-.6,-12.3,7.5,0,-9.5,e),this.box(-60,-.6,25,60,0,60,e),this.box(-60,-.6,12,60,.12,14.5,this.M.concrete()),this.box(-60,-.6,14.5,60,-.02,23,this.M.asphalt(),!0,{},6),this.box(-60,-.6,23,60,.12,25,this.M.concrete());const t=Ee("lane",()=>new oe({color:15253568,roughness:.6}));for(let i=-58;i<60;i+=4)this.box(i,-.02,18.65,i+2,0,18.85,t,!1);const n=Ee("puddle",()=>new Ot({color:2240576,roughness:.04,metalness:0,transparent:!0,opacity:.8,clearcoat:1}));for(const[i,s,o]of[[-4,3,1.2],[6,-3,.8],[-9,-4,1],[11,8,.7],[3,18,1.4]]){const a=new Z(new ao(o,24),n);a.rotation.x=-Math.PI/2,a.scale.y=.6,a.position.set(i,s>14?0:.012,s),a.receiveShadow=!0,this.scene.add(a)}}buildNorthBuilding(){const e=this.M.brickRed();this.box(-15,0,-20,-11,12,-12,e),this.box(-9,0,-20,15,12,-12,e),this.box(-11,0,-17,-9,12,-12,e),this.box(-11,0,-20,-9,12,-19.2,e),Ur(this.scene,this.physics,{axis:"z",plane:-12,dir:1,from:-15,to:15,top:12,seed:3,lit:.45,ac:.15,sillColliders:!0,centers:ks(-15,15,2.6,8.8),rows:[{sill:.9,height:1.7},{sill:3.9,height:1.7},{sill:7.1,height:1.7},{sill:10.2,height:1.1}],wall:this.M.brickRed(),custom:new Set([`${ks(-15,15,2.6,8.8).indexOf(8.8)}:1`]),blank:(u,d)=>d===0&&[-1.6,1,6.2].includes(+ks(-15,15,2.6,8.8)[u].toFixed(1))});const t=new Z(new ft(1,1.6),Ee("aptroom",()=>{const u=sd(9);return new oe({map:u,emissiveMap:u,emissive:16777215,emissiveIntensity:1.3})}));t.position.set(8.8,4.75,-11.97);const n=Ee("aptframe",()=>new oe({color:15262420,roughness:.6}));for(const[u,d,f,p]of[[1.1,.06,8.8,3.93],[1.1,.06,8.8,5.57],[.06,1.7,8.28,4.75],[.06,1.7,9.32,4.75]]){const _=new Z(new ze(u,d,.08),n);_.position.set(f,p,-11.94),this.scene.add(_)}const i=new yt,s=new Z(new ze(.98,.78,.02),Ee("pane",()=>new Ot({color:11125204,roughness:.05,transparent:!0,opacity:.28})));new Z(new ze(1,.8,.05),n).scale.set(1,1,1);const a=new Z(new ze(.9,.7,.06),s.material);i.add(s,a),i.add(new Z(new ze(1,.05,.05),n).translateY(.38),new Z(new ze(1,.05,.05),n).translateY(-.38)),i.position.set(8.8,this.windowOpenY,-11.9),this.window=i,this.scene.add(t,i);const c=new Z(new ze(1.2,.2,.25),this.M.wood());c.position.set(8.8,3.72,-11.7),this.scene.add(c);const l=this.M.darkConcrete();this.box(-2,-3,-12.3,-.6,0,-12,l,!0),this.box(.6,-3,-12.3,2,0,-12,l,!0),this.box(-.6,-.8,-12.3,.6,0,-12,l,!0);const h=new Z(new ft(1.2,.3),new pt({map:si("ПОДВАЛ","#243040","#9fd4ff",256,64)}));h.position.set(0,-.55,-11.98),this.scene.add(h)}buildWestBuildingAndShop(){const e=this.M.brickYellow();this.box(-24,0,-20,-15,12,-4,e),this.box(-24,0,4,-15,12,12,e),this.box(-24,3,-4,-15,12,4,e),this.box(-24,0,-4,-21,3,4,e),this.box(-15.3,0,-4,-15,3,-.6,e),this.box(-15.3,0,.6,-15,3,4,e),this.box(-15.3,2.2,-.6,-15,3,.6,e),Ur(this.scene,this.physics,{axis:"x",plane:-15,dir:1,from:-20,to:12,top:12,bottom:3.05,seed:7,lit:.5,ac:.1,centers:ks(-20,12,2.4,0),rows:[{sill:4.1,height:1.7},{sill:7.3,height:1.7},{sill:10.2,height:1.1}],wall:this.M.brickYellow(),frameColor:3099194});for(const l of[-2.4,2.4]){const h=new Z(new ft(2.4,1.6),this.M.glassLit());h.position.set(-14.97,1.4,l),h.rotation.y=Math.PI/2,this.scene.add(h)}const t=new Z(new ze(1.4,.08,8.4),Ee("awning",()=>new oe({map:lo(3,"#1f5f8b","#f2efe6"),roughness:.8})));t.position.set(-14.3,2.7,0),t.rotation.z=-.25,t.castShadow=!0,this.scene.add(t);const n=new Z(new ft(3.2,.8),new pt({map:si("РЫБА • FISH","#0b0b12","#5ff3ff"),toneMapped:!1}));n.position.set(-14.76,3.55,0),n.rotation.y=Math.PI/2,this.scene.add(n),this.animated.push(l=>{const h=Math.sin(l*23)>.97||l%7>6.8?.25:1;n.material.color.setScalar(h)}),this.box(-21,-.05,-4,-15.3,.005,4,Ee("planks",()=>new oe({map:qx(),roughness:.55,envMapIntensity:.6})),!1,{},2.5);const i=Ee("wainscot",()=>new oe({color:3955272,roughness:.6}));this.box(-20.99,0,-3.99,-20.9,1,3.99,i,!1),this.box(-20.99,2.85,-3.99,-15.31,3,3.99,Ee("tin",()=>new oe({color:14275264,roughness:.35,metalness:.4})),!1);const s=this.box(-20.4,0,-1.6,-19,1,1.6,this.M.wood());s.mesh.castShadow=!0;for(const l of[-3.6,3.2]){this.box(-20.8,0,l,-16,2.2,l+.4,this.M.wood());for(let h=0;h<10;h++)for(const u of[.6,1.2,1.8]){const d=new Z(new xt(.06,.06,.1,12),Ee(`can${h%3}`,()=>new oe({color:[12597547,3049153,15844367][h%3],metalness:.7,roughness:.3})));d.position.set(-20.5+h*.45,u+.05,l+.2),this.scene.add(d)}}const o=new Z(new ft(1.2,1.6),new Ot({color:13621472,metalness:1,roughness:.03}));o.position.set(-20.95,1.1,2.4),o.rotation.y=Math.PI/2,this.scene.add(o);const a=new Ki(16767392,6,9,1.6);a.position.set(-18,2.7,0),this.scene.add(a),this.lights.push(a),this.interactables.push({id:"shop",pos:new b(-18.6,0,0),radius:1.3,prompt:"Поговорить с Пломбиром (магазин)",enabled:!0});const c=new Z(new ft(2,.5),new pt({map:si("ЛАВКА ПЛОМБИРА","#f6efe0","#1f5f8b",512,128)}));c.position.set(-20.95,2.5,-.2),c.rotation.y=Math.PI/2,this.scene.add(c)}buildEastBuilding(){const e=this.M.brickBrown();this.box(21,0,-20,31,12.5,6,e),Ur(this.scene,this.physics,{axis:"x",plane:21,dir:-1,from:-20,to:6,top:12.5,seed:11,lit:.55,ac:.2,centers:ks(-20,6,2.5,-7),rows:[{sill:.9,height:1.7},{sill:4.1,height:1.7},{sill:7.3,height:1.7},{sill:10.4,height:1.2}],wall:this.M.brickBrown(),frameColor:1911354});const t=Ee("chain",()=>new oe({color:9080982,metalness:.8,roughness:.4,transparent:!0,opacity:.55}));this.box(15,0,-12,15.08,2.4,3,t),this.box(15,.3,3,15.08,2.4,3.5,t),this.box(15,0,3.5,15.08,2.4,12,t),this.box(17,0,-8,19,1.3,-6.5,this.M.dumpster())}dumpster(e,t,n=0){const i=new yt,s=new Z(new ze(1.8,1.15,1.2),this.M.dumpster());s.position.y=.6;const o=new Z(new ze(1.85,.08,1.25),Ee("lid",()=>new oe({color:2046502,roughness:.6})));o.position.y=1.22,o.rotation.x=-.05,i.add(s,o),i.position.set(e,0,t),i.rotation.y=n,i.traverse(a=>a.castShadow=!0),this.scene.add(i),this.box(e-.9,0,t-.6,e+.9,1.26,t+.6,null)}crate(e,t,n,i=.6,s=!1,o=!1,a){const c=new Z(new ze(i,i,i),this.M.crate());c.position.set(e,t+i/2,n),c.castShadow=c.receiveShadow=!0,this.scene.add(c);const l=new it(new b(e-i/2,t,n-i/2),new b(e+i/2,t+i,n+i/2));return this.physics.add(l,s?{pushable:{mesh:c,heavy:o,limit:a}}:{})}fishPickup(e,t,n,i=1){const s=new yt,o=new Z(new xn(.07,12,8),Ee("fishgold",()=>new oe({color:16758311,emissive:16747008,emissiveIntensity:.6,metalness:.6,roughness:.3})));o.scale.set(1.6,.9,.5);const a=new Z(new ss(.06,.08,3),o.material);a.rotation.z=Math.PI/2,a.position.x=-.13,s.add(o,a),i>1&&s.scale.setScalar(1.6),s.position.set(e,t+.25,n),this.scene.add(s),this.pickups.push({mesh:s,pos:s.position.clone(),value:i,taken:!1,id:`fish_${this.pickups.length}`})}checkpoint(e,t,n,i,s){const o=new yt,a=new Z(new qn(.28,.1,10,24),Ee("bed",()=>new oe({color:12603469,roughness:.9})));a.rotation.x=Math.PI/2,a.position.y=.08;const c=new Z(new xt(.26,.26,.06,20),Ee("cush",()=>new oe({color:15852228,roughness:1})));c.position.y=.04;const l=new Z(new qc(.4,.46,32),new pt({color:10286847,transparent:!0,opacity:.6,side:Ut}));l.rotation.x=-Math.PI/2,l.position.y=.02,o.add(a,c,l),o.position.set(n,i,s),this.scene.add(o),this.animated.push(h=>l.scale.setScalar(1+.08*Math.sin(h*3))),this.checkpoints.push({id:e,name:t,pos:o.position.clone(),mesh:o})}buildYardProps(){this.crate(2.1,0,-8.2,.62),this.dumpster(3.9,-9.9),this.box(5.3,0,-11.95,5.45,2,-8,this.M.wood());for(let s=-11.8;s<-8;s+=.5)this.box(5.28,0,s,5.47,2.08,s+.12,this.M.wood(),!1);const e=this.box(5.45,2.72,-12,7.2,2.8,-10.9,Ee("awning2",()=>new oe({map:lo(4,"#a8322d","#efe6d6"),roughness:.8})));e.mesh.castShadow=!0,this.dumpster(-6.5,-10.3),this.crate(-8.2,0,-10.6,.7),this.crate(-8.2,.7,-10.6,.5),this.crate(-9,0,-10.2,.6);const t=new Z(new ze(.7,.45,.55),Ee("cardboard",()=>new oe({color:11569752,roughness:1})));t.position.set(-10,.225,6),t.castShadow=!0,this.scene.add(t),this.cardboard=t,this.interactables.push({id:"cardboard",pos:new b(-10,0,6),radius:.9,prompt:"Залезть в коробку",enabled:!0}),this.parkedCar(8,4,8068642),this.box(-4,.42,7,-2,.5,7.5,this.M.wood()),this.box(-3.9,0,7.1,-3.8,.42,7.4,this.M.ironBlack(),!1),this.box(-2.2,0,7.1,-2.1,.42,7.4,this.M.ironBlack(),!1),this.tree(-7,3),this.tree(10,-6),this.streetLamp(0,11.2),this.streetLamp(-12,-2),this.laundry(new b(-14.9,6.5,-6),new b(-3,7,-11.9)),this.laundry(new b(-14.9,9.5,2),new b(2,9.8,-11.9));for(const[s,o]of[[-14,9],[-13.2,9.4],[12,10.8]]){const a=new Z(new xt(.25,.18,.4,12),Ee("pot",()=>new oe({color:10506797,roughness:.9})));a.position.set(s,.2,o);const c=new Z(new co(.35,1),Ee("leaf",()=>new oe({color:4160058,roughness:.9,flatShading:!0})));c.position.set(s,.6,o),a.castShadow=c.castShadow=!0,this.scene.add(a,c),this.box(s-.25,0,o-.25,s+.25,.4,o+.25,null)}for(let s=0;s<7;s++)this.pigeon(new b(-1+Math.cos(s*1.7)*2.5,0,2+Math.sin(s*2.3)*2));[[2.1,.62,-8.2],[3.9,1.26,-9.9],[5.37,2,-9.5],[6.3,2.8,-11.4],[-8.2,1.2,-10.6],[-10,0,8],[8,0,4],[-3,.5,7.2],[17.5,1.3,-7.2],[0,0,5],[-12,0,10],[12,0,-2],[18,0,8],[-6.5,1.26,-10.3]].forEach(([s,o,a])=>this.fishPickup(s,o,a)),this.checkpoint("yard","Двор",-1.5,0,9);const i=new oe({map:this.ballTexture(),roughness:.5});this.ball=new Z(new xn(.07,20,14),i),this.ball.castShadow=!0,this.ball.position.set(8.3,3.67,-11.5),this.scene.add(this.ball)}ballTexture(){const e=document.createElement("canvas");e.width=128,e.height=64;const t=e.getContext("2d");["#f4d31b","#7ac943","#f7931e"].forEach((i,s)=>{t.fillStyle=i,t.fillRect(0,s*64/3,128,64/3+1)});const n=new Qs(e);return n.colorSpace=Mt,n}carModel(e,t=!1){const n=new yt,i=new Ot({color:e,metalness:.55,roughness:.28,clearcoat:1,clearcoatRoughness:.04}),s=Ee("carglass",()=>new Ot({color:724756,roughness:.04,metalness:.2,clearcoat:1,envMapIntensity:1.8})),o=Ee("chrome",()=>new oe({color:14672870,metalness:1,roughness:.18})),a=Ee("tyre",()=>new oe({color:1381653,roughness:.9})),c=Ee("cartrim",()=>new oe({color:1118740,roughness:.6})),l=(h,u,d,f,p)=>{const _=new Z(h,u);return _.position.set(d,f,p),n.add(_),_};l(new _i(4.3,.62,1.82,4,.22),i,0,.66,0),l(new _i(4.34,.16,1.84,2,.06),c,0,.42,0),l(new _i(2.25,.62,1.62,4,.2),s,-.25,1.22,0),l(new _i(2,.08,1.58,2,.04),i,-.25,1.55,0);for(const h of[-1.3,-.25,.8])l(new ze(.08,.55,1.64),i,h,1.2,0);for(const h of[-1,1]){l(new _i(.1,.12,1.7,2,.04),o,h*2.17,.5,0);const u=Ee(h>0?"headlamp":"taillamp",()=>new oe({color:h>0?16777215:5570560,emissive:h>0?16773320:16722458,emissiveIntensity:h>0?2.2:1.4}));for(const d of[-.62,.62])l(new _i(.06,.14,.34,2,.03),u,h*2.16,.78,d);l(new ze(.12,.08,.14),i,.55,1.02,h*.93)}l(new ze(.04,.16,.9),o,2.16,.66,0);for(const[h,u]of[[-1.35,.82],[1.35,.82],[-1.35,-.82],[1.35,-.82]]){const d=l(new qn(.26,.1,10,24),a,h,.36,u),f=l(new xt(.2,.2,.2,16),o,h,.36,u);f.rotation.x=Math.PI/2,d.rotation.y=0,l(new xt(.4,.4,.3,16,1,!0,0,Math.PI),c,h,.4,u).rotation.set(Math.PI/2,0,0)}return t&&(l(new _i(.62,.22,.24,2,.05),new oe({color:16774064,emissive:16769126,emissiveIntensity:.8}),-.25,1.7,0),l(new ze(2.6,.08,1.845),new oe({color:1118481}),0,.72,0)),n.traverse(h=>{const u=h;u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),n}parkedCar(e,t,n,i=0){const s=this.carModel(n);s.position.set(e,0,t),s.rotation.y=i,s.traverse(c=>c.castShadow=!0),this.scene.add(s);const o=i?.9:2.1,a=i?2.1:.9;return this.box(e-o,.37,t-a,e+o,1.7,t+a,null),this.hideSpots.push(new it(new b(e-o,0,t-a),new b(e+o,.37,t+a))),s}tree(e,t){const n=Ee("bark",()=>new oe({map:Ds(41,"#4a3a2c"),roughness:1})),i=new Z(new xt(.12,.22,3.2,10),n);i.position.set(e,1.6,t),i.castShadow=!0,this.scene.add(i);const s=Ee("leaves2",()=>new oe({vertexColors:!0,roughness:.85})),o=new yt;let a=Math.floor(Math.abs(e*31+t*17))+1;const c=()=>(a=a*16807%2147483647)/2147483647;for(let h=0;h<14;h++){const u=Qv(new co(.55+c()*.45,3)),d=u.attributes.position,f=new Float32Array(d.count*3),p=new b;for(let y=0;y<d.count;y++){p.fromBufferAttribute(d,y);const M=Math.sin(p.x*9+h)*Math.sin(p.y*11)*Math.sin(p.z*7+h*2);p.multiplyScalar(1+M*.18),d.setXYZ(y,p.x,p.y,p.z);const x=new Se().setHSL(.22+c()*.06,.45,.18+(p.y>0?.1:0)+c()*.06);f.set([x.r,x.g,x.b],y*3)}u.setAttribute("color",new It(f,3)),u.computeVertexNormals();const _=new Z(u,s),m=c()*Math.PI*2,g=c()*1.1;_.position.set(Math.cos(m)*g,3.1+c()*1.3,Math.sin(m)*g),_.castShadow=!0,_.receiveShadow=!0,o.add(_)}o.position.set(e,0,t),this.scene.add(o),this.animated.push(h=>o.rotation.z=Math.sin(h*.8+e)*.012),this.box(e-.2,0,t-.2,e+.2,3.2,t+.2,null);const l=new Z(new xt(.06,.09,1.4,8),n);l.rotation.z=Math.PI/2,l.position.set(e+.6,2.28,t),l.castShadow=!0,this.scene.add(l),this.box(e-.1,2.2,t-.1,e+1.3,2.35,t+.1,null)}streetLamp(e,t){const n=new Z(new xt(.06,.09,4.2,8),this.M.ironBlack());n.position.set(e,2.1,t);const i=new Z(new xn(.22,12,8),new oe({color:16773576,emissive:16763257,emissiveIntensity:3}));i.position.set(e,4.25,t),n.castShadow=!0,this.scene.add(n,i);const s=new Ki(16761466,12,14,1.5);s.position.set(e,4,t),this.scene.add(s),this.lights.push(s),this.box(e-.08,0,t-.08,e+.08,4.2,t+.08,null)}laundry(e,t){const n=new Si(new mt().setFromPoints([e,t]),new bi({color:14540253}));this.scene.add(n);const i=[15158332,16119285,3447003,15844367,10181046,3066993],s=Math.floor(e.distanceTo(t)/1.3);for(let o=1;o<s;o++){const a=e.clone().lerp(t,o/s),c=new Z(new ft(.6+o%2*.3,.8,4,4),new oe({color:i[o%i.length],side:Ut,roughness:.9}));c.geometry.translate(0,-.4,0),c.position.copy(a),c.lookAt(a.clone().add(new b(t.z-e.z,0,e.x-t.x))),c.castShadow=!0,this.scene.add(c),this.animated.push(l=>c.rotation.x=Math.sin(l*1.7+o)*.18)}this.anchors.push(e.clone().lerp(t,.5))}pigeon(e){const t=new yt;t.position.copy(e),t.rotation.y=Math.random()*6,this.scene.add(t),this.pigeons.push({mesh:t,home:e.clone(),vel:new b,flying:0})}buildFireEscape(){const e=this.M.ironBlack(),t=Ee("fegrate",()=>new oe({color:2434859,roughness:.6,metalness:.7}));for(const s of[3.6,6.8,10]){this.box(6.5,s-.06,-11.95,10.8,s,-10.8,t),this.box(6.5,s+.9,-10.84,10.8,s+.94,-10.8,e,!1);for(let o=6.5;o<=10.8;o+=.35)this.box(o,s,-10.84,o+.03,s+.92,-10.8,e,!1)}const n=(s,o,a,c,l,h)=>{const u=Math.round((c-a)/.2);for(let p=0;p<u;p++){const _=p/u,m=(p+1)/u,g=s+(o-s)*_,y=s+(o-s)*m;this.box(Math.min(g,y),a+(p+1)*.2-.05,l,Math.max(g,y),a+(p+1)*.2,h,t)}const d=Math.hypot(o-s,c-a),f=new Z(new ze(d,.04,.04),e);f.position.set((s+o)/2,(a+c)/2+.9,h),f.rotation.z=Math.atan2(c-a,o-s),this.scene.add(f)};n(10.7,6.6,3.6,6.8,-10.8,-10.25),n(6.6,10.7,6.8,10,-10.25,-9.7),this.box(10.7,9.94,-11.95,11.2,10,-9.7,t),this.box(6.2,6.74,-10.8,6.6,6.8,-9.7,t);const i=12;for(let s=0;s<i;s++){const o=6.5-s*.18;this.box(o-.18,10+(s+1)*.2-.04,-11.95,o,10+(s+1)*.2,-11.45,e)}this.box(4,12.36,-12.3,4.34,12.4,-11.45,e),this.checkpoint("fe3","Пожарная лестница",8.6,10,-11.4),this.fishPickup(9.5,6.8,-11.4),this.fishPickup(7.5,10,-11.4)}buildBasement(){const e=this.M.darkConcrete();this.box(-13,-3.6,-20,7,-3,-9.5,e,!0,{},3),this.box(-13,-.4,-20,7,0,-12.3,e,!1),this.box(-13.5,-3,-20.5,7.5,-.4,-20,e),this.box(-13.5,-3,-20,-13,-.4,-12,e),this.box(7,-3,-20,7.5,-.4,-9.5,e),this.box(-13,-3,-12.3,-2,-.4,-12,e),this.box(2,-3,-12.3,7,-.4,-12,e),this.box(-2.3,-3,-12,-2,0,-9.5,e),this.box(2,-3,-12,2.3,0,-9.5,e),this.box(-2.3,-3,-9.5,2.3,0,-9.2,e);for(let u=0;u<14;u++){const d=-9.5-u*.18,f=-.2*(u+1);this.box(-2,-3,d-.18,.2,f,d,this.M.concrete())}this.box(-2.3,-3,-20,-2,-.4,-16.6,e),this.box(-2.3,-3,-15.4,-2,-.4,-12.3,e),this.box(-2.3,-1.6,-16.6,-2,-.4,-15.4,e);const t=new Z(new ze(.08,1.4,1.2),Ee("grate",()=>{const u=document.createElement("canvas");u.width=u.height=128;const d=u.getContext("2d");d.clearRect(0,0,128,128),d.strokeStyle="#555a60",d.lineWidth=8;for(let p=8;p<128;p+=21)d.beginPath(),d.moveTo(p,0),d.lineTo(p,128),d.stroke();d.strokeRect(0,0,128,128);const f=new Qs(u);return f.colorSpace=Mt,new oe({map:f,transparent:!0,alphaTest:.3,metalness:.8,roughness:.4,side:Ut})}));t.position.set(-2.15,-2.3,-16),t.castShadow=!0,this.scene.add(t);const n=this.physics.add(new it(new b(-2.3,-3,-16.6),new b(-2,-1.6,-15.4)));this.grate={mesh:t,collider:n,state:"stuck"},this.interactables.push({id:"grate_push",pos:new b(-1.7,-3,-16),radius:1.2,prompt:"Решётка застряла. Дымок, рывок (Q)!",enabled:!0,who:["dymok"]}),this.interactables.push({id:"latch",pos:new b(-2.8,-3,-15.2),radius:.8,prompt:"Открыть защёлку",enabled:!1});const i=new Z(new ze(.05,.12,.2),this.M.metal());i.position.set(-2.35,-2.2,-15.3),this.scene.add(i);for(let u=0;u<3;u++){const d=0+u*.9,f=this.box(d,-3,-19.9,d+.8,-2.1,-19.2,Ee("wm",()=>new oe({color:15263976,roughness:.4}))),p=new Z(new ao(.25,20),Ee("drum",()=>new oe({color:2241348,roughness:.1,metalness:.6})));p.position.set(d+.4,-2.55,-19.19),this.scene.add(p),u===1&&f.mesh&&(f.mesh.userData.batch=!1,this.animated.push(_=>f.mesh&&(f.mesh.position.x=d+.4+Math.sin(_*40)*.006)))}this.box(4.5,-3,-19.8,6.8,-1,-18.4,this.M.metal());const s=new Ki(16738858,3,5,2);s.position.set(5.6,-2.2,-18.2),this.scene.add(s),this.lights.push(s),this.crate(3.5,-3,-14,.9,!0,!0,new it(new b(-2,-3.1,-19.9),new b(6.9,0,-12.4))),this.crate(5.9,-3,-13.2,.6,!0,!1,new it(new b(-2,-3.1,-19.9),new b(6.9,0,-12.4))),this.box(-1.9,-2,-19.9,0,-1.94,-19.2,this.M.wood()),this.fishPickup(-1,-1.94,-19.5);for(const[u,d]of[[2.5,-16],[-7.5,-16]]){const f=new Z(new xn(.08,10,8),new pt({color:16769696}));f.position.set(u,-.7,d),this.scene.add(f);const p=new Ki(16765066,9,11,1.6);p.position.set(u,-.8,d),this.scene.add(p),this.lights.push(p),this.animated.push(_=>p.intensity=9+(Math.sin(_*17+u)>.98?-5:0))}this.checkpoint("basement","Подвал",-5,-3,-14);for(const[u,d]of[[-6,-18],[-7,-18],[-8,-13],[-4,-19]])this.fishPickup(u,-3,d);this.fishPickup(-12.3,-3,-12.8,5);const o=new yt,a=new Z(new ze(1.9,.12,1.9),this.M.metal());o.add(a);for(const[u,d]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){const f=new Z(new ze(.06,2.2,.06),this.M.ironBlack());f.position.set(u,1.1,d),o.add(f)}const c=new Z(new ze(.12,.2,.05),new oe({color:16726832,emissive:16726832,emissiveIntensity:1}));c.position.set(.8,.5,.92),o.add(c),o.position.set(-10,-3.06,-18),this.scene.add(o);const l=this.physics.add(new it(new b(-10.95,-3.12,-18.95),new b(-9.05,-3,-17.05)),{velocity:new b});this.elevator={mesh:o,collider:l,y:-3.06,target:-3.06,bottom:-3.06,top:11.94,moving:!1},this.interactables.push({id:"elevator",pos:new b(-10,-3,-18),radius:1.1,prompt:"Нажать кнопку лифта",enabled:!0}),this.box(-11.3,-3,-19.3,-11,-.4,-16.7,e);const h=new Z(new ft(1.2,.3),new pt({map:si("ГРУЗОВОЙ ЛИФТ","#402020","#ffcf6a",256,64)}));h.position.set(-8.9,-1,-16.8),h.rotation.y=Math.PI/2,this.scene.add(h)}waterTower(e,t,n,i=!0){const s=Ee("tower",()=>new oe({map:Ds(12,"#7a5a3a"),roughness:.9})),o=new Z(new xt(1.8,1.8,3.2,20,1),s);o.position.set(e,t+4.6,n);const a=new Z(new ss(2,1.2,20),this.M.metal());a.position.set(e,t+6.8,n),o.castShadow=a.castShadow=!0,this.scene.add(o,a);for(const[c,l]of[[-1.2,-1.2],[1.2,-1.2],[-1.2,1.2],[1.2,1.2]])this.box(e+c-.1,t,n+l-.1,e+c+.1,t+3,n+l+.1,this.M.ironBlack());this.box(e-1.6,t+2.9,n-1.6,e+1.6,t+3,n+1.6,this.M.wood()),this.box(e-1.8,t+3,n-1.8,e+1.8,t+6.2,n+1.8,null),i&&this.anchors.push(new b(e+2.1,t+3.2,n),new b(e-2.1,t+3.2,n));for(const c of[3.6,4.6,5.6]){const l=new Z(new qn(1.82,.03,6,32),this.M.ironBlack());l.rotation.x=Math.PI/2,l.position.set(e,t+c,n),this.scene.add(l)}}parapet(e,t,n,i,s,o=.4){const a=this.M.trim();this.box(e,s,t,n,s+o,t+.3,a),this.box(e,s,i-.3,n,s+o,i,a),this.box(e,s,t,e+.3,s+o,i,a),this.box(n-.3,s,t,n,s+o,i,a)}steamVent(e,t,n){this.box(e-.3,t,n-.3,e+.3,t+.8,n+.3,this.M.metal());const i=[],s=new pt({color:14541802,transparent:!0,opacity:.25,depthWrite:!1});for(let o=0;o<8;o++){const a=new Z(new xn(.25,8,6),s.clone());this.scene.add(a),i.push(a)}this.animated.push(o=>{i.forEach((a,c)=>{const l=(o*.35+c/i.length)%1;a.position.set(e+Math.sin(l*5+c)*.2+l*.8,t+.9+l*2.5,n),a.scale.setScalar(.5+l*2),a.material.opacity=.28*(1-l)})})}stringLights(e,t,n=14){const i=[];for(let o=0;o<=n;o++){const a=e.clone().lerp(t,o/n);a.y-=Math.sin(o/n*Math.PI)*.6,i.push(a)}this.scene.add(new Si(new mt().setFromPoints(i),new bi({color:2236962})));const s=[16765562,16743034,8060865,8042751];i.forEach((o,a)=>{const c=new Z(new xn(.05,8,6),new pt({color:s[a%4],toneMapped:!1}));c.position.copy(o).add(new b(0,-.06,0)),this.scene.add(c)})}buildRoofA(){this.box(-15,12,-20,15,12+.015,-12,this.M.tar(),!1,{},4),this.parapet(-15.2,-20.2,15.2,-11.9,12),this.waterTower(-4,12,-16.5);const t=new yt,n=new Z(new ze(2.4,1.8,1.6),this.M.wood());n.position.y=.9;const i=new Z(new ze(2.7,.1,1.9),this.M.metal());i.position.y=1.85;const s=new Z(new ft(1.8,.9),Ee("mesh",()=>new oe({color:8947848,transparent:!0,opacity:.5,side:Ut})));s.position.set(0,1.1,.81);const o=new Z(new ze(.5,.6,.04),this.M.crate());o.geometry.translate(.25,0,0),o.position.set(-.25,.35,.82),t.add(n,i,s,o),t.position.set(7,12,-17),t.traverse(f=>f.castShadow=!0),this.scene.add(t),this.coopDoor=o,this.box(5.8,12,-17.8,8.2,12+1.9,-16.2,null),this.interactables.push({id:"coop",pos:new b(7,12,-15.8),radius:1.1,prompt:"Заглянуть в голубятню",enabled:!0});for(let f=0;f<4;f++)this.pigeon(new b(6+f*.6,12+1.9,-17));for(const[f,p]of[[-11,-14],[-9.6,-14],[2,-19],[11,-18.5]])this.box(f-.55,12,p-.45,f+.55,12+.9,p+.45,this.M.metal());this.box(-13.5,12,-19.5,-12.5,12+2.2,-18.5,this.M.brickRed()),this.box(12.5,12,-15.5,13.5,12+1.6,-14.5,this.M.brickRed()),this.steamVent(0,12,-14.5),this.box(-11.2,12,-19.2,-8.8,12+2.8,-19,this.M.concrete()),this.box(-11.2,12,-19,-11,12+2.8,-16.8,this.M.concrete()),this.box(-9,12,-19,-8.8,12+2.8,-17.6,this.M.concrete()),this.box(-11.2,12+2.6,-19.2,-8.8,12+2.8,-16.8,this.M.concrete());const a=new Z(new xt(.05,.08,6,6),this.M.ironBlack());a.position.set(13.5,15,-18.5),this.scene.add(a),this.anchors.push(new b(13.5,12+5.8,-18.5)),this.stringLights(new b(-14.8,12+2.4,-12.2),new b(-4,12+4.5,-16.5)),this.stringLights(new b(14.8,12+2.4,-12.2),new b(-4,12+4.5,-16.5)),this.box(-1,12,-19,.8,12+.35,-18.2,this.M.wood());const c=new Z(new ft(1.6,.4),new pt({map:si("НЕ КОРМИТЬ ГОЛУБЕЙ","#f2f2f2","#b3121b",512,128)}));c.position.set(7,12+1.3,-16.18),this.scene.add(c);const l=this.M.ironBlack();this.box(14.9,12,-18.4,15.2,21,-18,l),this.box(20.8,12+.5,-18.4,21.1,21,-18,l),this.box(14.9,12+8.7,-18.4,21.1,21,-18,l,!1),this.box(17.9,12+8.7,-18.2,18.1,12+8.85,-14.3,l,!1);const h=new Z(new ft(6,2.2),new pt({map:si("КОРМ «МУРКА» — ВКУС ПОБЕДЫ","#ffcc00","#c0392b",1024,256),side:Ut}));h.position.set(18,12+10.2,-18.2),this.scene.add(h);const u=Ee("hook",()=>new oe({color:10286847,emissive:3983615,emissiveIntensity:1.5}));for(const f of[-16,-14.5]){const p=new Z(new qn(.14,.035,6,12),u);p.position.set(18,12+8.5,f),this.scene.add(p),this.anchors.push(p.position.clone())}this.checkpoint("roofA","Крыша",-12,12,-13.2),[[-12,12,-18],[-9,12+.9,-14],[2,12+.9,-19],[11,12+.9,-18.5],[-4,15,-15],[-13,12+2.2,-19]].forEach(([f,p,_])=>this.fishPickup(f,p,_))}buildRoofB(){this.box(21,12.5,-20,31,12.5+.015,6,this.M.tar(),!1,{},4),this.parapet(20.8,-20.2,31.2,6.2,12.5,.35),this.waterTower(28,12.5,2.5);for(const[s,o]of[[24,-12],[27.5,-8],[24,-3],[28.5,-14]])this.box(s-.6,12.5,o-.5,s+.6,12.5+1,o+.5,this.M.metal());this.steamVent(29.5,12.5,-17.5);const t=new Z(new ft(5,1.4),new pt({map:si("КАРНИЗ ТУТ ГЛАВНЫЙ","#12060a","#ff4f8b",1024,256),toneMapped:!1}));t.position.set(26,12.5+2.8,-19.7),this.scene.add(t),this.box(23.4,12.5,-19.9,28.6,12.5+2,-19.7,this.M.ironBlack(),!1);const n=new Ki(16732043,8,12,1.5);n.position.set(26,12.5+2.5,-18.5),this.scene.add(n),this.lights.push(n),this.checkpoint("roofB","Крыша Карниза",22.5,12.5,-16);const i=Ee("fegrate",()=>new oe({color:2434859}));for(let s=0;s<20;s++){const o=12.5-s*.6;this.box(31,o-.06,6+s*.3,32.4,o,6.3+s*.3,i)}for(const[s,o]of[[25,-16],[29,-5],[23,2],[26,-1]])this.fishPickup(s,12.5,o)}buildStreet(){this.truck=new yt;const e=new Z(new ze(5,2.6,2.3),new oe({color:15658734,roughness:.6}));e.position.set(-.8,1.8,0);const t=new Z(new ze(1.8,1.9,2.2),new oe({color:13849600,roughness:.5}));t.position.set(2.7,1.45,0);const n=new Z(new ft(3.6,.8),new pt({map:si("ПЕРЕЕЗД-ЭКСПРЕСС","#ffffff","#d35400",512,128)}));n.position.set(-.8,2,-1.16),n.rotation.y=Math.PI,this.truck.add(e,t,n);for(const a of[-2.4,.8,2.7])for(const c of[-1.1,1.1]){const l=new Z(new xt(.45,.45,.3,16),new oe({color:1118481}));l.rotation.x=Math.PI/2,l.position.set(a,.45,c),this.truck.add(l)}this.truck.position.set(-6,0,16.2),this.truck.traverse(a=>a.castShadow=!0),this.scene.add(this.truck),this.box(-9.3,0,15,-2.3,3.1,17.4,null),this.carrier=new yt;const i=new Z(new ze(.6,.4,.4),new oe({color:10181046,roughness:.7}));i.position.y=.32;const s=new Z(new ft(.36,.3),new oe({color:7829367,metalness:.8,side:Ut}));s.geometry.translate(.18,0,0),s.position.set(.31,.32,-.18),s.rotation.y=Math.PI/2,s.name="door",this.carrier.add(i,s),this.carrier.position.set(-3,.12,13.4),this.scene.add(this.carrier);const o=this.M.ironBlack();for(let a=-15;a<15;a+=.3)a>-1.6&&a<1.6||this.box(a,0,11.95,a+.04,1.8,11.99,o,!1);this.box(-15,1.75,11.9,-1.6,1.82,12.05,o),this.box(1.6,1.75,11.9,15,1.82,12.05,o),this.box(-15,0,11.9,-1.6,.12,12.05,o),this.box(-15,.35,11.9,-1.6,1.8,12.05,null),this.box(1.6,.35,11.9,15,1.8,12.05,null),this.parkedCar(8,15.6,2899536),this.parkedCar(-16,21.9,12566463),this.parkedCar(20,21.9,1994588);for(let a=0;a<4;a++){const c=a%2,l=this.carModel([15906565,9313051,1920649,14277855][a],a===0);l.position.set(-50+a*27,0,c?20.8:16.8),this.scene.add(l);const h=this.physics.add(new it,{tag:"car"});this.cars.push({mesh:l,lane:c,speed:(c?-1:1)*(7+a),collider:h})}}buildBrownstones(){const e=Ee("brownstone",()=>new oe({map:mc(21,"#7b5442"),roughness:.92})),t=this.M.ironBlack(),n=Ee("stoop",()=>new oe({map:mc(22,"#6d4a3a"),roughness:.9})),i=Ee("door",()=>new oe({map:Ds(31,"#3b2416"),roughness:.5})),s=25.8;let o=5;const a=()=>(o=o*16807%2147483647)/2147483647;for(let c=0;c<11;c++){const l=-44+c*8,h=l+8,u=11+Math.floor(a()*3)*.9;this.box(l,0,s,h,u,34,e,!0,{},2),Ur(this.scene,this.physics,{axis:"z",plane:s,dir:-1,from:l,to:h,top:u,seed:20+c,lit:.55,ac:.05,centers:[l+1.7,l+4.1,l+6.3],width:1.15,rows:[{sill:.45,height:.95},{sill:2.2,height:2},{sill:5.5,height:1.8},{sill:8.4,height:1.6}].filter(_=>_.sill+_.height<u-.9),wall:e,frameColor:c%3===0?2044710:c%3===1?2761504:15130576,custom:new Set(["0:1"])});const d=new Z(new ft(1,1.75),i);d.position.set(l+1.7,2.2+.88,s-.04),d.rotation.y=Math.PI;const f=new Z(new ft(1,.22),this.M.glassLit());f.position.set(l+1.7,4.07,s-.04),f.rotation.y=Math.PI,this.scene.add(d,f);const p=10;for(let _=0;_<p;_++){const m=.12+(_+1)/p*2.08,g=23.6+_/p*1.9;this.box(l+1.05,0,g,l+2.35,m,s-.2,n)}for(const _ of[l+1.02,l+2.38]){const m=new Z(new xt(.025,.025,2.9,6),t);m.position.set(_,2,24.6),m.rotation.x=Math.atan2(1.9,2.08),m.userData.batch=!0,this.scene.add(m);for(let g=0;g<6;g++)this.box(_-.015,.1,23.7+g*.36,_+.015,.1+.9+g*.38,23.73+g*.36,t,!1)}this.box(l+2.6,.12,23.5,h-.2,1,23.54,t,!1);for(let _=l+2.6;_<h-.2;_+=.14)this.box(_,.12,23.5,_+.02,1,23.53,t,!1);c%2===0&&this.tree(l+5,23.6)}}buildSkyline(){const e=Oh(!0,3),t=Oh(!1,3),n=new ze(1,1,1),i=new oe({map:t,emissiveMap:e,emissive:16777215,emissiveIntensity:.4,roughness:.9});i.onBeforeCompile=w=>{w.vertexShader=w.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vSkyPos; varying vec3 vSkyN;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
{ mat4 im = modelMatrix * instanceMatrix; vSkyPos = (im * vec4(transformed, 1.0)).xyz; vSkyN = normalize(mat3(im) * objectNormal); }`),w.fragmentShader=w.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vSkyPos; varying vec3 vSkyN;`).replace("#include <map_fragment>",`
          vec2 wuv = (abs(vSkyN.x) > 0.5 ? vSkyPos.zy : vSkyPos.xy) / vec2(24.0, 25.6);
          bool roof = abs(vSkyN.y) > 0.5;
          vec4 texelColor = roof ? vec4(0.22, 0.2, 0.19, 1.0) : texture2D(map, wuv);
          diffuseColor *= texelColor;`).replace("#include <emissivemap_fragment>","if (!roof) totalEmissiveRadiance *= texture2D(emissiveMap, wuv).rgb; else totalEmissiveRadiance *= 0.0;")},i.customProgramCacheKey=()=>"skyline";const s=170,o=new zs(n,i,s),a=new dt;let c=7;const l=()=>(c=c*16807%2147483647)/2147483647;let h=0;for(let w=0;w<s;w++){const P=l()*Math.PI*2,k=55+l()*90,v=Math.cos(P)*k,S=Math.sin(P)*k;if(Math.abs(v)<40&&S>-35&&S<35)continue;const D=8+l()*14,O=14+l()*(k>100?90:45),V=8+l()*14;a.position.set(v,O/2,S),a.scale.set(D,O,V),a.rotation.y=Math.round(l()*4)*(Math.PI/2)+(l()-.5)*.2,a.updateMatrix(),o.setMatrixAt(h,a.matrix),o.setColorAt(h,new Se().setHSL(.05+l()*.08,.25,.35+l()*.3)),h++}o.count=h,this.scene.add(o);const u=new zs(n,i,h),d=new zs(new xt(.5,.5,1,10),Ee("skytower",()=>new oe({color:5916210,roughness:1})),h),f=new zs(new ss(.58,.5,10),Ee("skycap",()=>new oe({color:3815994,roughness:.7})),h),p=new Ue,_=new fn,m=new b,g=new b;let y=0,M=0;for(let w=0;w<h;w++){o.getMatrixAt(w,p),p.decompose(g,_,m);const P=g.y+m.y/2;if(l()<.55)a.position.set(g.x,P+m.y*.12,g.z),a.quaternion.copy(_),a.scale.set(m.x*.65,m.y*.24,m.z*.65),a.updateMatrix(),u.setMatrixAt(y,a.matrix),u.setColorAt(y,new Se().setHSL(.06+l()*.06,.2,.3+l()*.25)),y++;else if(l()<.7){const k=g.x+(l()-.5)*m.x*.5,v=g.z+(l()-.5)*m.z*.5;a.quaternion.identity(),a.position.set(k,P+3,v),a.scale.set(3.4,2.6,3.4),a.updateMatrix(),d.setMatrixAt(M,a.matrix),a.position.set(k,P+4.55,v),a.scale.set(3.4,1.8,3.4),a.updateMatrix(),f.setMatrixAt(M,a.matrix),M++}}u.count=y,d.count=M,f.count=M,this.scene.add(u,d,f);const x=new oe({color:7035466,roughness:1});for(const w of[-60,60]){const P=new Z(new ze(8,45,5),x);P.position.set(w,22,170),this.scene.add(P)}const C=new Z(new ze(260,2,8),x);C.position.set(0,14,170),this.scene.add(C);const A=[];for(let w=0;w<=40;w++){const P=-130+w*6.5,k=(P+60)/120,v=Math.abs(P)<=60?44-Math.sin(k*Math.PI)*26:44-(Math.abs(P)-60)*.42;A.push(new b(P,v,170))}this.scene.add(new Si(new mt().setFromPoints(A),new bi({color:3813416})));for(let w=-120;w<=120;w+=12){const P=new Z(new xn(.7,6,4),new pt({color:16765578,toneMapped:!1}));P.position.set(w,15.5,166),this.scene.add(P)}}buildRain(){const t=new Float32Array(10800);for(let i=0;i<1800;i++){const s=(Math.random()-.5)*40,o=Math.random()*25,a=(Math.random()-.5)*40;t.set([s,o,a,s+.02,o-.35,a],i*6)}const n=new mt;n.setAttribute("position",new It(t,3)),this.rain=new Gu(n,new bi({color:11059416,transparent:!0,opacity:.35})),this.rain.frustumCulled=!1,this.rain.visible=!1,this.scene.add(this.rain)}updateRain(e,t){if(!this.rain.visible)return;const n=this.rain.geometry.attributes.position,i=n.array;for(let s=0;s<i.length;s+=6)if(i[s+1]-=14*e,i[s+4]-=14*e,i[s+1]<0){const o=(Math.random()-.5)*40,a=(Math.random()-.5)*40;i[s]=o,i[s+2]=a,i[s+3]=o+.02,i[s+5]=a,i[s+1]=20+Math.random()*5,i[s+4]=i[s+1]-.35}n.needsUpdate=!0,this.rain.position.set(t.x,t.y-8,t.z)}regionAt(e){return this.regions.find(t=>t.box.containsPoint(e))??this.regions[this.regions.length-1]}}const Bh=["Карниз: Это МОЯ крыша!","Карниз: Ты бегаешь как пылесос!","Карниз: Мяу-ха-ха!","Карниз: Голуби за меня болеют!","Карниз: Где твоя хозяйка, пушистик?"];class ty{constructor(e){this.state="inactive",this.t=0,this.hp=8,this.maxHp=8,this.target=null,this.pounceDir=new b,this.onTaunt=()=>{},this.tauntCd=3,this.strafe=1,this.cat=e,this.stars=new yt;const t=new pt({color:16769126,toneMapped:!1});for(let n=0;n<5;n++){const i=new Z(new $c(.035),t);i.position.set(Math.cos(n/5*Math.PI*2)*.16,0,Math.sin(n/5*Math.PI*2)*.16),this.stars.add(i)}this.stars.visible=!1,this.warn=new Z(new ft(.12,.3),new pt({map:ny(),transparent:!0,toneMapped:!1,depthTest:!1})),this.warn.visible=!1,this.warn.renderOrder=10,e.root.add(this.stars)}get vulnerable(){return this.state==="dizzy"||this.state==="blind"||this.state==="stagger"}start(){this.state="stalk",this.t=0,this.hp=this.maxHp}input(e,t=!1){return{moveX:e?e.x:0,moveY:e?-e.z:0,lookX:0,lookY:0,run:t,sneak:!1,jumpHeld:!1,swingHeld:!1,pressed:new Set}}update(e,t,n,i){var f,p;const s=this.cat;if(this.t+=e,this.warn.quaternion.copy(i.quaternion),this.stars.visible=this.state==="dizzy"||this.state==="blind",this.stars.position.set(0,.55,.25),this.stars.rotation.y+=e*6,this.state==="inactive"||this.state==="defeated"){s.update(e,this.input(null),0,n.physics,[],!1);return}const o=t.filter(_=>n.bossArena.containsPoint(_.root.position)&&_.health>0);this.target=o.sort((_,m)=>_.root.position.distanceTo(s.root.position)-m.root.position.distanceTo(s.root.position))[0]??null;const a=(f=this.target)==null?void 0:f.root.position,c=a?a.clone().sub(s.root.position).setY(0):new b,l=c.length(),h=c.clone().normalize(),u=this.hp<=this.maxHp/2;this.tauntCd-=e;let d=this.input(null);switch(this.state){case"stalk":{if(!a)break;const _=new b(-h.z,0,h.x).multiplyScalar(this.strafe),m=l>3.2?h.clone():l<2.2?h.clone().negate():_;d=this.input(m.normalize(),l>5),Math.random()<e*.4&&(this.strafe*=-1),this.tauntCd<0&&(this.onTaunt(Bh[Math.floor(Math.random()*Bh.length)]),this.tauntCd=5+Math.random()*4),l<1.3&&this.t>.8?this.go("swipeWind"):this.t>(u?1.4:2.2)&&this.go(Math.random()<.3?"feint":"windup");break}case"windup":case"feint":{s.sneaking=!0,s.yaw=Math.atan2(h.x,h.z),this.warn.visible=!0,this.warn.position.set(0,.62+Math.sin(this.t*30)*.02,0),this.warn.parent||s.root.add(this.warn);const _=u?.55:.8;this.state==="feint"&&this.t>_*.8?(s.body.vel.set(-h.x*3,3,-h.z*3),this.onTaunt("Карниз: Ха! Купился!"),Me.meow(.55,.4),this.go("stalk")):this.state==="windup"&&this.t>_&&(this.pounceDir.copy(h),s.body.vel.set(h.x*(u?9.5:8),4.2,h.z*(u?9.5:8)),s.sneaking=!1,Me.meow(.5,.7),this.go("pounce"));break}case"pounce":{this.warn.visible=!1,s.body.vel.x=this.pounceDir.x*(u?9.5:8),s.body.vel.z=this.pounceDir.z*(u?9.5:8);for(const m of t)m.root.position.distanceTo(s.root.position)<.55&&m.damage(1,s.root.position);const _=Math.abs(s.body.vel.x)<.5&&Math.abs(s.body.vel.z)<.5;(s.body.grounded&&this.t>.25||_)&&(s.body.vel.set(0,0,0),_&&this.onTaunt("Карниз: Ай! Кто поставил тут кондиционер?!"),this.go(u&&Math.random()<.4&&!_?"windup":"dizzy"));break}case"swipeWind":s.yaw=Math.atan2(h.x,h.z),this.t>.35&&((p=s.actions.Attack)==null||p.reset(),s.play("Attack",.05,1.4),Me.swipe(),a&&l<1.2&&this.target&&this.target.damage(1,s.root.position),this.go("swipe"));break;case"swipe":this.t>.5&&this.go("dizzy",.4);break;case"dizzy":case"blind":case"stagger":{const _=this.state==="blind"?2.6:this.state==="stagger"?.7:1.7;this.state==="blind"&&(d=this.input(new b(Math.sin(this.t*3),0,Math.cos(this.t*2)))),this.t>_&&this.go("stalk");break}}this.state!=="windup"&&this.state!=="feint"&&(this.warn.visible=!1,s.sneaking=!1),s.update(e,d,0,n.physics,[],!1),(this.state==="dizzy"||this.state==="blind")&&s.play("Sit",.3)}go(e,t=0){this.state=e,this.t=t}hit(e,t){if(this.state==="defeated"||this.state==="inactive")return!1;if(!this.vulnerable){this.onTaunt("Карниз: Мимо! Жди, когда я выдохнусь.");const i=e.root.position.clone().sub(this.cat.root.position).setY(0).normalize();return e.body.vel.add(i.multiplyScalar(4)),!1}this.hp-=t,Me.hit(),Me.meow(.6,.5);const n=this.cat.root.position.clone().sub(e.root.position).setY(0).normalize();return this.cat.body.vel.set(n.x*5,3,n.z*5),this.hp<=0?(this.state="defeated",!0):(this.go("stagger"),!0)}blind(){this.state==="defeated"||this.state==="inactive"||(this.onTaunt("Карниз: Аааа! Шерсть в глаза!"),this.go("blind"))}}function ny(){const r=document.createElement("canvas");r.width=64,r.height=160;const e=r.getContext("2d");e.fillStyle="#ff3b30",e.font="bold 150px sans-serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#fff",e.shadowBlur=10,e.fillText("!",32,85);const t=new Qs(r);return t.colorSpace=Mt,t}const ut=(r,e="",t="")=>{const n=document.createElement(r);return e&&(n.className=e),t&&(n.innerHTML=t),n};class iy{constructor(e){this.panels=[],this.modal=null,this.toastTimer=0,this.trackTimer=0,this.root=e;const t=ut("div","hud-top");this.objEl=ut("div","objective"),this.arrowEl=ut("div","nav-arrow","<svg viewBox='0 0 64 64'><path d='M32 4 L56 50 L32 38 L8 50 Z'/></svg>"),t.append(this.arrowEl,this.objEl),this.fishEl=ut("div","fish-count","🐟 0"),this.toastEl=ut("div","toast"),this.trackEl=ut("div","track-toast"),this.subEl=ut("div","subtitle"),this.boxTop=ut("div","letterbox top"),this.boxBot=ut("div","letterbox bottom"),this.portraitsEl=ut("div","portraits"),this.bossEl=ut("div","boss-bar","<div class='boss-name'>КАРНИЗ — хулиган крыш</div><div class='boss-hp'><i></i></div>"),this.fadeEl=ut("div","fade"),this.flashEl=ut("div","soul-flash"),e.append(t,this.fishEl,this.toastEl,this.trackEl,this.portraitsEl,this.bossEl,this.boxTop,this.boxBot,this.subEl,this.flashEl,this.fadeEl)}setFish(e){this.fishEl.textContent=`🐟 ${e}`,this.fishEl.classList.remove("bump"),this.fishEl.offsetWidth,this.fishEl.classList.add("bump")}setObjective(e){this.objEl.textContent=e,this.objEl.style.display=e?"":"none"}setArrow(e,t=0){if(e===null){this.arrowEl.style.display="none";return}this.arrowEl.style.display="",this.arrowEl.style.transform=`rotateX(${45+t*20}deg) rotate(${e}rad)`}toast(e,t=2600){this.toastEl.textContent=e,this.toastEl.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>this.toastEl.classList.remove("show"),t)}track(e){this.trackEl.textContent=`♪ ${e}`,this.trackEl.classList.add("show"),clearTimeout(this.trackTimer),this.trackTimer=window.setTimeout(()=>this.trackEl.classList.remove("show"),3500)}subtitle(e,t,n="#fff"){if(!t){this.subEl.classList.remove("show");return}this.subEl.innerHTML=e?`<b style="color:${n}">${e}:</b> ${t}`:t,this.subEl.classList.add("show")}letterbox(e){this.root.classList.toggle("cinematic",e)}fade(e){this.fadeEl.classList.toggle("on",e)}soulFlash(){this.flashEl.classList.remove("go"),this.flashEl.offsetWidth,this.flashEl.classList.add("go")}boss(e,t=1){this.bossEl.style.display=e===null?"none":"block",e!==null&&(this.bossEl.querySelector("i").style.width=`${Math.max(0,e/t*100)}%`)}setupPanels(e,t){this.root.classList.toggle("split",e.length>1),this.panels.forEach(n=>n.root.remove()),this.panels=e.map((n,i)=>{const s=ut("div","player-panel");Object.assign(s.style,{left:`${n.x*100}%`,top:`${n.y*100}%`,width:`${n.w*100}%`,height:`${n.hgt*100}%`});const o=ut("div","pp-name",t[i]),a=ut("div","pp-hearts"),c=ut("div","pp-ability"),l=ut("div","pp-prompt");return l.style.display="none",s.append(o,a,c,l),e.length>1&&s.classList.add("split"),this.root.insertBefore(s,this.root.firstChild),{root:s,hearts:a,prompt:l,name:o,ability:c}})}updatePanel(e,t,n,i,s,o){const a=this.panels[e];if(!a)return;a.name.textContent!==t&&(a.name.textContent=t);const c="❤".repeat(n)+"<span>♡</span>".repeat(Math.max(0,i-n));a.hearts.innerHTML!==c&&(a.hearts.innerHTML=c),a.prompt.textContent!==s&&(a.prompt.textContent=s,a.prompt.style.display=s?"":"none"),a.ability.textContent!==o&&(a.ability.textContent=o)}setPortraits(e,t){this.portraitsEl.innerHTML="";for(const n of e){const i=ut("button",`portrait${n.active?" active":""}${n.locked?" locked":""}`);i.innerHTML=`<img src="${n.img}" alt=""><span>${n.name}</span>${n.order?`<em>${n.order}</em>`:""}`,i.onclick=s=>{s.stopPropagation(),n.locked||t(n.id)},this.portraitsEl.appendChild(i)}}showPortraits(e){this.portraitsEl.style.display=e?"":"none"}closeModal(){var e;(e=this.modal)==null||e.remove(),this.modal=null}menu(e,t,n,i){var c;this.closeModal();const s=ut("div","modal menu");s.innerHTML=`
      <div class="title"><h1>Дымок <span>и</span> Милена</h1><p>Два кота. Один большой город. Ноль чувства направления.</p></div>
      <div class="menu-cats">
        <figure><img src="${e.dymok}"><figcaption>Дымок<br><small>сила · рывок · пушистость</small></figcaption></figure>
        <figure><img src="${e.milena}"><figcaption>Милена<br><small>ловкость · прыжки · шипение</small></figcaption></figure>
        <figure><img src="${e.pixel}"><figcaption>Пиксель<br><small>3-й игрок онлайн · двойной прыжок</small></figcaption></figure>
      </div>
      <div class="menu-cols">
        <section>
          <h3>Одиночная игра</h3>
          <p class="hint">Играете за обоих котов — Tab или клик по портрету.</p>
          <div class="menu-buttons">
            ${t?'<button data-a="cont" class="primary">Продолжить</button>':""}
            <button data-a="new" class="${t?"":"primary"}">Новая игра</button>
          </div>
        </section>
        <section>
          <h3>Онлайн · до 3 игроков</h3>
          <p class="hint">Создайте комнату и отправьте ссылку друзьям.</p>
          <div class="menu-buttons">
            <button data-a="host">Создать комнату</button>
          </div>
          <div class="join"><input maxlength="5" placeholder="КОД" value="${n??""}" spellcheck="false"><button data-a="join" class="${n?"primary":""}">Войти</button></div>
        </section>
      </div>
      <details class="controls"><summary>Управление</summary>
      <table>
        <tr><td>Ходьба / рысь</td><td>WASD (мягкий стик — шаг)</td></tr>
        <tr><td>Галоп / красться</td><td>Shift / Ctrl или C</td></tr>
        <tr><td>Камера</td><td>мышь (клик — захват курсора)</td></tr>
        <tr><td>Прыжок</td><td>Пробел</td></tr>
        <tr><td>Удар / умение</td><td>ЛКМ или F / Q</td></tr>
        <tr><td>Действие</td><td>E</td></tr>
        <tr><td>Паутина (держать)</td><td>ПКМ или R</td></tr>
        <tr><td>Сменить кота / приказ</td><td>Tab или клик по портрету / G</td></tr>
        <tr><td>Вид от 1-го лица</td><td>V</td></tr>
        <tr><td>Сардины · пауза</td><td>H · Esc</td></tr>
      </table>
      <p>Геймпад тоже работает. На iPhone/iPad — экранный джойстик и кнопки.</p>
      </details>`;const o=s.querySelector("input");o.addEventListener("input",()=>o.value=o.value.toUpperCase().replace(/[^A-Z0-9]/g,"")),o.addEventListener("keydown",l=>l.stopPropagation());const a=l=>()=>{this.closeModal(),l()};(c=s.querySelector("[data-a=cont]"))==null||c.addEventListener("click",a(()=>i.solo(!0))),s.querySelector("[data-a=new]").addEventListener("click",a(()=>i.solo(!1))),s.querySelector("[data-a=host]").addEventListener("click",a(()=>i.host())),s.querySelector("[data-a=join]").addEventListener("click",()=>{if(o.value.length<5){o.focus(),o.classList.add("err");return}this.closeModal(),i.join(o.value)}),this.root.appendChild(s),this.modal=s}roomBadge(e,t=1){let n=this.root.querySelector(".room-badge");if(!e){n==null||n.remove();return}n||(n=ut("div","room-badge"),this.root.appendChild(n));const i=`${location.origin}${location.pathname}?room=${e}`;n.innerHTML=`<span>Комната <b>${e}</b> · игроков: ${t}/3</span><button>Скопировать ссылку</button>`,n.querySelector("button").onclick=async s=>{s.stopPropagation();try{await navigator.clipboard.writeText(i),this.toast("Ссылка скопирована — отправьте её друзьям")}catch{prompt("Ссылка для друзей:",i)}}}pause(e,t){this.closeModal();const n=ut("div","modal pause");n.innerHTML=`<h2>Пауза</h2>
      <label><input type="checkbox" ${e.tracking?"checked":""} data-k="track"> Стрелка задания (отключение не сбрасывает прогресс)</label>
      <label>Шерсть: <select data-k="q"><option value="high">Высокое (16 слоёв)</option><option value="med">Среднее (8)</option><option value="low">Низкое (4) — для iPhone</option></select></label>
      <label>Музыка <input type="range" min="0" max="1" step="0.05" value="${e.music}" data-k="music"></label>
      <div class="menu-buttons"><button class="primary" data-a="resume">Продолжить</button><button data-a="menu">В главное меню</button><button data-a="reset" class="danger">Сбросить сохранение</button></div>`,n.querySelector("select").value=e.quality,n.querySelector("[data-k=track]").onchange=i=>t.tracking(i.target.checked),n.querySelector("[data-k=q]").onchange=i=>t.quality(i.target.value),n.querySelector("[data-k=music]").oninput=i=>t.music(Number(i.target.value)),n.querySelector("[data-a=resume]").onclick=()=>t.resume(),n.querySelector("[data-a=menu]").onclick=()=>t.menu(),n.querySelector("[data-a=reset]").onclick=()=>{confirm("Точно сбросить весь прогресс?")&&t.reset()},this.root.appendChild(n),this.modal=n}shop(e,t){this.closeModal();const n=ut("div","modal shop"),i=e.discount?12:15,s=()=>{let o=1;n.innerHTML=`<h2>🐟 Лавка Пломбира</h2>
        <p class="seller">Пломбир: «Мур-р, покупатели! Всё свежее. Ну, почти всё.»${e.discount?" <b>(Скидка от Карниза!)</b>":""}</p>
        <div class="wallet">Общий кошелёк: <b>🐟 ${e.fish}</b></div>
        <div class="shop-grid">
          <div class="item food">
            <h3>Консерва «Сардина»</h3><p>Восстанавливает всё здоровье. Можно съесть в любой момент (клавиша H / кнопка). В запасе: ${e.cans}.</p>
            <div class="qty"><button data-q="-1">−</button><span data-qty>1</span><button data-q="1">+</button></div>
            <div class="total" data-total></div>
            <button class="primary" data-buy-cans>Купить</button>
          </div>
          ${Hs.map(c=>{const l=e.owned.includes(c.id),h=e.equipped[c.cat]===c.id;return`<div class="item" data-id="${c.id}"><h3>${c.name} <small>для: ${c.cat==="dymok"?"Дымок":"Милена"}</small></h3><p>${c.desc}</p>
              <div class="price">${l?"Куплено":`${c.price} рыбок × 1 = ${c.price} рыбок`}</div>
              <button data-try="${c.id}">Примерить</button>
              ${l?`<button data-eq="${c.id}" class="${h?"on":""}">${h?"Снять":"Надеть"}</button>`:`<button class="primary" data-buyc="${c.id}" ${e.fish<c.price?"disabled":""}>Купить</button>`}
            </div>`}).join("")}
        </div>
        <div class="menu-buttons"><button data-close>Выйти (Esc)</button></div>`;const a=()=>{n.querySelector("[data-qty]").textContent=String(o);const c=i*o;n.querySelector("[data-total]").innerHTML=`${i} рыбок/банка × ${o} = <b>${c} рыбок</b>`,n.querySelector("[data-buy-cans]").disabled=c>e.fish};a(),n.querySelectorAll("[data-q]").forEach(c=>c.onclick=()=>{o=Math.max(1,Math.min(9,o+Number(c.dataset.q))),a()}),n.querySelector("[data-buy-cans]").onclick=()=>{t.buyCans(o,i)&&(e.fish-=i*o,e.cans+=o,s())},n.querySelectorAll("[data-try]").forEach(c=>c.onclick=()=>{const l=Hs.find(h=>h.id===c.dataset.try);t.tryOn(l,l.cat)}),n.querySelectorAll("[data-buyc]").forEach(c=>c.onclick=()=>{const l=Hs.find(h=>h.id===c.dataset.buyc);t.buyCostume(l)&&(e.fish-=l.price,e.owned.push(l.id),e.equipped[l.cat]=l.id,s())}),n.querySelectorAll("[data-eq]").forEach(c=>c.onclick=()=>{const l=Hs.find(u=>u.id===c.dataset.eq),h=e.equipped[l.cat]===l.id;e.equipped[l.cat]=h?null:l.id,t.equip(h?null:l,l.cat),s()}),n.querySelector("[data-close]").onclick=()=>t.close()};s(),this.root.appendChild(n),this.modal=n}endCard(e){this.closeModal();const t=ut("div","modal endcard");t.innerHTML=`<h2>Демо пройдено! 🎉</h2><p>Дымок и Милена победили Карниза и стали на шаг ближе к дому.</p>
      <p>Дальше по плану: канализация и стая крыс, Центральный парк, рыбный рынок с Шариком, метро.</p>
      <div class="menu-buttons"><button class="primary">Гулять дальше</button></div>`,t.querySelector("button").onclick=()=>{this.closeModal(),e()},this.root.appendChild(t),this.modal=t}loading(e){let t=this.root.querySelector(".loading");if(!e){t==null||t.remove();return}t||(t=ut("div","loading"),this.root.appendChild(t)),t.innerHTML=`<div class="spinner">🐾</div><p>${e}</p>`}}const sy=[{up:"KeyW",down:"KeyS",left:"KeyA",right:"KeyD",camL:"KeyZ",camR:"KeyX",jump:["Space"],run:["ShiftLeft"],sneak:["ControlLeft","KeyC"],attack:["KeyF"],interact:["KeyE"],ability:["KeyQ"],swing:["KeyR"],switch:["Tab"],fp:["KeyV"],command:["KeyG"]},{up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",camL:"BracketLeft",camR:"BracketRight",jump:["Enter","ControlRight"],run:["ShiftRight"],sneak:["Slash"],attack:["Period"],interact:["Semicolon"],ability:["Comma"],swing:["Quote"],fp:["Backslash"]},{up:"Numpad8",down:"Numpad5",left:"Numpad4",right:"Numpad6",camL:"NumpadDivide",camR:"NumpadMultiply",jump:["Numpad0"],run:["NumpadAdd"],sneak:["NumpadDecimal"],attack:["Numpad7"],interact:["Numpad9"],ability:["Numpad1"],swing:["Numpad3"],fp:["NumpadSubtract"]}];class ry{constructor(e){this.canvas=e,this.keys=new Set,this.edge=new Set,this.mouseDX=0,this.mouseDY=0,this.mouseButtons=new Set,this.mouseEdge=new Set,this.padPrev=[],this.touch=null,this.pointerLocked=!1,this.sensitivity=.0025,addEventListener("keydown",t=>{(t.code==="Tab"||t.code.startsWith("Arrow")||t.code==="Space"||t.code==="Quote"||t.code==="Slash")&&t.preventDefault(),this.keys.has(t.code)||this.edge.add(t.code),this.keys.add(t.code)}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),e.addEventListener("mousedown",t=>{this.mouseButtons.add(t.button),this.mouseEdge.add(t.button)}),addEventListener("mouseup",t=>this.mouseButtons.delete(t.button)),e.addEventListener("contextmenu",t=>t.preventDefault()),addEventListener("mousemove",t=>{this.pointerLocked&&(this.mouseDX+=t.movementX,this.mouseDY+=t.movementY)}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===e})}requestPointerLock(){var e,t;matchMedia("(pointer: coarse)").matches||(t=(e=this.canvas).requestPointerLock)==null||t.call(e)}idle(){return{moveX:0,moveY:0,lookX:0,lookY:0,run:!1,sneak:!1,jumpHeld:!1,swingHeld:!1,pressed:new Set}}wasPressed(e){return this.edge.has(e)}read(e,t){const n=sy[e],i=d=>this.keys.has(d),s=d=>!!d&&d.some(i),o=d=>!!d&&d.some(f=>this.edge.has(f)),a={moveX:(i(n.right)?1:0)-(i(n.left)?1:0),moveY:(i(n.up)?1:0)-(i(n.down)?1:0),lookX:((i(n.camR)?1:0)-(i(n.camL)?1:0))*.04,lookY:0,run:s(n.run),sneak:s(n.sneak),jumpHeld:s(n.jump),swingHeld:s(n.swing),pressed:new Set},c=[["jump",n.jump],["attack",n.attack],["interact",n.interact],["ability",n.ability],["swing",n.swing],["switch",n.switch],["fp",n.fp],["command",n.command]];for(const[d,f]of c)o(f)&&a.pressed.add(d);e===0&&((this.edge.has("Escape")||this.edge.has("KeyP"))&&a.pressed.add("pause"),(this.edge.has("Escape")||this.edge.has("Enter"))&&a.pressed.add("skip")),e===0&&(a.lookX+=this.mouseDX*this.sensitivity,a.lookY+=this.mouseDY*this.sensitivity,this.mouseEdge.has(0)&&this.pointerLocked&&a.pressed.add("attack"),this.mouseEdge.has(2)&&a.pressed.add("swing"),this.mouseButtons.has(2)&&(a.swingHeld=!0));const h=(navigator.getGamepads?navigator.getGamepads():[])[e];h&&h.connected&&this.applyPad(h,e,a),e===0&&t===1&&this.touch&&this.touch.apply(a);const u=Math.hypot(a.moveX,a.moveY);return u>1&&(a.moveX/=u,a.moveY/=u),a}applyPad(e,t,n){const i=h=>Math.abs(h)<.18?0:h,s=e.buttons.map(h=>h.pressed),o=this.padPrev[t]||[],a=h=>s[h]&&!o[h],c=i(e.axes[0]??0),l=-i(e.axes[1]??0);(c||l)&&(n.moveX=c,n.moveY=l),n.lookX+=i(e.axes[2]??0)*.05,n.lookY+=i(e.axes[3]??0)*.035,n.run||(n.run=s[10]||s[7]||Math.hypot(c,l)>.92),n.sneak||(n.sneak=s[11]||s[6]),n.jumpHeld||(n.jumpHeld=s[0]),n.swingHeld||(n.swingHeld=s[5]),a(0)&&n.pressed.add("jump"),a(2)&&n.pressed.add("attack"),a(1)&&n.pressed.add("ability"),a(3)&&n.pressed.add("interact"),a(5)&&n.pressed.add("swing"),a(4)&&n.pressed.add("switch"),a(12)&&n.pressed.add("fp"),a(13)&&n.pressed.add("command"),a(9)&&(n.pressed.add("pause"),n.pressed.add("skip")),this.padPrev[t]=s}endFrame(){var e;this.edge.clear(),this.mouseEdge.clear(),this.mouseDX=this.mouseDY=0,(e=this.touch)==null||e.endFrame()}}class oy{constructor(e){this.moveX=0,this.moveY=0,this.lookX=0,this.lookY=0,this.held=new Set,this.pressed=new Set,this.stickId=null,this.lookId=null,this.lookLast={x:0,y:0},this.stickOrigin={x:0,y:0};const t=document.createElement("div");t.className="touch-zone";const n=document.createElement("div");n.className="touch-knob";const i=document.createElement("div");i.className="touch-base",i.appendChild(n),t.appendChild(i),e.appendChild(t);const s=document.createElement("div");s.className="touch-buttons";const o=[["⤒","jump","Прыжок"],["🐾","attack","Удар"],["✦","ability","Умение"],["🕸","swing","Паутина"],["✋","interact","Действие"],["⇄","switch","Сменить кота"],["»","run","Бег"],["…","sneak","Красться"]];for(const[l,h,u]of o){const d=document.createElement("button");d.textContent=l,d.title=u,d.className=`tb tb-${h}`,d.addEventListener("touchstart",f=>{if(f.preventDefault(),h==="run"||h==="sneak"){this.held.has(h)?this.held.delete(h):this.held.add(h),d.classList.toggle("on",this.held.has(h));return}this.pressed.add(h),this.held.add(h)}),d.addEventListener("touchend",f=>{f.preventDefault(),h!=="run"&&h!=="sneak"&&this.held.delete(h)}),s.appendChild(d)}e.appendChild(s);const a=document.createElement("button");a.className="tb tb-fp",a.textContent="👁",a.addEventListener("touchstart",l=>{l.preventDefault(),this.pressed.add("fp")}),e.appendChild(a),t.addEventListener("touchstart",l=>{l.preventDefault();const h=l.changedTouches[0];this.stickId=h.identifier,this.stickOrigin={x:h.clientX,y:h.clientY},i.style.left=`${h.clientX-60}px`,i.style.top=`${h.clientY-60}px`,i.style.opacity="1"}),(e.parentElement??document.body).addEventListener("touchstart",l=>{for(const h of Array.from(l.changedTouches))h.clientX>innerWidth*.4&&this.lookId===null&&!h.target.closest("button")&&(this.lookId=h.identifier,this.lookLast={x:h.clientX,y:h.clientY})}),addEventListener("touchmove",l=>{for(const h of Array.from(l.changedTouches))if(h.identifier===this.stickId){const u=h.clientX-this.stickOrigin.x,d=h.clientY-this.stickOrigin.y,f=Math.min(50,Math.hypot(u,d)),p=Math.atan2(d,u);n.style.transform=`translate(${Math.cos(p)*f}px, ${Math.sin(p)*f}px)`,this.moveX=Math.cos(p)*f/50,this.moveY=-(Math.sin(p)*f)/50}else h.identifier===this.lookId&&(this.lookX+=(h.clientX-this.lookLast.x)*.006,this.lookY+=(h.clientY-this.lookLast.y)*.005,this.lookLast={x:h.clientX,y:h.clientY})},{passive:!0}),addEventListener("touchend",l=>{for(const h of Array.from(l.changedTouches))h.identifier===this.stickId&&(this.stickId=null,this.moveX=this.moveY=0,n.style.transform="",i.style.opacity="0.35"),h.identifier===this.lookId&&(this.lookId=null)})}apply(e){(this.moveX||this.moveY)&&(e.moveX=this.moveX,e.moveY=this.moveY),e.lookX+=this.lookX,e.lookY+=this.lookY,e.run||(e.run=this.held.has("run")||Math.hypot(this.moveX,this.moveY)>.95),e.sneak||(e.sneak=this.held.has("sneak")),e.jumpHeld||(e.jumpHeld=this.held.has("jump")),e.swingHeld||(e.swingHeld=this.held.has("swing"));for(const t of this.pressed)e.pressed.add(t)}endFrame(){this.lookX=this.lookY=0,this.pressed.clear()}}const Qc="dymok-milena-save-v1";function gc(){return{v:1,fish:0,cans:0,owned:[],equipped:{},flags:{},checkpoint:"start",taken:[],tracking:!0}}function zh(){try{const r=localStorage.getItem(Qc);if(!r)return null;const e=JSON.parse(r);return e.v===1?{...gc(),...e}:null}catch{return null}}function ay(r){try{localStorage.setItem(Qc,JSON.stringify(r))}catch{}}function cy(){localStorage.removeItem(Qc)}const js={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ci{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ly=new mo(-1,1,1,-1,0,1);class hy extends mt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}}const uy=new hy;class yo{constructor(e){this._mesh=new Z(uy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ly)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ad extends Ci{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pn.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new yo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Hh extends Ci{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class dy extends Ci{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ad(js),this.copyPass.material.blending=kt,this.clock=new Yu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Hh!==void 0&&(o instanceof Hh?n=!0:o instanceof dy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class py extends Ci{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Nr={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ae},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ue},cameraProjectionMatrixInverse:{value:new Ue},cameraWorldMatrix:{value:new Ue},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new b(-1,-1,-1)},sceneBoxMax:{value:new b(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Or={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ma={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function my(r=5){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=gy(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],c=2*Math.PI*a/n,l=new b(Math.cos(c),Math.sin(c),0).normalize();i[o*4]=(l.x*.5+.5)*255,i[o*4+1]=(l.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}const s=new _o(i,e,e);return s.wrapS=An,s.wrapT=An,s.needsUpdate=!0,s}function gy(r){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),t=e*e,n=Array(t).fill(0);let i=Math.floor(e/2),s=e-1;for(let o=1;o<=t;){if(i===-1&&s===e?(s=e-2,i=0):(s===e&&(s=0),i<0&&(i=e-1)),n[i*e+s]!==0){s-=2,i++;continue}else n[i*e+s]=o++;s++,i--}return n}const Fr={defines:{SAMPLES:16,SAMPLE_VECTORS:cd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ae},cameraProjectionMatrixInverse:{value:new Ue},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function cd(r,e,t){const n=_y(r,e,t);let i="vec3[SAMPLES](";for(let s=0;s<r;s++){const o=n[s];i+=`vec3(${o.x}, ${o.y}, ${o.z})${s<r-1?",":")"}`}return i}function _y(r,e,t){const n=[];for(let i=0;i<r;i++){const s=2*Math.PI*e*i/r,o=Math.pow(i/(r-1),t);n.push(new b(Math.cos(s),Math.sin(s),o))}return n}class vy{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,s){return e[0]*t+e[1]*n+e[2]*i+e[3]*s}noise(e,t){let n,i,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,p=e-d,_=t-f;let m,g;p>_?(m=1,g=0):(m=0,g=1);const y=p-m+h,M=_-g+h,x=p-1+2*h,C=_-1+2*h,A=c&255,w=l&255,P=this.perm[A+this.perm[w]]%12,k=this.perm[A+m+this.perm[w+g]]%12,v=this.perm[A+1+this.perm[w+1]]%12;let S=.5-p*p-_*_;S<0?n=0:(S*=S,n=S*S*this.dot(this.grad3[P],p,_));let D=.5-y*y-M*M;D<0?i=0:(D*=D,i=D*D*this.dot(this.grad3[k],y,M));let O=.5-x*x-C*C;return O<0?s=0:(O*=O,s=O*O*this.dot(this.grad3[v],x,C)),70*(n+i+s)}noise3d(e,t,n){let i,s,o,a;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,p=(h+u+d)*f,_=h-p,m=u-p,g=d-p,y=e-_,M=t-m,x=n-g;let C,A,w,P,k,v;y>=M?M>=x?(C=1,A=0,w=0,P=1,k=1,v=0):y>=x?(C=1,A=0,w=0,P=1,k=0,v=1):(C=0,A=0,w=1,P=1,k=0,v=1):M<x?(C=0,A=0,w=1,P=0,k=1,v=1):y<x?(C=0,A=1,w=0,P=0,k=1,v=1):(C=0,A=1,w=0,P=1,k=1,v=0);const S=y-C+f,D=M-A+f,O=x-w+f,V=y-P+2*f,j=M-k+2*f,z=x-v+2*f,K=y-1+3*f,W=M-1+3*f,te=x-1+3*f,ie=h&255,se=u&255,Oe=d&255,We=this.perm[ie+this.perm[se+this.perm[Oe]]]%12,X=this.perm[ie+C+this.perm[se+A+this.perm[Oe+w]]]%12,Q=this.perm[ie+P+this.perm[se+k+this.perm[Oe+v]]]%12,me=this.perm[ie+1+this.perm[se+1+this.perm[Oe+1]]]%12;let ce=.6-y*y-M*M-x*x;ce<0?i=0:(ce*=ce,i=ce*ce*this.dot3(this.grad3[We],y,M,x));let Ce=.6-S*S-D*D-O*O;Ce<0?s=0:(Ce*=Ce,s=Ce*Ce*this.dot3(this.grad3[X],S,D,O));let Te=.6-V*V-j*j-z*z;Te<0?o=0:(Te*=Te,o=Te*Te*this.dot3(this.grad3[Q],V,j,z));let Fe=.6-K*K-W*W-te*te;return Fe<0?a=0:(Fe*=Fe,a=Fe*Fe*this.dot3(this.grad3[me],K,W,te)),32*(i+s+o+a)}noise4d(e,t,n,i){const s=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,f,p;const _=(e+t+n+i)*c,m=Math.floor(e+_),g=Math.floor(t+_),y=Math.floor(n+_),M=Math.floor(i+_),x=(m+g+y+M)*l,C=m-x,A=g-x,w=y-x,P=M-x,k=e-C,v=t-A,S=n-w,D=i-P,O=k>v?32:0,V=k>S?16:0,j=v>S?8:0,z=k>D?4:0,K=v>D?2:0,W=S>D?1:0,te=O+V+j+z+K+W,ie=o[te][0]>=3?1:0,se=o[te][1]>=3?1:0,Oe=o[te][2]>=3?1:0,We=o[te][3]>=3?1:0,X=o[te][0]>=2?1:0,Q=o[te][1]>=2?1:0,me=o[te][2]>=2?1:0,ce=o[te][3]>=2?1:0,Ce=o[te][0]>=1?1:0,Te=o[te][1]>=1?1:0,Fe=o[te][2]>=1?1:0,Je=o[te][3]>=1?1:0,Xe=k-ie+l,I=v-se+l,Lt=S-Oe+l,Ve=D-We+l,$e=k-X+2*l,Re=v-Q+2*l,rt=S-me+2*l,Pe=D-ce+2*l,R=k-Ce+3*l,T=v-Te+3*l,F=S-Fe+3*l,q=D-Je+3*l,J=k-1+4*l,$=v-1+4*l,xe=S-1+4*l,re=D-1+4*l,he=m&255,Ge=g&255,ee=y&255,ue=M&255,Ie=a[he+a[Ge+a[ee+a[ue]]]]%32,Le=a[he+ie+a[Ge+se+a[ee+Oe+a[ue+We]]]]%32,ge=a[he+X+a[Ge+Q+a[ee+me+a[ue+ce]]]]%32,qe=a[he+Ce+a[Ge+Te+a[ee+Fe+a[ue+Je]]]]%32,Ne=a[he+1+a[Ge+1+a[ee+1+a[ue+1]]]]%32;let Ze=.6-k*k-v*v-S*S-D*D;Ze<0?h=0:(Ze*=Ze,h=Ze*Ze*this.dot4(s[Ie],k,v,S,D));let L=.6-Xe*Xe-I*I-Lt*Lt-Ve*Ve;L<0?u=0:(L*=L,u=L*L*this.dot4(s[Le],Xe,I,Lt,Ve));let le=.6-$e*$e-Re*Re-rt*rt-Pe*Pe;le<0?d=0:(le*=le,d=le*le*this.dot4(s[ge],$e,Re,rt,Pe));let G=.6-R*R-T*T-F*F-q*q;G<0?f=0:(G*=G,f=G*G*this.dot4(s[qe],R,T,F,q));let Y=.6-J*J-$*$-xe*xe-re*re;return Y<0?p=0:(Y*=Y,p=Y*Y*this.dot4(s[Ne],J,$,xe,re)),27*(h+u+d+f+p)}}class Cn extends Ci{constructor(e,t,n,i,s,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=my(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new qt(this.width,this.height,{type:dn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new bt({defines:Object.assign({},Nr.defines),uniforms:Pn.clone(Nr.uniforms),vertexShader:Nr.vertexShader,fragmentShader:Nr.fragmentShader,blending:kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Mv,this.normalMaterial.blending=kt,this.pdMaterial=new bt({defines:Object.assign({},Fr.defines),uniforms:Pn.clone(Fr.uniforms),vertexShader:Fr.vertexShader,fragmentShader:Fr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new bt({defines:Object.assign({},Or.defines),uniforms:Pn.clone(Or.uniforms),vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader,blending:kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new bt({uniforms:Pn.clone(js.uniforms),vertexShader:js.vertexShader,fragmentShader:js.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Sa,blendDst:Os,blendEquation:Mn,blendSrcAlpha:ba,blendDstAlpha:Os,blendEquationAlpha:Mn}),this.blendMaterial=new bt({uniforms:Pn.clone(ma.uniforms),vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ru,blendSrc:Sa,blendDst:Os,blendEquation:Mn,blendSrcAlpha:ba,blendDstAlpha:Os,blendEquationAlpha:Mn}),this.fsQuad=new yo(null),this.originalClearColor=new Se,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Gc,this.depthTexture.format=Ei,this.depthTexture.type=wi,this.normalRenderTarget=new qt(this.width,this.height,{minFilter:Ft,magFilter:Ft,type:dn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=cd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Cn.OUTPUT.Off:break;case Cn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Cn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Cn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Cn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Cn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Cn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,s){e.getClearColor(this.originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,i!=null&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){const t=new vy,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const c=o,l=a;i[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const s=new _o(i,e,e,an,Dn);return s.wrapS=An,s.wrapT=An,s.needsUpdate=!0,s}}Cn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const xy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ms extends Ci{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(s,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new qt(s,o,{type:dn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new qt(s,o,{type:dn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=xy;this.highPassUniforms=Pn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ae(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=js;this.copyUniforms=Pn.clone(h.uniforms),this.blendMaterial=new bt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:xa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Se,this.oldClearAlpha=1,this.basic=new pt,this.fsQuad=new yo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Ae(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=ms.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ms.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ms.BlurDirectionX=new Ae(1,0);ms.BlurDirectionY=new Ae(0,1);const yy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class My extends Ci{constructor(){super();const e=yy;this.uniforms=Pn.clone(e.uniforms),this.material=new yv({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new yo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===au?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===cu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Rc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===uu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const by={uniforms:{tDiffuse:{value:null},uVignette:{value:.32}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVignette; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      // gentle S-curve and split toning: warm highlights, cool shadows
      vec3 x = c.rgb;
      x = mix(x, x * x * (3.0 - 2.0 * x), 0.18);
      float l = dot(x, vec3(0.299, 0.587, 0.114));
      x += (vec3(0.02, 0.008, -0.015) * l) + vec3(-0.008, 0.0, 0.014) * (1.0 - l);
      float d = distance(vUv, vec2(0.5));
      x *= 1.0 - uVignette * smoothstep(0.35, 0.85, d);
      gl_FragColor = vec4(x, c.a);
    }`};class Sy{constructor(e,t,n){this.renderer=e,this.enabled=!0;const i=e.getDrawingBufferSize(new Ae),s=new qt(i.x,i.y,{type:dn,samples:4});this.composer=new fy(e,s),this.renderPass=new py(t,n),this.gtao=new Cn(t,n,i.x,i.y),this.gtao.blendIntensity=.85,this.gtao.updateGtaoMaterial({radius:.6,distanceExponent:1.4,thickness:1.2,scale:1,samples:12}),this.bloom=new ms(new Ae(i.x,i.y),.45,.6,.92),this.composer.addPass(this.renderPass),this.composer.addPass(this.gtao),this.composer.addPass(this.bloom),this.composer.addPass(new My),this.composer.addPass(new ad(by))}setCamera(e){this.renderPass.camera=e,this.gtao.camera=e}setQuality(e){this.enabled=e!=="low",this.gtao.enabled=e==="high",this.bloom.enabled=e!=="low"}setSize(e,t){this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(e,t)}render(e,t){if(!this.enabled){this.renderer.render(e,t);return}this.setCamera(t),this.composer.render()}}class Ty{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return wy(e).buffer}}function wy(r){let e=0;for(const i of r)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of r){const s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);t.set(s,n),n+=i.byteLength}return t}function ld(r){return new Ey(r).unpack()}function hd(r){const e=new Ay,t=e.pack(r);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Ey{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let n=0,i="",s,o;for(;n<e;)s=t[n],s<160?(o=s,n++):(s^192)<32?(o=(s&31)<<6|t[n+1]&63,n+=2):(s^224)<16?(o=(s&15)<<12|(t[n+1]&63)<<6|t[n+2]&63,n+=3):(o=(s&7)<<18|(t[n+1]&63)<<12|(t[n+2]&63)<<6|t[n+3]&63,n+=4),i+=String.fromCodePoint(o);return this.index+=e,i}unpack_array(e){const t=new Array(e);for(let n=0;n<e;n++)t[n]=this.unpack();return t}unpack_map(e){const t={};for(let n=0;n<e;n++){const i=this.unpack();t[i]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return(t===0?1:-1)*i*2**(n-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(i-20)+t*2**(i-52);return(n===0?1:-1)*o}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Ay{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),n=t.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const n=i=>{if(i<t){const s=this.pack(e[i]);return s instanceof Promise?s.then(()=>n(i+1)):n(i+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,s=Math.floor(i*2**52),o=2**32,a=t<<31|n+1023<<20|s/o&1048575,c=s%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(c)}pack_object(e){const t=Object.keys(e),n=t.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");const i=s=>{if(s<t.length){const o=t[s];if(e.hasOwnProperty(o)){this.pack(o);const a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>i(s+1))}return i(s+1)}};return i(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}constructor(){this._bufferBuilder=new Ty,this._textEncoder=new TextEncoder}}let ud=!0,dd=!0;function Vs(r,e,t){const n=r.match(e);return n&&n.length>=t&&parseFloat(n[t],10)}function Ri(r,e,t){if(!r.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){el("Unable to polyfill events");return}const i=r.RTCPeerConnection.prototype,s=i.addEventListener;i.addEventListener=function(a,c){if(a!==e)return s.apply(this,arguments);const l=h=>{const u=t(h);u&&(c.handleEvent?c.handleEvent(u):c(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(c,l),s.apply(this,[a,l])};const o=i.removeEventListener;i.removeEventListener=function(a,c){if(a!==e||!this._eventMap||!this._eventMap[e])return o.apply(this,arguments);if(!this._eventMap[e].has(c))return o.apply(this,arguments);const l=this._eventMap[e].get(c);return this._eventMap[e].delete(c),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,o.apply(this,[a,l])},Object.defineProperty(i,"on"+e,{get(){return this["_on"+e]},set(a){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),a&&this.addEventListener(e,this["_on"+e]=a)},enumerable:!0,configurable:!0})}function Cy(r){return typeof r!="boolean"?new Error("Argument type: "+typeof r+". Please use a boolean."):(ud=r,r?"adapter.js logging disabled":"adapter.js logging enabled")}function Ry(r){return typeof r!="boolean"?new Error("Argument type: "+typeof r+". Please use a boolean."):(dd=!r,"adapter.js deprecation warnings "+(r?"disabled":"enabled"))}function el(){if(typeof window=="object"){if(ud)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function tl(r,e){dd&&console.warn(r+" is deprecated, please use "+e+" instead.")}function Py(r){const e={browser:null,version:null};if(typeof r>"u"||!r.navigator||!r.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=r;if(t.userAgentData&&t.userAgentData.brands){const n=t.userAgentData.brands.find(i=>i.brand==="Chromium");if(n){const i=parseInt(n.version,10);if(i>=90)return{browser:"chrome",version:i}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Vs(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||r.isSecureContext===!1&&r.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Vs(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(r.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Vs(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=r.RTCRtpTransceiver&&"currentDirection"in r.RTCRtpTransceiver.prototype,e._safariVersion=Vs(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function Vh(r){return Object.prototype.toString.call(r)==="[object Object]"}function fd(r){return Vh(r)?Object.keys(r).reduce(function(e,t){const n=Vh(r[t]),i=n?fd(r[t]):r[t],s=n&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,{[t]:i})},{}):r}function _c(r,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?_c(r,r.get(e[n]),t):n.endsWith("Ids")&&e[n].forEach(i=>{_c(r,r.get(i),t)})}))}function Gh(r,e,t){const n=t?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;const s=[];return r.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(o=>{r.forEach(a=>{a.type===n&&a.trackId===o.id&&_c(r,a,i)})}),i}const Wh=el;function pd(r,e){if(e.version>=64)return;const t=r&&r.navigator;if(!t.mediaDevices)return;const n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const h=typeof a[l]=="object"?a[l]:{ideal:a[l]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);const u=function(d,f){return d?d+f.charAt(0).toUpperCase()+f.slice(1):f==="deviceId"?"sourceId":f};if(h.ideal!==void 0){c.optional=c.optional||[];let d={};typeof h.ideal=="number"?(d[u("min",l)]=h.ideal,c.optional.push(d),d={},d[u("max",l)]=h.ideal,c.optional.push(d)):(d[u("",l)]=h.ideal,c.optional.push(d))}h.exact!==void 0&&typeof h.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[u("",l)]=h.exact):["min","max"].forEach(d=>{h[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[u(d,l)]=h[d])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},i=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(h,u,d){u in h&&!(d in h)&&(h[d]=h[u],delete h[u])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const h=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let u;if(l.exact==="environment"||l.ideal==="environment"?u=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(p=>p.kind==="videoinput");let f=d.find(p=>u.some(_=>p.label.toLowerCase().includes(_)));return!f&&d.length&&u.includes("back")&&(f=d[d.length-1]),f&&(a.video.deviceId=l.exact?{exact:f.deviceId}:{ideal:f.deviceId}),a.video=n(a.video),Wh("chrome: "+JSON.stringify(a)),c(a)})}a.video=n(a.video)}return Wh("chrome: "+JSON.stringify(a)),c(a)},s=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){i(a,h=>{t.webkitGetUserMedia(h,c,u=>{l&&l(s(u))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return i(c,l=>a(l).then(h=>{if(l.audio&&!h.getAudioTracks().length||l.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return h},h=>Promise.reject(s(h))))}}}function md(r){r.MediaStream=r.MediaStream||r.webkitMediaStream}function gd(r,e){if(!(e.version>102))if(typeof r=="object"&&r.RTCPeerConnection&&!("ontrack"in r.RTCPeerConnection.prototype)){Object.defineProperty(r.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(n){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=n)},enumerable:!0,configurable:!0});const t=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",s=>{let o;r.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===s.track.id):o={track:s.track};const a=new Event("track");a.track=s.track,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)}),i.stream.getTracks().forEach(s=>{let o;r.RTCPeerConnection.prototype.getReceivers?o=this.getReceivers().find(c=>c.track&&c.track.id===s.id):o={track:s};const a=new Event("track");a.track=s,a.receiver=o,a.transceiver={receiver:o},a.streams=[i.stream],this.dispatchEvent(a)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Ri(r,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function _d(r){if(typeof r=="object"&&r.RTCPeerConnection&&!("getSenders"in r.RTCPeerConnection.prototype)&&"createDTMFSender"in r.RTCPeerConnection.prototype){const e=function(i,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=i.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:i}};if(!r.RTCPeerConnection.prototype.getSenders){r.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const i=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addTrack=function(a,c){let l=i.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const s=r.RTCPeerConnection.prototype.removeTrack;r.RTCPeerConnection.prototype.removeTrack=function(a){s.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const n=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],n.apply(this,[s]),s.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof r=="object"&&r.RTCPeerConnection&&"getSenders"in r.RTCPeerConnection.prototype&&"createDTMFSender"in r.RTCPeerConnection.prototype&&r.RTCRtpSender&&!("dtmf"in r.RTCRtpSender.prototype)){const e=r.RTCPeerConnection.prototype.getSenders;r.RTCPeerConnection.prototype.getSenders=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(r.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function vd(r,e){if(e.version>=67||!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender&&r.RTCRtpReceiver))return;if(!("getStats"in r.RTCRtpSender.prototype)){const n=r.RTCPeerConnection.prototype.getSenders;n&&(r.RTCPeerConnection.prototype.getSenders=function(){const o=n.apply(this,[]);return o.forEach(a=>a._pc=this),o});const i=r.RTCPeerConnection.prototype.addTrack;i&&(r.RTCPeerConnection.prototype.addTrack=function(){const o=i.apply(this,arguments);return o._pc=this,o}),r.RTCRtpSender.prototype.getStats=function(){const o=this;return this._pc.getStats().then(a=>Gh(a,o.track,!0))}}if(!("getStats"in r.RTCRtpReceiver.prototype)){const n=r.RTCPeerConnection.prototype.getReceivers;n&&(r.RTCPeerConnection.prototype.getReceivers=function(){const s=n.apply(this,[]);return s.forEach(o=>o._pc=this),s}),Ri(r,"track",i=>(i.receiver._pc=i.srcElement,i)),r.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(o=>Gh(o,s.track,!1))}}if(!("getStats"in r.RTCRtpSender.prototype&&"getStats"in r.RTCRtpReceiver.prototype))return;const t=r.RTCPeerConnection.prototype.getStats;r.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof r.MediaStreamTrack){const i=arguments[0];let s,o,a;return this.getSenders().forEach(c=>{c.track===i&&(s?a=!0:s=c)}),this.getReceivers().forEach(c=>(c.track===i&&(o?a=!0:o=c),c.track===i)),a||s&&o?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():o?o.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function xd(r){r.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(u=>u.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const n=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};const i=r.RTCPeerConnection.prototype.removeTrack;r.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),i.apply(this,arguments)}}function yd(r,e){if(!r.RTCPeerConnection)return;if(r.RTCPeerConnection.prototype.addTrack&&e.version>=65)return xd(r);const t=r.RTCPeerConnection.prototype.getLocalStreams;r.RTCPeerConnection.prototype.getLocalStreams=function(){const h=t.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(u=>this._reverseStreams[u.id])};const n=r.RTCPeerConnection.prototype.addStream;r.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(u=>{if(this.getSenders().find(f=>f.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){const u=new r.MediaStream(h.getTracks());this._streams[h.id]=u,this._reverseStreams[u.id]=h,h=u}n.apply(this,[h])};const i=r.RTCPeerConnection.prototype.removeStream;r.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id]},r.RTCPeerConnection.prototype.addTrack=function(h,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(_=>_===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(_=>_.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const p=this._streams[u.id];if(p)p.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const _=new r.MediaStream([h]);this._streams[u.id]=_,this._reverseStreams[_.id]=u,this.addStream(_)}return this.getSenders().find(_=>_.track===h)};function s(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],p=l._streams[f.id];u=u.replace(new RegExp(p.id,"g"),f.id)}),new RTCSessionDescription({type:h.type,sdp:u})}function o(l,h){let u=h.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const f=l._reverseStreams[d],p=l._streams[f.id];u=u.replace(new RegExp(f.id,"g"),p.id)}),new RTCSessionDescription({type:h.type,sdp:u})}["createOffer","createAnswer"].forEach(function(l){const h=r.RTCPeerConnection.prototype[l],u={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[p=>{const _=s(this,p);d[0].apply(null,[_])},p=>{d[1]&&d[1].apply(null,p)},arguments[2]]):h.apply(this,arguments).then(p=>s(this,p))}};r.RTCPeerConnection.prototype[l]=u[l]});const a=r.RTCPeerConnection.prototype.setLocalDescription;r.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(r.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(r.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:s(this,l)}}),r.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(f=>{this._streams[f].getTracks().find(_=>h.track===_)&&(d=this._streams[f])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")))}}function vc(r,e){!r.RTCPeerConnection&&r.webkitRTCPeerConnection&&(r.RTCPeerConnection=r.webkitRTCPeerConnection),r.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=r.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?r.RTCIceCandidate:r.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};r.RTCPeerConnection.prototype[t]=i[t]})}function Md(r,e){e.version>102||Ri(r,"negotiationneeded",t=>{const n=t.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return t})}const Xh=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Md,shimAddTrackRemoveTrack:yd,shimAddTrackRemoveTrackWithNative:xd,shimGetSendersWithDtmf:_d,shimGetUserMedia:pd,shimMediaStream:md,shimOnTrack:gd,shimPeerConnection:vc,shimSenderReceiverGetStats:vd},Symbol.toStringTag,{value:"Module"}));function bd(r,e){const t=r&&r.navigator;if(!t.mediaDevices)return;const n=r&&r.MediaStreamTrack;if(t.getUserMedia=function(i,s,o){tl("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(i).then(s,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const i=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),i(o.audio,"autoGainControl","mozAutoGainControl"),i(o.audio,"noiseSuppression","mozNoiseSuppression")),s(o)},n&&n.prototype.getSettings){const o=n.prototype.getSettings;n.prototype.getSettings=function(){const a=o.apply(this,arguments);return i(a,"mozAutoGainControl","autoGainControl"),i(a,"mozNoiseSuppression","noiseSuppression"),a}}if(n&&n.prototype.applyConstraints){const o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a,"autoGainControl","mozAutoGainControl"),i(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function Iy(r,e){r.navigator.mediaDevices&&(r.navigator.mediaDevices&&"getDisplayMedia"in r.navigator.mediaDevices||(r.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){const i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===!0?n.video={mediaSource:e}:n.video.mediaSource=e,r.navigator.mediaDevices.getUserMedia(n)}))}function Sd(r){typeof r=="object"&&r.RTCTrackEvent&&"receiver"in r.RTCTrackEvent.prototype&&!("transceiver"in r.RTCTrackEvent.prototype)&&Object.defineProperty(r.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function xc(r,e){typeof r!="object"||!(r.RTCPeerConnection||r.mozRTCPeerConnection)||(!r.RTCPeerConnection&&r.mozRTCPeerConnection&&(r.RTCPeerConnection=r.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const n=r.RTCPeerConnection.prototype[t],i={[t](){return arguments[0]=new(t==="addIceCandidate"?r.RTCIceCandidate:r.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};r.RTCPeerConnection.prototype[t]=i[t]}))}function Td(r,e){if(typeof r!="object"||!(r.RTCPeerConnection||r.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=r.RTCPeerConnection.prototype.getStats;r.RTCPeerConnection.prototype.getStats=function(){const[s,o,a]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):n.apply(this,[s||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((h,u)=>{c.set(u,Object.assign({},h,{type:t[h.type]||h.type}))})}return c}).then(o,a)}}function wd(r){if(!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender)||r.RTCRtpSender&&"getStats"in r.RTCRtpSender.prototype)return;const e=r.RTCPeerConnection.prototype.getSenders;e&&(r.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(s=>s._pc=this),i});const t=r.RTCPeerConnection.prototype.addTrack;t&&(r.RTCPeerConnection.prototype.addTrack=function(){const i=t.apply(this,arguments);return i._pc=this,i}),r.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Ed(r){if(!(typeof r=="object"&&r.RTCPeerConnection&&r.RTCRtpSender)||r.RTCRtpSender&&"getStats"in r.RTCRtpReceiver.prototype)return;const e=r.RTCPeerConnection.prototype.getReceivers;e&&(r.RTCPeerConnection.prototype.getReceivers=function(){const n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),Ri(r,"track",t=>(t.receiver._pc=t.srcElement,t)),r.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Ad(r){!r.RTCPeerConnection||"removeStream"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.removeStream=function(t){tl("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&t.getTracks().includes(n.track)&&this.removeTrack(n)})})}function Cd(r){r.DataChannel&&!r.RTCDataChannel&&(r.RTCDataChannel=r.DataChannel)}function Rd(r,e){if(!(typeof r=="object"&&r.RTCPeerConnection)||e.version>=110)return;const t=r.RTCPeerConnection.prototype.addTransceiver;t&&(r.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let i=arguments[1]&&arguments[1].sendEncodings;i===void 0&&(i=[]),i=[...i];const s=i.length>0;s&&i.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const o=t.apply(this,arguments);if(s){const{sender:a}=o,c=a.getParameters();(!("encodings"in c)||c.encodings.length===1&&Object.keys(c.encodings[0]).length===0)&&(c.encodings=i,a.sendEncodings=i,this.setParametersPromises.push(a.setParameters(c).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return o})}function Pd(r,e){if(!(typeof r=="object"&&r.RTCRtpSender)||e.version>=110)return;const t=r.RTCRtpSender.prototype.getParameters;t&&(r.RTCRtpSender.prototype.getParameters=function(){const i=t.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function Id(r,e){if(!(typeof r=="object"&&r.RTCPeerConnection)||e.version>=110)return;const t=r.RTCPeerConnection.prototype.createOffer;r.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function Ld(r,e){if(!(typeof r=="object"&&r.RTCPeerConnection)||e.version>=110)return;const t=r.RTCPeerConnection.prototype.createAnswer;r.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const jh=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Rd,shimCreateAnswer:Ld,shimCreateOffer:Id,shimGetDisplayMedia:Iy,shimGetParameters:Pd,shimGetStats:Td,shimGetUserMedia:bd,shimOnTrack:Sd,shimPeerConnection:xc,shimRTCDataChannel:Cd,shimReceiverGetStats:Ed,shimRemoveStream:Ad,shimSenderGetStats:wd},Symbol.toStringTag,{value:"Module"}));function Dd(r){if(!(typeof r!="object"||!r.RTCPeerConnection)){if("getLocalStreams"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in r.RTCPeerConnection.prototype)){const e=r.RTCPeerConnection.prototype.addTrack;r.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n))},r.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const n=this._localStreams.indexOf(t);if(n===-1)return;this._localStreams.splice(n,1);const i=t.getTracks();this.getSenders().forEach(s=>{i.includes(s.track)&&this.removeTrack(s)})})}}function kd(r){if(!(typeof r!="object"||!r.RTCPeerConnection)&&("getRemoteStreams"in r.RTCPeerConnection.prototype||(r.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in r.RTCPeerConnection.prototype))){Object.defineProperty(r.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);const s=new Event("addstream");s.stream=i,this.dispatchEvent(s)})})}});const e=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){const n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(s=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(s)>=0)return;n._remoteStreams.push(s);const o=new Event("addstream");o.stream=s,n.dispatchEvent(o)})}),e.apply(n,arguments)}}}function Ud(r){if(typeof r!="object"||!r.RTCPeerConnection)return;const e=r.RTCPeerConnection.prototype,t=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d},e.createAnswer=function(l,h){const u=arguments.length>=2?arguments[2]:arguments[0],d=n.apply(this,[u]);return h?(d.then(l,h),Promise.resolve()):d};let a=function(c,l,h){const u=i.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u};e.setLocalDescription=a,a=function(c,l,h){const u=s.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.setRemoteDescription=a,a=function(c,l,h){const u=o.apply(this,[c]);return h?(u.then(l,h),Promise.resolve()):u},e.addIceCandidate=a}function Nd(r){const e=r&&r.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,n=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=i=>n(Od(i))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(n,i,s){e.mediaDevices.getUserMedia(n).then(i,s)}).bind(e))}function Od(r){return r&&r.video!==void 0?Object.assign({},r,{video:fd(r.video)}):r}function Fd(r){if(!r.RTCPeerConnection)return;const e=r.RTCPeerConnection;r.RTCPeerConnection=function(n,i){if(n&&n.iceServers){const s=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(tl("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,s.push(a)):s.push(n.iceServers[o])}n.iceServers=s}return new e(n,i)},r.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(r.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Bd(r){typeof r=="object"&&r.RTCTrackEvent&&"receiver"in r.RTCTrackEvent.prototype&&!("transceiver"in r.RTCTrackEvent.prototype)&&Object.defineProperty(r.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function zd(r){const e=r.RTCPeerConnection.prototype.createOffer;r.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);const i=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===!1&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===!0&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Hd(r){typeof r!="object"||r.AudioContext||(r.AudioContext=r.webkitAudioContext)}const $h=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Hd,shimCallbacksAPI:Ud,shimConstraints:Od,shimCreateOfferLegacy:zd,shimGetUserMedia:Nd,shimLocalStreamsAPI:Dd,shimRTCIceServerUrls:Fd,shimRemoteStreamsAPI:kd,shimTrackEventTransceiver:Bd},Symbol.toStringTag,{value:"Module"}));function Ly(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Vd={exports:{}};(function(r){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(n=>n.trim())},e.splitSections=function(t){return t.split(`
m=`).map((i,s)=>(s>0?"m="+i:i).trim()+`\r
`)},e.getDescription=function(t){const n=e.splitSections(t);return n&&n[0]},e.getMediaSections=function(t){const n=e.splitSections(t);return n.shift(),n},e.matchPrefix=function(t,n){return e.splitLines(t).filter(i=>i.indexOf(n)===0)},e.parseCandidate=function(t){let n;t.indexOf("a=candidate:")===0?n=t.substring(12).split(" "):n=t.substring(10).split(" ");const i={foundation:n[0],component:{1:"rtp",2:"rtcp"}[n[1]]||n[1],protocol:n[2].toLowerCase(),priority:parseInt(n[3],10),ip:n[4],address:n[4],port:parseInt(n[5],10),type:n[7]};for(let s=8;s<n.length;s+=2)switch(n[s]){case"raddr":i.relatedAddress=n[s+1];break;case"rport":i.relatedPort=parseInt(n[s+1],10);break;case"tcptype":i.tcpType=n[s+1];break;case"ufrag":i.ufrag=n[s+1],i.usernameFragment=n[s+1];break;default:i[n[s]]===void 0&&(i[n[s]]=n[s+1]);break}return i},e.writeCandidate=function(t){const n=[];n.push(t.foundation);const i=t.component;i==="rtp"?n.push(1):i==="rtcp"?n.push(2):n.push(i),n.push(t.protocol.toUpperCase()),n.push(t.priority),n.push(t.address||t.ip),n.push(t.port);const s=t.type;return n.push("typ"),n.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(n.push("raddr"),n.push(t.relatedAddress),n.push("rport"),n.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(n.push("tcptype"),n.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(n.push("ufrag"),n.push(t.usernameFragment||t.ufrag)),"candidate:"+n.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let n=t.substring(9).split(" ");const i={payloadType:parseInt(n.shift(),10)};return n=n[0].split("/"),i.name=n[0],i.clockRate=parseInt(n[1],10),i.channels=n.length===3?parseInt(n[2],10):1,i.numChannels=i.channels,i},e.writeRtpMap=function(t){let n=t.payloadType;t.preferredPayloadType!==void 0&&(n=t.preferredPayloadType);const i=t.channels||t.numChannels||1;return"a=rtpmap:"+n+" "+t.name+"/"+t.clockRate+(i!==1?"/"+i:"")+`\r
`},e.parseExtmap=function(t){const n=t.substring(9).split(" ");return{id:parseInt(n[0],10),direction:n[0].indexOf("/")>0?n[0].split("/")[1]:"sendrecv",uri:n[1],attributes:n.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const n={};let i;const s=t.substring(t.indexOf(" ")+1).split(";");for(let o=0;o<s.length;o++)i=s[o].trim().split("="),n[i[0].trim()]=i[1];return n},e.writeFmtp=function(t){let n="",i=t.payloadType;if(t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(o=>{t.parameters[o]!==void 0?s.push(o+"="+t.parameters[o]):s.push(o)}),n+="a=fmtp:"+i+" "+s.join(";")+`\r
`}return n},e.parseRtcpFb=function(t){const n=t.substring(t.indexOf(" ")+1).split(" ");return{type:n.shift(),parameter:n.join(" ")}},e.writeRtcpFb=function(t){let n="",i=t.payloadType;return t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{n+="a=rtcp-fb:"+i+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),n},e.parseSsrcMedia=function(t){const n=t.indexOf(" "),i={ssrc:parseInt(t.substring(7,n),10)},s=t.indexOf(":",n);return s>-1?(i.attribute=t.substring(n+1,s),i.value=t.substring(s+1)):i.attribute=t.substring(n+1),i},e.parseSsrcGroup=function(t){const n=t.substring(13).split(" ");return{semantics:n.shift(),ssrcs:n.map(i=>parseInt(i,10))}},e.getMid=function(t){const n=e.matchPrefix(t,"a=mid:")[0];if(n)return n.substring(6)},e.parseFingerprint=function(t){const n=t.substring(14).split(" ");return{algorithm:n[0].toLowerCase(),value:n[1].toUpperCase()}},e.getDtlsParameters=function(t,n){return{role:"auto",fingerprints:e.matchPrefix(t+n,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,n){let i="a=setup:"+n+`\r
`;return t.fingerprints.forEach(s=>{i+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),i},e.parseCryptoLine=function(t){const n=t.substring(9).split(" ");return{tag:parseInt(n[0],10),cryptoSuite:n[1],keyParams:n[2],sessionParams:n.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const n=t.substring(7).split("|");return{keyMethod:"inline",keySalt:n[0],lifeTime:n[1],mkiValue:n[2]?n[2].split(":")[0]:void 0,mkiLength:n[2]?n[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,n){return e.matchPrefix(t+n,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,n){const i=e.matchPrefix(t+n,"a=ice-ufrag:")[0],s=e.matchPrefix(t+n,"a=ice-pwd:")[0];return i&&s?{usernameFragment:i.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let n="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(n+=`a=ice-lite\r
`),n},e.parseRtpParameters=function(t){const n={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");n.profile=s[2];for(let a=3;a<s.length;a++){const c=s[a],l=e.matchPrefix(t,"a=rtpmap:"+c+" ")[0];if(l){const h=e.parseRtpMap(l),u=e.matchPrefix(t,"a=fmtp:"+c+" ");switch(h.parameters=u.length?e.parseFmtp(u[0]):{},h.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+c+" ").map(e.parseRtcpFb),n.codecs.push(h),h.name.toUpperCase()){case"RED":case"ULPFEC":n.fecMechanisms.push(h.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(a=>{n.headerExtensions.push(e.parseExtmap(a))});const o=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return n.codecs.forEach(a=>{o.forEach(c=>{a.rtcpFeedback.find(h=>h.type===c.type&&h.parameter===c.parameter)||a.rtcpFeedback.push(c)})}),n},e.writeRtpDescription=function(t,n){let i="";i+="m="+t+" ",i+=n.codecs.length>0?"9":"0",i+=" "+(n.profile||"UDP/TLS/RTP/SAVPF")+" ",i+=n.codecs.map(o=>o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType).join(" ")+`\r
`,i+=`c=IN IP4 0.0.0.0\r
`,i+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,n.codecs.forEach(o=>{i+=e.writeRtpMap(o),i+=e.writeFmtp(o),i+=e.writeRtcpFb(o)});let s=0;return n.codecs.forEach(o=>{o.maxptime>s&&(s=o.maxptime)}),s>0&&(i+="a=maxptime:"+s+`\r
`),n.headerExtensions&&n.headerExtensions.forEach(o=>{i+=e.writeExtmap(o)}),i},e.parseRtpEncodingParameters=function(t){const n=[],i=e.parseRtpParameters(t),s=i.fecMechanisms.indexOf("RED")!==-1,o=i.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),c=a.length>0&&a[0].ssrc;let l;const h=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(p=>parseInt(p,10)));h.length>0&&h[0].length>1&&h[0][0]===c&&(l=h[0][1]),i.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let f={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&l&&(f.rtx={ssrc:l}),n.push(f),s&&(f=JSON.parse(JSON.stringify(f)),f.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},n.push(f))}}),n.length===0&&c&&n.push({ssrc:c});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-50*40*8:u=void 0,n.forEach(d=>{d.maxBitrate=u})),n},e.parseRtcpParameters=function(t){const n={},i=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="cname")[0];i&&(n.cname=i.value,n.ssrc=i.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");n.reducedSize=s.length>0,n.compound=s.length===0;const o=e.matchPrefix(t,"a=rtcp-mux");return n.mux=o.length>0,n},e.writeRtcpParameters=function(t){let n="";return t.reducedSize&&(n+=`a=rtcp-rsize\r
`),t.mux&&(n+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(n+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),n},e.parseMsid=function(t){let n;const i=e.matchPrefix(t,"a=msid:");if(i.length===1)return n=i[0].substring(7).split(" "),{stream:n[0],track:n[1]};const s=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="msid");if(s.length>0)return n=s[0].value.split(" "),{stream:n[0],track:n[1]}},e.parseSctpDescription=function(t){const n=e.parseMLine(t),i=e.matchPrefix(t,"a=max-message-size:");let s;i.length>0&&(s=parseInt(i[0].substring(19),10)),isNaN(s)&&(s=65536);const o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substring(12),10),protocol:n.fmt,maxMessageSize:s};const a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){const c=a[0].substring(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,n){let i=[];return t.protocol!=="DTLS/SCTP"?i=["m="+t.kind+" 9 "+t.protocol+" "+n.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+n.port+`\r
`]:i=["m="+t.kind+" 9 "+t.protocol+" "+n.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+n.port+" "+n.protocol+` 65535\r
`],n.maxMessageSize!==void 0&&i.push("a=max-message-size:"+n.maxMessageSize+`\r
`),i.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,n,i){let s;const o=n!==void 0?n:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(i||"thisisadapterortc")+" "+s+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,n){const i=e.splitLines(t);for(let s=0;s<i.length;s++)switch(i[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return i[s].substring(2)}return n?e.getDirection(n):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const i=e.splitLines(t)[0].substring(2).split(" ");return{kind:i[0],port:parseInt(i[1],10),protocol:i[2],fmt:i.slice(3).join(" ")}},e.parseOLine=function(t){const i=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:i[0],sessionId:i[1],sessionVersion:parseInt(i[2],10),netType:i[3],addressType:i[4],address:i[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const n=e.splitLines(t);for(let i=0;i<n.length;i++)if(n[i].length<2||n[i].charAt(1)!=="=")return!1;return!0},r.exports=e})(Vd);var Gd=Vd.exports;const os=Ly(Gd),Dy=sf({__proto__:null,default:os},[Gd]);function $r(r){if(!r.RTCIceCandidate||r.RTCIceCandidate&&"foundation"in r.RTCIceCandidate.prototype)return;const e=r.RTCIceCandidate;r.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){const i=new e(n),s=os.parseCandidate(n.candidate);for(const o in s)o in i||Object.defineProperty(i,o,{value:s[o]});return i.toJSON=function(){return{candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},r.RTCIceCandidate.prototype=e.prototype,Ri(r,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new r.RTCIceCandidate(t.candidate),writable:"false"}),t))}function yc(r){!r.RTCIceCandidate||r.RTCIceCandidate&&"relayProtocol"in r.RTCIceCandidate.prototype||Ri(r,"icecandidate",e=>{if(e.candidate){const t=os.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function qr(r,e){if(!r.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in r.RTCPeerConnection.prototype||Object.defineProperty(r.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=os.splitSections(a.sdp);return c.shift(),c.some(l=>{const h=os.parseMLine(l);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},i=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},s=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const h=os.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?l=parseInt(h[0].substring(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=n(arguments[0]),l=i(c),h=s(arguments[0],c);let u;l===0&&h===0?u=Number.POSITIVE_INFINITY:l===0||h===0?u=Math.max(l,h):u=Math.min(l,h);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return o.apply(this,arguments)}}function Yr(r,e){if(!(r.RTCPeerConnection&&"createDataChannel"in r.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(i,s){const o=i.send;i.send=function(){const c=arguments[0],l=c.length||c.size||c.byteLength;if(i.readyState==="open"&&s.sctp&&l>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return o.apply(i,arguments)}}const n=r.RTCPeerConnection.prototype.createDataChannel;r.RTCPeerConnection.prototype.createDataChannel=function(){const s=n.apply(this,arguments);return t(s,this),s},Ri(r,"datachannel",i=>(t(i.channel,i.target),i))}function Mc(r){if(!r.RTCPeerConnection||"connectionState"in r.RTCPeerConnection.prototype)return;const e=r.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const n=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{const s=i.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const o=new Event("connectionstatechange",i);s.dispatchEvent(o)}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}})}function bc(r,e){if(!r.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=r.RTCPeerConnection.prototype.setRemoteDescription;r.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=i.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);r.RTCSessionDescription&&i instanceof r.RTCSessionDescription?arguments[0]=new r.RTCSessionDescription({type:i.type,sdp:s}):i.sdp=s}return t.apply(this,arguments)}}function Kr(r,e){if(!(r.RTCPeerConnection&&r.RTCPeerConnection.prototype))return;const t=r.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(r.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Zr(r,e){if(!(r.RTCPeerConnection&&r.RTCPeerConnection.prototype))return;const t=r.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(r.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return t.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?t.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>t.apply(this,[o]))})}const ky=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:bc,shimAddIceCandidateNullOrEmpty:Kr,shimConnectionState:Mc,shimMaxMessageSize:qr,shimParameterlessSetLocalDescription:Zr,shimRTCIceCandidate:$r,shimRTCIceCandidateRelayProtocol:yc,shimSendThrowTypeError:Yr},Symbol.toStringTag,{value:"Module"}));function Uy({window:r}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=el,n=Py(r),i={browserDetails:n,commonShim:ky,extractVersion:Vs,disableLog:Cy,disableWarnings:Ry,sdp:Dy};switch(n.browser){case"chrome":if(!Xh||!vc||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),i;if(n.version===null)return t("Chrome shim can not determine version, not shimming."),i;t("adapter.js shimming chrome."),i.browserShim=Xh,Kr(r,n),Zr(r),pd(r,n),md(r),vc(r,n),gd(r,n),yd(r,n),_d(r),vd(r,n),Md(r,n),$r(r),yc(r),Mc(r),qr(r,n),Yr(r,n),bc(r,n);break;case"firefox":if(!jh||!xc||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),i;t("adapter.js shimming firefox."),i.browserShim=jh,Kr(r,n),Zr(r),bd(r,n),xc(r,n),Td(r,n),Sd(r),Ad(r),wd(r),Ed(r),Cd(r),Rd(r,n),Pd(r,n),Id(r,n),Ld(r,n),$r(r),Mc(r),qr(r,n),Yr(r,n);break;case"safari":if(!$h||!e.shimSafari)return t("Safari shim is not included in this adapter release."),i;t("adapter.js shimming safari."),i.browserShim=$h,Kr(r,n),Zr(r),Fd(r),zd(r),Ud(r),Dd(r),kd(r),Bd(r),Nd(r),Hd(r),$r(r),yc(r),qr(r,n),Yr(r,n),bc(r,n);break;default:t("Unsupported browser!");break}return i}const qh=Uy({window:typeof window>"u"?void 0:window});function Pi(r,e,t,n){Object.defineProperty(r,e,{get:t,set:n,enumerable:!0,configurable:!0})}class Wd{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU);let s=0,o=0;for(;o<n;){const a=Math.min(n,o+this.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:s,data:c,total:i};t.push(l),o=a,s++}return this._dataCount++,t}}}function Ny(r){let e=0;for(const i of r)e+=i.byteLength;const t=new Uint8Array(e);let n=0;for(const i of r)t.set(i,n),n+=i.byteLength;return t}const ga=qh.default||qh,Ns=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const r=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(r)?r==="chrome"?e>=this.minChromeVersion:r==="firefox"?e>=this.minFirefoxVersion:r==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return ga.browserDetails.browser}getVersion(){return ga.browserDetails.version||0}isUnifiedPlanSupported(){const r=this.getBrowser(),e=ga.browserDetails.version||0;if(r==="chrome"&&e<this.minChromeVersion)return!1;if(r==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,n=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),n=!0}catch{}finally{t&&t.close()}return n}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Oy=r=>!r||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(r),Xd=()=>Math.random().toString(36).slice(2),Yh={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class Fy extends Wd{noop(){}blobToArrayBuffer(e,t){const n=new FileReader;return n.onload=function(i){i.target&&t(i.target.result)},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Yh,this.browser=Ns.getBrowser(),this.browserVersion=Ns.getVersion(),this.pack=hd,this.unpack=ld,this.supports=function(){const t={browser:Ns.isBrowserSupported(),webRTC:Ns.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let n;try{n=new RTCPeerConnection(Yh),t.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!i.ordered;try{i.binaryType="blob",t.binaryBlob=!Ns.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{n&&n.close()}return t}(),this.validateId=Oy,this.randomToken=Xd}}const Jt=new Fy,By="PeerJS: ";var Kh;(function(r){r[r.Disabled=0]="Disabled",r[r.Errors=1]="Errors",r[r.Warnings=2]="Warnings",r[r.All=3]="All"})(Kh||(Kh={}));class zy{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const n=[By,...t];for(const i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n)}constructor(){this._logLevel=0}}var _e=new zy,nl={},Hy=Object.prototype.hasOwnProperty,Yt="~";function er(){}Object.create&&(er.prototype=Object.create(null),new er().__proto__||(Yt=!1));function Vy(r,e,t){this.fn=r,this.context=e,this.once=t||!1}function jd(r,e,t,n,i){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new Vy(t,n||r,i),o=Yt?Yt+e:e;return r._events[o]?r._events[o].fn?r._events[o]=[r._events[o],s]:r._events[o].push(s):(r._events[o]=s,r._eventsCount++),r}function Jr(r,e){--r._eventsCount===0?r._events=new er:delete r._events[e]}function Wt(){this._events=new er,this._eventsCount=0}Wt.prototype.eventNames=function(){var e=[],t,n;if(this._eventsCount===0)return e;for(n in t=this._events)Hy.call(t,n)&&e.push(Yt?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Wt.prototype.listeners=function(e){var t=Yt?Yt+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,s=n.length,o=new Array(s);i<s;i++)o[i]=n[i].fn;return o};Wt.prototype.listenerCount=function(e){var t=Yt?Yt+e:e,n=this._events[t];return n?n.fn?1:n.length:0};Wt.prototype.emit=function(e,t,n,i,s,o){var a=Yt?Yt+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,h,u;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.context,t,n,i,s),!0;case 6:return c.fn.call(c.context,t,n,i,s,o),!0}for(u=1,h=new Array(l-1);u<l;u++)h[u-1]=arguments[u];c.fn.apply(c.context,h)}else{var d=c.length,f;for(u=0;u<d;u++)switch(c[u].once&&this.removeListener(e,c[u].fn,void 0,!0),l){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,n);break;case 4:c[u].fn.call(c[u].context,t,n,i);break;default:if(!h)for(f=1,h=new Array(l-1);f<l;f++)h[f-1]=arguments[f];c[u].fn.apply(c[u].context,h)}}return!0};Wt.prototype.on=function(e,t,n){return jd(this,e,t,n,!1)};Wt.prototype.once=function(e,t,n){return jd(this,e,t,n,!0)};Wt.prototype.removeListener=function(e,t,n,i){var s=Yt?Yt+e:e;if(!this._events[s])return this;if(!t)return Jr(this,s),this;var o=this._events[s];if(o.fn)o.fn===t&&(!i||o.once)&&(!n||o.context===n)&&Jr(this,s);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||i&&!o[a].once||n&&o[a].context!==n)&&c.push(o[a]);c.length?this._events[s]=c.length===1?c[0]:c:Jr(this,s)}return this};Wt.prototype.removeAllListeners=function(e){var t;return e?(t=Yt?Yt+e:e,this._events[t]&&Jr(this,t)):(this._events=new er,this._eventsCount=0),this};Wt.prototype.off=Wt.prototype.removeListener;Wt.prototype.addListener=Wt.prototype.on;Wt.prefixed=Yt;Wt.EventEmitter=Wt;nl=Wt;var Ii={};Pi(Ii,"ConnectionType",()=>Ln);Pi(Ii,"PeerErrorType",()=>_t);Pi(Ii,"BaseConnectionErrorType",()=>tr);Pi(Ii,"DataConnectionErrorType",()=>nr);Pi(Ii,"SerializationType",()=>gs);Pi(Ii,"SocketEventType",()=>In);Pi(Ii,"ServerMessageType",()=>Pt);var Ln;(function(r){r.Data="data",r.Media="media"})(Ln||(Ln={}));var _t;(function(r){r.BrowserIncompatible="browser-incompatible",r.Disconnected="disconnected",r.InvalidID="invalid-id",r.InvalidKey="invalid-key",r.Network="network",r.PeerUnavailable="peer-unavailable",r.SslUnavailable="ssl-unavailable",r.ServerError="server-error",r.SocketError="socket-error",r.SocketClosed="socket-closed",r.UnavailableID="unavailable-id",r.WebRTC="webrtc"})(_t||(_t={}));var tr;(function(r){r.NegotiationFailed="negotiation-failed",r.ConnectionClosed="connection-closed"})(tr||(tr={}));var nr;(function(r){r.NotOpenYet="not-open-yet",r.MessageToBig="message-too-big"})(nr||(nr={}));var gs;(function(r){r.Binary="binary",r.BinaryUTF8="binary-utf8",r.JSON="json",r.None="raw"})(gs||(gs={}));var In;(function(r){r.Message="message",r.Disconnected="disconnected",r.Error="error",r.Close="close"})(In||(In={}));var Pt;(function(r){r.Heartbeat="HEARTBEAT",r.Candidate="CANDIDATE",r.Offer="OFFER",r.Answer="ANSWER",r.Open="OPEN",r.Error="ERROR",r.IdTaken="ID-TAKEN",r.InvalidKey="INVALID-KEY",r.Leave="LEAVE",r.Expire="EXPIRE"})(Pt||(Pt={}));var il={};il=JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');class Gy extends nl.EventEmitter{constructor(e,t,n,i,s,o=5e3){super(),this.pingInterval=o,this._disconnected=!0,this._messagesQueue=[];const a=e?"wss://":"ws://";this._baseUrl=a+t+":"+n+i+"peerjs?key="+s}start(e,t){this._id=e;const n=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+il.version),this._disconnected=!1,this._socket.onmessage=i=>{let s;try{s=JSON.parse(i.data),_e.log("Server message received:",s)}catch{_e.log("Invalid server message",i.data);return}this.emit(In.Message,s)},this._socket.onclose=i=>{this._disconnected||(_e.log("Socket closed.",i),this._cleanup(),this._disconnected=!0,this.emit(In.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),_e.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){_e.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Pt.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(In.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class $d{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===Ln.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const n=this.connection,i={ordered:!!e.reliable},s=t.createDataChannel(n.label,i);n._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){_e.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,s=this.connection.provider;_e.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(_e.log(`Received ICE candidates for ${t}:`,o.candidate),s.socket.send({type:Pt.Candidate,payload:{candidate:o.candidate,type:i,connectionId:n},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":_e.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(tr.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":_e.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(tr.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":_e.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},_e.log("Listening for data channel"),e.ondatachannel=o=>{_e.log("Received data channel");const a=o.channel;s.getConnection(t,n)._initializeDataChannel(a)},_e.log("Listening for remote stream"),e.ontrack=o=>{_e.log("Received remote stream");const a=o.streams[0],c=s.getConnection(t,n);if(c.type===Ln.Media){const l=c;this._addStreamToMediaConnection(a,l)}}}cleanup(){_e.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let n=!1;const i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(t||n)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createOffer(this.connection.options.constraints);_e.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),_e.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Ln.Data){const s=this.connection;i={...i,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:Pt.Offer,payload:i,dst:this.connection.peer})}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(_t.WebRTC,i),_e.log("Failed to setLocalDescription, ",i))}}catch(n){t.emitError(_t.WebRTC,n),_e.log("Failed to createOffer, ",n)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const n=await e.createAnswer();_e.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),_e.log("Set localDescription:",n,`for:${this.connection.peer}`),t.socket.send({type:Pt.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(i){t.emitError(_t.WebRTC,i),_e.log("Failed to setLocalDescription, ",i)}}catch(n){t.emitError(_t.WebRTC,n),_e.log("Failed to create answer, ",n)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const n=this.connection.peerConnection,i=this.connection.provider;_e.log("Setting remote description",t);const s=this;try{await n.setRemoteDescription(t),_e.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(o){i.emitError(_t.WebRTC,o),_e.log("Failed to setRemoteDescription, ",o)}}async handleCandidate(e){_e.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),_e.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(_t.WebRTC,t),_e.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(_e.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return _e.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{t.addTrack(n,e)})}_addStreamToMediaConnection(e,t){_e.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class qd extends nl.EventEmitter{emitError(e,t){_e.error("Error:",t),this.emit("error",new Wy(`${e}`,t))}}class Wy extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Yd extends qd{get open(){return this._open}constructor(e,t,n){super(),this.peer=e,this.provider=t,this.options=n,this._open=!1,this.metadata=n.metadata}}var Tc;const $s=class $s extends Yd{get type(){return Ln.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,n){super(e,t,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||$s.ID_PREFIX+Jt.randomToken(),this._negotiator=new $d(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{_e.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{_e.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){_e.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,n=e.payload;switch(e.type){case Pt.Answer:this._negotiator.handleSDP(t,n.sdp),this._open=!0;break;case Pt.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:_e.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){_e.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const n=this.provider._getMessages(this.connectionId);for(const i of n)this.handleMessage(i);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Tc=new WeakMap,bs($s,Tc,$s.ID_PREFIX="mc_");let ho=$s;class Xy{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:n,port:i,path:s,key:o}=this._options,a=new URL(`${t}://${n}:${i}${s}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",il.version),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){_e.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Jt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Jt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw _e.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var wc,Ec;const Mi=class Mi extends Yd{get type(){return Ln.Data}constructor(e,t,n){super(e,t,n),this.connectionId=this.options.connectionId||Mi.ID_PREFIX+Xd(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new $d(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{_e.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{_e.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{_e.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(nr.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Pt.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Pt.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:_e.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};wc=new WeakMap,Ec=new WeakMap,bs(Mi,wc,Mi.ID_PREFIX="dc_"),bs(Mi,Ec,Mi.MAX_BUFFERED_AMOUNT=8388608);let uo=Mi;class sl extends uo{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>uo.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return _e.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class _a extends sl{close(e){super.close(e),this._chunkedData={}}constructor(e,t,n){super(e,t,n),this.chunker=new Wd,this.serialization=gs.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=ld(e),n=t.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,n=this._chunkedData[t]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[t]=n,n.total===n.count){delete this._chunkedData[t];const i=Ny(n.data);this._handleDataMessage({data:i})}}_send(e,t){const n=hd(e);if(n instanceof Promise)return this._send_blob(n);if(!t&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);_e.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const n of t)this.send(n,!0)}}class jy extends sl{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=gs.None}}class $y extends sl{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),n=t.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const n=this.encoder.encode(this.stringify(e));if(n.byteLength>=Jt.chunkedMTU){this.emitError(nr.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n)}constructor(...e){super(...e),this.serialization=gs.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var Ac;const qs=class qs extends qd{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,n]of this._connections)e[t]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:jy,json:$y,binary:_a,"binary-utf8":_a,default:_a},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?t=e:e&&(n=e.toString()),t={debug:0,host:Jt.CLOUD_HOST,port:Jt.CLOUD_PORT,path:"/",key:qs.DEFAULT_KEY,token:Jt.randomToken(),config:Jt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Jt.CLOUD_HOST?this._options.secure=Jt.isSecure():this._options.host==Jt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&_e.setLogFunction(this._options.logFunction),_e.logLevel=this._options.debug||0,this._api=new Xy(t),this._socket=this._createServerConnection(),!Jt.supports.audioVideo&&!Jt.supports.data){this._delayedAbort(_t.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!Jt.validateId(n)){this._delayedAbort(_t.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(_t.ServerError,i))}_createServerConnection(){const e=new Gy(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(In.Message,t=>{this._handleMessage(t)}),e.on(In.Error,t=>{this._abort(_t.SocketError,t)}),e.on(In.Disconnected,()=>{this.disconnected||(this.emitError(_t.Network,"Lost connection to server."),this.disconnect())}),e.on(In.Close,()=>{this.disconnected||this._abort(_t.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,n=e.payload,i=e.src;switch(t){case Pt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Pt.Error:this._abort(_t.ServerError,n.msg);break;case Pt.IdTaken:this._abort(_t.UnavailableID,`ID "${this.id}" is taken`);break;case Pt.InvalidKey:this._abort(_t.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Pt.Leave:_e.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case Pt.Expire:this.emitError(_t.PeerUnavailable,`Could not connect to peer ${i}`);break;case Pt.Offer:{const s=n.connectionId;let o=this.getConnection(i,s);if(o&&(o.close(),_e.warn(`Offer received for existing Connection ID:${s}`)),n.type===Ln.Media){const c=new ho(i,this,{connectionId:s,_payload:n,metadata:n.metadata});o=c,this._addConnection(i,o),this.emit("call",c)}else if(n.type===Ln.Data){const c=new this._serializers[n.serialization](i,this,{connectionId:s,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=c,this._addConnection(i,o),this.emit("connection",c)}else{_e.warn(`Received malformed connection type:${n.type}`);return}const a=this._getMessages(s);for(const c of a)o.handleMessage(c);break}default:{if(!n){_e.warn(`You received a malformed message from ${i} of type ${t}`);return}const s=n.connectionId,o=this.getConnection(i,s);o&&o.peerConnection?o.handleMessage(e):s?this._storeMessage(s,e):_e.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){_e.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(_t.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const n=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,n),n}call(e,t,n={}){if(this.disconnected){_e.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(_t.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){_e.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const i=new ho(e,this,{...n,_stream:t});return this._addConnection(e,i),i}_addConnection(e,t){_e.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const n=t.indexOf(e);n!==-1&&t.splice(n,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const n=this._connections.get(e);if(!n)return null;for(const i of n)if(i.connectionId===t)return i;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){_e.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(_e.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const n of t)n.close()}disconnect(){if(this.disconnected)return;const e=this.id;_e.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)_e.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)_e.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(_t.ServerError,t))}};Ac=new WeakMap,bs(qs,Ac,qs.DEFAULT_KEY="peerjs");let Sc=qs;var Zh=Sc;const Jh="dymok-milena-2026-",Qh="ABCDEFGHJKMNPQRSTUVWXYZ23456789",eu=[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun.cloudflare.com:3478"}];function qy(){let r="";for(let e=0;e<5;e++)r+=Qh[Math.floor(Math.random()*Qh.length)];return r}const tu=typeof location<"u"&&new URLSearchParams(location.search).get("net")==="local";class nu{constructor(){this.localId=Math.random().toString(36).slice(2,8),this.isHost=!1,this.code="",this.conns=new Map,this.handler=null,this.early=[],this.onPeerJoin=()=>{},this.onPeerLeave=()=>{},this.onDisconnect=()=>{}}set onMessage(e){this.handler=e;for(const[t,n]of this.early.splice(0))e(t,n)}deliver(e,t){this.handler?this.handler(e,t):this.early.push([e,t])}open(e){return new Promise((t,n)=>{const i=e?new Zh(e,{config:{iceServers:eu},debug:1}):new Zh({config:{iceServers:eu},debug:1}),s=setTimeout(()=>n(new Error("Сервер знакомств не отвечает. Проверьте интернет.")),15e3);i.on("open",()=>{clearTimeout(s),t(i)}),i.on("error",o=>{clearTimeout(s);const a=o.type==="unavailable-id"?"Такая комната уже есть — попробуйте ещё раз.":o.type==="peer-unavailable"?"Комната не найдена. Проверьте код.":o.type==="network"||o.type==="server-error"?"Нет связи с сервером знакомств.":`Ошибка сети: ${o.type??"unknown"}`;n(new Error(a))})})}async hostRoom(e){if(this.isHost=!0,this.code=e,tu){this.bc=new BroadcastChannel(`dm-${e}`),this.bc.onmessage=({data:t})=>{t.type==="join"?(this.conns.set(t.from,null),this.bc.postMessage({type:"joined",to:t.from}),this.onPeerJoin(t.from)):t.type==="msg"&&t.to==="host"?this.deliver(t.m,t.from):t.type==="leave"&&(this.conns.delete(t.from),this.onPeerLeave(t.from))};return}this.peer=await this.open(Jh+e),this.peer.on("connection",t=>{t.on("open",()=>{this.conns.set(t.peer,t),this.onPeerJoin(t.peer)}),t.on("data",n=>this.deliver(n,t.peer)),t.on("close",()=>{this.conns.delete(t.peer),this.onPeerLeave(t.peer)})})}async joinRoom(e){if(this.isHost=!1,this.code=e.toUpperCase().trim(),tu){const t=new BroadcastChannel(`dm-${this.code}`);this.bc=t,await new Promise((n,i)=>{const s=setTimeout(()=>i(new Error("Комната не найдена. Проверьте код.")),5e3);t.onmessage=({data:o})=>{o.type==="joined"&&o.to===this.localId?(clearTimeout(s),n()):o.type==="msg"&&(o.to===this.localId||o.to==="*"&&o.except!==this.localId)&&this.deliver(o.m,"host")},t.postMessage({type:"join",from:this.localId})}),addEventListener("beforeunload",()=>t.postMessage({type:"leave",from:this.localId}));return}this.peer=await this.open(),await new Promise((t,n)=>{const i=this.peer.connect(Jh+this.code,{reliable:!0,serialization:"json"}),s=setTimeout(()=>n(new Error("Не удалось подключиться к комнате.")),15e3);this.peer.on("error",o=>{clearTimeout(s),n(new Error(o.type==="peer-unavailable"?"Комната не найдена. Проверьте код.":`Ошибка сети: ${o.type}`))}),i.on("open",()=>{clearTimeout(s),this.host=i,t()}),i.on("data",o=>this.deliver(o,"host")),i.on("close",()=>this.onDisconnect())})}send(e,t){var n;if(this.bc){this.bc.postMessage(this.isHost?{type:"msg",to:"*",except:t,m:e}:{type:"msg",to:"host",from:this.localId,m:e});return}if(this.isHost)for(const[i,s]of this.conns)i!==t&&s.open&&s.send(e);else(n=this.host)!=null&&n.open&&this.host.send(e)}sendTo(e,t){if(this.bc){this.bc.postMessage({type:"msg",to:e,m:t});return}const n=this.conns.get(e);n!=null&&n.open&&n.send(t)}close(){var e,t;(e=this.bc)==null||e.close(),(t=this.peer)==null||t.destroy(),this.conns.clear()}}const Yy=["E"],Ky=["Q"],va={Дымок:"#b8c0d0",Милена:"#f0f0f0",Пиксель:"#9ef59e",Карниз:"#ff9a4d",Пломбир:"#9cd8ff",Голубь:"#b5b5ff",Хозяйка:"#ffd0e0"};class Zy{constructor(e,t){if(this.canvas=e,this.scene=new ea,this.cats={},this.party=[],this.players=[],this.count=1,this.save=gc(),this.pigeonProto=null,this.portraits={},this.state="menu",this.time=0,this.clock=new Yu,this.cutCam=new Nt(55,1,.03,600),this.cutTarget={pos:new b,look:new b,speed:2},this.cutLook=new b,this.timers=[],this.skipping=!1,this.shake=0,this.seenCheckpoint="",this.hiddenInBox=null,this.qualityName="high",this.started=!1,this.lastMusic="",this.bossActive=!1,this.delayed=[],this.net=null,this.mode="solo",this.puppets=new Set,this.peerCats=new Map,this.netTimer=0,this.worldTimer=0,this.switchBlend=0,this.renderer=new fv({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=su,this.renderer.toneMapping=Rc,this.renderer.toneMappingExposure=1,this.world=new ey(this.scene),this.ui=new iy(t),this.input=new ry(e),matchMedia("(pointer: coarse)").matches){const n=document.createElement("div");n.className="touch-root",t.appendChild(n),this.input.touch=new oy(n),this.setQuality("low")}addEventListener("resize",()=>this.resize()),e.addEventListener("click",()=>{Me.unlock(),this.state==="play"&&this.input.requestPointerLock()})}get authority(){return this.mode!=="client"}later(e,t){this.delayed.push({t:e,fn:t})}async init(){this.ui.loading("Загружаем котов из Blender…"),this.buildSky(),this.world.build();const e=["dymok","milena","pixel","karniz","plombir"];await Promise.all(e.map(i=>od(i)));for(const i of e){const s=await new Jc(i).load();this.cats[i]=s,this.scene.add(s.root,s.rope)}const t=await new Ku().loadAsync("./models/pigeon.glb");this.pigeonProto=t.scene;for(const i of this.world.pigeons){const s=this.pigeonProto.clone();s.traverse(o=>o.castShadow=!0),s.rotation.y=Math.PI,i.mesh.add(s)}this.karniz=new ty(this.cats.karniz),this.karniz.onTaunt=i=>{var s;this.ui.toast(i,1800),this.mode==="host"&&((s=this.net)==null||s.send({t:"toast",text:i}))},this.cats.karniz.root.position.copy(this.world.karnizSpawn),this.plombir=this.cats.plombir,this.plombir.root.position.copy(this.world.plombirPos),this.plombir.yaw=Math.PI/2,this.plombir.root.rotation.y=Math.PI/2,this.plombir.play("Sit"),this.renderPortraits(),this.post=new Sy(this.renderer,this.scene,this.cutCam);const n=new URLSearchParams(location.search).get("q");(n==="low"||n==="med"||n==="high")&&(this.qualityName=n),this.setQuality(this.qualityName),this.ui.loading(null),this.resize(),this.showMenu(),this.renderer.setAnimationLoop(()=>this.frame())}buildSky(){const e=new xn(400,32,16),t=new bt({side:$t,depthWrite:!1,uniforms:{sunDir:{value:new b(-.6,.18,.75).normalize()}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec3 vDir; uniform vec3 sunDir;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
        float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * n(p); p *= 2.03; a *= 0.5; } return s; }
        void main(){
          float y = vDir.y;
          vec3 top = vec3(0.12,0.16,0.38), mid = vec3(0.85,0.45,0.42), hor = vec3(1.0,0.66,0.38);
          vec3 c = mix(hor, mid, smoothstep(0.0,0.18,y));
          c = mix(c, top, smoothstep(0.15,0.7,y));
          float s = max(dot(vDir, sunDir), 0.0);
          c += vec3(1.0,0.7,0.4) * pow(s, 60.0) * 2.0 + vec3(1.0,0.5,0.3) * pow(s, 6.0) * 0.35;
          // wispy altocumulus lit from below by the low sun
          if (y > 0.02) {
            vec2 uv = vDir.xz / (y + 0.12) * 1.6;
            float cl = smoothstep(0.52, 0.78, fbm(uv + vec2(3.0, 1.0)));
            vec3 lit = mix(vec3(0.95, 0.55, 0.45), vec3(1.0, 0.8, 0.6), s);
            c = mix(c, mix(vec3(0.35, 0.3, 0.42), lit, 0.55 + 0.45 * pow(s, 2.0)), cl * smoothstep(0.02, 0.2, y) * 0.85);
          }
          if (y < 0.0) c = mix(hor*0.6, vec3(0.1,0.08,0.1), smoothstep(0.0,-0.2,y));
          gl_FragColor = vec4(c,1.);
        }`}),n=new Z(e,t);this.scene.add(n);const i=new ac(this.renderer),s=new ea;s.add(new Z(e,t)),this.scene.environment=i.fromScene(s,.02).texture,this.scene.environmentIntensity=.45,this.scene.fog=new Wc(13208176,60,260);const o=new Mh(13227775,3813424,.6);this.scene.add(o);const a=new dc(16766638,3.6);a.position.set(-30,14,36),a.castShadow=!0,a.shadow.mapSize.set(4096,4096);const c=a.shadow.camera;c.left=-16,c.right=16,c.top=16,c.bottom=-16,c.near=1,c.far=120,a.shadow.bias=-4e-4,a.shadow.normalBias=.02,this.scene.add(a,a.target),this.sun=a}renderPortraits(){const t=new qt(256,256,{colorSpace:Mt}),n=new Nt(30,1,.01,10),i=new ea;i.environment=this.scene.environment,i.background=new Se(1974832),i.environmentIntensity=.35,i.add(new Mh(16777215,4473958,.55));const s=new dc(16773344,1.1);s.position.set(1,2,3),i.add(s);const o=new Uint8Array(256*256*4),a=document.createElement("canvas");a.width=a.height=256;const c=a.getContext("2d");for(const l of["dymok","milena","pixel","karniz","plombir"]){const h=this.cats[l],u=h.root.parent,d=h.root.position.clone();i.add(h.root),h.root.position.set(0,0,0),h.root.rotation.y=-.35,h.mixer.update(.01),h.root.updateMatrixWorld(!0);const f=h.headPos;n.position.set(f.x+.12,f.y+.06,f.z+.42),n.lookAt(f.x,f.y+.01,f.z+.03),this.renderer.setRenderTarget(t),this.renderer.render(i,n),this.renderer.readRenderTargetPixels(t,0,0,256,256,o);const p=c.createImageData(256,256);for(let _=0;_<256;_++)p.data.set(o.subarray((255-_)*256*4,(256-_)*256*4),_*256*4);c.putImageData(p,0,0),this.portraits[l]=a.toDataURL("image/png"),u==null||u.add(h.root),h.root.position.copy(d)}this.renderer.setRenderTarget(null),t.dispose()}showMenu(){var n,i;this.state="menu",(n=document.exitPointerLock)==null||n.call(document),this.ui.letterbox(!1),this.ui.showPortraits(!1),this.ui.setupPanels([],[]),this.ui.setObjective(""),this.ui.setArrow(null),this.ui.boss(null),this.menuCam();const e=zh();(i=this.net)==null||i.close(),this.net=null,this.mode="solo",this.puppets.clear(),this.ui.roomBadge(null);const t=new URLSearchParams(location.search).get("room");this.ui.menu(this.portraits,!!e,t,{solo:s=>{Me.unlock(),this.start("solo",s?e:null)},host:()=>{Me.unlock(),this.startHost()},join:s=>{Me.unlock(),this.startClient(s)}}),Me.play("menu")}menuCam(){this.cutTarget.pos.set(-2,1.2,9),this.cutTarget.look.set(5,3.5,-11),this.cutCam.position.copy(this.cutTarget.pos),this.cutLook.copy(this.cutTarget.look)}start(e,t,n="dymok"){this.mode=e,this.save=t??gc(),this.count=1,this.party=[this.cats.dymok,this.cats.milena];const i=e!=="solo"&&[...this.peerCats.values(),n].includes("pixel");i&&this.party.push(this.cats.pixel),this.cats.pixel.root.visible=i,i||this.cats.pixel.root.position.set(0,-50,0);for(const o of this.party)o.health=o.maxHealth,o.state="normal",o.setCostume(this.save.equipped[o.def.id]??null);const s=this.cats[n];this.players=[{idx:0,cat:s,yaw:Math.PI,pitch:.25,dist:1.5,fp:!1,camera:new Nt(60,1,.02,700),rect:{x:0,y:0,w:1,hgt:1},prompt:"",lastLook:0}],this.layoutViewports(),this.world.pickups.forEach(o=>{o.taken=this.save.taken.includes(o.id),o.mesh.visible=!o.taken}),this.applyFlags(),this.ui.setFish(this.save.fish),this.started=!0,!this.save.flags.intro&&e!=="client"?(this.placeAtStart(),this.cutscene("intro")):(this.respawnAll(),this.state="play"),this.refreshPortraits()}applyFlags(){const e=this.save.flags,t=this.world;e.grateOpen?(t.grate.state="open",t.grate.collider.enabled=!1,t.grate.mesh.position.z=-17.2):(t.grate.state="stuck",t.grate.collider.enabled=!0,t.grate.collider.box.min.z=-16.6,t.grate.collider.box.max.z=-15.4,t.grate.mesh.position.z=-16),t.interactables.find(n=>n.id==="latch").enabled=!1,t.interactables.find(n=>n.id==="grate_push").enabled=!e.grateOpen,t.interactables.find(n=>n.id==="coop").enabled=!e.bracelets,t.window.position.y=e.intro?t.windowClosedY:t.windowOpenY,t.rain.visible=!!e.intro&&!e.met,this.karniz.state=e.bossDefeated?"defeated":"inactive",this.cats.karniz.root.position.copy(t.karnizSpawn),e.bossDefeated&&this.cats.karniz.root.position.set(22.6,12.5,-18.6),this.bossActive=!1}placeAtStart(){const e=this.cats.dymok,t=this.cats.milena;e.root.position.copy(this.world.spawn.dymok),e.yaw=Math.PI,t.root.position.copy(this.world.spawn.milenaStreet),this.party.includes(this.cats.pixel)&&this.cats.pixel.root.position.copy(this.world.spawn.pixel)}checkpointFor(e){const t=this.world.checkpoints.find(n=>n.id===this.save.checkpoint);return t?t.pos.clone().add(new b((this.party.indexOf(e)-1)*.5,.05,.3)):e.def.id==="dymok"?this.world.spawn.dymok.clone():e.def.id==="pixel"?this.world.spawn.pixel.clone():this.save.flags.met?new b(0,.05,10):this.world.spawn.milenaBasement.clone()}respawnAll(){for(const e of this.party)e.root.position.copy(this.checkpointFor(e)),e.body.vel.set(0,0,0);this.setupCompanions()}setupCompanions(){const e=new Set(this.players.map(t=>t.cat));for(const t of this.party)e.has(t)||this.puppets.has(t.def.id)||[...this.peerCats.values()].includes(t.def.id)?t.ai="none":t.ai=this.save.flags.met?"follow":"wait"}layoutViewports(){this.ui.setupPanels([{x:0,y:0,w:1,hgt:1}],[this.players[0].cat.def.name]),this.ui.showPortraits(!0),this.resize()}resize(){var e;this.renderer.setSize(innerWidth,innerHeight,!1),this.canvas.style.width="100%",this.canvas.style.height="100%";for(const t of this.players)t.camera.aspect=innerWidth/innerHeight,t.camera.updateProjectionMatrix();this.cutCam.aspect=innerWidth/innerHeight,this.cutCam.updateProjectionMatrix(),(e=this.post)==null||e.setSize(innerWidth,innerHeight)}setQuality(e){var i,s;this.qualityName=e;const t=e==="high"?16:e==="med"?10:6;rd.shells=t;for(const o of Object.values(this.cats))o==null||o.setFurQuality(t);this.renderer.setPixelRatio(e==="low"?1:Math.min(devicePixelRatio,e==="high"?1.5:1.25));const n=e==="high"?4096:2048;this.sun&&this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),(i=this.sun.shadow.map)==null||i.dispose(),this.sun.shadow.map=null),(s=this.post)==null||s.setQuality(e),this.resize()}refreshPortraits(){var i;const e=(i=this.players[0])==null?void 0:i.cat;if(!e)return;const t=this.mode!=="solo",n=this.party.map(s=>({id:s.def.id,name:s.def.name,img:this.portraits[s.def.id],active:s===e,locked:t&&s!==e,order:t?s===e?"вы":this.puppets.has(s.def.id)?"игрок":"ждёт игрока":s===e?"":s.ai==="follow"?"за мной":"ждёт"}));this.ui.setPortraits(n,s=>this.switchTo(this.cats[s]))}switchTo(e){const t=this.players[0];if(!t||e===t.cat)return;if(this.mode!=="solo"){this.ui.toast("В онлайне каждым котом управляет свой игрок.");return}const n=t.cat;n.ai=this.save.flags.met?"follow":"wait",n.body.vel.set(0,n.body.vel.y,0),e.ai="none",e.state=e.state==="scripted"?"normal":e.state,t.cat=e,t.yaw=e.yaw+Math.PI,t.fp=!1,this.switchBlend=1,this.ui.soulFlash(),Me.swapChime(),Me.meow(e.def.pitch,.6),this.ui.toast(`Теперь вы — ${e.def.name}`,1400),this.ui.setupPanels([{x:0,y:0,w:1,hgt:1}],[e.def.name]),this.refreshPortraits()}wait(e){return new Promise(t=>{this.skipping?t():this.timers.push({t:e,res:t})})}async say(e,t,n){this.ui.subtitle(e,t,e?va[e]:"#fff");const i=Object.values(this.cats).find(s=>(s==null?void 0:s.def.name)===e);i&&!this.skipping&&Me.meow(i.def.pitch,.5+Math.min(1,t.length/60)),await this.wait(n??Math.max(1.8,t.length*.055)),this.ui.subtitle(null,null)}shot(e,t,n=!1,i=2){this.cutTarget.pos.copy(e),this.cutTarget.look.copy(t),this.cutTarget.speed=i,(n||this.skipping)&&(this.cutCam.position.copy(e),this.cutLook.copy(t))}async runCutscene(e){var t;this.state="cutscene",this.skipping=!1,(t=document.exitPointerLock)==null||t.call(document),this.ui.letterbox(!0);for(const n of this.party)n.state="scripted";try{await e()}finally{this.ui.subtitle(null,null),this.ui.letterbox(!1),this.skipping=!1,this.timers=[];for(const n of this.party)n.state="normal",n.scriptedTarget=null;this.persist(),this.state="play";for(const n of this.players)n.yaw=n.cat.yaw+Math.PI}}scripts(){return{intro:()=>this.introCutscene(),meet:()=>this.meetCutscene(),grate:()=>this.grateOpenedCutscene(),bossIntro:()=>this.bossIntro(),bossDefeat:()=>this.bossDefeat()}}cutscene(e){var t;return this.mode==="host"&&((t=this.net)==null||t.send({t:"cut",name:e})),this.runCutscene(this.scripts()[e])}walk(e,t,n=1.3){e.scriptedTarget=t.clone(),e.scriptedSpeed=n}async introCutscene(){var c;const e=this.cats.dymok,t=this.cats.milena,n=this.world;Me.play("comedy"),e.root.position.set(8.4,3.62,-11.6),e.yaw=Math.PI/2,n.ball.position.set(8.9,3.69,-11.55),this.shot(new b(11.6,4.3,-8.6),new b(8.8,3.9,-11.5),!0),this.ui.toast("Бруклин. Вечер. Где-то на третьем этаже…",3e3),await this.wait(1.2),await this.say("Дымок","Мяч. Мой любимый жёлто-зелёно-оранжевый мяч. Иди к папочке."),(c=e.actions.Attack)==null||c.reset(),e.play("Attack",.05),Me.swipe();const i=n.ball.position.clone(),s=new b(10.5,3.69,-11.2);for(let l=0;l<=20&&!this.skipping;l++)n.ball.position.lerpVectors(i,s,l/20),n.ball.rotation.z-=.3,await this.wait(.03);n.ball.position.copy(s);const o=this.pigeonProto.clone();o.position.set(10.4,4.54,-10.82),o.rotation.y=-Math.PI/2,this.scene.add(o),Me.coo(),this.shot(new b(9.4,4.3,-9.6),new b(10.2,4.1,-11.2)),await this.say("Голубь","Курлык. (перевод: «Какой пухлый котик»)"),await this.say("Дымок","ЧТО ты сказал?! Я не пухлый. Я ПУШИСТЫЙ!"),this.walk(e,new b(10.1,3.62,-11.4),3),await this.wait(.6);for(let l=0;l<30&&!this.skipping;l++)o.position.add(new b(.12,.08,.1)),await this.wait(.02);this.scene.remove(o),this.shot(new b(10.5,4.2,-9.4),new b(8.8,4.3,-11.8)),await this.wait(.5),n.window.position.y=n.windowClosedY,Me.slam(),this.shake=.5,e.squash=1,await this.wait(.8),e.scriptedTarget=null,e.yaw=Math.PI,await this.say("Дымок","…"),await this.say("Дымок","Так. Спокойно. Я взрослый, самостоятельный кот."),Me.meow(.7,2.2),await this.say("Дымок","ХОЗЯЙКА-А-А! ОТКРО-О-ОЙ!",2.4),await this.say(null,"Хозяйка ушла в магазин. Придётся искать другой вход. Может, через подвал?",3),Me.play("comedy"),this.shot(new b(-.5,1.6,19.5),new b(-3.2,.5,13.4),!0),t.root.position.set(-3,.14,13.4),t.yaw=Math.PI/2,t.model.visible=!1,await this.say("Хозяйка","Осторожно с переноской! Там Милена!");const a=n.carrier.getObjectByName("door");if(a.rotation.y=-.4,Me.clank(),t.model.visible=!0,t.root.position.set(-2.4,.13,13.3),await this.say("Милена","Шумно. Грузовик рычит. Люди топают. Нет, спасибо."),n.rain.visible=!0,this.walk(t,new b(0,.13,12.8),5),await this.wait(.7),this.walk(t,new b(.2,.02,9.5),5),this.shot(new b(3,1.2,8),new b(0,.3,11)),await this.say("Хозяйка","Милена?! Кис-кис-кис!"),await this.say("Милена","…И ещё дождь. Прекрасно. Просто прекрасно. Прячусь в подвал."),t.scriptedTarget=null,this.party.includes(this.cats.pixel)){const l=this.cats.pixel;l.root.position.copy(n.spawn.pixel),l.yaw=0,this.shot(new b(3.4,.9,12.6),new b(2,.3,10.5),!0),await this.say("Пиксель","Я Пиксель, из метро. Двое потерянных котов? Звучит как приключение. Я в деле!")}this.save.flags.intro=!0,this.save.checkpoint="start",n.window.position.y=n.windowClosedY,n.ball.position.copy(s),e.root.position.copy(n.spawn.dymok),e.yaw=0,this.puppets.has("milena")?t.root.position.set(.3,.05,9.8):(t.root.position.copy(n.spawn.milenaBasement),t.yaw=-Math.PI/2),this.setupCompanions(),this.ui.toast("Глава 1 — «Бруклинский двор»",3e3)}async meetCutscene(){const e=this.cats.dymok,t=this.cats.milena;Me.play("tender");const n=e.root.position.clone().lerp(t.root.position,.5);e.yaw=Math.atan2(t.root.position.x-e.root.position.x,t.root.position.z-e.root.position.z),t.yaw=e.yaw+Math.PI;const i=new b(Math.cos(e.yaw),0,-Math.sin(e.yaw));this.shot(n.clone().addScaledVector(i,1.6).add(new b(0,.5,0)),n.clone().add(new b(0,.25,0)),!0),await this.say("Дымок","Ой! Тут кто-то есть. Привет, я Дымок. Сразу скажу: я не толстый, я пушистый."),await this.say("Милена","Я ничего не говорила."),await this.say("Дымок","Ты подумала."),await this.say("Милена","Милена. И я не потерялась. Я… исследую."),await this.say("Дымок","Я тоже! Исследую, как попасть домой."),await this.say("Милена","За той решёткой — грузовой лифт на крышу. С крыши виден весь район."),this.shot(new b(.4,-2,-14.3),new b(-2.15,-2.4,-16),!1,1.5),await this.say("Дымок","Решётка застряла? Отойди-ка. Сейчас будет… мощно."),await this.say("Милена","Если сдвинешь её хоть чуть-чуть — я пролезу и открою защёлку."),this.party.includes(this.cats.pixel)&&await this.say("Пиксель","А я… буду морально поддерживать. Громко."),this.save.flags.met=!0,this.world.rain.visible=!1,this.setupCompanions()}async grateOpenedCutscene(){this.cats.dymok,this.cats.milena,Me.play("comedy"),this.shot(new b(-4.4,-2.2,-13.4),new b(-2.2,-2.7,-16),!0),await this.say("Милена","Щёлк! Готово."),await this.say("Дымок","Мы отличная команда. Ты — ловкая. Я — …"),await this.say("Милена","Пушистый. Я поняла."),this.addFish(20,"Совместное задание"),this.save.flags.grateOpen=!0,this.mode==="solo"&&this.ui.toast("Tab или портрет слева — сменить кота. G — «за мной / жди».",5e3),this.refreshPortraits()}async bossIntro(){var n;const e=this.cats.karniz;Me.play("boss"),e.root.position.copy(this.world.karnizSpawn);const t=this.players[0].cat;e.yaw=Math.atan2(t.root.position.x-e.root.position.x,t.root.position.z-e.root.position.z),(n=e.actions.Hiss)==null||n.reset(),e.play("Hiss"),Me.hiss(),this.shot(e.root.position.clone().add(new b(1.4,.7,1.6)),e.root.position.clone().add(new b(0,.35,0)),!0),await this.say("Карниз","Стоп-стоп-стоп. Это МОЯ крыша. Мои голуби, моя антенна, мой вид на мост."),await this.say(t.def.name,"Мы просто ищем дорогу домой."),await this.say("Карниз","Дорога домой — через меня. Мяу-ха-ха!"),await this.say(null,"Уклоняйся от прыжков (следи за «!»). Бей, когда Карниз выдохся и сидит со звёздочками. Шипение Милены ослепляет его, рывок Дымка бьёт сильнее.",5),this.save.checkpoint="roofB"}async bossDefeat(){const e=this.cats.karniz;Me.play("comedy"),Me.fanfare(),e.play("Sit"),this.shot(e.root.position.clone().add(new b(-1.4,.6,1.2)),e.root.position.clone().add(new b(0,.3,0)),!0),await this.say("Карниз","Ладно-ладно! Сдаюсь! Вы крутые. Особенно толстый."),await this.say("Дымок","ПУШИСТЫЙ!"),await this.say("Карниз","Внизу лавка Пломбира. Скажите, что вы от Карниза — будет скидка на сардины."),await this.say("Милена","А дорогу домой подскажешь?"),await this.say("Карниз","Ваш дом? Хм… С той стороны парка пахнет знакомым кормом. Но это уже другая история."),this.save.flags.bossDefeated=!0,this.addFish(50,"Победа над Карнизом"),e.root.position.set(22.6,12.5,-18.6),this.ui.boss(null),this.bossActive=!1}persist(){this.mode!=="client"&&ay(this.save)}addFish(e,t){this.save.fish+=e,this.ui.setFish(this.save.fish),t&&this.ui.toast(`+${e} 🐟 — ${t}`),Me.fish(),this.persist()}objective(){var n,i;const e=this.save.flags,t=(n=this.players[0])==null?void 0:n.cat.root.position;return!e.met&&((i=this.players[0])==null?void 0:i.cat.def.id)==="milena"?{text:"Милена спряталась от дождя в подвале. Кто-то шумит у лестницы — осмотрись",target:this.cats.dymok.root.position.y<-1?this.cats.dymok.root.position:new b(0,-2.8,-12.8)}:e.met?e.grateOpen?e.bracelets?e.bossDefeated?e.costume?{text:"Свободная прогулка: собирай рыбки и исследуй двор",target:null}:{text:"Загляни в лавку Пломбира и купи костюм",target:new b(-18.6,.5,0)}:{text:"Перелети на соседнюю крышу: держи ПКМ / R, когда рядом светящийся крюк",target:t&&t.x>20?this.cats.karniz.root.position:new b(18,19.6,-16)}:{text:"Поднимитесь на крышу (грузовой лифт или пожарная лестница) и загляните в голубятню",target:t&&t.y<11&&t.y<-.5?new b(-10,-3,-18):new b(7,12.5,-15.8)}:{text:"Решётка: Дымок — рывок (Q) у решётки, Милена — пролезть в щель и открыть защёлку",target:new b(-2.15,-2.5,-16)}:{text:"Найди другой вход домой — спустись в подвал (лестница во дворе)",target:t&&t.y<-1?this.cats.milena.root.position:new b(0,-1,-10.5)}}tryInteract(e){var i,s;const t=this.nearestInteractable(e);if(!t){this.hiddenInBox===e&&this.exitBox();return}const n=this.world;if(!this.authority&&["grate_push","latch","elevator","coop"].includes(t.id)){(i=this.net)==null||i.send({t:"ev",e:"interact",id:t.id,cat:e.def.id});return}switch(t.id){case"shop":this.openShop();break;case"cardboard":this.hiddenInBox===e?this.exitBox():this.hiddenInBox||(this.hiddenInBox=e,e.model.visible=!1,Me.alert(),this.ui.toast(`${e.def.name} в коробке. Идеальная маскировка. Никто ничего не заподозрит.`));break;case"grate_push":this.ui.toast("Решётка застряла намертво. Нужен рывок Дымка (Q)!");break;case"latch":if(n.grate.state==="shifted"){n.grate.state="open",n.grate.collider.enabled=!1,t.enabled=!1,Me.clank();const o=n.grate.mesh,a=o.position.z;let c=0;const l=(h,u)=>{c=Math.min(1,c+u*1.5),o.position.z=a+(-17.2-a)*c};n.animated.push(l),this.save.flags.grateOpen||this.cutscene("grate")}break;case"elevator":{const o=n.elevator;if(o.moving)break;o.target=o.y<4?o.top:o.bottom,o.moving=!0,this.mode==="host"&&((s=this.net)==null||s.send({t:"fx",k:"elevator",target:o.target})),Me.clank(),this.ui.toast("Лифтовая музыка. Коты ненавидят ждать.");break}case"coop":if(!this.save.flags.bracelets){this.save.flags.bracelets=!0,t.enabled=!1,n.coopDoor.rotation.y=-1.8,Me.clank(),Me.coo();for(const o of n.pigeons)o.home.y>10&&this.scarePigeon(o,e.root.position);this.ui.toast("Паутинные браслеты найдены! Держи ПКМ / R рядом со светящимися крюками.",5e3),this.addFish(10),this.save.checkpoint="roofA",this.persist(),this.later(.6,()=>this.ui.subtitle(e.def.name,"Кто-то тут явно пересмотрел кино про пауков.",va[e.def.name])),this.later(4,()=>this.ui.subtitle(null,null))}break}}exitBox(){this.hiddenInBox&&(this.hiddenInBox.model.visible=!0,this.hiddenInBox=null,this.world.cardboard.position.y=.225)}nearestInteractable(e){let t=null,n=1/0;for(const i of this.world.interactables){if(!i.enabled||i.who&&!i.who.includes(e.def.id))continue;const s=i.pos.distanceTo(e.root.position);s<i.radius&&s<n&&Math.abs(i.pos.y-e.root.position.y)<1.5&&(n=s,t=i)}return this.hiddenInBox===e?this.world.interactables.find(i=>i.id==="cardboard"):t}openShop(){var t;this.state="modal",(t=document.exitPointerLock)==null||t.call(document),Me.play("shop"),Me.meow(this.plombir.def.pitch,1);const e=()=>{for(const n of this.party)n.costume!==(this.save.equipped[n.def.id]??null)&&n.setCostume(this.save.equipped[n.def.id]??null)};this.ui.shop({fish:this.save.fish,owned:[...this.save.owned],equipped:{...this.save.equipped},cans:this.save.cans,discount:!!this.save.flags.bossDefeated},{tryOn:(n,i)=>{const s=this.cats[i];s.setCostume((n==null?void 0:n.id)??null),this.ui.toast(`${s.def.name} примеряет ${(n==null?void 0:n.name)??"ничего"}. Смотрится… ${["шикарно","дерзко","по-бруклински","бесценно"][Math.floor(Math.random()*4)]}!`)},buyCostume:n=>{var i;return this.save.fish<n.price?!1:(this.authority||(i=this.net)==null||i.send({t:"ev",e:"buy",kind:"costume",id:n.id}),this.save.fish-=n.price,this.save.owned.push(n.id),this.save.equipped[n.cat]=n.id,this.save.flags.costume=!0,this.cats[n.cat].setCostume(n.id),this.ui.setFish(this.save.fish),Me.fanfare(),this.persist(),!0)},equip:(n,i)=>{this.save.equipped[i]=(n==null?void 0:n.id)??null,this.cats[i].setCostume((n==null?void 0:n.id)??null),this.persist()},buyCans:(n,i)=>{var o;const s=n*i;return this.save.fish<s?!1:(this.authority||(o=this.net)==null||o.send({t:"ev",e:"buy",kind:"cans",qty:n,unit:i}),this.save.fish-=s,this.save.cans+=n,this.ui.setFish(this.save.fish),Me.fish(),this.persist(),!0)},close:()=>{e(),this.ui.closeModal(),this.state="play",this.lastMusic=""}})}scarePigeon(e,t){if(e.flying>0)return;const n=e.mesh.position.clone().sub(t).setY(0).normalize();e.vel.set(n.x*4+(Math.random()-.5)*2,5+Math.random()*2,n.z*4+(Math.random()-.5)*2),e.flying=6+Math.random()*3,Math.random()<.3&&Me.coo()}async debugStep(e,t=[]){t.forEach(i=>this.input.keys.add(i));const n=Math.round(e*30);for(let i=0;i<n;i++){this.frame(1/30,!1);for(let s=0;s<8;s++)await null}t.forEach(i=>this.input.keys.delete(i)),this.frame(1/30,!0)}frame(e,t=!0){var a,c,l;const n=e??Math.min(.05,this.clock.getDelta());this.time+=n,ed.value+=n*2;for(const h of this.world.animated)h(this.time,n);const i=this.players.map((h,u)=>this.input.read(u,1)),s=i[0];if(this.state==="play"&&(s!=null&&s.pressed.has("pause"))?this.openPause():this.state==="modal"&&this.input.wasPressed("Escape")&&((c=(a=this.ui.modal)==null?void 0:a.querySelector("[data-close]"))==null||c.click()),this.state==="cutscene"){(s!=null&&s.pressed.has("skip")||this.input.wasPressed("Space"))&&(this.skipping=!0,this.timers.forEach(h=>h.res()),this.timers=[]);for(const h of[...this.timers])h.t-=n,h.t<=0&&(this.timers.splice(this.timers.indexOf(h),1),h.res());for(const h of this.party)h.update(n,null,0,this.world.physics,[],!1);this.karniz.cat.mixer.update(n)}else(this.state==="play"||(this.state==="paused"||this.state==="modal")&&this.mode!=="solo")&&this.updatePlay(n,this.state==="play"?i:i.map(()=>this.input.idle()));if(this.state!=="cutscene")for(const h of this.puppets)this.cats[h].updateRemote(n);this.netTick(n),this.plombir.mixer.update(n),this.updatePigeons(n),this.updateCars(n),this.updateElevator(n),this.switchBlend=Math.max(0,this.switchBlend-n*1.1);const o=((l=this.players[0])==null?void 0:l.cat.root.position)??new b;this.world.updateRain(n,o),this.sun.target.position.copy(o),this.sun.position.copy(o).add(new b(-30,24,36)),this.updateMusic(),t?this.render(n):this.stepCameras(n),this.input.endFrame()}updatePlay(e,t){var a,c,l;for(const h of[...this.delayed])h.t-=e,h.t<=0&&(this.delayed.splice(this.delayed.indexOf(h),1),h.fn());const n=this.world,i=this.save.flags;for(const h of this.players){const u=t[h.idx],d=h.cat;if(h.yaw-=u.lookX,h.pitch=Qi.clamp(h.pitch+u.lookY,h.fp?-1.2:-.35,1.2),Math.abs(u.lookX)+Math.abs(u.lookY)>1e-4&&(h.lastLook=this.time),!(h.idx===0&&this.input.pointerLocked)&&this.time-h.lastLook>1.2&&d.moving>.5&&!h.fp){let m=d.yaw+Math.PI-h.yaw;m=Math.atan2(Math.sin(m),Math.cos(m)),h.yaw+=m*(1-Math.exp(-1.5*e))}if(u.pressed.has("fp")&&(h.fp=!h.fp),u.pressed.has("switch")&&this.mode==="solo"){const m=this.party.indexOf(d);this.switchTo(this.party[(m+1)%this.party.length])}if(u.pressed.has("command")&&this.mode==="solo"&&i.met){for(const g of this.party)g!==h.cat&&(g.ai=g.ai==="follow"?"wait":"follow");const m=this.party.find(g=>g!==h.cat);this.ui.toast(`${m.def.name}: ${m.ai==="follow"?"«Иду за тобой!»":"«Жду тут. Не забудь меня.»"}`),this.refreshPortraits()}u.pressed.has("interact")&&this.tryInteract(d);const p=h.cat.update(e,u,h.yaw,n.physics,n.anchors,!!i.bracelets);this.hiddenInBox===d&&(n.cardboard.position.set(d.root.position.x,d.root.position.y+.225,d.root.position.z),n.cardboard.rotation.y=d.yaw,d.moving>.3&&Math.random()<e*.3&&this.ui.toast("*коробка подозрительно шуршит*",1500)),p.landed&&p.landed>13&&this.ui.toast("Кошки всегда приземляются на лапы. Почти всегда.",2200),p.attacked&&(this.authority?this.onAttack(d):(a=this.net)==null||a.send({t:"ev",e:"attack",cat:d.def.id})),p.ability&&(this.authority?this.onAbility(d,p.ability):(c=this.net)==null||c.send({t:"ev",e:"ability",kind:p.ability,cat:d.def.id})),h.prompt="";const _=this.nearestInteractable(d);_?h.prompt=`${Yy[h.idx]} — ${_.id==="cardboard"&&this.hiddenInBox===d?"Вылезти из коробки":_.prompt}`:d.state!=="swing"&&i.bracelets&&n.anchors.some(m=>m.distanceTo(d.root.position)<12&&m.y>d.root.position.y+1)&&(h.prompt=`${h.idx===0?"ПКМ / R":h.idx===1?"'":"Num3"} — паутина`),n.hideSpots.some(m=>m.containsPoint(d.root.position.clone().add(new b(0,.1,0))))&&(h.prompt="Ты спрятался под машиной. Тебя никто не видит.")}this.input.wasPressed("KeyH")&&this.eatCan(this.players[0].cat),this.authority&&this.updateCompanions(e);for(const h of n.pickups)h.taken||(h.mesh.rotation.y+=e*2);for(const h of this.party)if(!this.puppets.has(h.def.id)){for(const u of n.pickups)u.taken||(u.mesh.position.y=u.pos.y+Math.sin(this.time*3+u.pos.x)*.04,u.pos.distanceTo(h.root.position.clone().add(new b(0,.2,0)))<.45&&(u.taken=!0,u.mesh.visible=!1,this.authority?(this.save.taken.push(u.id),this.addFish(u.value,u.value>1?"Тайник!":void 0)):(Me.fish(),(l=this.net)==null||l.send({t:"ev",e:"pickup",id:u.id}))));for(const u of n.checkpoints)u.pos.distanceTo(h.root.position)<.7&&this.save.checkpoint!==u.id&&(this.save.checkpoint=u.id,this.party.forEach(d=>d.health=d.maxHealth),this.persist(),this.seenCheckpoint!==u.id&&this.ui.toast(`Лежанка «${u.name}»: прогресс сохранён, здоровье восстановлено`),this.seenCheckpoint=u.id);(h.health<=0||h.root.position.y<-25)&&this.respawn(h)}if(!this.authority){this.ui.boss(this.bossActive?this.karniz.hp:null,this.karniz.maxHp);return}const s=this.cats.dymok,o=this.cats.milena;if(!i.met&&s.root.position.distanceTo(o.root.position)<3&&s.root.position.y<-1&&o.root.position.y<-1){this.cutscene("meet");return}if(!i.bossDefeated&&!this.bossActive&&this.party.some(h=>n.bossArena.containsPoint(h.root.position)&&h.body.grounded)){this.bossActive=!0,this.cutscene("bossIntro").then(()=>this.karniz.start());return}if(this.bossActive){const h=this.players[0].camera;this.karniz.update(e,this.party,n,h),this.ui.boss(this.karniz.hp,this.karniz.maxHp),this.karniz.state==="defeated"&&(this.bossActive=!1,this.cutscene("bossDefeat").then(()=>this.showEndCard()))}else this.karniz.update(e,[],n,this.players[0].camera)}showEndCard(){var e;this.state="modal",(e=document.exitPointerLock)==null||e.call(document),this.ui.endCard(()=>this.state="play")}eatCan(e){if(this.save.cans<=0){this.ui.toast("Консерв нет. Загляни к Пломбиру.");return}if(e.health>=e.maxHealth){this.ui.toast(`${e.def.name} не голоден. Невероятно, но факт.`);return}this.save.cans--,e.health=e.maxHealth,Me.fish(),this.ui.toast(`${e.def.name} съел сардины. Ням! (осталось ${this.save.cans})`),this.persist()}respawn(e){e.health=e.maxHealth,e.releaseSwing(),e.root.position.copy(this.checkpointFor(e)),e.body.vel.set(0,0,0),e.invuln=2,this.ui.toast(`${e.def.name} вернулся на лежанку. Девять жизней — удобная штука.`)}onAttack(e){const t=this.karniz,n=t.cat.root.position;if(this.bossActive){const i=n.clone().sub(e.root.position);i.length()<1&&i.setY(0).normalize().dot(e.forward)>.3&&t.hit(e,1)}for(const i of this.world.pigeons)i.mesh.position.distanceTo(e.root.position)<1.6&&this.scarePigeon(i,e.root.position)}onAbility(e,t){const n=this.world;if(t==="dash"&&(n.grate.state==="stuck"&&e.root.position.distanceTo(new b(-2.15,-3,-16))<2.2&&this.later(.25,()=>{n.grate.state==="stuck"&&(n.grate.state="shifted",n.grate.collider.box.max.z=-15.64,n.grate.mesh.position.z=-16.24,Me.slam(),this.shake=.3,n.interactables.find(i=>i.id==="latch").enabled=!0,n.interactables.find(i=>i.id==="grate_push").enabled=!1,this.ui.toast("БУМ! Решётка сдвинулась. Щель узкая — пролезет только стройный кот.",4e3),this.ui.subtitle("Дымок","Я бы пролез. Просто не хочу.",va.Дымок),this.later(2.5,()=>this.ui.subtitle(null,null)))}),this.bossActive&&e.root.position.distanceTo(this.karniz.cat.root.position)<2.2&&this.later(.2,()=>{e.root.position.distanceTo(this.karniz.cat.root.position)<1.1&&this.karniz.hit(e,2)})),t==="hiss"){this.bossActive&&e.root.position.distanceTo(this.karniz.cat.root.position)<3&&this.karniz.blind();for(const i of n.pigeons)i.mesh.position.distanceTo(e.root.position)<5&&this.scarePigeon(i,e.root.position)}}updateCompanions(e){const t=this.players[0].cat;for(const n of this.party){if(this.players.some(s=>s.cat===n)||this.puppets.has(n.def.id))continue;let i=null;if(n.ai==="follow"){const s=t.root.position.clone().sub(n.root.position),o=s.clone().setY(0),a=o.length();if(s.length()>16&&t.body.grounded)n.root.position.copy(t.root.position).addScaledVector(t.forward,-.8),n.body.vel.set(0,0,0);else if(a>1.4){const c=o.normalize();i={moveX:c.x,moveY:-c.z,lookX:0,lookY:0,run:a>3.5,sneak:t.sneaking,jumpHeld:!1,swingHeld:!1,pressed:new Set};const l=n.moving<.3&&n.body.grounded;(s.y>.3&&a<2.5||l)&&i.pressed.add("jump")}}n.update(e,i,0,this.world.physics,[],!1),(n.root.position.y<-25||n.health<=0)&&this.respawn(n)}}updatePigeons(e){for(const t of this.world.pigeons){if(t.flying>0){t.flying-=e,t.vel.y-=2*e,t.mesh.position.addScaledVector(t.vel,e),t.mesh.rotation.y=Math.atan2(t.vel.x,t.vel.z)+Math.PI,t.mesh.rotation.z=Math.sin(this.time*40)*.3,t.flying<=0&&(t.mesh.position.copy(t.home),t.vel.set(0,0,0),t.mesh.rotation.z=0);continue}if(t.mesh.children[0]&&(t.mesh.children[0].rotation.x=Math.max(0,Math.sin(this.time*5+t.home.x*3))*.5),this.state==="play")for(const n of this.party)n.root.position.distanceTo(t.mesh.position)<(n.moving>3?3:1.2)&&this.hiddenInBox!==n&&this.scarePigeon(t,n.root.position)}}updateCars(e){for(const t of this.world.cars){t.mesh.position.x+=t.speed*e,t.mesh.position.x>60&&(t.mesh.position.x=-60),t.mesh.position.x<-60&&(t.mesh.position.x=60),t.mesh.rotation.y=t.speed>0?0:Math.PI;const n=t.mesh.position;if(t.collider.box.set(new b(n.x-2.1,.05,n.z-.9),new b(n.x+2.1,1.7,n.z+.9)),this.state==="play")for(const i of this.party){const s=i.root.position;Math.abs(s.z-n.z)<1.1&&Math.abs(s.x-n.x)<2.4&&s.y<1&&i.damage(1,new b(n.x-Math.sign(t.speed)*3,0,n.z))&&this.ui.toast("БИ-БИП! Осторожно, дорога!")}}}updateElevator(e){const t=this.world.elevator;if(!t.moving){t.collider.velocity.set(0,0,0);return}const n=Math.sign(t.target-t.y),i=1.8*n,s=t.y+i*e,o=n>0&&s>=t.target||n<0&&s<=t.target,a=o?t.target:s;t.collider.velocity.set(0,o?0:i,0);const c=a-t.y;t.y=a,t.mesh.position.y=a,t.collider.box.min.y+=c,t.collider.box.max.y+=c;for(const l of this.party){const h=l.root.position;h.x>-10.95&&h.x<-9.05&&h.z>-18.95&&h.z<-17.05&&Math.abs(h.y-(t.collider.box.max.y-c))<.15&&(h.y=t.collider.box.max.y+.001,l.body.vel.y=Math.max(0,l.body.vel.y))}o&&(t.moving=!1,Me.clank(),t.y>5&&this.ui.toast("Динь! Крыша. Осторожно, тут ветрено."))}updateMusic(){var t;let e="menu";this.state!=="cutscene"&&(this.state==="menu"?e="menu":this.state==="modal"&&((t=this.ui.modal)!=null&&t.classList.contains("shop"))?e="shop":this.bossActive?e="boss":this.world.elevator.moving?e="shop":this.players[0]&&(e=this.world.regionAt(this.players[0].cat.root.position).music),e!==this.lastMusic&&(this.lastMusic=e,Me.play(e),this.state!=="menu"&&this.ui.track(Me.trackName)))}openPause(){var e;this.state="paused",(e=document.exitPointerLock)==null||e.call(document),this.ui.pause({tracking:this.save.tracking,quality:this.qualityName,music:Me.musicVolume},{resume:()=>{this.ui.closeModal(),this.state="play"},tracking:t=>{this.save.tracking=t,this.persist()},quality:t=>this.setQuality(t),music:t=>Me.setMusicVolume(t),menu:()=>{this.persist(),this.ui.closeModal(),this.showMenu()},reset:()=>{cy(),this.ui.closeModal(),location.reload()}})}async startHost(){const e=new nu,t=qy();this.ui.loading("Создаём комнату…");try{await e.hostRoom(t)}catch(n){this.ui.loading(null),this.ui.toast(String(n.message),5e3),this.showMenu();return}this.ui.loading(null),this.net=e,this.peerCats.clear(),this.puppets.clear(),e.onMessage=(n,i)=>this.onNet(n,i),e.onPeerJoin=n=>this.onPeerJoin(n),e.onPeerLeave=n=>this.onPeerLeave(n),this.start("host",zh(),"dymok"),this.updateRoomBadge(),this.ui.toast(`Комната ${t} создана. Отправьте друзьям ссылку (кнопка слева сверху).`,6e3)}async startClient(e){const t=new nu;this.ui.loading(`Подключаемся к комнате ${e.toUpperCase()}…`);try{await t.joinRoom(e)}catch(n){this.ui.loading(null),this.ui.toast(String(n.message),5e3),this.showMenu();return}this.net=t,t.onMessage=(n,i)=>this.onNet(n,i),t.onDisconnect=()=>{this.ui.toast("Хозяин комнаты отключился.",5e3),this.showMenu()},t.send({t:"hello"})}onPeerJoin(e){}seatPeer(e){var s,o;if(this.peerCats.has(e))return;const t=new Set(this.peerCats.values()),n=["milena","pixel"].find(a=>!t.has(a));if(!n){(s=this.net)==null||s.sendTo(e,{t:"full"});return}this.peerCats.set(e,n),this.puppets.add(n);const i=this.cats[n];i.ai="none",i.damageProxy=(a,c)=>{var l;return(l=this.net)==null?void 0:l.sendTo(e,{t:"dmg",n:a,from:c?c.toArray():null})},n==="pixel"&&!this.party.includes(i)&&(this.party.push(i),i.root.visible=!0,i.root.position.copy(this.world.spawn.pixel)),(o=this.net)==null||o.sendTo(e,{t:"welcome",you:n,save:this.save,roster:[...this.peerCats.values()]}),this.ui.toast(`В игру вошёл игрок: ${i.def.name}`,3e3),Me.meow(i.def.pitch,.8),this.updateRoomBadge(),this.refreshPortraits(),this.sendWorld()}onPeerLeave(e){const t=this.peerCats.get(e);if(!t)return;this.peerCats.delete(e),this.puppets.delete(t);const n=this.cats[t];n.damageProxy=void 0,t==="pixel"?(this.party=this.party.filter(i=>i!==n),n.root.visible=!1):n.ai=this.save.flags.met?"follow":"wait",this.ui.toast(`${n.def.name}: игрок вышел`,3e3),this.updateRoomBadge(),this.refreshPortraits()}updateRoomBadge(){if(!this.net)return this.ui.roomBadge(null);const e=this.mode==="host"?this.peerCats.size+1:this.peerCats.size+2;this.ui.roomBadge(this.net.code,Math.min(3,e))}stateOf(e){const t=e.root.position;return{t:"state",id:e.def.id,p:[+t.x.toFixed(3),+t.y.toFixed(3),+t.z.toFixed(3)],y:+e.yaw.toFixed(3),a:e.current,v:+e.moving.toFixed(2),sn:e.sneaking,hp:e.health,cos:e.costume,vis:e.model.visible,sw:e.anchor?e.anchor.toArray():null}}netTick(e){if(!(!this.net||this.state==="menu")){if(this.netTimer+=e,this.worldTimer+=e,this.netTimer>=.05)if(this.netTimer=0,this.mode==="host")for(const t of[...this.party,this.karniz.cat])this.puppets.has(t.def.id)||this.net.send(this.stateOf(t));else this.players[0]&&this.net.send(this.stateOf(this.players[0].cat));this.mode==="host"&&this.worldTimer>=.25&&this.sendWorld()}}sendWorld(){if(this.mode!=="host"||!this.net)return;this.worldTimer=0;const e=this.world.elevator;this.net.send({t:"world",flags:this.save.flags,fish:this.save.fish,cans:this.save.cans,owned:this.save.owned,taken:this.save.taken,cp:this.save.checkpoint,grate:this.world.grate.state,el:{y:e.y,target:e.target,moving:e.moving},boss:{active:this.bossActive,hp:this.karniz.hp}})}applyGrate(e){const t=this.world.grate;t.state!==e&&(t.state=e,t.collider.enabled=e!=="open",e==="shifted"&&(t.collider.box.max.z=-15.64,t.mesh.position.z=-16.24,Me.slam()),e==="open"&&(t.mesh.position.z=-17.2),this.world.interactables.find(n=>n.id==="latch").enabled=e==="shifted",this.world.interactables.find(n=>n.id==="grate_push").enabled=e==="stuck")}onNet(e,t){var i,s;const n=this.net;if(n)switch(e.t){case"hello":this.mode==="host"&&this.seatPeer(t);break;case"welcome":{const o=e.you,a=e.roster;this.peerCats.clear();for(const c of a)c!==o&&this.peerCats.set(c,c);this.puppets=new Set(["dymok","milena","pixel","karniz"].filter(c=>c!==o&&(c!=="pixel"||a.includes("pixel")))),this.ui.loading(null),this.start("client",e.save,o),this.updateRoomBadge(),this.refreshPortraits(),this.ui.toast(`Вы в комнате ${n.code}. Ваш кот: ${this.cats[o].def.name}`,5e3);break}case"full":this.ui.toast("В комнате уже 3 игрока.",5e3),this.showMenu();break;case"state":{const o=e.id;if(this.mode==="host"&&n.send(e,t),((i=this.players[0])==null?void 0:i.cat.def.id)===o)return;const a=this.cats[o];if(!a)return;this.puppets.add(o),o==="pixel"&&!this.party.includes(a)&&(this.party.push(a),a.root.visible=!0,this.refreshPortraits()),a.pushRemote(e.p,e.y,e.a,e.v,!!e.sn),a.health=e.hp,o!=="karniz"&&(e.cos??null)!==a.costume&&a.setCostume(e.cos??null),a.model.visible=e.vis!==!1,e.sw?(a.rope.geometry.setFromPoints([a.root.position.clone().add(new b(0,.25,0)),new b(...e.sw)]),a.rope.visible=!0):a.rope.visible=!1;break}case"world":{if(this.mode!=="client")return;const o=this.save.fish;Object.assign(this.save,{flags:e.flags,fish:e.fish,cans:e.cans,owned:e.owned,taken:e.taken,checkpoint:e.cp}),o!==this.save.fish&&this.ui.setFish(this.save.fish);for(const u of this.world.pickups)e.taken.includes(u.id)&&!u.taken&&(u.taken=!0,u.mesh.visible=!1);this.applyGrate(e.grate);const a=e.el,c=this.world.elevator;if(!c.moving&&!a.moving&&Math.abs(c.y-a.y)>.05){const u=a.y-c.y;c.y=a.y,c.target=a.target,c.mesh.position.y=a.y,c.collider.box.min.y+=u,c.collider.box.max.y+=u}const l=this.save.flags;this.world.interactables.find(u=>u.id==="coop").enabled=!l.bracelets,this.world.rain.visible=!!l.intro&&!l.met;const h=e.boss;this.bossActive=h.active,this.karniz.hp=h.hp;break}case"fx":e.k==="elevator"&&(this.world.elevator.target=e.target,this.world.elevator.moving=!0,Me.clank());break;case"cut":this.mode==="client"&&this.runCutscene(this.scripts()[e.name]).then(()=>{e.name==="bossDefeat"&&this.showEndCard()});break;case"toast":this.ui.toast(e.text,2200);break;case"dmg":{const o=e.from;(s=this.players[0])==null||s.cat.damage(e.n,o?new b(o[0],o[1],o[2]):void 0);break}case"ev":{if(this.mode!=="host")return;const o=this.cats[this.peerCats.get(t)];if(!o)return;if(e.e==="interact")this.tryInteractId(o,e.id);else if(e.e==="attack")this.onAttack(o);else if(e.e==="ability")this.onAbility(o,e.kind);else if(e.e==="pickup"){const a=this.world.pickups.find(c=>c.id===e.id);a&&!this.save.taken.includes(a.id)&&(a.taken=!0,a.mesh.visible=!1,this.save.taken.push(a.id),this.addFish(a.value,`${o.def.name} нашёл рыбку`))}else if(e.e==="buy"){if(e.kind==="costume"){const a=Hs.find(c=>c.id===e.id);a&&this.save.fish>=a.price&&!this.save.owned.includes(a.id)&&(this.save.fish-=a.price,this.save.owned.push(a.id),this.save.flags.costume=!0)}else{const a=e.qty*e.unit;this.save.fish>=a&&(this.save.fish-=a,this.save.cans+=e.qty)}this.ui.setFish(this.save.fish),this.persist()}this.sendWorld();break}}}tryInteractId(e,t){const n=this.world.interactables.find(i=>i.id===t);!n||!n.enabled||n.pos.distanceTo(e.root.position)>n.radius+.6||this.tryInteract(e)}placeCamera(e,t){const n=e.cat,i=e.camera;if(e.fp){const u=n.headPos;i.position.copy(u).add(new b(0,.03,0)).addScaledVector(n.forward,.06);const d=new b(-Math.sin(e.yaw)*Math.cos(e.pitch),-Math.sin(e.pitch),-Math.cos(e.yaw)*Math.cos(e.pitch));i.lookAt(i.position.clone().add(d));return}const s=n.root.position.clone().add(new b(0,.32,0)),o=new b(Math.sin(e.yaw)*Math.cos(e.pitch),Math.sin(e.pitch),Math.cos(e.yaw)*Math.cos(e.pitch)),a=e.dist+(n.state==="swing"?1.5:0)+Math.min(1,n.moving/5)*.4,c=this.world.physics.raycast(s,o,a+.2,"car"),l=Math.max(.25,Math.min(a,c-.18)),h=s.clone().addScaledVector(o,l);this.switchBlend>0?(h.y+=Math.sin(this.switchBlend*Math.PI)*1.2,i.position.lerp(h,1-Math.exp(-4*t))):(i.position.lerp(h,1-Math.exp(-(l<a?30:12)*t)),i.position.distanceTo(h)>3&&i.position.copy(h)),i.lookAt(s)}stepCameras(e){const t=1-Math.exp(-this.cutTarget.speed*e);this.cutCam.position.lerp(this.cutTarget.pos,t),this.cutLook.lerp(this.cutTarget.look,t);for(const n of this.players)this.placeCamera(n,e)}render(e){if(this.state==="menu"||this.state==="cutscene"||!this.started){if(this.state==="menu"){const s=this.time*.05;this.cutTarget.pos.set(Math.sin(s)*6+1,2.2+Math.sin(s*2)*.5,7+Math.cos(s)*2)}const i=1-Math.exp(-this.cutTarget.speed*e);this.cutCam.position.lerp(this.cutTarget.pos,i),this.cutLook.lerp(this.cutTarget.look,i),this.cutCam.lookAt(this.cutLook),this.shake>0&&(this.shake-=e,this.cutCam.position.add(new b((Math.random()-.5)*this.shake*.2,(Math.random()-.5)*this.shake*.2,0))),this.post.render(this.scene,this.cutCam);return}const t=this.save.tracking?this.objective():{text:this.objective().text,target:null};this.ui.setObjective(t.text);for(const i of this.players){this.placeCamera(i,e),this.shake>0&&i.camera.position.add(new b((Math.random()-.5)*this.shake*.1,(Math.random()-.5)*this.shake*.1,0));const s=i.fp;s&&(i.cat.model.visible=!1),this.post.render(this.scene,i.camera),s&&(i.cat.model.visible=this.hiddenInBox!==i.cat);const o=i.cat,a=o.def.ability==="dash"?"рывок":o.def.ability==="hiss"?"шипение-царапка":"шипение · двойной прыжок";this.ui.updatePanel(i.idx,o.def.name+(o.costume?" ✦":""),o.health,o.maxHealth,i.prompt,`${Ky[i.idx]}: ${a}${this.save.cans?` · H: сардины ×${this.save.cans}`:""}`)}this.shake=Math.max(0,this.shake-e);const n=this.players[0];if(t.target&&n){const i=t.target.clone().sub(n.cat.root.position),s=-Math.sin(n.yaw),o=-Math.cos(n.yaw),a=Math.atan2(s*i.z-o*i.x,s*i.x+o*i.z);this.ui.setArrow(a)}else this.ui.setArrow(null)}}const Jy=document.getElementById("c"),Kd=document.getElementById("ui"),Zd=new Zy(Jy,Kd);Zd.init().catch(r=>{console.error(r),Kd.innerHTML=`<div class="loading"><p>Не удалось запустить игру: ${String((r==null?void 0:r.message)??r)}</p></div>`});window.game=Zd;
