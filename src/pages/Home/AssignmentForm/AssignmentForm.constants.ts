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
  COUNT_TYPE: [
    {label: 'Pages', value: 'pages'},
    {label: 'Words', value: 'words'},
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
  COUNT: {
    LABEL: 'Word or Page count',
    NAME: 'count',
    PLACEHOLDER: 'Gimme them count',
  },
  COUNT_TYPE: {
    NAME: 'countType',
    PLACEHOLDER: 'Select Pages/ Words',
  },
};

export const LITERALS = {
  ORDER_SUCCESS: {
    TITLE: 'Order Placed!',
    CONTENT: 'Ipsum lorem anands boredom',
  },
  SUBMIT_BUTTON: 'Order Now',
};

export const UPLOAD = {
  MAX_SIZE: 10,
  MAX_COUNT: 3,
};
