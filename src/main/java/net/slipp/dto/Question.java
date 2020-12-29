package net.slipp.dto;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Entity
public class Question {

    @Id
    @GeneratedValue
    private Long idx;

    // @ManyToOne을 통해서 User의 PK를 writer의 FK로 설정한다. @JoinColumn을 통해서 해당 FK의 이름을 정해주고 명시해준다.
    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_question_writer"))
    private User writer;

    private String title;

    @Lob  // JPA를 통해서는 Varchar(255)로 제한이 되어있는데 @Lob라는 어노테이션을 추가해주면 더 많은 데이터를 넣을 수 있다.
    private String contents;

    private LocalDateTime createDate;

    @OneToMany(mappedBy = "question")
    @OrderBy("id asc")
    private List<Answer> answer;


    public Question(){
        this.createDate = LocalDateTime.now();
    }

    // LocalDataTime을 패턴화 시켜서 뿌려준다. JSON의 경우는 getter로 되어 있으므로 자동으로 변수 FormattedCreateDate에 할당되어 넘어간다.
    public String getFormattedCreateDate(){
        if(createDate == null){
            return "";
        }
        return createDate.format(DateTimeFormatter.ofPattern("yyyy.MM.dd. HH:mm:ss"));
    }

    public Long getIdx() {
        return idx;
    }

    public void setIdx(Long idx) {
        this.idx = idx;
    }

    public User getWriter() {
        return writer;
    }

    public void setWriter(User writer) {
        this.writer = writer;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public LocalDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(LocalDateTime createDate) {
        this.createDate = createDate;
    }

    public List<Answer> getAnswer() {
        return answer;
    }

    public void setAnswer(List<Answer> answer) {
        this.answer = answer;
    }

    @Override
    public String toString() {
        return "Question{" +
                "idx=" + idx +
                ", writer=" + writer +
                ", title='" + title + '\'' +
                ", contents='" + contents + '\'' +
                ", createDate=" + createDate +
                ", answer=" + answer +
                '}';
    }
}
