const spinner = '|/-|\\'
let delay = 100;

for (let line of spinner) {
  delay += 200;
  setTimeout(() => {process.stdout.write('\r' + line)}, delay);
};

setTimeout(() => {process.stdout.write('\n')}, delay);