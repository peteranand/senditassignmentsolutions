export const SELECT_INPUT_OPTIONS = {
  ACADEMIC_LEVEL: [
    {label: 'High school', value: 'High school'},
    {label: 'UG', value: 'UG'},
    {label: 'PG', value: 'PG'},
  ],
  SUBJECT: [
    {label: 'Law', value: 'Law'},
    {label: 'Economics', value: 'Economics'},
    {label: 'Statistics', value: 'Statistics'},
    {label: 'English', value: 'English'},
    {label: 'Psychology', value: 'Psychology'},
    {label: 'Other', value: 'Other'},
  ],
};

export const INPUT_LITERALS = {
  NAME: {
    LABEL: 'Name',
    NAME: 'name',
    PLACEHOLDER: 'Anjaly maybe?',
  },
  EMAIL: {
    LABEL: 'Email',
    NAME: 'email',
    PLACEHOLDER: 'anandpeter@hotmail.com',
    VALIDATION_MSG: 'Input is not a valid E-mail',
  },
  PHONE: {
    LABEL: 'Phone Number',
    NAME: 'phoneNumber',
    PLACEHOLDER: '+91 78994-58163',
    VALIDATION_MSG: 'Input is not a valid phone number',
  },
  ACADEMIC_LEVEL: {
    LABEL: 'Academic Level',
    NAME: 'academicLevel',
    PLACEHOLDER: 'Pick you wisdom',
  },
  SUBJECT: {
    LABEL: 'Subject',
    NAME: 'subject',
    PLACEHOLDER: 'Pick you expertise',
  },
  DESC: {
    LABEL: 'Description',
    NAME: 'description',
    PLACEHOLDER: 'yada yada yada...',
  },
  UPLOAD: {
    LABEL: 'Documents',
    NAME: 'upload',
  },
  DEADLINE: {
    LABEL: 'Deadline',
    NAME: 'deadline',
    PLACEHOLDER: "Pick a date. I'm free anytime ;)",
  },
  CONTENT_LIMIT: {
    LABEL: 'Content Limit',
    NAME: 'contentLimit',
    PLACEHOLDER: 'Gimme them count',
  },
  COUNT_TYPE: {
    NAME: 'countType',
    PLACEHOLDER: 'Select Pages/ Words',
  },
};

export const PHONE_NUMBER_REGEX = '^([0|+[0-9]{1,5})?([7-9][0-9]{9})$';

export const LITERALS = {
  ORDER_SUCCESS: {
    TITLE: 'Order Placed!',
    CONTENT: 'Ipsum lorem anands boredom',
  },
  SUBMIT_BUTTON: 'Order Now',
  LOADING_MESSAGE: 'processing your order...',
  CONTENT_LIMIT_TRAIL: 'Words',
};

export const UPLOAD = {
  MAX_SIZE: 10,
  MAX_COUNT: 3,
};
