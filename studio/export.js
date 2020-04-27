const exportDataset = require('@sanity/export')
const sanityClient = require('@sanity/client')


const client = sanityClient({
  projectId: 'rgpkjchc',
  dataset: 'production',
  token: 'sktgybueTcOUYCbjOBW4BgV9N9HMLxxHh1bPvM4G9tBquYG5L9biJk2az73tWOktmkOFPsGAp5jOFXdTSzFFlmH2EA18wZL8mq8QwftDnkNLr52kKCl9QzbcIry6YK5C2rtsuA3fx9KLxHDjm4B41nvTlPLfaPbQoAD0XFbtCi1r8wIvSWYJ', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
});

exportDataset({
  // Instance of @sanity/client configured to correct project ID and dataset
  client: client,

  // Name of dataset to export
  dataset: 'production',

  // Path to write tar.gz-archive file to, or `-` for stdout
  outputPath: './dataset.production.tar.gz',

  // Whether or not to export assets. Note that this operation is currently slightly lossy;
  // metadata stored on the asset document itself (original filename, for instance) might be lost
  // Default: `true`
  assets: false,

  // Exports documents only, without downloading or rewriting asset references
  // Default: `false`
  raw: true,

  // Whether or not to export drafts
  // Default: `true`
  drafts: true,

  // Export only given document types (`_type`)
  // Optional, default: all types
  // types: ['products', 'shops'],

  // Run 12 concurrent asset downloads
  assetConcurrency: 12
})
