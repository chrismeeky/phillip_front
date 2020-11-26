import axios from "axios";
const BASE_URL = process.env.REACT_APP_baseUrl;
class BusinessService {
  static async createBusiness(business) {
    try {
      return await axios.post(`${BASE_URL}/business`, business);
    } catch (error) {
      return error;
    }
  }

  static async updateBusiness(id, business) {
    console.log("base url", BASE_URL);
    try {
      return await axios.patch(`${BASE_URL}/business/${id}`, business);
    } catch (error) {
      return error;
    }
  }
  static async deleteBusiness(id) {
    console.log("base url", BASE_URL);
    try {
      return await axios.delete(`${BASE_URL}/business/${id}`);
    } catch (error) {
      return error;
    }
  }
  static async findAllBusinesses() {
    try {
      return await axios.get(`${BASE_URL}/businesses`);
    } catch (error) {
      return error;
    }
  }
  static async findJob(permalink) {
    try {
      const job = await axios.get(`${BASE_URL}/job/${permalink}`);
      return job.data;
    } catch (error) {
      return error;
    }
  }
}
export default BusinessService;
