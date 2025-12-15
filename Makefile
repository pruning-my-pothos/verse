.PHONY: install start build serve deploy publish push clean

install:
	npm install

start:
	npm start

build:
	npm run build

serve:
	npm run serve

# Manual deploy to GitHub Pages (uses gh-pages branch). CI workflow handles normal publishes.
deploy: build
	npx gh-pages -d build -b gh-pages

# Same as deploy, kept for convenience.
publish: deploy

# Push the current branch to origin. Assumes commits are already created.
push:
	git push origin HEAD

clean:
	rm -rf build node_modules .docusaurus
