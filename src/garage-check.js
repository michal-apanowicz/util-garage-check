const fetch = require("node-fetch");

async function checkGarage() {
  try {
    const url =
      "https://fareharbor.com/api/v1/persistence/2e80fe21-d322-4625-a67c-58b121e7d2c9/";

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    const json = await response.json();

    console.log(new Date(), json);

    if (json.persistent_stores && json.persistent_stores.length > 0) {
      console.log("🚨 Alert: Garage spaces detected!");
      // In GitHub Actions, we can use different notification methods
      // For now, we'll just log and potentially fail the action
      process.exit(1); // This will mark the action as failed, which can trigger notifications
    } else {
      console.log("✅ No garage spaces available");
    }
  } catch (error) {
    console.error("Error checking garage:", error);
    process.exit(1);
  }
}

checkGarage();
