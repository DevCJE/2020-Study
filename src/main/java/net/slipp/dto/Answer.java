package net.slipp.dto;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
public class Answer {


    @Id
    @GeneratedValue
    private Long idx;

    // @ManyToOne을 통해서 User의 PK를 writer의 FK로 설정한다. @JoinColumn을 통해서 해당 FK의 이름을 정해주고 명시해준다.
    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_answer_writer"))
    private User writer;

    @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "fk_answer_to_question"))
    private Question question;

    @Lob  // JPA를 통해서는 Varchar(255)로 제한이 되어있는데 @Lob라는 어노테이션을 추가해주면 더 많은 데이터를 넣을 수 있다.
    private String contents;

    private LocalDateTime createDate;

    public String getFormattedCreateDate(){
        if(createDate == null){
            return "";
        }
        return createDate.format(DateTimeFormatter.ofPattern("yyyy.MM.dd. HH:mm:ss"));
    }

}
