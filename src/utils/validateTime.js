export default function validateTime(h, m) {
  const totalTime = Number(h) * 60 + Number(m);
  return totalTime;
}
