# Contributing
This repository encourages all users to contribute. Before starting, please read the code of [Code of Conduct](./CODE_OF_CONDUCT.md).

## What can I do?
For things to contribute, check out the issues or [TODO.md](./TODO.md).

## Submitting Pull Requests
Submit pull requests to the master branch. There is not a required format for pull requests, but make sure to clearly describe what issues you are fixing or features you are adding. Always unit test your changed code, and make sure it follows the style guide.

### Getting started
```
git clone URL_OF_YOUR_FORK
cd BillScraper.js/
npm install
```

### Style guide (WIP)
* Brackets on the same line
* Semicolons

### Running the tests
```
npm install
npm test
```

### Updating the docs
Documentation is stored in the `out` folder on the gh-pages branch.
```
git checkout gh-pages
git merge master
npm run docs
git add out/
git commit -m "Updated docs"
git push origin gh-pages
```
