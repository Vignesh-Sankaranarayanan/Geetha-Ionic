import { QuoteDetails } from "./quotedetails";

export class Quotes {
  constructor(
    public category: string,
    public icon: string,
    public quoteDetails: QuoteDetails[]) {}
}
