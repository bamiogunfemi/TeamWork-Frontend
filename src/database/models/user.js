import bcrypt from 'bcrypt';
import { config } from 'dotenv';
import { Model } from './index';

config();

export default class User extends Model {
  constructor(attributes) {
    super();
    this.id = attributes.id;
    this.firstname = attributes.firstname;
    this.lastname = attributes.lastname;
    this.email = attributes.email;
    this.gender = attributes.gender;
    this.jobRole = attributes.jobRole;
    this.department = attributes.department;
    this.address = attributes.address;
    this.isAdmin = attributes.isAdmin;
    this.password = attributes.password;
  }

  static table() {
    return 'users';
  }

  static get attributes() {
    return {
      id: 'id',
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email',
      password: 'password',
      isAdmin: 'is_admin',
      jobRole: 'job_role',
      gender: 'gender',
      address: 'address',
      department: 'department',
    };
  }

  static hiddenAttributes() {
    return ['password'];
  }

  static async create(data) {
    const userData = { ...data };
    userData.password = bcrypt.hashSync(data.password, +process.env.SALT);
    return super.create(userData);
  }
}

User.prototype.getSafeDataValues = function getSafeDataValues() {
  const { password, ...data } = this;
  return data;
};

User.prototype.validatePassword = async function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};
