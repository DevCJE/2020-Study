package net.slipp.controller;

import net.slipp.dao.QnaDao;
import net.slipp.dto.Question;
import net.slipp.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
public class QnaController {

    @Autowired
    QnaDao qnaDao;

    /** Qna 등록 */
    @PostMapping("/qna/form")
    public @ResponseBody Long qnaForm(@RequestBody Question question, HttpServletResponse response, HttpSession session){
                if(session.getAttribute("session")==null){
                    HttpUtilsAPI.apiFailed(response);
                    return null;
                } else {
                    User user = (User) session.getAttribute("session");
                    question.setWriter(user);
                    Question result = qnaDao.save(question);
                    return result.getIdx();
                }
    }

    /** Qna 가져오기 */
    @PostMapping("/qna/show/{idx}")
    public @ResponseBody Question qnaShow(@PathVariable Long idx, HttpServletResponse response){
        Question question = qnaDao.findByIdx(idx);

        if(question == null){
            HttpUtilsAPI.apiFailed(response);
            return null;
        }

        System.out.println("question : " + question);
        return question;
    }

    /** Qna 지우기 */
    @PostMapping("/qna/delete/{idx}")
    public @ResponseBody void qnaDelete(@PathVariable Long idx){
        qnaDao.deleteById(idx);
    }
}
