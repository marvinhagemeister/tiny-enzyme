import { h } from "preact";
import { mount } from "..";

describe("mount", () => {
  it("should remove previous body content", () => {
    const el = document.createElement("section");
    document.body.appendChild(el);

    const res = mount(<div id="root" />);
    expect(document.querySelectorAll("section").length).toEqual(0);
  });

  it("should add body content", () => {
    const res = mount(<div id="root" />);
    expect(document.body.children.length).toEqual(1);
    expect(document.getElementById("root") !== null).toEqual(true);
  });
});

describe("EnzymElement", () => {
  it("should simulate events", () => {
    const spy = jest.fn();
    mount(<div id="root" onClick={spy} />).simulate("click");
    expect(spy.mock.calls.length).toEqual(1);
  });

  it("should find elements by selector", () => {
    const item = mount(
      <div id="root">
        <span>foo</span>
      </div>,
    ).find("span");

    expect(item.items.length).toEqual(1);
  });

  it("should find elements and trigger event", () => {
    const spy = jest.fn();

    const dom = (
      <div id="root">
        <span onClick={spy}>foo</span>
      </div>
    );

    mount(dom)
      .find("span")
      .simulate("click");

    expect(spy.mock.calls.length).toEqual(1);
  });
});
