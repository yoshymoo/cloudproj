import { defineData } from "@aws-amplify/backend";

export const data = defineData({
  models: {
    Task: {
      fields: {
        id: "ID",
        userId: "String",
        taskName: "String",
        isCompleted: "Boolean",
        timestamp: "AWSDateTime",
      }
    }
  },
  authorization: {
    // Ensures only signed-in users can read/write their tasks
    defaultAuthorization: {
      provider: "userPool",
      allow: "owner",
    },
  },
});
