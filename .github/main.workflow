workflow "New workflow" {
  on = "push"
  resolves = ["docker://circleci/node:11.4.0"]
}

action "Installing dependencies" {
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "docker://circleci/node:11.4.0" {
  uses = "docker://circleci/node:11.4.0"
  needs = ["Installing dependencies"]
  args = "yarn"
}
