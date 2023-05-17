export default function abTest(req, res, next) {
  const experiment = Math.random() < 0.5 ? 'A' : 'B';

  if (experiment === 'A') {
    req.url = '/AmbA';
  } else {
    req.url = '/AmbB';
  }

  return next();
}
