import React, { useState, useEffect } from "react";
import getDate from "../../utilities/get-date";
import ReviewService from "../../services/review.service";
const Businesses = () => {
  const [allReviews, setAllReviews] = useState([]);

  const handleApprove = async (id, status) => {
    const result = await ReviewService.updateReview(id, { approved: !status });
    if (result.data) {
      loadReviews();
    }
  };
  const handleDelete = async (id) => {
    const result = await ReviewService.deleteReview(id);
    if (result.data) {
      loadReviews();
    }
  };

  const loadReviews = async () => {
    const result = await ReviewService.findAllReviews();
    if (result.data && result.data) {
      return setAllReviews(result.data["reviews"]);
    }
    setAllReviews([])
  };
  useEffect(() => {
    loadReviews();
  }, []);
  return (
    <div className="businesses">
      <div className="table-container__title">
        Reviews{" "}
        <span className="table-container__title__count">
          ({allReviews.length})
        </span>
      </div>
      <div className="table-container">
        <table class="table table-striped data-table">
          <thead>
            <tr>
              <th scope="col">Business Name</th>
              <th scope="col">User</th>

              <th scope="col">Created on</th>

              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {allReviews.map((review) => (
              <tr>
                <td className="data-table__bold">
                  {review.business.businessName}
                </td>
                <td className="data-table__bold">{review.user.email}</td>

                <td className="">{getDate(review.date)}</td>

                <td className="">{review.approved ? "Approved" : "Pending"}</td>

                <td
                  className="data-table__edit"
                  onClick={() => handleApprove(review._id, review.approved)}
                >
                  {review.approved ? "Unapprove" : "Approve"}
                </td>

                <td
                  className="data-table__delete"
                  onClick={() => handleDelete(review._id)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Businesses;
