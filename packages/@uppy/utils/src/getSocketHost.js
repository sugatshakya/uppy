module.exports = function getSocketHost (url) {
  // get the host domain
  var regex = /^(?:https?:\/\/|\/\/)?(?:[^@\n]+@)?(?:www\.)?([^\n]+)/
  var host = regex.exec(url)[1]
  var socketProtocol = /^http:\/\//.test(url) ? 'ws' : 'wss'

  return `${socketProtocol}://${host}`
}
