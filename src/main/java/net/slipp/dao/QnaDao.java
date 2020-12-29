package net.slipp.dao;

import net.slipp.dto.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QnaDao extends JpaRepository<Question, Long> {

    Question findByIdx(Long idx);

}
