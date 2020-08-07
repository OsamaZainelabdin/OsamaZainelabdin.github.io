<%--
  Created by IntelliJ IDEA.
  User: Osama
  Date: 8/6/2020
  Time: 12:13 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Calculator</title>
  <style>
    .text{
      width: 50px;
    }
  </style>

</head>
<body>
<form method="post" action="Calculator">
  <div>
    <input type="text" name="num1" class="text"/>
    <span>+</span>
    <input type="text" name="num2" class="text">
    <span>=</span>
    <input type="text" name="sum" value='<%=request.getAttribute("Sum")%>' class="text"/>
  </div>
  <div>
    <input type="text" name="num3" class="text"/>
    <span>*</span>
    <input type="text" name="num4" class="text"><span>=</span>
    <input type="text" name="mul" value='<%=request.getAttribute("Mul")%>' class="text"/>
  </div>
  <input type="submit" value="submit" >
</form>
</body>
</html>
