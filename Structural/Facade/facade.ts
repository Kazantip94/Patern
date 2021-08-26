class Attack {
	sendJournalists(): void {
		console.log("fghfghfg")
	}
	stopHelp(): void {
		console.log('fghfghfghfghfhfghfgh')
	}
}

class Defend {
	buyMedia(): void {
		console.log("dfdfgdfg123123")
	}
}

class Facade {
	joinAlliance(): void {
		new Defend().buyMedia()
	}

	leftAlliance(): void {
		new Attack().stopHelp()
		new Attack().sendJournalists()
		new Defend().buyMedia()
	}
}

let uk = new Facade()

uk.joinAlliance()
uk.leftAlliance()