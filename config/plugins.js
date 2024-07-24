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
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
