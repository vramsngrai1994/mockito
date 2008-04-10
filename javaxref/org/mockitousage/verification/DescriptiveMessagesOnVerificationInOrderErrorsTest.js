defineStructure(
"DescriptiveMessagesOnVerificationInOrderErrorsTest",function(factory){with(factory) { typeTable(["org.mockito.Matchers","cl"],["org.mockito.Mockito","cl"],["org.junit.Before","an"],["org.junit.Ignore","an"],["org.junit.Test","an"],["org.mockito.InOrder","it"],["org.mockito.TestBase","cl"],["org.mockito.exceptions.cause.TooLittleInvocations","cl"],["org.mockito.exceptions.cause.UndesiredInvocation","cl"],["org.mockito.exceptions.cause.WantedAnywhereAfterFollowingInteraction","cl"],["org.mockito.exceptions.verification.ArgumentsAreDifferent","cl"],["org.mockito.exceptions.verification.VerifcationInOrderFailure","cl"],["org.mockito.exceptions.verification.WantedButNotInvoked","cl"],["org.mockitousage.IMethods","it"],["org.mockitousage.verification.DescriptiveMessagesOnVerificationInOrderErrorsTest","cl"],["java.lang.Class","cl"],["java.lang.Object","cl"],["org.mockito.internal.progress.VerificationMode","it"],["junit.framework.Assert","cl"],["java.lang.String","cl"],["java.lang.Throwable","cl"]),methodTable([14,"setup",[],"me"],[1,"mock",[15],"st me"],[13,"simpleMethod",["int"],"me"],[1,"inOrder",["java.lang.Object[]"],"st me"],[14,"shouldPrintVerificationInOrderErrorAndShowBothWantedAndPrevious",[],"me"],[5,"verify",[16],"me"],[5,"verify",[16,17],"me"],[1,"atLeastOnce",[],"st me"],[18,"fail",[],"st me"],[18,"assertEquals",[19,19],"st me"],[20,"getMessage",[],"me"],[18,"assertEquals",[16,16],"st me"],[20,"getCause",[],"me"],[16,"getClass",[],"me"],[14,"shouldPrintVerificationInOrderErrorAndShowWantedOnly",[],"me"],[13,"differentMethod",[],"me"],[14,"shouldPrintVerificationInOrderErrorAndShowWantedAndActual",[],"me"],[14,"shouldPrintMethodThatWasNotInvoked",[],"me"],[1,"times",["int"],"st me"],[14,"shouldPrintTooManyInvocations",[],"me"],[14,"shouldPrintTooLittleInvocations",[],"me"],[1,"anyInt",[],"st me"]),localVariableTable(["e","shouldPrintVerificationInOrderErrorAndShowBothWantedAndPrevious()-e"],["expected","shouldPrintVerificationInOrderErrorAndShowBothWantedAndPrevious()-expected"],["expectedCause","shouldPrintVerificationInOrderErrorAndShowBothWantedAndPrevious()-expectedCause"],["e","shouldPrintVerificationInOrderErrorAndShowWantedOnly()-e"],["expected","shouldPrintVerificationInOrderErrorAndShowWantedOnly()-expected"],["e","shouldPrintVerificationInOrderErrorAndShowWantedAndActual()-e"],["expected","shouldPrintVerificationInOrderErrorAndShowWantedAndActual()-expected"],["e","shouldPrintMethodThatWasNotInvoked()-e"],["actualMessage","shouldPrintMethodThatWasNotInvoked()-actualMessage"],["expectedMessage","shouldPrintMethodThatWasNotInvoked()-expectedMessage"],["e","shouldPrintTooManyInvocations()-e"],["actualMessage","shouldPrintTooManyInvocations()-actualMessage"],["expectedMessage","shouldPrintTooManyInvocations()-expectedMessage"],["expectedCause","shouldPrintTooManyInvocations()-expectedCause"],["e","shouldPrintTooLittleInvocations()-e"],["actualMessage","shouldPrintTooLittleInvocations()-actualMessage"],["expectedMessage","shouldPrintTooLittleInvocations()-expectedMessage"],["expectedCause","shouldPrintTooLittleInvocations()-expectedCause"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockitousage.verification;",nl,nl,ip,_,s," org.mockito.",T(0),".*;",nl,ip,_,s," org.mockito.",T(1),".*;",nl,nl,ip," org.junit.",T(2),";",nl,ip," org.junit.",T(3),";",nl,ip," org.junit.",T(4),";",nl,ip," org.mockito.",T(5),";",nl,ip," org.mockito.",T(1),";",nl,ip," org.mockito.",T(6),";",nl,ip," org.mockito.exceptions.cause.",T(7),";",nl,ip," org.mockito.exceptions.cause.",T(8),";",nl,ip," org.mockito.exceptions.cause.",T(9),";",nl,ip," org.mockito.exceptions.verification.",T(10),";",nl,ip," org.mockito.exceptions.verification.",T(11),";",nl,ip," org.mockito.exceptions.verification.",T(12),";",nl,ip," org.mockitousage.",T(13),";",nl,nl,C(14,[],$(pu,_,c,_,I("DescriptiveMessagesOnVerificationInOrderErrorsTest"),_,ex,_,T(6),_,B(nl,w(4),nl,w(4),F(pi,_,T(13),_,I("one"),";"),nl,w(4),F(pi,_,T(13),_,I("two"),";"),nl,w(4),F(pi,_,T(13),_,I("three"),";"),nl,w(4),F(pi,_,T(5),_,I("inOrder"),";"),nl,nl,w(4),M(0,[],[],$("@",T(2),nl,w(4),pu,_,v,_,I("setup"),P(),_,B(nl,w(8),G(14,"fi","one")," = ",T(1),".",N(1),P(T(13),".",c),";",nl,w(8),G(14,"fi","two")," = ",T(1),".",N(1),P(T(13),".",c),";",nl,w(8),G(14,"fi","three")," = ",T(1),".",N(1),P(T(13),".",c),";",nl,w(8),nl,w(8),G(14,"fi","one"),".",N(2),P(L("1")),";",nl,w(8),G(14,"fi","one"),".",N(2),P(L("11")),";",nl,w(8),G(14,"fi","two"),".",N(2),P(L("2")),";",nl,w(8),G(14,"fi","two"),".",N(2),P(L("2")),";",nl,w(8),G(14,"fi","three"),".",N(2),P(L("3")),";",nl,w(8),nl,w(8),G(14,"fi","inOrder")," = ",N(3),P(G(14,"fi","one"),", ",G(14,"fi","two"),", ",G(14,"fi","three")),";",nl,w(4)))),nl,w(4),nl,w(4),M(4,[],[],$("@",T(4),nl,w(4),pu,_,v,_,I("shouldPrintVerificationInOrderErrorAndShowBothWantedAndPrevious"),P(),_,B(nl,w(8),G(14,"fi","inOrder"),".",N(5),P(G(14,"fi","one")),".",N(2),P(L("1")),";",nl,w(8),G(14,"fi","inOrder"),".",N(6),P(G(14,"fi","two"),", ",N(7),P()),".",N(2),P(L("2")),";",nl,w(8),nl,w(8),tr,_,B(nl,w(12),G(14,"fi","inOrder"),".",N(6),P(G(14,"fi","one"),", ",N(7),P()),".",N(2),P(L("11")),";",nl,w(12),N(8),P(),";",nl,w(8)),_,ct,_,P(V(0,$(T(11),_,I("e")))),_,B(nl,w(12),V(1,$(T(19),_,I("expected")," = ",nl,w(20),"\"\\n\" ",L("+",nl,w(20),"\"Verification in order failure\" +",nl,w(20),"\"\\n\" +",nl,w(20),"\"Wanted but not invoked:\" +",nl,w(20),"\"\\n\" +",nl,w(20),"\"iMethods.simpleMethod(11);\""),";"))," ",nl,w(12),nl,w(12),N(9),P(W(1),", ",W(0),".",N(10),P()),";",nl,w(12),nl,w(12),N(11),P(W(0),".",N(12),P(),".",N(13),P(),", ",T(9),".",c),";",nl,w(12),nl,w(12),V(2,$(T(19),_,I("expectedCause")," = ",nl,w(16),"\"\\n\" ",L("+",nl,w(16),"\"Wanted anywhere AFTER following interaction:\" +",nl,w(16),"\"\\n\" +",nl,w(16),"\"iMethods.simpleMethod(2);\""),";")),nl,w(12),nl,w(12),N(9),P(W(2),", ",W(0),".",N(12),P(),".",N(10),P()),";",nl,w(8)),nl,w(4)))),"  ",nl,w(4),nl,w(4),M(14,[],[],$("@",T(4),nl,w(4),pu,_,v,_,I("shouldPrintVerificationInOrderErrorAndShowWantedOnly"),P(),_,B(nl,w(8),tr,_,B(nl,w(12),G(14,"fi","inOrder"),".",N(5),P(G(14,"fi","one")),".",N(15),P(),";",nl,w(12),N(8),P(),";",nl,w(8)),_,ct,_,P(V(3,$(T(12),_,I("e")))),_,B(nl,w(12),V(4,$(T(19),_,I("expected")," = ",nl,w(20),"\"\\n\" ",L("+",nl,w(20),"\"Wanted but not invoked:\" +",nl,w(20),"\"\\n\" +",nl,w(20),"\"iMethods.differentMethod();\""),";"))," ",nl,w(12),nl,w(12),N(9),P(W(4),", ",W(3),".",N(10),P()),";",nl,w(12),nl,w(12),N(11),P(L("null"),", ",W(3),".",N(12),P()),";",nl,w(8)),nl,w(4))))," ",nl,w(4),nl,w(4),M(16,[],[],$("@",T(3),P(L("\"i don't know how to implement it nicely... yet :)\"")),nl,w(4),"@",T(4),nl,w(4),pu,_,v,_,I("shouldPrintVerificationInOrderErrorAndShowWantedAndActual"),P(),_,B(nl,w(8),tr,_,B(nl,w(12),G(14,"fi","inOrder"),".",N(5),P(G(14,"fi","one")),".",N(2),P(L("999")),";",nl,w(12),N(8),P(),";",nl,w(8)),_,ct,_,P(V(5,$(T(10),_,I("e")))),_,B(nl,w(12),V(6,$(T(19),_,I("expected")," = ",nl,w(20),"\"\\n\" ",L("+",nl,w(20),"\"Arguments are different!\" +",nl,w(20),"\"\\n\" +",nl,w(20),"\"IMethods.simpleMethod(999);\""),";"))," ",nl,w(12),nl,w(12),N(9),P(W(6),", ",W(5),".",N(10),P()),";",nl,w(12),nl,w(12),N(11),P(L("null"),", ",W(5),".",N(12),P()),";",nl,w(8)),nl,w(4))))," ",nl,w(4),nl,w(4),M(17,[],[],$("@",T(4),nl,w(4),pu,_,v,_,I("shouldPrintMethodThatWasNotInvoked"),P(),_,B(nl,w(8),G(14,"fi","inOrder"),".",N(5),P(G(14,"fi","one")),".",N(2),P(L("1")),";",nl,w(8),G(14,"fi","inOrder"),".",N(5),P(G(14,"fi","one")),".",N(2),P(L("11")),";",nl,w(8),G(14,"fi","inOrder"),".",N(6),P(G(14,"fi","two"),", ",N(18),P(L("2"))),".",N(2),P(L("2")),";",nl,w(8),G(14,"fi","inOrder"),".",N(5),P(G(14,"fi","three")),".",N(2),P(L("3")),";",nl,w(8),tr,_,B(nl,w(12),G(14,"fi","inOrder"),".",N(5),P(G(14,"fi","three")),".",N(2),P(L("999")),";",nl,w(12),N(8),P(),";",nl,w(8)),_,ct,_,P(V(7,$(T(11),_,I("e")))),_,B(nl,w(12),V(8,$(T(19),_,I("actualMessage")," = ",W(7),".",N(10),P(),";")),nl,w(12),V(9,$(T(19),_,I("expectedMessage")," = ",nl,w(20),"\"\\n\" ",L("+",nl,w(20),"\"Verification in order failure\" +",nl,w(20),"\"\\n\" +",nl,w(20),"\"Wanted but not invoked:\" +",nl,w(20),"\"\\n\" +",nl,w(20),"\"iMethods.simpleMethod(999);\""),";"))," ",nl,w(12),N(9),P(W(9),", ",W(8)),";",w(5),nl,w(8)),nl,w(4)))),"   ",nl,w(4),nl,w(4),M(19,[],[],$("@",T(4),nl,w(4),pu,_,v,_,I("shouldPrintTooManyInvocations"),P(),_,B(nl,w(8),G(14,"fi","inOrder"),".",N(5),P(G(14,"fi","one")),".",N(2),P(L("1")),";",nl,w(8),G(14,"fi","inOrder"),".",N(5),P(G(14,"fi","one")),".",N(2),P(L("11")),";",nl,w(8),tr,_,B(nl,w(12),G(14,"fi","inOrder"),".",N(6),P(G(14,"fi","two"),", ",N(18),P(L("1"))),".",N(2),P(L("2")),";",nl,w(12),N(8),P(),";",nl,w(8)),_,ct,_,P(V(10,$(T(11),_,I("e")))),_,B(nl,w(12),V(11,$(T(19),_,I("actualMessage")," = ",W(10),".",N(10),P(),";")),nl,w(12),V(12,$(T(19),_,I("expectedMessage")," = ",nl,w(20),"\"\\n\" ",L("+",nl,w(20),"\"Verification in order failure\" +",nl,w(20),"\"\\n\" +",nl,w(20),"\"iMethods.simpleMethod(2);\" +",nl,w(20),"\"\\n\" +",nl,w(20),"\"Wanted 1 time but was 2\""),";"))," ",nl,w(12),N(9),P(W(12),", ",W(11)),";",w(6),nl,w(12),nl,w(12),N(11),P(T(8),".",c,", ",W(10),".",N(12),P(),".",N(13),P()),";",nl,nl,w(12),V(13,$(T(19),_,I("expectedCause")," =",nl,w(16),"\"\\n\" ",L("+",nl,w(16),"\"Undesired invocation:\""),";")),nl,w(12),N(9),P(W(13),", ",W(10),".",N(12),P(),".",N(10),P()),";",nl,w(8)),nl,w(4)))),"  ",nl,w(4),nl,w(4),M(20,[],[],$("@",T(4),nl,w(4),pu,_,v,_,I("shouldPrintTooLittleInvocations"),P(),_,B(nl,w(8),G(14,"fi","two"),".",N(2),P(L("2")),";",nl,w(8),nl,w(8),G(14,"fi","inOrder"),".",N(6),P(G(14,"fi","one"),", ",N(7),P()),".",N(2),P(N(21),P()),";",nl,w(8),G(14,"fi","inOrder"),".",N(6),P(G(14,"fi","two"),", ",N(18),P(L("2"))),".",N(2),P(L("2")),";",nl,w(8),G(14,"fi","inOrder"),".",N(6),P(G(14,"fi","three"),", ",N(7),P()),".",N(2),P(L("3")),";",nl,w(8),nl,w(8),tr,_,B(nl,w(12),G(14,"fi","inOrder"),".",N(6),P(G(14,"fi","two"),", ",N(18),P(L("2"))),".",N(2),P(L("2")),";",nl,w(12),N(8),P(),";",nl,w(8)),_,ct,_,P(V(14,$(T(11),_,I("e")))),_,B(nl,w(12),V(15,$(T(19),_,I("actualMessage")," = ",W(14),".",N(10),P(),";")),nl,w(12),V(16,$(T(19),_,I("expectedMessage")," = ",nl,w(20),"\"\\n\" ",L("+",nl,w(20),"\"Verification in order failure\" +",nl,w(20),"\"\\n\" +",nl,w(20),"\"iMethods.simpleMethod(2);\" +",nl,w(20),"\"\\n\" +",nl,w(20),"\"Wanted 2 times but was 1\""),";")),nl,w(12),N(9),P(W(16),", ",W(15)),";",nl,w(12),nl,w(12),N(11),P(W(14),".",N(12),P(),".",N(13),P(),", ",T(7),".",c),";",nl,w(12),nl,w(12),V(17,$(T(19),_,I("expectedCause")," = ",nl,w(16),"\"\\n\" ",L("+",nl,w(16),"\"Too little invocations:\""),";")),nl,w(12),nl,w(12),N(9),P(W(17),", ",W(14),".",N(12),P(),".",N(10),P()),";",nl,w(8)),nl,w(4)))),"   ",nl))));}});