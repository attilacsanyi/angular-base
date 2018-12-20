workflow "Angular Base" {
  on = "push"
  resolves = ["yarn install", "Linting"]
}

action "Installing dependencies" {
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "yarn install" {
  uses = "actions/docker/cli@76ff57a"
  needs = ["Installing dependencies"]
  args = "yarn"
  runs = "docker pull circleci/node:11.4.0"
}

action "Linting" {
  uses = "actions/npm@e7aaefe"
  needs = ["Installing dependencies"]
  args = "lint"
}
