function percentageOfWorld1(pop) {
    return (pop / 7900) * 100;
  }
  
  const populationPercentages = (arr) => {
    const percentages = [];
    for (let i = 0; i < arr.length; i++) {
      percentages.push(percentageOfWorld1(arr[i]).toPrecision(3));
    }
    return percentages;
  };
  
  const populations = [500, 70, 20, 9];
  
  console.log(populationPercentages(populations));