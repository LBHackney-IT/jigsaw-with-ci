export function formatDateString(
  dateString,
  withTime
){
  let d = new Date(dateString);

  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  const hh = d.getHours();
  const mm = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();

  return withTime ? `${da}/${mo}/${ye} ${hh}:${mm}` : `${da}/${mo}/${ye}`;
}