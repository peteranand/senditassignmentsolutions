export function filterObject(
  obj: Record<string, any>,
  filterKeys: string[]
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => filterKeys.includes(key))
  );
}
