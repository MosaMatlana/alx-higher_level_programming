#!/usr/bin/node

function printComment () {
  const myArgvs = process.argv.length - 2;
  if (myArgvs === 0) {
    console.log('No argumets');
  } else if (myArgvs === 1) {
    console.log('Argument found');
  } else {
    console.log('Arguments found');
  }
}
printComment();
