package com.ifti.spring_boot_library_boi_sync.controller;


import com.ifti.spring_boot_library_boi_sync.entity.Review;
import com.ifti.spring_boot_library_boi_sync.service.ReviewService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/book/{bookId}")
    @ResponseStatus(HttpStatus.OK)
    public Page<Review> getReviewsByBookId(
            @PathVariable Long bookId,
            @RequestParam(defaultValue = "0") int pageNo,
            @RequestParam(defaultValue = "10") int pageSize)
    {
            return reviewService.getReviewsByBookId(bookId, pageNo, pageSize);
    }
}
