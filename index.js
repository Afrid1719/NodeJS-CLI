const { argv } = require('process');
const process = require('process');

console.log('Started...');
console.log(`Architecture: ${process.arch}`); // Architecture

console.log('CLI arguments:'); // Arguments
const args = process.argv;
args.forEach(arg => console.log(arg));

console.log(`argv0: ${process.argv0}`) // 

console.log(`Channel: ${process.channel}`); // Channel

console.log(`Config: `); // Config
Object.entries(process.config).forEach(([key, value]) => console.log(`Key: ${key}, Value: ${value}`));

console.log(`CPU Usage: `); // CPU Usage
Object.entries(process.cpuUsage()).forEach(([key, value]) => console.log(`Key: ${key}, Value: ${value}`));

console.log(`Current working directory: ${process.cwd()}`); // Current Working Directory

process.exitCode = 100;