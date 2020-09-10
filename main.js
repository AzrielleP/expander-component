/* EXPANDER COMPONENT TOGGLING */

(function expandButton() {
  // Set variables
  const expander = document.querySelectorAll('.expander');

  /*=== Declare functions ===*/
  const toggleContent = (button, cont) => {
    button.nextElementSibling.classList.toggle('expander-text-active');
    button.classList.toggle('expander-button-active');
    cont.classList.toggle('active');
  };

  // Remove the 'active' className when you will switch to another expander to close it.
  const removeActiveClass = (container) => {
    container.firstElementChild.nextElementSibling.classList.remove(
      'expander-text-active'
    );
    container.firstElementChild.classList.remove('expander-button-active');
    container.classList.remove('active');
  };

  /*=== Perform the toggling ===*/
  expander.forEach((container) => {
    const expanderButton = container.firstElementChild;

    expanderButton.addEventListener('click', () => {
      // Choose the active parent element of container
      const activeContainer = container.parentElement.querySelector('.active');

      // This imitates Bootstrap's collapse component:
      activeContainer
        ? removeActiveClass(activeContainer)
        : toggleContent(expanderButton, container);

      /* If you want a functionality where an expander is active, 
      and you want to quickly open another expander without clicking it again after the other expander closes, 
      disregard the above conditional and use the following code:*/
      // if (activeContainer) {
      //   removeActiveClass(activeContainer);
      //   if (activeContainer === container) {
      //     toggleContent(expanderButton, container);
      //   }
      // }
      // toggleContent(expanderButton, container);
    });
  });
})();
