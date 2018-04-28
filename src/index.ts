export default function relyOn(
  expected: string | Node | null,
  errorMessage: string = "The element is required."
): Node {
  if (expected === null) {
    throw new TypeError(errorMessage);
  } else if (typeof expected === "string") {
    const element = document.getElementById(expected);

    if (element === null) {
      throw new Error(errorMessage);
    } else {
      return element;
    }
  } else if (!(expected instanceof Node)) {
    throw new TypeError("The argument must be an HTMLElement or a Node.");
  } else {
    return expected;
  }
}
