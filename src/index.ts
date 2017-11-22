export function relyOn(
  expectedNode: Node | null,
  errorMessage: string = "The element is required."
): Node {
  if (expectedNode === null) {
    throw new TypeError(errorMessage);
  } else if (!(expectedNode instanceof Node)) {
    throw new TypeError("The argument must be an HTMLElement or a Node.");
  } else {
    return expectedNode;
  }
}
