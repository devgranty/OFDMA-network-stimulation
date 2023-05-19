// Define the frequency band and the subcarrier spacing
const freqBand = { start: 800, end: 900 }; // in MHz
const subcarrierSpacing = 15; // in kHz

// Define the available subcarriers
const Subcarriers = [];
for (let i = 0; i < (freqBand.end - freqBand.start) * 1000 / subcarrierSpacing; i++) {
    Subcarriers.push({ id: i, assignedTo: null });
}

module.exports = {
    Subcarriers,
    subcarrierSpacing   
};