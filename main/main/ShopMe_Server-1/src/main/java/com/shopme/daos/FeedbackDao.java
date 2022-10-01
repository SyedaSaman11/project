package com.shopme.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.shopme.entities.Feedback;

public interface FeedbackDao extends JpaRepository<Feedback, Integer>{

	Feedback findByRating(Feedback newFeedback);
	Feedback save(Feedback feedback);
	
	@Query(value="select u.firstName,f.feedbackId,f.feedbackDescription,f.rating,f.productId,f.userId from feedback f inner join user u on f.userId=u.userId where f.productId=?1",nativeQuery = true)
	List<Feedback> findByProductId(int id);
}
