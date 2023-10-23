export function getFormattedDate() {
  //   const options = {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   };
  const today = new Date();
  return today.toLocaleDateString("en-GB");
}
