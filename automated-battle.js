const isRollingAttack = msg => {
  if (msg.data.roll) {
    return JSON.parse(msg.data.roll).class.includes("FBLRoll")
  }
  return false
}

Hooks.on("renderChatMessage", (message) => {
  console.log({ message })
  // if (isRollingAttack(message) && message.data.content !== "content example") {
  //   const usersIds = game.users.filter(user =>
  //     [...game.user.targets].map(t =>
  //       game.actors.tokens[t.id].id
  //     ).includes(user.data.character))
  //     .map(user => user.id)
  //   const data = {
  //     title: "title example",
  //     speaker: message.data.speaker,
  //     content: "content example",
  //     whisper: usersIds
  //   }
  //   setTimeout(() => { ChatMessage.create(data, {}) }, 3000)
  // }
})
