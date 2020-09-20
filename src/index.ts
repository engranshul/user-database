import { User } from './models/User';

const user = new User({ name: 'jack', age: 20 });
console.log(user);
user.set({ name: 'joe' });
console.log(user);
console.log(user.get('age'));
