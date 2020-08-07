package edu.miu;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = {"/Calculator"})
public class CalculatorServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String num1 = request.getParameter("num1");
        String num2 = request.getParameter("num2");
        String num3 = request.getParameter("num3");
        String num4 = request.getParameter("num4");
        double sum = 0;
        double mul =0;
        if(num1 != "" && num2 != "" ) {
            sum = Double.parseDouble(num1) + Double.parseDouble(num2);
        }
        if(num3 != "" && num4 != "" ){
            mul = Double.parseDouble(num3) * Double.parseDouble(num4) ;
        }
        request.setAttribute("Sum",sum);
        request.setAttribute("Mul",mul);
        RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
        rd.include(request, response);
        out.close();
    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
