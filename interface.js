function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').append('°C'); // the cool stuff eh
    $('#temperature').attr('class', thermostat.usage_indicator());
  }
  
  $(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature() })

  $('#temperature-up').on('click', function() {  
    thermostat.increase_temp();  
    updateTemperature();
  })

  $('#temperature-down').on('click', function() {  
    thermostat.decrease_temp();  
    updateTemperature();  })

  $('#temperature-reset').on('click', function(){
      thermostat.reset();
      updateTemperature();
  })


  $('#mode-switcher').on('click', function() {
    if (thermostat.power_saving_mode === true) {
    thermostat.mode_switcher();
    $('#power-saving-status').text('off')
  } else if (thermostat.power_saving_mode === false) {
    thermostat.mode_switcher();
    $('#power-saving-status').text('on')
}
updateTemperature()})

  
  function updateLondon(){
    $.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-london').text(data.main.temp);
    $('#current-london').append('°C'); // the cool stuff eh
    $('#current-london-humidity').text(data.main.humidity);
    $('#current-london-feels_like').text(data.main.feels_like);
  
  })
  }

  updateLondon()

$('#check-london').on('click', function() {
  updateLondon()
})

