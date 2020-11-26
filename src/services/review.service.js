import axios from "axios";
const BASE_URL = process.env.REACT_APP_baseUrl;
class ReviewService {
  static async createReview(review) {
    try {
      return await axios.post(`${BASE_URL}/reviews`, review);
    } catch (error) {
      return error;
    }
  }
  static async findAllReviews() {
    try {
      return await axios.get(`${BASE_URL}/reviews`);
    } catch (error) {
      return error;
    }
  }
  static async updateReview(id, data) {
    try {
      return await axios.patch(`${BASE_URL}/review/${id}`, data);
    } catch (error) {
      return error;
    }
  }
  static async deleteReview(id, data) {
    try {
      return await axios.delete(`${BASE_URL}/review/${id}`);
    } catch (error) {
      return error;
    }
  }
}
export default ReviewService;
