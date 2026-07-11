export default function kBased(number: number) {
  const str = number.toString();
  const length = str.length;
  if (length > 3) {
    return str.slice(0, length - 3) + "." + Math.round(+`0.${str[1]}`) + "k";
  }
  return number;
}
