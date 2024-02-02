export default {
  MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  COLOR: {
    red: 'rgba(255, 99, 132, 1)',
    blue: 'rgba(54, 162, 235, 1)',
    yellow: 'rgba(255, 206, 86, 1)',
    green: 'rgba(75, 192, 192, 1)',
    purple: 'rgba(153, 102, 255, 1)',
    orange: 'rgba(255, 159, 64, 1)',
  },
  BGCOLOR: {
    red: 'rgba(255, 99, 132, 0.2)',
    blue: 'rgba(54, 162, 235, 0.2)',
    yellow: 'rgba(255, 206, 86, 0.2)',
    green: 'rgba(75, 192, 192, 0.2)',
    purple: 'rgba(153, 102, 255, 0.2)',
    orange: 'rgba(255, 159, 64, 0.2)',
  },
  months(config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;

    for (i = 0; i < count; ++i) {
      value = this.MONTHS[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }

    return values;
  },
};
