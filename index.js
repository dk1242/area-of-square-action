const core = require('@actions/core');
const github = require('@actions/github');

try {

  const side = core.getInput('side');
  let area = side*side;
  console.log(`The area of the Square is ${area}!`);
  core.setOutput("area", area);

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}