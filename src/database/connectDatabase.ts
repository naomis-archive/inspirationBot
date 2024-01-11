import { Client } from "discord.js";
import { connect } from "mongoose";

import { errorHandler } from "../utils/errorHandler";
import { logHandler } from "../utils/logHandler";

/**
 * Module to instantiate the database connection.
 *
 * @param {Client} BOT The bot's Discord instance.
 */
export const connectDatabase = async (BOT: Client): Promise<void> => {
  try {
    await connect(process.env.MONGO_URI as string);
    logHandler.log("debug", "Connected to database.");
  } catch (err) {
    await errorHandler(BOT, "connectDatabase", err);
  }
};
