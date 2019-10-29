class Counter {
  constructor() {
    this.count = 1
    this.info = e => {
      this.count
    }
  }

  countUp() {
    setInterval(() => {
      this.count++ // <-- Trouble!
    }, 2000)
  }
}

let myCounter = new Counter()
myCounter.countUp()

setTimeout(() => console.log(myCounter.info()), 2000)
