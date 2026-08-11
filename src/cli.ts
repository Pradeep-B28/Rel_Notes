#!/usr/bin/env node

import { Command } from 'commander';
import dotenv from 'dotenv';
import { getCommitsBetween, getCurrentBranch, getTags } from './git';
import { generateReleaseNotes } from './ai';
import { Tone } from './types';
import fs from 'fs';

dotenv.config();

const program = new Command();

program
  .name('relnotes')
  .description('Generate AI release notes between two Git references')
  .version('1.0.0')
  .argument('[from]', 'Starting tag/branch (default: previous tag)')
  .argument('[to]', 'Ending tag/branch (default: current branch)')
  .option('-t, --tone <tone>', 'Tone of the notes', 'professional')
  .option('-o, --output <file>', 'Output to a file instead of stdout')
  .action(async (fromArg, toArg, options) => {
    try {
      if (!process.env.OPENAI_API_KEY) {
        console.error('❌ OPENAI_API_KEY not set in .env file');
        process.exit(1);
      }

      const tone = options.tone as Tone;
      if (!['professional', 'funny', 'concise'].includes(tone)) {
        console.error('❌ Tone must be one of: professional, funny, concise');
        process.exit(1);
      }

      // Resolve 'from' and 'to'
      let from = fromArg;
      let to = toArg || await getCurrentBranch();

      if (!from) {
        const tags = await getTags();
        if (tags.length < 2) {
          console.error('❌ Not enough tags found. Please specify a starting reference.');
          process.exit(1);
        }
        // Get the second-latest tag
        from = tags[tags.length - 2];
        to = tags[tags.length - 1];
        console.log(`🔍 Auto-detected: comparing ${from} → ${to}`);
      }

      console.log(`📡 Fetching commits between ${from} and ${to}...`);
      const commits = await getCommitsBetween(from, to);

      if (commits.length === 0) {
        console.log('✨ No commits found between these references.');
        return;
      }

      console.log(`📝 Found ${commits.length} commits. Asking GPT to write notes...`);

      const notes = await generateReleaseNotes(commits, tone);

      if (options.output) {
        fs.writeFileSync(options.output, notes);
        console.log(`✅ Release notes written to ${options.output}`);
      } else {
        console.log('\n' + notes);
      }
    } catch (error: any) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  });

program.parse();