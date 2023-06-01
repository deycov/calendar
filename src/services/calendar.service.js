class CalendarService {
  
  constructor(actually,lastDay, month){
    this.actually = actually;
    this.final = lastDay;
    this.month =  month;
    this.days = [];
    this.months = [
      'enero','febrero',
      'marzo','abril',
      'mayo','junio',
      'julio','agosto',
      'septiembre','octubre',
      'noviembre','diciembre'
    ]; 
    this.generateMonth();
  }

  async generateMonth(){
    for(let i = 1; i <= this.final; i++){
      this.days.push({
        day: i,
        month: `${this.months[this.month]}`,
        notes : {}
      });
    }
  }

  async fullMonth(){
    return this.days;
  }
}

// Mes actual
const actually = new Date();
const date = new Date(actually.getFullYear(),actually.getMonth()+1,0)


module.exports = {CalendarService, actually, date};