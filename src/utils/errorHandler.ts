import { Client, EmbedBuilder, WebhookClient } from "discord.js";

/**
 * Standard error handling module to pipe errors to Sentry and
 * format the error for logging.
 *
 * @param {Client} BOT The bot's Discord instance.
 * @param {string} context A description of where the error occurred.
 * @param {any} error The error object.
 */
export const errorHandler = async (
  BOT: Client,
  context: string,
  error: unknown
): Promise<void> => {
  const err = error as Error;
  const hook = new WebhookClient({ url: process.env.DEBUG_HOOK as string });

  const embed = new EmbedBuilder();
  embed.setTitle(`There was an error in the ${context}`);
  embed.setDescription(err.message.slice(0, 2000));
  embed.addFields([
    {
      name: "Stack",
      value: `\`\`\`${err.stack?.slice(0, 1000) || "no stack"}\`\`\``,
    },
  ]);

  await hook.send({
    embeds: [embed],
    username: "Message Counter",
    avatarURL: "https://cdn.nhcarrigan.com/avatars/nhcarrigan.png",
  });
};
