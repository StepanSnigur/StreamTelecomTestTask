(() => {
  const popup = document.querySelector('.popup')
  const openPopupButton = document.querySelector('.settigs-link')

  openPopupButton.addEventListener('click', () => {
    popup.classList.add('popup__open')
  })
  popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup-close')) {
      popup.classList.remove('popup__open')
    }
  })
})()