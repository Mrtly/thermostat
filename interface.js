function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').append('°'); // the cool stuff eh
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
}})