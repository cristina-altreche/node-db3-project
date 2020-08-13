module.exports = {
    stepsToBody,
    intToBoolean
}

function intToBoolean(int) {
    return int === 1 ? true : false;
  }

function stepsToBody(step) {
    return {
      ...step,
      completed: intToBoolean(step.completed),
    };
  }