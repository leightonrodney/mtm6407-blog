module.exports = ({env}) => ({
'strapi-neon-tech-db-branches': {
    enabled: true,
    config: {
      neonApiKey: env('NEON_API_KEY'),
      neonProjectName: env('NEON_PROJECT_NAME'),
      neonRole: env('NEON_ROLE'),
      gitBranch: env('NEON_GIT_BRANCH')
    }
  },
});
