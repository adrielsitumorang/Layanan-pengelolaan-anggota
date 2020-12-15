import http from "../http-common";

class DiscipleshipManagementService {
  getAll() {
    return http.get("/pemuridan");
  }

  get(lp) {
    return http.get(`/pemuridan/${lp}`);
  }

  create(data) {
    return http.post("/pemuridan", data);
  }

  update(nim, data) {
    return http.put(`/tutorials/${nim}`, data);
  }

  delete(nim) {
    return http.delete(`/tutorials/${nim}`);
  }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new DiscipleshipManagementService();