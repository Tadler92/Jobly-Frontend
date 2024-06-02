import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);
    console.log('token', JoblyApi.token);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    console.log('URL', url);
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(searchQuery) {
    if (searchQuery.search === undefined) searchQuery.search = {};
    // console.log('Search Query', searchQuery)
    let res = await this.request(`companies`, {name: searchQuery.search});
    // console.log('getCompanies API', res)
    return res.companies;
  }

  // obviously, you'll add a lot here ...

  static async getJobs(searchQuery) {
    if (searchQuery.search === undefined) searchQuery.search = {};
    // console.log('Search Query', searchQuery)
    let res = await this.request(`jobs`, {title: searchQuery.search});
    // console.log('getJobs API', res)
    return res.jobs;
  }

  static async getToken(loginData) {
    // if (searchQuery.search === undefined) searchQuery.search = {};
    // console.log('Search Query', searchQuery)
    let res = await this.request(`auth/token`, loginData, 'post');
    console.log('getToken API', res)
    return res.token;
  }

  static async register(signupData) {
    // if (searchQuery.search === undefined) searchQuery.search = {};
    console.log('register signup data', signupData)
    let res = await this.request(`auth/register`, signupData, 'post');
    console.log('register API', res)
    return res.token;
  }

  static async getCurrUser(username) {
    // if (searchQuery.search === undefined) searchQuery.search = {};
    // console.log('register signup data', signupData)
    let res = await this.request(`users/${username}`);
    console.log('current user API', res)
    return res;
  }

  static async updateUserProfile(username, updatedData) {
    // if (searchQuery.search === undefined) searchQuery.search = {};
    // console.log('register signup data', signupData)
    let res = await this.request(`users/${username}`, updatedData, 'patch');
    console.log('current user API', res)
    return res;
  }

  static async applyToJob(username, jobId) {
    // if (searchQuery.search === undefined) searchQuery.search = {};
    // console.log('register signup data', signupData)
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, 'post');
    console.log('applied to job API', res)
    return res;
  }
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";


export default JoblyApi;