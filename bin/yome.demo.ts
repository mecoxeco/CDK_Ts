#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3BucketStack } from '../lib/s3-bucket.stack';

const app = new cdk.App();

// Creating S3BucketStack
const  s3_bucket_stack = new S3BucketStack(app, 'yomeS3Stack');

// Re-using assets
const bucket = s3_bucket_stack;
