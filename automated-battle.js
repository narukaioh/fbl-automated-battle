const isRollingAttack = msg => {
  if (msg.data.roll) {
    return JSON.parse(msg.data.roll).class.includes("FBLRoll")
  }
  return false
}

const getActorIdByTokenId = (id) => game.actors.tokens[id].id

const getUserIdByActorId = (id) => game.users.find(user => user?.character?.id === id).id

const getUserIdsByTokensId = (tokensId) => {
  const actorsId = tokensId.map(tokenId => getActorIdByTokenId(tokenId))
  return actorsId.map(id => getUserIdByActorId(id))
}

Hooks.on("createChatMessage", async (message) => {
  if (isRollingAttack(message)) {
    const usersIds = getUserIdsByTokensId(message.user.targets.ids)
    usersIds.forEach(userId => {
      if (game.users.get(userId).active) {
        const data = {
          title: "title example",
          speaker: message.data.speaker,
          content: "content example",
          whisper: [userId]
        }
        ChatMessage.create(data, {})
      }
    })
  }
})
