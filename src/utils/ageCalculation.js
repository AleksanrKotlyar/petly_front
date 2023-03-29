export const calculateAge = dateString => {
  const date = new Date(dateString);
  const today = new Date();
  const diffInMs = today.getTime() - date.getTime();
  const diffInMonths = Math.round(diffInMs / 2628000000);
  const diffInYears = Math.floor(diffInMonths / 12);
  const remainingMonths = diffInMonths % 12;

  let result = '';

  if (diffInYears === 1) {
    result = 'one year';
  } else if (diffInYears > 1) {
    result = `${diffInYears} years`;
  }

  if (remainingMonths === 1) {
    result = result ? `${result}, one month` : 'one month';
  } else if (remainingMonths > 1) {
    result = result
      ? `${result}, ${remainingMonths} months`
      : `${remainingMonths} months`;
  }

  return result;
};