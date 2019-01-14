module.exports = {
  name: 'autologin',
  defaultConfig: {
    trigger: '',
    trigger_color: '',
    users: {}
  },
  init: proxy => {
    const { config: { autologin: config } } = proxy
    proxy.log(`Auto-login enabled for users: ${Object.keys(config.users).join(', ')}`)
    if (!config.trigger) throw new Error('Auto-login trigger cannot be empty or null!')
    proxy.register('serverPacket', (meta, data, client, server) => {
      if (!config.users.hasOwnProperty(client.username) || meta.name !== 'chat') return true
      const message = JSON.parse(data.message)
      if (!message.extra) return true
      const parts = message.extra.filter(part => typeof part === 'object')
      if (!parts.length) return true
      if (parts.some(el =>
        el.text.includes(config.trigger) &&
        (config.trigger_color ? el.color === config.trigger_color : true)
      )) {
        server.write('chat', { message: '/login ' + config.users[client.username] })
        proxy.log(`Logged in ${client.username}!`)
      }
      return true
    })
  }
}
