import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniqid from "uniqid";

export async function POST(req) {
  const formData = await req.formData();

  if (formData.has("file")) {
    const file = formData.get("file");

    const s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const randomId = uniqid();
    const ext = file.name.split(".").pop();
    const newFilename = `${randomId}.${ext}`;
    const bucketName = process.env.AWS_BUCKET_NAME;

    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }

    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: newFilename,
        Body: Buffer.concat(chunks),
        ContentType: file.type,
      })
    );

    const link = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${newFilename}`;

    return Response.json({ url: link });
  }

  return Response.json({ error: "No file uploaded" }, { status: 400 });
}
