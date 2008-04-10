defineStructure(
"AtLeastOnceVerificationTest",function(factory){with(factory) { typeTable(["org.mockito.Mockito","cl"],["java.util.List","it"],["org.junit.Before","an"],["org.junit.Test","an"],["org.mockito.TestBase","cl"],["org.mockito.exceptions.verification.WantedButNotInvoked","cl"],["org.mockitousage.verification.AtLeastOnceVerificationTest","cl"],["java.lang.SuppressWarnings","an"],["java.lang.Class","cl"],["java.lang.Exception","cl"],["java.lang.Object","cl"],["org.mockito.internal.progress.VerificationMode","it"],["junit.framework.Assert","cl"]),methodTable([6,"setup",[],"me"],[0,"mock",[8],"st me"],[6,"shouldVerifyAtLeastOnce",[],"me"],[1,"clear",[],"me"],[1,"add",[10],"me"],[0,"verify",[10,11],"st me"],[0,"atLeastOnce",[],"st me"],[12,"fail",[],"st me"],[6,"shouldFailIfMethodWasNotCalledAtAll",[],"me"]),localVariableTable(["e","shouldVerifyAtLeastOnce()-e"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockitousage.verification;",nl,nl,ip,_,s," org.mockito.",T(0),".*;",nl,nl,ip," java.util.",T(1),";",nl,nl,ip," org.junit.",T(2),";",nl,ip," org.junit.",T(3),";",nl,ip," org.mockito.",T(0),";",nl,ip," org.mockito.",T(4),";",nl,ip," org.mockito.exceptions.verification.",T(5),";",nl,nl,C(6,[],$("@",T(7),P(L("\"unchecked\"")),nl,pu,_,c,_,I("AtLeastOnceVerificationTest"),_,ex,_,T(4),_,B(nl,nl,w(4),F(pi,_,T(1),_,I("mock"),";"),nl,w(4),F(pi,_,T(1),_,I("mockTwo"),";"),nl,w(4),nl,w(4),M(0,[],[],$("@",T(2),_,pu,_,v,_,I("setup"),P(),_,B(nl,w(8),G(6,"fi","mock")," = ",T(0),".",N(1),P(T(1),".",c),";",nl,w(8),G(6,"fi","mockTwo")," = ",T(0),".",N(1),P(T(1),".",c),";",nl,w(4)))),nl,nl,w(4),M(2,[],[],$("@",T(3),nl,w(4),pu,_,v,_,I("shouldVerifyAtLeastOnce"),P(),_,ts,_,T(9),_,B(nl,w(8),G(6,"fi","mock"),".",N(3),P(),";",nl,w(8),G(6,"fi","mock"),".",N(3),P(),";",nl,w(8),nl,w(8),G(6,"fi","mockTwo"),".",N(4),P(L("\"add\"")),";",nl,nl,w(8),N(5),P(G(6,"fi","mock"),", ",N(6),P()),".",N(3),P(),";",nl,w(8),N(5),P(G(6,"fi","mockTwo"),", ",N(6),P()),".",N(4),P(L("\"add\"")),";",nl,w(8),tr,_,B(nl,w(12),N(5),P(G(6,"fi","mockTwo"),", ",N(6),P()),".",N(4),P(L("\"foo\"")),";",nl,w(12),N(7),P(),";",nl,w(8)),_,ct,_,P(V(0,$(T(5),_,I("e")))),_,B(),nl,w(4)))),nl,w(4),nl,w(4),M(8,[],[],$("@",T(3),P("expected=",T(5),".",c),nl,w(4),pu,_,v,_,I("shouldFailIfMethodWasNotCalledAtAll"),P(),_,ts,_,T(9),_,B(nl,w(8),N(5),P(G(6,"fi","mock"),", ",N(6),P()),".",N(4),P(L("\"foo\"")),";",nl,w(4)))),nl))),nl);}});