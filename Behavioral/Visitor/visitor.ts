interface Auto {
	accept(operation:AutoOperation)
}

class Tesla implements Auto {
	info():void {
		console.log('It is a Tesla car!')
	}

	accept(operation:AutoOperation):void {
		operation.visitTesla(this)
	}
}

class BMW implements Auto {
	info():void {
		console.log('It is a BMW car!')
	}

	accept(operation:AutoOperation):void {
		operation.visitBMW(this)
	}
}

class Audi implements Auto {
	info():void {
		console.log('It is a Audi car!')
	}

	accept(operation:AutoOperation):void {
		operation.visitAudi(this)
	}
}

interface AutoOperation {
	visitTesla(tesla:Tesla)
	visitBMW(bmw:BMW)
	visitAudi(audi:Audi)
}

class Info implements AutoOperation {
	visitTesla(tesla:Tesla) {
		tesla.info()
	}

	visitBMW(bmw:BMW) {
		bmw.info()
	}

	visitAudi(audi:Audi) {
		audi.info()
	}
}

let tesla = new Tesla()
let bmw = new BMW()
let audi = new Audi()

let info = new Info()

tesla.accept(info)
bmw.accept(info)
audi.accept(info)