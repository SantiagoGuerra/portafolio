export const elementFromString = string => {
  const element = document.createElement('div');
  element.innerHTML = string;

  return element.firstChild;
};