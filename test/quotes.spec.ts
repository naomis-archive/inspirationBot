import { assert } from "chai";
import { compareTwoStrings } from "string-similarity";

import { QuoteList } from "../src/config/QuoteList";

suite("Quote List", () => {
  QuoteList.forEach((quote, index) => {
    if (QuoteList.length <= index + 1) {
      return;
    }
    const remaining = QuoteList.slice(index + 1);
    test(`This quote should be unique: ${quote.text} - ${quote.author}`, () => {
      for (const remain of remaining) {
        const similarity = compareTwoStrings(quote.text, remain.text);
        assert.isBelow(
          similarity,
          0.8,
          `${quote.text} is similar to ${remain.text}`
        );
      }
    });
  });
});
