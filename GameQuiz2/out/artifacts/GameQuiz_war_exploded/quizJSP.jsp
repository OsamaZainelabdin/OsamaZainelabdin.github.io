<%--
  Created by IntelliJ IDEA.
  User: Osama
  Date: 8/9/2020
  Time: 4:50 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" import ="edu.miu.Quiz"%>
<html>
<head>
    <title>Number Quiz</title>
    <script>
        function showError(status) {
            if(status){
                document.getElementById("divError").style.display = "visible";
            }
            else
                document.getElementById("divError").style.display = "hidden";
        }
    </script>
</head>
<body>

<form action="QuizServlet" method="post">
<h1>Have fun with NumberQuiz!
</h1>
<p>Your current score is <span><%=request.getAttribute("score")%></span></p>
<p>Guess the next number in the sequence!</p>
    <p><%=request.getAttribute("question")%></p>
<p>Your answer:<input  type='number' name='txtAnswer' value='0' />
</p>
    <div id="divError" style='color:red' >Your last answer was not correct! Please try again</div>
<p><input type='submit' name='btnNext' value='Next' />
    <input type='submit' name='btnStart' value='Restart!' /></p>

</form>

</body>
</html>
