package net.slipp.dao;

import net.slipp.dto.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Long> {

    // JpaRepository에서는 자신이 찾고자하는 특정 조건이 있다면 findBy 뒤에 해당 User 클래스의
    // 데이터명을 입력하는 형식으로 사용할 수 있으며 두개 이상의 데이터를 찾기 위해서는 and 나 or 절을 사용한다.
    User findByUserIdAndPassword(String userId, String password);

}
