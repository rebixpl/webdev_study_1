const paginate = (followers) => {
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const startIndex = index * itemsPerPage;
    return followers.slice(startIndex, startIndex + itemsPerPage);
  });
  return newFollowers;
};

export default paginate;
