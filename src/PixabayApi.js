export function images(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=24236724-a89ab3fbc60694d0f9dea8e28&image_type=photo&orientation=horizontal&per_page=12`,
  ).then((res) => res.json())
}
