
export class CombatMessage {
    constructor(message) {
        this.message = message
        this.roll = this.rollOf(message)
        this.targets = message.user.targets.ids
    }

    rollOf(msg) {
        if (msg.data.roll) {
            return JSON.parse(msg.data.roll)
        }
        return null
    }

    getRoll() {
        return this.roll
    }

    getMessage() {
        return this.message
    }

    getTargets() {
        return this.targets
    }

}