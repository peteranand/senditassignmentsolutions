import {INPUT_LITERALS} from '../Home/AssignmentForm/AssignmentForm.constants';

export const DATA_STORAGE_KEY = 'assignment';

const includeKeys = ['ACADEMIC_LEVEL', 'SUBJECT', 'DESC', 'CONTENT_LIMIT'];
export const LIST_MAP = includeKeys.map((k) => {
  const label = INPUT_LITERALS[k].LABEL;
  const key = INPUT_LITERALS[k].NAME;
  if (k === 'CONTENT_LIMIT')
    return {
      label: `${label} (words)`,
      key,
    };
  return {
    label,
    key,
  };
});
