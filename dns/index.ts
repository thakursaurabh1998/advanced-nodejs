import dns from 'dns';

export default () => {
  // resolves on OS level
  const url = 'saurabhthakur.dev';
  dns.lookup(url, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Lookup result: ', result);
  });

  dns.resolve4(url, (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Resolve IPV4 result: ', result);
  });

  dns.resolve(url, 'MX', (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Resolve MX records result: ', result);
  });

  dns.reverse('13.35.131.128', (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Reverse search result: ', result);
  });
};
