// domain/.netlify/functions/hello

const items = [
  { id: 1, name: "john" },
  { id: 2, name: "susan" },
];
exports.hendler = async function (event, context) {
  return {
    statusCode: 200,
    body: "Hello World",
  };
};
