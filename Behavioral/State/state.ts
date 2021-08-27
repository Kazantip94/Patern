interface Color {
	write(word: string): void
}

class Red implements Color {
	write(word: string): void {
		console.log(`Red color: ${word}`)
	}
}

class Green implements Color {
	write(word: string): void {
		console.log(`Green color: ${word}`)
	}
}

class TextEditor {
	protected color: Color

	constructor(color: Color) {
		this.color = color
	}

	setColor(color: Color): void {
		this.color = color
	}

	type(words: string): void {
		this.color.write(words)
	}
}


let editor = new TextEditor(new Green())

editor.type('sasfsk')
editor.type('aguh9487fh9w3478ty')

editor.setColor(new Red())

editor.type('23784623478')