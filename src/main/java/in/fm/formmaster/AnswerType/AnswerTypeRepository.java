package in.fm.formmaster.AnswerType;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnswerTypeRepository extends JpaRepository<AnswerType, Long> {
    Optional<AnswerType> findById(Long id);
    boolean existsByAnswerTypename(String answerTypename);
    List<AnswerType>findByActiveNot(Integer active);
}
