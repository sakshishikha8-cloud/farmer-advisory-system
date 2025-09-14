/**
 * Utility function to smoothly scroll to an element by its ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (default: 0)
 */
export const scrollToElement = (elementId, offset = 0) => {
  // Remove the '#' if it's included in the elementId
  const id = elementId.startsWith('#') ? elementId.substring(1) : elementId;
  
  const element = document.getElementById(id);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};