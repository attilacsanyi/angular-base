workflow "Angular Base" {
  on       = "push"

  resolves = [
    "Testing",
    "Building",
  ]
}

action "Installing" {
  uses = "actions/npm@e7aaefe"
  args = "install"
}

action "Linting" {
  uses  = "actions/npm@e7aaefe"
  args  = "npm run ci-lint"

  needs = [
    "Installing"
  ]
}

action "Testing" {
  uses  = "actions/npm@e7aaefe"
  args  = "npm run ci-test"

  needs = [
    "Installing"
  ]
}

action "Building" {
  uses  = "actions/npm@e7aaefe"
  args  = "npm run build-prod"

  needs = [
    "Linting",
    "Testing"
  ]
}
