function narcissistic(value) {
    return (String(value).split("").reduce((acc, el) => {return acc + Number(el) ** String(value).length}, 0)) === value ? true : false;
  }

  console.log(narcissistic(125));
  console.log(narcissistic(153));
  narcissistic(22);