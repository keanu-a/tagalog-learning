const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const { GetObjectCommand, S3Client } = require('@aws-sdk/client-s3');

// Creating an Amazon S3 service client object
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
});

module.exports.getAudio = async (req, res) => {
  try {
    const { audioUrl } = req.params;

    s3Client.credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    };

    // Creating parameters for object command
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${audioUrl}.mp3`,
    };

    const getObjectCommand = new GetObjectCommand(params);

    // Sending back a signed audio to the frontend
    const foundAudio = await getSignedUrl(s3Client, getObjectCommand);

    res.status(200).json({ status: 'success', audio: foundAudio });
  } catch (error) {
    res.status(400).json({ status: 'fail', message: error.message });
  }
};
