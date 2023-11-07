import AWS from 'aws-sdk'
AWS.config.update({
	accessKeyId: process.env.S3_ACCESSKEY,
	secretAccessKey: process.env.S3_SECRET,
	region: 'hn',
	endpoint: 'https://s3.cloudfly.vn',
	apiVersions: {
		s3: '2006-03-01'
	},
	logger: process.stdout
})

const s3 = new AWS.S3()

export default s3
