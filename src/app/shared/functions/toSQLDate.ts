export function toSQLDate(date = (new Date())) {
  return date
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');
}
