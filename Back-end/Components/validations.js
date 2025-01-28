import { check, validationResult } from 'express-validator';

const validations = [
  check('fullName').not().isEmpty().withMessage('Full name is required'),
  check('fatherName').not().isEmpty().withMessage('Father name is required'),
  check('emailAddress').isEmail().withMessage('Invalid email address'),
  check('phoneNumber').matches(/^\d{10}$/).withMessage('Phone number must be 10 digits'),
  check('selectedCourse').not().isEmpty().withMessage('Selected course is required'),
  check('address').not().isEmpty().withMessage('Address is required'),
  check('qualification').not().isEmpty().withMessage('Qualification is required'),
  check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export { validations, validate };
