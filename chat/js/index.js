const ws = new WebSocket('ws:localhost:8000')

const handleSendBtnClick = function() {
  log('handleSendBtnClick')
  const msg = e('#message')
  let username = localStorage.getItem('username')
  let data = {
    user: username,
    dateTime: new Date().getTime(),
    message: msg.value,
  }
  ws.send(JSON.stringify(data))
  msg.value = ''
}

const handleOpen = function(e) {
  log('handleOpen', e)
  let username = localStorage.getItem('username')
  if(username === null) {
    location.href = 'entry.html'
    return
  }
}

const handleClose = function(e) {
  log('handleClose', e)
}

const handleError = function(e) {
  log('handleError', e)
}

const crreateMsg = function(data) {
  const { user, dateTime, message} = data
  const item = document.createElement('div')
  item.innerHTML = `
    <p style="font-size: 30px;">
      <span>${ user } : </span>
      ${ message }
    </p>
    <hr width="70%">
  `
  return item
}

const handleMessage = async function(e) {
  let data = JSON.parse(await e.data.text())
  log('handleMessage', data)
  document.querySelector('#list').appendChild(crreateMsg(data))
}

const bindEvents = function() {
  bindEvent(e('#send'), 'click', handleSendBtnClick)
  bindEvent(ws, 'open', handleOpen)
  bindEvent(ws, 'close', handleClose)
  bindEvent(ws, 'error', handleError)
  bindEvent(ws, 'message', handleMessage)
}

const __mian = function() {
  bindEvents()
}

__mian()