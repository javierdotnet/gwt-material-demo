$wnd.gwtmaterialdemo.runAsyncCallback10("function mDd(){}\nfunction oDd(a){this.a=a}\nfunction qDd(a){this.a=a}\nfunction sDd(a){this.a=a}\nfunction uDd(a){this.a=a}\nfunction wDd(a){this.a=a}\nfunction yDd(a){this.a=a}\nfunction ADd(a){this.a=a}\nfunction CDd(a){this.a=a}\nfunction EDd(a){this.a=a}\nfunction y4b(a){this.a=a}\nfunction O3b(a){return w4b(a.a,a.b)}\nfunction T3b(){B3b();I3b.call(this)}\nfunction X3b(){B3b();I3b.call(this)}\nfunction m4b(){B3b();I3b.call(this)}\nfunction q4b(){B3b();I3b.call(this)}\nfunction cDd(a,b,c){_Hb();yIb.call(this,a,b,c,(Frd(),Drd))}\nfunction jDd(){QIb.call(this);OIb(this,kDd(new lDd(this)))}\nfunction IDd(a){var b;if(!a.d){b=new jDd;a.d=b}return a.d}\nfunction S3b(a){i3b(a,DJe($wnd.$(ho(a.G)).cleanVal()),false)}\nfunction l4b(a){i3b(a,cKe(EJe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction p4b(a){i3b(a,nKe(FJe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction W3b(a){i3b(a,new KJe(OJe($wnd.$(ho(a.G)).cleanVal())),false)}\nfunction Q3b(){B3b();I3b.call(this);this.b=ekf;this.a=new y4b(this);P3b(this,this.b)}\nfunction P3b(a,b){var c;a.b=b;c=NKe(NKe(NKe(b.toLowerCase(),'m','0'),'d','0'),'y','0');a.c=c}\nfunction w4b(a,b){if(v4b(a,b)){U2b(a.a);return BB((TB(),VB(b,cC((bC(),bC(),aC)))),ys(ho(a.a.G),u$e))}return null}\nfunction HDd(a){var b,c;if(!a.c){c=new cDd(mFb(gJb(a.a)),(b=IDd(a),b),GDd(a));THb((jJb(a.a),c),hLb(jJb(a.a)));a.c=c}return a.c}\nfunction OJe(a){var b;b=DJe(a);if(b>3.4028234663852886E38){return Infinity}else if(b<-3.4028234663852886E38){return -Infinity}return b}\nfunction lDd(a){this.a=new mDd;this.c=new qDd(this);this.d=new sDd(this);this.e=new uDd(this);this.f=new wDd(this);this.g=new yDd(this);this.i=new ADd(this);this.j=new CDd(this);this.k=new EDd(this);this.b=new oDd(this);this.n=a}\nfunction x4b(a,b,c){return !(IKe(a,'31')&&(IKe(b,'4')||IKe(b,'6')||IKe(b,'9')||IKe(b,'11')||IKe(b,'04')||IKe(b,'06')||IKe(b,'09')))&&(!(IKe(b,'2')||IKe(b,'02'))||(c%4==0?!(IKe(a,'30')||IKe(a,'31')):!(IKe(a,'29')||IKe(a,'30')||IKe(a,'31'))))}\nfunction zKe(){zKe=Ztb;var a;vKe=RC(LC(VD,1),kXe,114,15,[-1,-1,30,19,15,13,11,11,10,9,9,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5]);wKe=NC(VD,kXe,114,37,15,1);xKe=RC(LC(VD,1),kXe,114,15,[-1,-1,63,40,32,28,25,23,21,20,19,19,18,18,17,17,16,16,16,15,15,15,15,14,14,14,14,14,14,13,13,13,13,13,13,13,13]);yKe=NC(WD,nXe,114,37,14,1);for(a=2;a<=36;a++){wKe[a]=SD($wnd.Math.pow(a,vKe[a]));yKe[a]=Dtb({l:kZe,m:kZe,h:524287},wKe[a])}}\nfunction v4b(a,b){var c,d,e,f,g;if(ys(ho(a.a.G),u$e)!=null&&ys(ho(a.a.G),u$e).length!=0&&a.a.c!=null&&b!=null){c=ys(ho(a.a.G),u$e);e=TKe(c,b.indexOf('M'),b.indexOf('M/')+1);d=TKe(c,b.indexOf('d'),b.indexOf('d/')+1);g=TKe(c,b.indexOf('y'),b.lastIndexOf('y')+1);f=x4b(d,e,EJe(g));f||_2b(a.a,'Not a valid date');return _2b(a.a,'Month does not match'),(new RegExp('^(^(0?[1-9]|1[012])$)$')).test(e)&&(_2b(a.a,'Day does not match'),(new RegExp('^((0?[1-9]|[12][0-9]|3[01]))$')).test(d))&&(_2b(a.a,'Year does not match'),(new RegExp('^(^\\\\d{4}$)$')).test(g))&&f}_2b(a.a,'Text input must not be empty or null');return false}\nfunction FJe(a){var b,c,d,e,f,g,h,i,j,k,l;if(a==null){throw ztb(new AKe(GWe))}j=a;f=a.length;i=false;if(f>0){b=(NVe(0,a.length),a.charCodeAt(0));if(b==45||b==43){a=a.substr(1);--f;i=b==45}}if(f==0){throw ztb(new AKe(Vhf+j+'\"'))}while(a.length>0&&(NVe(0,a.length),a.charCodeAt(0)==48)){a=a.substr(1);--f}if(f>(zKe(),xKe)[10]){throw ztb(new AKe(Vhf+j+'\"'))}for(e=0;e<f;e++){if(fJe((NVe(e,a.length),a.charCodeAt(e)))==-1){throw ztb(new AKe(Vhf+j+'\"'))}}l=0;g=vKe[10];k=wKe[10];h=Ktb(yKe[10]);c=true;d=f%g;if(d>0){l=-parseInt(a.substr(0,d),10);a=a.substr(d);f-=d;c=false}while(f>=g){d=parseInt(a.substr(0,g),10);a=a.substr(g);f-=g;if(c){c=false}else{if(Btb(l,h)<0){throw ztb(new AKe(Vhf+j+'\"'))}l=Jtb(l,k)}l=Ltb(l,d)}if(Btb(l,0)>0){throw ztb(new AKe(Vhf+j+'\"'))}if(!i){l=Ktb(l);if(Btb(l,0)<0){throw ztb(new AKe(Vhf+j+'\"'))}}return l}\nfunction kDd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb;b=new mic;EOb(b,(c=new k5b,EOb(c,(k=new ukd,Fs(ho(k.a),(rvb(),(new fvb(svb(gkf))).a)),xA(k,gkf),k)),EOb(c,(l=new kxe,kVb(l.a,tjf),mVb(l.a),(Zvb(),l.tb).style[a7e]=(cx(),j7e),nVb(l.a,'jQuery-Mask-Plugin 1.14.10'),l)),EOb(c,(m=new k5b,EOb(m,(n=new t4b,spc((!n.X&&(n.X=new upc(n)),n.X),o5e),ho(n.G).setAttribute(H0e,'eg: 000-00-0000000'),wnd(n.B).length==0||ro(n.B,Y$e),xnd(n.B,'Phone Number'),(ho(n.G).getAttribute(H0e)||'').length==0||ro(n.B,Y$e),n.c=hkf,n)),EOb(m,(o=new t4b,spc((!o.X&&(o.X=new upc(o)),o.X),o5e),ho(o.G).setAttribute(H0e,'eg: (00) 0000-0000'),wnd(o.B).length==0||ro(o.B,Y$e),xnd(o.B,'Phone with Odd'),(ho(o.G).getAttribute(H0e)||'').length==0||ro(o.B,Y$e),o.c='(00) 0000-0000',o)),EOb(m,(p=new t4b,spc((!p.X&&(p.X=new upc(p)),p.X),o5e),ho(p.G).setAttribute(H0e,'eg: (000) 000-000'),wnd(p.B).length==0||ro(p.B,Y$e),xnd(p.B,'US Phone Number'),(ho(p.G).getAttribute(H0e)||'').length==0||ro(p.B,Y$e),p.c='(000) 000-000',p)),m)),EOb(c,(q=new k5b,EOb(q,(r=new t4b,spc((!r.X&&(r.X=new upc(r)),r.X),o5e),ho(r.G).setAttribute(H0e,'eg: 00000-000'),wnd(r.B).length==0||ro(r.B,Y$e),xnd(r.B,'CEP'),(ho(r.G).getAttribute(H0e)||'').length==0||ro(r.B,Y$e),r.c='00000-000',r)),EOb(q,(s=new t4b,spc((!s.X&&(s.X=new upc(s)),s.X),o5e),ho(s.G).setAttribute(H0e,'eg: 000.000.000-00'),wnd(s.B).length==0||ro(s.B,Y$e),xnd(s.B,'CPF'),(ho(s.G).getAttribute(H0e)||'').length==0||ro(s.B,Y$e),s.c='000.000.000-00',s)),EOb(q,(t=new t4b,spc((!t.X&&(t.X=new upc(t)),t.X),o5e),ho(t.G).setAttribute(H0e,'eg: 000,000,000,000,000.00'),wnd(t.B).length==0||ro(t.B,Y$e),xnd(t.B,'Money'),(ho(t.G).getAttribute(H0e)||'').length==0||ro(t.B,Y$e),t.c='000,000,000,000,000.00',t)),q)),EOb(c,(u=new k5b,EOb(u,(v=new t4b,spc((!v.X&&(v.X=new upc(v)),v.X),o5e),ho(v.G).setAttribute(H0e,ikf),wnd(v.B).length==0||ro(v.B,Y$e),xnd(v.B,jkf),(ho(v.G).getAttribute(H0e)||'').length==0||ro(v.B,Y$e),v.c=kkf,v)),EOb(u,(w=new t4b,spc((!w.X&&(w.X=new upc(w)),w.X),o5e),ho(w.G).setAttribute(H0e,lkf),wnd(w.B).length==0||ro(w.B,Y$e),xnd(w.B,mkf),(ho(w.G).getAttribute(H0e)||'').length==0||ro(w.B,Y$e),w.c=nkf,w)),EOb(u,(A=new t4b,spc((!A.X&&(A.X=new upc(A)),A.X),o5e),ho(A.G).setAttribute(H0e,okf),wnd(A.B).length==0||ro(A.B,Y$e),xnd(A.B,pkf),(ho(A.G).getAttribute(H0e)||'').length==0||ro(A.B,Y$e),A.c=qkf,A)),u)),EOb(c,(B=new vxe,Ind(B,(C=new eLe,C.a+='\\u2003&lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone Number\" placeholder=\"eg: 000-00-0000000\" mask=\"000-00-0000000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Phone with Odd\" placeholder=\"eg: (00) 0000-0000\" mask=\"(00) 0000-0000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"US Phone Number\" placeholder=\"eg: (000) 000-000\" mask=\"(000) 000-000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CEP\" placeholder=\"eg: 00000-000\" mask=\"00000-000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"CPF\" placeholder=\"eg: 000.000.000-00\" mask=\"000.000.000-00\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Money\" placeholder=\"eg: 000,000,000,000,000.00\" mask=\"000,000,000,000,000.00\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br> &lt;m:MaterialRow&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" grid=\"s12 m4 l4\"/&gt;<br> \\u2003&lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" grid=\"s12 m4 l4\"/&gt;<br> &lt;/m:MaterialRow&gt;<br>',new _ub(C.a)).a),zo(B.tb,w6e,true),B)),zo(c.tb,K2e,true),c));EOb(b,(d=new k5b,EOb(d,(D=new ukd,Gnd(D.b,'The mask will be placed from the right to the left if reverse is true (Default : false)'),Fs(ho(D.a),(new fvb(svb('Reverse'))).a),xA(D,'Reverse'),D)),EOb(d,(F=new k5b,EOb(F,(G=new t4b,spc((!G.X&&(G.X=new upc(G)),G.X),o5e),ho(G.G).setAttribute(H0e,ikf),wnd(G.B).length==0||ro(G.B,Y$e),xnd(G.B,jkf),(ho(G.G).getAttribute(H0e)||'').length==0||ro(G.B,Y$e),G.d.reverse=true,G.c=kkf,G)),EOb(F,(H=new t4b,spc((!H.X&&(H.X=new upc(H)),H.X),o5e),ho(H.G).setAttribute(H0e,lkf),wnd(H.B).length==0||ro(H.B,Y$e),xnd(H.B,mkf),(ho(H.G).getAttribute(H0e)||'').length==0||ro(H.B,Y$e),H.d.reverse=true,H.c=nkf,H)),EOb(F,(I=new t4b,spc((!I.X&&(I.X=new upc(I)),I.X),o5e),ho(I.G).setAttribute(H0e,okf),wnd(I.B).length==0||ro(I.B,Y$e),xnd(I.B,pkf),(ho(I.G).getAttribute(H0e)||'').length==0||ro(I.B,Y$e),I.d.reverse=true,I.c=qkf,I)),F)),EOb(d,(J=new vxe,Ind(J,(K=new eLe,K.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" reverse=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new _ub(K.a)).a),zo(J.tb,w6e,true),J)),zo(d.tb,K2e,true),d));EOb(b,(e=new k5b,EOb(e,(L=new ukd,Gnd(L.b,'The textfield will automatically clears whenever the value is not match with the mask provided. (Default : false)'),Fs(ho(L.a),(new fvb(svb(rkf))).a),xA(L,rkf),L)),EOb(e,(M=new k5b,EOb(M,(N=new t4b,spc((!N.X&&(N.X=new upc(N)),N.X),o5e),N.d.clearIfNotMatch=true,ho(N.G).setAttribute(H0e,ikf),wnd(N.B).length==0||ro(N.B,Y$e),xnd(N.B,jkf),(ho(N.G).getAttribute(H0e)||'').length==0||ro(N.B,Y$e),N.c=kkf,N)),EOb(M,(O=new t4b,spc((!O.X&&(O.X=new upc(O)),O.X),o5e),O.d.clearIfNotMatch=true,ho(O.G).setAttribute(H0e,lkf),wnd(O.B).length==0||ro(O.B,Y$e),xnd(O.B,mkf),(ho(O.G).getAttribute(H0e)||'').length==0||ro(O.B,Y$e),O.c=nkf,O)),EOb(M,(P=new t4b,spc((!P.X&&(P.X=new upc(P)),P.X),o5e),P.d.clearIfNotMatch=true,ho(P.G).setAttribute(H0e,okf),wnd(P.B).length==0||ro(P.B,Y$e),xnd(P.B,pkf),(ho(P.G).getAttribute(H0e)||'').length==0||ro(P.B,Y$e),P.c=qkf,P)),M)),EOb(e,(Q=new vxe,Ind(Q,(R=new eLe,R.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" clearIfNotMatch=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new _ub(R.a)).a),zo(Q.tb,w6e,true),Q)),zo(e.tb,K2e,true),e));EOb(b,(f=new k5b,EOb(f,(S=new ukd,Gnd(S.b,'Set whether you want to set on focus on your mask for easy selection.'),Fs(ho(S.a),(new fvb(svb(skf))).a),xA(S,skf),S)),EOb(f,(T=new k5b,EOb(T,(U=new t4b,spc((!U.X&&(U.X=new upc(U)),U.X),o5e),U.d.selectOnFocus=true,ho(U.G).setAttribute(H0e,ikf),wnd(U.B).length==0||ro(U.B,Y$e),xnd(U.B,jkf),(ho(U.G).getAttribute(H0e)||'').length==0||ro(U.B,Y$e),U.c=kkf,U)),EOb(T,(V=new t4b,spc((!V.X&&(V.X=new upc(V)),V.X),o5e),V.d.selectOnFocus=true,ho(V.G).setAttribute(H0e,lkf),wnd(V.B).length==0||ro(V.B,Y$e),xnd(V.B,mkf),(ho(V.G).getAttribute(H0e)||'').length==0||ro(V.B,Y$e),V.c=nkf,V)),EOb(T,(W=new t4b,spc((!W.X&&(W.X=new upc(W)),W.X),o5e),W.d.selectOnFocus=true,ho(W.G).setAttribute(H0e,okf),wnd(W.B).length==0||ro(W.B,Y$e),xnd(W.B,pkf),(ho(W.G).getAttribute(H0e)||'').length==0||ro(W.B,Y$e),W.c=qkf,W)),T)),EOb(f,(X=new vxe,Ind(X,(Y=new eLe,Y.a+='&lt;ma:inputmask.MaterialInputMask label=\"Ip Address\" placeholder=\"eg: 000.000.000.000\" mask=\"000.000.000.000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Percentage\" placeholder=\"eg: 000000.00%\" mask=\"000000.00%\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br> &lt;ma:inputmask.MaterialInputMask label=\"Credit Card\" placeholder=\"eg: 0000 0000 0000 0000\" mask=\"0000 0000 0000 0000\" selectOnFocus=\"true\" grid=\"s12 m4 l4\"/&gt;<br>',new _ub(Y.a)).a),zo(X.tb,w6e,true),X)),zo(f.tb,K2e,true),f));EOb(b,(g=new k5b,EOb(g,(Z=new ukd,Gnd(Z.b,'We supported type safe Input Masks'),Fs(ho(Z.a),(new fvb(svb('Types'))).a),xA(Z,'Types'),Z)),EOb(g,($=new t4b,spc((!$.X&&($.X=new upc($)),$.X),x6e),ho($.G).setAttribute(H0e,'eg. A0A-1A1'),wnd($.B).length==0||ro($.B,Y$e),xnd($.B,iXe),(ho($.G).getAttribute(H0e)||'').length==0||ro($.B,Y$e),$.c='S0S-0S0',S2b($,a.a),$)),EOb(g,(ab=new m4b,spc((!ab.X&&(ab.X=new upc(ab)),ab.X),x6e),xnd(ab.B,'Integer'),(ho(ab.G).getAttribute(H0e)||'').length==0||ro(ab.B,Y$e),ab.c='000-00-000',S2b(ab,a.c),a.n.e=ab,ab)),EOb(g,(bb=new T3b,spc((!bb.X&&(bb.X=new upc(bb)),bb.X),x6e),xnd(bb.B,'Double'),(ho(bb.G).getAttribute(H0e)||'').length==0||ro(bb.B,Y$e),bb.c='000-00-00000',S2b(bb,a.d),a.n.c=bb,bb)),EOb(g,(cb=new X3b,spc((!cb.X&&(cb.X=new upc(cb)),cb.X),x6e),xnd(cb.B,tkf),(ho(cb.G).getAttribute(H0e)||'').length==0||ro(cb.B,Y$e),cb.c='000-00-0000',S2b(cb,a.e),a.n.d=cb,cb)),EOb(g,(db=new q4b,spc((!db.X&&(db.X=new upc(db)),db.X),x6e),xnd(db.B,'Long'),(ho(db.G).getAttribute(H0e)||'').length==0||ro(db.B,Y$e),db.c=hkf,S2b(db,a.f),a.n.f=db,db)),EOb(g,(eb=new Q3b,spc((!eb.X&&(eb.X=new upc(eb)),eb.X),x6e),eb.b=ekf,fb=NKe(NKe(NKe(ekf.toLowerCase(),'m','0'),'d','0'),'y','0'),eb.c=fb,eb.ob?xPb(eb,S2b(eb,new ukc(eb))):xPb(eb,Go(eb,new skc(eb),(!Xz&&(Xz=new Cy),Xz))),xnd(eb.B,jZe),(ho(eb.G).getAttribute(H0e)||'').length==0||ro(eb.B,Y$e),S2b(eb,a.g),a.n.b=eb,eb)),zo(g.tb,K2e,true),g));EOb(b,(h=new k5b,EOb(h,(gb=new ukd,Gnd(gb.b,'Gets the value of the field with the mask.'),Fs(ho(gb.a),(new fvb(svb(L6e))).a),xA(gb,L6e),gb)),EOb(h,(hb=new k5b,EOb(hb,(ib=new t4b,spc((!ib.X&&(ib.X=new upc(ib)),ib.X),o5e),ho(ib.G).setAttribute(H0e,ikf),wnd(ib.B).length==0||ro(ib.B,Y$e),xnd(ib.B,jkf),(ho(ib.G).getAttribute(H0e)||'').length==0||ro(ib.B,Y$e),ib.d.reverse=true,ib.c=kkf,a.n.g=ib,ib)),EOb(hb,(jb=new Lbd,EOb(jb,(kb=new GVb,NWb(kb.k,L6e),kb.k.ob||EOb(kb,kb.k),IOb(kb,a.j),kb)),spc((!jb.X&&(jb.X=new upc(jb)),jb.X),x6e),jb)),hb)),EOb(h,(lb=new vxe,Ind(lb,(mb=new eLe,mb.a+='inputMask.getValue();',new _ub(mb.a)).a),zo(lb.tb,B6e,true),lb)),zo(h.tb,K2e,true),h));EOb(b,(i=new k5b,EOb(i,(nb=new ukd,Gnd(nb.b,'Gets the value of the field without the mask.'),Fs(ho(nb.a),(new fvb(svb(ukf))).a),xA(nb,ukf),nb)),EOb(i,(ob=new k5b,EOb(ob,(pb=new t4b,spc((!pb.X&&(pb.X=new upc(pb)),pb.X),o5e),ho(pb.G).setAttribute(H0e,ikf),wnd(pb.B).length==0||ro(pb.B,Y$e),xnd(pb.B,jkf),(ho(pb.G).getAttribute(H0e)||'').length==0||ro(pb.B,Y$e),pb.d.reverse=true,pb.c=kkf,a.n.a=pb,pb)),EOb(ob,(qb=new Lbd,EOb(qb,(rb=new GVb,NWb(rb.k,ukf),rb.k.ob||EOb(rb,rb.k),IOb(rb,a.i),rb)),spc((!qb.X&&(qb.X=new upc(qb)),qb.X),x6e),qb)),ob)),EOb(i,(sb=new vxe,Ind(sb,(tb=new eLe,tb.a+='inputMask.getCleanValue();',new _ub(tb.a)).a),zo(sb.tb,B6e,true),sb)),zo(i.tb,K2e,true),i));EOb(b,(j=new k5b,EOb(j,(ub=new ukd,Gnd(ub.b,'Programmatically controls the Input Mask main methods.'),Fs(ho(ub.a),(new fvb(svb(vkf))).a),xA(ub,vkf),ub)),EOb(j,(vb=new k5b,EOb(vb,(wb=new t4b,spc((!wb.X&&(wb.X=new upc(wb)),wb.X),o5e),ho(wb.G).setAttribute(H0e,ikf),wnd(wb.B).length==0||ro(wb.B,Y$e),xnd(wb.B,jkf),(ho(wb.G).getAttribute(H0e)||'').length==0||ro(wb.B,Y$e),wb.d.reverse=true,wb.c=kkf,a.n.i=wb,wb)),EOb(vb,(xb=new Lbd,EOb(xb,(yb=new GVb,yb.tb.style[a_e]=K6e,zPb(yb,(zxc(),kxc)),NWb(yb.k,'Unmask'),yb.k.ob||EOb(yb,yb.k),aQb(yb,Zsc),IOb(yb,a.k),yb)),EOb(xb,(zb=new GVb,NWb(zb.k,'mask'),zb.k.ob||EOb(zb,zb.k),IOb(zb,a.b),zb)),spc((!xb.X&&(xb.X=new upc(xb)),xb.X),x6e),xb)),vb)),EOb(j,(Ab=new vxe,Ind(Ab,(Bb=new eLe,Bb.a+='\\u2003inputMask.mask(\"00.00\"); <br> inputMask.unmask();',new _ub(Bb.a)).a),zo(Ab.tb,B6e,true),Ab)),zo(j.tb,K2e,true),j));return b}\nvar ekf='MM/dd/yyyy',gkf='Basic Examples',hkf='000-00-0000000',ikf='eg: 000.000.000.000',jkf='Ip Address',kkf='000.000.000.000',lkf='eg: 000000.00%',mkf='Percentage',nkf='000000.00%',okf='eg: 0000 0000 0000 0000',pkf='Credit Card',qkf='0000 0000 0000 0000',rkf='Clear If not Match',skf='Select on Focus',ukf='Get Clean Value',vkf='Unmask and Mask control';Ytb(2638,320,J0e,Q3b);_.Wd=function R3b(){return w4b(this.a,this.b)};var eO=mJe(fkf,'MaterialDateInputMask',2638);Ytb(2635,320,J0e,T3b);_.Wd=function U3b(){return DJe($wnd.$(ho(this.G)).cleanVal())};_.Xd=function V3b(a){var b;S3b((b=this,TD(a),b))};var fO=mJe(fkf,'MaterialDoubleInputMask',2635);Ytb(2636,320,J0e,X3b);_.Wd=function Y3b(){return new KJe(OJe($wnd.$(ho(this.G)).cleanVal()))};_.Xd=function Z3b(a){var b;W3b((b=this,TD(a),b))};var gO=mJe(fkf,'MaterialFloatInputMask',2636);Ytb(2634,320,J0e,m4b);_.Wd=function n4b(){return cKe(EJe($wnd.$(ho(this.G)).cleanVal()))};_.Xd=function o4b(a){var b;l4b((b=this,TD(a),b))};var jO=mJe(fkf,'MaterialIntegerInputMask',2634);Ytb(2637,320,J0e,q4b);_.Wd=function r4b(){return nKe(FJe($wnd.$(ho(this.G)).cleanVal()))};_.Xd=function s4b(a){var b;p4b((b=this,TD(a),b))};var kO=mJe(fkf,'MaterialLongInputMask',2637);Ytb(2689,1,{},y4b);var mO=mJe('gwt.material.design.addins.client.inputmask.base','DateInputParser',2689);Ytb(969,54,K$e,cDd);_.De=function dDd(){Wwe();gIb(this,new Ywe(uef,'An inputmask helps the user with the input by ensuring a predefined format. This can be useful for dates, numerics, phone numbers etc...','addins/inputmask/InputMask',''))};var d2=mJe(o8e,'InputMaskPresenter',969);Ytb(1365,64,L$e,jDd);var p2=mJe(o8e,'InputMaskView',1365);Ytb(1867,1,{},lDd);var o2=mJe(o8e,'InputMaskView_BinderImpl/Widgets',1867);Ytb(1868,1,n$e,mDd);_.Ad=function nDd(a){Dkd(HD(a.a))};var f2=mJe(o8e,'InputMaskView_BinderImpl/Widgets/1',1868);Ytb(1877,1,q_e,oDd);_.nd=function pDd(a){G3b(this.a.n.i,kkf)};var e2=mJe(o8e,'InputMaskView_BinderImpl/Widgets/10',1877);Ytb(1869,1,n$e,qDd);_.Ad=function rDd(a){Dkd(cKe(EJe($wnd.$(ho(this.a.n.e.G)).cleanVal()))+'')};var g2=mJe(o8e,'InputMaskView_BinderImpl/Widgets/2',1869);Ytb(1870,1,n$e,sDd);_.Ad=function tDd(a){Dkd(''+HJe(DJe($wnd.$(ho(this.a.n.c.G)).cleanVal())))};var h2=mJe(o8e,'InputMaskView_BinderImpl/Widgets/3',1870);Ytb(1871,1,n$e,uDd);_.Ad=function vDd(a){Dkd(''+(new KJe(OJe($wnd.$(ho(this.a.n.d.G)).cleanVal()))).a)};var i2=mJe(o8e,'InputMaskView_BinderImpl/Widgets/4',1871);Ytb(1872,1,n$e,wDd);_.Ad=function xDd(a){Dkd(''+Ptb(nKe(FJe($wnd.$(ho(this.a.n.f.G)).cleanVal())).a))};var j2=mJe(o8e,'InputMaskView_BinderImpl/Widgets/5',1872);Ytb(1873,1,n$e,yDd);_.Ad=function zDd(a){Dkd(xC(O3b(this.a.n.b)))};var k2=mJe(o8e,'InputMaskView_BinderImpl/Widgets/6',1873);Ytb(1874,1,q_e,ADd);_.nd=function BDd(a){Dkd($wnd.$(ho(this.a.n.a.G)).cleanVal())};var l2=mJe(o8e,'InputMaskView_BinderImpl/Widgets/7',1874);Ytb(1875,1,q_e,CDd);_.nd=function DDd(a){Dkd(HD(V2b(this.a.n.g)))};var m2=mJe(o8e,'InputMaskView_BinderImpl/Widgets/8',1875);Ytb(1876,1,q_e,EDd);_.nd=function FDd(a){$wnd.$(ho(this.a.n.i.G)).unmask()};var n2=mJe(o8e,'InputMaskView_BinderImpl/Widgets/9',1876);Ytb(810,1,U6e);_.Yc=function ODd(){yMb(this.b,HDd(this.a.a))};var vKe,wKe,xKe,yKe;var WD=pJe('long','J');$Ve(Iq)(10);\n//# sourceURL=gwtmaterialdemo-10.js\n")