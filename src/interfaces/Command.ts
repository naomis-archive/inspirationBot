import {
  ChatInputCommandInteraction,
  Client,
  SlashCommandBuilder,
} from "discord.js";

export interface Command {
  data: Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;
  run: (interaction: ChatInputCommandInteraction, BOT: Client) => Promise<void>;
}
