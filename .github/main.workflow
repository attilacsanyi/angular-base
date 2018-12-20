workflow "Angular Base" {
  on = "push"
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
  uses = "actions/npm@e7aaefe"
  args = "lint"
  needs = ["Installing"]
}

action "Testing" {
  uses = "actions/npm@e7aaefe"
  needs = ["Installing"]
  args = "test"
}

action "Building" {
  uses = "actions/npm@e7aaefe"
  needs = ["Linting", "Testing"]
  args = "build-prod"
}
