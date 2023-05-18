export default function abTest(req, res, next) {
  let experiment;

  if (req.cookies['abTest']) {
    experiment = req.cookies['abTest'];
  } else {
    experiment = Math.random() < 0.5 ? 'AmbA' : 'AmbB';
    res.cookie('abTest', experiment, { maxAge: 900000, httpOnly: true });
  }

  req.url = `/${experiment}`;

  return next();
}
