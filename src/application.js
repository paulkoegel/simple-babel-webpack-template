'use strict';
import add from 'add';
import React from 'react';
import User from 'user';

console.log('React:', React);
console.log('add 2 and 25:', add(2, 25));

let user = new User({ firstName: 'Peter', lastName: 'Parker' });
let container = document.querySelector('#react-container');
container.innerHTML = user.greet();
