name: 🐞 Bug report
description: Report an issue with Unify Preset (Preset UI)
labels: [pending triage]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!

  - type: input
    id: version
    attributes:
      label: Unify Preset version
    validations:
      required: true
  - type: textarea
    id: bug-description
    attributes:
      label: Describe the bug
      description: A clear and concise description of what the bug is. If you intend to submit a PR for this issue, tell us in the description. Thanks!
      placeholder: Bug description
    validations:
      required: true
  - type: textarea
    id: reproduction
    attributes:
      label: Reproduction
      description: Please provide a link to [StackBlitz](https://stackblitz.com/fork/github/unify-ui-dev/uno-vuejs-boilerplate) or a github repo that can reproduce the problem you ran into. A [minimal reproduction](https://stackoverflow.com/help/minimal-reproducible-example) is required unless you are absolutely sure that the issue is obvious and the provided information is enough to understand the problem. [Why reproduction is required](https://antfu.me/posts/why-reproductions-are-required).
      placeholder: Reproduction
    validations:
      required: true
  - type: textarea
    id: system-info
    attributes:
      label: System Info
      placeholder: System, Browsers, Framework
    validations:
      required: false
  - type: checkboxes
    id: checkboxes
    attributes:
      label: Validations
      description: Before submitting the issue, please make sure you do the following
      options:
        - label: Read the [Contributing Guidelines](https://github.com/unify-ui-dev/unify-preset/blob/main/CONTRIBUTING.MD).
          required: true
        - label: Check that there isn't [already an issue](https://github.com/unify-ui-dev/unify-preset/issues) that reports the same bug to avoid creating a duplicate.
          required: true
        - label: The provided reproduction is a [minimal reproducible example](https://stackoverflow.com/help/minimal-reproducible-example) of the bug.
          required: true