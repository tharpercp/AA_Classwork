class Clock {
    // String.prototype.padStart(4, '0'); // '0009'
    constructor() {
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
        this.datetime = new Date();
        
    }

    startTime(){
      this.hours = this.datetime.getHours();
        this.minutes = this.datetime.getMinutes();
        this.seconds = this.datetime.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000)
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      let hours = (this.hours % 12).toString().padStart(2, '0');
      let minutes = this.minutes.toString().padStart(2, '0');
      let seconds = this.seconds.toString().padStart(2, '0');
      console.log(`${hours}:${minutes}:${seconds}`);
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