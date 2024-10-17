export function getMonth(num){
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

      return monthNames[num];
}


export function dateDifference(date) {
  // Split the date string into parts
  const specificDateParts = date.split("-");

  // Create a Date object using DD-MM-YYYY format
  const targetDate = new Date(
    specificDateParts[2], // Year
    specificDateParts[1] - 1, // Month (0-based)
    specificDateParts[0] // Day
  );
  const today = new Date();

  const differenceInMilliseconds = today - targetDate;

  const differenceInDays = Math.abs(Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24))-1);

  return differenceInDays;
}

export const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};