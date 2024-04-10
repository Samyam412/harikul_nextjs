"use server";

import { db } from "@/lib/db";

export const newTodo = async (title: string, content: string) => {
  try {
    await db.todo.create({
      data: {
        title: title,
        content: content,
      },
    });

    return {
      success: "Todo added!",
    };
  } catch (error) {
    console.log(error);
    return {
      error: "An error in adding todo",
    };
  }
};
