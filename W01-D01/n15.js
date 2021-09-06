const tax = [2, 5, 10];
let total1, total2, total3, subTotal;
function totalSalary(salary1, salary2, salary3) {
  total1 = salary1 + (salary1 * tax[0] / 100);
  total2 = salary2 + (salary2 * tax[1] / 100);
  total3 = salary3 + (salary3 * tax[2] / 100);
  subTotal = total1 + total2 + total3;
  return `\n\tTotal Gaji yang harus dibayar : \n\tEmp1 : Rp.${salary1} + Pajak (${tax[0]}) = Rp.${total1} \n\tEmp2 : Rp.${salary2} + Pajak (${tax[1]}) = Rp.${total2} \n\tEmp3 : Rp.${salary3} + Pajak (${tax[2]}) = Rp.${total3} \n\tTotal : Rp.${subTotal} \n`
}

console.log(totalSalary(500, 2000, 12000));