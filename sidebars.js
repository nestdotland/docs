module.exports = {
  someSidebar: {
    "Nest.land": ["nest/README"],
    "Nest CLI": [
      "cli/README",
      {
        Commands: [
          "cli/commands/help",
          "cli/commands/init",
          "cli/commands/setup",
          "cli/commands/login",
          "cli/commands/logout",
          "cli/commands/switch",
          "cli/commands/publish",
          "cli/commands/sync",
          {
            config: [
              "cli/commands/config/pull",
              "cli/commands/config/push",
              "cli/commands/config/diff",
              "cli/commands/config/status",
            ],
          },
          "cli/commands/upgrade",
        ],
      },
      {
        "Configuration files": [
          "cli/configuration/module.json",
          "cli/configuration/ignore",
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
