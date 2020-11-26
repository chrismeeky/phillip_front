import React, { useState, useEffect } from "react";
import getDate from "../../utilities/get-date";
import ReviewService from "../../services/review.service";
const Businesses = () => {
  const [allReviews, setAllReviews] = useState([]);

  const handleApprove = (id) => {};
  const handleDelete = (id) => {};

  const loadReviews = async () => {
    const result = await BusinessService.findAllReviews();

    if (result.data && result.data) {
      console.log("business", result.data["businesss"]);
      setAllBusinesses(result.data["businesss"]);
    }
  };
  useEffect(() => {
    loadReviews();
  }, []);
  return (
    <div className="businesses">
      <div className="table-container__title">
        Posted Businesses{" "}
        <span className="table-container__title__count">
          ({allBusinesses.length})
        </span>
      </div>
      <div className="table-container">
        <table class="table table-striped data-table">
          <thead>
            <tr>
              <th scope="col">Business Name</th>
              <th scope="col">Created on</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {allReviews.map((business) => (
              <tr>
                <td className="data-table__bold">{business.businessName}</td>
                <td className="">{getDate(business.date)}</td>

                <td className="">
                  {business.approved ? "Approved" : "Pending"}
                </td>

                <td
                  className="data-table__bold"
                  onClick={() => handleApprove(business._id)}
                >
                  Reviews
                </td>

                <td
                  className="data-table__delete"
                  onClick={() => handleDelete(business._id)}
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
