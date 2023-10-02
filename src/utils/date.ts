export function getDateDiff(startDate: any, endDate: any) {
  return Math.round((endDate - startDate) / (1000 * 60 * 60 * 24));
}
