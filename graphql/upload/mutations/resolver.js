import cloudinary from 'cloudinary';

const mutations = {
  upload: async (_, { photo }) => {
    cloudinary.config({
      secure: true,
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    try {
      const result = await cloudinary.v2.uploader.upload(photo, {
        allowed_formats: ['jpg', 'png'],
        public_id: '',
        folder: 'folder_name',
      });

      return `Successful-photo URL: ${result.url}`;
    } catch (err) {
      return `Image could not be uploaded: ${err.message}`;
    }
  },
};

export default mutations;
