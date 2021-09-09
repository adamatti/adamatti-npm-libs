.DEFAULT_GOAL := help

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

clear: 
	@rm -rf node_modules
	@rm -rf packages/cache/node_modules
	@rm -rf packages/logger/node_modules

install:
	@yarn
	@yarn lerna bootstrap

test:
	@yarn test

lint:
	@yarn test

format:
	@yarn format

check: format lint test

full-check: clear install check