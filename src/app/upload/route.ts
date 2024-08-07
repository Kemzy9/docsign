import { createPresignedPost } from '@aws-sdk/s3-presigned-post';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function POST(request: Request) {
  const { filename, contentType } = await request.json();

  try {
    const client = new S3Client({ region: process.env.AWS_REGION });
    const { url, fields } = await createPresignedPost(client, {
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: uuidv4(),
      Conditions: [
        ['content-length-range', 0, 10485760], // up to 10 MB
        ['starts-with', '$Content-Type', contentType],
      ],
      Fields: {
        acl: 'public-read',
        'Content-Type': contentType,
      },
      Expires: 600, // Seconds before the presigned post expires. 3600 by default.
    });

    // Get the signed URL for the uploaded file
    const objectUrl = await getSignedUrl(
      client,
      new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fields.key,
      }),
      { expiresIn: 3600 } // URL expires in 1 hour
    );

    return Response.json({ url, fields, objectUrl });
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
}