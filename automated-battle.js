const isRollingAttack = msg => {
  if (msg.data.roll) {
    return JSON.parse(msg.data.roll).class.includes("FBLRoll")
  }
  return false
}

Hooks.on("createChatMessage", (message) => {
  if (isRollingAttack(message)) {
    const usersIds = game.users.filter(user =>
      [...game.user.targets].map(t =>
        game.actors.tokens[t.id].id
      ).includes(user.data.character))
      .map(user => user.id)
    const data = {
      title: "title example",
      speaker: message.data.speaker,
      content: `<div class="flex"><button class="fbl-button automated-dodge">Dodge</button> or <button class="fbl-button automated-parry">Parry</button></div>`,
      whisper: usersIds
    }
    setTimeout(() => { ChatMessage.create(data, {}) }, 2000)
  }
})

Hooks.on("renderChatMessage", (message) => {
  $(".automated-dodge").css("border", "1px solid red !important")
})