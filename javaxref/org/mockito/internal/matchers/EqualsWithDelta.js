defineStructure(
"EqualsWithDelta",function(factory){with(factory) { typeTable(["org.hamcrest.Description","it"],["org.mockito.ArgumentMatcher","cl"],["org.mockito.internal.matchers.EqualsWithDelta","cl"],["java.lang.Number","cl"],["java.lang.Object","cl"],["java.lang.String","cl"]),methodTable([2,"EqualsWithDelta",[3,3],"co"],[2,"matches",[4],"me"],[1,"matches",[4],"me"],[3,"doubleValue",[],"me"],[2,"describeTo",[0],"me"],[1,"describeTo",[0],"me"],[0,"appendText",[5],"me"]),localVariableTable(["value","<init>(java.lang.Number,java.lang.Number)-value"],["delta","<init>(java.lang.Number,java.lang.Number)-delta"],["actual","matches(java.lang.Object)-actual"],["actualNumber","matches(java.lang.Object)-actualNumber"],["description","describeTo(org.hamcrest.Description)-description"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockito.internal.matchers;",nl,nl,ip," org.hamcrest.",T(0),";",nl,ip," org.mockito.",T(1),";",nl,nl,nl,C(2,[],$(pu,_,c,_,I("EqualsWithDelta"),_,ex,_,T(1),"&lt;",T(3),">",B(nl,w(4),F(pi,_,f,_,T(3),_,I("wanted"),";"),nl,nl,w(4),F(pi,_,f,_,T(3),_,I("delta"),";"),nl,nl,w(4),M(0,[],[],$(pu," EqualsWithDelta",P(V(0,$(T(3),_,I("value"))),", ",V(1,$(T(3),_,I("delta")))),_,B(nl,w(8),t,".",G(2,"fi","wanted")," = ",W(0),";",nl,w(8),t,".",G(2,"fi","delta")," = ",W(1),";",nl,w(4)))),nl,nl,w(4),M(1,[2],[],$(pu,_,b,_,I("matches"),P(V(2,$(T(4),_,I("actual")))),_,B(nl,w(8),V(3,$(T(3),_,I("actualNumber")," = ",P(T(3)),_,W(2),";")),nl,w(8),r,_,G(2,"fi","wanted"),".",N(3),P()," - ",G(2,"fi","delta"),".",N(3),P()," &lt;= ",W(3),".",N(3),P(),nl,w(16),"&amp;&amp; ",W(3),".",N(3),P()," &lt;= ",G(2,"fi","wanted"),".",N(3),P(),nl,w(24),"+ ",G(2,"fi","delta"),".",N(3),P(),";",nl,w(4)))),nl,nl,w(4),M(4,[5],[],$(pu,_,v,_,I("describeTo"),P(V(4,$(T(0),_,I("description")))),_,B(nl,w(8),W(4),".",N(6),P(L("\"eq(\"")," + ",G(2,"fi","wanted")," + ",L("\", \"")," + ",G(2,"fi","delta")," + ",L("\")\"")),";",nl,w(4)))),nl))),nl);}});