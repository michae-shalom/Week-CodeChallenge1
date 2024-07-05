// Function to calculate PAYE (Pay As You Earn) tax based on gross salary
function calculatePAYE(grossSalary) {
    if (grossSalary <= 24000) {
        return grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        return 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        return 2400 + 2083.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        return 2400 + 2083.25 + 140000.1 + (grossSalary - 500000) * 0.325;
    } else {
        return 2400 + 2083.25 + 140000.1 + 97500 + (grossSalary - 800000) * 0.35;
    }
}
 // Function to calculate NHIF deductions based on gross salar
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}
// Function to calculate NSSF deductions based on gross salary
function calculateNSSF(grossSalary) {
    const tier1 = Math.min(grossSalary, 7000);
    const tier2 = Math.min(Math.max(grossSalary - 7000, 0), 29000); // 36,000 - 7,000
    const nssfContribution = (tier1 + tier2) * 0.06;
    return nssfContribution;
}
//Main function to calculate net salary
function netSalaryCalculator(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const housingLevy = calculateHousingLevy(grossSalary);

    const netSalary = grossSalary - (paye + nhif + nssf );
//Return an object containing all calculated values
    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary
    };
}
//prompt to get input from the user
const basicSalary = parseFloat(prompt("Enter Basic Salary: "));
const benefits = parseFloat(prompt("Enter Benefits: "));

const result = netSalaryCalculator(basicSalary, benefits);

alert(`Gross Salary: ${result.grossSalary}`);
alert(`PAYE: ${result.paye}`);
alert(`NHIF: ${result.nhif}`);
alert(`NSSF: ${result.nssf}`);
alert(`Net Salary: ${result.netSalary}`);

