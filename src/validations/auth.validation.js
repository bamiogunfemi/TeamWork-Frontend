import { check } from 'express-validator';

export default {
  signupSchema: [
    check('firstName')
      .trim()
      .exists().withMessage('First name is required')
      .isLength({ min: 2, max: 15 })
      .withMessage('Name should be between 2 to 15 characters')
      .isAlpha()
      .withMessage('Name should only contain alphabets'),

    check('lastName')
      .trim()
      .exists().withMessage('Last name is required')
      .isLength({ min: 2, max: 15 })
      .withMessage('Name should be between 2 to 15 characters')
      .isAlpha()
      .withMessage('Name should only contain alphabets'),

    check('email')
      .trim()
      .exists().withMessage('Email address is required')
      .isEmail()
      .withMessage('Enter a valid email address')
      .customSanitizer((email) => email.toLowerCase()),

    check('jobRole')
      .trim()
      .isLength({ min: 2, max: 15 })
      .withMessage('Job role should be between 2 to 15 characters')
      .isAlpha()
      .withMessage('Job role is required'),

    check('dept')
      .trim()
      .isLength({ min: 2, max: 15 })
      .withMessage('Dept should be between 2 to 15 characters')
      .isAlpha()
      .withMessage('Dept is required'),

    check('address')
      .trim()
      .isLength({ min: 2, max: 15 })
      .withMessage('Address is required'),

    check('password')
      .trim()
      .exists().withMessage('Password is required')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password should be between 8 to 15 characters'),

  ],

  signinSchema: [
    check('email')
      .trim()
      .exists().withMessage('Email address is required')
      .isEmail()
      .withMessage('Enter a valid email address')
      .customSanitizer((email) => email.toLowerCase()),

    check('password')
      .trim()
      .exists().withMessage('Password is required')
      .isLength({ min: 8, max: 15 })
      .withMessage('Password should be between 8 to 15 characters'),
  ],
};
