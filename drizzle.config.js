/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://URLToVideo_owner:o5THNGjVRLb3@ep-silent-dust-a5h0agfx.us-east-2.aws.neon.tech/URLToVideo?sslmode=require',
  }
};