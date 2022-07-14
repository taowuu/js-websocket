const handleEnterBtnClick = function() {
  const username = e('#username').value
  localStorage.setItem('username', username)
  location.href = 'index.html'
}

const bindEvents = function() {
  bindEvent(e('#enter'), 'click', handleEnterBtnClick)
  
}

const __mian = function() {
  bindEvents()
}

__mian()