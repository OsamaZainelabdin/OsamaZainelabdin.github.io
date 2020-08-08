package edu.miu;
import java.util.ArrayList;
import java.util.List;

public class Quiz {
    private int CurrentQuestionIndex;
    private int NumCorrect;
    private List<int[]> questions;


    public Quiz() {
        CurrentQuestionIndex = 0;
        NumCorrect = 0;
        questions = new ArrayList<int[]>();
        questions.add(new int[] {1,2,3,4,5,6});
        questions.add(new int[] {0,2,4,6,8,10});
        questions.add(new int[] {3,4,6,9,13,18});
        questions.add(new int[] {1,2,3,5,8,13});
        questions.add(new int[] {1,2,2,4,8,32});
    }

    public int getCurrentQuestionIndex() {
        return CurrentQuestionIndex;
    }

    public void setCurrentQuestionIndex(int currentQuestionIndex) {
        CurrentQuestionIndex = currentQuestionIndex;
    }

    public int getNumQuestions() {
        return questions.size();
    }

    public int getNumCorrect() {
        return NumCorrect;
    }

    public void setNumCorrect(int numCorrect) {
        NumCorrect = numCorrect;
    }

    public List<int[]> getQuestions() {
        return questions;
    }

    public int[] nextList() {
        return this.questions.get(CurrentQuestionIndex);
    }

    public boolean isCorrect(int num) {

        if(this.questions.get(this.CurrentQuestionIndex)[this.questions.get(this.CurrentQuestionIndex).length-1]==num) {
            CurrentQuestionIndex++;
            NumCorrect++;
            return true;
        }
        return false;
    }
}

