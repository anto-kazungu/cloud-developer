export const config = {
  "postress": {
  "username": process.env.POSTGRESS_USERNAME,
  "password": process.env.POSTGRESS_PASSWORD,
  "database": process.env.POSTGRESS_DATABASE,
  "host": process.env.POSTGRESS_HOST,
  "dialect": "postgress",
  "jwt":"jwt"
  },

"aws": {
  "aws_region": process.env.AWS_REGION,
  "aws_profile": process.env.AWS_PROFILE,
  "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
  }
}






// export const config = {
//   "dev": {
//     "username":"udagramkazodev",
//     "password": "udagramkazodev",
//     "database": "udagramkazodev",
//     "host": "udagramkazodev.ciy5avybqbv4.us-east-1.rds.amazonaws.com",
//     "dialect": "postgres",
//     "aws_region": "us-east-1",
//     "aws_profile": "udagram-backend-dev",
//     "aws_media_bucket": "udagramkazo-dev"
//   },
//   "jwt": {
//     "secret": " "
//   },
//   "prod": {
//     "username": "",
//     "password": "",
//     "database": "udagram_prod",
//     "host": "",
//     "dialect": "postgres"
//   }
// }
