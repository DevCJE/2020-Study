package net.slipp.controller;

import net.slipp.dao.UserDao;
import net.slipp.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@SessionAttributes("session")
public class UserController {

    @Autowired
    UserDao userDao;

    /** 회원 가입
     * @RequestBody를 통해서 POST 에서 넘어오는 body 값을 user 객체에 자동으로 바인딩한 후
     * 해당 정보를 USER DB에 Insert 한다. */
    @PostMapping("/user/create")
    public @ResponseBody void create(@RequestBody User user) {
        userDao.save(user);
    }

    /** 회원 로그인
     * 회원 가입과 같은 방식을 거쳐 바인딩한 User 정보를 DB와 대조하여 해당 값이 일치하면
     * @SessionAttributes에 해당 객체를 등록한 후 비밀번호 값은 지운 후 JSON 형식으로 응답.
     * DB와 대조후 맞지 않으면 서버 응답 400(Bad Request)을 주며 돌려보냄 */
    @PostMapping("/user/login")
    public @ResponseBody User login(@RequestBody User user, Model model, HttpSession session, HttpServletResponse response){
        User result = userDao.findByUserIdAndPassword(user.getUserId(),user.getPassword());
        if(result == null){
            HttpUtilsAPI.apiFailed(response);
            return null;
        } else {
            model.addAttribute("session", result); // HttpSession을 패러미터로 받아오지 않으면 오류가 생김.
            result.setPassword(null);
            return result;
        }
    }

    /** 회원 로그아웃
     * @SessionAttributes를 쓰는 경우는 해당 sessionstatus를 통해서 세션 정보를 init 한다. */
    @PostMapping("/user/logout")
    public @ResponseBody void logOut(SessionStatus sessionStatus) {
        sessionStatus.setComplete();
    }

    /** 회원 정보 수정 View & 로그인 세션 확인
     * 로그인이 되어 있는지(HttpSession에 session객체가 등록되어 있는지) 확인 후
     * 등록되어 있으면 해당 session을 보내주고 그렇지 않으면 서버 응답 400(Bad Request)를 주며 돌려보냄 */
    @PostMapping({"/user/edit", "/user/checkLogin"})
    public @ResponseBody User edit(HttpSession session, HttpServletResponse response){
        User user = (User) session.getAttribute("session");
        if(user == null){
            HttpUtilsAPI.apiFailed(response);
        }
        return user;
    }

    /** 회원 정보 수정
     * 먼저 Session에 등록되어 있는 유저 정보를 가져온 후, Form에서 변경된 값만 다시 User 객체에 바인딩 된다.
     * 이후 들어온 Path 주소의 ID값과 Session ID값을 대조후 동일한 값이면 해당 유저가 정보를 바꾸는 것으로 판별하여 보안승인
     * 해당 DB를 Update한 후 변경된 User 정보를 돌려 보낸다. ID값이 다르다면 서버 응답 400(Bad Request)를 주며 돌려보냄 */
    @GetMapping("/user/edit/{id}")
    @Transactional
    public @ResponseBody User update(@PathVariable int id, @ModelAttribute("session")User user, HttpServletResponse response){
        if(user.getId() == id) {
            userDao.save(user);
            return user;
        } else {
            HttpUtilsAPI.apiFailed(response);
            return user;
        }
    }

    /** 회원리스트 */
    @GetMapping("/user/list/getUserList.json")
    public @ResponseBody List<User> getUserList(){
        return userDao.findAll();
    }

}
