class RNG {
  constructor(n) {
    this.n = n;
    this.currentCycle = [];
    this.index = 0;
  }

  rand() {
    if (this.index >= this.currentCycle.length) {
      // Generate new cycle
      this.currentCycle = Array.from({ length: this.n }, (_, i) => i);
      // Fisher-Yates shuffle
      for (let i = this.currentCycle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.currentCycle[i], this.currentCycle[j]] = [
          this.currentCycle[j],
          this.currentCycle[i],
        ];
      }
      this.index = 0;
    }
    return this.currentCycle[this.index++];
  }
}

const ele = new RNG(20);
console.log(ele.rand());
