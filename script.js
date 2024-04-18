const offPeakRateInput = document.getElementById('off-peak-rate');
const peakRateInput = document.getElementById('peak-rate');
const weeklyMachinesInput = document.getElementById('weekly-machines');
const machineConsumptionInput = document.getElementById('machine-consumption');
const calculateBtn = document.getElementById('calculate-btn');
const offPeakSavingsOutput = document.getElementById('off-peak-savings');
const cycleTimeInput = document.getElementById('cycle-time');

function calculateSavings() {
  const offPeakRate = parseFloat(offPeakRateInput.value);
  const peakRate = parseFloat(peakRateInput.value);
  const weeklyMachines = parseFloat(weeklyMachinesInput.value);
  const machineConsumption = parseFloat(machineConsumptionInput.value);
  const cycleTime = parseFloat(cycleTimeInput.value);

  const annualHours = weeklyMachines * 52 * cycleTime;
  const offPeakCost = annualHours * offPeakRate * machineConsumption;
  const peakCost = annualHours * peakRate * machineConsumption;

  const offPeakSavings = peakCost - offPeakCost;

  document.getElementById('annual-hours').textContent = annualHours.toFixed(2);
  document.getElementById('off-peak-cost').textContent = offPeakCost.toFixed(2);
  document.getElementById('peak-cost').textContent = peakCost.toFixed(2);

  if (offPeakSavings >= 0) {
    offPeakSavingsOutput.textContent = `Économie de ${Math.abs(offPeakSavings).toFixed(2)}`;
    offPeakSavingsOutput.style.color = "green";
  } else {
    offPeakSavingsOutput.textContent = `Perte de ${Math.abs(offPeakSavings).toFixed(2)}`;
    offPeakSavingsOutput.style.color = "red";
  }
}

calculateBtn.addEventListener('click', calculateSavings);
