module.exports.handler = (event) => {
  console.log(`Received event: ${JSON.stringify(event)}`);

  return 'Hello World!';
};