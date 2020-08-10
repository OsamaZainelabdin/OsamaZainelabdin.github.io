package edu.miu;
import java.util.ArrayList;
import java.util.List;

public class Quiz {
    private int CurrentQuestionIndex;
    private int score;
    private List<String> questionsStrings;
    private List<Integer> questionsAnswers;


    public Quiz() {
        CurrentQuestionIndex = 0;
        score = 0;

        questionsStrings = new ArrayList<String>();
        questionsStrings.add("[3, 1, 4, 1, 5, ? ]");
        questionsStrings.add("[1, 1, 2, 3, 5, ? ]");
        questionsStrings.add("[1, 4, 9, 16, 25, ? ]");
        questionsStrings.add("[2, 3, 5, 7, 11, ? ]");
        questionsStrings.add("[1, 2, 4, 8, 16, ? ]");
        questionsStrings.add("");

        questionsAnswers = new ArrayList<Integer>();
        questionsAnswers.add(1);
        questionsAnswers.add(8);
        questionsAnswers.add(36);
        questionsAnswers.add(13);
        questionsAnswers.add(32);
    }

    public int getCurrentQuestionIndex() {
        return CurrentQuestionIndex;
    }

    public int getScore() {
        return this.score;
    }

    public boolean isQuizDone()
    {
        if(this.CurrentQuestionIndex == questionsStrings.size())
            return true;
        return false;
    }
    public boolean isCorrect(int num) {

        if(questionsAnswers.get(this.CurrentQuestionIndex)==num)
        {
            CurrentQuestionIndex++;
            score++;
            return true;
        }
        return false;
    }

    public String getCurrentQuestion() {
        return questionsStrings.get(this.CurrentQuestionIndex);
    }

    public void scoreAnswer() {
    }
}

