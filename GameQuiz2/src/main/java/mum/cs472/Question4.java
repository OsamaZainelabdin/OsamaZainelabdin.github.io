package mum.cs472;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Question4 extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String answer = request.getParameter("answer");
        int answer1 = 0;

        try {
            answer1 = Integer.parseInt(answer.trim());

        } catch (Exception e) {
        }

        if (answer1 == 13) {
            int c = CorrectAnswers.getInstance().correct;
            if (CorrectAnswers.getInstance().tries == 0) {
                c += 10;
            } else if (CorrectAnswers.getInstance().tries == 1) {
                c += 5;
            } else {
                c += 2;
            }
            CorrectAnswers.getInstance().setCorrect(c);
        } else {

            PrintWriter out = response.getWriter();
            System.out.println("test" + CorrectAnswers.getInstance().tries);

            CorrectAnswers.getInstance().setTries(++CorrectAnswers.getInstance().tries);
            if (CorrectAnswers.getInstance().tries != 3) {
                RequestDispatcher dispatcher =
                        request.getRequestDispatcher("Question4.jsp");
                dispatcher.forward(request, response);
            } else {

                request.setAttribute("correctAnswer", "the answer to the previous questions is 13");

            }
        }

        RequestDispatcher dispatcher = request.getRequestDispatcher("Question5.jsp");
        dispatcher.forward(request, response);

        CorrectAnswers.getInstance().setTries(0);
    }

       @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setAttribute("status", "Think of Prime");

        RequestDispatcher dispatcher =
                request.getRequestDispatcher("Question4.jsp");
        dispatcher.forward(request, response);
    }
    @Override
    public String getServletInfo() {
        return "Short description";
    }
}