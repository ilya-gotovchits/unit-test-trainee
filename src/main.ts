import * as readline from 'readline/promises';
import { validatePassword } from './passwordValidator';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkPassword(password: string): void {
  console.log('\n' + '='.repeat(50));

  const result = validatePassword(password);
  console.log(`Valid: ${result.isValid ? '✅ Yes' : '❌ No'}`);

  if (!result.isValid) {
    console.log('\nErrors:');
    result.errors.forEach((error) => {
      console.log(`  • ${error}`);
    });
  } else {
    console.log('\n🎉 Great password! All requirements met.');
  }
  
  console.log('='.repeat(50));
}

async function main() {
  console.log('🔐 Password Validator - Interactive Checker');
  console.log('='.repeat(50));

  while (true) {
    const password = await rl.question('\nEnter password to check (or "exit" to quit): ');

    if (password.toLowerCase() === 'exit') {
      console.log('\n👋 Goodbye! Run "npm test" for unit tests.');

      rl.close();

      break;
    }

    if (!password) {
      console.log('❌ Password cannot be empty!');

      continue;
    }

    checkPassword(password);
  }
}

main().catch((error) => {
  console.error('Error:', error);

  process.exit(1);
});

