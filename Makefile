install: 
	npm install

start:
	npx babel-node -- 'src/bin/gendiff.js' ./src/before1.json ./src/after1.json 

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test	