module.exports = {
  someSidebar: {
    "Nest.land": ["nest/README"],
    "Nest CLI": ["cli/README",
      {
        Commands: [
          "cli/commands/README",
          "cli/commands/publish"
        ]
      }
    ],
    Eggs: [
      "eggs/README",
      "eggs/installation",
      "eggs/linking-your-api-key",
      "eggs/configuration",
      "eggs/publishing-a-module",
      "eggs/dependency-tree",
      "eggs/updating-all-of-your-dependencies",
      "eggs/installing-a-script-as-an-executable",
      "eggs/upgrade-eggs",
    ],
    API: ["api/README", "api/mutations", "api/queries"],
  },
};
