const { body, validationResult } = require('express-validator');

const validations = [
  // Validate Full Name
  body('fullName')
    .isLength({ min: 3, max: 20 })
    .withMessage('Name must be between 3 and 20 characters long')
    .isAlpha('en-US', { ignore: ' ' })
    .withMessage('Name must only contain alphabetic characters and spaces'),

  // Validate Father's Name
  body('fatherName')
    .isLength({ min: 3, max: 20 })
    .withMessage("Father's Name must be between 3 and 20 characters long")
    .isAlpha('en-US', { ignore: ' ' })
    .withMessage("Father's Name must only contain alphabetic characters and spaces"),

  // Validate Email
  body('emailAddress')
    .isEmail()
    .withMessage('Invalid email address'),

  // Validate Phone Number
  body('phoneNumber')
    .isLength({ min: 10, max: 10 })
    .withMessage('Phone number must be 10 digits long')
    .matches(/^[0-9]+$/)
    .withMessage('Phone number must contain only digits'),

  // Validate Password
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter')
    .matches(/[a-z]/)
    .withMessage('Password must contain at least one lowercase letter')
    .matches(/[0-9]/)
    .withMessage('Password must contain at least one number')
    .matches(/[@$!%*?&#]/)
    .withMessage('Password must contain at least one special character (@, $, !, %, *, ?, &, or #)'),

  // Optional: Validate address (if needed)
  body('address')
    .notEmpty()
    .withMessage('Address is required'),

  // Optional: Validate qualification (if needed)
  body(' qualification')
    .notEmpty()
    .withMessage('Qualification is required'),

  // Optional: Validate selected cours (if needed)
  body('selectedCourse')
    .notEmpty()
    .withMessage('Course selection is required')
];

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { validations, validate };

// const validations_2 = [
//   body('password')
//     .isLength({ min: 8 })
//     .withMessage('Password must be at least 8 characters long')
//     .matches(/[A-Z]/)
//     .withMessage('Password must contain at least one uppercase letter')
//     .matches(/[a-z]/)
//     .withMessage('Password must contain at least one lowercase letter')
//     .matches(/[0-9]/)
//     .withMessage('Password must contain at least one number')
//     .matches(/[@$!%*?&#]/)
//     .withMessage('Password must contain at least one special character (@, $, !, %, *, ?, &, or #)'),
//   body('email')
//     .isEmail()
//     .withMessage('Invalid email address')
// ];

// module.exports = { validations_1,validations_2, validationResult };
