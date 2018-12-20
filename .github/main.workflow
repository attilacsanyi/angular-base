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
  args = "run lint"
  needs = ["Installing"]
}

action "Testing" {
  uses = "actions/npm@e7aaefe"
  needs = ["Installing"]
  args = "run test"
}

action "Building" {
  uses = "actions/npm@e7aaefe"
  needs = ["Linting", "Testing"]
  args = "run build-prod"
}
