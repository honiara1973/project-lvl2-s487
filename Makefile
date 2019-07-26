install: 
	npm install

start:
	npx babel-node -- 'src/bin/gendiff.js' ../Tests/nested/before.json ../Tests/nested/after.json

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test	