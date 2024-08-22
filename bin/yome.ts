#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { YomeStack } from '../lib/yome-stack';

const app = new cdk.App();
new YomeStack(app, 'YomeStack');
