function waitFor(time: number): Promise<void> {
  setTimeout(() => {
    return;
  }, time);
  return new Promise((resolve) => {
    resolve();
  });
}

export { waitFor };
