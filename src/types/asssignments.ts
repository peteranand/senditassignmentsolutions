export interface AssignmentData extends Record<string, string> {
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
}
