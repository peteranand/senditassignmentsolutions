import {Timestamp} from 'firebase/firestore';

export interface AssignmentData {
  /**
   * name of person adding assignment
   * aka owner of assignment (OOA)
   */
  name: string;
  /**
   * email adress of OOA
   */
  email: string;
  /**
   * phone number of OOA
   */
  phoneNumber: string;
  /**
   * academic level of assignment put forward
   */
  academicLevel: string;
  /**
   * subject of the assignment
   */
  subject: string;
  /**
   * short description for the assignment
   */
  description: string;
  /**
   * specifies number of words or pages
   */
  contentLimit: string;
  /**
   * deadline date for assignment
   */
  deadline: string;
  /**
   * Array of document paths in firebase storage
   */
  documents: Array<string>;
  /**
   * unique job Id for each job
   */
  jobId: string;
  /**
   * created timestamp
   */
  created_at: Timestamp;
  /**
   * updated timestamp
   */
  updated_at: Timestamp;
  /**
   * document id
   */
  id?: string;
  /**
   * actions performed by admin
   */
  actions?: Record<string, string>[];
  /**
   * payable bill amount
   */
  payableAmount?: string;
  /**
   * writer ID the assignment task is assigned to
   */
  assignedTo?: string;
  /**
   * writer ID the assignment review is assigned to
   */
  reviewer?: string;
}
