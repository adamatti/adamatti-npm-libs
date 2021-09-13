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

test-pre-commit:
	./.git/hooks/pre-commit

codeship-encrypt: ## encrypt build_args (codeship)
	jet encrypt codeship/build_args codeship/build_args.encrypted

codeship-test: ## Test codeship steps
	jet steps --push

docker-build: 
	@docker build -f codeship/docker/builder/Dockerfile \
		-t adamatti-libs:latest \
		--build-arg NPM_REGISTRY_URL="${NPM_REGISTRY_URL}" \
		--build-arg NPM_AUTH_TOKEN="${NPM_AUTH_TOKEN}" \
		--build-arg GITHUB_TOKEN="${GITHUB_TOKEN}" \
		.

docker-sh: docker-build ## Build docker, sh inside it
	docker run -it adamatti-libs sh