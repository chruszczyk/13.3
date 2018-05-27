
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function () {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {

			case '/exit':
				process.stdout.write('Quiting app!\n');
				process.exit();

			case '/node':
				process.stdout.write(process.versions.node + '\n')
				break

			case '/lang':
				process.stdout.write(process.env.LANG + '\n');
				break;

			default:
				process.stdout.write('Wrong instruction!\n');
		}
	}
});