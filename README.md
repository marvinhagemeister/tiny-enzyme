# Tiny Enzyme

Minimal alternative to [enzyme](https://github.com/airbnb/enzyme) for [preact](https://github.com/developit/preact/).

## Usage

Installation:

```bash
# npm
npm install --save-dev @marvinh/tiny-enzyme

# yarn
yarn add -D @marvinh/tiny-enzyme
```

Example test:

```jsx
import { h } from "preact";

descripe("Example suite", () => {
  it("should test something", () => {
    const spy = jest.fn();

    // Trigger a fake click
    mount(<div onClick={spy} />).simulate("click");

    // Check if our spy was called
    expect(spy.mocks.calls.length).toEqual(1);
  });
});
```

## License

MIT, see [License file](./LICENSE.md).
