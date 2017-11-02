let person = {
  name: 'User',
  age: 21,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
}
let day = 'Thursday';
let alarm;

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}
console.log(person[alarm]);
