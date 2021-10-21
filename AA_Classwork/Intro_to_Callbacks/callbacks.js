class Clock {
    constructor() {
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
        this.datetime = new Date();
        this.hours = this.datetime.getHours();
        this.minutes = this.datetime.getMinutes();
        this.seconds = this.datetime.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000)
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
        this.datetime.setSeconds(this.datetime.getSeconds() + 1);
        this.hours = this.datetime.getHours();
        this.minutes = this.datetime.getMinutes();
        this.seconds = this.datetime.getSeconds();
        this.printTime();
    }
  }
  
  const clock = new Clock();