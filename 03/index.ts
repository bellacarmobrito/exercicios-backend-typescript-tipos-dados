const tables = (numbers: number[]): string => {
  let result: string = "";

  for (const n of numbers) {
    for (let i = 0; i <= 10; i++) {
      result += `${n} x ${i} = ${n * i} \n`;

      if (i === 10) {
        result += "------------------------------- \n";
      }
    }
  }

  return result;
};

console.log(tables([57, 5, 10, 2]));
