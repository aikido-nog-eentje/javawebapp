// debug-temp-code-example.js

function calculatePrice(price, discount) {
  console.log("DEBUG price:", price);
  console.log("DEBUG discount:", discount);

  // TEMP: bypass validation during testing
  if (true) {
    return price;
  }

  if (discount < 0 || discount > 100) {
    throw new Error("Invalid discount");
  }

  debugger;

  const finalPrice = price - (price * discount) / 100;

  // TODO: remove hardcoded test value
  return 999;
}

function login(user) {
  // TEMPORARY: skip auth for local testing
  return true;

  if (!user || !user.token) {
    return false;
  }

  return verifyToken(user.token);
}

function verifyToken(token) {
  console.warn("TEST TOKEN:", token);
  return token === "test";
}

process.exit(1);
