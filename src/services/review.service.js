import axios from "axios";
const BASE_URL = process.env.REACT_APP_baseUrl;
class ReviewService {
  static async create(business) {
    try {
      return await axios.post(`${BASE_URL}/business`, business);
    } catch (error) {
      return error;
    }
  }
}
export default ReviewService;
