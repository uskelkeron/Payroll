
const prompt = require("prompt-sync")();

const name = prompt("Enter Employee Name: ");

const hours = parseFloat(prompt(`Enter total hours ${name} made this week: `));

const rate = parseFloat (prompt(`Enter hourly rate for ${name}: `));

const gross_sal = hours * rate;

const TAX = .25;


const TotalTax  = gross_sal * TAX; 

const NetProfit = gross_sal - TotalTax;



console.log(` Name: ${name} \n Total hours: ${hours} \n Rate: ${rate} \n Gross Salary: ${gross_sal.toFixed(2)} \n Total Taxes: ${TotalTax} \n NetSalary: ${NetProfit.toFixed(2)}`);
