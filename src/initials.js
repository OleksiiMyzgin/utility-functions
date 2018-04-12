// first name -> First Name
const initials = (name = '') => (
  name
    .split(' ')
    .map(word => `${word.charAt(0)}.`)
    .join('')
);

export default initials;
