import { client } from '../amplify/configure';

export async function createTask(taskName: string, userID: string) {
  return client.models.Task.create({
    taskName,
    userID,
    isCompleted: false,
    timestamp: new Date().toISOString()
  });
}

export async function getTasks() {
  const { data } = await client.models.Task.list();
  return data;
}
