import React from 'react';

const App = () => {
  const [result, setResult] = React.useState('');

  const Settings = {
    1: {
      Big: 273.1,
      Reg: 439.8,
    },
    2: {
      Big: 269.7,
      Reg: 399.1,
    },
    3: {
      Big: 269.7,
      Reg: 331.0,
    },
    4: {
      Big: 259.0,
      Reg: 315.1,
    },
    5: {
      Big: 259.0,
      Reg: 255.0,
    },
    6: {
      Big: 255.0,
      Reg: 255.0,
    },
    0: {
      Big: 3.0,
      Reg: 3.0,
    },
  };

  const setting = 6;
  const probability = Settings[setting];

  const message = (result: string) => {
    if (result === 'Big') {
      return 'BIG Bonus';
    } else if (result === 'Reg') {
      return 'REG Bonus';
    } else {
      return 'ハズレ';
    }
  };

  React.useEffect(() => {
    const b = Math.random() * probability.Big;
    const r = Math.random() * probability.Reg;

    if (0 <= b && b < 1) {
      setResult('Big');
    } else if (0 <= r && r < 1) {
      setResult('Reg');
    }

    console.log(b, r, result);
  });

  return <>{message(result)}</>;
};

export default App;
