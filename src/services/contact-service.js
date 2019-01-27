import BaseApi from './base-api';

export default class UserService extends BaseApi {
  getUsers() {
    return this.getResource('users');
  }

  getUser(id) {
    return this.getResource('users/' + id);
  }

  addUser(user) {
    return this.postResource('users', user);
  }

  deleteUser(id) {
    return this.deleteResource('users/' + id);
  }

  updateUser(user) {
    return this.putResource('users/' + user.id, user);
  }
}
