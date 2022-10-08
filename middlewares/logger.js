/**
 * @description Logs the request method and url with the response status code and time taken to process the request with agent and ip address and saves it to a file
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {undefined}
 * 
 * @example 
 *  - GET /api/v1/users 200 1.234 ms - 1234 
 */

const fs = require('fs');
 
const logger = (req, res, next) => {
  const { method, url , ip} = req;
  const { statusCode } = res;
  const { 'user-agent': agent, } = req.headers;
  const start = Date.now();
  res.on('finish', () => {
    const time = Date.now() - start;
    console.log(`\x1b[37m\x1b[44m${method}\x1b[0m \x1b[32m${url}\x1b[0m \x1b[33m${statusCode}\x1b[0m \x1b[36m${time}ms\x1b[0m \x1b[35m${agent}\x1b[0m \x1b[34m${ip}\x1b[0m`);

    const log = `${method} ${url} ${statusCode} ${time}ms ${agent} ${req.ip} ${new Date()} \r `;

    fs.appendFile('logs.txt', log, (err) => {
      if (err) throw err;
    });

  });
  next();
}

module.exports = logger;