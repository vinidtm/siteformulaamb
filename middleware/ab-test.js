export default function abTest(req, res, next) {
  const experiment = Math.random();
  const threshold = 0.5; 

  if (experiment < threshold) {
    req.url = '/AmbA';
  } else {
    req.url = '/AmbB';
  }

  return next();
}
