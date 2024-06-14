
export const formatAuthors = (authors) => {
  return authors
    .map((author) => {
      return author.name;
    })
    .join(", ");
};
