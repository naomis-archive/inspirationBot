import { EmbedBuilder } from "discord.js";

import { QuoteList } from "../config/QuoteList";

/**
 * Module to fetch a random quote and generate a Discord embed.
 *
 * @returns {EmbedBuilder} A Discord embed with a random quote.
 */
export const generateQuoteEmbed = (): EmbedBuilder => {
  const randomQuote = QuoteList[Math.floor(Math.random() * QuoteList.length)];
  const embed = new EmbedBuilder();
  embed.setTitle("Daily Inspiration!");
  embed.setDescription(randomQuote.text.replace(/\\n/g, "\n"));
  embed.addFields([{ name: "Author", value: randomQuote.author }]);
  embed.setFooter({
    text: "Join our server: https://chat.nhcarrigan.com",
    iconURL: "https://cdn.nhcarrigan.com/profile.png",
  });
  return embed;
};
