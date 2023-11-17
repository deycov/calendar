class CalendarService {
  constructor(actually) {
    this.actuallyDate = actually;
    const week = new Date(
      this.actuallyDate.getFullYear(),
      this.actuallyDate.getMonth(),
      1
    );
    const date = new Date(
      this.actuallyDate.getFullYear(),
      this.actuallyDate.getMonth() + 1,
      0
    );
    const final = date.getDate();
    const today = this.actuallyDate.getDate();
    const month = this.actuallyDate.getMonth();
    const weekDay = week.getDay();
    this.actually = today;
    this.final = final;
    this.month = month;
    this.weekDay = weekDay;
    this.days = [];

    this.week = ["su", "mo", "tu", "we", "th", "fr", "sa"];

    this.months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    this.generateMonth();
  }

  async generateMonth() {
    for (let i = 1; i <= this.final; i++) {
      this.days.push({
        day: i,
        month: `${this.months[this.month]}`,
        week: `${this.week[this.weekDay]}`,
        notes: [],
      });
      this.weekDay++;
      if (this.weekDay > 6) {
        this.weekDay = 0;
      }
    }
  }

  async changeMonth(change) {
    this.actuallyDate.setMonth(change);
    console.log(this.actuallyDate);
  }

  async fullMonth() {
    return this.days;
  }

  async findAllDay(day) {
    const search = this.days.find((item) => item.day == day);
    return search;
  }

  async find(day, id) {
    let searchNote = null;
    this.days[day - 1].notes.forEach((element) => {
      if (element.id == id) {
        searchNote = {
          id: element.id,
          title: element.title,
          description: element.description,
        };
      }
    });
    return searchNote;
  }

  async add(body, day) {
    try {
      let i = day - 1,
        newNote,
        idValue = 0;
      const info = this.days[i].notes[0];
      if (info == undefined) {
        newNote = {
          id: 0,
          ...body,
        };
      } else {
        this.days[i].notes.forEach((element) => {
          idValue = element.id;
        });
        newNote = {
          id: idValue + 1,
          ...body,
        };
      }
      this.days[i].notes.push(newNote);
      return day;
    } catch (err) {
      return new Error(err);
    }
  }

  async update(day, id, changes) {
    try {
      let codyNote = null;
      const note = this.days[day - 1].notes;
      this.days[day - 1].notes[id] = {
        ...note,
        ...changes,
      };
      return day;
    } catch (err) {
      return err;
    }
  }

  async delete(day, id) {
    const index = this.days[day - 1].notes.splice(id, 1);
    return day;
  }
}

module.exports = { CalendarService };
