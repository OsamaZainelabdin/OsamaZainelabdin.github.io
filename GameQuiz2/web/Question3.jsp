<%--
  Created by IntelliJ IDEA.
  User: Osama
  Date: 8/9/2020
  Time: 9:18 PM
  To change this template use File | Settings | File Templates.
--%>
<%@page import="mum.cs472.CorrectAnswers"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<h1>The number Quiz</h1>
<p>your current score is <%= CorrectAnswers.getInstance().getCorrect() %></p>
<p>Guess the next number in sequence</p>
<p>1, 4, 9, 16, 25</p>
<form method='post' action='Question3' >
    your answer: <input type="text" name="answer" size="20">
    <br>
    <input type="submit">
</form>

<%
    session.setAttribute("status", "");
%>
<form method="get" action='Question3'>

    <input type="submit" name="hint" value="Hint">
</form>

<p>${status}</p>
</body>
</html>
