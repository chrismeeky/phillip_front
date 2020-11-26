import React, { useState, useEffect } from "react";
import getDate from "../../utilities/get-date";
import BusinessService from "../../services/business.service";
const Businesses = () => {
  const [allBusinesses, setAllBusinesses] = useState([
    {
      _id: 1,
      businessName: "Alcatel",
      businessDescription: "This is a sample decription",
      date: "Jun 12, 1990",
      approved: false,
    },
  ]);

  const handleDelete =async (id) => {
    const result = await BusinessService.deleteBusiness(id);
    if (result.data) {
      loadBusinesses();
    }
  };

  const loadBusinesses = async () => {
    const result = await BusinessService.findAllBusinesses();

    if (result.data && result.data) {
      console.log("business", result.data["businesss"]);
      setAllBusinesses(result.data["businesss"]);
    }
  };
  const viewReviews = (id) => {

  }
  useEffect(() => {
    loadBusinesses();
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
            </tr>
          </thead>
          <tbody>
            {allBusinesses.map((business) => (
              <tr>
                <td className="data-table__bold">{business.businessName}</td>
                <td className="">{getDate(business.date)}</td>


                <td
                  className="data-table__bold"
                  onClick={() => viewReviews(business._id)}
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
