const batteryBatches = [4, 5, 3, 4, 4, 6, 3, 2];

// Solution: Define the totalBatteries variable and use reduce to sum up the batteries
const totalBatteries = batteryBatches.reduce((acc, current) => acc + current, 0);
