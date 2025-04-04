import { defineData } from '@aws-amplify/backend';

export const data = defineData({
  models: {
    Task: {
      fields: {
        id: {
          type: 'ID',
          required: true
        },
        userID: {
          type: 'String',
          required: true
        },
        taskName: {
          type: 'String',
          required: true
        },
        isCompleted: {
          type: 'Boolean',
          required: true
        },
        timestamp: {
          type: 'AWSDateTime',
          required: true
        }
      }
    }
  }
});
