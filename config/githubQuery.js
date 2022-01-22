exports.githubApiQuery = `
query {
    repository(owner: "jolbol1", name: "jolbol1") {
        object(expression: "main:README.md") {
            ... on Blob {
             text
            }
          }
      }
  }
`

