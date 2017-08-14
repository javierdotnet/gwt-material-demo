$wnd.gwtmaterialdemo.runAsyncCallback37("function BluePrintPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(885, 59, $intern_57, BluePrintPresenter);\n_.onReveal = function onReveal_59(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Blueprint', 'Basic app layout structure for GMD Applications.', '', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_style_blueprint_BluePrintPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.style.blueprint', 'BluePrintPresenter', 885);\nfunction BluePrintView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_17(new BluePrintView_BinderImpl$Widgets));\n}\n\ndefineClass(1217, 62, $intern_58, BluePrintView);\nvar Lgwt_material_design_demo_client_application_style_blueprint_BluePrintView_2_classLit = createForClass('gwt.material.design.demo.client.application.style.blueprint', 'BluePrintView', 1217);\nfunction $build_f_MaterialPanel1_17(this$static){\n  var f_MaterialPanel1, f_HTMLPanel2, __attachRecord__, f_MaterialRow3, f_MaterialTitle4, f_MaterialImage5;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_14(f_MaterialPanel1, (f_HTMLPanel2 = new HTMLPanel($html1_9(this$static.domId0).html_0) , __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel2.element_0)) , $get_0(this$static.domId0Element) , __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element) , $addAndReplaceElement(f_HTMLPanel2, (f_MaterialRow3 = new MaterialRow , $add_14(f_MaterialRow3, (f_MaterialTitle4 = new MaterialTitle , $setText_13(f_MaterialTitle4.paragraph, 'Here are the basic layers / layout structure of any GMD Applications.') , $setInnerHTML($getElement(f_MaterialTitle4.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Basic'))).html_0)) , f_MaterialTitle4)) , $add_14(f_MaterialRow3, (f_MaterialImage5 = new MaterialImage , $setValue_14(f_MaterialImage5, 'http://i.imgur.com/pHyxYDn.gif', true) , f_MaterialImage5)) , setStyleName(f_MaterialRow3.element_0, 'code', true) , f_MaterialRow3), $get_0(this$static.domId0Element)) , f_HTMLPanel2));\n  return f_MaterialPanel1;\n}\n\nfunction BluePrintView_BinderImpl$Widgets(){\n  var style;\n  style = ($clinit_BluePrintView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_25);\n  $ensureInjected_31(style);\n  this.domId0 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n}\n\ndefineClass(1640, 1, {}, BluePrintView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_style_blueprint_BluePrintView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.style.blueprint', 'BluePrintView_BinderImpl/Widgets', 1640);\nvar style_25;\nfunction $ensureInjected_31(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push_0(toInject, '.BY3IKFC-w-a{height:200px;margin:2%}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction BluePrintView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2221, 1, {}, BluePrintView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_147(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_style_blueprint_BluePrintView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.style.blueprint', 'BluePrintView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 2221);\nfunction $clinit_BluePrintView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_BluePrintView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_25 = new BluePrintView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html1_9(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$blueprint$BluePrintPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$blueprint$BluePrintPresenter$_annotation$$none$$) {\n    result0 = new BluePrintPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$style$blueprint$BluePrintView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$style$blueprint$BluePrintPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$blueprint$BluePrintPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$blueprint$BluePrintPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$style$blueprint$BluePrintView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$blueprint$BluePrintView$_annotation$$none$$) {\n    result = new BluePrintView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$blueprint$BluePrintView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$style$blueprint$BluePrintView$_annotation$$none$$;\n}\n\ndefineClass(805, 1, $intern_109);\n_.onSuccess_0 = function onSuccess_40(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$style$blueprint$BluePrintPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(37);\n\n//# sourceURL=gwtmaterialdemo-37.js\n")
