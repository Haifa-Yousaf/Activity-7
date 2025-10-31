function displayName(user) {
  if (!user || !user.first || !user.last) return 'Unknown';
  return `${user.first} ${user.last}`;
}
module.exports = { displayName };
