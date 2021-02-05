module.exports = {
  someSidebar: {
    "Nest.land": ["nest/README"],
    "Nest CLI": [
      "cli/README",
      {
        Commands: [
          "cli/commands/help",
          "cli/commands/init",
          "cli/commands/login",
          "cli/commands/logout",
          "cli/commands/publish",
          "cli/commands/setup",
          "cli/commands/switch",
          "cli/commands/sync",
          "cli/commands/upgrade",
        ],
      },
      {
        "Configuration files": [
          "cli/configuration/module.json",
          "cli/configuration/ignore",
          "cli/configuration/data.json",
          "cli/configuration/users.json",
        ],
      },
      "cli/faq",
      "cli/cicd",
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
