const logResponseTime = (req, res, next) => {
  const { reqId } = req;
  const startHrTime = process.hrtime();

  res.on("finish", () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    console.info(`${reqId}:response-time:${elapsedTimeInMs}`);
  });

  next();
};

module.exports = logResponseTime;
