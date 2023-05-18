export default function abTest(req, res, next) {
  const experiment = Math.random() < 0.5 ? 'AmbA' : 'AmbB';

  req.url = `/${experiment}`;

  return next();
}
