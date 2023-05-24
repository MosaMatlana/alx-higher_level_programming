#!/usr/bin/node

function printComment () {
  const myArgvs = process.argv.slice(2);
  if (myArgvs.length === 0) {
    console.log('No argument');
  } else if (myArgvs.length === 1) {
    console.log('Argument found');
  } else {
    console.log('Arguments found');
  }
}
printComment();
