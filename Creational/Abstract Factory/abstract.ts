interface AbstractCarFactory {
	createPremium(): Premium;
	createSport(): Sport;
}

class ToyotaFactory implements AbstractCarFactory {
	createPremium(): Premium {
		return new ToyotaPremium()
	}
	createSport(): Sport {
		return new ToyotaSport()
	}
}

class LexusFactory implements AbstractCarFactory {
	createPremium(): Premium {
		return new LexusPremium()
	}
	createSport(): Sport {
		return new LexusSport()
	}
}

abstract class Premium {
	type: string = 'premium'
	wheelPos: string

}

abstract class Sport {
	type: string = 'sport'
	wheelPos: string

}

class ToyotaPremium extends Premium {
	wheelPos: string = 'right'
}

class ToyotaSport extends Sport {
	wheelPos: string = 'right'
}

class LexusPremium extends Premium {
	wheelPos: string = 'left'
}

class LexusSport extends Sport {
	wheelPos: string = 'left'
}

let factory = new ToyotaFactory()

let vehicle1 = factory.createPremium()

let vehicle2 = factory.createSport()

console.log(vehicle1)
console.log(vehicle2)

let factory2 = new LexusFactory()

let vehicle3 = factory2.createPremium()

let vehicle4 = factory2.createSport()

console.log(vehicle3)
console.log(vehicle4)




console.log(vehicle3)
console.log(vehicle4)