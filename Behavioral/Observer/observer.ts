class JobPost {
	private title: string

	constructor(title: string) {
		this.title = title
	}

	getTitle(): string {
		return this.title
	}
}

class JobSeeker {
	private name: string

	constructor(name: string) {
		this.name = name
	}

	onJobPosted(job: JobPost): void {
		console.log(`Я, ${this.name} получил уведомлени о появилении новой вакансии: ${job.getTitle()}`)
	}
}

class JobPostings {
	private observers: Array<JobSeeker> = []

	private notify(job: JobPost): void {
		for (var i = this.observers.length - 1; i >= 0; i--) {
			this.observers[i].onJobPosted(job)
		}
	}

	attach(observer: JobSeeker): void {
		this.observers.push(observer)
	}

	addJob(job: JobPost): void {
		this.notify(job)
	}
}

let ivan = new JobSeeker('Иван')
let petr = new JobSeeker('Петр')
let zheka = new JobSeeker('Евгений')

let jobPostings = new JobPostings()

jobPostings.attach(ivan)
jobPostings.attach(petr)
jobPostings.attach(zheka)

jobPostings.addJob(new JobPost('Менеджер по продажам ЗП 13000 грн в день на руки'))