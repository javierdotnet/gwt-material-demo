$wnd.gwtmaterialdemo.runAsyncCallback7("function gvd(){}\nfunction ivd(){}\nfunction Bvb(){Avb()}\nfunction RXb(a,b){a.o=b}\nfunction WXb(a){this.a=a}\nfunction YXb(a){this.a=a}\nfunction $Xb(a){this.a=a}\nfunction mvd(a){this.a=a}\nfunction ovd(a){this.a=a}\nfunction fvb(a){!!Xub&&pA(Xub,a)}\nfunction Avb(){Avb=ksb;zvb=new wy}\nfunction OXb(a){SXb(a.k,a.o,a.i,a.f)}\nfunction PXb(a){SXb(a.k,a.o,a.i,a.f)}\nfunction evd(a){RXb(a.b,ho(a.a));QXb(a.b)}\nfunction ivb(){if(!_ub){bwb();_ub=true}}\nfunction svd(a){var b;if(!a.d){b=new fvd;a.d=b}return a.d}\nfunction NXb(a){a.k.style[g8e]=h8e+a.e+' '+a.g}\nfunction Zud(a,b,c){eGb();DGb.call(this,a,b,c,(Gmd(),Emd))}\nfunction dvb(a){gvb();ivb();return bvb((Avb(),Avb(),zvb),a)}\nfunction lvd(a){this.a=new mvd(this);this.b=new ovd(this);this.c=a}\nfunction rvd(a){var b,c;if(!a.c){c=new Zud(rDb(lHb(a.a)),(b=svd(a),b),qvd(a));YFb((oHb(a.a),c),kJb(oHb(a.a)));a.c=c}return a.c}\nfunction bwb(){var b=$wnd.onscroll;$wnd.onscroll=LLe(function(a){try{_ub&&fvb((Ws($doc),Ys($doc),new Bvb))}finally{b&&b(a)}})}\nfunction TXb(a){if(a.a){a.k.style[oQe]=k8e+a.j+'ms '+a.b;a.k.style[pQe]=k8e+a.j+'ms '+a.b}else{a.k.style[oQe]='';a.k.style[pQe]=''}}\nfunction fvd(){VGb.call(this);TGb(this,kvd(new lvd(this)));zmd(this.b);Fo(this.b,new gvd,Mz?Mz:(Mz=new wy));Fo(this.b,new ivd,(!Rz&&(Rz=new wy),Rz))}\nfunction MXb(a){$doc.documentElement.style[EOe]=a.p;(jub(),a.sb).style[IOe]=(Wu(),HMe);!a.X&&(a.X=new SYc(a));PYc(a.X);if(a.c){Lo(a);a.c=false}Pz(a,a)}\nfunction UXb(){mOb.call(this,$doc.createElement(DOe),OC(IC(Ipb,1),XOe,2,6,['material-cutout']));this.d=(ntc(),Noc);this.i=10;this.n=0.8;this.a=true;this.b='ease';this.f=false;this.c=false;this.j=500;this.k=$doc.createElement(DOe);js((jub(),this.sb),this.k);this.sb.style[EOe]=(pw(),RNe);this.sb.style[IOe]=(Wu(),HMe)}\nfunction SXb(a,b,c,d){var e,f,g,h,i;h=Vs(b)-(EMb==null&&(EMb=$wnd.$(gNe)),EMb).scrollTop();g=Us(b);i=(b.offsetWidth||0)|0;f=(b.offsetHeight||0)|0;if(d){if(i!=f){e=i-f;if(i>f){f+=e;h-=e/2}else{e=-e;i+=e;g-=e/2}}}h-=c;g-=c;i+=c*2;f+=c*2;$wnd.$(a).css(GOe,h+WNe);$wnd.$(a).css(LNe,g+WNe);$wnd.$(a).css(EMe,i+WNe);$wnd.$(a).css(DMe,f+WNe)}\nfunction Ns(a){var b=a.offsetLeft,c=a.offsetTop;var d=a.offsetWidth,e=a.offsetHeight;if(a.parentNode!=a.offsetParent){b-=a.parentNode.offsetLeft;c-=a.parentNode.offsetTop}var f=a.parentNode;while(f&&f.nodeType==1){b<f.scrollLeft&&(f.scrollLeft=b);b+d>f.scrollLeft+f.clientWidth&&(f.scrollLeft=b+d-f.clientWidth);c<f.scrollTop&&(f.scrollTop=c);c+e>f.scrollTop+f.clientHeight&&(f.scrollTop=c+e-f.clientHeight);var g=f.offsetLeft,h=f.offsetTop;if(f.parentNode!=f.offsetParent){g-=f.parentNode.offsetLeft;h-=f.parentNode.offsetTop}b+=g-f.scrollLeft;c+=h-f.scrollTop;f=f.parentNode}}\nfunction QXb(a){var b,c,d,e,f;c=(jub(),a.sb).style;c[EMe]=(Yw(),'100.0%');c[DMe]='100.0%';c[iNe]=(Ew(),jNe);c[GOe]=FOe;c[LNe]=FOe;c[JOe]='10000';a.k.className='material-cutout-focus';c=a.k.style;c[zSe]=\"''\";c[iNe]=kNe;c[JOe]='-1';if(!a.o){throw Mrb(new $ze('The target element should be set before calling open().'))}Ns(a.o);a.g==null&&(d=new lOb($doc.createElement(DOe)),CNb(d,a.d),e=d.sb.style,e[iNe]=jNe,undefined,e[EMe]='1.0px',undefined,e[DMe]='1.0px',undefined,e[LNe]='-10.0px',undefined,e[GOe]='-10.0px',undefined,e[JOe]='-10000',undefined,f=Ejc(a.d),a.n<1&&QAe(f.substr(0,4),'rgb(')&&(f=VAe(VAe(f,'rgb(','rgba('),')',', '+a.n+')')),a.g=f,undefined);b=$doc.documentElement.style;a.p=b[EOe];b[EOe]=RNe;a.e==null&&(a.e=(EMb==null&&(EMb=$wnd.$(gNe)),EMb).width()+300+WNe);TXb(a);if(a.a){a.k.style[g8e]='0px 0px 0px 0rem '+a.g;zr((sr(),rr),new WXb(a))}else{a.k.style[g8e]=h8e+a.e+' '+a.g}if(a.f){a.k.style[i8e]=n_e;a.k.style[j8e]=n_e}else{a.k.style[i8e]='';a.k.style[j8e]=''}SXb(a.k,a.o,a.i,a.f);ANb(a,cvb(new YXb(a)));ANb(a,dvb(new $Xb(a)));a.sb.style[IOe]='';if(!a.rb){a.c=true;ywb((dBb(),hBb(null)),a)}Uz(a,a)}\nfunction kvd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=new Zec;HMb(b,(c=new V2b,HMb(c,(e=new vfd,zs(ho(e.a),(Dtb(),(new rtb(Etb(yXe))).a)),hA(e,yXe),e)),HMb(c,(f=new Aqe,Jid(f,(g=new oBe,g.a+='\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;',new ltb(g.a)).a),yo((jub(),f.sb),zXe,true),f)),yo(c.sb,OTe,true),c));HMb(b,(d=new V2b,HMb(d,(h=new vfd,Hid(h.b,'Click the icon below to show a material cutout.'),zs(ho(h.a),(new rtb(Etb(m8e))).a),hA(h,m8e),h)),HMb(d,(i=new r9c,p9c(i,(mNc(),_Hc)),LMb(i,a.a),a.c.a=i,i)),HMb(d,(j=new UXb,HMb(j,(k=new vfd,Hid(k.b,'Description of your new Feature'),zs(ho(k.a),(new rtb(Etb(n8e))).a),hA(k,n8e),cOb(k,(ntc(),$sc)),k)),HMb(j,(l=new xTb,CNb(l,$sc),DUb(l.j,UXe),l.j.nb||HMb(l,l.j),cOb(l,Noc),LMb(l,a.b),l)),bOb(j,(uPc(),qPc)),j.n=0.8,j.g=null,j.f=true,a.c.b=j,j)),HMb(d,(m=new Aqe,Jid(m,(n=new oBe,n.a+='\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>',new ltb(n.a)).a),yo(m.sb,zXe,true),m)),HMb(d,(o=new Aqe,Jid(o,(p=new oBe,p.a+='\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }',new ltb(p.a)).a),yo(o.sb,EXe,true),o)),yo(d.sb,OTe,true),d));return b}\nvar g8e='boxShadow',h8e='0px 0px 0px ',i8e='WebkitBorderRadius',j8e='borderRadius',k8e='box-shadow ',l8e='gwt.material.design.addins.client.cutout',m8e='Material Cut Out',n8e='New Feature';var _ub=false;jsb(737,$Ne,{},Bvb);_.ed=function Cvb(a){PXb(yD(a,2917).a)};_.fd=function Dvb(){return zvb};var zvb;var KI=sze(VLe,'Window/ScrollEvent',737);jsb(2213,26,rQe,UXb);_.Pe=function VXb(a){this.d=a;this.g=null};_.a=false;_.c=false;_.f=false;_.i=0;_.j=0;_.n=0;var eN=sze(l8e,'MaterialCutOut',2213);jsb(2214,1,{},WXb);_.Yc=function XXb(){NXb(this.a)};var bN=sze(l8e,'MaterialCutOut/lambda$0$Type',2214);jsb(2215,1,uPe,YXb);_.wd=function ZXb(a){OXb(this.a)};var cN=sze(l8e,'MaterialCutOut/lambda$1$Type',2215);jsb(2216,1,{8:1,2917:1},$Xb);var dN=sze(l8e,'MaterialCutOut/lambda$2$Type',2216);jsb(932,57,VPe,Zud);_.Be=function $ud(){_pe();lGb(this,new bqe('CutOuts','The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.','addins/cutouts/CutOutsView',''))};var k0=sze(VYe,'CutOutsPresenter',932);jsb(1290,65,WPe,fvd);var q0=sze(VYe,'CutOutsView',1290);jsb(1291,1,APe,gvd);_.ud=function hvd(a){Afd(new Dfd(OC(IC(dK,1),kMe,21,0,[])),'Close Event Fired',KQe,null)};var l0=sze(VYe,'CutOutsView/lambda$0$Type',1291);jsb(1292,1,vUe,ivd);_.vd=function jvd(a){Afd(new Dfd(OC(IC(dK,1),kMe,21,0,[])),'Open Event Fired',KQe,null)};var m0=sze(VYe,'CutOutsView/lambda$1$Type',1292);jsb(1806,1,{},lvd);var p0=sze(VYe,'CutOutsView_BinderImpl/Widgets',1806);jsb(1807,1,AQe,mvd);_.ld=function nvd(a){evd(this.a.c)};var n0=sze(VYe,'CutOutsView_BinderImpl/Widgets/1',1807);jsb(1808,1,AQe,ovd);_.ld=function pvd(a){MXb(this.a.c.b)};var o0=sze(VYe,'CutOutsView_BinderImpl/Widgets/2',1808);jsb(773,1,XXe);_.Wc=function yvd(){BKb(this.b,rvd(this.a.a))};LLe(Fq)(7);\n//# sourceURL=gwtmaterialdemo-7.js\n")