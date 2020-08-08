<%--
  Created by IntelliJ IDEA.
  User: Osama
  Date: 8/7/2020
  Time: 7:16 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"
         import ="edu.miu.Quiz" %>

<!DOCTYPE html>

<html>
<head>		<title>NumberQuiz  </title>
</head>
<body>
<%

  Quiz quiz =(Quiz) request.getAttribute("quiz");
  if(quiz == null)
  {
    quiz = new Quiz();
  }

  boolean win;
  boolean correct;
  if(request.getAttribute("win") == null)
  {
    win = false;
  }
  else {
   win=(boolean) request.getAttribute("win");

  }
   if(request.getAttribute("correct") == null){
     correct=false;
   }else{
     correct = (boolean) request.getAttribute("correct");
   }
  if(!win){
%>
<form action="QuizServlet" method="get">
  <h3>Have fun with NumberQuiz! </h3>
  <p>Your current score is <%=quiz.getNumCorrect()%> / <%=quiz.getQuestions().size()%>.</p>
  <p>Guess the next number in the sequence!</p>
  <p>[

    <%
      for(int i = 0; i <quiz.nextList().length-1; i++) {   %>
    <%=quiz.nextList()[i]%>,

    <% } %>

    <font style='color:red'><b> ? </b></font>]</p>
  <p>Your answer:<input    type='number' name='txtAnswer' value='0' /></p>
  <% if(!correct){ %>
  <p style='color:red'>Your last answer was not correct! Please try again</p>
  <% }  %>
  <p><input type='submit' name='btnNext' value='Next' />
    <input type='submit' name='btnStart' value='Restart!' /></p>
</form>

<%   } else {%>
<h1 style="text-align: center">congratulations, you won !</h1>
<% }%>
</body>
</html>