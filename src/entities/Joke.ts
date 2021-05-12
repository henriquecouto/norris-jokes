export default class Joke {
  id!: number;
  joke!: string;
  categories!: Array<string>;

  constructor(props: Joke) {
    Object.assign(this, props);
  }
}
